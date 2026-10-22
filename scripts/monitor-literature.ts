import postgres from "postgres";
import { createHash } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { substances, tags } from "../src/lib/content";
import {
  buildEuropePmcQuery,
  canonicalPaperId,
  deduplicatePapers,
  europePmcPaper,
  extractQuotedEvidence,
  validateSuggestion,
  type LiteraturePaper,
  type SuggestionDraft,
  type SuggestionType,
  type WatchTarget,
} from "../src/lib/literature-monitor";

type EuropePmcResponse = { resultList?: { result?: Record<string, unknown>[] } };
type LlmResult = { suggestions?: Array<Partial<SuggestionDraft> & { confidence?: number }> };

const args = new Set(process.argv.slice(2));
const value = (name: string, fallback?: string) => {
  const prefix = `--${name}=`;
  const item = process.argv.find((arg) => arg.startsWith(prefix));
  return item ? item.slice(prefix.length) : fallback;
};
const since = value("since", new Date(Date.now() - 7 * 86_400_000).toISOString().slice(0, 10))!;
const limit = Number(value("limit", "50"));
const maxSubstances = Number(value("max-substances", String(substances.length)));
const spool = path.resolve(value("spool", process.env.BHWIKI_LITERATURE_SPOOL ?? "/var/lib/bhwiki/literature")!);
const noLlm = args.has("--no-llm");
const baseUrl = process.env.BHWIKI_LLM_BASE_URL?.replace(/\/$/, "");
const apiKey = process.env.BHWIKI_LLM_API_KEY;
const model = process.env.BHWIKI_LLM_MODEL ?? "configured-model";
if (!noLlm && !baseUrl) throw new Error("Set BHWIKI_LLM_BASE_URL and BHWIKI_LLM_API_KEY, or pass --no-llm explicitly.");
if (!Number.isInteger(limit) || limit < 1 || limit > 100) throw new Error("--limit must be an integer from 1 to 100");
if (!Number.isInteger(maxSubstances) || maxSubstances < 1) throw new Error("--max-substances must be positive");
if (!/^\d{4}-\d{2}-\d{2}$/.test(since)) throw new Error("--since must be YYYY-MM-DD");

const tagLabels = new Map(tags.map((tag) => [tag.id, tag.label]));
const targets: WatchTarget[] = substances.slice(0, maxSubstances).map((substance) => ({
  slug: substance.slug,
  name: substance.name,
  aliases: substance.aliases,
  tags: substance.tags,
}));
const runId = `literature-${new Date().toISOString().replace(/[-:.TZ]/g, "").slice(0, 14)}`;

async function fetchEuropePmc(query: string): Promise<Record<string, unknown>[]> {
  const endpoint = new URL("https://www.ebi.ac.uk/europepmc/webservices/rest/search");
  endpoint.searchParams.set("query", query);
  endpoint.searchParams.set("format", "json");
  endpoint.searchParams.set("resultType", "core");
  endpoint.searchParams.set("pageSize", String(limit));
  const response = await fetch(endpoint, { headers: { accept: "application/json", "user-agent": "BHWiki-literature-monitor/0.1" } });
  if (!response.ok) throw new Error(`Europe PMC HTTP ${response.status}`);
  const body = await response.json() as EuropePmcResponse;
  return body.resultList?.result ?? [];
}

function termMatches(target: WatchTarget, result: Record<string, unknown>): string[] {
  const text = `${result.title ?? ""} ${result.abstractText ?? result.abstract ?? ""}`.toLocaleLowerCase();
  const terms = [target.name, ...target.aliases, ...target.tags, ...target.tags.map((tag) => tagLabels.get(tag) ?? "")];
  return [...new Set(terms.filter((term) => term.length >= 2 && text.includes(term.toLocaleLowerCase())))];
}

