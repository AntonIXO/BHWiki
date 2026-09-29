-- Isolated, additive objects only. Never changes OptiHealth, auth, or Umami objects.
-- The migration runner wraps this entire file in one transaction.
SET LOCAL lock_timeout = '5s';
SET LOCAL statement_timeout = '60s';

DO $roles$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'bhwiki_owner') THEN
    CREATE ROLE bhwiki_owner NOLOGIN NOSUPERUSER NOCREATEDB NOCREATEROLE NOINHERIT NOBYPASSRLS;
  END IF;
  IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'bhwiki_reader') THEN
    CREATE ROLE bhwiki_reader NOLOGIN NOSUPERUSER NOCREATEDB NOCREATEROLE NOINHERIT NOBYPASSRLS CONNECTION LIMIT 3;
  END IF;
  IF EXISTS (
    SELECT FROM pg_roles WHERE rolname IN ('bhwiki_owner', 'bhwiki_reader')
    AND (rolsuper OR rolcreatedb OR rolcreaterole OR rolbypassrls)
  ) THEN
    RAISE EXCEPTION 'Existing BHWiki role has excessive privileges; refusing migration';
  END IF;
  IF EXISTS (
    SELECT FROM pg_auth_members m JOIN pg_roles r ON r.oid = m.member
    WHERE r.rolname IN ('bhwiki_owner', 'bhwiki_reader')
  ) THEN
    RAISE EXCEPTION 'Existing BHWiki role has role memberships; refusing migration';
  END IF;
END
$roles$;

CREATE SCHEMA bhwiki AUTHORIZATION bhwiki_owner;
REVOKE ALL ON SCHEMA bhwiki FROM PUBLIC;
GRANT USAGE ON SCHEMA bhwiki TO bhwiki_reader;
SET LOCAL ROLE bhwiki_owner;
SET LOCAL search_path = bhwiki, pg_catalog;

-- OrioleDB is required; do not silently fall back to heap storage.
DO $engine$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_am WHERE amname = 'orioledb') THEN
    RAISE EXCEPTION 'BHWiki requires the OrioleDB extension; provision an OrioleDB-enabled PostgreSQL server first';
  END IF;
END
$engine$;

ALTER DEFAULT PRIVILEGES IN SCHEMA bhwiki REVOKE ALL ON TABLES FROM PUBLIC;
ALTER DEFAULT PRIVILEGES IN SCHEMA bhwiki REVOKE ALL ON SEQUENCES FROM PUBLIC;
ALTER DEFAULT PRIVILEGES IN SCHEMA bhwiki REVOKE EXECUTE ON FUNCTIONS FROM PUBLIC;

CREATE TABLE bhwiki.schema_migrations (
  version text PRIMARY KEY,
  checksum text NOT NULL,
  applied_at timestamptz NOT NULL DEFAULT now()
) USING orioledb;

CREATE TABLE bhwiki.substances (
  slug text PRIMARY KEY CHECK (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$'),
  name text NOT NULL,
  summary text NOT NULL,
  category text NOT NULL DEFAULT 'compound',
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'review', 'published', 'archived')),
  document jsonb NOT NULL DEFAULT '{}'::jsonb CHECK (jsonb_typeof(document) = 'object'),
  published_at timestamptz,
  reviewed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  CHECK (status <> 'published' OR (document ? 'slug' AND document->>'slug' = slug AND published_at IS NOT NULL))
) USING orioledb;
COMMENT ON COLUMN bhwiki.substances.document IS 'Versioned public rendering projection; update atomically with normalized facts and an editorial revision.';
CREATE INDEX substances_status_name_idx ON bhwiki.substances (status, name);

CREATE TABLE bhwiki.tags (
  id text PRIMARY KEY,
  slug text NOT NULL,
  label text NOT NULL,
  type text NOT NULL CHECK (type IN ('class', 'mechanism', 'target', 'neurotransmitter', 'effect', 'goal', 'risk', 'legal', 'enzyme', 'route')),
  description text NOT NULL DEFAULT '',
  jurisdiction text,
  valid_as_of date,
  UNIQUE (type, slug),
  CHECK (type <> 'legal' OR (jurisdiction IS NOT NULL AND valid_as_of IS NOT NULL))
) USING orioledb;

