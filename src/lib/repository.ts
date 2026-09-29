import "server-only";
import postgres from "postgres";
import { createHash } from "node:crypto";
import { substances as bundledSubstances, tags as bundledTags, hyperedges as bundledHyperedges } from "./content";
import { toCatalogSubstance, type CatalogSubstance, type Hyperedge, type KnowledgeGraphData, type Revision, type Substance, type Tag } from "./types";
import { boundKnowledgeGraph, graphLimit, normalizeGraphFocus, selectGraphCandidates } from "./graph-data";
import { validateSubstance } from "./validate-content";

const globalDatabase = globalThis as typeof globalThis & { bhwikiSql?: ReturnType<typeof postgres> };

export function getDataMode(): "database" | "bundled" {
  const mode = process.env.BHWIKI_DATA_MODE ?? (process.env.DATABASE_URL ? "database" : "bundled");
  if (mode !== "database" && mode !== "bundled") throw new Error("BHWIKI_DATA_MODE must be database or bundled");
  if (mode === "database" && !process.env.DATABASE_URL) throw new Error("BHWIKI_DATA_MODE=database requires DATABASE_URL");
  return mode;
}

function database() {
  if (getDataMode() === "bundled") return undefined;
  if (!globalDatabase.bhwikiSql) {
    globalDatabase.bhwikiSql = postgres(process.env.DATABASE_URL!, {
      max: 2, prepare: false, connect_timeout: 5, idle_timeout: 20, max_lifetime: 60 * 10,
      connection: { application_name: "bhwiki", statement_timeout: 5000 }, onnotice: () => {},
    });
  }
  return globalDatabase.bhwikiSql;
}

function readDocument(row: { slug: string; document: unknown }): Substance {
  validateSubstance(row.document);
  if (row.document.slug !== row.slug) throw new Error(`Invalid published BHWiki document: ${row.slug}`);
  return row.document;
}

/** Server-only compatibility helper. Client-facing library and graph use compact catalog records. */
export async function getSubstances(): Promise<Substance[]> {
  const sql = database();
  if (!sql) return bundledSubstances;
  const rows = await sql<{ slug: string; document: unknown }[]>`
    SELECT e.slug, r.document FROM bhwiki.entities e JOIN bhwiki.articles a ON a.entity_id = e.id
    JOIN bhwiki.article_revisions r ON r.id = a.published_revision_id WHERE e.status = 'published' ORDER BY e.label
  `;
  if (!rows.length) throw new Error("BHWiki database has no published articles. Run the content publication step.");
  return rows.map(readDocument);
}

export async function getSubstance(slug: string): Promise<Substance | undefined> {
  const sql = database();
  if (!sql) return bundledSubstances.find((substance) => substance.slug === slug);
  const [row] = await sql<{ slug: string; document: unknown }[]>`
    SELECT e.slug, r.document FROM bhwiki.entities e JOIN bhwiki.articles a ON a.entity_id = e.id
    JOIN bhwiki.article_revisions r ON r.id = a.published_revision_id
    WHERE e.slug = ${slug} AND e.entity_type = 'substance' AND e.status = 'published' LIMIT 1
  `;
  return row ? readDocument(row) : undefined;
}

export async function getCatalog(): Promise<CatalogSubstance[]> {
  const sql = database();
  if (!sql) return bundledSubstances.map(toCatalogSubstance);
  const rows = await sql<{ catalog: CatalogSubstance }[]>`
    SELECT a.catalog FROM bhwiki.entities e JOIN bhwiki.articles a ON a.entity_id = e.id
    WHERE e.entity_type = 'substance' AND e.status = 'published' ORDER BY e.label
  `;
  if (!rows.length) throw new Error("BHWiki database has no published catalog. Run the content publication step.");
  return rows.map((row) => row.catalog);
}

export async function getConcepts(): Promise<Tag[]> {
  const sql = database();
  if (!sql) return bundledTags;
  const rows = await sql<{ document: Tag }[]>`
    SELECT c.document FROM bhwiki.entities e JOIN bhwiki.concepts c ON c.entity_id = e.id
    WHERE e.status = 'published' ORDER BY e.label
  `;
  return rows.map((row) => row.document);
}

export async function getConcept(slug: string): Promise<Tag | undefined> {
  const sql = database();
  if (!sql) return bundledTags.find((tag) => tag.id === slug);
  const [row] = await sql<{ document: Tag }[]>`
    SELECT c.document FROM bhwiki.entities e JOIN bhwiki.concepts c ON c.entity_id = e.id
    WHERE e.slug = ${slug} AND e.status = 'published' LIMIT 1
  `;
  return row?.document;
}

export async function getRevisions(slug: string): Promise<Revision[]> {
  const sql = database();
  // Bundled files have no database publication event or attested reviewer metadata.
  if (!sql) {
    const s = bundledSubstances.find((item) => item.slug === slug);
    return s ? [{ revision: 1, publishedAt: "", sourceCommit: null, contributors: [], reviewers: [], editorialStatus: s.editorialStatus, summary: "Bundled source snapshot; database publication history is unavailable in bundled mode.", contentHash: createHash("sha256").update(JSON.stringify(s)).digest("hex") }] : [];
  }
  const rows = await sql<(Revision & { publishedAt: Date | string })[]>`
    SELECT r.revision_number AS revision, r.published_at AS "publishedAt", r.source_commit AS "sourceCommit",
      r.contributors, r.reviewers, r.editorial_status AS "editorialStatus", r.summary, r.content_hash AS "contentHash"
    FROM bhwiki.entities e JOIN bhwiki.article_revisions r ON r.entity_id = e.id
    WHERE e.slug = ${slug} AND e.status = 'published' AND r.published_at IS NOT NULL ORDER BY r.revision_number DESC
  `;
  return rows.map((row) => ({ ...row, publishedAt: new Date(row.publishedAt).toISOString() }));
}

