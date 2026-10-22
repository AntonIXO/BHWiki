import { createHash } from "node:crypto";

export type WatchTarget = {
  slug: string;
  name: string;
  aliases: string[];
  tags: string[];
};

export type LiteraturePaper = {
  id: string;
  title: string;
  abstract: string;
  url: string;
  doi: string | null;
  pmid: string | null;
  pmcid: string | null;
  publishedOn: string | null;
  journal: string | null;
  authors: string[];
  sourceKind: string;
  matchedSubstances: string[];
  matchedTerms: string[];
  raw: Record<string, unknown>;
};

export type SuggestionStatus = "proposed" | "approved" | "rejected" | "applied" | "error";
export type SuggestionType = "new-reference" | "new-outcome" | "new-effect" | "new-claim" | "new-caution" | "ignore";

export type SuggestionDraft = {
  status: SuggestionStatus;
  suggestionType: SuggestionType;
  substanceSlug: string;
  payload: Record<string, unknown>;
  rationale: string;
  evidenceQuotes: string[];
  abstract: string;
  confidence?: number;
};

function normalizeSpace(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function escapeTerm(value: string): string {
  return `"${normalizeSpace(value).toLocaleLowerCase().replaceAll('"', "\\\"")}"`;
}

function uniqueTerms(values: string[]): string[] {
  return [...new Set(values.map(normalizeSpace).filter((value) => value.length >= 2))];
}

/** Build a conservative TITLE_ABS query; no generic tag is queried without a substance. */
export function buildEuropePmcQuery(target: WatchTarget, tagLabels: Map<string, string>, since: string): string {
  const substanceTerms = uniqueTerms([target.name, ...target.aliases]);
  const tagTerms = uniqueTerms(target.tags.flatMap((tag) => [tag, tagLabels.get(tag) ?? ""]));
  const substances = substanceTerms.map(escapeTerm).join(" OR ");
  const tags = tagTerms.length ? ` AND TITLE_ABS:(${tagTerms.map(escapeTerm).join(" OR ")})` : "";
  return `TITLE_ABS:(${substances})${tags} AND FIRST_PDATE:[${since} TO *]`;
}

export function canonicalPaperId(paper: Pick<LiteraturePaper, "pmid" | "doi" | "title" | "publishedOn" | "id">): string {
  if (paper.pmid?.trim()) return `pmid:${paper.pmid.trim()}`;
  if (paper.doi?.trim()) return `doi:${paper.doi.trim().toLowerCase()}`;
  const basis = `${normalizeSpace(paper.title).toLowerCase()}|${paper.publishedOn ?? ""}`;
  return `title:${createHash("sha256").update(basis).digest("hex").slice(0, 24)}`;
}

function mergePaper(first: LiteraturePaper, second: LiteraturePaper): LiteraturePaper {
  const preferred = second.abstract.length > first.abstract.length ? second : first;
  return {
    ...first,
    ...preferred,
    id: canonicalPaperId(first),
    doi: first.doi ?? second.doi,
    pmid: first.pmid ?? second.pmid,
    pmcid: first.pmcid ?? second.pmcid,
    matchedSubstances: [...new Set([...first.matchedSubstances, ...second.matchedSubstances])],
    matchedTerms: [...new Set([...first.matchedTerms, ...second.matchedTerms])],
    authors: [...new Set([...first.authors, ...second.authors])],
    raw: { ...first.raw, ...second.raw },
  };
}

function identityKeys(paper: LiteraturePaper): string[] {
  const keys = [] as string[];
  if (paper.pmid?.trim()) keys.push(`pmid:${paper.pmid.trim()}`);
  if (paper.doi?.trim()) keys.push(`doi:${paper.doi.trim().toLowerCase()}`);
  keys.push(canonicalPaperId(paper));
  return [...new Set(keys)];
}

export function deduplicatePapers(papers: LiteraturePaper[]): LiteraturePaper[] {
  const byIdentity = new Map<string, LiteraturePaper>();
  for (const paper of papers) {
    const identity = canonicalPaperId(paper);
    const currentKey = identityKeys(paper).find((key) => byIdentity.has(key));
    const current = currentKey ? byIdentity.get(currentKey) : undefined;
    const merged = current ? mergePaper(current, paper) : { ...paper, id: identity };
    for (const key of [...identityKeys(paper), ...identityKeys(merged)]) byIdentity.set(key, merged);
  }
  return [...new Set(byIdentity.values())].sort((a, b) => (b.publishedOn ?? "").localeCompare(a.publishedOn ?? ""));
}

function containsQuote(abstract: string, quote: string): boolean {
  return normalizeSpace(abstract).toLocaleLowerCase().includes(normalizeSpace(quote).toLocaleLowerCase());
}

/** Retain only exact abstract spans. Full-text quotes are handled by the later full-text pass. */
export function extractQuotedEvidence(quotes: string[], abstract: string): string[] {
  return [...new Set(quotes.map(normalizeSpace).filter((quote) => quote.length >= 12 && containsQuote(abstract, quote)))];
}

export function validateSuggestion(suggestion: SuggestionDraft): void {
  const statuses: SuggestionStatus[] = ["proposed", "approved", "rejected", "applied", "error"];
  const kinds: SuggestionType[] = ["new-reference", "new-outcome", "new-effect", "new-claim", "new-caution", "ignore"];
  if (!statuses.includes(suggestion.status)) throw new Error(`Invalid suggestion status: ${suggestion.status}`);
  if (!kinds.includes(suggestion.suggestionType)) throw new Error(`Invalid suggestion type: ${suggestion.suggestionType}`);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(suggestion.substanceSlug)) throw new Error("Invalid substance slug");
  if (!suggestion.rationale.trim()) throw new Error("Suggestion rationale is required");
  if (suggestion.confidence !== undefined && (!Number.isFinite(suggestion.confidence) || suggestion.confidence < 0 || suggestion.confidence > 1)) throw new Error("Suggestion confidence must be between 0 and 1");
  const verified = extractQuotedEvidence(suggestion.evidenceQuotes, suggestion.abstract);
  if (verified.length !== suggestion.evidenceQuotes.length) throw new Error("Suggestion contains a quote that is not verbatim in the abstract");
}

