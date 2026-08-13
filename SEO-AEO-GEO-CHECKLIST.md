# Window Film Philadelphia — Master SEO / AEO / GEO / Technical Checklist

> **Site:** windowfilmphiladelphia.net (Astro static, deployed on Vercel)
> **Repo:** `ScottishGroupCompanies/wfp-redesign` → local `~/.openclaw/workspace/projects/window-film-philadelphia`
> **Compiled:** 2026-08-11. Grounded in a live audit of the production site + current SEO/AEO/GEO best practices.
> **Legend:** 🔴 Critical (do first) · 🟠 High · 🟡 Medium · 🟢 Polish · ✅ Already done · 🔎 Needs verification

This checklist covers four layers:
1. **Technical SEO** — crawlability, indexing, redirects, canonicals, speed, errors
2. **On-page / Content SEO** — keywords, headings, internal linking, E-E-A-T
3. **Local SEO** — GBP, NAP, citations, geo-relevance
4. **AEO / GEO (AI search)** — llms.txt, schema/microdata, answer-engine formatting, citation-worthiness

---

## 🚨 AUDIT FINDINGS — Real issues found on the live site (fix these first)

These are confirmed defects from the 2026-08-11 crawl, not generic advice:

| # | Finding | Severity | Where |
|---|---------|----------|-------|
| A1 | **Canonical/host conflict.** Every `<link rel=canonical>` and `og:url` points to `https://www.windowfilmphiladelphia.net/...` but **www 307-redirects to non-www** (`windowfilmphiladelphia.net`). Canonicals point at a URL that redirects away — a self-contradicting signal that wastes crawl budget and can split ranking signals. | 🔴 | `astro.config.mjs` `site:`, `SEOHead.astro`, `SchemaOrg.astro` |
| A2 | **Sitemap lists 621 URLs all on the `www` host** — every one 307-redirects. Google/AI crawlers hit a redirect on every sitemap entry. | 🔴 | `sitemap-0.xml` (generated from `site:`) |
| A3 | **Sitemap has zero `<lastmod>` dates.** `dateModified`/freshness is a documented AEO ranking + ~1.8× AI-citation signal. | 🟠 | sitemap config |
| A4 | **307 (temporary) redirect** used for www→non-www. Should be **301 permanent** so equity consolidates. | 🟠 | Vercel domain/redirect config |
| A5 | **Only 1 JSON-LD block on homepage** (LocalBusiness). Missing `Organization`, `WebSite` (+ `SearchAction`), `BreadcrumbList`. | 🟠 | `SchemaOrg.astro` / BaseLayout |
| A6 | **GA loaded render-blocking in `<head>`**, no `preload`/`font-display` hints, fonts from Google Fonts. Hurts LCP/TBT. | 🟡 | `SEOHead.astro`, font loading |
| A7 | **No web app manifest, no `apple-touch-icon`, no `theme-color`.** | 🟢 | `public/`, BaseLayout head |
| A8 | **No IndexNow key** deployed (instant indexing on Bing/Yandex, and increasingly relevant for AI crawlers). | 🟢 | `public/` |
| A9 | **Decide the canonical host once** and make redirect + `site:` + canonicals + sitemap + GBP + GSC property + backlinks all agree. Currently they disagree. | 🔴 | site-wide |

