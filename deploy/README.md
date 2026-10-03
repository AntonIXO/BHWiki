# Deployment package

The shared-host deployment at `https://bhwiki.devpins.org` is documented in [production operations](production.md). Use its pinned production environment file rather than the generic defaults below.

This package serves BHWiki on **127.0.0.1:3086** and uses the existing Supabase PostgreSQL listener on **127.0.0.1:54322**. It does not create a database server, change another tenant, install a reverse proxy or publish a domain. Use either the container or systemd method, not both on the same port.

Apply the ordered canonical migrations, publish the reviewed collection and verify isolation using [database operations](../docs/database.md). Preserve the shared PostgreSQL container and existing backups. The runtime role must be `bhwiki_reader`; migration credentials never enter the running application.

## Runtime configuration

Provision `/etc/bhwiki/runtime.env` using `deploy/runtime.env.example` as the shape. Use a private credential manager or a root-only editor and set ownership to root with mode `0600`. Do not put a database password in a shell command, container build argument, Git commit or `NEXT_PUBLIC_*` setting. Populate `BHWIKI_REPOSITORY_URL` only when a real source repository exists.

`BHWIKI_DATA_MODE=database` requires a usable reader URL. `bundled` is an explicit alternate release mode, not an automatic fallback. A database outage must remain observable. The image is built without database access; data-source selection happens at runtime.

## Container

The multi-stage Dockerfile installs the pinned Bun lockfile and produces Next.js standalone output. The runtime includes public assets, the `content/` Markdown collection, and `.next/static`, which standalone tracing does not copy automatically. It runs as the image's unprivileged `node` user. Docker build context excludes all local environment files.

```sh
docker build --tag bhwiki:local .
docker compose --file deploy/compose.yaml config --quiet
```

For a release, tag the image with its source commit and preserve the previous image. Configure `BHWIKI_IMAGE` to that tag and optionally `BHWIKI_ENV_FILE` to another private runtime-file location. Linux host networking is intentional: the database listener is on loopback and the web process also binds loopback. No new public database port or web port mapping is introduced.

When the release is ready to run:

```sh
docker compose --file deploy/compose.yaml up --detach
```

The container has a read-only filesystem with temporary cache mounts, bounded logs and a 30-second shutdown grace period. A health check verifies the application response. Check catalog/article responses and logs after startup to establish database readiness; a shell response alone is insufficient.

## Systemd alternative

Use Node.js 22 at `/usr/bin/node`. Build outside any directory currently served by a running process:

```sh
BHWIKI_DATA_MODE=bundled bun run build
```

Prepare a new release directory such as `/opt/bhwiki/releases/<source-commit>`. Copy `.next/standalone/` contents into it, then copy `public/`, `content/`, and `.next/static/` into the same relative locations. Create its empty `.next/cache/` mount point. Keep release files root-owned and world-readable/traversable, with no private environment file in the release. Link `/opt/bhwiki/current` to the prepared directory.

Install `deploy/bhwiki.service` as `/etc/systemd/system/bhwiki.service`. It runs with a dynamic unprivileged user, reads its environment through systemd, and mounts `/var/cache/bhwiki` into the release cache directory. `ProtectSystem=strict` keeps the source tree read-only. Validate the unit before enabling it:

```sh
systemd-analyze verify /etc/systemd/system/bhwiki.service
```

Then reload systemd and start the selected release through the host's normal service-deployment process. This repository does not change or restart existing host services automatically.

## Verification and rollback

Before release, run type checks, content/unit tests, the bundled build and browser tests. Run actual OrioleDB migration/isolation/publication verification separately. Save the source commit, checksummed migration inventory, benchmark report and test results with the release. See [verification record](../docs/verification.md).

After startup, inspect an article, search/filter results, a sourced graph neighborhood and their backing API responses. Confirm that the database role is read-only and that the service listens only on `127.0.0.1:3086`. Observe application/database errors and container health or systemd restarts through the existing host monitoring.

Rollback application code by selecting the previous image or release directory. Content rollback is a new reviewed publication event, preserving history. Do not roll back by deleting revisions, dropping the schema or resetting the shared database. Database backups remain part of the host's normal cluster process and must include BHWiki objects and role definitions. Public domain/TLS routing is a separate deployment operation.
