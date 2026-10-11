#!/usr/bin/env bash
# Pull, validate, publish, build, deploy, and verify the database-backed BHWiki release.
# Run from any directory as root:
#   /opt/BHWiki/deploy/deploy-latest.sh
#
# The script never pushes Git commits. If local commits exist, it rebases them onto
# origin/main so the deployed source is the fetched latest plus those local commits.
set -Eeuo pipefail

REPO_DIR="${BHWIKI_REPO_DIR:-/opt/BHWiki}"
REMOTE="${BHWIKI_REMOTE:-origin}"
BRANCH="${BHWIKI_BRANCH:-main}"
DB_DEPLOY="${BHWIKI_DB_DEPLOY:-/opt/optihealth_db/deploy/tenants/bhwiki.sh}"
DB_CONTAINER="${BHWIKI_DB_CONTAINER:-supa-oriole-db}"
COMPOSE_FILE="$REPO_DIR/deploy/compose.yaml"
COMPOSE_ENV="${BHWIKI_COMPOSE_ENV:-/etc/bhwiki/compose.env}"
RUNTIME_ENV="${BHWIKI_RUNTIME_ENV:-/etc/bhwiki/runtime.env}"
PUBLIC_URL="${BHWIKI_PUBLIC_URL:-https://bhwiki.devpins.org}"
LOCAL_URL="${BHWIKI_LOCAL_URL:-http://127.0.0.1:3086}"
E2E_REQUIRED="${BHWIKI_E2E_REQUIRED:-0}"
RUN_E2E="${BHWIKI_RUN_E2E:-1}"
LOCK_FILE="/run/lock/bhwiki-deploy.lock"

log() { printf '\n[%s] %s\n' "$(date -Is)" "$*"; }
fatal() { printf '\nERROR: %s\n' "$*" >&2; exit 1; }
trap 'fatal "failed at line $LINENO: $BASH_COMMAND"' ERR

[[ "$EUID" -eq 0 ]] || fatal "run as root"
[[ -d "$REPO_DIR/.git" ]] || fatal "not a Git checkout: $REPO_DIR"
[[ -x "$DB_DEPLOY" ]] || fatal "database deployment script is not executable: $DB_DEPLOY"
[[ -f "$REPO_DIR/deploy/consolidate-sources.sql" ]] || fatal "missing source consolidation SQL"
[[ -f "$COMPOSE_ENV" ]] || fatal "missing production Compose env: $COMPOSE_ENV"
[[ -f "$RUNTIME_ENV" ]] || fatal "missing runtime env: $RUNTIME_ENV"

mkdir -p "$(dirname "$LOCK_FILE")"
exec 9>"$LOCK_FILE"
flock -n 9 || fatal "another BHWiki deployment is already running"

cd "$REPO_DIR"

log "Checking clean working tree"
[[ -z "$(git status --porcelain)" ]] || fatal "working tree is dirty; commit or stash changes first"

log "Fetching $REMOTE/$BRANCH"
git fetch --prune "$REMOTE" "$BRANCH"
REMOTE_REF="$REMOTE/$BRANCH"

# Preserve local commits while incorporating the fetched branch. Abort on conflicts;
# a human must resolve those rather than silently choosing one side in production.
if git merge-base --is-ancestor HEAD "$REMOTE_REF"; then
  log "Fast-forwarding to $REMOTE_REF"
  git merge --ff-only "$REMOTE_REF"
elif git merge-base --is-ancestor "$REMOTE_REF" HEAD; then
  log "Local branch already contains $REMOTE_REF"
else
  log "Rebasing local commits onto $REMOTE_REF"
  git rebase "$REMOTE_REF"
fi

[[ -z "$(git status --porcelain)" ]] || fatal "Git operation left the working tree dirty"
COMMIT="$(git rev-parse --short=7 HEAD)"
FULL_COMMIT="$(git rev-parse HEAD)"
log "Deploying commit $COMMIT ($FULL_COMMIT)"

log "Running unit tests"
bun run test

log "Validating Markdown/content"
bun run content:validate

log "Running typecheck"
bun run typecheck

log "Building Next.js production output"
systemd-run --quiet --wait --collect --pipe \
  -p MemoryMax=2600M -p MemorySwapMax=4G \
  --working-directory="$REPO_DIR" bun run build

IMAGE="bhwiki:$COMMIT"
log "Building Docker image $IMAGE"
docker build --tag "$IMAGE" "$REPO_DIR"

