#!/usr/bin/env bash
# Build and start (or update) the production stack on the VPS.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$ROOT"

if [[ ! -f .env.vps ]]; then
  echo "Missing .env.vps — copy .env.vps.example and fill in secrets:"
  echo "  cp .env.vps.example .env.vps"
  exit 1
fi

# Ensure nginx can bind HTTPS even before real certs exist
bash ./deploy/scripts/ensure-certs.sh riobizsols.com

echo "Building and starting containers..."
docker compose --env-file .env.vps up -d --build

echo ""
echo "Waiting for health..."
sleep 5
curl -fsS "http://127.0.0.1/api/health" || curl -fsS "http://127.0.0.1:80/api/health" || true

echo ""
echo "Stack is up."
echo "  - Site (HTTP):  http://riobizsols.com"
echo "  - Health:       http://riobizsols.com/api/health"
echo "  - First SSL:    SSL_EMAIL=you@riobizsols.com ./deploy/scripts/init-ssl.sh"
echo ""
docker compose --env-file .env.vps ps
