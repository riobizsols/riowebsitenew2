#!/usr/bin/env bash
# One-command deploy for riobizsols.com on the VPS (behind alm_nginx).
#
# Usage (on the VPS):
#   ./deploy-docker.sh              # git pull + rebuild + restart + health checks
#   ./deploy-docker.sh --no-pull    # rebuild only (no git pull)
#   ./deploy-docker.sh --help
#
set -euo pipefail

ROOT="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT"

DO_PULL=1
for arg in "$@"; do
  case "$arg" in
    --no-pull) DO_PULL=0 ;;
    -h|--help)
      sed -n '2,10p' "$0"
      exit 0
      ;;
    *)
      echo "Unknown option: $arg"
      echo "Usage: ./deploy-docker.sh [--no-pull]"
      exit 1
      ;;
  esac
done

if [[ ! -f .env.vps ]]; then
  echo "Missing .env.vps — copy and fill secrets first:"
  echo "  cp .env.vps.example .env.vps && nano .env.vps"
  exit 1
fi

if ! command -v docker >/dev/null 2>&1; then
  echo "Docker is not installed or not in PATH."
  exit 1
fi

if ! docker compose version >/dev/null 2>&1; then
  echo "Docker Compose plugin is required (docker compose)."
  exit 1
fi

# Guard: never publish localhost-only (breaks alm_nginx → 172.17.0.1:3010).
if grep -qE '127\.0\.0\.1:3010:3003' docker-compose.yml 2>/dev/null; then
  echo "Fixing docker-compose.yml port bind (127.0.0.1 → 0.0.0.0) ..."
  sed -i.bak 's/"127\.0\.0\.1:3010:3003"/"3010:3003"/' docker-compose.yml
  rm -f docker-compose.yml.bak
fi

if [[ "$DO_PULL" -eq 1 ]]; then
  if [[ -d .git ]]; then
    echo "==> git pull"
    git pull --ff-only
  else
    echo "==> No .git directory — skipping pull"
  fi
fi

echo "==> Deploy app (build + recreate)"
# Stop accidental standalone nginx/certbot from this compose file.
docker compose --env-file .env.vps stop nginx certbot 2>/dev/null || true
docker compose --env-file .env.vps rm -f nginx certbot 2>/dev/null || true

# Reclaim name if container was created outside compose.
docker rm -f riobizsols-app 2>/dev/null || true

docker compose --env-file .env.vps up -d --build --force-recreate --remove-orphans app

echo ""
echo "==> Waiting for health on :3010"
healthy=0
for _ in $(seq 1 20); do
  if curl -fsS "http://127.0.0.1:3010/api/health" >/dev/null 2>&1; then
    healthy=1
    break
  fi
  sleep 2
done

if [[ "$healthy" -ne 1 ]]; then
  echo "ERROR: app did not become healthy on http://127.0.0.1:3010/api/health"
  docker compose --env-file .env.vps logs --tail=80 app || true
  exit 1
fi

echo "Host health:"
curl -sS "http://127.0.0.1:3010/api/health"
echo ""

PORTS="$(docker ps --filter name=riobizsols-app --format '{{.Ports}}')"
echo "Published ports: ${PORTS}"
if echo "$PORTS" | grep -q '127.0.0.1:3010'; then
  echo "ERROR: bound to 127.0.0.1 only — alm_nginx will return 502."
  echo "Fix docker-compose.yml ports to \"3010:3003\" and re-run."
  exit 1
fi

if docker ps --format '{{.Names}}' | grep -qx alm_nginx; then
  echo "==> alm_nginx → 172.17.0.1:3010"
  if ! docker exec alm_nginx wget -qO- http://172.17.0.1:3010/api/health; then
    echo ""
    echo "ERROR: alm_nginx cannot reach the app (will show as 502 publicly)."
    exit 1
  fi
  echo ""
  docker exec alm_nginx nginx -t >/dev/null
  docker exec alm_nginx nginx -s reload
  echo "alm_nginx reloaded."
fi

echo ""
echo "==> Public check"
if curl -fsS "https://riobizsols.com/api/health" >/dev/null 2>&1; then
  curl -sS "https://riobizsols.com/api/health"
  echo ""
  echo "Deploy OK — https://riobizsols.com"
else
  echo "WARN: https://riobizsols.com/api/health failed (DNS/SSL/nginx conf?)."
  echo "Local app is up: http://127.0.0.1:3010/api/health"
  exit 1
fi
