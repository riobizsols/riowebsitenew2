# RIOBizSols – Production Build & Deployment

This guide covers creating a production build and deploying the app to a webserver. The backend serves both the API and the React static files in production.

---

## 1. Production build (on your machine)

### 1.1 Set environment for production (optional)

If your site will be at **https://yourdomain.com** and the backend will serve the app from the same URL, you can leave `REACT_APP_API_URL` unset (same-origin).

If the API will be on a **different URL** (e.g. **https://api.yourdomain.com**), set it before building:

**Windows (PowerShell):**
```powershell
$env:REACT_APP_API_URL = "https://yourdomain.com"
npm run build
```

**Windows (CMD):**
```cmd
set REACT_APP_API_URL=https://yourdomain.com
npm run build
```

**Linux / macOS:**
```bash
REACT_APP_API_URL=https://yourdomain.com npm run build
```

### 1.2 Build the React app

From the **project root** (RIOBizSols):

```bash
npm run build
```

This creates the `build/` folder with optimized static files.

### 1.3 Install backend dependencies (if not already)

```bash
cd Backend
npm install --production
cd ..
```

---

## 2. What to upload to the server

Upload the following to your webserver:

| Path | Purpose |
|------|--------|
| `build/` | React production build (static files) |
| `Backend/` (entire folder) | Node.js server (serves API + static files) |

You do **not** need to upload:

- `node_modules/` in the **root** (frontend) – only the built `build/` output
- `Backend/node_modules/` can be omitted if you run `npm install --production` on the server inside `Backend/`
- `src/`, `public/`, `.env` (root) – only used for development/build

---

## 3. Server setup

### 3.1 Node.js

- Install **Node.js** (LTS, e.g. 18 or 20) on the server.

### 3.2 Project layout on server

Example layout:

```
/var/www/riobizsols/
├── build/          ← contents of your local build/
├── Backend/
│   ├── server.js
│   ├── package.json
│   ├── routes/
│   ├── data/
│   └── .env        ← create this on server (see below)
```

So the **parent** of `Backend` should contain the `build` folder (same as your repo: `RIOBizSols/build` and `RIOBizSols/Backend`).

### 3.3 Backend environment (.env)

On the server, create `Backend/.env` with:

```env
PORT=5001
NODE_ENV=production
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password
```

- Use a real Gmail (or your SMTP) and an [App Password](https://support.google.com/accounts/answer/185833) for `EMAIL_PASS`.
- If the server uses a different port (e.g. 80 via reverse proxy), set `PORT` to the port your Node app listens on (e.g. 5001); the reverse proxy can map 80/443 to 5001.

### 3.4 Install backend deps and run

On the server, inside `Backend/`:

```bash
cd /var/www/riobizsols/Backend
npm install --production
node server.js
```

Or use the production script:

```bash
npm run start:prod
```

For a permanent setup, use a process manager (e.g. **PM2**):

```bash
npm install -g pm2
pm2 start server.js --name riobizsols
pm2 save
pm2 startup
```

---

## 4. Reverse proxy (recommended)

Use **Nginx** (or Apache) in front of Node so you can use port 80/443 and SSL.

**Nginx example** (adjust paths and domain):

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:5001;
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

Then enable HTTPS (e.g. Let’s Encrypt with Certbot).

---

## 5. Quick deploy checklist

- [ ] Run `npm run build` in project root (set `REACT_APP_API_URL` only if API is on a different domain).
- [ ] Upload `build/` and full `Backend/` to the server (correct layout: `build` and `Backend` under same parent).
- [ ] On server: create `Backend/.env` with `PORT`, `NODE_ENV`, `EMAIL_USER`, `EMAIL_PASS`.
- [ ] On server: `cd Backend && npm install --production && npm run start:prod` (or PM2).
- [ ] Configure Nginx/Apache to proxy to Node (e.g. port 5001) and set up SSL.

After this, the backend serves the React app and the `/send-email` and `/api/visitors` APIs from the same origin.
