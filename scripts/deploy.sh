#!/usr/bin/env bash
# Run from project root: ./scripts/deploy.sh
# Ensures build exists, then starts the Backend server (for production use PM2 instead).

set -e
cd "$(dirname "$0")/.."

echo "=== Rio site deploy script ==="
echo "Node: $(node -v)  npm: $(npm -v)"
echo ""

if [ ! -d "build" ]; then
  echo "No build folder. Running npm run build..."
  npm run build
  echo ""
fi

if [ ! -f "Backend/.env" ]; then
  echo "WARNING: Backend/.env not found. Copy Backend/.env.example to Backend/.env and set PORT, EMAIL_USER, EMAIL_PASS."
  exit 1
fi

echo "Starting server (Backend reads PORT from .env)..."
echo "Stop with Ctrl+C. For production, use: cd Backend && pm2 start server.js --name rio-site"
echo ""
exec npm run deploy:start
