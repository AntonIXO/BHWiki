import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { randomUUID } from "node:crypto";
import { pathToFileURL } from "node:url";
import postgres from "postgres";

/** Run bounded administrative checks; never expose an administrator URL. */
export async function runDatabaseCheck(script: string, onNotice?: (message: string) => void): Promise<string> {
  const connection = process.env.BHWIKI_ADMIN_DATABASE_URL;
  if (connection) {
    const sql = postgres(connection, {
      max: 1, prepare: false, connect_timeout: 5, idle_timeout: 5,
      onnotice: (notice) => onNotice?.(notice.message),
    });
    try {
      const rows = await sql.unsafe(script);
      return JSON.stringify(rows);
    } finally {
      await sql.end({ timeout: 2 });
    }
  }
  if (!process.argv.includes("--docker")) {
    throw new Error("Set BHWIKI_ADMIN_DATABASE_URL, or explicitly pass --docker to check the local supa-oriole-db container.");
  }
  return new Promise((resolve, reject) => {
    const child = spawn("docker", ["exec", "-i", "supa-oriole-db", "psql", "-X", "-qAt", "-v", "ON_ERROR_STOP=1", "-U", "postgres", "-d", "postgres"], { stdio: ["pipe", "pipe", "pipe"] });
    let stdout = "";
    let stderr = "";
    child.stdout.on("data", (chunk: Buffer) => { stdout += chunk.toString(); });
    child.stderr.on("data", (chunk: Buffer) => {
      stderr += chunk.toString();
      onNotice?.(stderr);
    });
    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) resolve(stdout.trim());
      else reject(new Error(`Database check failed (${code}): ${stderr.trim()}`));
    });
    child.stdin.on("error", () => { /* Process failure is reported by close. */ });
    child.stdin.end(script);
  });
}

export const sqlString = (value: string): string => `'${value.replaceAll("'", "''")}'`;

// All fixtures use fresh identifiers and are rolled back, including publication
// revisions. Verification never disables an immutability trigger or deletes history.
const fixtureSlug = () => `verification-${randomUUID()}`;

function fixtureDocument(slug: string, summary = "Database verification fixture") {
  return { slug, name: "Database verification fixture", summary, aliases: [], category: "fixture", formula: "", tags: [], editorialStatus: "sourced-draft", reviewedAt: "2026-09-29", halfLife: { label: "Not assessed" } };
}

function publishStatement(slug: string, variant: "a" | "b" = "a"): string {
  return `SELECT bhwiki.publish_article(${sqlString(JSON.stringify(fixtureDocument(slug, `Fixture ${variant}`)))}::jsonb, '${variant.repeat(64)}', NULL, '["Database verification"]'::jsonb, '[]'::jsonb, 'Rollback-only verification');`;
}

