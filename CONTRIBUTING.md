# Contributing to BHWiki

Contribute through a repository pull request. The application links to the configured repository when `BHWIKI_REPOSITORY_URL` is set; no hosted repository is assumed. For setup and commands, start with [README.md](README.md).

## Content changes

The source-controlled collection lives in `content/`. Each substance, concept, and relationship is one Markdown file. Copy a starting point from `content/templates/` and read `content/templates/README.md` before adding a file. `src/lib/types.ts` and `src/lib/validate-content.ts` are still the contract: the Markdown compiles into those records, and a heading or YAML fence the compiler does not recognize fails the check. A focused correction should explain the claim being changed, its source, its applicable context and the remaining uncertainty.

For each change:

1. Use original wording and a primary publication or authoritative label where available. Record DOI/PMID and stable source IDs; cite claims beside the relevant observation. Preserve negative and conflicting findings.
2. Distinguish subjective reports from measured outcomes. Numerical measurements need their instrument, assessment time, scale and dataset; do not invent comparative effect scores.
3. Keep exposure amounts with ingredient/form, route, units, frequency, duration, population, purpose and source category: research, approved label or community description.
4. Name the measured analyte in pharmacokinetics. Distinguish a study mean, interval and range across studies. Tobacco-smoke exposure is a metabolic context, not a caffeine administration route. Psilocin observations must not be relabeled psilocybin.
5. Link shared entities using canonical IDs. A hyperedge must keep all qualifying members and their roles, including context; association does not establish causation or suggest combined use.
6. Scope legal claims to jurisdiction, activity/form, date and authoritative source. Leave unassessed contexts unknown.
7. Record limitations, funding/conflicts when assessed, molecular-image provenance, contributor information and the actual review state. Update `docs/content-sources.md` for new sources or assets.

“Sourced draft” means source-linked editorial content without a completed independent review. Do not change it to reviewed merely because automated checks pass. Unpublished visibility and review status are separate fields. Unknown data is neither zero nor evidence of absence.

Contributions must fit an independent reference wiki. Do not add referral links, promotional integration, personal health records, vendor listings or purchasing information. Never commit credentials or private reviewer correspondence. Browser editing, accounts and community ratings are outside this release.

## Review and publication

The workflow is **propose → validate → review the diff and sources → merge → publish transactionally**. Reviewers check that the source supports the actual assertion and population, that wording is proportionate to evidence, and that licensing permits any reused material. Source verification is required separately from test results.

The publisher uses the reviewed source commit and records contributor/reviewer metadata. Normalized facts, public article projections and published-revision pointers change atomically. Reversions append a new publication event; unchanged imports do not add duplicate events. The runtime reader has no publishing privileges. See [database operations](docs/database.md).

## Checks

```sh
bun install --frozen-lockfile
bun run typecheck
bun run content:validate
bun run test
BHWIKI_DATA_MODE=bundled bun run build
bunx playwright install chromium
BHWIKI_DATA_MODE=bundled bun run test:e2e
```

Run the browser suite for interface changes and inspect the affected page at narrow and wide widths. Check keyboard navigation, visible focus, source anchors, empty states and the graph's accessible list. Database changes additionally require actual OrioleDB verification and concurrency tests, not a substitute heap database.

Canonical shared-host migrations belong in `/opt/optihealth_db`. Add a new ordered migration and its portable copy; do not rewrite previously applied SQL. Rehearse first and preserve other tenants, shared roles and PostgREST settings. Refer to [docs/database.md](docs/database.md) for the verified commands.

## Licensing

Submit code under [MIT](LICENSE) and original editorial prose under [CC BY-SA 4.0](CONTENT-LICENSE.md). Record exceptions and attribution for external assets. Linking to a paper does not grant rights to copy its full text. Author original effect definitions; Effect Index's noncommercial content is not included in BHWiki's license. Contributions retain attribution through repository and public revision history.
