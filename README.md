<div align="center">

<img src="logo.svg" alt="Bishnu Kundu logo" width="84" height="84">

# Bishnu Kundu — Portfolio Website

**A fast, dark, multi-page portfolio built to win freelance clients.**
Freelance web developer for growing businesses worldwide.

[![Live site](https://img.shields.io/badge/Live%20site-bisnukundu.netlify.app-4f8cff?style=for-the-badge&logo=netlify&logoColor=white)](https://bisnukundu.netlify.app/)

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/Vanilla%20JS-F7DF1E?logo=javascript&logoColor=black)
![Netlify](https://img.shields.io/badge/Hosted%20on-Netlify-00C7B7?logo=netlify&logoColor=white)
![No dependencies](https://img.shields.io/badge/Dependencies-none-success)

[Live site](https://bisnukundu.netlify.app/) · [Services](https://bisnukundu.netlify.app/services/) · [Portfolio](https://bisnukundu.netlify.app/portfolio/) · [Reviews](https://bisnukundu.netlify.app/reviews/) · [Contact](https://bisnukundu.netlify.app/contact/)

</div>

---

## Table of contents

- [Overview](#overview)
- [Pages](#pages)
- [Features](#features)
- [SEO](#seo)
- [Tech stack](#tech-stack)
- [Project structure](#project-structure)
- [Run locally](#run-locally)
- [Deploy on Netlify](#deploy-on-netlify)
- [Customise](#customise)
- [Contact](#contact)

## Overview

This is the source code of my personal website, [bisnukundu.netlify.app](https://bisnukundu.netlify.app/). Its single goal is to turn visitors into clients, so every page is built around three things: **trust** (client video reviews, live projects), **clarity** (what I do, how we work, how to reach me) and **search visibility** (SEO built into every page).

It is plain HTML, CSS and JavaScript. There is no framework, no build step and no dependencies, so it loads fast and is easy to edit.

## Pages

| Page | URL | Purpose |
| --- | --- | --- |
| Home | `/` | Hero, services, featured work, client videos, process, FAQ |
| Services | `/services/` | Overview of everything I offer |
| WordPress developer | `/services/wordpress-developer/` | Landing page for WordPress development and redesign |
| WooCommerce developer | `/services/woocommerce-developer/` | Landing page for online shops |
| Laravel, React and Vue | `/services/web-app-development/` | Landing page for custom web apps |
| Website maintenance | `/services/website-maintenance/` | WordPress, business and e-commerce maintenance |
| Portfolio | `/portfolio/` | 60+ live client websites with category filters |
| Reviews | `/reviews/` | Client video testimonials and written reviews |
| About | `/about/` | Story, skills, timeline and tutorials |
| Contact | `/contact/` | WhatsApp, email and a contact form |
| Thank you | `/thank-you/` | Shown after the form is sent (not indexed) |
| 404 | `/404.html` | Custom not-found page |

## Features

- **Dark, professional design** with a deep navy background and one blue accent.
- **Animated hero**: profile photo with skills orbiting around it, typing headline and animated counters.
- **Scroll animations**: smooth reveal on scroll, scroll progress bar, hover spotlight on cards.
- **Animated page visuals** for each service (website, shop, code editor, maintenance checklist, chat).
- **Client video testimonials** that load only when clicked, using the privacy-friendly YouTube embed.
- **Portfolio filters** for online shops, business, health and media sites.
- **Contact form** powered by Netlify Forms with spam protection (honeypot).
- **Responsive navigation** with a services dropdown and a mobile menu.
- **Floating WhatsApp button** on every page.
- **Accessible by default**: semantic HTML, visible focus states, alt text on images, and animations switched off for visitors who prefer reduced motion.

## SEO

Search visibility is a core feature, not an afterthought:

- Unique `<title>` and meta description on every page.
- Canonical URLs, Open Graph and Twitter Card tags with a custom share image (`og-image.png`).
- **Structured data (JSON-LD):** Person, ProfessionalService, WebSite, Service, FAQPage, BreadcrumbList, ItemList, ProfilePage and ContactPage.
- Separate landing pages for each service, so each can rank for its own searches.
- `sitemap.xml` and `robots.txt`, plus a custom 404 page.
- One `<h1>` per page, a clear heading hierarchy and internal links between related pages.
- Name variants (Bishnu Kundu, Bisnu Kundu, bisnukundu, Bisnu K) included so searches for my name find the site.
- Cache and security headers in `_headers`, and CSS/JS links versioned to avoid stale files.

## Tech stack

| Area | Tools |
| --- | --- |
| Markup | HTML5, semantic elements |
| Styling | CSS3 with custom properties, Grid, Flexbox and `@property` animations |
| Scripts | Vanilla JavaScript (IntersectionObserver, no libraries) |
| Fonts | [Inter](https://fonts.google.com/specimen/Inter) and [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) via Google Fonts |
| Hosting | [Netlify](https://www.netlify.com/) (hosting, forms, headers), deployed from GitHub |

## Project structure

```text
.
├── index.html                  # Home
├── about/                      # About
├── contact/                    # Contact form
├── portfolio/                  # Live client projects
├── reviews/                    # Video and written reviews
├── services/
│   ├── index.html              # Services overview
│   ├── wordpress-developer/
│   ├── woocommerce-developer/
│   ├── web-app-development/
│   └── website-maintenance/
├── thank-you/                  # Form success page
├── 404.html                    # Not-found page
├── style.css                   # All styles
├── app.js                      # All interactions
├── img/                        # Optimised images
├── favicon_io/                 # Favicons and app icons
├── logo.svg                    # Logo
├── og-image.png                # Social share image (1200x630)
├── site.webmanifest            # Web app manifest
├── sitemap.xml                 # Sitemap for search engines
├── robots.txt                  # Crawler rules
└── _headers                    # Netlify cache and security headers
```

> `bisnu.jpg`, `bisnu.webp`, `bisnu-profesonal.webp` and `IMG_20250528_215421.jpg` in the root are older images from a previous version of the site. The current pages do not use them.

## Run locally

The site uses root-relative links such as `/style.css`, so open it through a local server instead of double-clicking the files.

```bash
git clone https://github.com/bisnukundu/protfolio-website.git
cd protfolio-website

# Option 1: Node
npx serve .

# Option 2: Python
python3 -m http.server 8000
```

Then open the address shown in the terminal (for example `http://localhost:8000`).

## Deploy on Netlify

Every push to the `master` branch deploys automatically.

1. In Netlify, choose **Add new site → Import an existing project** and select this repository.
2. Branch to deploy: `master`.
3. Build command: leave empty.
4. Publish directory: leave empty (or `.`).
5. Open **Forms** and make sure form detection is on, then redeploy once so the contact form works.

## Customise

**Update contact details.** Search the project for the WhatsApp link (`https://wa.link/w53g4s`) and the email address (`bisnukundu@gmail.com`) and replace them.

**Add a project.** In `portfolio/index.html`, copy an existing `<a class="tile ...">` block, change the name, link, tag and description, and set `data-cat` to `shops`, `local`, `health` or `media` so the filter works.

**Use a custom domain.** After connecting a domain in Netlify, replace the old address in the canonical links, Open Graph tags, structured data and sitemap:

```bash
grep -rl "https://bisnukundu.netlify.app" --include="*.html" --include="*.xml" --include="*.txt" . \
  | xargs sed -i 's#https://bisnukundu.netlify.app#https://your-domain.com#g'
```

Then add the new address to Google Search Console and submit `https://your-domain.com/sitemap.xml`.

**Change colours.** Edit the CSS variables at the top of `style.css` (`--bg`, `--ac`, `--ac2`, `--tx`, `--mu`).

## Contact

**Bishnu Kundu** (also known as Bisnu K) — freelance web developer for growing businesses worldwide.

[![WhatsApp](https://img.shields.io/badge/WhatsApp-Chat-25D366?logo=whatsapp&logoColor=white)](https://wa.link/w53g4s)
[![Email](https://img.shields.io/badge/Email-bisnukundu%40gmail.com-EA4335?logo=gmail&logoColor=white)](mailto:bisnukundu@gmail.com)
[![Fiverr](https://img.shields.io/badge/Fiverr-bisnukundu-1DBF73?logo=fiverr&logoColor=white)](https://www.fiverr.com/bisnukundu)
[![Freelancer](https://img.shields.io/badge/Freelancer-bisnukundu-29B2FE?logo=freelancer&logoColor=white)](https://www.freelancer.com/u/bisnukundu)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-bisnukundu-0A66C2?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/bisnukundu/)

---

<div align="center">

© Bishnu Kundu. Code and content are not licensed for reuse. Feel free to take inspiration.

</div>