export function verificationSql(slug = fixtureSlug()): string {
  return `
BEGIN;
SET LOCAL lock_timeout = '5s';
SET LOCAL statement_timeout = '20s';
SELECT pg_advisory_xact_lock(674928105);
DO $privileges$
DECLARE target record;
BEGIN
  IF to_regclass('bhwiki.article_revisions') IS NULL THEN
    RAISE EXCEPTION 'Apply the reference-model migration before running db:verify';
  END IF;
  IF EXISTS (
    SELECT FROM pg_class c JOIN pg_namespace n ON n.oid = c.relnamespace JOIN pg_am a ON a.oid = c.relam
    WHERE n.nspname = 'bhwiki' AND c.relkind = 'r' AND a.amname <> 'orioledb'
  ) THEN RAISE EXCEPTION 'A BHWiki table does not use OrioleDB'; END IF;
  IF EXISTS (
    SELECT FROM pg_roles WHERE rolname = 'bhwiki_reader'
      AND (rolsuper OR rolcreatedb OR rolcreaterole OR rolbypassrls)
  ) OR EXISTS (
    SELECT FROM pg_auth_members m JOIN pg_roles r ON r.oid = m.member WHERE r.rolname = 'bhwiki_reader'
  ) THEN RAISE EXCEPTION 'Reader has privileged attributes or role memberships'; END IF;
  IF has_schema_privilege('bhwiki_reader', 'bhwiki', 'CREATE') THEN
    RAISE EXCEPTION 'Reader can create schema objects';
  END IF;
  IF EXISTS (
    SELECT FROM pg_class c JOIN pg_namespace n ON n.oid = c.relnamespace
    WHERE n.nspname IN ('public', 'auth', 'umami') AND c.relkind IN ('r', 'p', 'v', 'm')
      AND has_table_privilege('bhwiki_reader', c.oid, 'SELECT,INSERT,UPDATE,DELETE')
  ) THEN RAISE EXCEPTION 'Reader has access to another tenant table'; END IF;
  IF EXISTS (
    SELECT FROM pg_proc p JOIN pg_namespace n ON n.oid = p.pronamespace
    WHERE n.nspname IN ('public', 'auth', 'umami') AND p.prosecdef
      AND has_function_privilege('bhwiki_reader', p.oid, 'EXECUTE')
  ) THEN RAISE EXCEPTION 'Reader can execute another tenant security-definer function'; END IF;
  IF EXISTS (
    SELECT FROM pg_class c JOIN pg_namespace n ON n.oid = c.relnamespace
    WHERE n.nspname = 'bhwiki' AND c.relkind = 'r'
      AND has_table_privilege('bhwiki_reader', c.oid, 'INSERT,UPDATE,DELETE,TRUNCATE')
  ) THEN RAISE EXCEPTION 'Reader has a table write privilege'; END IF;
  FOR target IN SELECT rolname FROM pg_roles WHERE rolname IN ('anon', 'authenticated', 'service_role', 'umami') LOOP
    IF has_schema_privilege(target.rolname, 'bhwiki', 'USAGE') THEN
      RAISE EXCEPTION 'Unexpected BHWiki access for role %', target.rolname;
    END IF;
  END LOOP;
END $privileges$;

SET LOCAL ROLE bhwiki_owner;
DO $publication$
DECLARE
  doc_a jsonb := ${sqlString(JSON.stringify(fixtureDocument(slug, "Fixture A")))}::jsonb;
  doc_b jsonb := ${sqlString(JSON.stringify(fixtureDocument(slug, "Fixture B")))}::jsonb;
  first_revision bigint; duplicate_revision bigint; second_revision bigint; third_revision bigint;
  fixture_entity bigint; hidden_entity bigint; concept_entity bigint; hidden_edge bigint; visible_edge bigint;
  blocked boolean;
BEGIN
  first_revision := bhwiki.publish_article(doc_a, repeat('a', 64), NULL, '["Database verification"]', '[]', 'Fixture A');
  duplicate_revision := bhwiki.publish_article(doc_a, repeat('a', 64), NULL, '["Database verification"]', '[]', 'Unchanged fixture A');
  SELECT id INTO fixture_entity FROM bhwiki.entities WHERE slug = ${sqlString(slug)};
  IF first_revision <> duplicate_revision OR (SELECT count(*) FROM bhwiki.article_revisions WHERE entity_id = fixture_entity) <> 1 THEN
    RAISE EXCEPTION 'An unchanged import created a new publication';
  END IF;
  second_revision := bhwiki.publish_article(doc_b, repeat('b', 64), NULL, '["Database verification"]', '[]', 'Fixture B');
  third_revision := bhwiki.publish_article(doc_a, repeat('a', 64), NULL, '["Database verification"]', '[]', 'Restore fixture A');
  IF third_revision = first_revision OR third_revision = second_revision
    OR (SELECT count(*) FROM bhwiki.article_revisions WHERE entity_id = fixture_entity) <> 3
    OR (SELECT revision_number FROM bhwiki.article_revisions WHERE id = third_revision) <> 3
    OR (SELECT published_revision_id FROM bhwiki.articles WHERE entity_id = fixture_entity) <> third_revision
    OR (SELECT document FROM bhwiki.article_revisions WHERE id = third_revision) <> doc_a THEN
    RAISE EXCEPTION 'A -> B -> A did not produce a third atomic publication';
  END IF;
  blocked := false;
  BEGIN
    UPDATE bhwiki.article_revisions SET summary = 'Must fail' WHERE id = first_revision;
  EXCEPTION WHEN raise_exception THEN
    IF SQLERRM NOT LIKE '%immutable%' THEN RAISE; END IF;
    blocked := true;
  END;
  IF NOT blocked THEN RAISE EXCEPTION 'A published revision was editable'; END IF;
  blocked := false;
  BEGIN
    DELETE FROM bhwiki.article_revisions WHERE id = first_revision;
  EXCEPTION WHEN raise_exception THEN
    IF SQLERRM NOT LIKE '%immutable%' THEN RAISE; END IF;
    blocked := true;
  END;
  IF NOT blocked THEN RAISE EXCEPTION 'A published revision was deletable'; END IF;

  INSERT INTO bhwiki.article_revisions
    (entity_id, revision_number, document, content_hash, editorial_status, summary, published_at)
    VALUES (fixture_entity, 4, '{"privateDraft":true}', repeat('d', 64), 'sourced-draft', 'Unpublished private draft', NULL);
  INSERT INTO bhwiki.entities (slug, entity_type, label, status)
    VALUES (${sqlString(`${slug}-draft`)}, 'substance', 'Unpublished fixture', 'draft') RETURNING id INTO hidden_entity;
  INSERT INTO bhwiki.articles (entity_id, catalog) VALUES (hidden_entity, '{"privateDraft":true}');
  INSERT INTO bhwiki.entity_aliases (entity_id, alias) VALUES (hidden_entity, 'private-draft-alias');
  INSERT INTO bhwiki.entities (slug, entity_type, label, status)
    VALUES (${sqlString(`${slug}-concept`)}, 'effect', 'Published concept fixture', 'published') RETURNING id INTO concept_entity;
  INSERT INTO bhwiki.concepts (entity_id, document) VALUES (concept_entity, '{"fixture":true}');
  INSERT INTO bhwiki.relationships (slug, label, relation, description, source_url, source_urls, status)
    VALUES (${sqlString(`${slug}-visible-edge`)}, 'Complete fixture', 'fixture', 'Rollback-only verification', 'https://example.org/fixture', '["https://example.org/fixture"]', 'published') RETURNING id INTO visible_edge;
  INSERT INTO bhwiki.relationship_members (relationship_id, entity_id, member_role)
    VALUES (visible_edge, fixture_entity, 'subject'), (visible_edge, concept_entity, 'effect');
  INSERT INTO bhwiki.relationships (slug, label, relation, description, source_url, source_urls, status)
    VALUES (${sqlString(`${slug}-hidden-edge`)}, 'Incomplete fixture', 'fixture', 'Rollback-only verification', 'https://example.org/fixture', '["https://example.org/fixture"]', 'published') RETURNING id INTO hidden_edge;
  INSERT INTO bhwiki.relationship_members (relationship_id, entity_id, member_role)
    VALUES (hidden_edge, fixture_entity, 'subject'), (hidden_edge, hidden_entity, 'unpublished-context');
  PERFORM set_config('bhwiki.verification_entity', fixture_entity::text, true);
  PERFORM set_config('bhwiki.verification_hidden_entity', hidden_entity::text, true);
  PERFORM set_config('bhwiki.verification_visible_edge', visible_edge::text, true);
  PERFORM set_config('bhwiki.verification_hidden_edge', hidden_edge::text, true);
END $publication$;
RESET ROLE;
SET LOCAL ROLE bhwiki_reader;
DO $reader$
DECLARE fixture_entity bigint := current_setting('bhwiki.verification_entity')::bigint;
  hidden_entity bigint := current_setting('bhwiki.verification_hidden_entity')::bigint;
  visible_edge bigint := current_setting('bhwiki.verification_visible_edge')::bigint;
  hidden_edge bigint := current_setting('bhwiki.verification_hidden_edge')::bigint;
BEGIN
  IF (SELECT count(*) FROM bhwiki.articles WHERE entity_id = fixture_entity) <> 1
    OR (SELECT count(*) FROM bhwiki.article_revisions WHERE entity_id = fixture_entity) <> 3 THEN
    RAISE EXCEPTION 'Reader cannot see published history, or can see an unpublished revision';
  END IF;
  IF EXISTS (SELECT FROM bhwiki.entities WHERE id = hidden_entity)
    OR EXISTS (SELECT FROM bhwiki.articles WHERE entity_id = hidden_entity)
    OR EXISTS (SELECT FROM bhwiki.entity_aliases WHERE entity_id = hidden_entity) THEN
    RAISE EXCEPTION 'Unpublished draft data is visible to the reader';
  END IF;
  IF (SELECT count(*) FROM bhwiki.relationships WHERE id = visible_edge) <> 1
    OR (SELECT count(*) FROM bhwiki.relationship_members WHERE relationship_id = visible_edge) <> 2 THEN
    RAISE EXCEPTION 'Reader cannot see the complete published relationship';
  END IF;
  IF EXISTS (SELECT FROM bhwiki.relationships WHERE id = hidden_edge)
    OR EXISTS (SELECT FROM bhwiki.relationship_members WHERE relationship_id = hidden_edge) THEN
    RAISE EXCEPTION 'A relationship with unpublished participants is visible';
  END IF;
  BEGIN
    UPDATE bhwiki.entities SET label = 'Must fail' WHERE id = fixture_entity;
    RAISE EXCEPTION 'Reader write was permitted';
  EXCEPTION WHEN insufficient_privilege THEN NULL;
  END;
  BEGIN
    PERFORM bhwiki.publish_article('{}', repeat('a', 64), NULL, '[]', '[]', 'Must fail');
    RAISE EXCEPTION 'Reader publication was permitted';
  EXCEPTION WHEN insufficient_privilege THEN NULL;
  END;
END $reader$;
RESET ROLE;
ROLLBACK;
SELECT 'Publication, immutability, RLS, tenant isolation and OrioleDB checks passed; all fixtures rolled back.' AS result;
`;
}

