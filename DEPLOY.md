# Rio website – deploy on Ubuntu (step-by-step)

The app runs as **one Node server** that serves the React site and the API (contact form, visitor tracking). Use **port 3004** if 3003 is already in use on your server.

---
a--

## Prerequisites

- Ubuntu server (20.04+)
- Node.js 18 or 20
- (Optional) PM2 for keeping the app running
- (Optional) Nginx for domain/SSL

---

## Step 1: Install Node.js (if needed)

```bash
node -v
```

If you need to install or upgrade:

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
node -v
npm -v
```

---

## Step 2: Get the project on the server

**Option A – Clone from Git**

```bash
cd ~
git clone <your-repo-url> riowebsitenew2
cd riowebsitenew2
```

**Option B – Upload from your machine**

From your **local** machine (in the project folder):

```bash
scp -r . ubuntu@YOUR_SERVER_IP:~/riowebsitenew2
```

Then on the server:

```bash
cd ~/riowebsitenew2
```

---

## Step 3: Install dependencies

Run from the **project root** (where `package.json` is):

```bash
cd ~/riowebsitenew2

npm install

cd Backend && npm install && cd ..
```

---

## Step 4: Configure environment

```bash
cp Backend/.env.example Backend/.env
nano Backend/.env
```

Set these (replace with your values):

```env
PORT=3004
NODE_ENV=production
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-gmail-app-password
```

- Use **3004** if 3003 is already in use on the server.
- For Gmail, use an [App Password](https://support.google.com/accounts/answer/185833), not your normal password.

Save and exit (Ctrl+O, Enter, Ctrl+X in nano).

---

## Step 5: Build the frontend

```bash
cd ~/riowebsitenew2
npm run build
```

Wait until you see “Compiled successfully.” The `build` folder will be created.

---

## Step 6: Check port is free

```bash
sudo lsof -i :3004
```

No output = port is free. If something is listed, change `PORT` in `Backend/.env` to another free port (e.g. 3005) and use that port in the rest of the steps.

---

## Step 7: Run the app

**Option A – Run once (foreground, for testing)**

```bash
cd ~/riowebsitenew2
npm run deploy:start
```

Or use the deploy script (builds if needed, then starts):

```bash
./scripts/deploy.sh
```

You should see: `Server running on port 3004`.  
Visit `http://YOUR_SERVER_IP:3004`. Stop with Ctrl+C.

**Option B – Run with PM2 (recommended for production)**

Install PM2 if needed:

```bash
sudo npm install -g pm2
```

Start the app:

```bash
cd ~/riowebsitenew2/Backend
pm2 start server.js --name rio-site
```

Save the process list and enable startup on reboot:

```bash
pm2 save
pm2 startup
```

Run the command that `pm2 startup` prints (it contains `sudo env PATH=...`).

Useful PM2 commands:

```bash
pm2 list          # status
pm2 logs rio-site # live logs
pm2 restart rio-site
pm2 stop rio-site
```

---

## Step 8: Open the port in the firewall (if enabled)

If you use `ufw` and want to allow direct access to port 3004:

```bash
sudo ufw allow 3004
sudo ufw reload
```

If you will use **only Nginx** (Step 9) on 80/443, you can skip opening 3004 and access the site via the domain.

---

## Step 9: (Optional) Nginx + domain + SSL

Use this if you want to serve the site on a domain (e.g. `https://yourdomain.com`) instead of `http://IP:3004`.

**9.1** Install Nginx and Certbot:

```bash
sudo apt update
sudo apt install -y nginx certbot python3-certbot-nginx
```

**9.2** Create a site config (replace `yourdomain.com`):

```bash
sudo nano /etc/nginx/sites-available/rio-site
```

Paste (replace `yourdomain.com` and keep `proxy_pass` on 3004 if that’s your PORT):

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    location / {
        proxy_pass http://127.0.0.1:3004;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

**9.3** Enable the site and reload Nginx:

```bash
sudo ln -s /etc/nginx/sites-available/rio-site /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

**9.4** Get SSL (HTTPS):

```bash
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

Follow the prompts. After that, the site will be available at `https://yourdomain.com`.

---

## Quick checklist

| Step | Action |
|------|--------|
| 1 | Node.js 18+ installed |
| 2 | Project on server (clone or upload) |
| 3 | `npm install` in root and `Backend` |
| 4 | `Backend/.env` with PORT, NODE_ENV, EMAIL_USER, EMAIL_PASS |
| 5 | `npm run build` |
| 6 | Port 3004 (or chosen PORT) free |
| 7 | Start with `npm run deploy:start` or PM2 |
| 8 | Firewall allows port (if not using only Nginx) |
| 9 | (Optional) Nginx + Certbot for domain and HTTPS |

---

## Verify it’s running

- **By port:** `http://YOUR_SERVER_IP:3004`  
- **By domain:** `https://yourdomain.com` (after Nginx + Certbot)

Test the contact form; emails will use the Gmail account in `Backend/.env`.

---

## Troubleshooting

**App won’t start**

- Check: `cd ~/riowebsitenew2/Backend && node -e "require('dotenv').config(); console.log(process.env.PORT)"` — should print your PORT.
- Ensure `~/riowebsitenew2/build` exists (run `npm run build` from project root).

**Contact form doesn’t send email**

- Check `Backend/.env`: correct `EMAIL_USER` and Gmail **App Password**.
- Check logs: `pm2 logs rio-site` or run without PM2 and watch the terminal.

**Port already in use**

- Run: `sudo lsof -i :3004` to see what’s using it.
- Change `PORT` in `Backend/.env` to a free port and restart the app (and Nginx `proxy_pass` if used).

**502 Bad Gateway (Nginx)**

- App must be listening on the port in `proxy_pass` (e.g. 3004). Run: `pm2 list` or `sudo lsof -i :3004`.
- Restart app: `pm2 restart rio-site`.
