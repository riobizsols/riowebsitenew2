# Deploy riobizsols.com on VPS (Docker Compose)

This stack runs **one Node app** (Express API + React `build`) behind **Nginx**, with **Let's Encrypt** SSL.

Second domain on the same VPS is fine — Nginx routes by hostname (`server_name`). Only configure `riobizsols.com` in this compose; add another `server` block for the other site (see `deploy/nginx/conf.d/other-domain.conf.example`).

---

## Architecture

```text
Internet
   │
   ├─ :80 / :443  →  nginx container
   │                    └─ proxy_pass → app:3003  (riobizsols.com / www)
   │
   └─ (other domain) → its own nginx server block / other stack
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

### 3. Start stack

```bash
chmod +x deploy/scripts/*.sh
./deploy/scripts/deploy.sh
```

This will:

1. Create temporary SSL files so Nginx can start  
2. Build the React app inside Docker  
3. Start `app` + `nginx` + `certbot`

Check:

```bash
curl -I http://riobizsols.com
curl http://riobizsols.com/api/health
docker compose --env-file .env.vps ps
docker compose --env-file .env.vps logs -f app
```

### 4. Enable real HTTPS (Let's Encrypt)

After DNS has propagated:

```bash
SSL_EMAIL=admin@riobizsols.com ./deploy/scripts/init-ssl.sh
```

Then open: https://riobizsols.com

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
