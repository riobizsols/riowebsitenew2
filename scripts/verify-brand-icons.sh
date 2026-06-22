#!/usr/bin/env bash
# Verify live site serves Rio brand icons (not Create React App defaults).
set -euo pipefail

BASE="${1:-https://riobizsols.com}"
FAIL=0

check() {
  local path="$1"
  local expect="$2"
  local headers
  headers="$(curl -sI "$BASE/$path")"
  echo "=== /$path ==="

  if echo "$headers" | grep -qi 'x-rio-brand-asset: 1'; then
    echo "  source: Node (build folder)"
  elif echo "$headers" | grep -qi 'x-powered-by: Express'; then
    echo "  source: Node (Express)"
  else
    echo "  source: LiteSpeed/public_html (may be stale — delete old file in public_html)"
  fi

  case "$expect" in
    manifest-rio)
      body="$(curl -s "$BASE/manifest.json")"
      if echo "$body" | grep -q 'RioBizSols'; then
        echo "  manifest: OK (RioBizSols)"
      else
        echo "  manifest: FAIL (still React App — replace public_html/manifest.json)"
        FAIL=1
      fi
      ;;
    size-min)
      local min="$3"
      local len
      len="$(echo "$headers" | awk -F': ' 'tolower($1)=="content-length"{gsub(/\r/,"",$2); print $2}')"
      echo "  size: ${len:-unknown} bytes (expect >= $min)"
      if [[ -n "$len" && "$len" -lt "$min" ]]; then
        echo "  FAIL: file too small — likely old React asset"
        FAIL=1
      fi
      ;;
  esac
  echo ""
}

check "manifest.json" manifest-rio
check "favicon.ico" size-min 4000
check "logo192.png" size-min 10000

if [[ "$FAIL" -eq 0 ]]; then
  echo "All brand icon checks passed."
else
  echo "Fix: In cPanel File Manager, open public_html and DELETE (or replace):"
  echo "  favicon.ico  logo192.png  logo512.png  manifest.json"
  echo "Then upload the same files from your local build/ folder, or leave deleted so Node serves them."
  exit 1
fi
