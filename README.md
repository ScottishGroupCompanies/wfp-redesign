# Window Film Philadelphia

Static Astro rebuild of [windowfilmphiladelphia.net](https://www.windowfilmphiladelphia.net) — residential & commercial window film in Philadelphia, Camden, Reading, Upper Darby Township.

- **Stack:** Astro v4 + Tailwind CSS + TypeScript + framer-motion
- **Repo:** [`ScottishGroupCompanies/wfp-redesign`](https://github.com/ScottishGroupCompanies/wfp-redesign)
- **Branch:** `main` (Vercel auto-deploys)
- **Production:** https://www.windowfilmphiladelphia.net
- **Design system:** Scottish Group (charcoal + green, Playfair Display + DM Sans) — see `scottish-style-guide.md` and `CLAUDE.md` for full spec

## Quickstart

```bash
npm install
npm run dev      # → http://localhost:4321
npm run build    # production build (must be 0 errors)
npm run preview  # preview production build locally
```

## Project layout

```
window-film-philadelphia/
├── astro.config.mjs              site URL, integrations (tailwind/sitemap/icon)
├── tailwind.config.mjs
├── CLAUDE.md                     ← design system + dev conventions (READ FIRST)
├── scottish-style-guide.md       ← brand & component rules
├── WFP-IMAGE-AUDIT-REPORT.md     ← image audit (current state)
├── src/
│   ├── components/               Header, Footer, InnerPageHero, BackAndForthSection…
│   ├── pages/                    See status below
│   ├── content/blog/             blog posts (publish target for finalize cron)
│   ├── layouts/                  BaseLayout.astro
│   └── styles/global.css
├── public/
│   ├── images/                   site imagery
│   ├── llms.txt                  LLM-facing site description
│   └── robots.txt
├── scripts/                      one-off content/page generators + image tools
│   ├── generate_pages.py
│   ├── generate_benefit_pages.py
│   ├── generate_application_pages.py
│   ├── generate_product_pages.py
│   ├── compress-images.mjs
│   └── update-image-refs.mjs
└── seo-audits/                   5-part SEO audit (technical, geo, onpage, keywords, competitive)
```

## Page status

| Page / section | Status |
|---|---|
| Homepage | ✅ redesigned |
| Benefits (top + 16 sub-pages) | ✅ redesigned |
| Cities (Camden, Philadelphia, Reading, Upper Darby) | ✅ redesigned |
| Government buildings | 🚧 in progress |
| Applications, Products, Resources, Process, Contact, Blog | ⏳ not yet redesigned |

See `CLAUDE.md` for the InnerPageHero pattern + `ip-page-body` wrapper used on every inner page.

## Brand & design

Design system source of truth is `CLAUDE.md` + `scottish-style-guide.md`. Headline tokens:

- `--brand: #272E32` (charcoal — primary dark bg)
- `--green: #81AB4C` (primary accent — note: `TOOLS.md` lists `#7fac4a`; treat `CLAUDE.md` as authoritative for this site)
- `--font-serif: 'Playfair Display'`
- `--font-body: 'DM Sans'`

When editing, follow the global heading scale and radius tokens documented in `CLAUDE.md`. Don't invent new colors or fonts without updating the style guide.

## Deploy pipeline

Vercel watches `main`. Pushes go live automatically once connected in the Vercel dashboard.

### Auth

GitHub PAT lives in `~/.openclaw/.env` as `WFP_GITHUB_TOKEN`. Required for the finalize cron (see below) and for any manual `git push`.

## Related automation in this workspace

This project is the publish target for the daily blog cron:

- `scripts/finalize-wfphilly-github.js` — publishes finalized blog drafts to `src/content/blog/<slug>.md` via the GitHub REST API (no local checkout required, but having this clone around makes debugging much faster).

## Workflow notes

- **Image priority:** use Leonardo (`scripts/leonardo-generate.js` in workspace root) — not DALL·E. Reference images in `public/images/` and `WFP-IMAGE-AUDIT-REPORT.md` track current state.
- **Content rules:** residential + commercial only. No automotive.
- **Always `npm run build` and confirm 0 errors before committing.**

## Next steps (when you're ready)

- [ ] Re-run `npm install` to populate `node_modules/`
- [ ] Add NAP (address, phone, email) to site config — currently not stored in repo
- [ ] Confirm Vercel project is connected to the GitHub repo + env vars set
- [ ] Decide whether to retire the legacy WordPress site (`windowfilmphiladelphia.net` WP admin: `wfpadmin`) or run both in parallel during transition