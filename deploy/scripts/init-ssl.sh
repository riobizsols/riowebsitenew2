#!/usr/bin/env bash
# Issue Let's Encrypt certificates for riobizsols.com (+ www).
# Prerequisites: DNS A records already point to this VPS; ports 80/443 open.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
cd "$ROOT"

EMAIL="${SSL_EMAIL:-admin@riobizsols.com}"
DOMAINS=(-d riobizsols.com -d www.riobizsols.com)

echo "Requesting Let's Encrypt cert for: riobizsols.com www.riobizsols.com"
echo "Contact email: ${EMAIL}"

docker compose --env-file .env.vps run --rm --entrypoint certbot certbot certonly \
  --webroot -w /var/www/certbot \
  --email "${EMAIL}" \
  --agree-tos \
  --no-eff-email \
  --force-renewal \
  "${DOMAINS[@]}"

echo "Reloading nginx..."
docker compose --env-file .env.vps exec nginx nginx -s reload

echo "Done. Visit https://riobizsols.com"