export function renderEditorialProposal(input: {
  id: string;
  paper: Pick<LiteraturePaper, "title" | "url" | "doi" | "pmid" | "publishedOn" | "journal" | "abstract">;
  suggestion: Pick<SuggestionDraft, "substanceSlug" | "suggestionType" | "payload" | "rationale" | "evidenceQuotes">;
  status: "approved" | "rejected";
  reviewer: string;
}): string {
  const quoteBlock = input.suggestion.evidenceQuotes.length
    ? input.suggestion.evidenceQuotes.map((quote) => `> ${quote}`).join("\n")
    : "> No verbatim abstract evidence was retained; inspect the full text before using this proposal.";
  return [
    "# BHWiki editorial proposal",
    "",
    `- Proposal: ${input.id}`,
    `- Status: **${input.status}**`,
    `- Reviewer: ${input.reviewer}`,
    `- Substance: ${input.suggestion.substanceSlug}`,
    `- Suggestion type: ${input.suggestion.suggestionType}`,
    `- Paper: [${input.paper.title}](${input.paper.url})`,
    `- PMID: ${input.paper.pmid ?? "not indexed"}`,
    `- DOI: ${input.paper.doi ?? "not indexed"}`,
    `- Publication date: ${input.paper.publishedOn ?? "not stated"}`,
    `- Journal: ${input.paper.journal ?? "not stated"}`,
    "",
    "## Proposed structured change",
    "",
    "```json",
    JSON.stringify(input.suggestion.payload, null, 2),
    "```",
    "",
    "## Model rationale",
    "",
    input.suggestion.rationale,
    "",
    "## Verbatim evidence retained from the abstract",
    "",
    quoteBlock,
    "",
    "## Human review gate",
    "",
    "- [ ] Open the canonical publication and inspect the full text or the strongest available source.",
    "- [ ] Confirm the article version, retraction/correction state, population, exposure, comparator and outcome.",
    "- [ ] Check that every proposed field is supported by the source; delete unsupported fields rather than filling gaps.",
    "- [ ] Record funding/conflict and licensing information where required by the article contract.",
    "- [ ] Apply the change manually to the relevant Markdown source and run `bun run content:validate`.",
    "",
  ].join("\n");
}

export function europePmcPaper(result: Record<string, unknown>, target: WatchTarget, matchedTerms: string[]): LiteraturePaper {
  const pmid = typeof result.pmid === "string" ? result.pmid : null;
  const doi = typeof result.doi === "string" ? result.doi : null;
  const pmcid = typeof result.pmcid === "string" ? result.pmcid : null;
  const title = normalizeSpace(String(result.title ?? "Untitled publication"));
  const paper: LiteraturePaper = {
    id: "pending",
    title,
    abstract: normalizeSpace(String(result.abstractText ?? result.abstract ?? "")),
    url: pmid ? `https://pubmed.ncbi.nlm.nih.gov/${pmid}/` : doi ? `https://doi.org/${doi}` : "https://europepmc.org/",
    doi,
    pmid,
    pmcid,
    publishedOn: typeof result.firstPublicationDate === "string" ? result.firstPublicationDate : null,
    journal: typeof result.journalTitle === "string" ? result.journalTitle : null,
    authors: typeof result.authorString === "string" ? result.authorString.split(",").map(normalizeSpace).filter(Boolean) : [],
    sourceKind: "europepmc",
    matchedSubstances: [target.slug],
    matchedTerms,
    raw: result,
  };
  paper.id = canonicalPaperId(paper);
  return paper;
}
