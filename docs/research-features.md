# Interactive research features

The research UI reads the same published records as article pages. Content remains in Markdown; optional enrichment is documented in [the authoring guide](../content/templates/research-enrichment.md). Existing records do not need a migration or invented values.

## Reading interfaces

- Evidence controls open a URL-addressable sheet (`?evidence=<key>`). Keys resolve through read-only `/api/evidence?key=...`; malformed keys return 400, missing records 404. Citation anchors and previews remain intact.
- Outcome and effect pages filter observations across the complete collection before 20-item pagination. The outcome views are findings, table and plot. Effect pages distinguish reporting methods and can include curated variations, reports and illustrative media.
- `/compare?substances=caffeine,l-theanine` accepts at most three unique slugs and optional `outcome`. It does not infer head-to-head evidence or rank substances.
- `/interactions?a=delta-9-thc&b=ethanol` resolves explicit exact/class targets in either direction. General cautions remain separate. Unknown combinations are unassessed, not safe.
- Article timing controls select reported contexts and elimination observations. Only explicitly elapsed measurements get absolute positions.
- Article mechanism diagrams load on demand and use the existing graph's shapes/colors. Incidence relationships preserve every qualifier; only authored steps get arrows. The adjacent list provides keyboard access.
- Study plots require typed numerical results and separate incompatible measures/populations/comparators. Missing intervals remain missing and no pooled effect is computed.

## Architecture and publication

`research.ts` supplies pure evidence keys, projections, filtering, interaction matching and plot grouping. Repository functions resolve published data in bundled or database mode. Evidence panels fetch individual records; explorers receive only the selected page of results and compact filter options.

Migration `202610040001_research_explorers.sql` adds nullable `observation_key` and `record` to the existing observation projection and `directed_steps` to relationships. Historical revisions remain immutable. The publisher refreshes these projections alongside snapshots in its existing advisory-locked transaction. The reader remains read-only. Legacy nullable projections are readable until republished.

Apply the canonical migration before deploying the app, publish the current corpus, and verify database/bundled query parity with `bun run db:verify:research`. Canonical files are `/opt/optihealth_db/deploy/tenants/bhwiki-v4.sql` and the migration list in `bhwiki.sh`.

## Isolated enriched browser tests

The normal corpus remains sparse. Do not add synthetic findings to it to demonstrate widgets.

1. Build in bundled mode: `BHWIKI_DATA_MODE=bundled bun run build`.
2. Run `bun scripts/prepare-research-fixture.ts`; it prints a fresh temporary content directory.
3. Start a separate server with `BHWIKI_DATA_MODE=bundled BHWIKI_CONTENT_DIRECTORY=<printed-directory>`, on a nonproduction port.
4. Run Playwright against that origin with `BHWIKI_RICH_FIXTURE_TESTS=1` and `--grep 'isolated rich'`.

The alternate directory is an explicit server-owned setting and requires bundled mode. Never configure it on the deployed database-backed application. Fixtures are not imported by runtime or publication code.
