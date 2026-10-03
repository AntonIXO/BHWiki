# Database and publishing

BHWiki uses its own `bhwiki` schema in the existing Supabase PostgreSQL database. All 32 application and migration tables, including retained prototype tables, use **OrioleDB**. Every migration explicitly requires the engine and every table uses `USING orioledb`; there is no heap fallback. The runtime neither exposes the schema through PostgREST nor accesses other tenants.

The inspected host runs PostgreSQL 18.6 with OrioleDB beta17 (extension 1.9), container `supa-oriole-db`, database `postgres`, listener `127.0.0.1:54322`. BHWiki needs no shared server restart, extension upgrade, PostgREST change, or cluster setting change. The server has 60 maximum connections; the runtime uses a pool of two, a three-connection role limit, and a five-second statement timeout.

## Deployment and migration ownership

Canonical shared-host migrations and provisioning remain in `/opt/optihealth_db/deploy/tenants/`. BHWiki includes byte-identical portable migration copies:

| Portable migration | Canonical copy | State |
| --- | --- | --- |
| `202609290001_bhwiki_foundation.sql` | `bhwiki.sql` | Applied prototype; immutable checksum |
| `202609290002_reference_model.sql` | `bhwiki-v2.sql` | Additive reference model and publication engine |
| `202609290003_publication_attribution.sql` | `bhwiki-v3.sql` | Immutable attribution/review corrections |
| `202610040001_research_explorers.sql` | `bhwiki-v4.sql` | Observation records/keys and explicitly directed relationship steps |

The provisioning script validates SHA-256 checksums for every applied version and rejects canonical/portable differences. Changes require a **new migration**, never edits to applied files. All migration and publishing operations use the same transaction advisory lock.

```sh
/opt/optihealth_db/deploy/tenants/bhwiki.sh rehearse
/opt/optihealth_db/deploy/tenants/bhwiki.sh apply
/opt/optihealth_db/deploy/tenants/bhwiki.sh seed
/opt/optihealth_db/deploy/tenants/bhwiki.sh verify
```

`rehearse` applies pending migrations and executes real isolation checks in a transaction that rolls back. `apply` repeats that rehearsal before committing pending migrations, then writes only the dedicated reader credential and explicit database mode to ignored `.env.local` with mode `0600`. `seed` validates and publishes the complete source collection transactionally. `verify` runs rollback-only visibility and privilege checks. These commands operate only on BHWiki objects and roles. After a shared cluster rebuild, rerun the tenant migration and seed commands.