**The single most important fix:** pick ONE host (recommend **non-www**, since that's what Vercel already resolves 200 to) and make everything point to it — `astro.config.mjs site`, all canonicals, all schema `@id`/`url`, sitemap, and change the redirect to 301. This one change resolves A1, A2, A4, and half of A9.

---

## 1. TECHNICAL SEO

### 1.1 Crawlability & Indexing
- [ ] ✅ `robots.txt` present, allows crawl, references sitemap, has explicit AI-crawler allow rules (GPTBot, ChatGPT-User, OAI-SearchBot, anthropic-ai, Google-Extended, CCBot, Bytespider, Cohere-ai). **Good.**
- [ ] 🔴 Point `robots.txt` `Sitemap:` line at the **canonical host** (currently `www` — must match final host decision).
- [ ] ✅ `<meta name="robots" content="index, follow">` on indexable pages; `noindex` on `/thank-you/`. **Good.**
- [ ] 🔴 Fix sitemap host (A2) — regenerate so all `<loc>` use the canonical non-redirecting host.
- [ ] 🟠 Add `<lastmod>` to sitemap entries (A3). In Astro `@astrojs/sitemap`, set `lastmod` via `serialize` or a `customPages`/`lastmod` hook; ideally driven by git commit date or content frontmatter.
- [ ] 🟡 Split sitemap by type if it grows (pages / blog / products) once >1 file is useful for diagnostics.
- [ ] 🔎 Verify every important page is actually **in** the sitemap and no orphan/noindex pages leak in (currently 621 URLs — confirm count matches intended page inventory; watch for stale `/2026/04/...` blog URLs and legacy paths).
- [ ] 🟡 Submit sitemap in **Google Search Console** and **Bing Webmaster Tools**; monitor "Discovered/Crawled – not indexed."
- [ ] 🟢 Deploy **IndexNow** key file + ping on publish (A8) for instant Bing/Yandex indexing.
- [ ] 🔎 Confirm no accidental `Disallow` blocks CSS/JS (Google needs to render). Current robots is clean — keep it that way.

### 1.2 Redirects
- [ ] 🔴 Change www→non-www from **307 → 301** (A4). On Vercel, set the non-www domain as primary / use `redirects` in `vercel.json` with `permanent: true`.
- [ ] 🔴 Ensure canonical host has **no redirect chains** (max 1 hop). Currently www→non-www is 1 hop — fine once it's 301, but canonicals shouldn't force the hop (A1).
- [ ] 🟠 Enforce a single **trailing-slash policy** (site uses `trailingSlash: 'always'`). Confirm `/page` (no slash) 301s to `/page/` rather than serving 200 at both — the live test returned **200 at `/products`** (no slash) which risks duplicate URLs. Add redirect or confirm Vercel normalizes.
- [ ] 🟡 Map & 301 all **legacy URLs** from the old site structure (old `wfp-live` had `/benefits/*`, `/cities/*` flat; new uses `/services/*`, `/applications/*`). Any inbound links/rankings to old paths must 301 to new equivalents. Build a redirect map in `vercel.json`.
- [ ] 🟢 Audit for redirect loops and orphaned redirects periodically.

### 1.3 Canonicalization & Duplicates
- [ ] 🔴 Fix canonical host (A1) — self-referencing canonical must equal the live 200 URL.
- [ ] 🟠 Self-referencing canonical on **every** page (already templated in `SEOHead.astro` — just fix the host).
- [ ] 🟡 Ensure product family pages vs `[slug]` detail pages don't duplicate; each detail page canonical to itself.
- [ ] 🟡 Add `og:url` = canonical (currently also on www — fixed by host change).
- [ ] 🔎 Check for parameterized/UTM duplicate indexing; canonical handles it but confirm.

### 1.4 HTTPS / Security / Headers
- [ ] ✅ HTTPS + HSTS (`strict-transport-security: max-age=63072000`). **Good.**
- [ ] 🟡 Add security headers via `vercel.json`: `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, a basic `Content-Security-Policy` (won't rank you but is an E-E-A-T/trust and QA signal).
- [ ] 🟢 Confirm valid TLS cert chain (curl needed `-k` in one path variant — verify the cert covers both apex and www so no SSL warning on any entry point).

### 1.5 404 / Error Handling
- [ ] 🟠 Live 404s return `content-type: text/plain` (Vercel default) — build a **branded `404.astro`** with helpful links (services, contact, search) so users/AI landing on dead URLs recover. Return proper 404 status.
- [ ] 🟡 Add a **soft-404 check**: thin/empty pages shouldn't return 200. Monitor GSC "Soft 404."
- [ ] 🔎 Crawl the whole site (Screaming Frog / Sitebulb / `wget --spider`) to find **broken internal links & external 404s**. Fix or remove.
- [ ] 🟢 Custom `500` handling where possible.

### 1.6 Page Speed / Core Web Vitals
- [ ] 🔎 Run **PageSpeed Insights + CrUX** on mobile & desktop for home, a service page, a city page, a product page. (Site has too little traffic for CrUX field data today — use lab data now, monitor field data as traffic grows.) Targets: **LCP < 2.5s, INP < 200ms, CLS < 0.1**.
- [ ] 🟠 GA/gtag currently loads **render-blocking in `<head>`** (A6). Move to end of body or load via `requestIdleCallback`/partytown; keep `async`.
- [ ] 🟠 **Self-host fonts** or add `<link rel="preload">` + `font-display: swap` (no preload hints found). Reduces LCP + render-blocking.
- [ ] 🟠 Serve hero/LCP image as **preloaded WebP/AVIF**, correctly sized, with `fetchpriority="high"`; lazy-load below-fold images (`loading="lazy"`, `decoding="async"`). Site has 82 imgs on home — audit which are above the fold.
- [ ] 🟡 Set explicit `width`/`height` (or aspect-ratio) on all images to kill CLS.
- [ ] 🟡 Use Astro's `<Image>` / `astro:assets` for automatic responsive `srcset` + modern formats.
- [ ] 🟡 Minify + defer non-critical JS (chat widget, count-up animations can be deferred / idle-loaded).
- [ ] 🟢 Enable Vercel edge caching / long `Cache-Control` on `_assets` (immutable hashed files → `max-age=31536000, immutable`).
- [ ] 🟢 Preconnect already set for Google Fonts — good; add `dns-prefetch` for GA domain.

### 1.7 Rendering & Mobile
- [ ] ✅ **SSR/static HTML** — main content (2207 words) + single H1 present in raw HTML → fully crawlable & AI-parseable. **Excellent, keep it static.**
- [ ] ✅ `<html lang="en">`, responsive viewport meta. **Good.**
- [ ] 🟡 Mobile UX QA: tap targets ≥48px, no horizontal scroll, sticky mobile CTA doesn't cover content, chat widget doesn't block nav.
- [ ] 🟢 Add `theme-color` meta + web app manifest + `apple-touch-icon` (A7).

### 1.8 Site Architecture & Internal Linking
- [ ] 🟠 Ensure a **logical hierarchy**: Home → Services / Applications / Products / Cities → detail pages, all reachable within 3 clicks.
- [ ] 🟠 Add **BreadcrumbList** navigation (visible UI + schema, see 4.3) on all deep pages.
- [ ] 🟡 Strong **internal linking**: every service links to relevant applications, products, and city pages (and vice-versa) with descriptive anchor text (not "click here").
- [ ] 🟡 Contextual links from blog posts → money pages (services/cities).
- [ ] 🟢 Add an **HTML sitemap / hub page** for users and crawlers.
- [ ] 🔎 Check for orphan pages (in sitemap but not internally linked).

---

## 2. ON-PAGE / CONTENT SEO

### 2.1 Titles & Meta
- [ ] 🟡 Unique, keyword-led **`<title>`** per page, ~50–60 chars, primary keyword + city + brand. (Home title is good.)
- [ ] 🟡 Unique **meta description** per page, ~140–160 chars, with a benefit + CTA. (Home is good.)
- [ ] 🔎 Audit all pages for **duplicate/missing titles & descriptions** (Screaming Frog).
- [ ] 🟢 Titles should front-load the money keyword ("Residential Window Film Philadelphia | …").

### 2.2 Headings & Structure
- [ ] ✅ Single H1 per page (verified on home). Keep this rule site-wide.
- [ ] 🟡 Logical H2/H3 outline that mirrors user questions (helps both SEO and AEO extraction).
- [ ] 🟡 **Per user's quality bar:** no oddly-specific numbers in headings, no repetitive stats across pages, no fragment sentences — write complete flowing prose. (Already enforced in your build prompts — keep it in QA.)

### 2.3 Keyword & Content Strategy
- [ ] 🟠 Keyword research drives page targeting; compound H1s capture related concepts (your existing WFP convention).
- [ ] 🟡 Run **keyword density** proactively (7–10 occurrences, 5+ visible) per your WFP SEO convention.
- [ ] 🟠 Cover **search intent fully**: each service/city page answers what/why/how much/how long/warranty/process.
- [ ] 🟡 Build **topical authority clusters**: pillar (e.g., "Commercial Window Film") + supporting posts, all interlinked.
- [ ] 🟡 No duplicate pages made by swapping city/service names (your "remove the service name" test).

### 2.4 E-E-A-T (Experience, Expertise, Authority, Trust) — also a top AEO signal
- [ ] 🟠 Visible **business credentials**: "since 2008," licenses, certifications, manufacturer authorizations (3M/LLumar dealer status).
- [ ] 🟠 **Real photos** of real jobs (you have Higgsfield AI images — mix in genuine project/install photos for authenticity where possible).
- [ ] 🟠 **Author/company attribution** on blog posts + an "About" page with team, history, service area.
- [ ] 🟡 **Reviews/testimonials** with schema (see 4.4) — real, attributable.
- [ ] 🟡 Cite **authoritative external sources** (IWFA, EPA UV facts, energy.gov — note your memory: energy.gov/energysaver 404s, use epa.gov/sunsafety or arpa-e.energy.gov). Verify external links **in browser, not curl** (your WFP convention).
- [ ] 🟡 Clear **contact info, physical service area, phone, email** on every page (footer) — matches GBP exactly.
- [ ] 🟢 Trust signals: warranty page (careful per your warranty rules — "varies by manufacturer," no specific coverage claims), privacy policy, terms.

### 2.5 Images & Media SEO
- [ ] ✅ All homepage images have `alt` text (verified 0 missing). **Good — keep enforcing.**
- [ ] 🟡 Descriptive, keyword-relevant **file names** (you already do: `window-film-philadelphia-*`).
- [ ] 🟡 Modern formats (WebP/AVIF), compressed, responsive `srcset`.
- [ ] 🟢 Add `ImageObject` schema for key infographics/diagrams (helps AI multi-modal extraction).

---

## 3. LOCAL SEO

- [ ] 🟠 **Google Business Profile**: claimed, verified, category = "Window tinting service," service-area business (you serve Delaware Valley — set service areas, hide address if no storefront). Keep it updated (posts within 30 days).
- [ ] 🔴 **NAP consistency**: Name / Address / Phone identical across site footer, schema, GBP, and all citations. Phone `(267) 394-7980`, email `info@windowfilmphl.com` — audit that schema, footer, chat widget, and GBP all match exactly.
- [ ] 🟠 **LocalBusiness schema** matches GBP (name, phone, geo, areaServed, hours). Currently hours in schema say Mon–Fri 08–17 but chat widget says Mon–Sat 8am–6pm — **reconcile the discrepancy** (pick the truth, sync schema + widget + GBP).
- [ ] 🟠 **Citations**: consistent listings on Yelp, BBB, Angi, Houzz, Thumbtack, Nextdoor, Apple Business Connect, Bing Places, industry directories. (You have backlink skills for Houzz/Thumbtack/BBB — leverage them.)
- [ ] 🟡 **Reviews**: steady flow on GBP; respond to all; embed on site with schema.
- [ ] 🟡 **City/location pages** with genuinely unique local content (neighborhoods, local climate/UV, permit/HOA notes) — not name-swapped duplicates. Watch the "philadelphia" slug cross-bleed issue (your memory note).
- [ ] 🟡 **Geo signals**: embed a map, mention real neighborhoods/landmarks, local phone, service-radius language.
- [ ] 🟢 Add `geo`/`areaServed` polygons and `hasMap` to LocalBusiness schema.
- [ ] 🟢 Apple Maps / Apple Business Connect listing (increasingly fed to Siri/Apple Intelligence).

---

## 4. AEO / GEO — AI SEARCH OPTIMIZATION (ChatGPT, Perplexity, Gemini, Copilot, AI Overviews)

> AI answer engines use RAG: they fetch/parse pages and **synthesize + cite**. You win by being (a) crawlable by AI bots, (b) structured & extractable, (c) authoritative & fresh, (d) explicitly summarized for machines.

### 4.1 AI Crawler Access
- [ ] ✅ `robots.txt` explicitly allows GPTBot, ChatGPT-User, OAI-SearchBot, anthropic-ai, ClaudeBot, Google-Extended, CCBot, PerplexityBot, Bytespider, Cohere-ai. **Verify PerplexityBot + ClaudeBot are named** (add if missing).
- [ ] 🟡 Don't block AI bots at the CDN/WAF level (check Vercel firewall rules).
- [ ] ✅ Content is SSR/static HTML (AI bots often don't run JS) — **critical and already correct.**

### 4.2 llms.txt / llms-full.txt
- [ ] ✅ `/llms.txt` present and well-formed (title, summary, curated links, contact). **Good foundation.**
- [ ] 🟠 **Fix host in llms.txt** — uses `https://windowfilmphiladelphia.net` (non-www) which is correct for the live host; ensure it matches final canonical decision (it currently does NOT match the www canonicals — another reason to standardize on non-www).
- [ ] 🟠 Expand llms.txt to include **cities, applications, and key resource/FAQ pages**, each with a one-line description of what the page answers.
- [ ] 🟡 Add **`/llms-full.txt`** — full expanded markdown of core pages so AI can ingest complete context in one fetch.
- [ ] 🟡 Keep llms.txt **in sync** with sitemap on every publish (add to build/deploy step).
- [ ] 🟢 Include key facts inline (service area, since 2008, warranty stance, phone) so a single fetch answers common queries.

### 4.3 Structured Data / Schema (JSON-LD) — biggest GEO lever
- [ ] ✅ LocalBusiness, FAQPage, Service, HowTo templated in `BaseLayout`. **Strong base.**
- [ ] 🟠 Add **`Organization`** schema (sitewide) with `logo`, `sameAs`, `contactPoint` (phone, `contactType: customer service`, `areaServed`, `availableLanguage`).
- [ ] 🟠 Add **`WebSite`** schema with `potentialAction` → `SearchAction` (enables sitelinks searchbox + helps AI understand site scope).
- [ ] 🟠 Add **`BreadcrumbList`** schema on all deep pages (A5) — strong extraction/navigation signal.
- [ ] 🟡 Ensure **`@id` graph linking**: every schema references the LocalBusiness `@id` so AI builds one entity graph (partially done — extend to Organization/WebSite).
- [ ] 🟡 Homepage should carry Organization + WebSite + LocalBusiness (currently only LocalBusiness — A5).
- [ ] 🟡 **`Product`** schema on product pages (3M, LLumar, etc.) with `brand`, `category`, offers/`priceRange` if applicable.
- [ ] 🟡 **`AggregateRating` / `Review`** schema (real reviews only) — drives rich results + AI trust.
- [ ] 🟡 **`FAQPage`** on every page that has Q&A (already supported — use it widely; AI loves clean Q&A).
- [ ] 🟢 **`Article`/`BlogPosting`** schema on blog posts with `author`, `datePublished`, **`dateModified`** (freshness = ~1.8× citation lift), `image`.
- [ ] 🟢 Add **`speakable`** schema on key summary sections (voice assistants).
- [ ] 🔎 Validate everything in **Google Rich Results Test** + **schema.org validator** — no errors/warnings.
- [ ] 🟢 Consider light **microdata/RDFa** only if a partner requires it; JSON-LD is Google's + AI's preferred format — don't double-mark.

### 4.4 Answer-Engine Content Formatting (GEO)
- [ ] 🟠 **Lead with the answer**: each page/section opens with a direct 40–60 word answer to the query, then elaborates ("inverted pyramid"). AI extracts the top summary.
- [ ] 🟠 **Question-based H2/H3s** matching real queries ("How much does window film cost in Philadelphia?", "Does window film reduce heat?").
- [ ] 🟠 **Structured, extractable formats**: short paragraphs, bulleted lists, **comparison tables** (film types, benefits, price ranges), numbered steps. AI cites tables/lists far more than walls of text.
- [ ] 🟡 **Definitions & entities**: clearly define "window film," "solar control film," "safety & security film," "VLT," "heat rejection %," etc. — helps AI map your content to concepts.
- [ ] 🟡 **Statistics with sources**: "blocks up to 99% of UV rays (per [IWFA/EPA])." Cited stats get pulled into answers. Keep numbers consistent site-wide (your no-repetitive-stats rule still applies to avoid spammy duplication).
- [ ] 🟡 **Quotable, self-contained sentences** that make sense out of context (AI lifts single sentences).
- [ ] 🟡 **Freshness**: show/update `dateModified`, refresh key pages, keep the blog active. Add "Last updated" visibly + in schema.
- [ ] 🟢 **Multi-modal**: alt text + captions on infographics/diagrams; ImageObject schema; short explainer content for AI image/video understanding.
- [ ] 🟢 **Entity consistency**: use the exact business name, brand names, and city names consistently so AI resolves you as one entity.

### 4.5 Off-site / Authority for AI Citations
- [ ] 🟡 Get mentioned on **third-party authoritative sources** (industry sites, local news, manufacturer dealer locators, directories) — AI weighs corroboration across the web, not just your site.
- [ ] 🟡 **Wikipedia/Wikidata** entity presence for the brand if notable; ensure `sameAs` links (GBP, socials, directories) form a consistent identity graph.
- [ ] 🟡 Presence on **Reddit/Quora/forums** answering window-film questions (AI heavily samples these).
- [ ] 🟢 Encourage **branded search + reviews** — engagement/brand signals correlate with AI citation.

### 4.6 Monitoring AI Visibility
- [ ] 🟡 Periodically **prompt-test**: ask ChatGPT/Perplexity/Gemini "best window film installer in Philadelphia," "how much does window tint cost in Philly" — see if you're cited; note gaps.
- [ ] 🟡 Check **server logs** for AI bot hits (GPTBot, PerplexityBot, ClaudeBot) to confirm crawling.
- [ ] 🟢 Track AI-referral traffic in GA (referrers: chatgpt.com, perplexity.ai, etc.).

---

## 5. MEASUREMENT & TOOLING
- [ ] ✅ Google Analytics (G-J8QZN9L2VV) installed. **Good** — just fix render-blocking load (1.6/A6).
- [ ] 🔴 **Google Search Console** — verify (with the FINAL canonical host), submit sitemap, monitor Coverage/CWV/Enhancements/rich results.
- [ ] 🟡 **Bing Webmaster Tools** + IndexNow (feeds Copilot/ChatGPT search partly via Bing index).
- [ ] 🟡 Crawl monthly with **Screaming Frog / Sitebulb** for broken links, dup meta, redirect chains, orphans, missing schema.
- [ ] 🟡 Validate schema in **Rich Results Test** after every template change.
- [ ] 🟢 Set up **CWV field monitoring** as traffic grows (CrUX has no data yet).

---

## PRIORITY EXECUTION ORDER (recommended)

**Phase 1 — Fix the foundation (this week):**
1. 🔴 Decide canonical host = **non-www**. Update `astro.config.mjs` `site`, all canonicals, all schema `url`/`@id`, `robots.txt` sitemap line, llms.txt. (A1, A2, A9)
2. 🔴 Change www→non-www redirect to **301 permanent** in Vercel/`vercel.json`. (A4)
3. 🔴 Rebuild → confirm sitemap now lists non-www URLs, no redirect on any entry. (A2)
4. 🔴 Verify/re-add **Google Search Console** on the final host, resubmit sitemap.
5. 🔴 Reconcile NAP + business hours across schema/widget/GBP.

**Phase 2 — Structure & AEO (next):**
6. 🟠 Add Organization + WebSite(SearchAction) + BreadcrumbList schema. (A5)
7. 🟠 Add `<lastmod>` + `dateModified` everywhere; add "Last updated." (A3)
8. 🟠 Expand llms.txt (+ optional llms-full.txt); sync to build.
9. 🟠 Add answer-first intros, question H2s, comparison tables to service/city pages.
10. 🟠 Branded 404 page; legacy-URL 301 map.

**Phase 3 — Speed & polish:**
11. 🟡 Fix render-blocking GA + fonts; preload LCP image; Astro `<Image>`.
12. 🟡 Security headers, manifest, apple-touch-icon, theme-color, IndexNow.
13. 🟡 Full crawl for broken links; validate all schema.

**Phase 4 — Off-site & monitoring (ongoing):**
14. Local citations + GBP freshness; AI prompt-testing; log monitoring; reviews.
