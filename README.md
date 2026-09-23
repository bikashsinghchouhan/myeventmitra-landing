# MyEventMitra - Temporary SaaS Landing Page

Official temporary production-grade landing page for **MyEventMitra** (https://myeventmitra.co.in/).

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
The site will run at `http://localhost:3001/` (or `3000`).

### 3. Production Build
```bash
npm run build
```
Generates the optimized static bundle in the `dist/` directory, including `CNAME`, `robots.txt`, `sitemap.xml`, and static assets.

---

## 🌐 Custom Domain & GitHub Pages Deployment

### 1. Custom Domain Setting
The repository contains `public/CNAME` configured with:
```text
myeventmitra.co.in
```

### 2. Required GoDaddy DNS Records
To connect `myeventmitra.co.in` to GitHub Pages, configure the following DNS records in your domain registrar (GoDaddy):

#### A. Apex Domain Records (4 'A' Records for `@`):
| Type | Name / Host | Value / Target | TTL |
| :--- | :--- | :--- | :--- |
| **A** | `@` | `185.199.108.153` | 1 Hour / Automatic |
| **A** | `@` | `185.199.109.153` | 1 Hour / Automatic |
| **A** | `@` | `185.199.110.153` | 1 Hour / Automatic |
| **A** | `@` | `185.199.111.153` | 1 Hour / Automatic |

#### B. Subdomain Record (`www`):
| Type | Name / Host | Value / Target | TTL |
| :--- | :--- | :--- | :--- |
| **CNAME** | `www` | `<your-github-username>.github.io` | 1 Hour / Automatic |

*(Replace `<your-github-username>` with your actual GitHub username, e.g. `bikashsinghchouhan.github.io`)*

---

## 📦 GitHub Actions Automated Deployment

This repository includes `.github/workflows/deploy.yml`. Every push to the `main` branch triggers:
1. Automated checkout
2. Node.js 20 environment initialization
3. Clean dependency installation (`npm ci`)
4. Production build (`npm run build`)
5. Direct deployment to GitHub Pages

### To Enable in GitHub Repository:
1. Go to repository **Settings** -> **Pages**.
2. Under **Build and deployment -> Source**, select **GitHub Actions**.
3. Under **Custom domain**, enter `myeventmitra.co.in` and check **Enforce HTTPS**.
