import { randomUUID } from "node:crypto";
import { runDatabaseCheck, sqlString } from "./db-verify";

// These are same-cluster observations, not an OrioleDB-versus-heap comparison.
// Fixtures and their immutable publication history remain inside one rollback.
const sizeFlag = process.argv.find((argument) => argument.startsWith("--size="));
const fixtureCount = sizeFlag ? Number(sizeFlag.slice("--size=".length)) : 1_000;
if (!Number.isInteger(fixtureCount) || fixtureCount < 100 || fixtureCount > 5_000) {
  throw new Error("Use --size=100 through --size=5000; the default is 1000 articles and relationships.");
}
const prefix = `benchmark-${randomUUID()}`;
const queries = {
  article: `
    SELECT r.document FROM bhwiki.entities e
    JOIN bhwiki.articles a ON a.entity_id = e.id
    JOIN bhwiki.article_revisions r ON r.id = a.published_revision_id AND r.entity_id = e.id
    WHERE e.slug = ${sqlString(`${prefix}-1`)} AND e.entity_type = 'substance' AND e.status = 'published'
    LIMIT 1`,
  // Exact production catalog query: filtering currently happens on compact
  // catalog records in the application, not in the SQL comparison below.
  catalog: `
    SELECT a.catalog FROM bhwiki.entities e JOIN bhwiki.articles a ON a.entity_id = e.id
    WHERE e.entity_type = 'substance' AND e.status = 'published'
    ORDER BY e.label`,
  // Exploratory comparison only; this is not the production catalog path.
  filtered_catalog: `
    SELECT a.catalog FROM bhwiki.entities e JOIN bhwiki.articles a ON a.entity_id = e.id
    WHERE e.status = 'published' AND e.entity_type = 'substance'
      AND (e.label ILIKE '%Benchmark%' OR EXISTS (
        SELECT FROM bhwiki.entity_aliases aliases WHERE aliases.entity_id = e.id AND aliases.alias ILIKE '%Benchmark%'
      ))
      AND EXISTS (
        SELECT FROM bhwiki.article_concepts ac JOIN bhwiki.entities concept ON concept.id = ac.concept_id
        WHERE ac.article_id = e.id AND concept.slug = ${sqlString(`${prefix}-concept-1`)}
      )
    ORDER BY e.label LIMIT 25`,
  focused_graph: `
    WITH focus_entity AS MATERIALIZED (
      SELECT id FROM bhwiki.entities WHERE slug = ${sqlString(`${prefix}-concept-1`)}
    ), selected AS MATERIALIZED (
      SELECT relationship_id AS id FROM bhwiki.relationship_members
      WHERE entity_id = (SELECT id FROM focus_entity)
      ORDER BY relationship_id LIMIT 80
    )
    SELECT r.slug, r.label, r.relation, r.source_urls,
      jsonb_agg(jsonb_build_object('slug', e.slug, 'kind', e.entity_type, 'label', e.label, 'role', m.member_role) ORDER BY e.slug) AS members
    FROM selected s JOIN bhwiki.relationships r ON r.id = s.id
    JOIN bhwiki.relationship_members m ON m.relationship_id = r.id
    JOIN bhwiki.entities e ON e.id = m.entity_id
    GROUP BY r.id, r.slug, r.label, r.relation, r.source_urls ORDER BY r.label`,
};

