-- Additive replacement of the prototype's public data model. Migration 001 is immutable.
-- Legacy tables remain for rollback/audit but are no longer readable by the runtime.
SET LOCAL lock_timeout = '5s';
SET LOCAL statement_timeout = '60s';
SET LOCAL ROLE bhwiki_owner;
SET LOCAL search_path = bhwiki, pg_catalog;

DO $engine$ BEGIN
  IF NOT EXISTS (SELECT FROM pg_am WHERE amname = 'orioledb') THEN
    RAISE EXCEPTION 'BHWiki requires OrioleDB; no heap fallback is permitted';
  END IF;
END $engine$;

REVOKE ALL ON ALL TABLES IN SCHEMA bhwiki FROM bhwiki_reader;

CREATE TABLE bhwiki.entities (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  slug text NOT NULL UNIQUE CHECK (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  entity_type text NOT NULL CHECK (entity_type IN ('substance', 'class', 'chemical-family', 'mechanism', 'target', 'neurotransmitter', 'enzyme', 'effect', 'outcome', 'exposure', 'legal')),
  label text NOT NULL,
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived'))
) USING orioledb;
CREATE INDEX entities_status_type_label_idx ON bhwiki.entities (status, entity_type, label);

CREATE TABLE bhwiki.articles (
  entity_id bigint PRIMARY KEY REFERENCES bhwiki.entities (id),
  published_revision_id bigint,
  catalog jsonb NOT NULL CHECK (jsonb_typeof(catalog) = 'object')
) USING orioledb;

CREATE TABLE bhwiki.article_revisions (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  entity_id bigint NOT NULL REFERENCES bhwiki.entities (id),
  revision_number integer NOT NULL CHECK (revision_number > 0),
  document jsonb NOT NULL CHECK (jsonb_typeof(document) = 'object'),
  content_hash text NOT NULL CHECK (content_hash ~ '^[a-f0-9]{64}$'),
  source_commit text CHECK (source_commit IS NULL OR source_commit ~ '^[a-f0-9]{40,64}$'),
  contributors jsonb NOT NULL DEFAULT '[]'::jsonb CHECK (jsonb_typeof(contributors) = 'array'),
  reviewers jsonb NOT NULL DEFAULT '[]'::jsonb CHECK (jsonb_typeof(reviewers) = 'array'),
  editorial_status text NOT NULL CHECK (editorial_status IN ('sourced-draft', 'editorially-reviewed')),
  summary text NOT NULL,
  published_at timestamptz,
  UNIQUE (entity_id, revision_number),
  UNIQUE (entity_id, id),
  CHECK (editorial_status <> 'editorially-reviewed' OR jsonb_array_length(reviewers) > 0)
) USING orioledb;
CREATE INDEX article_revisions_entity_published_idx ON bhwiki.article_revisions (entity_id, published_at);
ALTER TABLE bhwiki.articles ADD CONSTRAINT articles_published_revision_fk
  FOREIGN KEY (entity_id, published_revision_id) REFERENCES bhwiki.article_revisions (entity_id, id);

CREATE TABLE bhwiki.concepts (
  entity_id bigint PRIMARY KEY REFERENCES bhwiki.entities (id),
  document jsonb NOT NULL CHECK (jsonb_typeof(document) = 'object')
) USING orioledb;
CREATE TABLE bhwiki.entity_aliases (
  entity_id bigint NOT NULL REFERENCES bhwiki.entities (id),
  alias text NOT NULL,
  PRIMARY KEY (entity_id, alias)
) USING orioledb;
CREATE INDEX entity_aliases_lookup_idx ON bhwiki.entity_aliases (alias, entity_id);
CREATE TABLE bhwiki.article_concepts (
  article_id bigint NOT NULL REFERENCES bhwiki.articles (entity_id),
  concept_id bigint NOT NULL REFERENCES bhwiki.concepts (entity_id),
  PRIMARY KEY (article_id, concept_id)
) USING orioledb;
CREATE INDEX article_concepts_reverse_idx ON bhwiki.article_concepts (concept_id, article_id);

CREATE TABLE bhwiki.sources (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  canonical_key text NOT NULL UNIQUE,
  doi text UNIQUE,
  pmid text UNIQUE,
  title text NOT NULL,
  authors text NOT NULL,
  year integer NOT NULL CHECK (year BETWEEN 1800 AND 2200),
  url text NOT NULL CHECK (url ~ '^https://'),
  kind text NOT NULL
) USING orioledb;
CREATE TABLE bhwiki.article_sources (
  article_id bigint NOT NULL REFERENCES bhwiki.articles (entity_id),
  reference_key text NOT NULL,
  source_id bigint NOT NULL REFERENCES bhwiki.sources (id),
  insight text NOT NULL,
  limitation text NOT NULL,
  funding text,
  PRIMARY KEY (article_id, reference_key)
) USING orioledb;
CREATE INDEX article_sources_source_idx ON bhwiki.article_sources (source_id, article_id);

CREATE TABLE bhwiki.claims (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  article_id bigint NOT NULL REFERENCES bhwiki.articles (entity_id),
  claim_key text NOT NULL,
  assertion text NOT NULL,
  relation text NOT NULL,
  context text NOT NULL,
  assessment text NOT NULL CHECK (assessment IN ('not-formally-assessed')),
  limitation text NOT NULL,
  UNIQUE (article_id, claim_key)
) USING orioledb;
CREATE TABLE bhwiki.claim_members (
  claim_id bigint NOT NULL REFERENCES bhwiki.claims (id) ON DELETE CASCADE,
  entity_id bigint NOT NULL REFERENCES bhwiki.entities (id),
  member_role text NOT NULL,
  PRIMARY KEY (claim_id, entity_id, member_role)
) USING orioledb;
CREATE INDEX claim_members_entity_idx ON bhwiki.claim_members (entity_id, claim_id);
CREATE TABLE bhwiki.claim_sources (
  claim_id bigint NOT NULL REFERENCES bhwiki.claims (id) ON DELETE CASCADE,
  source_id bigint NOT NULL REFERENCES bhwiki.sources (id),
  stance text NOT NULL CHECK (stance IN ('supporting', 'conflicting')),
  PRIMARY KEY (claim_id, source_id, stance)
) USING orioledb;

CREATE TABLE bhwiki.doses (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  article_id bigint NOT NULL REFERENCES bhwiki.articles (entity_id),
  source_id bigint NOT NULL REFERENCES bhwiki.sources (id),
  label text NOT NULL, amount text NOT NULL, quantity numeric, quantity_max numeric, unit text NOT NULL,
  ingredient text NOT NULL, formulation text NOT NULL, route text NOT NULL,
  frequency text NOT NULL, duration text NOT NULL, population text NOT NULL, purpose text NOT NULL,
  source_category text NOT NULL CHECK (source_category IN ('research', 'approved-label', 'reference', 'community')),
  note text NOT NULL,
  CHECK (quantity IS NULL OR quantity >= 0),
  CHECK (quantity_max IS NULL OR quantity_max >= 0),
  CHECK (quantity IS NULL OR quantity_max IS NULL OR quantity_max >= quantity)
) USING orioledb;
CREATE INDEX doses_article_idx ON bhwiki.doses (article_id);
CREATE TABLE bhwiki.pk_observations (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  article_id bigint NOT NULL REFERENCES bhwiki.articles (entity_id),
  observation_key text NOT NULL,
  source_id bigint NOT NULL REFERENCES bhwiki.sources (id),
  analyte text NOT NULL, route text NOT NULL, formulation text NOT NULL, population text NOT NULL,
  endpoint text NOT NULL CHECK (endpoint = 'elimination-half-life'),
  statistic text NOT NULL CHECK (statistic IN ('approximate', 'study-mean', 'reported-range', 'not-established')),
  value numeric, low numeric, high numeric, unit text NOT NULL CHECK (unit = 'hours'),
  context text NOT NULL, model_eligible boolean NOT NULL,
  UNIQUE (article_id, observation_key),
  CHECK (value IS NULL OR value > 0), CHECK (low IS NULL OR low > 0), CHECK (high IS NULL OR high > 0),
  CHECK (low IS NULL OR high IS NULL OR high >= low),
  CHECK (NOT model_eligible OR (statistic <> 'not-established' AND (value IS NOT NULL OR (low IS NOT NULL AND high IS NOT NULL))))
) USING orioledb;
CREATE TABLE bhwiki.pk_modifiers (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  article_id bigint NOT NULL REFERENCES bhwiki.articles (entity_id),
  observation_id bigint NOT NULL REFERENCES bhwiki.pk_observations (id) ON DELETE CASCADE,
  source_id bigint NOT NULL REFERENCES bhwiki.sources (id),
  label text NOT NULL, effect text NOT NULL, detail text NOT NULL,
  factor_type text NOT NULL CHECK (factor_type IN ('smoking', 'pregnancy', 'enzyme', 'genotype', 'other')),
  direction text NOT NULL CHECK (direction IN ('slower', 'faster', 'variable'))
) USING orioledb;
CREATE INDEX pk_modifiers_article_idx ON bhwiki.pk_modifiers (article_id);
CREATE TABLE bhwiki.effect_observations (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  article_id bigint NOT NULL REFERENCES bhwiki.articles (entity_id),
  concept_id bigint NOT NULL REFERENCES bhwiki.concepts (entity_id),
  source_id bigint NOT NULL REFERENCES bhwiki.sources (id),
  observation_type text NOT NULL CHECK (observation_type IN ('effect', 'outcome')),
  name text NOT NULL, direction text NOT NULL CHECK (direction IN ('Increased', 'Decreased', 'Variable')),
  evidence text NOT NULL CHECK (evidence IN ('Human research', 'Subjective reports', 'Limited research')),
  description text NOT NULL, population text NOT NULL, exposure text NOT NULL,
  instrument text, magnitude text
) USING orioledb;
CREATE INDEX effect_observations_article_idx ON bhwiki.effect_observations (article_id);
CREATE INDEX effect_observations_concept_idx ON bhwiki.effect_observations (concept_id, article_id);

CREATE TABLE bhwiki.relationships (
  id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  slug text NOT NULL UNIQUE,
  label text NOT NULL, relation text NOT NULL, description text NOT NULL,
  source_url text NOT NULL CHECK (source_url ~ '^https://'),
  source_urls jsonb NOT NULL CHECK (jsonb_typeof(source_urls) = 'array'),
  status text NOT NULL CHECK (status IN ('draft', 'published', 'archived'))
) USING orioledb;
CREATE INDEX relationships_status_label_idx ON bhwiki.relationships (status, label);
CREATE TABLE bhwiki.relationship_members (
  relationship_id bigint NOT NULL REFERENCES bhwiki.relationships (id) ON DELETE CASCADE,
  entity_id bigint NOT NULL REFERENCES bhwiki.entities (id),
  member_role text NOT NULL,
  PRIMARY KEY (relationship_id, entity_id)
) USING orioledb;
CREATE INDEX relationship_members_entity_idx ON bhwiki.relationship_members (entity_id, relationship_id);

CREATE FUNCTION bhwiki.protect_revision() RETURNS trigger LANGUAGE plpgsql AS $fn$
BEGIN RAISE EXCEPTION 'Article revisions are immutable; publish a new revision'; END $fn$;
CREATE TRIGGER article_revisions_immutable BEFORE UPDATE OR DELETE ON bhwiki.article_revisions
  FOR EACH ROW EXECUTE FUNCTION bhwiki.protect_revision();

-- Caller must publish normalized projections in this same transaction. Invoker rights only.
-- Compare with the CURRENT revision, not any historic hash: A -> B -> A is three publications.
CREATE FUNCTION bhwiki.publish_article(
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
REVOKE ALL ON FUNCTION bhwiki.publish_article(jsonb,text,text,jsonb,jsonb,text), bhwiki.protect_revision() FROM PUBLIC, bhwiki_reader;

DO $rls$ DECLARE t text; BEGIN
  FOREACH t IN ARRAY ARRAY['entities','articles','article_revisions','concepts','entity_aliases','article_concepts','sources','article_sources','claims','claim_members','claim_sources','doses','pk_observations','pk_modifiers','effect_observations','relationships','relationship_members'] LOOP
    EXECUTE format('ALTER TABLE bhwiki.%I ENABLE ROW LEVEL SECURITY', t);
    EXECUTE format('REVOKE ALL ON bhwiki.%I FROM PUBLIC', t);
    EXECUTE format('GRANT SELECT ON bhwiki.%I TO bhwiki_reader', t);
  END LOOP;
END $rls$;
CREATE POLICY reader_entities ON bhwiki.entities FOR SELECT TO bhwiki_reader USING (status = 'published');
CREATE POLICY reader_articles ON bhwiki.articles FOR SELECT TO bhwiki_reader USING (
  published_revision_id IS NOT NULL AND EXISTS (SELECT FROM bhwiki.entities e WHERE e.id = entity_id AND e.status = 'published')
);
CREATE POLICY reader_revisions ON bhwiki.article_revisions FOR SELECT TO bhwiki_reader USING (
  published_at IS NOT NULL AND EXISTS (SELECT FROM bhwiki.entities e WHERE e.id = entity_id AND e.status = 'published')
);
CREATE POLICY reader_concepts ON bhwiki.concepts FOR SELECT TO bhwiki_reader USING (
  EXISTS (SELECT FROM bhwiki.entities e WHERE e.id = entity_id AND e.status = 'published')
);
CREATE POLICY reader_aliases ON bhwiki.entity_aliases FOR SELECT TO bhwiki_reader USING (
  EXISTS (SELECT FROM bhwiki.entities e WHERE e.id = entity_id AND e.status = 'published')
);
CREATE POLICY reader_article_concepts ON bhwiki.article_concepts FOR SELECT TO bhwiki_reader USING (
  EXISTS (SELECT FROM bhwiki.articles a WHERE a.entity_id = article_id) AND EXISTS (SELECT FROM bhwiki.concepts c WHERE c.entity_id = concept_id)
);
DO $policies$ DECLARE t text; BEGIN
  FOREACH t IN ARRAY ARRAY['article_sources','claims','doses','pk_observations','pk_modifiers','effect_observations'] LOOP
    EXECUTE format('CREATE POLICY reader_article ON bhwiki.%I FOR SELECT TO bhwiki_reader USING (EXISTS (SELECT FROM bhwiki.articles a WHERE a.entity_id = article_id))', t);
  END LOOP;
END $policies$;
CREATE POLICY reader_sources ON bhwiki.sources FOR SELECT TO bhwiki_reader USING (
  EXISTS (SELECT FROM bhwiki.article_sources s WHERE s.source_id = id)
);
CREATE POLICY reader_claim_members ON bhwiki.claim_members FOR SELECT TO bhwiki_reader USING (
  EXISTS (SELECT FROM bhwiki.claims c WHERE c.id = claim_id) AND EXISTS (SELECT FROM bhwiki.entities e WHERE e.id = entity_id)
);
CREATE POLICY reader_claim_sources ON bhwiki.claim_sources FOR SELECT TO bhwiki_reader USING (
  EXISTS (SELECT FROM bhwiki.claims c WHERE c.id = claim_id)
);
-- Isolated boolean visibility predicate avoids recursive RLS between relationships and members.
-- Fixed search path, no dynamic SQL, no public execution, and no content returned.
CREATE FUNCTION bhwiki.relationship_is_public(p_id bigint) RETURNS boolean
  LANGUAGE sql STABLE SECURITY DEFINER SET search_path = pg_catalog AS $fn$
    SELECT EXISTS (SELECT FROM bhwiki.relationships r WHERE r.id = p_id AND r.status = 'published')
      AND (SELECT count(*) FROM bhwiki.relationship_members m WHERE m.relationship_id = p_id) >= 2
      AND NOT EXISTS (
        SELECT FROM bhwiki.relationship_members m JOIN bhwiki.entities e ON e.id = m.entity_id
        WHERE m.relationship_id = p_id AND e.status <> 'published'
      )
  $fn$;
REVOKE ALL ON FUNCTION bhwiki.relationship_is_public(bigint) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION bhwiki.relationship_is_public(bigint) TO bhwiki_reader;
CREATE POLICY reader_relationships ON bhwiki.relationships FOR SELECT TO bhwiki_reader USING (bhwiki.relationship_is_public(id));
CREATE POLICY reader_relationship_members ON bhwiki.relationship_members FOR SELECT TO bhwiki_reader USING (
  bhwiki.relationship_is_public(relationship_id)
);

DO $verify$ BEGIN
  IF EXISTS (SELECT FROM pg_class c JOIN pg_namespace n ON n.oid = c.relnamespace JOIN pg_am a ON a.oid = c.relam
    WHERE n.nspname = 'bhwiki' AND c.relkind = 'r' AND a.amname <> 'orioledb') THEN
    RAISE EXCEPTION 'Every BHWiki application table must use OrioleDB';
  END IF;
END $verify$;
RESET ROLE;