CREATE TABLE bhwiki.substance_tags (
  substance_slug text NOT NULL REFERENCES bhwiki.substances (slug) ON DELETE CASCADE,
  tag_id text NOT NULL REFERENCES bhwiki.tags (id),
  note text,
  PRIMARY KEY (substance_slug, tag_id)
) USING orioledb;
CREATE INDEX substance_tags_tag_idx ON bhwiki.substance_tags (tag_id);

CREATE TABLE bhwiki.publications (
  id text PRIMARY KEY,
  title text NOT NULL,
  url text NOT NULL CHECK (url ~ '^https://'),
  doi text,
  pmid text,
  year integer CHECK (year BETWEEN 1800 AND 2200),
  authors text,
  study_design text NOT NULL,
  source_kind text NOT NULL DEFAULT 'publication',
  accessed_at date NOT NULL DEFAULT CURRENT_DATE,
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'review', 'published', 'archived'))
) USING orioledb;

CREATE TABLE bhwiki.evidence_claims (
  id text PRIMARY KEY,
  substance_slug text NOT NULL REFERENCES bhwiki.substances (slug) ON DELETE CASCADE,
  publication_id text NOT NULL REFERENCES bhwiki.publications (id),
  outcome text NOT NULL,
  finding text NOT NULL,
  population text NOT NULL,
  certainty text NOT NULL CHECK (certainty IN ('high', 'moderate', 'low', 'very-low', 'ungraded')),
  direction text NOT NULL DEFAULT 'uncertain' CHECK (direction IN ('benefit', 'harm', 'mixed', 'null', 'uncertain')),
  limitations text NOT NULL,
  sample_size integer CHECK (sample_size > 0),
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'review', 'published', 'archived')),
  reviewed_at date
) USING orioledb;
CREATE INDEX evidence_claims_substance_idx ON bhwiki.evidence_claims (substance_slug);

CREATE TABLE bhwiki.dosage_contexts (
  id text PRIMARY KEY,
  substance_slug text NOT NULL REFERENCES bhwiki.substances (slug) ON DELETE CASCADE,
  publication_id text NOT NULL REFERENCES bhwiki.publications (id),
  label text NOT NULL,
  route text NOT NULL,
  formulation text NOT NULL,
  population text NOT NULL,
  purpose text NOT NULL,
  amount_min numeric CHECK (amount_min >= 0),
  amount_max numeric CHECK (amount_max >= 0),
  unit text NOT NULL,
  frequency text NOT NULL,
  context_note text NOT NULL,
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'review', 'published', 'archived')),
  CHECK (amount_min IS NULL OR amount_max IS NULL OR amount_max >= amount_min)
) USING orioledb;
COMMENT ON TABLE bhwiki.dosage_contexts IS 'Sourced study/label contexts, not individualized dosing recommendations.';

CREATE TABLE bhwiki.pharmacokinetic_profiles (
  id text PRIMARY KEY,
  substance_slug text NOT NULL REFERENCES bhwiki.substances (slug) ON DELETE CASCADE,
  publication_id text NOT NULL REFERENCES bhwiki.publications (id),
  route text NOT NULL,
  population text NOT NULL,
  half_life_min_hours numeric CHECK (half_life_min_hours > 0),
  half_life_max_hours numeric CHECK (half_life_max_hours > 0),
  peak_min_hours numeric CHECK (peak_min_hours >= 0),
  peak_max_hours numeric CHECK (peak_max_hours >= 0),
  elimination_note text NOT NULL,
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'review', 'published', 'archived')),
  CHECK (half_life_max_hours >= half_life_min_hours),
  CHECK (peak_max_hours >= peak_min_hours)
) USING orioledb;

CREATE TABLE bhwiki.pharmacokinetic_modifiers (
  id text PRIMARY KEY,
  profile_id text NOT NULL REFERENCES bhwiki.pharmacokinetic_profiles (id) ON DELETE CASCADE,
  publication_id text NOT NULL REFERENCES bhwiki.publications (id),
  factor_type text NOT NULL CHECK (factor_type IN ('enzyme', 'genotype', 'smoking', 'pregnancy', 'age', 'interaction', 'organ-function', 'other')),
  label text NOT NULL,
  direction text NOT NULL CHECK (direction IN ('slower', 'faster', 'variable', 'unknown')),
  explanation text NOT NULL,
  quantified_effect text,
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'review', 'published', 'archived'))
) USING orioledb;

