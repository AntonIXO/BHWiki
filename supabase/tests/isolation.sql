-- Execute as deployment administrator inside BEGIN/ROLLBACK. Never commits fixtures.
DO $isolation$
DECLARE target record;
BEGIN
  IF EXISTS (
    SELECT FROM pg_class c JOIN pg_namespace n ON n.oid = c.relnamespace
    WHERE n.nspname IN ('public', 'auth', 'umami') AND c.relkind IN ('r','p','v','m')
      AND (has_table_privilege('bhwiki_reader', c.oid, 'SELECT')
        OR has_table_privilege('bhwiki_reader', c.oid, 'INSERT')
        OR has_table_privilege('bhwiki_reader', c.oid, 'UPDATE')
        OR has_table_privilege('bhwiki_reader', c.oid, 'DELETE'))
  ) THEN RAISE EXCEPTION 'BHWiki reader can access another tenant'; END IF;
  IF has_schema_privilege('bhwiki_reader', 'bhwiki', 'CREATE') THEN
    RAISE EXCEPTION 'BHWiki reader can create schema objects';
  END IF;
  IF EXISTS (
    SELECT FROM pg_proc p JOIN pg_namespace n ON n.oid = p.pronamespace
    WHERE n.nspname IN ('public', 'auth', 'umami') AND p.prosecdef
      AND has_function_privilege('bhwiki_reader', p.oid, 'EXECUTE')
  ) THEN RAISE EXCEPTION 'BHWiki reader can execute another tenant security definer'; END IF;
  FOR target IN SELECT rolname FROM pg_roles WHERE rolname IN ('anon', 'authenticated', 'service_role', 'umami') LOOP
    IF has_schema_privilege(target.rolname, 'bhwiki', 'USAGE') THEN
      RAISE EXCEPTION 'Unexpected BHWiki access for role %', target.rolname;
    END IF;
  END LOOP;
  IF EXISTS (SELECT FROM pg_class c JOIN pg_namespace n ON n.oid = c.relnamespace
    JOIN pg_am a ON a.oid = c.relam WHERE n.nspname = 'bhwiki' AND c.relkind = 'r' AND (a.amname <> 'orioledb' OR NOT c.relrowsecurity)) THEN
    RAISE EXCEPTION 'Every BHWiki application table must use OrioleDB and RLS';
  END IF;
  IF has_table_privilege('bhwiki_reader', 'bhwiki.substances', 'SELECT')
    OR has_table_privilege('bhwiki_reader', 'bhwiki.optihealth_aggregates', 'SELECT')
    OR has_table_privilege('bhwiki_reader', 'bhwiki.vendor_reports', 'SELECT') THEN
    RAISE EXCEPTION 'Prototype tables remain exposed';
  END IF;
END
$isolation$;

SELECT bhwiki.publish_article('{"slug":"bhwiki-isolation-visible","name":"Visible fixture","editorialStatus":"sourced-draft","halfLife":{"label":"Not established"}}', repeat('a',64), NULL, '[]', '[]', 'Rollback isolation fixture');
INSERT INTO bhwiki.entities (slug, entity_type, label, status) VALUES ('bhwiki-isolation-hidden', 'substance', 'Hidden fixture', 'draft');
INSERT INTO bhwiki.articles (entity_id, catalog) SELECT id, '{}'::jsonb FROM bhwiki.entities WHERE slug = 'bhwiki-isolation-hidden';
INSERT INTO bhwiki.article_revisions (entity_id, revision_number, document, content_hash, editorial_status, summary)
SELECT id, 1, '{"slug":"bhwiki-isolation-hidden"}', repeat('b',64), 'sourced-draft', 'Unpublished fixture' FROM bhwiki.entities WHERE slug = 'bhwiki-isolation-hidden';

SET LOCAL ROLE bhwiki_reader;
DO $reader$
BEGIN
  IF (SELECT count(*) FROM bhwiki.entities WHERE slug = 'bhwiki-isolation-visible') <> 1 THEN
    RAISE EXCEPTION 'Published content is not readable';
  END IF;
  IF EXISTS (SELECT FROM bhwiki.entities WHERE slug = 'bhwiki-isolation-hidden') THEN
    RAISE EXCEPTION 'Draft entity leaked';
  END IF;
  IF EXISTS (SELECT FROM bhwiki.article_revisions WHERE document->>'slug' = 'bhwiki-isolation-hidden') THEN
    RAISE EXCEPTION 'Unpublished revision leaked';
  END IF;
  BEGIN
    UPDATE bhwiki.entities SET label = 'Must fail' WHERE slug = 'bhwiki-isolation-visible';
    RAISE EXCEPTION 'Reader write was permitted';
  EXCEPTION WHEN insufficient_privilege THEN NULL;
  END;
  BEGIN
    PERFORM bhwiki.publish_article('{}', repeat('a',64), NULL, '[]', '[]', 'Must fail');
    RAISE EXCEPTION 'Reader publication was permitted';
  EXCEPTION WHEN insufficient_privilege THEN NULL;
  END;
END
$reader$;
RESET ROLE;
SELECT 'BHWiki v2 isolation and OrioleDB checks passed' AS result;
