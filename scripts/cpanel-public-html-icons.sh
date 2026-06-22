#!/usr/bin/env bash
# Pack Rio brand icons for cPanel public_html (LiteSpeed serves these before Node).
# Usage: ./scripts/cpanel-public-html-icons.sh
# Upload everything in cpanel-public-icons/ to public_html via File Manager.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="$ROOT/cpanel-public-icons"
BUILD="$ROOT/build"

if [[ ! -d "$BUILD" ]]; then
  echo "Run npm run build first."
  exit 1
fi

mkdir -p "$OUT"
# favicon.ico is the tab icon — copied as-is from build (do not regenerate).
for f in favicon.ico manifest.json; do
  cp "$BUILD/$f" "$OUT/$f"
done
# Optional PWA / Google Search assets (not used for browser tab icon).
for f in logo192.png logo512.png apple-touch-icon.png; do
  if [[ -f "$BUILD/$f" ]]; then
    cp "$BUILD/$f" "$OUT/$f"
  fi
done

echo "Created $OUT — upload ALL files to public_html."
echo "Tab icon = favicon.ico only ($(wc -c < "$OUT/favicon.ico" | tr -d ' ') bytes)."
echo ""
echo "cPanel steps:"
echo "  1. File Manager → public_html"
echo "  2. DELETE old: favicon.ico, logo192.png, logo512.png, manifest.json"
echo "  3. Upload all files from: cpanel-public-icons/"
echo "  4. Restart Node app in cPanel"
echo "  5. Run: npm run verify:icons"