CREATE TABLE bhwiki.subjective_effects (
  id text PRIMARY KEY,
  substance_slug text NOT NULL REFERENCES bhwiki.substances (slug) ON DELETE CASCADE,
  tag_id text REFERENCES bhwiki.tags (id),
  label text NOT NULL,
  description text NOT NULL,
  evidence_basis text NOT NULL CHECK (evidence_basis IN ('editorial-illustration', 'subjective-report', 'controlled-study')),
  ordinal_level integer CHECK (ordinal_level BETWEEN 0 AND 5),
  publication_id text REFERENCES bhwiki.publications (id),
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'review', 'published', 'archived')),
  CHECK (evidence_basis <> 'controlled-study' OR publication_id IS NOT NULL)
) USING orioledb;

CREATE TABLE bhwiki.hyperedges (
  id text PRIMARY KEY,
  label text NOT NULL,
  relationship text NOT NULL,
  explanation text NOT NULL,
  source_url text NOT NULL CHECK (source_url ~ '^https://'),
  publication_id text REFERENCES bhwiki.publications (id),
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'review', 'published', 'archived'))
) USING orioledb;

CREATE TABLE bhwiki.hyperedge_members (
  id text PRIMARY KEY,
  hyperedge_id text NOT NULL REFERENCES bhwiki.hyperedges (id) ON DELETE CASCADE,
  substance_slug text REFERENCES bhwiki.substances (slug) ON DELETE CASCADE,
  tag_id text REFERENCES bhwiki.tags (id),
  member_role text NOT NULL DEFAULT 'member',
  CHECK (num_nonnulls(substance_slug, tag_id) = 1),
  UNIQUE (hyperedge_id, substance_slug),
  UNIQUE (hyperedge_id, tag_id)
) USING orioledb;
CREATE INDEX hyperedge_members_edge_idx ON bhwiki.hyperedge_members (hyperedge_id);

CREATE TABLE bhwiki.editorial_revisions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  substance_slug text NOT NULL REFERENCES bhwiki.substances (slug),
  revision_number integer NOT NULL CHECK (revision_number > 0),
  document jsonb NOT NULL CHECK (jsonb_typeof(document) = 'object'),
  change_summary text NOT NULL,
  editor_reference text NOT NULL,
  status text NOT NULL CHECK (status IN ('draft', 'review', 'published', 'rejected')),
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (substance_slug, revision_number)
) USING orioledb;
COMMENT ON TABLE bhwiki.editorial_revisions IS 'Private editorial audit; no reader or Supabase anonymous grants.';

CREATE TABLE bhwiki.optihealth_aggregates (
  id text PRIMARY KEY,
  substance_slug text NOT NULL REFERENCES bhwiki.substances (slug),
  release_reference text NOT NULL,
  outcome text NOT NULL,
  cohort_size integer NOT NULL CHECK (cohort_size >= 50),
  statistic jsonb NOT NULL CHECK (jsonb_typeof(statistic) = 'object'),
  methodology text NOT NULL,
  consent_scope text NOT NULL,
  limitations text NOT NULL,
  period_start date NOT NULL,
  period_end date NOT NULL CHECK (period_end >= period_start),
  reviewed_at timestamptz,
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'review', 'published', 'withdrawn')),
  CHECK (status <> 'published' OR reviewed_at IS NOT NULL)
) USING orioledb;
COMMENT ON TABLE bhwiki.optihealth_aggregates IS 'Future curated aggregate releases only. No patient identifiers, health-table joins, ingestion jobs, or claims of causal effectiveness.';

