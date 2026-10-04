import { createHash } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, readdirSync, unlinkSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadCorpus, parseContentSource, serializeContent, type ContentRecord } from "../src/lib/content-markdown";
import { validateContent } from "../src/lib/validate-content";
import { sourceIdentity, validateCanonicalSources, validateEditorialMetadata } from "../src/lib/publication-metadata";
import type { Reference, Substance, Tag } from "../src/lib/types";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const contentRoot = path.join(root, "content");
const acquisitionRoot = path.join(root, "data/research/normalized");
const corpus = loadCorpus(contentRoot);
const before = new Map<string, string>();
const changes: string[] = [];
const order = new Map<string, number>();
const tagPath = (t: Tag) => t.kind === "effect" ? `effects/${t.id}.md` : t.kind === "outcome" ? `outcomes/${t.id}.md` : `concepts/${t.kind}/${t.id}.md`;
const relativeRecords = (): { relative: string; parsed: ContentRecord }[] => [
  ...corpus.substances.map(record => ({ relative: `substances/${record.slug}.md`, parsed: { collection: "substances" as const, record, order: order.get(`substances/${record.slug}.md`) ?? Number.MAX_SAFE_INTEGER } })),
  ...corpus.tags.map(record => ({ relative: tagPath(record), parsed: { collection: "tags" as const, record, order: order.get(tagPath(record)) ?? Number.MAX_SAFE_INTEGER } })),
  ...corpus.hyperedges.map(record => ({ relative: `relationships/${record.id}.md`, parsed: { collection: "relationships" as const, record, order: order.get(`relationships/${record.id}.md`) ?? Number.MAX_SAFE_INTEGER } })),
];
for (const item of relativeRecords()) {
  const original = readFileSync(path.join(contentRoot, item.relative), "utf8");
  before.set(item.relative, original);
  order.set(item.relative, parseContentSource(item.relative, original).order);
}
const canonical = new Map<string, Reference>();
const keys = (r: Reference) => Object.entries(sourceIdentity(r)).filter(([, v]) => v).map(([k, v]) => `${k}:${v}`);
const pending = (r: Reference) => /metadata pending|metadata not independently verified|Source discovery link/i.test(`${r.title} ${r.authors} ${r.kind}`);
for (const s of corpus.substances) for (const r of s.references) for (const k of keys(r)) canonical.set(k, r);
const bibliography = ["title", "authors", "year", "url", "kind", "doi", "pmid"] as const;
function reconcileReference(r: Reference) {
  if (r.pmid !== undefined) r.pmid = String(r.pmid);
  if (r.doi) r.doi = r.doi.replace(/^https?:\/\/(?:dx\.)?doi\.org\//i, "");
  const known = keys(r).map(k => canonical.get(k)).find(Boolean);
  if (known && pending(known) && !pending(r)) {
    // The acquisition placeholder described a captured link, not a publication year.
    for (const s of corpus.substances) for (const old of s.references) {
      if (keys(old).some(k => keys(known).includes(k))) {
        for (const field of bibliography) {
          if (r[field] !== undefined) (old as unknown as Record<string, unknown>)[field] = r[field];
        }
        if (/Publication title, authors, date/.test(old.limitation)) old.limitation = "Bibliographic metadata was reconciled from the separate research acquisition; relevance and findings for this original discovery profile remain unassessed.";
      }
    }
    changes.push(`Reconciled captured-link bibliography with the actual publication: ${r.title}`);
  } else if (known) {
    for (const field of bibliography) if (known[field] !== undefined) (r as unknown as Record<string, unknown>)[field] = known[field];
  }
  for (const k of keys(r)) canonical.set(k, r);
}
function rebindSources(value: unknown, map: Map<string, string>): void {
  if (!value || typeof value !== "object") return;
  if (Array.isArray(value)) { value.forEach(v => rebindSources(v, map)); return; }
  const o = value as Record<string, unknown>;
  for (const [key, item] of Object.entries(o)) {
    if (key === "sourceId" && typeof item === "string") o[key] = map.get(item) ?? item;
    else if ((key === "sourceIds" || key === "conflictingSourceIds") && Array.isArray(item)) o[key] = item.map(id => map.get(String(id)) ?? id);
    else rebindSources(item, map);
  }
}
const realClinical = (s: Substance) => [...s.effects, ...s.outcomes, ...s.doses, ...s.claims, ...s.cautions].length > 0;
function retainRecords<T>(incoming: T[], existing: T[], key: (v: T) => string): T[] {
  const found = new Set(incoming.map(key));
  return [...incoming, ...existing.filter(v => !found.has(key(v)))];
}
function mergeArticle(s: Substance, previous?: Substance): Substance {
  s.references.forEach(reconcileReference);
  if (!previous) return s;
  if (previous.editorialStatus === "editorially-reviewed") throw new Error(`Independent review attestation needs reconciliation: ${s.slug}`);
  if (previous.pubchemCid !== null && s.pubchemCid !== null && previous.pubchemCid !== s.pubchemCid) throw new Error(`Molecular identity conflict: ${s.slug}`);
  if (s.pubchemCid === null && previous.pubchemCid !== null) {
    for (const field of ["pubchemCid", "formula", "molecularWeight", "smiles"] as const) (s as unknown as Record<string, unknown>)[field] = previous[field];
    changes.push(`Retained previously sourced chemical identity: ${s.slug}`);
  }
  s.aliases = [...new Set([...s.aliases, ...previous.aliases])];
  s.tags = [...new Set([...s.tags, ...previous.tags])];
  const ids = new Map<string, string>();
  for (const r of s.references) {
    const old = previous.references.find(p => keys(p).some(k => keys(r).includes(k)));
    if (old) { ids.set(r.id, old.id); r.id = old.id; }
  }
  rebindSources(s, ids);
  s.references = retainRecords(s.references, previous.references, r => r.id);
  if (realClinical(previous)) {
    const observation = (o: Substance["outcomes"][number]) => `${o.sourceId}:${o.conceptId}:${o.result?.instrument ?? o.instrument ?? ""}`;
    s.outcomes = retainRecords(s.outcomes, previous.outcomes, observation);
    s.effects = retainRecords(s.effects, previous.effects, observation);
    s.doses = retainRecords(s.doses, previous.doses, d => `${d.sourceId}:${d.ingredient}:${d.formulation}:${d.amount}:${d.population}`);
    s.claims = retainRecords(s.claims, previous.claims, c => c.id);
    s.mechanisms = retainRecords(s.mechanisms, previous.mechanisms, m => `${m.sourceId}:${m.title}`);
    s.cautions = retainRecords(s.cautions, previous.cautions, c => `${c.sourceId}:${c.title}`);
    s.interactions = retainRecords(s.interactions, previous.interactions, i => i.id);
    s.pkObservations = retainRecords(s.pkObservations, previous.pkObservations, p => p.id);
    s.modifiers = retainRecords(s.modifiers, previous.modifiers, m => `${m.sourceId}:${m.label}`);
    s.legal = retainRecords(s.legal, previous.legal, l => `${l.jurisdiction}:${l.activity}:${l.sourceUrl}`);
    changes.push(`Retained prior curated clinical records and source IDs: ${s.slug}`);
  }
  if (!s.experienceLinks.length) s.experienceLinks = previous.experienceLinks;
  return s;
}
const topics: { topic: string; sourceUrl: string; files: string[] }[] = [];
for (const topic of readdirSync(acquisitionRoot).sort()) {
  const directory = path.join(acquisitionRoot, topic);
  const manifest = JSON.parse(readFileSync(path.join(directory, "capture.json"), "utf8"));
  if (!manifest.files.some((f: { path: string }) => f.path === `substances/${topic}.md`)) continue;
  let articles = 0;
  for (const f of manifest.files as { path: string }[]) {
    let source = readFileSync(path.join(directory, f.path), "utf8");
    if (!f.path.startsWith("substances/")) source = source.replace(/^```mermaid\n[\s\S]*?^```\s*\n?/gm, "");
    const parsed = parseContentSource(f.path, source);
    if (parsed.collection === "substances") {
      if (parsed.record.slug !== topic || ++articles !== 1) throw new Error(`One topic per research: ${topic}`);
      if (parsed.record.editorialStatus !== "sourced-draft") throw new Error(`Automated acquisition must remain a draft: ${topic}`);
      const previous = corpus.substances.find(s => s.slug === topic);
      const record = mergeArticle(parsed.record, previous);
      corpus.substances = [...corpus.substances.filter(s => s.slug !== topic), record];
    } else if (parsed.collection === "tags") {
      const existing = corpus.tags.find(t => t.id === parsed.record.id);
      if (existing && existing.kind !== parsed.record.kind) throw new Error(`Concept kind conflict: ${parsed.record.id}`);
      if (existing) changes.push(`Reused canonical ${existing.kind} definition: ${existing.id}`);
      else corpus.tags.push(parsed.record);
    } else {
      const existing = corpus.hyperedges.find(r => r.id === parsed.record.id);
      if (existing && JSON.stringify(existing) !== JSON.stringify(parsed.record)) throw new Error(`Relationship conflict: ${parsed.record.id}`);
      if (!existing) corpus.hyperedges.push(parsed.record);
    }
    if (!order.has(f.path)) order.set(f.path, parsed.order);
  }
  if (articles !== 1) throw new Error(`Missing article: ${topic}`);
  topics.push({ topic, sourceUrl: manifest.sourceUrl, files: manifest.files.map((f: { path: string }) => f.path) });
}
validateContent(corpus);
validateCanonicalSources(corpus.substances.flatMap(s => s.references));
validateEditorialMetadata(corpus.substances, JSON.parse(readFileSync(path.join(contentRoot, "editorial.json"), "utf8")));
const proposed = relativeRecords().map(item => ({ ...item, source: serializeContent(item.relative, item.parsed) }));
for (const item of proposed) {
  const again = parseContentSource(item.relative, item.source);
  if (JSON.stringify(again.record) !== JSON.stringify(item.parsed.record)) throw new Error(`Round-trip mismatch: ${item.relative}`);
}
const writes = proposed.filter(item => !before.has(item.relative) || JSON.stringify(parseContentSource(item.relative, before.get(item.relative)!).record) !== JSON.stringify(item.parsed.record));
const manifest = { method: "Integration of separate, one-topic Chrome Deep Research acquisitions", topics, articles: corpus.substances.length, concepts: corpus.tags.length, relationships: corpus.hyperedges.length, changes, files: writes.map(w => ({ path: w.relative, sha256: createHash("sha256").update(w.source).digest("hex") })) };
if (!process.argv.includes("--apply")) { console.log(JSON.stringify({ status: "validated", topics: topics.length, writes: writes.length, articles: corpus.substances.length, concepts: corpus.tags.length, relationships: corpus.hyperedges.length, changes: changes.length })); }
else {
  try { for (const item of writes) { const target = path.join(contentRoot, item.relative); mkdirSync(path.dirname(target), { recursive: true }); writeFileSync(target, item.source); } }
  catch (error) { for (const item of writes) { const target = path.join(contentRoot, item.relative); const original = before.get(item.relative); if (original !== undefined) writeFileSync(target, original); else if (existsSync(target)) unlinkSync(target); } throw error; }
  writeFileSync(path.join(root, "data/research/integration.json"), JSON.stringify(manifest, null, 2) + "\n");
  console.log(JSON.stringify({ status: "integrated", topics: topics.length, writes: writes.length, articles: corpus.substances.length, concepts: corpus.tags.length, relationships: corpus.hyperedges.length }));
}
