# BHWiki production deployment

- Public URL: https://bhwiki.devpins.org
- Source: `/opt/BHWiki`, release commit `398e7b869399acdc3e79069cd960d92347ccb69a`.
- Container: `bhwiki-web-1`, image `bhwiki:398e7b869399`.
- Compose: `/opt/BHWiki/deploy/compose.yaml`; production selection: `/etc/bhwiki/compose.env`.
- Runtime: `/etc/bhwiki/runtime.env`, root-only, database mode, existing dedicated `bhwiki_reader` credential.
- Upstream: `http://127.0.0.1:3086`; host networking, unprivileged Node runtime, read-only filesystem, health check, restart `unless-stopped`.
- Routing: `/etc/traefik/dynamic/bhwiki.yml`, file-provider hot reload. HTTP redirects to HTTPS through the existing global entrypoint redirect. TLS is renewed by Traefik's `le` HTTP-01 resolver.
- DNS: NameSilo CNAME `bhwiki` → `devpins.org`, TTL 3600.

## Operate the pinned release

```bash
cd /opt/BHWiki
docker compose --env-file /etc/bhwiki/compose.env --file deploy/compose.yaml up --detach
docker compose --env-file /etc/bhwiki/compose.env --file deploy/compose.yaml ps
docker compose --env-file /etc/bhwiki/compose.env --file deploy/compose.yaml logs --since 10m
```

Always supply the production env file: the template's default `bhwiki:local` is a development image, not the pinned production release.

## Deploy an update

Build a clean, reviewed source snapshot as a new commit-tagged image with the existing Dockerfile. Builds do not access the database. Test before switching `/etc/bhwiki/compose.env` to the new tag and applying Compose. Preserve the current image for rollback. Do not change or reprovision the shared database for an application-only release.

After switching, verify the container's exact image, healthy state, loopback listener, catalog/article/graph responses, a JavaScript URL referenced by the public HTML, molecule assets and certificate hostname. Run the browser suite against the public origin:

```bash
PLAYWRIGHT_CHROMIUM_EXECUTABLE=/root/.cache/ms-playwright/chromium-1234/chrome-linux64/chrome \
PLAYWRIGHT_BASE_URL=https://bhwiki.devpins.org bun run test:e2e
```

The explicit browser path uses the installed Chromium binary. Without it, this checkout's newer Playwright version expects a browser revision not installed on the host.

## Verified launch

On 2026-09-30, the production Docker build, strict type check, content validation and all 32 unit tests passed. All 14 desktop/mobile browser tests passed against the database-backed container and again against the public HTTPS origin, including the suite's automated accessibility checks. Live OrioleDB publication, immutability and tenant-isolation checks passed in rollback-only transactions.

Public HTTP redirects with 308 to HTTPS. The HTTPS certificate names `bhwiki.devpins.org`, is issued by Let's Encrypt YR2, and expires 2026-12-29; Traefik owns automatic renewal. The container is healthy with zero restarts, and all 25 Traefik HTTP routers are enabled. Application deployment required no Traefik or shared-database restart. Public HTML-referenced JavaScript was checksummed against the running image; article, revision history, graph, search and molecule assets were exercised.

## Rollback

Select a retained, verified image in `/etc/bhwiki/compose.env`, then reapply the same Compose command. Never delete revisions or reset the shared database. This is the first public release, so there is no earlier publicly deployed version. `bhwiki:local` is retained from the earlier release verification, but is not automatically a production rollback target.
