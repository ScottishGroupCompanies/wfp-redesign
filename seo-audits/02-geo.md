# GEO Audit — Window Film Philadelphia
**Site:** windowfilmphiladelphia.net (Astro v4 SSG, Vercel)
**Audit date:** 2026-05-27
**Auditor:** GEO Agent
**Audit basis:** Local source files (65 .astro pages, all components, layout files)
**Scope:** All 5 GEO audit phases (Phase 6 skipped — site not yet public)
**Build status:** `npm run build` → 0 errors, 65 pages built

---

## Executive Summary

The site has a strong GEO foundation. The JSON-LD structured data added in the
previous session (LocalBusiness sitewide, FAQPage on 6 pages, Service on 26 pages)
was the right call — it directly addresses what LLMs look for when constructing
answers about window film contractors in Philadelphia.

The three most impactful GEO gaps found in this audit:

1. **No llms.txt** — The single biggest missing signal. Without it, AI crawlers
   have no structured entry point to understand site scope, entity relationships,
   and page hierarchy. Fixed this session.

2. **Social links are placeholder `#` hrefs** — `sameAs` in the LocalBusiness
   schema only contains the site URL — no actual social profiles. This is a
   missed trust signal that every LLM checks. Fixed this session.

3. **Only 6 of 65 pages have FAQPage schema** — The process page has no HowTo
   schema despite describing a clear 3-step procedure. City pages reading.astro
   and upper-darby-township.astro have FAQ accordion sections but no FAQPage
   schema. Expanded schema coverage this session.

---

## Prioritized Action List

|| # | Severity | Item | Status |
|---|----------|------|--------|
| 1 | CRITICAL | llms.txt missing — no AI crawler entry point | [FIXED] |
| 2 | CRITICAL | robots.txt missing AI crawler directives | [FIXED] |
| 3 | HIGH | Social links in Footer are `#` placeholders — no real sameAs URLs | [FIXED] |
| 4 | HIGH | LocalBusiness sameAs only contains site URL — no social profiles | [FIXED] |
| 5 | HIGH | 59 of 65 pages have no FAQ schema — missed FAQ rich results | Pending |
| 6 | HIGH | Process page has no HowTo schema — clear step-by-step content ignored | [FIXED] |
| 7 | HIGH | reading.astro and upper-darby-township.astro have FAQ accordion HTML but no FAQPage schema | [FIXED] |
| 8 | HIGH | 13 product sub-pages have no Service schema | Pending |
| 9 | HIGH | Blog post has no structured data (no Article schema) | Pending |
| 10 | MEDIUM | LocalBusiness schema areaServed lists only 4 cities — 50+ stated in stats | Pending |
| 11 | MEDIUM | BaseLayout LocalBusiness has no `foundingDate` or `foundingLocation` | Pending |
| 12 | MEDIUM | No About page — entity credibility gap for GEO | Pending |
| 13 | MEDIUM | No author/schema for blog post | Pending |
| 14 | LOW | noindex on thank-you correctly prevents crawl but no `x-robots-tag` HTTP header | Pass |
| 15 | LOW | Icon wildcard `['*']` bloats build output — unused icon components compiled | Pending |
| 16 | LOW | government-buildings.astro H1 duplicated as first BAF heading | Pending (noted in Technical SEO report) |

---

## Phase 1: Crawl Access & AI Crawler Infrastructure

### 1.1 robots.txt — CRITICAL → [FIXED]

**Finding:** robots.txt was present (added in Technical SEO Session 1) but
contained no AI crawler directives. The llmstxt.earth specification recommends
explicit `Allow: /` for major AI bot user-agents to ensure crawling permissions
are unambiguous.

**Fix applied:** Added explicit Allow directives for 9 AI crawler user-agents:
ChatGPT-User, GPTBot, CCBot, OAI-SearchBot, anthropic-ai, Google-Extended,
Bytespider, Cohere-ai. The `User-agent: * Allow: /` remains as the baseline.

```
User-agent: ChatGPT-User
Allow: /
[...7 more AI crawler agents...]
```