async function callLlm(paper: LiteraturePaper): Promise<LlmResult> {
  const prompt = [
    "You are an evidence triage assistant for an editorial research wiki.",
    "Use ONLY the title and abstract below. Do not invent results, doses, populations, or certainty.",
    "Return JSON: {suggestions:[{substanceSlug,suggestionType,payload,rationale,evidenceQuotes,confidence}]}.",
    "suggestionType must be one of new-reference, new-outcome, new-effect, new-claim, new-caution, ignore.",
    "Every evidenceQuotes item must be a verbatim contiguous span from the abstract; use [] when unsupported.",
    "If the abstract is insufficient, propose new-reference or ignore and set rationale to request full-text review.",
    `Matched substances: ${paper.matchedSubstances.join(", ")}`,
    `Title: ${paper.title}`,
    `Abstract: ${paper.abstract || "(no abstract)"}`,
  ].join("\n");
  const response = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: { "content-type": "application/json", ...(apiKey ? { authorization: `Bearer ${apiKey}` } : {}) },
    body: JSON.stringify({ model, temperature: 0, messages: [{ role: "user", content: prompt }], response_format: { type: "json_object" } }),
  });
  if (!response.ok) throw new Error(`LLM HTTP ${response.status}`);
  const body = await response.json() as { choices?: Array<{ message?: { content?: string } }> };
  const content = body.choices?.[0]?.message?.content ?? "{}";
  const json = content.replace(/^```json\s*/i, "").replace(/```\s*$/i, "").trim();
  return JSON.parse(json) as LlmResult;
}

function suggestionId(paperId: string, suggestion: SuggestionDraft): string {
  return `suggestion:${createHash("sha256").update(JSON.stringify([paperId, suggestion.substanceSlug, suggestion.suggestionType, suggestion.payload, suggestion.rationale])).digest("hex").slice(0, 32)}`;
}

async function saveSpool(papers: LiteraturePaper[], suggestions: Array<{ id: string; paperId: string; suggestion: SuggestionDraft; model: string }>): Promise<void> {
  await mkdir(path.join(spool, "papers"), { recursive: true });
  await mkdir(path.join(spool, "suggestions"), { recursive: true });
  for (const paper of papers) await writeFile(path.join(spool, "papers", `${paper.id.replaceAll(":", "_")}.json`), `${JSON.stringify({ ...paper, status: "discovered", runId }, null, 2)}\n`);
  for (const item of suggestions) await writeFile(path.join(spool, "suggestions", `${item.id.replaceAll(":", "_")}.json`), `${JSON.stringify(item, null, 2)}\n`);
  await writeFile(path.join(spool, `run-${runId}.json`), `${JSON.stringify({ runId, since, papers: papers.length, suggestions: suggestions.length, createdAt: new Date().toISOString() }, null, 2)}\n`);
}

