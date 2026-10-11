-- Reconcile legacy sparse source rows with their canonical DOI/PMID rows.
--
-- Older BHWiki seeds could create a PubMed/DOI URL-only source before the
-- same source was imported with its PMID/DOI. The current publisher correctly
-- refuses to guess when both rows match one identity. This transaction is the
-- explicit, narrowly-scoped consolidation step: only sparse rows whose URL
-- deterministically contains an existing canonical PMID/DOI are merged.
BEGIN;
SET LOCAL lock_timeout = '5s';
SET LOCAL statement_timeout = '60s';
SELECT pg_advisory_xact_lock(674928105);
SET LOCAL ROLE bhwiki_owner;

DO $consolidate$
DECLARE
  pair record;
  moved integer;
BEGIN
  FOR pair IN
    SELECT DISTINCT ON (duplicate.id)
      canonical.id AS canonical_id,
      duplicate.id AS duplicate_id
    FROM bhwiki.sources AS canonical
    JOIN bhwiki.sources AS duplicate
      ON duplicate.id <> canonical.id
     AND duplicate.doi IS NULL
     AND duplicate.pmid IS NULL
     AND (
       (canonical.pmid IS NOT NULL
        AND duplicate.url ~* ('^https?://(www\.)?pubmed\.ncbi\.nlm\.nih\.gov/' || canonical.pmid::text || '/?$'))
       OR
       (canonical.doi IS NOT NULL
        AND lower(trim(trailing '/' FROM duplicate.url)) IN (
          'https://doi.org/' || lower(canonical.doi),
          'http://doi.org/' || lower(canonical.doi),
          'https://dx.doi.org/' || lower(canonical.doi),
          'http://dx.doi.org/' || lower(canonical.doi)
        ))
     )
    ORDER BY duplicate.id, (canonical.doi IS NOT NULL) DESC, canonical.id
  LOOP
    UPDATE bhwiki.article_sources SET source_id = pair.canonical_id WHERE source_id = pair.duplicate_id;
    UPDATE bhwiki.claim_sources SET source_id = pair.canonical_id WHERE source_id = pair.duplicate_id;
    UPDATE bhwiki.doses SET source_id = pair.canonical_id WHERE source_id = pair.duplicate_id;
    UPDATE bhwiki.effect_observations SET source_id = pair.canonical_id WHERE source_id = pair.duplicate_id;
    UPDATE bhwiki.pk_modifiers SET source_id = pair.canonical_id WHERE source_id = pair.duplicate_id;
    UPDATE bhwiki.pk_observations SET source_id = pair.canonical_id WHERE source_id = pair.duplicate_id;
    DELETE FROM bhwiki.sources WHERE id = pair.duplicate_id;
    GET DIAGNOSTICS moved = ROW_COUNT;
    RAISE NOTICE 'Consolidated source % into canonical source %', pair.duplicate_id, pair.canonical_id;
  END LOOP;
END
$consolidate$;

RESET ROLE;
COMMIT;
