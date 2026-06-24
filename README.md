# 砖机出海多语言站 · Block Machine Africa SEO Site

A pure-static, SEO-optimized, 3-language (English / Français / Kiswahili) marketing site for a block / brick making machine manufacturer exporting to Africa. Zero backend, zero database — just open `index.html` in a browser.

---

## 🎯 Project Overview

- **Niche:** Block / brick making machines (QT4-40 / QT4-40A / QT4-18)
- **Target markets:** Nigeria, Ghana, Kenya, South Africa, Algeria, Senegal, Mali, Côte d'Ivoire, Cameroon, Tanzania, Uganda, Rwanda
- **Languages:** English (West + East + Southern Africa), Français (North + West Africa), Kiswahili (East Africa)
- **Visual style:** Warm African color palette (orange + green + brown + cream) — friendly, earthy, professional
- **Tech stack:** Pure HTML5 + CSS3 + vanilla JS. No frameworks, no build step, no server required.

---

## 📁 Project Structure

```
砖机关键词多语言站/
├── index.html                 # Language entry page (3 cards: EN/FR/SW)
├── en/                        # English version (brand: BLOCKMASTERY)
│   ├── index.html
│   ├── products.html
│   ├── about.html
│   ├── contact.html
│   └── sitemap.xml
├── fr/                        # French version (brand: BRIQUE PRO)
│   ├── index.html
│   ├── products.html
│   ├── about.html
│   ├── contact.html
│   └── sitemap.xml
├── sw/                        # Kiswahili version (brand: MTOFALI BORA)
│   ├── index.html
│   ├── products.html
│   ├── about.html
│   ├── contact.html
│   └── sitemap.xml
├── assets/
│   ├── css/
│   │   └── style.css          # ~1200 lines, African orange theme, fully responsive
│   ├── js/
│   │   └── main.js            # Mobile menu, smooth scroll, FAQ accordion
│   └── images/
│       ├── banners/           # 3 hero banners (en/fr/sw)
│       ├── products/          # 3 product shots (qt4-40, qt4-40a, qt4-18)
│       ├── factory/           # 4 factory / production images
│       ├── cases/             # 3 customer case images
│       ├── about-factory-exterior.jpg   # ⚠ placeholder (0 bytes) — upload your real photo
│       └── about-factory-interior.jpg   # ⚠ placeholder (0 bytes) — upload your real photo
└── README.md
```

---

## 🚀 How to Preview / Deploy

### Local preview (simplest)

Just open `index.html` in any modern browser:

```bash
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
```

### Local preview (with a tiny HTTP server — recommended for cross-folder links)

```bash
# Python 3
python3 -m http.server 8000

# Then open: http://localhost:8000
```

### Production deployment

The entire folder is a static site — drop it on **any** static host:

- **Netlify** — drag-and-drop the folder onto netlify.com/drop
- **Vercel** — `vercel --prod` from inside the folder
- **Cloudflare Pages** — connect a GitHub repo
- **GitHub Pages** — push to a repo, enable Pages in settings
- **Any traditional web host** (Bluehost, Hostinger, SiteGround) — upload via FTP to `public_html/`
- **Object storage** (S3, Cloudflare R2, Aliyun OSS) — enable static website hosting, upload the folder

No build step, no Node.js, no PHP. Just files.

---

## ✏️ Customisation Checklist

Before going live, replace these placeholders with your real data:

### Real contact info (already in the site)

| Item | Value | Location |
|------|-------|----------|
| WhatsApp | `+86 151 5977 6142` | All pages (header CTA, footer, floating button) |
| Email | `xl008884@gmail.com` | Footer + contact page |

### To replace

| Item | Where | Notes |
|------|-------|-------|
| Brand name (currently `BLOCKMASTERY` / `BRIQUE PRO` / `MTOFALI BORA`) | Logo `.logo span` on every page | If you have an official brand name, edit all 12 HTML files. Search for the brand name. |
| Logo image | Replace the CSS-only `<span class="logo-icon">XX</span>` with an `<img>` if you have a real logo | See "Optional: Real Logo" below |
| 2 placeholder factory photos | `assets/images/about-factory-exterior.jpg` and `about-factory-interior.jpg` | Currently 0-byte placeholders. Replace with your real factory exterior / workshop photos — keep filename unchanged so the HTML picks them up automatically. |
| WhatsApp QR code | `assets/images/contact-qr.jpg` (not yet present) | Generate a QR for `https://wa.me/8615159776142` and drop it in. Then update the `<div class="qr-placeholder">` in each `contact.html` to an `<img>`. |
| Year in footer | `© <span id="year"></span>` | Already auto-updates via JS. |
| Domain name | Once deployed, update `<link rel="canonical">` and `<meta name="robots">` if you want to noindex staging. |

