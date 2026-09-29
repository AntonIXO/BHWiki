-- Attribution and review corrections are immutable publication events.
-- A source-code commit alone does not change an otherwise identical publication.
SET LOCAL lock_timeout = '5s';
SET LOCAL statement_timeout = '60s';
SET LOCAL ROLE bhwiki_owner;
SET LOCAL search_path = bhwiki, pg_catalog;

CREATE OR REPLACE FUNCTION bhwiki.publish_article(
  p_document jsonb, p_content_hash text, p_source_commit text,
  p_contributors jsonb, p_reviewers jsonb, p_summary text
) RETURNS bigint LANGUAGE plpgsql AS $fn$
DECLARE v_entity bigint; v_current bigint; v_revision bigint; v_number integer; v_catalog jsonb;
BEGIN
  PERFORM pg_advisory_xact_lock(674928105);
  IF coalesce(p_document->>'slug', '') !~ '^[a-z0-9]+(-[a-z0-9]+)*$' THEN
    RAISE EXCEPTION 'Article requires a valid slug';
  END IF;
  INSERT INTO bhwiki.entities (slug, entity_type, label, status)
    VALUES (p_document->>'slug', 'substance', p_document->>'name', 'published')
    ON CONFLICT (slug) DO UPDATE SET label = EXCLUDED.label, status = 'published'
    RETURNING id INTO v_entity;
  IF (SELECT entity_type FROM bhwiki.entities WHERE id = v_entity) <> 'substance' THEN
    RAISE EXCEPTION 'Article slug is already used by a concept';
  END IF;
  SELECT published_revision_id INTO v_current FROM bhwiki.articles WHERE entity_id = v_entity FOR UPDATE;
  IF v_current IS NOT NULL AND EXISTS (
    SELECT FROM bhwiki.article_revisions WHERE id = v_current AND content_hash = p_content_hash AND document = p_document
      AND contributors = p_contributors AND reviewers = p_reviewers
      AND editorial_status = p_document->>'editorialStatus' AND summary = p_summary
  ) THEN RETURN v_current; END IF;
  SELECT coalesce(max(revision_number), 0) + 1 INTO v_number FROM bhwiki.article_revisions WHERE entity_id = v_entity;
  INSERT INTO bhwiki.article_revisions (entity_id, revision_number, document, content_hash, source_commit, contributors, reviewers, editorial_status, summary, published_at)
    VALUES (v_entity, v_number, p_document, p_content_hash, p_source_commit, p_contributors, p_reviewers, p_document->>'editorialStatus', p_summary, clock_timestamp())
    RETURNING id INTO v_revision;
  SELECT jsonb_object_agg(key, value) INTO v_catalog FROM jsonb_each(p_document)
    WHERE key = ANY(ARRAY['slug','name','summary','aliases','formula','category','tags','editorialStatus','reviewedAt']);
  v_catalog := v_catalog || jsonb_build_object('halfLifeLabel', p_document->'halfLife'->>'label');
  INSERT INTO bhwiki.articles (entity_id, published_revision_id, catalog) VALUES (v_entity, v_revision, v_catalog)
    ON CONFLICT (entity_id) DO UPDATE SET published_revision_id = EXCLUDED.published_revision_id, catalog = EXCLUDED.catalog;
  RETURN v_revision;
END $fn$;
REVOKE ALL ON FUNCTION bhwiki.publish_article(jsonb,text,text,jsonb,jsonb,text) FROM PUBLIC, bhwiki_reader;
RESET ROLE;