log "Publishing content to OrioleDB"
bash -c "docker exec -i '$DB_CONTAINER' psql -X -U postgres -d postgres -v ON_ERROR_STOP=1 -q" < "$REPO_DIR/deploy/consolidate-sources.sql"
bash "$DB_DEPLOY" seed
log "Consolidating source identities created during publication"
bash -c "docker exec -i '$DB_CONTAINER' psql -X -U postgres -d postgres -v ON_ERROR_STOP=1 -q" < "$REPO_DIR/deploy/consolidate-sources.sql"

log "Pinning production image $IMAGE"
STAMP="$(date +%Y%m%d-%H%M%S)"
cp -a "$COMPOSE_ENV" "$COMPOSE_ENV.pre-$COMMIT-$STAMP"
python3 - "$COMPOSE_ENV" "$IMAGE" <<'PY'
import re
import sys
path, image = sys.argv[1:]
s = open(path).read()
s, count = re.subn(r"^BHWIKI_IMAGE=.*$", f"BHWIKI_IMAGE={image}", s, flags=re.M)
if count != 1:
    raise SystemExit(f"expected exactly one BHWIKI_IMAGE line, found {count}")
open(path, "w").write(s)
print(f"selected {image}")
PY

log "Recreating production container"
docker compose --env-file "$COMPOSE_ENV" --file "$COMPOSE_FILE" up --detach --force-recreate
docker compose --env-file "$COMPOSE_ENV" --file "$COMPOSE_FILE" ps

log "Waiting for container health"
for _ in $(seq 1 45); do
  health="$(docker inspect -f '{{.State.Health.Status}}' bhwiki-web-1 2>/dev/null || true)"
  [[ "$health" == healthy ]] && break
  sleep 2
done
health="$(docker inspect -f '{{.State.Health.Status}}' bhwiki-web-1)"
[[ "$health" == healthy ]] || fatal "container health is $health"

running_image="$(docker inspect -f '{{.Image}}' bhwiki-web-1)"
built_image="$(docker image inspect "$IMAGE" -f '{{.Id}}')"
[[ "$running_image" == "$built_image" ]] || fatal "running image does not match $IMAGE"
restarts="$(docker inspect -f '{{.RestartCount}}' bhwiki-web-1)"
[[ "$restarts" == 0 ]] || fatal "container has restarted $restarts times"

log "Verifying database isolation and OrioleDB state"
bash "$DB_DEPLOY" verify

log "Probing loopback and public HTTPS"
curl --fail --silent --show-error --max-time 20 "$LOCAL_URL/" >/dev/null
curl --fail --silent --show-error --max-time 30 "$PUBLIC_URL/" >/dev/null
printf 'loopback=200 public=200\n'

log "Verifying Traefik routers"
python3 - <<'PY'
import json
import urllib.request
routers = json.load(urllib.request.urlopen('http://127.0.0.1:9000/api/http/routers', timeout=10))
broken = [r for r in routers if r.get('status') != 'enabled']
print(f"traefik_routers={len(routers)} broken={len(broken)}")
if broken:
    for router in broken:
        print(f"BROKEN {router.get('name')}: {router.get('error')}")
    raise SystemExit(1)
PY

if [[ "$RUN_E2E" == 1 ]]; then
  log "Running public Playwright E2E suite"
  chromium="${PLAYWRIGHT_CHROMIUM_EXECUTABLE:-}"
  if [[ -z "$chromium" && -x /root/.cache/ms-playwright/chromium-1234/chrome-linux64/chrome ]]; then
    chromium=/root/.cache/ms-playwright/chromium-1234/chrome-linux64/chrome
  fi
  e2e_status=0
  if [[ -n "$chromium" ]]; then
    PLAYWRIGHT_CHROMIUM_EXECUTABLE="$chromium" PLAYWRIGHT_BASE_URL="$PUBLIC_URL" bun run test:e2e || e2e_status=$?
  else
    PLAYWRIGHT_BASE_URL="$PUBLIC_URL" bun run test:e2e || e2e_status=$?
  fi
  if (( e2e_status != 0 )); then
    if [[ "$E2E_REQUIRED" == 1 ]]; then
      fatal "E2E suite failed with exit code $e2e_status"
    fi
    printf '\nWARNING: deployment is live, but E2E exited with %s (set BHWIKI_E2E_REQUIRED=1 to make this fatal).\n' "$e2e_status" >&2
  fi
fi

log "Deployment complete: $IMAGE"
printf 'commit=%s\nimage=%s\nhealth=%s\nrestarts=%s\nurl=%s\n' "$COMMIT" "$IMAGE" "$health" "$restarts" "$PUBLIC_URL"
