#!/usr/bin/env bash
# Create self-signed placeholder certs so nginx can start before Let's Encrypt.
set -euo pipefail

DOMAIN="${1:-riobizsols.com}"
CERT_DIR="./deploy/certbot/conf/live/${DOMAIN}"

if [[ -f "${CERT_DIR}/fullchain.pem" && -f "${CERT_DIR}/privkey.pem" ]]; then
  echo "Certs already present for ${DOMAIN}"
  exit 0
fi

mkdir -p "${CERT_DIR}"
echo "Creating temporary self-signed cert for ${DOMAIN}..."
openssl req -x509 -nodes -newkey rsa:2048 -days 1 \
  -keyout "${CERT_DIR}/privkey.pem" \
  -out "${CERT_DIR}/fullchain.pem" \
  -subj "/CN=${DOMAIN}" \
  >/dev/null 2>&1

echo "Placeholder certs ready at ${CERT_DIR}"
echo "Run ./deploy/scripts/init-ssl.sh after DNS points here to get real Let's Encrypt certs."
