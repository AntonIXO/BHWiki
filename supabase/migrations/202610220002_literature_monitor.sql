-- Automated literature discovery is an editorial inbox, never a publication path.
-- The worker may write proposed records; the public reader must not see them.
SET LOCAL lock_timeout = '5s';
SET LOCAL statement_timeout = '60s';
SET LOCAL ROLE bhwiki_owner;
SET LOCAL search_path = bhwiki, pg_catalog;

CREATE TABLE bhwiki.literature_runs (
  id text PRIMARY KEY CHECK (id ~ '^[a-z0-9][a-z0-9:-]{7,127}$'),
  since_date date NOT NULL,
  source text NOT NULL CHECK (source IN ('europepmc')),
  status text NOT NULL CHECK (status IN ('running', 'completed', 'failed')),
  papers_seen integer NOT NULL DEFAULT 0 CHECK (papers_seen >= 0),
  papers_new integer NOT NULL DEFAULT 0 CHECK (papers_new >= 0),
  suggestions_created integer NOT NULL DEFAULT 0 CHECK (suggestions_created >= 0),
  error text,
  started_at timestamptz NOT NULL DEFAULT now(),
  finished_at timestamptz
) USING orioledb;

CREATE TABLE bhwiki.literature_papers (
  id text PRIMARY KEY CHECK (id ~ '^(pmid:[0-9]+|doi:.+|title:[a-f0-9]{24})$'),
  title text NOT NULL,
  abstract text NOT NULL DEFAULT '',
  url text NOT NULL CHECK (url ~ '^https://'),
  doi text,
  pmid text,
  pmcid text,
  published_on date,
  journal text,
  authors jsonb NOT NULL DEFAULT '[]'::jsonb CHECK (jsonb_typeof(authors) = 'array'),
  source_kind text NOT NULL CHECK (source_kind IN ('europepmc')),
  matched_substances jsonb NOT NULL CHECK (jsonb_typeof(matched_substances) = 'array'),
  matched_terms jsonb NOT NULL CHECK (jsonb_typeof(matched_terms) = 'array'),
  raw jsonb NOT NULL CHECK (jsonb_typeof(raw) = 'object'),
  status text NOT NULL DEFAULT 'discovered' CHECK (status IN ('discovered', 'analyzed', 'accepted', 'rejected', 'imported', 'error')),
  first_seen_at timestamptz NOT NULL DEFAULT now(),
  last_seen_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (pmid),
  UNIQUE (doi)
) USING orioledb;
CREATE INDEX literature_papers_status_date_idx ON bhwiki.literature_papers (status, published_on DESC);

CREATE TABLE bhwiki.literature_suggestions (
  id text PRIMARY KEY CHECK (id ~ '^[a-z0-9][a-z0-9:-]{7,127}$'),
  paper_id text NOT NULL REFERENCES bhwiki.literature_papers(id),
  substance_slug text NOT NULL,
  suggestion_type text NOT NULL CHECK (suggestion_type IN ('new-reference', 'new-outcome', 'new-effect', 'new-claim', 'new-caution', 'ignore')),
  payload jsonb NOT NULL CHECK (jsonb_typeof(payload) = 'object'),
  rationale text NOT NULL,
  evidence_quotes jsonb NOT NULL CHECK (jsonb_typeof(evidence_quotes) = 'array'),
  llm_model text NOT NULL,
  llm_confidence numeric CHECK (llm_confidence IS NULL OR (llm_confidence >= 0 AND llm_confidence <= 1)),
  status text NOT NULL DEFAULT 'proposed' CHECK (status IN ('proposed', 'approved', 'rejected', 'applied', 'error')),
  reviewer text,
  review_note text,
  created_at timestamptz NOT NULL DEFAULT now(),
  reviewed_at timestamptz,
  UNIQUE (paper_id, substance_slug, suggestion_type, llm_model, rationale)
) USING orioledb;
CREATE INDEX literature_suggestions_review_idx ON bhwiki.literature_suggestions (status, created_at DESC);
CREATE INDEX literature_suggestions_substance_idx ON bhwiki.literature_suggestions (substance_slug, status);

ALTER TABLE bhwiki.literature_runs ENABLE ROW LEVEL SECURITY;
ALTER TABLE bhwiki.literature_papers ENABLE ROW LEVEL SECURITY;
ALTER TABLE bhwiki.literature_suggestions ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON bhwiki.literature_runs, bhwiki.literature_papers, bhwiki.literature_suggestions FROM PUBLIC, bhwiki_reader;

COMMENT ON TABLE bhwiki.literature_papers IS 'Private discovery inbox. Raw metadata is retained for audit; it is not public evidence.';
COMMENT ON TABLE bhwiki.literature_suggestions IS 'LLM-generated editorial proposals. A human must review and apply them through the source-controlled publication workflow.';

RESET ROLE;
