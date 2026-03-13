# Point riobizsols.com to your Ubuntu server (leave cPanel)

Right now **riobizsols.com** points to a website on **cPanel**. To use the domain for the Rio site on your **Ubuntu server**, you do two things:

1. **Change DNS** so the domain points to the Ubuntu server IP (not the cPanel host).
2. **Configure Nginx** on the Ubuntu server for `riobizsols.com` and get SSL.

The other site on cPanel will keep running; it just won’t be reachable at riobizsols.com anymore (only at whatever host/URL it uses if you move the domain away).

---

## Part 1: Where is DNS for riobizsols.com?

DNS is managed in **one** of these places:

- **Domain registrar** (where you bought the domain): GoDaddy, Namecheap, Google Domains, Cloudflare, etc.  
  → Log in there and look for **DNS**, **DNS Management**, or **Nameservers**.
- **cPanel host**: If the nameservers for riobizsols.com are set to your cPanel host (e.g. `ns1.hostingcompany.com`), then DNS is managed **inside cPanel** (Zone Editor / DNS Zone / Advanced DNS).

You only need to change DNS in the place that currently controls the domain (registrar or cPanel).

---

## Part 2: Change DNS to point to your Ubuntu server

You need the **public IP** of your Ubuntu server (where the Rio app runs). On the server you can run:

```bash
curl -4 ifconfig.me
```

Then in the **same** place where DNS is managed (registrar or cPanel):

### Option A – DNS at your domain registrar

1. Open **DNS / DNS Management / Manage DNS** for **riobizsols.com**.
2. Find the **A** records for:
   - **riobizsols.com** (sometimes shown as `@`)
   - **www.riobizsols.com** (sometimes shown as `www`)
3. **Edit** each so the **value / points to** is your **Ubuntu server IP**.
   - If there is no `www` A record, add one: host `www`, type `A`, value = Ubuntu server IP.
4. Save. DNS can take 5 minutes to 48 hours to update (often 15–30 minutes).

### Option B – DNS in cPanel (Zone Editor)

1. In cPanel, open **Zone Editor** (or **Advanced DNS Zone Editor** / **DNS Zone**).
2. Select the zone for **riobizsols.com**.
3. Find the **A** records for `@` and `www`.
4. **Edit** them so they point to your **Ubuntu server IP** (or delete and create new A records with that IP).
5. Save. Wait for propagation (same as above).

After this, **riobizsols.com** and **www.riobizsols.com** will point to your Ubuntu server. The cPanel site will no longer be served at that domain.

---

## Part 3: Nginx on the Ubuntu server for riobizsols.com

Run these on your **Ubuntu server** (where the Rio app is already running on port 3004).

**1. Install Nginx and Certbot (if not already):**

```bash
sudo apt update
sudo apt install -y nginx certbot python3-certbot-nginx
```

**2. Create the site config:**

```bash
sudo nano /etc/nginx/sites-available/riobizsols.com
```

**3. Paste this** (it already uses `riobizsols.com` and port 3004):

```nginx
server {
    listen 80;
    server_name riobizsols.com www.riobizsols.com;
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

Save and exit (Ctrl+O, Enter, Ctrl+X).

**4. Enable the site and reload Nginx:**

```bash
sudo ln -s /etc/nginx/sites-available/riobizsols.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

**5. Get HTTPS (SSL):**

```bash
sudo certbot --nginx -d riobizsols.com -d www.riobizsols.com
```

Follow the prompts (email, agree to terms). Certbot will configure HTTPS and redirect HTTP to HTTPS.

---

## Part 4: Check that it works

- Wait until DNS has updated (e.g. `dig riobizsols.com` or [whatsmydns.net](https://www.whatsmydns.net) shows your Ubuntu server IP).
- Then open: **https://riobizsols.com** and **https://www.riobizsols.com**.

---

## Summary

| Step | Where | What to do |
|------|--------|------------|
| 1 | Registrar or cPanel (DNS) | Change A records for `@` and `www` to your **Ubuntu server IP** |
| 2 | Ubuntu server | Nginx config for `riobizsols.com` → proxy to `http://127.0.0.1:3004` |
| 3 | Ubuntu server | `certbot --nginx -d riobizsols.com -d www.riobizsols.com` |

After that, the domain is “disconnected” from the cPanel site (for that domain) and used by your Rio app on the Ubuntu server.