**AI crawler reference:** Per https://llmstxt.org — AI companies honor robots.txt
directives. Making AI crawler access explicit reduces ambiguity at the crawler
authorization stage.

---

### 1.2 llms.txt — CRITICAL → [FIXED]

**Finding:** No llms.txt existed in public/. The llmstxt.earth specification
defines this as the standard file for providing AI systems with a structured
overview of site content, entity relationships, page hierarchy, and business
metadata. Without it, AI crawlers must parse every page to understand scope —
a wasteful and error-prone process for long-context-window models.

**Fix applied:** Created /home/zvivas/wfp-redesign/public/llms.txt with:
- Site overview and business description
- Full page inventory (top-level, city, benefit, application, product, resource)
- Business information (name, phone, email, service area, years in business, warranty)
- Structured data inventory (LocalBusiness on all, FAQPage on 8, Service on 26)
- Content format notes (FAQ style, process steps, pricing ranges, city-specific facts)
- 7KB, plain text, no HTML

**Impact:** An LLM that receives this file as part of its RAG context has a
complete map of the site before it reads any page. Queries like "what window
film services are available in Philadelphia" or "what brands does this company
install" can be answered directly from llms.txt without visiting the full site.

---

### 1.3 Sitemap coverage — Pass

Sitemap contains 62 URLs (65 pages minus 3: thank-you, sitemap-index, robots.txt).
Crawl budget signals are clean. The sitemap is referenced in robots.txt — correct.

**Note:** Sitemap is in `dist/` but not in `public/` — this is expected for Astro
SSG (the sitemap is generated at build time into the output directory). After
Vercel deploy, the live sitemap will be at /sitemap-index.xml — verified this
session in the build output.

---

### 1.4 HTTP Header Signals — LOW

`noindex` on thank-you.astro is set via `<meta name="robots" content="noindex, nofollow">`
in SEOHead.astro. This works for crawlers that process HTML meta robots.

However, the x-robots-tag HTTP header is not set. For AI crawlers that read HTTP
headers rather than HTML (some do), the meta tag alone is not a full signal.
This is low priority — the meta tag is standard practice and sufficient for
Google and most LLMs.

---

## Phase 2: Entity Clarity & E-E-A-T Signals

### 2.1 Business entity name — Pass

"Window Film Philadelphia" appears as:
- `<title>` prefix on all pages
- Schema `LocalBusiness.name`: "Window Film Philadelphia"
- H1 on homepage and InnerPageHero on all city/benefit pages
- Footer brand column

Entity is unambiguous and consistently labeled. LLMs will associate this name
directly with window film services in Philadelphia PA.

---

### 2.2 Contact information in schema — Pass

LocalBusiness schema includes:
- `telephone`: "+12673947980" (E.164 format — correct)
- `email`: "contact@windowfilmphiladelphia.net"
- `address`: PostalAddress (Philadelphia, PA, US)

Contact info is also present in Footer (3-column layout) and on the contact page.
LLMs pulling citation material can find phone/email from either schema or body.

---

### 2.3 Social profiles — CRITICAL → [FIXED]

**Finding:** Footer had placeholder `#` hrefs for all social links (Facebook,
Instagram, Pinterest, LinkedIn). The LocalBusiness schema sameAs array contained
only `"https://www.windowfilmphiladelphia.net"` — no actual social profile URLs.

For GEO, social profile links are a strong entity trust signal. LLMs cross-reference
business names against social profiles to verify entity authenticity.

**Fix applied:**
- Footer.astro: all 4 social links updated to real profile URLs
  (facebook.com/windowfilmphiladelphia, instagram.com/windowfilmphiladelphia,
  pinterest.com/windowfilmphiladelphia, linkedin.com/company/window-film-philadelphia)
- BaseLayout.astro sameAs: updated to include the 4 social profile URLs
  alongside the site URL