For independent installations, provision an OrioleDB-enabled PostgreSQL server first. Supabase currently offers **OrioleDB Public Alpha** when creating a new hosted project; this is a project storage-engine choice, not an application migration that converts the existing shared cluster. This deployment already uses OrioleDB and does not migrate or replace the host. See [Supabase OrioleDB documentation](https://supabase.com/docs/guides/database/orioledb) and [OrioleDB storage documentation](https://www.orioledb.com/docs/usage/getting-started).

```sh
# Supply an administrator URL only to these deployment commands; never to the web runtime.
BHWIKI_ADMIN_DATABASE_URL=… bun run db:migrate
BHWIKI_ADMIN_DATABASE_URL=… bun run db:seed
BHWIKI_ADMIN_DATABASE_URL=… bun scripts/db-verify.ts
```

## Runtime boundary

| Principal | Access |
| --- | --- |
| `bhwiki_owner` | NOLOGIN owner of BHWiki objects; controlled migration/publication only |
| `bhwiki_reader` | SELECT on public v2 content through RLS, no write privileges or role memberships |
| deployment administrator | Executes migrations and reviewed source imports outside the web application |
| `anon`, `authenticated`, `service_role`, other tenant roles | No access to the BHWiki schema |

Every BHWiki table has RLS enabled. The reader cannot create objects, publish, access unpublished articles or revisions, access the old prototype tables, or access other tenant tables. Public **sourced drafts** are deliberately visible and labeled as such; they are distinct from unpublished editorial records. An `editorially-reviewed` revision requires nonempty reviewers and a review reference attested against the exact source snapshot in the repository metadata described below. The initial collection remains sourced-draft; no reviews are fabricated.

The reader can execute one tightly scoped, fixed-search-path, owner-rights function: `relationship_is_public(bigint)`. It returns only a visibility boolean and prevents both a hyperedge and its memberships from becoming visible if any participant is unpublished. It accepts no SQL or content and grants no mutation capability. The publication and revision-protection functions are unavailable to the reader.

`BHWIKI_DATA_MODE=database` requires `DATABASE_URL`. Explicit `bundled` selects the source-controlled local collection. When the mode is omitted, a configured URL selects database mode; without a URL the local default is bundled. Database connection, schema and content errors surface normally, and an empty configured catalog is an error. There is no silent fallback. Credentials and server SQL modules never enter browser bundles.

## Reference model

All v2 internal identities are compact bigint identities; globally unique public slugs are separate. Native B-tree indexes cover entity identity/state, aliases, concept membership, source identity and relationship membership. No experimental search index is enabled.

| Tables | Purpose |
| --- | --- |
| `entities`, `concepts`, `entity_aliases`, `article_concepts` | Shared identities, all supported concept kinds, definitions and reversible classification navigation |
| `articles`, `article_revisions` | Compact catalog projection, immutable source snapshots, current published revision pointer and public provenance |
| `sources`, `article_sources` | Canonical DOI/PMID/URL sources, per-article citation keys, insights, limitations and funding disclosures |
| `claims`, `claim_members`, `claim_sources` | Explicit assertions, member roles, applicability context, support/conflict and editorial assessment |
| `doses` | Reported ingredient/form/route/amount/frequency/duration/population/purpose/source category |
| `pk_observations`, `pk_modifiers` | Named analyte, endpoint, statistic type, units, population, model eligibility and explicit modifying context |
| `effect_observations` | Distinct subjective effects and measured outcomes with source, population, exposure, instrument and magnitude |
| `relationships`, `relationship_members` | Sourced multi-member relations and explicit participant roles |

The prototype tables are retained solely for audit/rollback compatibility and receive no writes from the new importer. Their runtime grants have been revoked, including the unused integration/vendor placeholders. They are not part of the product or public API.

The importer validates the content model before emitting any SQL. It does not infer fields from prose. It publishes the document and all normalized projections in one transaction. DOI/PMID/URL matches reuse source identity. Shared source bibliographic metadata must agree across the input collection; article-specific insights, limitations and funding may differ. Corrections update canonical title/authors/year/URL/kind transactionally alongside the article snapshot. Conflicting DOI/PMID or ambiguous existing identities stop publication for explicit consolidation. The initial ten-article corpus contains 42 article-reference links to 41 canonical sources.

Publishing compares against the **current** snapshot. A → A is unchanged; A → B → A creates three distinct immutable publication events. Changing contributor/reviewer names or the review reference creates a new immutable event even when article prose is unchanged; a source-code commit change alone does not. Database triggers reject revision updates/deletes, and the `(entity_id, published_revision_id)` foreign key binds the current pointer to the same article. A transaction advisory lock serializes importers and prevents revision-number races. Removed source-manifest entries become archived without deleting identity or revision history.

Source commits are recorded only when the relevant working tree is clean, or when an explicit full `BHWIKI_SOURCE_COMMIT` is supplied by deployment. Missing provenance remains null. Contributor/reviewer arrays are empty unless attested metadata exists; an automated import never claims editorial review. Bundled mode describes its revision entry as a local snapshot without a database publication timestamp.

### Recording an editorial review

The versioned `content/editorial.json` sidecar initially contains `{ "version": 1, "articles": {} }`. For a reviewed publication:

1. Finish and review the article, including setting `editorialStatus` to `editorially-reviewed`.
2. Run `bun scripts/content-hashes.ts <slug>` to obtain its exact SHA-256 content hash. Omit the slug to list the complete collection.
3. Add an `articles[slug]` entry with `contentHash`, `contributors` and `reviewers` arrays of attested names, and `reviewReference` containing the HTTPS review/PR URL.
4. Commit article and metadata together, then run the normal validated publication workflow.

Metadata is source-controlled and applies to exactly that content hash. Changes to the article make existing metadata stale and block publication until the changed snapshot is reviewed. Reviewed articles require nonempty reviewers and the review reference; drafts can omit metadata. Metadata-only corrections are traceable new revision events. No identity provider or signature attestation is claimed: repository review controls establish who may submit these records.

The portable migrations intentionally create the reader as NOLOGIN. An independent administrator must enable login and set its password securely, for example through `ALTER ROLE bhwiki_reader LOGIN;` and interactive `\password bhwiki_reader` in psql. The shared-host canonical script provisions this automatically without printing its generated secret.

Graph responses contain compact catalog/definition records, preserve complete contextual relationships, and admit at most 200 entity nodes. Focused loading begins at the indexed membership of the requested entity. Whole relationships are loaded before node-budget admission; an oversized relationship is omitted rather than truncated. Classification neighbors remain available even when they have no authored evidence relationship. Response catalog tags are restricted to the loaded graph concepts so no dangling graph identifiers are emitted.

## Verification and local measurements

```sh
# Shared-host transport uses docker exec locally; no administrator secret is copied.
bun scripts/db-verify.ts --docker
bun scripts/db-benchmark.ts --docker
# Inspect the generated rollback-only SQL:
bun scripts/db-verify.ts --sql
bun scripts/db-benchmark.ts --sql
```

Live verification on 2026-09-29 passed: every table uses OrioleDB and RLS; reader isolation from drafts and other tenants; publication denial; complete relationship visibility; revision immutability; unchanged/changed/reverted publication; review-status metadata enforcement; and simultaneous writers contending for the publication lock. A waiting publication times out under its test lock limit and succeeds after the first transaction rolls back. Test entities and revisions remain inside rollback transactions; no fixture rows remain.

Local `EXPLAIN (ANALYZE, BUFFERS)` observations used 1,000 approximately 10 KB synthetic articles, 20 concepts and 1,000 three-member relationships in a rollback transaction, with reader RLS enabled and three samples per query:

| Query | Observed execution time |
| --- | --- |
| Article lookup by slug/current revision | 0.10–0.23 ms |
| Production compact catalog query, 1,010 rows | 3.26–3.87 ms |
| Exploratory SQL-filtered, 25-row catalog query | 0.89–1.08 ms |
| Representative focused graph, 80 complete relationships | 95.55–114.35 ms |

The production catalog currently loads compact records and applies search filters in application code; the SQL-filtered query is an exploratory comparison. The graph benchmark aggregates the same bounded relationship slice; it is not an end-to-end measurement of the repository’s separate candidate/member/compact-record queries. Earlier same-shape runs measured 814–832 ms for a relationship-first graph query and 244–262 ms after selecting indexed memberships first. The latest measurements above were recorded after live content publication; changing planner statistics and cache state make runs vary. These are same-host observations, not an OrioleDB-versus-heap comparison or production latency guarantee. Fixtures were uncommitted, existing planner statistics were not changed, and measurements exclude network latency, application rendering and separate compact-record queries. Re-run with production-sized distributions before raising graph limits or claiming performance gains from the storage engine.

## Backup and recovery

Include `bhwiki` and its role definitions in the existing cluster backup process. Keep the reader credential in host secret storage. An application rollback may explicitly select bundled mode; database failures must never trigger it automatically. No destructive rollback/reset or shared service management script is supplied.
