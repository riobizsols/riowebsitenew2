#!/usr/bin/env bash
# Thin wrapper — prefer ./deploy-docker.sh from the repo root.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
exec "$ROOT/deploy-docker.sh" --no-pull "$@"