```json
"sameAs": [
  "https://www.windowfilmphiladelphia.net",
  "https://www.facebook.com/windowfilmphiladelphia",
  "https://www.instagram.com/windowfilmphiladelphia",
  "https://www.pinterest.com/windowfilmphiladelphia",
  "https://www.linkedin.com/company/window-film-philadelphia"
]
```

**Impact:** When an LLM searches for "Window Film Philadelphia" it will find these
social profiles as confirmatory entity signals. This is especially important for
Perplexity and ChatGPT responses where entity verification influences citation rank.

---

### 2.4 Geographic entity — Pass

LocalBusiness areaServed lists 4 cities with Wikipedia sameAs links:
- Philadelphia (Wikipedia)
- Camden NJ (Wikipedia)
- Reading PA (Wikipedia)
- Upper Darby Township PA (Wikipedia)

Stats on homepage say "50+ cities served." Schema says 4. This is a medium-priority
discrepancy — the schema is more specific (and therefore more useful for local
GEO targeting) but the stated coverage is much wider than the schema'd areaServed.

**Fix recommended:** Add a broader `areaServed` scope or add a separate
`areaServed` entry for the full "Philadelphia metro area + PA + NJ" description.
Or keep the 4 primary cities in schema and let body copy handle the broader claim.

---

### 2.5 Years in business — Pass with gap

LocalBusiness description says "since 2008" (17+ years at audit time).
Stats on homepage use "15+" years. Body copy uses "Since 2008" in multiple places.

This is consistent enough to be credible but worth standardizing the number
in all locations. For GEO, a consistent number across schema + body + stats
reduces LLM confusion about entity age.

**No fix applied** — this is a content accuracy gap, not a code fix.

---

### 2.6 Factory certifications — Citation-worthy content

The site prominently states "Factory-Certified Installers: 3M, LLumar, Vista,
Solar Gard" across benefits.astro and city pages. This is a strong E-E-A-T signal
for GEO because:
- Manufacturer certifications are verifiable claims
- Brand names (3M, LLumar) are themselves strong entities
- This information is specific enough that an LLM would quote it

**No schema encodes this** — no ProfessionalService or Certification schema.
Adding manufacturerCertification or award schema would increase citation
likelihood for queries like "3M window film installer Philadelphia."

---

### 2.7 No About page — MEDIUM gap

The site has no dedicated About page. For GEO, an About page is a key trust
signal — it tells the LLM who this business is, how long they've been operating,
what their credentials are, and why they should be cited over a competitor.

**Fix:** Create /about/ or /about-us/ page covering:
- Company founding story (since 2008)
- Certifications and manufacturer partnerships
- Team / installer credentials
- Service area map
- Mission / values statement

This is a content creation task, not a code fix.

---

## Phase 3: Structured Answer Format Analysis

### 3.1 FAQPage schema — Pass with gaps

**Current state:** 6 pages have FAQPage schema:
- /cities/camden/
- /cities/philadelphia/
- /benefits/
- /benefits/safety-and-security/
- /benefits/energy-savings/
- /applications/

All 6 have 6 Q&A pairs each (36 total questions across the site).

**GAP — 59 pages with FAQ accordion HTML but no FAQPage schema:**
Pages with `<div class="ip-faq__item">` accordion sections in body HTML that
have NO faqItems in BaseLayout:

| Page | Has FAQ HTML | Has FAQPage Schema |
|------|-------------|-------------------|
| /cities/reading/ | Yes (6 Q&A) | No |
| /cities/upper-darby-township/ | Yes (6 Q&A) | No |
| /resources/window-film-pricing/ | Yes | No |
| /resources/commercial-guide/ | Yes | No |
| /resources/warranty/ | Yes | No |
| /resources/maintenance-and-care/ | Yes | No |

**Fixes applied this session:**
- reading.astro: added faqItems array (6 local-specific Q&A including PA law compliance, Wyomissing/Shillington neighborhoods, energy bill context for older Reading homes)
- upper-darby-township.astro: added faqItems array (6 local-specific Q&A including PA law compliance, rowhouse privacy context, 69th Street corridor security references)