---

## 🎨 Color System

All colors are defined as CSS custom properties in `assets/css/style.css` under `:root`. To re-skin the site, just edit these:

| Variable | Color | Usage |
|----------|-------|-------|
| `--primary` | `#E67E22` | Header background, primary buttons, section eyebrows, link hover |
| `--primary-dark` | `#D35400` | Primary button hover, hero gradient end |
| `--secondary` | `#1E6B3A` | Stats strip, footer links, email button |
| `--accent` | `#8B4513` | Footer background, hero background fallback |
| `--bg` | `#FDF6E3` | Page background (warm cream) |
| `--bg-soft` | `#F5EBD0` | Alternating section background |
| `--text` | `#2C3E50` | Body text |
| `--border` | `#E5D5B0` | Card borders, table dividers |
| `--whatsapp` | `#25D366` | WhatsApp button + floating bubble |

---

## 🔍 SEO Notes

Each page has independent:

- `<title>` and `<meta name="description">` tuned to the language
- `<meta name="keywords">` packed with the local industry's search terms:
  - **EN:** `block machine, brick machine, hollow block, sandcrete, hourdis, interlocking paver, QT4-40, QT4-40A, QT4-18, ISO 9001, CE certified, ...`
  - **FR:** `machine à brique, pondeuse parpaing, presse hydraulique, machine bloc béton, machine hourdis, QT4-40, QT4-40A, QT4-18, ISO 9001, certification CE, ...`
  - **SW:** `mashine ya matofali, mashine ya kufyatua matofali, mashine ya saruji, mashine ya hayidroliki, mtengenezaji, QT4-40, QT4-40A, QT4-18, ...`
- `<link rel="canonical">` to avoid duplicate-content penalties
- `<link rel="alternate" hreflang="...">` to declare language siblings
- `<meta name="robots" content="index, follow">`
- `sitemap.xml` per language with `xhtml:link` hreflang annotations
- Mobile-responsive (375 / 768 / 1280+ breakpoints)

**To submit to Google Search Console:**

1. Deploy the site
2. Go to https://search.google.com/search-console/
3. Add your domain as a property
4. Submit each `sitemap.xml` (e.g. `https://yourdomain.com/en/sitemap.xml`)
5. (Optional) Use the URL Inspection tool to request indexing of the 4 key URLs per language

---

## 💡 Optional Improvements (when you have more time)

- **Real logo design** — replace the CSS-text logo with a proper SVG/PNG in all 12 HTML files
- **WhatsApp QR code image** — generate once and embed in all 3 contact pages
- **Real factory photos** — replace the 2 placeholder JPGs
- **Custom 404 page** — add a `404.html` at root for broken links
- **Open Graph / Twitter cards** — add `<meta property="og:image">` etc. for nicer social sharing
- **Analytics** — drop in Plausible / Google Analytics snippet before `</body>` (the site is 100% static so any tag manager works)
- **Hreflang verification** — once live, run the URL through https://hreflang.io/ to verify all 12 alternate links resolve
- **Page speed** — the site is already lightweight (no JS framework, no images over 2 MB), but you can add `loading="lazy"` to below-the-fold `<img>` tags for an extra speed boost on mobile
- **Multi-currency pricing** — if you want to display a price range, the spots are reserved in `products.html` and the home-page CTA section

---

## 🛠 Tech Stack & File Sizes

| File | Lines / Size | Notes |
|------|--------------|-------|
| `index.html` (root) | ~50 | 3-card language entry |
| `en/*.html` | 4 files × 200–300 lines each | Full EN site |
| `fr/*.html` | 4 files × 200–300 lines each | Full FR site |
| `sw/*.html` | 4 files × 200–300 lines each | Full SW site |
| `en/fr/sw/sitemap.xml` | 3 files, ~30 lines each | sitemap.org standard + hreflang |
| `assets/css/style.css` | ~1200 lines | African orange theme, fully responsive, no preprocessor needed |
| `assets/js/main.js` | ~120 lines | Vanilla JS — hamburger menu, smooth scroll, FAQ accordion |
| `assets/images/*` | 13 images + 2 placeholders | AI-generated factory / product / case shots + 2 real-photo placeholders for upload |

**Total payload (excluding images):** ~150 KB of HTML + CSS + JS — loads instantly even on 3G.

---

## 📞 Contact info already in the site

- **WhatsApp:** https://wa.me/8615159776142
- **Email:** xl008884@gmail.com
- **Working hours:** Mon – Sat, 8:00 – 18:00 (China, GMT+8)
- **Languages spoken:** English, Français, Kiswahili, 中文

---

## 📜 License

Internal use. All images generated for this project unless otherwise noted.

---

*Last updated: December 2024 · Static site v1.0*
