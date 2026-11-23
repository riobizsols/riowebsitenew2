#!/usr/bin/env bash
# Build/start Rio website app behind existing alm_nginx (port 3010).
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$ROOT"

if [[ ! -f .env.vps ]]; then
  echo "Missing .env.vps — copy and fill secrets:"
  echo "  cp .env.vps.example .env.vps"
  exit 1
fi

# Stop our own nginx/certbot if a previous attempt started them (port conflict).
docker compose --env-file .env.vps stop nginx certbot 2>/dev/null || true
docker compose --env-file .env.vps rm -f nginx certbot 2>/dev/null || true

echo "Building and starting riobizsols-app on 127.0.0.1:3010 ..."
docker compose --env-file .env.vps up -d --build app

echo ""
echo "Waiting for health..."
for i in 1 2 3 4 5 6 7 8 9 10; do
  if curl -fsS "http://127.0.0.1:3010/api/health" >/dev/null 2>&1; then
    echo "App healthy:"
    curl -sS "http://127.0.0.1:3010/api/health"
    echo ""
    break
  fi
  sleep 2
done

echo ""
docker compose --env-file .env.vps ps
echo ""
echo "NEXT: wire domain through existing alm_nginx (ports 80/443 owner)."
echo "  1) Find alm_nginx config mounts:"
echo "       docker inspect alm_nginx --format '{{range .Mounts}}{{.Source}} -> {{.Destination}}{{\"\\n\"}}{{end}}'"
echo "  2) Copy deploy/nginx/alm-nginx-riobizsols.conf into that conf.d folder"
echo "  3) Issue/renew SSL for riobizsols.com the same way your other alm sites do"
echo "  4) Reload: docker exec alm_nginx nginx -t && docker exec alm_nginx nginx -s reload"
echo ""
echo "Local smoke test (bypasses domain):  curl -I http://127.0.0.1:3010"