async function saveDatabase(papers: LiteraturePaper[], suggestions: Array<{ id: string; paperId: string; suggestion: SuggestionDraft; model: string }>): Promise<void> {
  const connection = process.env.BHWIKI_ADMIN_DATABASE_URL;
  if (!connection) return saveSpool(papers, suggestions);
  const sql = postgres(connection, { max: 1, prepare: false, connect_timeout: 5, onnotice: () => {} });
  try {
    await sql.begin(async (tx) => {
      await tx`SET LOCAL ROLE bhwiki_owner`;
      await tx`INSERT INTO bhwiki.literature_runs (id, since_date, source, status)
        VALUES (${runId}, ${since}, 'europepmc', 'running') ON CONFLICT (id) DO NOTHING`;
      for (const paper of papers) {
        await tx`INSERT INTO bhwiki.literature_papers
          (id, title, abstract, url, doi, pmid, pmcid, published_on, journal, authors, source_kind, matched_substances, matched_terms, raw, status, last_seen_at)
          VALUES (${canonicalPaperId(paper)}, ${paper.title}, ${paper.abstract}, ${paper.url}, ${paper.doi}, ${paper.pmid}, ${paper.pmcid}, ${paper.publishedOn}, ${paper.journal}, ${JSON.stringify(paper.authors)}::jsonb, ${paper.sourceKind}, ${JSON.stringify(paper.matchedSubstances)}::jsonb, ${JSON.stringify(paper.matchedTerms)}::jsonb, ${JSON.stringify(paper.raw)}::jsonb, 'discovered', now())
          ON CONFLICT DO NOTHING`;
        await tx`UPDATE bhwiki.literature_papers SET title=${paper.title}, abstract=${paper.abstract}, url=${paper.url}, doi=coalesce(doi, ${paper.doi}), pmid=coalesce(pmid, ${paper.pmid}), pmcid=coalesce(pmcid, ${paper.pmcid}), published_on=coalesce(published_on, ${paper.publishedOn}), journal=${paper.journal}, authors=${JSON.stringify(paper.authors)}::jsonb, matched_substances=${JSON.stringify(paper.matchedSubstances)}::jsonb, matched_terms=${JSON.stringify(paper.matchedTerms)}::jsonb, raw=${JSON.stringify(paper.raw)}::jsonb, last_seen_at=now()
          WHERE id=${canonicalPaperId(paper)} OR (${paper.pmid}::text IS NOT NULL AND pmid=${paper.pmid}) OR (${paper.doi}::text IS NOT NULL AND doi=${paper.doi})`;
      }
      for (const item of suggestions) {
        await tx`INSERT INTO bhwiki.literature_suggestions
          (id, paper_id, substance_slug, suggestion_type, payload, rationale, evidence_quotes, llm_model, llm_confidence, status)
          VALUES (${item.id}, ${item.paperId}, ${item.suggestion.substanceSlug}, ${item.suggestion.suggestionType}, ${JSON.stringify(item.suggestion.payload)}::jsonb, ${item.suggestion.rationale}, ${JSON.stringify(item.suggestion.evidenceQuotes)}::jsonb, ${item.model}, ${item.suggestion.confidence ?? null}, 'proposed')
          ON CONFLICT (id) DO NOTHING`;
      }
      await tx`UPDATE bhwiki.literature_runs SET status='completed', papers_seen=${papers.length}, papers_new=${papers.length}, suggestions_created=${suggestions.length}, finished_at=now() WHERE id=${runId}`;
    });
  } finally {
    await sql.end({ timeout: 2 });
  }
}

async function main(): Promise<void> {
  const fetched: LiteraturePaper[] = [];
  for (const target of targets) {
    const query = buildEuropePmcQuery(target, tagLabels, since);
    const results = await fetchEuropePmc(query);
    for (const result of results) {
      const matchedTerms = termMatches(target, result);
      if (!matchedTerms.length) continue;
      fetched.push(europePmcPaper(result, target, matchedTerms));
    }
    console.log(`${target.slug}: ${results.length} results`);
  }
  const papers = deduplicatePapers(fetched);
  const suggestions: Array<{ id: string; paperId: string; suggestion: SuggestionDraft; model: string }> = [];
  if (!noLlm) {
    for (const paper of papers) {
      if (!paper.abstract) continue;
      try {
        const output = await callLlm(paper);
        for (const raw of output.suggestions ?? []) {
          const suggestion: SuggestionDraft = {
            status: "proposed",
            suggestionType: raw.suggestionType as SuggestionType,
            substanceSlug: String(raw.substanceSlug ?? paper.matchedSubstances[0]),
            payload: raw.payload ?? {},
            rationale: String(raw.rationale ?? ""),
            evidenceQuotes: extractQuotedEvidence(Array.isArray(raw.evidenceQuotes) ? raw.evidenceQuotes.map(String) : [], paper.abstract),
            abstract: paper.abstract,
            confidence: typeof raw.confidence === "number" ? raw.confidence : undefined,
          };
          validateSuggestion(suggestion);
          suggestions.push({ id: suggestionId(paper.id, suggestion), paperId: paper.id, suggestion, model });
        }
      } catch (error) {
        console.error(`LLM triage failed for ${paper.id}: ${error instanceof Error ? error.message : String(error)}`);
      }
    }
  }
  await saveDatabase(papers, suggestions);
  console.log(JSON.stringify({ runId, since, targets: targets.length, papers: papers.length, suggestions: suggestions.length, destination: process.env.BHWIKI_ADMIN_DATABASE_URL ? "database" : spool, llm: !noLlm }));
}

main().catch((error) => {
  console.error(error instanceof Error ? error.stack ?? error.message : String(error));
  process.exitCode = 1;
});
