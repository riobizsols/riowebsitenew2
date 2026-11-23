# Deploy riobizsols.com on VPS (Docker Compose)

This stack runs **one Node app** (Express API + React `build`).

On the Rio VPS, **ports 80/443 are already owned by `alm_nginx`**.  
The website app listens on **`0.0.0.0:3010`**, and `alm_nginx` proxies `riobizsols.com` → `172.17.0.1:3010`.

---

## Architecture

```text
Internet
   │
   └─ :80 / :443  →  alm_nginx
                       └─ riobizsols.com  →  172.17.0.1:3010  →  riobizsols-app
```

**Important:** publish as `"3010:3003"` (all interfaces).  
`127.0.0.1:3010` causes **502** because `alm_nginx` cannot reach localhost-only binds.

---

## Everyday deploy (one script)

On the VPS:

```bash
cd ~/riobizsols/riowebsitenew2
./deploy-docker.sh
```

That will:

1. `git pull`
2. Build + recreate `riobizsols-app`
3. Health-check host `:3010` and path through `alm_nginx`
4. Reload `alm_nginx`
5. Verify `https://riobizsols.com/api/health`

Options:

```bash
./deploy-docker.sh --no-pull   # rebuild without git pull
```

---

## First-time setup

### 1. Clone on VPS

```bash
cd ~/riobizsols
git clone https://github.com/riobizsols/riowebsitenew2.git
cd riowebsitenew2
```

### 2. Env file

```bash
cp .env.vps.example .env.vps
nano .env.vps
```

Fill email, WhatsApp, admin token, etc.  
**Do not set PORT** — Compose sets `PORT=3003` inside the container.

### 3. Wire domain in alm_nginx (once)

```bash
docker inspect alm_nginx --format '{{range .Mounts}}{{.Source}} -> {{.Destination}}{{"\n"}}{{end}}'
```

Copy `deploy/nginx/alm-nginx-riobizsols.conf` into that host `conf.d` folder.  
SSL certs must be mounted into `alm_nginx` (same pattern as your other sites).

```bash
docker exec alm_nginx nginx -t
docker exec alm_nginx nginx -s reload
```

### 4. First deploy

```bash
chmod +x deploy-docker.sh
./deploy-docker.sh
```

Open: https://riobizsols.com

---

## Workflow from your Mac

1. Commit & push your changes.
2. SSH to the VPS and run:

```bash
cd ~/riobizsols/riowebsitenew2
./deploy-docker.sh
```

---

## Useful commands

```bash
docker compose --env-file .env.vps ps
docker compose --env-file .env.vps logs -f app
docker compose --env-file .env.vps restart app
```

---

## Troubleshooting

| Symptom | Fix |
|--------|-----|
| 502 Bad Gateway | App must be `0.0.0.0:3010`, not `127.0.0.1`. Re-run `./deploy-docker.sh` |
| Name conflict | Script removes old `riobizsols-app` automatically |
| Health fails | `docker compose --env-file .env.vps logs --tail=100 app` |
| Wrong SSL paths | Cert files inside `alm_nginx` must match the conf (`/etc/nginx/ssl/*-riobizsols.pem`) |

Health endpoint: `/api/health` → `{"ok": true, ...}`.