const script = `
BEGIN;
SET LOCAL lock_timeout = '5s';
SET LOCAL statement_timeout = '60s';
SELECT pg_advisory_xact_lock(674928105);
SET LOCAL ROLE bhwiki_owner;
DO $fixtures$
DECLARE concept_ids bigint[] := '{}'; concept_id bigint; article_id bigint; relationship_id bigint;
  i integer; idx integer; doc jsonb; unused_revision bigint;
BEGIN
  FOR i IN 1..20 LOOP
    INSERT INTO bhwiki.entities (slug, entity_type, label, status)
      VALUES (${sqlString(prefix)} || '-concept-' || i, 'effect', 'Benchmark concept ' || i, 'published') RETURNING id INTO concept_id;
    INSERT INTO bhwiki.concepts (entity_id, document)
      VALUES (concept_id, jsonb_build_object('id', ${sqlString(prefix)} || '-concept-' || i, 'label', 'Benchmark concept ' || i, 'description', 'Rollback-only synthetic fixture'));
    concept_ids := array_append(concept_ids, concept_id);
  END LOOP;
  FOR i IN 1..${fixtureCount} LOOP
    doc := jsonb_build_object(
      'slug', ${sqlString(prefix)} || '-' || i, 'name', 'Benchmark article ' || lpad(i::text, 5, '0'),
      'summary', 'Rollback-only synthetic benchmark fixture', 'aliases', jsonb_build_array('Benchmark alias ' || i),
      'formula', '', 'category', 'fixture', 'tags', '[]'::jsonb, 'editorialStatus', 'sourced-draft',
      'reviewedAt', '2026-09-29', 'halfLife', jsonb_build_object('label', 'Not assessed'),
      'fixtureDetail', repeat('Synthetic article detail for a representative document payload. ', 160)
    );
    unused_revision := bhwiki.publish_article(doc, md5(doc::text) || md5(doc::text), NULL, '["Database benchmark"]', '[]', 'Rollback-only benchmark');
    SELECT id INTO article_id FROM bhwiki.entities WHERE slug = doc->>'slug';
    INSERT INTO bhwiki.entity_aliases (entity_id, alias) VALUES (article_id, lower('Benchmark alias ' || i));
    idx := ((i - 1) % 20) + 1;
    INSERT INTO bhwiki.article_concepts (article_id, concept_id) VALUES (article_id, concept_ids[idx]);
    INSERT INTO bhwiki.relationships (slug, label, relation, description, source_url, source_urls, status)
      VALUES (${sqlString(prefix)} || '-edge-' || i, 'Benchmark relationship ' || lpad(i::text, 5, '0'), 'synthetic-fixture',
        'Rollback-only synthetic benchmark relationship', 'https://example.org/fixture', '["https://example.org/fixture"]', 'published')
      RETURNING id INTO relationship_id;
    INSERT INTO bhwiki.relationship_members (relationship_id, entity_id, member_role)
      VALUES (relationship_id, article_id, 'subject'), (relationship_id, concept_ids[idx], 'effect'),
        (relationship_id, concept_ids[(idx % 20) + 1], 'context');
  END LOOP;
END $fixtures$;
RESET ROLE;
SET LOCAL ROLE bhwiki_reader;
${Object.entries(queries).map(([name, query]) => `
DO $measure$
DECLARE plan jsonb; samples jsonb := '[]'; run integer;
BEGIN
  FOR run IN 1..3 LOOP
    EXECUTE ${sqlString(`EXPLAIN (ANALYZE, BUFFERS, FORMAT JSON) ${query}`)} INTO plan;
    samples := samples || jsonb_build_array(jsonb_build_object(
      'sample', run, 'executionMs', plan->0->'Execution Time', 'planningMs', plan->0->'Planning Time',
      'rows', plan->0->'Plan'->'Actual Rows', 'sharedHits', plan->0->'Plan'->'Shared Hit Blocks',
      'sharedReads', plan->0->'Plan'->'Shared Read Blocks'
    ));
  END LOOP;
  PERFORM set_config('bhwiki.benchmark_${name}', samples::text, true);
END $measure$;
SELECT jsonb_build_object('query', ${sqlString(name)}, 'scope', ${sqlString(name === "filtered_catalog" ? "exploratory SQL filtering; application currently filters compact catalog records" : name === "focused_graph" ? "representative complete graph slice; production loads candidates and members separately" : "production query shape")}, 'samples', current_setting('bhwiki.benchmark_${name}')::jsonb) AS measurement;
`).join("\n")}
RESET ROLE;
ROLLBACK;
DO $cleanup$ BEGIN
  IF EXISTS (SELECT FROM bhwiki.entities WHERE slug LIKE ${sqlString(`${prefix}%`)}) THEN
    RAISE EXCEPTION 'Benchmark left committed fixtures';
  END IF;
END $cleanup$;
SELECT jsonb_build_object('fixtureArticles', ${fixtureCount}, 'fixtureConcepts', 20, 'fixtureRelationships', ${fixtureCount},
  'result', 'All fixtures rolled back. Three observations per query, reader RLS enabled, existing planner statistics unchanged. No comparative engine performance claim.') AS context;
`;

if (process.argv.includes("--sql")) {
  process.stdout.write(script);
} else {
  runDatabaseCheck(script).then((output) => console.log(output)).catch((error: unknown) => {
    const secret = process.env.BHWIKI_ADMIN_DATABASE_URL;
    const message = error instanceof Error ? error.message : String(error);
    console.error(secret ? message.replaceAll(secret, "[administrator URL]") : message);
    process.exitCode = 1;
  });
}