export async function getKnowledgeGraph(options: { focus?: string; limit?: number } = {}): Promise<KnowledgeGraphData> {
  const sql = database();
  if (!sql) return boundKnowledgeGraph({ substances: bundledSubstances.map(toCatalogSubstance), tags: bundledTags, hyperedges: bundledHyperedges }, options);
  const limit = graphLimit(options.limit);
  const focus = normalizeGraphFocus(options.focus);
  // Candidate count is bounded independently of the total database size. Every chosen
  // relationship's entire member set is loaded before the atomic entity-bound admission.
  type EdgeRow = { memberCount: number; dbId: string; id: string; label: string; relation: string; description: string; sourceUrl: string; sourceUrls: string[] };
  const edges = focus ? await sql<EdgeRow[]>`
    WITH focus_entity AS MATERIALIZED (
      SELECT id FROM bhwiki.entities WHERE slug = ${focus} AND status = 'published'
    ), candidates AS MATERIALIZED (
      SELECT relationship_id FROM bhwiki.relationship_members
      WHERE entity_id = (SELECT id FROM focus_entity) ORDER BY relationship_id LIMIT ${limit + 1}
    )
    SELECT r.id AS "dbId", r.slug AS id, r.label, r.relation, r.description, r.source_url AS "sourceUrl", r.source_urls AS "sourceUrls",
      (SELECT count(*)::integer FROM bhwiki.relationship_members size WHERE size.relationship_id = r.id) AS "memberCount"
    FROM candidates c JOIN bhwiki.relationships r ON r.id = c.relationship_id
    ORDER BY r.label
  ` : await sql<EdgeRow[]>`
    SELECT r.id AS "dbId", r.slug AS id, r.label, r.relation, r.description, r.source_url AS "sourceUrl", r.source_urls AS "sourceUrls",
      (SELECT count(*)::integer FROM bhwiki.relationship_members size WHERE size.relationship_id = r.id) AS "memberCount"
    FROM bhwiki.relationships r WHERE r.status = 'published'
    ORDER BY r.label LIMIT ${limit + 1}
  `;
  const candidates = selectGraphCandidates(edges, limit);
  const edgeIds = candidates.edges.map((e) => e.dbId);
  const members = edgeIds.length ? await sql<{ relationshipId: string; member: string; role: string; entityId: string }[]>`
    SELECT m.relationship_id AS "relationshipId", m.entity_id AS "entityId", m.member_role AS role,
      CASE WHEN e.entity_type = 'substance' THEN 'substance:' ELSE 'tag:' END || e.slug AS member
    FROM bhwiki.relationship_members m JOIN bhwiki.entities e ON e.id = m.entity_id
    WHERE m.relationship_id IN ${sql(edgeIds)} ORDER BY m.relationship_id, m.entity_id
  ` : [];
  const extras = await sql<{ id: string }[]>`
    SELECT id FROM bhwiki.entities WHERE status = 'published'
    AND (${focus ?? null}::text IS NULL OR slug = ${focus ?? null}
      OR id IN (SELECT ac.article_id FROM bhwiki.article_concepts ac JOIN bhwiki.entities e ON e.id = ac.concept_id WHERE e.slug = ${focus ?? null})
      OR id IN (SELECT ac.concept_id FROM bhwiki.article_concepts ac JOIN bhwiki.entities e ON e.id = ac.article_id WHERE e.slug = ${focus ?? null}))
    ORDER BY (slug = ${focus ?? null}) DESC NULLS LAST, label LIMIT ${limit + 1}
  `;
  const ids = [...new Set([...members.map((m) => m.entityId), ...extras.slice(0, limit).map((e) => e.id)])];
  if (!ids.length) return { substances: [], tags: [], hyperedges: [], truncated: false };
  const [articles, concepts] = await Promise.all([
    sql<{ catalog: CatalogSubstance }[]>`SELECT catalog FROM bhwiki.articles WHERE entity_id IN ${sql(ids)}`,
    sql<{ document: Tag }[]>`SELECT document FROM bhwiki.concepts WHERE entity_id IN ${sql(ids)}`,
  ]);
  const hyperedges: Hyperedge[] = candidates.edges.map(({ dbId, memberCount: _memberCount, ...edge }) => {
    const own = members.filter((m) => m.relationshipId === dbId);
    return { ...edge, members: own.map((m) => m.member), memberRoles: Object.fromEntries(own.map((m) => [m.member, m.role])) };
  });
  return boundKnowledgeGraph({ substances: articles.map((a) => a.catalog), tags: concepts.map((c) => c.document), hyperedges,
    truncated: candidates.truncated || extras.length > limit }, options);
}