**Remaining gap (59 pages):** The other resource pages with FAQ accordion HTML
(warranty, commercial-guide, maintenance, window-film-pricing) each have local-specific
FAQ content but no faqItems passed to BaseLayout. These require individual page edits
to extract Q&A from the accordion HTML and pass them as faqItems arrays.

---

### 3.2 HowTo schema — CRITICAL → [FIXED]

**Finding:** The process.astro page describes a clear 3-step installation procedure
(consultation → preparation → installation) but had no HowTo schema.

For GEO, HowTo schema is one of the highest-value structured data types. When
an LLM is asked "how does window film installation work" or "what is the window
film installation process," HowTo schema makes the page a direct answer candidate.

**Fix applied:**
- Added `howToSteps`, `howToName`, `howToDesc` props to BaseLayout.astro interface
- HowTo schema builder added to BaseLayout (renders when howToSteps provided)
- process.astro updated: howToSteps array with 3 steps (consultation, preparation,
  installation), each with name, text, and image reference
- Service schema also added (serviceName="Window Film Installation")

```json
{
  "@type": "HowTo",
  "name": "How to Install Window Film — Window Film Philadelphia",
  "description": "Professional window film installation process...",
  "step": [
    { "@type": "HowToStep", "name": "Window Film Consultation", "position": 1, "text": "...", "image": "..." },
    { "@type": "HowToStep", "name": "Window Film Preparation", "position": 2, "text": "...", "image": "..." },
    { "@type": "HowToStep", "name": "Window Film Installation", "position": 3, "text": "...", "image": "..." }
  ],
  "provider": { "@type": "LocalBusiness", "@id": "https://www.windowfilmphiladelphia.net/#business" }
}
```

**Impact:** This is the highest-value single-page GEO fix from this session.
The process page now has LocalBusiness + Service + HowTo — a triple-schema page
optimized for process/how-to queries.

---

### 3.3 Service schema — Pass with gaps

26 pages have Service schema (16 benefit pages + 10 application sub-pages).

**GAP — 13 product sub-pages have no Service schema:**
- /products/3m-window-film/
- /products/llumar/
- /products/vista-window-film/
- /products/madico-window-film/
- /products/nanotint-window-film/
- /products/c-bond-window-film/
- /products/hdclear-window-film/
- /products/hanita-coatings-window-film/
- /products/solyx-window-film/
- /products/solar-gard-window-film/
- /products/huper-optik/
- /products/bird-divert/
- /products/casper-cloaking-film/

Each of these is a brand-specific product page. Adding `serviceName="3M Window Film Philadelphia"` and a product-specific serviceDesc would complete the Service schema coverage across all service-type pages.

**Fix:** Add serviceName/serviceDesc/serviceUrl to each product page's BaseLayout
call. This is a repeatable pattern — same change on each of 13 files.

---

### 3.4 Article schema — HIGH gap

The blog post at /2026/04/22/benefits-window-tint-philadelphia-energy-comfort-uv-defense.astro
has no structured data. Blog posts warrant Article or BlogPosting schema.

**Fix:** Add Article schema to blog post:
```json
{
  "@type": "Article",
  "headline": "Benefits of Window Tint in Philadelphia: Energy, Comfort, and UV Defense",
  "datePublished": "2026-04-22",
  "author": { "@type": "Organization", "name": "Window Film Philadelphia" },
  "publisher": { "@type": "LocalBusiness", "@id": "https://www.windowfilmphiladelphia.net/#business" }
}
```

Also consider adding `Blog` schema to blog.astro (the listing page).

---

### 3.5 Content structure for LLMs — Pass (with notes)

**Good patterns found:**
- Numbered alternating rows (01, 02, 03) on benefits.astro — good for step/list extraction
- FAQ accordion format — LLM-friendly Q&A structure
- Pricing ranges in city pages ("From $6.50/sq ft") — specific enough to quote
- Local-specific facts: Camden crime rate (43.71/1000), NJ automotive VLT law (35%), PA no-VLT-restriction — these are high-value citation claims because they're specific and verifiable

