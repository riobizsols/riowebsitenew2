# Deploy riobizsols.com on VPS (Docker Compose)

This stack runs **one Node app** (Express API + React `build`).

On the Rio VPS, **ports 80/443 are already owned by `alm_nginx`**.  
So we **do not** bind those ports. The website app listens on **`127.0.0.1:3010`**, and you add a `server_name riobizsols.com` block to **existing `alm_nginx`**.

---

## Architecture (this VPS)

```text
Internet
   │
   └─ :80 / :443  →  alm_nginx  (already running)
                       ├─ other ALM / mansoor / odoo hosts…
                       └─ riobizsols.com  →  172.17.0.1:3010  →  riobizsols-app
```

---

## Prerequisites on the VPS

- Ubuntu 22.04+ (or similar)
- Docker Engine + Docker Compose plugin
- DNS:
  - `riobizsols.com` → VPS IP
  - `www.riobizsols.com` → VPS IP
- Firewall: allow **80** and **443**
- Nothing else should bind ports 80/443 (stop old Apache/Nginx/cPanel proxies)

Install Docker (if needed):

```bash
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER
# log out / log in, then:
docker --version
docker compose version
```

---

## First-time deploy

### 1. Copy project to VPS

```bash
# from your Mac (example)
rsync -avz --exclude node_modules --exclude build --exclude Backend/node_modules \
  ./ user@YOUR_VPS_IP:~/riowebsitenew2/
```

Or `git clone` if the repo is on GitHub.

### 2. Create env file

```bash
cd ~/riowebsitenew2
cp .env.vps.example .env.vps
nano .env.vps
```

Fill email, WhatsApp, admin token, etc.  
**Do not set PORT** — Compose sets `PORT=3003` inside the container.

### 3. Start the app only (behind alm_nginx)

```bash
chmod +x deploy/scripts/*.sh
./deploy/scripts/deploy.sh
```

This builds React inside Docker and starts **`riobizsols-app` on `127.0.0.1:3010`**.

Check locally:

```bash
curl -I http://127.0.0.1:3010
curl http://127.0.0.1:3010/api/health
docker compose --env-file .env.vps ps
```

### 4. Point riobizsols.com through alm_nginx

```bash
# Where are alm_nginx configs mounted?
docker inspect alm_nginx --format '{{range .Mounts}}{{.Source}} -> {{.Destination}}{{"\n"}}{{end}}'
```

Copy `deploy/nginx/alm-nginx-riobizsols.conf` into that host `conf.d` folder (same place as other site configs).

Issue SSL for `riobizsols.com` the **same way your other alm_nginx sites** get certs (certbot / existing script).

Then:

```bash
docker exec alm_nginx nginx -t
docker exec alm_nginx nginx -s reload
```

Open: https://riobizsols.com

---

## Updates (redeploy)

```bash
cd ~/riowebsitenew2
git pull   # if using git
./deploy/scripts/deploy.sh
```

---

## Second domain on same VPS

**Not a problem.** Nginx chooses the site by `Host` header.

1. Keep this stack for `riobizsols.com` only.  
2. For the other domain, either:
   - Add `deploy/nginx/conf.d/other-domain.conf` (from the example), **or**
   - Run a separate compose project / reverse proxy for that domain.

Do **not** point both domains at this app unless you want both to show the Rio site.

---

## Useful commands

```bash
# Status
docker compose --env-file .env.vps ps

# Logs
docker compose --env-file .env.vps logs -f app
docker compose --env-file .env.vps logs -f nginx

# Restart
docker compose --env-file .env.vps restart

# Stop
docker compose --env-file .env.vps down
```

---

## Troubleshooting

| Symptom | Fix |
|--------|-----|
| Port 80 already in use | `sudo lsof -i :80` — stop Apache/Nginx/other |
| 502 Bad Gateway | `docker compose logs app` — wait for healthy, check `.env.vps` |
| SSL fails | Confirm DNS A records; run `init-ssl.sh` again |
| White screen | Check `/api/health` and browser Network for `/static/js/...` |
| Wrong site on domain | Check `server_name` in nginx conf; second domain needs its own block |

Health endpoint: `/api/health` should return JSON with `"ok": true`.