async function verifyConcurrentPublication(): Promise<void> {
  const slug = fixtureSlug();
  let reportReady!: () => void;
  const ready = new Promise<void>((resolve) => { reportReady = resolve; });
  const holder = runDatabaseCheck(`
    BEGIN;
    SET LOCAL statement_timeout = '10s';
    SET LOCAL lock_timeout = '5s';
    SET LOCAL ROLE bhwiki_owner;
    ${publishStatement(slug)}
    DO $ready$ BEGIN RAISE NOTICE 'BHWIKI_VERIFICATION_LOCK_READY'; END $ready$;
    SELECT pg_sleep(3);
    ROLLBACK;
  `, (message) => { if (message.includes("BHWIKI_VERIFICATION_LOCK_READY")) reportReady(); });
  // Propagate failure before readiness instead of hanging.
  await Promise.race([ready, holder.then(() => { throw new Error("Publication holder completed without a readiness signal"); })]);
  try {
    await assert.rejects(runDatabaseCheck(`
      BEGIN;
      SET LOCAL statement_timeout = '5s';
      SET LOCAL lock_timeout = '250ms';
      SET LOCAL ROLE bhwiki_owner;
      ${publishStatement(slug, "b")}
      ROLLBACK;
    `), /lock timeout/, "A competing publisher must wait for the first publication transaction");
  } finally {
    await holder;
  }
  await runDatabaseCheck(`
    BEGIN;
    SET LOCAL statement_timeout = '5s';
    SET LOCAL lock_timeout = '2s';
    SET LOCAL ROLE bhwiki_owner;
    ${publishStatement(slug, "b")}
    DO $number$ BEGIN
      IF (SELECT revision_number FROM bhwiki.article_revisions r JOIN bhwiki.entities e ON e.id = r.entity_id WHERE e.slug = ${sqlString(slug)}) <> 1 THEN
        RAISE EXCEPTION 'Rolled-back publication affected revision numbering';
      END IF;
    END $number$;
    ROLLBACK;
    DO $cleanup$ BEGIN
      IF EXISTS (SELECT FROM bhwiki.entities WHERE slug = ${sqlString(slug)}) THEN
        RAISE EXCEPTION 'Concurrent test left a committed fixture';
      END IF;
    END $cleanup$;
  `);
}

export async function verifyDatabase(): Promise<void> {
  if (process.argv.includes("--sql")) {
    process.stdout.write(verificationSql());
    return;
  }
  console.log(await runDatabaseCheck(verificationSql()));
  await verifyConcurrentPublication();
  console.log("Concurrent publication lock contention and successful retry verified; both publishers rolled back.");
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  verifyDatabase().catch((error: unknown) => {
    const secret = process.env.BHWIKI_ADMIN_DATABASE_URL;
    const message = error instanceof Error ? error.message : String(error);
    console.error(secret ? message.replaceAll(secret, "[administrator URL]") : message);
    process.exitCode = 1;
  });
}
