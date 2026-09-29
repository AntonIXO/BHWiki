# BHWiki database

BHWiki shares OptiHealth's PostgreSQL cluster and `postgres` database, using its own `bhwiki` schema. This follows Umami's existing schema isolation. **All BHWiki tables use `USING orioledb`**. An unavailable OrioleDB engine causes migration failure; there is no silent heap fallback.

The inspected target on 2026-09-29 is PostgreSQL 18.6, OrioleDB beta17 (extension version 1.9), container `supa-oriole-db`, host listener `127.0.0.1:54322`. Do not recreate or upgrade this container to deploy BHWiki. The shared server uses 60 maximum connections; BHWiki uses a two-connection runtime pool, three-login role limit, and five-second statement timeout.

## Two deployment contexts

**Shared OptiHealth host:** all cluster provisioning belongs to the infrastructure repository, `/opt/optihealth_db`. The canonical new files are:

```text
/opt/optihealth_db/deploy/tenants/bhwiki.sh
/opt/optihealth_db/deploy/tenants/bhwiki.sql
/opt/optihealth_db/deploy/tenants/bhwiki-isolation.sql
```

`bhwiki.sql` must remain byte-identical to `supabase/migrations/202609290001_bhwiki_foundation.sql`. The deployment script refuses a mismatch. It applies only the new BHWiki schema and roles, records a SHA-256 migration checksum, verifies isolation, and writes a dedicated reader credential to ignored `.env.local` with mode `0600`. No OptiHealth credentials are copied into BHWiki.

```sh
/opt/optihealth_db/deploy/tenants/bhwiki.sh rehearse
/opt/optihealth_db/deploy/tenants/bhwiki.sh apply
/opt/optihealth_db/deploy/tenants/bhwiki.sh seed
/opt/optihealth_db/deploy/tenants/bhwiki.sh verify
```

`rehearse` executes the migration and checks inside a transaction that rolls back. `apply` is repeatable and rejects checksum drift. `seed` imports the current source-controlled collection with a transaction and creates editorial revisions only when content changes. These commands never reset schema data, edit another tenant, change PostgREST exposure, or restart a service. Existing OptiHealth reset automation has not been changed; after a fresh cluster rebuild, rerun this explicit tenant step before seeding BHWiki.

**Open-source/self-hosted installation:** provision a PostgreSQL server with the OrioleDB extension first, and connect Supabase Auth/PostgREST to that server if required. Stock hosted Supabase does not provide a switch to install this custom PostgreSQL storage engine. The portable migration is versioned in this repository; run `scripts/db-migrate.ts` with `BHWIKI_ADMIN_DATABASE_URL` supplied only for that command. The administrator must be able to create restricted roles and the schema. Never put the administrator URL into the runtime `DATABASE_URL`.

See [OrioleDB's table access method documentation](https://www.orioledb.com/docs/usage/getting-started) for provisioning the required engine.

## Runtime isolation

| Principal | Access |
| --- | --- |
| `bhwiki_owner` | NOLOGIN owner of BHWiki objects only |
| `bhwiki_reader` | Published BHWiki SELECT via RLS; no mutation, schema creation, role membership, auth, health, or Umami access |
| deployment administrator | Applies migrations and reviewed content outside the web runtime |
| `anon`, `authenticated`, `service_role`, `umami` | No access to the BHWiki schema |

Every table has RLS enabled. Only explicit public-read policies exist. The owner retains normal owner access for controlled publishing; there is no browser write API or public editorial endpoint. The runtime role also defaults to read-only transactions. Private editorial revisions and migration checksums are not granted to it.

The current shared PostgREST service exposes only `public`; leave this unchanged. The Next.js server reads `bhwiki.*` through the `postgres` driver. Supabase Auth/editor roles can be added in a later, separately reviewed migration without granting the existing broad service role access to the wiki. Do not expose the database URL to the client.

Without `DATABASE_URL`, the application uses the bundled, source-controlled reference collection. With a URL configured, database errors surface normally: there is no silent fallback to local content and no false claim of database connectivity.

## Knowledge model

`substances.document` is the typed public rendering projection. Update it in the same transaction as normalized facts and an editorial revision. The projection supports a portable open-source content contribution workflow while preserving schema-level relationships:

| Tables | Purpose |
| --- | --- |
| `substances`, `tags`, `substance_tags` | Compound identity and typed facets; legal tags require dated jurisdiction context |
| `publications`, `evidence_claims` | Sources, outcomes, populations, limitations and certainty |
| `dosage_contexts` | Cited route/formulation/population study or label contexts, not personalized dosing |
| `pharmacokinetic_profiles`, `pharmacokinetic_modifiers` | Half-life ranges with route/population and sourced clearance modifiers |
| `subjective_effects` | Explicit editorial/report/study evidence basis; no fabricated prevalence |
| `hyperedges`, `hyperedge_members` | Multi-member relationships rendered as an incidence graph by Cytoscape |
| `editorial_revisions` | Private, immutable-by-convention publishing snapshots |
| `optihealth_aggregates` | Future reviewed, consent-scoped aggregate releases; minimum cohort 50 |
| `vendor_reports` | Future provenance-verified batch/laboratory reports with conflict disclosure |

No aggregate or vendor rows are fabricated. These tables are placeholders without ingestion jobs. The cohort constraint is a minimum publication gate, not a complete privacy guarantee: consent checks, de-identification, repeated-query protection, withdrawal, bias analysis and methodology review remain necessary before real outcome releases. There are no foreign keys or joins into health or identity tables.

The BHWiki seed is a repeatable reviewed-content import. It publishes the bundled articles, sources, typed relationships and an editorial snapshot. It does not seed health outcomes or vendor endorsements. Publishing changes should update both normalized content and the projection transactionally, followed by `supabase/tests/isolation.sql` within a rollback transaction and a runtime-reader smoke test.

## Backup and recovery

Back up the `bhwiki` schema and BHWiki role definitions with the shared cluster's normal backup process. Keep the reader secret in host secret storage; never commit `.env.local`. An application rollback can use the bundled collection by explicitly unsetting the runtime URL, but must not be an automatic response to database failures. No destructive rollback/reset script is supplied.
