# BHWiki SEO operations

## Public identity and indexing contract

The only canonical origin is `https://bhwiki.devpins.org`, defined by `siteUrl()` in `src/lib/site.ts`. Request Host headers, localhost and `BHWIKI_SITE_URL` cannot change SEO URLs. Redirect alternate public hosts at the reverse proxy; do not serve duplicate hosts as separate sites. Preview deployments must be access-controlled or add a deployment-wide noindex header outside production.

Every public route family has its own title, description, clean canonical and matching OpenGraph/Twitter metadata. The homepage title is absolute to avoid repeating the brand suffix. Social cards are a static 1200×630 PNG; PNG icons include 48px favicon, 180px Apple icon and 512px structured-data logo, plus a multi-size ICO. They use the existing atom identity, without changing the UI.

Indexable pages: `/`, `/about`, `/contribute`, `/concepts`, `/effects`, `/outcomes`, and published substance/concept/effect/outcome articles. Search/filter/pagination query variants are `noindex, follow` with a canonical to their own clean pathname, not the homepage. Tracking-only `utm_*`, `gclid`, `fbclid`, `msclkid` parameters retain indexing. Compare, interactions, graph tools and revision history are always `noindex, follow`. `robots.txt` permits public crawling, including these routes so crawlers can read noindex; only `/api/` is disallowed. Do not block all queries, all substances, JavaScript, or CSS.

Missing documents call `notFound()` in metadata and rendering. `htmlLimitedBots: /.*/` resolves metadata before streaming for every client, preserving real HTTP 404s rather than soft-404 200 responses. This deliberately trades some streaming latency for a deterministic status/metadata contract.

`/sitemap.xml` is request-time generated from the same repository published revisions and concepts as public pages. In database mode it is not a build-time bundled snapshot. In bundled mode the current corpus produces 702 URLs: 340 substances + 356 concepts + 6 public entry pages. There are no invented `lastmod` dates: draft `reviewedAt` values are not proof of publication or editorial review. Sitemap and llms requests intentionally fail if the database is unavailable instead of silently substituting unpublished bundled content.

JSON-LD describes BHWiki as a WebSite and independent Organization, with Article and BreadcrumbList on article routes. Citations are existing article reference URLs/concept source URLs. No physician credentials, medical authority, author identities, reviews, ratings, publication or review dates are invented. Script JSON is escaped against HTML/script breakouts. This metadata is descriptive, not a promise of rich-result eligibility. `/llms.txt` is a request-time outline linking actual published content and editorial methodology; it is not an indexing protocol or a replacement for the sitemap.

## Webmaster activation (operator action after deployment)

1. Open Google Search Console using the owning account. Use the existing `devpins.org` domain property if accessible, or add a URL-prefix property for `https://bhwiki.devpins.org/`. Preserve the existing root Google DNS verification TXT record; do not replace DNS to add this site.
2. If needed, copy the exact HTML-tag token into `BHWIKI_GOOGLE_SITE_VERIFICATION`. For Bing Webmaster Tools, import the verified Search Console site or add the same canonical URL-prefix site; use its token in `BHWIKI_BING_SITE_VERIFICATION` if requested. These optional public values are read by root `generateMetadata()` on each request, not at module initialization/Docker build. Set them in runtime environment and restart the service/container; do not put secrets or invented tokens in source. Blank/unset means no tag. Existing DNS ownership verification does not require an HTML token.
3. Confirm ownership in each console, then submit **`https://bhwiki.devpins.org/sitemap.xml`**. Read back the console's submitted sitemap record and later its crawl/error status before calling registration successful.
4. Use Search Console URL Inspection on `/`, one substance article and one concept article; check declared/selected canonical and live crawl. Optionally request indexing of a few representative pages. Do not mass-submit every article or use the deprecated Google sitemap ping endpoint. A successful HTTP response or sitemap submission does not establish indexing.
5. Monitor indexing exclusions, crawl failures and search performance. Thin identity-only records can be excluded by search engines despite valid technical SEO; metadata does not create evidence or editorial authority. Improve source-backed content rather than inventing schema claims.

Activation status at handoff: console setup was not completed. Parent reports Search Console browser access failed with `EHOSTUNREACH`, and available gcloud/ADC tokens lacked the required scopes. Existing root Google verification TXT remains in place. No Google/Bing sitemap registration or indexing is claimed. IndexNow is left to the deployment operator/parent and is not included in this change.

## Verification

```sh
bun run test
bun run content:validate
bun run typecheck
# After deploying (or against a local running server):
PLAYWRIGHT_BASE_URL=https://bhwiki.devpins.org bunx playwright test tests/e2e/seo.spec.ts
```

The SEO Playwright tests inspect initial HTML as a crawler, assert independent canonicals/social metadata across all route families, noindex query variants/tools, HTTP 404s for crawler and browser user agents, source-linked JSON-LD, robots/sitemap, llms outline, and raster signatures/dimensions. Optional `SEO_EXPECT_GOOGLE_VERIFICATION` / `SEO_EXPECT_BING_VERIFICATION` assert the exact tokens expected in HTML; do not set fixture values on production. They use the existing Playwright desktop/mobile projects and can run against a later public deploy through `PLAYWRIGHT_BASE_URL`.

Before production rollout, build with the repository's resource-constrained systemd-run workflow, using bundled data and no database credentials. After rollout, fetch the deployed HTML and image assets, check the container/image revision, and crawl every sitemap URL using crawler user agents. Require 200, indexable robots, unique canonical equal to sitemap location, and correct article schema. Compare the sitemap set to the read-only published database set; check that drafts/unpublished entities and tools do not leak. Test an actually unpublished/missing slug as 404. Recheck after content publication/unpublication and after proxy/cache changes. Run optional runtime-token assertions after changing environment to catch build-time freezing.

Local verification for this change: baseline 92 unit tests passed; final 100 unit tests passed; content validation covered 340 articles, 356 concepts and 63 relationships; typecheck passed; 14 SEO HTTP Playwright tests passed against isolated bundled-mode Next dev on port 3187, including runtime-only fixture ownership tokens. RED failures were observed before each SEO slice. Full production build/deploy and database-mode sitemap parity remain the parent's responsibility. Parent's unrelated pre-change public UI baseline was 42 passed, 2 skipped, 8 failed (solubility badges, library search, removed-stub class index, reading accessibility on both projects); those UI/content issues were not changed here.