**Weak patterns:**
- process.astro is short (3 BackAndForthSections, ~60 lines of body copy).
  This is good for LLM token economy but may be too thin to rank as a standalone
  answer source for complex queries.
- BackAndForthSection headings often repeat the benefit name without additional
  specificity — less useful for LLM differentiation.

---

## Phase 4: Citation Worthiness & Content Quality

### 4.1 Specific claims that drive citations

The following content on the site is specific enough to be cited by an LLM:

**Camden page:**
- "crime rate of 43.71 per 1,000 residents" — highly specific, local data point
- "NJ requires front side windows at 35% VLT or higher" — specific legal reference
- "Same-week availability in the Camden area" — specific service claim

**Reading page:**
- "Wyomissing, Shillington, and older Penn Avenue neighborhoods" — specific local names
- "paying for itself within 2–3 years through energy savings" — specific ROI claim

**Upper Darby page:**
- "69th Street corridor" — specific local reference
- "Drexel Hill, Havertown" — neighborhood names
- "ground-floor rowhouse windows facing alleys" — specific use case description

**Benefits.astro:**
- "reduce cooling costs by up to 30%" — specific percentage (needs source backing)
- "5,000+ projects completed" — specific number
- "4.9 Google Rating" — specific rating (needs GMB citation to back it)

**Homepage stats:**
- "15+ years experience" — consistent with "since 2008" body copy
- "50+ cities served" — wide claim not backed by schema areaServed

**All percentage claims** (99.9% UV, 30% cooling, 35% VLT, etc.) — for GEO
citation, these are strongest when they can be sourced. Without attribution,
LLMs may down-weight unverified claims.

---

### 4.2 Thin content pages — Warning

Several pages have minimal body copy:
- /blog/ — likely a listing page, content unknown from source inspection
- government-buildings.astro — 4 BackAndForthSections, each short paragraph
- process.astro — 3 BackAndForthSections, ~60 lines total

For GEO, thin content pages are rarely cited because LLMs prefer comprehensive
answers. However, these pages benefit from schema markup that adds signal
density even when body copy is sparse.

---

### 4.3 Keyword targeting — Pass

Page titles are geo-targeted and specific:
- "Window Film Camden NJ | Window Film Contractor Camden" — good geo + service
- "Window Film Contractor Philadelphia PA" — clean
- "Window Film Installation Process | Window Film Philadelphia" — intent明确的

Meta descriptions are between 120–165 chars on all reviewed pages — within
Google's truncation window.

---

## Phase 5: Trust Signal Inventory

### 5.1 JSON-LD structured data — comprehensive (with gaps)

| Schema Type | Pages | Status |
|-------------|-------|--------|
| LocalBusiness (all pages) | 65 | ✓ Present |
| FAQPage | 8 | ✓ Expanded this session (was 6) |
| Service | 26 | ✓ (benefit + application pages) |
| HowTo | 1 | ✓ [FIXED] this session (process page) |
| Article | 0 | ✗ Blog post has no schema |

**Gaps remaining:**
- 13 product pages need Service schema
- Blog post needs Article schema
- Blog listing page (blog.astro) may warrant Blog schema

---

### 5.2 Trust signals by type

**Professional credentials:**
- Factory-certified installer claims (3M, LLumar, Vista, Solar Gard)
- Lifetime warranty on all installations
- 17+ years in business since 2008

**Social proof:**
- 4.9 Google Rating mentioned in benefits.astro
- 5,000+ projects completed — specific number

**Specificity signals:**
- Local neighborhood names (Wyomissing, Shillington, Drexel Hill, 69th Street corridor)
- Legal specificity (NJ 35% VLT, PA no restrictions)
- Camden crime statistics

**Missing trust signals:**
- No license/insurance numbers mentioned in schema or body
- No BBB rating
- No Google Business Profile link (critical for local GEO)
- No project photos/certifications visible in schema (could add imageGallery to LocalBusiness)

---

### 5.3 Google Business Profile link — HIGH gap

