import postgres from "postgres";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { renderEditorialProposal, type LiteraturePaper, type SuggestionDraft } from "../src/lib/literature-monitor";

const value = (name: string, fallback?: string) => {
  const prefix = `--${name}=`;
  const item = process.argv.find((arg) => arg.startsWith(prefix));
  return item ? item.slice(prefix.length) : fallback;
};
const command = process.argv.includes("--list") ? "list" : "review";
const decision = value("decision");
const id = value("id");
const reviewer = value("reviewer", process.env.USER ?? "editor")!;
const spool = path.resolve(value("spool", process.env.BHWIKI_LITERATURE_SPOOL ?? "/var/lib/bhwiki/literature")!);

function filenameForId(value: string): string {
  return value.replaceAll(":", "_");
}

async function listSpool(): Promise<void> {
  const directory = path.join(spool, "suggestions");
  let names: string[] = [];
  try { names = await readdir(directory); } catch { /* Empty inbox is a valid state. */ }
  const rows = [];
  for (const name of names.filter((entry) => entry.endsWith(".json")).sort()) {
    const item = JSON.parse(await readFile(path.join(directory, name), "utf8")) as { id: string; paperId: string; suggestion: SuggestionDraft };
    if (item.suggestion.status === "proposed") rows.push({ id: item.id, paperId: item.paperId, substance: item.suggestion.substanceSlug, type: item.suggestion.suggestionType, rationale: item.suggestion.rationale });
  }
  console.log(JSON.stringify({ destination: spool, pending: rows.length, suggestions: rows }, null, 2));
}

async function reviewSpool(): Promise<void> {
  if (!id || !decision || !["approve", "reject"].includes(decision)) throw new Error("Use --id=<suggestion-id> --decision=approve|reject");
  const suggestionPath = path.join(spool, "suggestions", `${filenameForId(id)}.json`);
  const item = JSON.parse(await readFile(suggestionPath, "utf8")) as { id: string; paperId: string; model: string; suggestion: SuggestionDraft };
  const paperPath = path.join(spool, "papers", `${filenameForId(item.paperId)}.json`);
  const paper = JSON.parse(await readFile(paperPath, "utf8")) as LiteraturePaper;
  const status = decision === "approve" ? "approved" : "rejected";
  item.suggestion.status = status;
  await writeFile(suggestionPath, `${JSON.stringify({ ...item, reviewer, reviewedAt: new Date().toISOString() }, null, 2)}\n`);
  if (status === "approved") {
    const proposals = path.join(spool, "proposals");
    await mkdir(proposals, { recursive: true });
    await writeFile(path.join(proposals, `${filenameForId(id)}.md`), renderEditorialProposal({ id, paper, suggestion: item.suggestion, status, reviewer }));
  }
  console.log(JSON.stringify({ id, decision, status, published: false, proposal: status === "approved" ? path.join(spool, "proposals", `${filenameForId(id)}.md`) : null }));
}

async function listDatabase(): Promise<void> {
  const sql = postgres(process.env.BHWIKI_ADMIN_DATABASE_URL!, { max: 1, prepare: false, connect_timeout: 5, onnotice: () => {} });
  try {
    const rows = await sql`SELECT s.id, s.paper_id AS "paperId", s.substance_slug AS substance, s.suggestion_type AS type, s.rationale, p.title
      FROM bhwiki.literature_suggestions s JOIN bhwiki.literature_papers p ON p.id=s.paper_id
      WHERE s.status='proposed' ORDER BY s.created_at DESC LIMIT 200`;
    console.log(JSON.stringify({ destination: "database", pending: rows.length, suggestions: rows }, null, 2));
  } finally { await sql.end({ timeout: 2 }); }
}

async function reviewDatabase(): Promise<void> {
  if (!id || !decision || !["approve", "reject"].includes(decision)) throw new Error("Use --id=<suggestion-id> --decision=approve|reject");
  const sql = postgres(process.env.BHWIKI_ADMIN_DATABASE_URL!, { max: 1, prepare: false, connect_timeout: 5, onnotice: () => {} });
  try {
    await sql.begin(async (tx) => {
      await tx`SET LOCAL ROLE bhwiki_owner`;
      const [row] = await tx`SELECT s.id, s.substance_slug AS "substanceSlug", s.suggestion_type AS "suggestionType", s.payload, s.rationale, s.evidence_quotes AS "evidenceQuotes", p.title, p.url, p.doi, p.pmid, p.published_on AS "publishedOn", p.journal, p.abstract
        FROM bhwiki.literature_suggestions s JOIN bhwiki.literature_papers p ON p.id=s.paper_id WHERE s.id=${id} AND s.status='proposed' FOR UPDATE`;
      if (!row) throw new Error(`Pending suggestion not found: ${id}`);
      const status = decision === "approve" ? "approved" : "rejected";
      await tx`UPDATE bhwiki.literature_suggestions SET status=${status}, reviewer=${reviewer}, reviewed_at=now() WHERE id=${id}`;
      if (status === "approved") {
        await mkdir(path.join(spool, "proposals"), { recursive: true });
        await writeFile(path.join(spool, "proposals", `${filenameForId(id)}.md`), renderEditorialProposal({
          id,
          paper: { title: row.title, url: row.url, doi: row.doi, pmid: row.pmid, publishedOn: row.publishedOn, journal: row.journal, abstract: row.abstract },
          suggestion: { substanceSlug: row.substanceSlug, suggestionType: row.suggestionType, payload: row.payload, rationale: row.rationale, evidenceQuotes: row.evidenceQuotes },
          status,
          reviewer,
        }));
      }
      console.log(JSON.stringify({ id, decision, status, published: false, proposal: status === "approved" ? path.join(spool, "proposals", `${filenameForId(id)}.md`) : null }));
    });
  } finally { await sql.end({ timeout: 2 }); }
}

async function main(): Promise<void> {
  const database = Boolean(process.env.BHWIKI_ADMIN_DATABASE_URL);
  if (command === "list") return database ? listDatabase() : listSpool();
  if (database) return reviewDatabase();
  return reviewSpool();
}

main().catch((error) => {
  console.error(error instanceof Error ? error.stack ?? error.message : String(error));
  process.exitCode = 1;
});
