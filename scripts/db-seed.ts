import { recordId } from "../src/lib/research";
import { readFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import postgres from "postgres";
import { substances, tags, hyperedges } from "../src/lib/content";
import { validateContent } from "../src/lib/validate-content";
import type { Reference } from "../src/lib/types";
import { publicationStatements, sourceMatchSql, sourceUpsertStatements } from "../src/lib/publication-sql";
import { validateCanonicalSources, validateEditorialMetadata } from "../src/lib/publication-metadata";

// This file is the only publisher. It emits/executes a complete atomic transaction
// from the same validated content used by the bundled application.
validateContent({ substances, tags, hyperedges });
const editorial = validateEditorialMetadata(substances, JSON.parse(readFileSync(new URL("../content/editorial.json", import.meta.url), "utf8")));
validateCanonicalSources(substances.flatMap((s) => s.references));
const q = (value: unknown): string => {
  if (value === null || value === undefined) return "NULL";
  if (typeof value === "number") { if (!Number.isFinite(value)) throw new Error("Non-finite seed value"); return String(value); }
  if (typeof value === "boolean") return value ? "true" : "false";
  return `'${String(value).replaceAll("'", "''")}'`;
};
const json = (value: unknown) => `${q(JSON.stringify(value))}::jsonb`;
let sourceCommit: string | null = process.env.BHWIKI_SOURCE_COMMIT ?? null;
if (!sourceCommit) {
  try {
    const dirty = execFileSync("git", ["status", "--porcelain", "--", "src/lib/content.ts", "src/lib/content-markdown.ts", "src/lib/types.ts", "content"], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
    if (!dirty) sourceCommit = execFileSync("git", ["rev-parse", "HEAD"], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"] }).trim();
  } catch { /* No repository or commit: do not invent source provenance. */ }
}
if (sourceCommit && !/^[a-f0-9]{40,64}$/.test(sourceCommit)) throw new Error("BHWIKI_SOURCE_COMMIT must be a full Git commit hash");
const statements = ["BEGIN;", "SET LOCAL lock_timeout = '5s';", "SET LOCAL statement_timeout = '60s';", "SELECT pg_advisory_xact_lock(674928105);", "SET LOCAL ROLE bhwiki_owner;"];
const emit = (sql: string) => statements.push(sql);
const entity = (slug: string) => `(SELECT id FROM bhwiki.entities WHERE slug = ${q(slug.replace(/^(substance|tag):/, ""))})`;
const insert = (table: string, values: Record<string, string>) => emit(`INSERT INTO bhwiki.${table} (${Object.keys(values).join(", ")}) VALUES (${Object.values(values).join(", ")});`);
const upsert = (table: string, values: Record<string, string>, keys: string[]) => emit(`INSERT INTO bhwiki.${table} (${Object.keys(values).join(", ")}) VALUES (${Object.values(values).join(", ")}) ON CONFLICT (${keys.join(", ")}) DO UPDATE SET ${Object.keys(values).filter((k) => !keys.includes(k)).map((k) => `${k} = EXCLUDED.${k}`).join(", ")};`);
const source = (ref: Reference) => `(SELECT id FROM bhwiki.sources WHERE ${sourceMatchSql(ref)})`;

// Public concepts and article identities exist before participant references are inserted.
for (const tag of tags) {
  upsert("entities", { slug: q(tag.id), entity_type: q(tag.kind), label: q(tag.label), status: q("published") }, ["slug"]);
  upsert("concepts", { entity_id: entity(tag.id), document: json(tag) }, ["entity_id"]);
  emit(`DELETE FROM bhwiki.entity_aliases WHERE entity_id = ${entity(tag.id)};`);
  for (const alias of [...new Set([tag.label, ...(tag.aliases ?? [])].map((v) => v.toLowerCase()))]) insert("entity_aliases", { entity_id: entity(tag.id), alias: q(alias) });
}
for (const s of substances) {
  for (const statement of publicationStatements(s, editorial.get(s.slug), sourceCommit)) emit(statement);
}

for (const s of substances) {
  const article = entity(s.slug);
  const reference = (id: string) => {
    const ref = s.references.find((r) => r.id === id);
    if (!ref) throw new Error(`Unknown reference ${s.slug}:${id}`);
    return source(ref);
  };
  for (const ref of s.references) {
    for (const statement of sourceUpsertStatements(ref)) emit(statement);
  }
  // Snapshot and normalized projections become visible together at COMMIT.
  // There is no inference of route, source category, statistic, direction or analyte from prose.
  for (const table of ["article_concepts", "article_sources", "claims", "doses", "pk_modifiers", "pk_observations", "effect_observations"]) {
    emit(`DELETE FROM bhwiki.${table} WHERE article_id = ${article};`);
  }
  emit(`DELETE FROM bhwiki.entity_aliases WHERE entity_id = ${article};`);
  for (const alias of [...new Set([s.name, ...s.aliases].map((v) => v.toLowerCase()))]) insert("entity_aliases", { entity_id: article, alias: q(alias) });
  for (const id of s.tags) insert("article_concepts", { article_id: article, concept_id: entity(id) });
  for (const ref of s.references) insert("article_sources", { article_id: article, reference_key: q(ref.id), source_id: source(ref), insight: q(ref.insight), limitation: q(ref.limitation), funding: q(ref.funding) });
  for (const c of s.claims) {
    insert("claims", { article_id: article, claim_key: q(c.id), assertion: q(c.assertion), relation: q(c.relation), context: q(c.context), assessment: q(c.assessment), limitation: q(c.limitation) });
    const claim = `(SELECT id FROM bhwiki.claims WHERE article_id = ${article} AND claim_key = ${q(c.id)})`;
    for (const member of c.participants) insert("claim_members", { claim_id: claim, entity_id: entity(member.entityId), member_role: q(member.role) });
    for (const id of c.sourceIds) insert("claim_sources", { claim_id: claim, source_id: reference(id), stance: q("supporting") });
    for (const id of c.conflictingSourceIds) insert("claim_sources", { claim_id: claim, source_id: reference(id), stance: q("conflicting") });
  }
  for (const d of s.doses) insert("doses", {
    article_id: article, source_id: reference(d.sourceId), label: q(d.label), amount: q(d.amount), quantity: q(d.quantity), quantity_max: q(d.quantityMax), unit: q(d.unit), ingredient: q(d.ingredient), formulation: q(d.formulation), route: q(d.route), frequency: q(d.frequency), duration: q(d.duration), population: q(d.population), purpose: q(d.purpose), source_category: q(d.sourceCategory), food_relation: q(d.foodRelation), solubility: q(d.solubility), absorption_note: q(d.absorptionNote), note: q(d.note),
  });
  for (const p of s.pkObservations) insert("pk_observations", {
    article_id: article, observation_key: q(p.id), source_id: reference(p.sourceId), analyte: q(p.analyte), route: q(p.route), formulation: q(p.formulation), population: q(p.population), endpoint: q(p.endpoint), statistic: q(p.statistic), value: q(p.value), low: q(p.low), high: q(p.high), unit: q(p.unit), context: q(p.context), model_eligible: q(p.modelEligible),
  });
  for (const m of s.modifiers) insert("pk_modifiers", {
    article_id: article, observation_id: `(SELECT id FROM bhwiki.pk_observations WHERE article_id = ${article} AND observation_key = ${q(m.observationId)})`, source_id: reference(m.sourceId), label: q(m.label), effect: q(m.effect), detail: q(m.detail), factor_type: q(m.factorType), direction: q(m.direction),
  });
  for (const [type, observations] of [["effect", s.effects], ["outcome", s.outcomes]] as const) {
    for (const o of observations) insert("effect_observations", { article_id: article, concept_id: entity(o.conceptId), source_id: reference(o.sourceId), observation_type: q(type), observation_key: q(recordId(o)), record: json(o), name: q(o.name), direction: q(o.direction), evidence: q(o.evidence), description: q(o.description), population: q(o.population), exposure: q(o.exposure), instrument: q(o.instrument), magnitude: q(o.magnitude) });
  }
}

for (const edge of hyperedges) {
  upsert("relationships", { slug: q(edge.id), label: q(edge.label), relation: q(edge.relation), description: q(edge.description), source_url: q(edge.sourceUrl), source_urls: json(edge.sourceUrls ?? [edge.sourceUrl]), directed_steps: json(edge.directedSteps ?? []), status: q("published") }, ["slug"]);
  const relation = `(SELECT id FROM bhwiki.relationships WHERE slug = ${q(edge.id)})`;
  emit(`DELETE FROM bhwiki.relationship_members WHERE relationship_id = ${relation};`);
  for (const member of edge.members) insert("relationship_members", { relationship_id: relation, entity_id: entity(member), member_role: q(edge.memberRoles[member]) });
}
// The bundled collection is the complete release manifest. Retire removed concepts,
// articles and relationships without deleting identities or immutable historical snapshots.
emit(`UPDATE bhwiki.relationships SET status = 'archived' WHERE slug NOT IN (${hyperedges.map((e) => q(e.id)).join(", ") || "NULL"});`);
emit(`UPDATE bhwiki.entities SET status = 'archived' WHERE slug NOT IN (${[...substances.map((s) => s.slug), ...tags.map((t) => t.id)].map(q).join(", ")});`);
emit("RESET ROLE;");
emit("COMMIT;");
const script = statements.join("\n");
if (process.argv.includes("--sql")) process.stdout.write(`${script}\n`);
else {
  const connection = process.env.BHWIKI_ADMIN_DATABASE_URL;
  if (!connection) throw new Error("Set BHWIKI_ADMIN_DATABASE_URL or use --sql for canonical shared-cluster import.");
  const sql = postgres(connection, { max: 1, prepare: false, onnotice: () => {} });
  try {
    await sql.unsafe(script);
    console.log(`Published ${substances.length} articles with validated editorial provenance, ${tags.length} concepts and ${hyperedges.length} relationships transactionally.`);
  } finally { await sql.end({ timeout: 2 }); }
}