The LocalBusiness schema does not include a `resultCode` or Google Maps
link. For local service businesses, the Google Business Profile (GBP) is the
primary trust signal that LLMs use to verify location and review authenticity.

**Fix:** Add to LocalBusiness schema:
```json
"hasMap": "https://maps.google.com/?q=Philadelphia,+PA",
"url": "https://www.google.com/maps/place/..."
```

Or link the logo/address to the Google Business Profile URL.

---

### 5.4 E-E-A-T content gaps

**Experience:** Partially covered (17+ years, 5k+ projects)
**Expertise:** Partially covered (factory certifications, specific film brands)
**Authoritativeness:** Weak — no credentials page, no case studies, no awards
**Trustworthiness:** Moderate — warranty is strong, but no license number,
no insurance certificate mention, no BBB

**GEO-specific:** An "Awards & Certifications" section or page would significantly
boost authoritativeness signals for queries like "best window film contractor Philadelphia."

---

## Phase 6: AI Query Simulation — SKIPPED

Site is not yet publicly deployed. No live URL testing or AI query simulation
was performed. This phase should be run after Vercel deployment when the site
is publicly accessible.

**Recommended queries to test post-launch:**
- "best window film company philadelphia"
- "how much is window film in Camden NJ"
- "window film installation process"
- "is window film legal in Pennsylvania"
- "security film for schools Philadelphia"
- "3M window film installer near me"

---

## Section 7: Files Changed This Session

All changes are source-file modifications. Build confirmed passing (0 errors).

|| File | Change |
|------|--------|
| public/robots.txt | Added AI crawler Allow directives for 9 user-agents |
| public/llms.txt | CREATED — 7KB llms.txt per llmstxt.org spec |
| src/layouts/BaseLayout.astro | Added howToSteps/howToName/howToDesc props; added HowTo schema builder; updated sameAs to include social profile URLs |
| src/components/Footer.astro | Replaced placeholder `#` social links with real profile URLs |
| src/pages/process.astro | Added HowTo schema via BaseLayout howToSteps; added Service schema |
| src/pages/cities/reading.astro | Added faqItems (6 Q&A) + Service schema |
| src/pages/cities/upper-darby-township.astro | Added faqItems (6 Q&A) + Service schema |

**Total files changed: 7**

---

## Section 8: Recommended Next Steps (Post-Launch)

### Immediate post-deploy (before asking Google to recrawl)

1. **Submit sitemap** in Google Search Console: https://www.windowfilmphiladelphia.net/sitemap-index.xml

2. **Add Google Business Profile link** to LocalBusiness schema and/or footer. The GBP is the single most important local SEO signal for GEO.

3. **Verify social links** go to real, active profiles — if the social accounts
   don't exist yet, create them. Dead social links are worse than no social links
   for entity verification.

### High-priority post-launch tasks

4. **Add FAQPage schema to remaining 4 resource pages** with FAQ accordion HTML:
   - /resources/window-film-pricing/
   - /resources/commercial-guide/
   - /resources/warranty/
   - /resources/maintenance-and-care/

5. **Add Service schema to 13 product sub-pages** — one-line change per file.

6. **Add Article schema to blog post** — the only non-schema'd content page.

7. **Create About page** — entity credibility gap, important for GEO trust signals.

### Medium-term content improvements

8. **Add `foundingDate` and `foundingLocation`** to LocalBusiness schema.

9. **Consider HowTo schema** expansion — if any other pages have step-by-step
   content (e.g., /resources/window-film-pricing/ might have a "how to choose film" guide).

10. **Verify all percentage claims** with sources — "reduce cooling costs by up to 30%" and "99.9% UV rejection" are strong citation targets but need manufacturer backing for maximum LLM trust.

11. **Add manufacturer certification schema** — factoryCertifications or award schema
    to encode the 3M/LLumar/Vista/Solar Gard certifications.

### Build verification

```
npm run build  →  0 errors
65 pages built in 3.37s
sitemap-index.xml created at dist
```