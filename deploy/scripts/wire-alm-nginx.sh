#!/usr/bin/env bash
# Recreate alm_nginx with existing binds + riobizsols.com conf/certs.
# Run on the VPS as root.
set -euo pipefail

CONF_SRC="/root/alm-main/nginx/riobizsols.com.conf"
CERT_FULL="/etc/letsencrypt/live/riobizsols.com/fullchain.pem"
CERT_KEY="/etc/letsencrypt/live/riobizsols.com/privkey.pem"

if [[ ! -f "$CONF_SRC" ]]; then
  echo "Missing $CONF_SRC"
  exit 1
fi
if [[ ! -f "$CERT_FULL" || ! -f "$CERT_KEY" ]]; then
  echo "Missing Let's Encrypt files under /etc/letsencrypt/live/riobizsols.com/"
  exit 1
fi

# Ensure app is up
if ! curl -fsS http://127.0.0.1:3010/api/health >/dev/null; then
  echo "riobizsols-app not healthy on :3010 — start it first:"
  echo "  cd ~/riobizsols/riowebsitenew2 && ./deploy-docker.sh"
  exit 1
fi

echo "Collecting current alm_nginx binds..."
mapfile -t BINDS < <(docker inspect alm_nginx --format '{{range .HostConfig.Binds}}{{println .}}{{end}}')

# Drop any previous riobizsols mounts if recreating again
FILTERED=()
for b in "${BINDS[@]}"; do
  [[ -z "$b" ]] && continue
  if [[ "$b" == *riobizsols* ]]; then
    echo "  skip old: $b"
    continue
  fi
  FILTERED+=("$b")
done

NEW_BINDS=(
  "${FILTERED[@]}"
  "${CONF_SRC}:/etc/nginx/conf.d/riobizsols.com.conf:ro"
  "${CERT_FULL}:/etc/nginx/ssl/fullchain-riobizsols.pem:ro"
  "${CERT_KEY}:/etc/nginx/ssl/privkey-riobizsols.pem:ro"
)

IMAGE=$(docker inspect alm_nginx --format '{{.Config.Image}}')
RESTART=$(docker inspect alm_nginx --format '{{.HostConfig.RestartPolicy.Name}}')
NETWORKS=$(docker inspect alm_nginx --format '{{range $k,$v := .NetworkSettings.Networks}}{{$k}} {{end}}')

echo "Image: $IMAGE"
echo "Networks: $NETWORKS"
echo "New bind count: ${#NEW_BINDS[@]}"

# Preserve network attachments
NET_ARGS=()
for n in $NETWORKS; do
  NET_ARGS+=(--network "$n")
done
# First network used at create; extra networks connected after
FIRST_NET="${NETWORKS%% *}"

BIND_ARGS=()
for b in "${NEW_BINDS[@]}"; do
  BIND_ARGS+=(-v "$b")
done

echo "Recreating alm_nginx..."
docker stop alm_nginx >/dev/null
docker rename alm_nginx alm_nginx_old_$(date +%Y%m%d%H%M%S)

docker create \
  --name alm_nginx \
  --restart "${RESTART:-unless-stopped}" \
  -p 80:80 -p 443:443 \
  --network "$FIRST_NET" \
  "${BIND_ARGS[@]}" \
  "$IMAGE" >/dev/null

# Attach any extra networks
for n in $NETWORKS; do
  if [[ "$n" != "$FIRST_NET" ]]; then
    docker network connect "$n" alm_nginx || true
  fi
done

docker start alm_nginx
sleep 2

echo "Testing nginx config..."
docker exec alm_nginx nginx -t
docker exec alm_nginx nginx -s reload || true

echo ""
echo "Verify:"
echo "  curl -I https://riobizsols.com"
echo "  curl https://riobizsols.com/api/health"
echo ""
echo "If OK, remove backup container: docker rm alm_nginx_old_*"