CREATE TABLE bhwiki.vendor_reports (
  id text PRIMARY KEY,
  substance_slug text NOT NULL REFERENCES bhwiki.substances (slug),
  vendor_name text NOT NULL,
  batch_reference text NOT NULL,
  report_url text NOT NULL CHECK (report_url ~ '^https://'),
  tested_at date NOT NULL,
  lab_name text NOT NULL,
  method text NOT NULL,
  summary text NOT NULL,
  conflict_disclosure text NOT NULL,
  provenance_verified boolean NOT NULL DEFAULT false,
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'review', 'published', 'withdrawn')),
  CHECK (status <> 'published' OR provenance_verified)
) USING orioledb;
COMMENT ON TABLE bhwiki.vendor_reports IS 'Future reviewed laboratory provenance reports; not endorsements or purchasing links.';

-- Every table starts closed. Grant published reads explicitly; keep editorial
-- history private and give the runtime no INSERT/UPDATE/DELETE/EXECUTE grants.
DO $rls$
DECLARE target text;
BEGIN
  FOR target IN SELECT tablename FROM pg_tables WHERE schemaname = 'bhwiki' LOOP
    EXECUTE format('ALTER TABLE bhwiki.%I ENABLE ROW LEVEL SECURITY', target);
    EXECUTE format('REVOKE ALL ON bhwiki.%I FROM PUBLIC', target);
  END LOOP;
END
$rls$;

GRANT SELECT ON bhwiki.substances, bhwiki.tags, bhwiki.substance_tags,
  bhwiki.publications, bhwiki.evidence_claims, bhwiki.dosage_contexts,
  bhwiki.pharmacokinetic_profiles, bhwiki.pharmacokinetic_modifiers,
  bhwiki.subjective_effects, bhwiki.hyperedges, bhwiki.hyperedge_members,
  bhwiki.optihealth_aggregates, bhwiki.vendor_reports TO bhwiki_reader;

CREATE POLICY reader_published ON bhwiki.substances FOR SELECT TO bhwiki_reader USING (status = 'published');
CREATE POLICY reader_tags ON bhwiki.tags FOR SELECT TO bhwiki_reader USING (true);
CREATE POLICY reader_published ON bhwiki.publications FOR SELECT TO bhwiki_reader USING (status = 'published');
CREATE POLICY reader_published ON bhwiki.hyperedges FOR SELECT TO bhwiki_reader USING (status = 'published');
CREATE POLICY reader_substance_tags ON bhwiki.substance_tags FOR SELECT TO bhwiki_reader USING (
  EXISTS (SELECT FROM bhwiki.substances s WHERE s.slug = substance_slug AND s.status = 'published')
);

DO $policies$
DECLARE target text;
BEGIN
  FOREACH target IN ARRAY ARRAY['evidence_claims', 'dosage_contexts', 'pharmacokinetic_profiles', 'subjective_effects', 'optihealth_aggregates', 'vendor_reports'] LOOP
    EXECUTE format('CREATE POLICY reader_published ON bhwiki.%I FOR SELECT TO bhwiki_reader USING (status = ''published'' AND EXISTS (SELECT FROM bhwiki.substances s WHERE s.slug = substance_slug AND s.status = ''published''))', target);
  END LOOP;
END
$policies$;
CREATE POLICY reader_published ON bhwiki.pharmacokinetic_modifiers FOR SELECT TO bhwiki_reader USING (
  status = 'published' AND EXISTS (SELECT FROM bhwiki.pharmacokinetic_profiles p WHERE p.id = profile_id AND p.status = 'published')
);
CREATE POLICY reader_published ON bhwiki.hyperedge_members FOR SELECT TO bhwiki_reader USING (
  EXISTS (SELECT FROM bhwiki.hyperedges h WHERE h.id = hyperedge_id AND h.status = 'published')
  AND (substance_slug IS NULL OR EXISTS (SELECT FROM bhwiki.substances s WHERE s.slug = substance_slug AND s.status = 'published'))
);

RESET ROLE;
ALTER ROLE bhwiki_reader SET search_path = bhwiki, pg_catalog;
ALTER ROLE bhwiki_reader SET statement_timeout = '5s';
ALTER ROLE bhwiki_reader SET lock_timeout = '2s';
ALTER ROLE bhwiki_reader SET idle_in_transaction_session_timeout = '10s';
ALTER ROLE bhwiki_reader SET default_transaction_read_only = on;
