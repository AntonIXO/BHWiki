SET LOCAL lock_timeout = '5s';
SET LOCAL statement_timeout = '60s';
SET LOCAL ROLE bhwiki_owner;
SET LOCAL search_path = bhwiki, pg_catalog;
DO $engine$ BEGIN
  IF NOT EXISTS (SELECT FROM pg_am WHERE amname='orioledb') THEN
    RAISE EXCEPTION 'BHWiki requires OrioleDB';
  END IF;
END $engine$;
ALTER TABLE bhwiki.effect_observations ADD COLUMN observation_key text;
ALTER TABLE bhwiki.effect_observations ADD COLUMN record jsonb CHECK (record IS NULL OR jsonb_typeof(record)='object');
CREATE UNIQUE INDEX effect_observations_key_idx ON bhwiki.effect_observations(article_id,observation_type,observation_key);
ALTER TABLE bhwiki.relationships ADD COLUMN directed_steps jsonb NOT NULL DEFAULT '[]'::jsonb CHECK (jsonb_typeof(directed_steps)='array');
RESET ROLE;
