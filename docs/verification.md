# Release verification — 2026-09-29

The bundled collection checked on 2026-10-03 contains **191 articles, 59 concepts, and 27 relationships**. Content validation, typecheck, and the unit tests passed. Playwright against the bundled dev server passed on desktop and mobile, including the class index, an identity stub, a sourced interaction, and the off-site experience link. That check does not repeat the database or deployment checks in the table below. The table remains the record of the ten-article launch.

Verified the independent ten-article release against the existing database and the standalone deployment artifact. The source-controlled content was initially published from commit `d36510e`; later implementation corrections preserve those content snapshots. Canonical infrastructure is committed in `/opt/optihealth_db` at `e6af1b7`.

## Results

| Check | Result |
| --- | --- |
| `bun run typecheck` | Pass; Next route generation and strict TypeScript |
| `bun run test` | 32 tests pass: content/source integrity, contextual search, complete hyperedges, bounded graph loading, kinetics and review/source metadata |
| `bun run content:validate` | Pass: 10 articles, 44 sourced concepts, 19 relationships, reference resolution and exact-snapshot editorial metadata |
| `BHWIKI_DATA_MODE=bundled bun run build` | Production build passes with all application, concept, history and read-API routes |
| `bun run test:e2e` against the database-backed production server | 14 tests pass across desktop Chromium (1440×1000) and mobile Chromium (390×844) |
| Automated accessibility | No axe WCAG 2 A/AA or 2.1 AA violations on the library, caffeine article, alertness concept and focused graph at both tested sizes |
| Actual OrioleDB verification | Pass: storage engine, RLS, read-only privileges, cross-tenant isolation, hidden unpublished records, immutable history and publication semantics |
| Migration consistency | Applied 001/002/003 checksums preserved; all three portable SQL files match canonical infrastructure copies byte-for-byte |
| Container | `docker build -t bhwiki:local .` passes using Node 22 and Bun 1.3.14; standalone runtime serves library, static JavaScript and molecule assets |
| Deployment templates | Compose configuration, Dockerfile checks and systemd unit syntax pass; no service or public deployment enabled |

Browser checks cover alias search (including “hystamine”), combined typed filters, empty results, grid/list controls, correct psilocin analyte labeling, range slider behavior, source anchors, concept-to-article links, graph filters and keyboard text alternatives, revision history, skip navigation, 404s, bounded API parameters and compact responses. Desktop/mobile screenshots were visually inspected. Automated checks cover these surfaces; they are not a complete accessibility certification.

## Database and publishing

The actual host is PostgreSQL 18.6 with OrioleDB beta17 / extension 1.9. All **32** `bhwiki` tables, including retained inaccessible prototype tables, use OrioleDB and have RLS enabled. The current collection has 10 published sourced-draft articles, 44 concepts, 19 contextual relationships, 19 explicit claims and 42 citation links to 41 deduplicated sources.

Rollback-only checks exercised:

- A → A idempotence, A → B → A reversion and current-publication pointers.
- Immutable historical snapshots and rejection of missing reviewer metadata for reviewed publications.
- Metadata-only attribution corrections creating a new revision; source-commit-only reimports remaining unchanged.
- Concurrent publication lock contention and recovery after the first transaction rolls back.
- Canonical bibliography corrections retaining identity, conflicting DOI/PMID rejection and literal dollar-delimiter/apostrophe data preserved by generated SQL.
- Reader denial of writes, publication functions, unpublished articles/revisions, old prototype tables and other-tenant tables/functions.
- Whole-relationship visibility when a member is unpublished; no partial exposure of qualified claims.

Test fixtures remained in rollback transactions. No OptiHealth or Umami application records were changed. The infrastructure commit includes only the five BHWiki tenant files; pre-existing unrelated changes remain untouched.

## Deployment and failure handling

The Next standalone process runs on loopback port 3086 with the dedicated reader role. The deployment image contains no `.env.local`. Runtime credentials remain in private host configuration, not browser data or source control.

An isolated container was tested in both modes:

- **Bundled:** library, static JS, molecule image and honest snapshot-history display return successfully.
- **Database with deliberately unreachable endpoint:** both read APIs return HTTP 503 with generic errors; the library returns HTTP 500 with the error view. No bundled content is substituted and connection information is not returned to the browser.

The checked container image is a local build, not a published registry artifact. Public hostname, DNS, reverse proxy and a public repository URL are not configured by this release. Docker and systemd are alternative deployment packages; neither is enabled automatically.

## Performance

See [database measurements](database.md#verification-and-local-measurements) for the query shapes and limits. Three-sample, same-host `EXPLAIN (ANALYZE, BUFFERS)` measurements used 1,000 approximately 10 KB synthetic articles, 20 concepts and 1,000 three-member relationships with reader RLS, inside rollback transactions:

| Query | Observed execution time |
| --- | --- |
| Article lookup/current revision | 0.10–0.23 ms |
| Production compact catalog, 1,010 records | 3.26–3.87 ms |
| Exploratory SQL-filtered catalog, 25 records | 0.89–1.08 ms |
| Representative focused graph, 80 complete relations | 95.55–114.35 ms |

These are database execution measurements, not end-to-end request latencies or OrioleDB-versus-heap claims. The app filters compact catalog records in memory; the filtered SQL measurement is exploratory. The graph benchmark aggregates a representative relationship slice and excludes the repository’s separate compact-record requests. Planner statistics, cache state, record distribution and concurrency affect results.

## Editorial status

Every launch article is a **sourced draft**, with original summaries and inspectable references. Technical validation and targeted source checks do not constitute independent medical/editorial review. No reviewers, community counts, vendor records or personal health outcomes have been fabricated. No promotional, referral or vendor UI remains in the application.

## Interactive research implementation — 2026-10-04

The eight-feature implementation passes content validation, strict types, the production build and 54 unit tests. All 30 standard desktop/mobile browser checks pass, including axe accessibility and evidence navigation; the two enriched-corpus browser checks run separately and pass. The standard run skips those two fixture-only cases intentionally.

The rich corpus is generated outside `content/` and exercises structured results, elapsed timing, independent phase durations, effect variations, media and directed steps. Original records and their content hashes are preserved. Desktop comparison/plot and mobile evidence screenshots were inspected.

The additive OrioleDB migration was rehearsed with rollback and applied. Existing publication, immutable-history, RLS, tenant-isolation and concurrent-publisher checks pass. An enriched fixture publication verified reader-visible observation payloads and directed steps inside a transaction that rolled back. No synthetic findings were published.

Production rollout also passed: the final `bhwiki:e535324-research` image is healthy, all 30 public-origin browser checks pass, and its two isolated rich-fixture checks pass. The 194-article real corpus has 24 populated observation projections and zero synthetic study records. Reader-mode database/bundled parity matches across 170 filtered queries, all evidence records, relationships, and reversed pair lookup. See [deployment and rollback](../deploy/production.md).
