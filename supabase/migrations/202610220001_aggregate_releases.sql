SET LOCAL lock_timeout = '5s';
SET LOCAL statement_timeout = '60s';
SET LOCAL ROLE bhwiki_owner;
SET LOCAL search_path = bhwiki, pg_catalog;

CREATE TABLE bhwiki.optihealth_aggregate_releases (
  id text PRIMARY KEY CHECK (id ~ '^[a-z0-9][a-z0-9:-]{7,127}$'),
  substance_slug text NOT NULL REFERENCES bhwiki.entities(slug),
  release_reference text NOT NULL CHECK (length(release_reference) BETWEEN 1 AND 240),
  outcome text NOT NULL CHECK (length(outcome) BETWEEN 1 AND 240),
  cohort_size integer NOT NULL CHECK (cohort_size >= 50),
  statistic jsonb NOT NULL CHECK (jsonb_typeof(statistic) = 'object' AND pg_column_size(statistic) <= 16384),
  methodology text NOT NULL CHECK (length(methodology) BETWEEN 20 AND 4000),
  consent_scope text NOT NULL CHECK (length(consent_scope) BETWEEN 10 AND 500),
  limitations text NOT NULL CHECK (length(limitations) BETWEEN 20 AND 4000),
  period_start date NOT NULL,
  period_end date NOT NULL CHECK (period_end >= period_start),
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'review', 'published', 'withdrawn')),
  reviewed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  CHECK (status <> 'published' OR reviewed_at IS NOT NULL)
) USING orioledb;

CREATE INDEX optihealth_aggregate_releases_substance_idx
  ON bhwiki.optihealth_aggregate_releases (substance_slug, status, period_end DESC);

ALTER TABLE bhwiki.optihealth_aggregate_releases ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON bhwiki.optihealth_aggregate_releases FROM PUBLIC;
GRANT SELECT ON bhwiki.optihealth_aggregate_releases TO bhwiki_reader;
CREATE POLICY reader_published ON bhwiki.optihealth_aggregate_releases
  FOR SELECT TO bhwiki_reader USING (
    status = 'published' AND EXISTS (
      SELECT FROM bhwiki.entities e
      WHERE e.slug = substance_slug AND e.status = 'published'
    )
  );

COMMENT ON TABLE bhwiki.optihealth_aggregate_releases IS
  'Curated OptiHealth community aggregates. No identifiers, raw rows, or personal joins; web submissions remain draft until editorial review.';
RESET ROLE;
