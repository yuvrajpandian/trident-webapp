# Trident Business Center · Nexus — Website

A fast, premium marketing website for a Dubai business center, built with
**Next.js** (static export) + **Tailwind CSS**, designed to be hosted **free on
Cloudflare Pages**. Black + gold + cream theme, photo-driven layout.

Pages: Home · About Us · Services · Spaces · Why Dubai · Blog · Contact — with
lead-capture form, WhatsApp & "Book a Tour" CTAs, SEO metadata, sitemap, and
structured data.

---

## ✏️ Edit your business details (do this first)

**All your content lives in one file:** [`src/lib/site.ts`](src/lib/site.ts).

Open it and replace every value marked `// TODO`:

- Company name, tagline, description
- **Phone**, **WhatsApp number**, **email**, **address**, **map location**
- Social links
- Spaces, services, Why-Dubai stats, testimonials, FAQs, blog posts

Save the file and the whole site updates.

### 🖼️ Add your photos

Every image is one entry in the `images` map at the bottom of `src/lib/site.ts`.
Drop a photo into [`public/images/`](public/images) and set its path, e.g.

```ts
hero: { src: "/images/hero.jpg", label: "Office with Dubai skyline view" },
```

Until a path is set, an elegant labelled placeholder is shown — so the site
always looks finished.

### Make the contact form email you (1 minute, free)

1. Go to **https://web3forms.com** and enter your email to get an **Access Key**.
2. Paste it into `web3formsKey` in `src/lib/site.ts`.

Until you add a key, the form simply opens the visitor's email app with the
message pre-filled — so no lead is lost. WhatsApp and phone buttons always work.

---

## 🧑‍💻 Run it locally

```bash
npm install        # first time only
npm run dev        # open http://localhost:3000
```

Build the production site (outputs static files to `out/`):

```bash
npm run build
npm run preview    # preview the built site locally
```

---

## ☁️ Deploy free to Cloudflare Pages

1. Push this folder to a **GitHub** repository.
2. In the **Cloudflare dashboard** → **Workers & Pages** → **Create** →
   **Pages** → **Connect to Git**, select your repo.
3. Set the build settings:
   - **Framework preset:** `Next.js (Static HTML Export)` — or `None`
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
4. Click **Save and Deploy**. Your site goes live on a free `*.pages.dev` URL.
5. Add your custom domain under the project's **Custom domains** tab.

> Don't have a GitHub repo? You can also drag-and-drop the `out/` folder into
> Cloudflare Pages → **Upload assets** for a no-Git deploy.

Whenever you push changes to GitHub, Cloudflare rebuilds and redeploys
automatically.

---

## 🎨 Customising the look

- **Colours & fonts:** [`src/app/globals.css`](src/app/globals.css) (black/ink + gold + cream
  palette defined under `@theme`).
- **Logo:** [`src/components/Logo.tsx`](src/components/Logo.tsx) — currently a
  styled wordmark. Drop a logo image into `public/` and swap it in here.
- **Page sections:** each page is in `src/app/<page>/page.tsx`; shared building
  blocks are in `src/components/`.

---

## What's where

```
src/
  app/            # pages (home, about, services, spaces, why-dubai, blog, contact) + SEO
  components/     # navbar, footer, forms, cards, icons, CTAs
  lib/site.ts     # ← YOUR CONTENT — edit this
public/           # static assets, _headers (Cloudflare security headers)
```
