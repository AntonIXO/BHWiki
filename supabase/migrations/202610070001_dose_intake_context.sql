-- Optional, source-linked intake context for dose records.
SET LOCAL lock_timeout = '5s';
SET LOCAL statement_timeout = '60s';
SET LOCAL ROLE bhwiki_owner;
SET LOCAL search_path = bhwiki, pg_catalog;

ALTER TABLE bhwiki.doses
  ADD COLUMN IF NOT EXISTS food_relation text
    CHECK (food_relation IS NULL OR food_relation IN ('empty-stomach', 'with-food', 'with-or-without-food', 'food-effect-not-established')),
  ADD COLUMN IF NOT EXISTS solubility text
    CHECK (solubility IS NULL OR solubility IN ('water-soluble', 'fat-soluble', 'formulation-dependent', 'solubility-not-established')),
  ADD COLUMN IF NOT EXISTS absorption_note text;
