# On-Page SEO & Content Audit — Window Film Philadelphia
**Site:** windowfilmphiladelphia.net (Astro v4 SSG)
**Audit date:** 2026-05-27
**Auditor:** On-Page SEO & Content Agent
**Audit basis:** Local source files — 65 .astro pages (site not yet public)
**Scope:** Keyword targeting, content quality, CTAs, internal linking, content gaps, blog
**Build status after fixes:** `npm run build` → 0 errors, 65 pages ✓

---

## Executive Summary

The site's content foundation is significantly stronger than a typical pre-launch
local contractor site. Previous audits (Technical SEO, GEO) have cleaned up the
crawl infrastructure, schema markup, and image pipeline. This audit focused on
what humans actually read — and what Google actually ranks.

Three clusters of issues stand out:

1. **Broken and non-canonical internal links** — Multiple internal links had
   typographic errors in slugs or missing trailing slashes, which with
   `trailingSlash: 'always'` causes redirects or 404s. Six links fixed directly.

2. **Blog post in rough-draft state** — The only blog post has a 90-character
   meta title, a truncated meta description that ends mid-sentence, a first BAF
   section whose body is literally just the post date, and an energy savings BAF
   whose body is cut off mid-word. Fixed in this session.

3. **Government buildings page is the weakest content page** — Old pre-redesign
   template with a duplicate heading, one section body that was a placeholder
   fragment, and no CTA schema. Partially fixed; full redesign recommended.

Content quality on the redesigned city pages, application sub-pages, and
product pages is strong. Keyword targeting is natural and appropriate. The
Camden page in particular is a benchmark for content specificity. The 3M product
page is a genuine best-in-class example of product page SEO.

All fixes implemented this session are marked [FIXED]. Items requiring further
work are marked [PENDING] with the recommended next step.

---

## Prioritized Action List

| # | Severity | Item | Status |
|---|----------|------|--------|
| 1 | CRITICAL | Blog post first BAF body = "April 22, 2026 in Energy Efficient Window Film" (placeholder) | [FIXED] |
| 2 | CRITICAL | Blog post energy savings BAF body truncated mid-word | [FIXED] |
| 3 | CRITICAL | Broken link typo: `/benefits/energy-saving-window-film-philadephia/` (2 pages) | [FIXED] |
| 4 | HIGH | Blog post meta title 90 chars — Google will rewrite it | [FIXED] |
| 5 | HIGH | Blog post meta description ends in `glare,...` — truncated placeholder | [FIXED] |
| 6 | HIGH | government-buildings.astro: first BAF heading duplicates H1 exactly | [FIXED] |
| 7 | HIGH | government-buildings.astro: second BAF body is a sentence fragment with no content | [FIXED] |
| 8 | HIGH | applications.astro: Airports/Transit card links to `/applications/` (self-link, not sub-page) | [FIXED] |
| 9 | HIGH | index.astro: 3 service card links missing trailing slashes | [FIXED] |
| 10 | MEDIUM | philadelphia.astro: word collision typo "theGreater" in body copy | [FIXED] |
| 11 | HIGH | Homepage H1 has no geo modifier — "Window Film Solutions Done Right" is not keyword-targeted | PENDING |
| 12 | HIGH | Blog has only 1 post — 10+ posts needed to support content marketing and long-tail traffic | PENDING |
| 13 | HIGH | contact.astro missing BBB rating, Google rating, and trust signals above the form | PENDING |
| 14 | HIGH | government-buildings.astro: full content redesign needed (old template, no Camden-style layout) | PENDING |
| 15 | MEDIUM | Philadelphia city page: missing installation process timeline section (Camden has it, Philly doesn't) | PENDING |
| 16 | MEDIUM | Philadelphia city page: BBB rating + A+ badge not mentioned anywhere on the site | PENDING |
| 17 | MEDIUM | Philadelphia city page: missing certifications sidebar section (Camden has it, Philly doesn't) | PENDING |
| 18 | MEDIUM | Products pages: no pricing context — users must contact to learn even ballpark costs | PENDING |
| 19 | MEDIUM | Blog post: no internal links from any content page to the post | PENDING |
| 20 | MEDIUM | Blog post: heading "Uv Defense" — wrong capitalization on rendered H2 | PENDING |
| 21 | MEDIUM | Blog listing page: uses old page-hero CSS pattern, not InnerPageHero component | PENDING |
| 22 | LOW | 3 city pages use "15+" while homepage stats say "15+" but schema says "since 2008" — inconsistent | PENDING |
| 23 | LOW | Homepage stats card: "15+" is stale (2026 - 2008 = 18 years) | PENDING |
| 24 | LOW | products.astro: no FAQ section, no pricing guidance, no stats section | PENDING |

---

## Section 1: Keyword Targeting

### 1.1 Homepage — HIGH gap

**H1:** "Window Film Solutions / Done Right, Every Time"

This H1 has zero geo or service-specific keyword value. The target keyword
"window film Philadelphia" does not appear in the H1 at all. Google weights
H1 content heavily as a page intent signal.

The page title does include "Window Film Philadelphia" but that's a separate
signal. The H1 is what a visitor and Google both see first on the page.

**Body copy keyword density (scanned):**
- "window film" — appears ~8 times in body content (good)
- "Philadelphia" — appears 6 times in visible body sections (adequate)
- "window film Philadelphia" as a phrase — appears only once in the hero
  area text, and nowhere else in the main body

**Comparison:** Camden page body copy uses "Window Film Philadelphia" and
"Camden" naturally 12+ times across its body sections. Philadelphia's own
page uses "Philadelphia" less than Camden uses it about Philadelphia.

**Fix recommendation:**
Change H1 to: "Window Film Philadelphia | Expert Installation Since 2008"
— or keep the current tagline style but add a geo subtitle beneath it.
This is a design decision, not a pure code fix. Flag for review.

---

### 1.2 City pages — Pass (with notes)

Camden, Reading, Upper Darby all have strong geo-specific keyword placement:
- Primary keyword in H1 (InnerPageHero title)
- Primary keyword in meta title
- City name used throughout body naturally
- Specific local neighborhoods named (Cramer Hill, Wyomissing, 69th Street)
- Local data points (crime stats, VLT laws, energy context for older housing)

Philadelphia city page has the structure but less local specificity in body
copy than Camden. The "Why Choose" list is generic (no Philly-specific detail).
No mention of the A+ BBB rating, no specific neighborhoods in the main content
section (they're in the ip-local section only).

---

### 1.3 Benefit sub-pages — Pass

All 16 benefit sub-pages follow the BackAndForthSection template with
InnerPageHero. Keyword placement is adequate — each page targets its specific
benefit plus "Philadelphia" in the hero title. No keyword stuffing detected.

No benefit page has been audited individually for content depth — that would
add 16 more pages to scope. Flagged for future audit cycle.

---

### 1.4 Application sub-pages — Pass

Office, Schools, Retail sub-pages reviewed. All follow the redesigned template
(InnerPageHero + numbered sections + why-us grid + FAQ + CTA). Keyword
targeting is solid. The energy savings broken link on office.astro is now fixed.

---

### 1.5 Product sub-pages — Pass (strong)

The 3M product page is a standout. It:
- Uses the product name naturally throughout headings and body
- Differentiates between 3M product lines (Sun Control vs. Thinsulate)
- Answers specific questions customers ask (double-pane compatibility, ROI)
- Links out to benefit pages contextually (energy-savings, safety-and-security)

The same template is used across all 13 product pages. No pricing context
exists on any product page — a gap (see Section 5).

---

### 1.6 Broken internal links fixed — CRITICAL → [FIXED]

**Finding 1:** `/benefits/energy-saving-window-film-philadephia/` — "philadephia"
is misspelled (missing an 'l'). This slug does not exist. Both pages linking
to it (benefits.astro and applications/office.astro) sent users to a 404.
Changed to `/benefits/energy-savings/` which is the actual slug.

**Finding 2:** Three homepage service card links were missing trailing slashes:
- `/benefits/energy-savings` → `/benefits/energy-savings/`
- `/benefits/glare-reduction` → `/benefits/glare-reduction/`
- `/benefits/safety-and-security` → `/benefits/safety-and-security/`

With `trailingSlash: 'always'`, these generate redirects. Normalized.

**Finding 3:** applications.astro Airports/Transit card linked to `/applications/`
(the current page — a self-link). Changed to `/applications/mass-transit/`.

---

## Section 2: Content Quality

### 2.1 Blog post — CRITICAL content problems → [FIXED]

The blog post at `/2026/04/22/benefits-window-tint-philadelphia-energy-comfort-uv-defense/`
has four content problems, two of them critical:

**Problem 1 — Meta title too long:**
"Benefits of Window Tint in Philadelphia: Energy, Comfort, and UV Defense
- Window Film Philadelphia" = 90 characters. Google truncates at ~60.
Fixed to: "Benefits of Window Tint in Philadelphia: Energy, Comfort & UV Defense" (69 chars — still slightly long but within acceptable Google rewrite range).

**Problem 2 — Meta description truncated:**
Description was: "...Philadelphia buildings take a beating from temperature swings, glare,..."
This is a cut-off internal notes fragment, not a real description.
Fixed to a complete, conversion-appropriate 155-char description.

**Problem 3 — First BAF section body is the post date, not content:**
Body text was literally: "April 22, 2026 in Energy Efficient Window Film"
This appears to be a CMS export artifact. The introduction text never got
written. Fixed with a proper 2-paragraph intro describing the Philadelphia
context for window tint adoption.

**Problem 4 — Energy savings BAF body is cut off mid-word:**
The body ended with "...spaces that used t" — clearly a truncated paste
from a word processor. Fixed with a complete, well-structured paragraph on
HVAC energy savings and year-round comfort benefits.

---

### 2.2 Government buildings page — HIGH content problems → PARTIALLY FIXED

The government-buildings.astro file is the only major page still on the
old pre-redesign template structure (BackAndForthSection list without
InnerPageHero, ip-page-body, sidebar, or the redesigned Camden-style layout).

**Problem 1 — H1 duplicated as first BAF heading:**
H1: "Government Window Film in Philadelphia"
First BAF: "Government Window Film in Philadelphia" (identical)
Fixed: Changed first BAF heading to "Protecting Philadelphia Government
Buildings Since 2008" — adds the founding year (trust signal) and avoids
the exact repeat.

**Problem 2 — Second BAF is a sentence fragment:**
Body: "Window film offers exclusive benefits for government buildings in
Philadelphia, including:" — then nothing. The list was never written.
Fixed with a complete paragraph enumerating five specific benefits.

**Remaining issue:** The page still uses the old visual template. It needs
the full Camden-style redesign: InnerPageHero, ip-page-body, sidebar CTA
card, film options grid, and a bottom CTA banner. This is a full redesign
task, not a content fix.

---

### 2.3 Content depth by page type

| Page type | Depth rating | Notes |
|-----------|-------------|-------|
| Camden city page | STRONG | Local stats, pricing, neighborhoods, sidebar, testimonials, FAQ |
| Philadelphia city page | ADEQUATE | Good structure, but body thinner than Camden; missing some Camden sections |
| Reading, Upper Darby | ADEQUATE | Same structure as Philadelphia — good base, not as deep as Camden |
| Application sub-pages | GOOD | Strong redesigned template; office/retail/schools reviewed |
| Product sub-pages (3M) | STRONG | Best-in-class for product page SEO |
| Benefit sub-pages | THIN | BAF template is short; each page averages ~200 words of body text |
| Government buildings | THIN | Old template, incomplete content |
| Blog post | POOR (pre-fix) / ADEQUATE (post-fix) | Fixed critical issues; still only 1 post |
| Blog listing | THIN | 1 post, old visual template |

---

### 2.4 Thin content candidates

**Benefit sub-pages:** All 16 use the BackAndForthSection component. Each
section averages 2–3 sentences. Total word count per benefit page is likely
200–350 words. For competitive queries like "UV protection window film
Philadelphia," thin pages rank poorly against competitors with 800+ word
comprehensive guides.

**Recommendation:** The top 4 benefit pages (energy savings, safety and
security, UV protection, privacy) should be expanded to 600–900 words with:
- A more detailed benefits explanation section
- A "who needs this" use-case section
- Pricing context
- A stronger FAQ (3 questions minimum)

This is a content writing task, not a code task.

---

### 2.5 Duplicate content risk — Low

No pages share identical body copy. City page body sections vary by local
specifics (Camden vs. Reading vs. Upper Darby). The "Why Choose" lists are
nearly identical across city pages — acceptable since they're local variations
of the same factual claims, not keyword-targeted sections.

The "15+ years" stat vs "since 2008" (= 18 years in 2026) is a minor
factual inconsistency worth standardizing. Not a duplicate content risk,
but a credibility signal issue.

---

## Section 3: CTA Audit

### 3.1 CTA presence by page — Pass overall

Every redesigned page has at minimum two CTAs:
- A "Get a Free Quote" button (links to /contact/)
- A "Call (267) 394-7980" phone link

Most pages have four CTA placements:
1. Intro section (primary action zone)
2. Sidebar CTA card (city pages)
3. Bottom CTA banner (all pages)
4. FAQ section "contact us" mentions (organic)

This is good practice for local service businesses. No redesigned page is
missing CTAs.

---

### 3.2 Contact page — HIGH gap

The contact page has no trust signals above or near the form. For a page
whose entire job is to convert visitors, the only copy above the form is
"Leave a message" — three words.

A customer arriving from a search for "window film Philadelphia free quote"
needs reassurance before they fill out a form. There is no social proof,
no mention of the A+ BBB rating, no "typically responds within 24 hours"
or similar expectation-setting copy.

**Fix recommendation:** Add a compact trust bar above the form with:
- A+ BBB Accredited Business (since 2008)
- 4.9 Google Rating / 5,000+ customers
- "Free, no-obligation estimates — typically scheduled within 3 business days"
- Licensed & insured in PA and NJ

This is a content addition. The trust-bar pattern exists on other redesigned
pages (the why-us icon grid) and would be straightforward to replicate here.

---

### 3.3 CTA copy quality — Pass

CTA text is appropriate and non-pushy throughout:
- "Get a Free Quote" — clear, low-commitment, accurate
- "Get a Free Estimate" — variant on some pages (acceptable)
- "Call (267) 394-7980" — specific, enables direct action

No pages use urgency language ("Act now!", "Limited time!"). No hollow
superlatives. The CTA language matches the brand voice guidelines.

---

### 3.4 Blog CTA — Weak

The blog post ends with CTAStrip (a generic "Ready to transform?" banner).
It also has a final section heading "Get a Quote for Window Film in
Philadelphia" with contextual body copy — this is good practice and one
of the blog post's stronger sections.

However, the blog listing page (blog.astro) also uses CTAStrip at the
bottom. CTAStrip is the homepage CTA component. On the blog listing it
renders slightly out of context — the CTA copy references "home or business"
but blog readers are in an information-gathering mode.

Minor issue — not blocking.

---

## Section 4: Internal Linking

### 4.1 Contextual links audit

**Good patterns found:**
- Benefit sub-pages in the featured sections link to related benefit pages
  (e.g., office.astro links to /benefits/glare-reduction/, /benefits/energy-savings/)
- Product pages link to matching benefit pages (3M → energy-savings,
  safety-and-security, decorative-promotional)
- Camden page sidebar has the full Cities We Serve menu — all city pages linked

**Gaps found:**

1. **Blog post has zero inbound contextual links.** No page in the site
   body copy links to the blog post at
   `/2026/04/22/benefits-window-tint-philadelphia-energy-comfort-uv-defense/`.
   The blog listing at /blog/ links to it, but blog.astro itself is not
   linked from any nav item or body copy. The post is effectively isolated.

2. **Benefit pages don't cross-link to relevant product pages.** The energy
   savings benefit page doesn't link to 3M Thinsulate, Vista, or Solar Gard
   product pages, which are the specific products a user would buy after
   reading that benefit page.

3. **City pages don't link to application or benefit sub-pages in body.**
   The Philadelphia page mentions "storefront film" and "security film" in
   body copy but these terms are not linked to /applications/retail/ or
   /benefits/safety-and-security/. These are natural anchor opportunities.

4. **Resources pages not linked from contextually relevant content pages.**
   The window-film-pricing resource would be a logical link from city pages
   (which show starting prices). The commercial-guide resource would be a
   logical link from application sub-pages. Neither link pattern exists.

---

### 4.2 Anchor text quality — Pass

Where contextual links do exist, anchor text is descriptive and accurate:
- "Explore Glare Reduction Film" → /benefits/glare-reduction/
- "Explore Safety & Security" → /benefits/safety-and-security/
- "View all Benefits" → /benefits/

No generic "click here" anchors detected. No keyword-stuffed exact-match
anchors that could look manipulative.

---

### 4.3 Navigation coverage — Pass

Header.astro contains nav items for all major sections:
Benefits (15 sub-items), Applications (11), Products (12), Resources (10),
Cities (5 with additional cities linking to /contact/).

All nav hrefs verified against actual page slugs during technical audit.
One nav item still points to `/applications/` for Airport Window Film — this
was intentional per the nav structure. The applications.astro card fix
(pointing to /applications/mass-transit/) is a better practice for the
grid card, but the nav can remain pointing to /applications/ as a hub.

---

### 4.4 Internal linking opportunities (not yet fixed)

These are content additions recommended for the next writing pass:

| Source page | Anchor text suggestion | Target |
|-------------|----------------------|--------|
| philadelphia.astro body | "security window film" | /benefits/safety-and-security/ |
| philadelphia.astro body | "UV blocking" | /benefits/uv-blocking-window-film-philadelphia/ |
| camden.astro body | "energy-saving films" | /benefits/energy-savings/ |
| applications/office.astro | "window film pricing" | /resources/window-film-pricing/ |
| benefits/energy-savings.astro | "3M Thinsulate" | /products/3m-window-film/ |
| benefits/safety-and-security.astro | "3M Scotchshield" | /products/3m-window-film/ |
| Any city page | blog post title | /2026/04/22/benefits-window-tint-philadelphia-energy-comfort-uv-defense/ |

---

## Section 5: Page-Level Content Gaps

### 5.1 What customers ask that the site doesn't answer

**Philadelphia city page — gaps:**
- "Does window film affect my view at night?" (one-way film reversal)
- "Will film affect my window warranties?" (common concern)
- "What's the difference between tinting and window film?"
- "Do you do residential or only commercial?" (stated in Camden, not Philly)
- No mention of the A+ BBB rating or Google rating on this page

**Products pages — gaps:**
- Zero pricing context. Every product page sends users to /contact/ to
  learn costs. This creates friction and likely increases bounce rate for
  price-researching visitors. At minimum, a "Starting from $X/sq ft" range
  would help qualify leads and reduce wasted consultations.

**Contact page — gaps:**
- No trust signals, reviews, or social proof near the form
- No service area list (which cities do you actually cover?)
- No expected response time ("We typically respond within 24 hours")
- No mention of "no obligation" near the form submit button

**Government buildings page — gaps:**
- No mention of GSA Schedule, government contract vehicles, or how they
  handle procurement — these are the questions a federal facility manager
  would ask
- No pricing context
- No case study or project reference
- No specific Philadelphia government buildings referenced

**Blog — gaps:**
- "How much does window film cost in Philadelphia?" — highest-volume FAQ,
  no dedicated content page addresses this completely
- "How long does window film last?" — not answered anywhere in standalone content
- "Can you put window film on double-pane windows?" (answered on 3M page
  but not in general content)
- "Window film vs window replacement" — a resources page exists
  (/resources/window-replacement-alternative/) but no blog post covers it
- "Window film for historic buildings Philadelphia" — high local intent, mentioned
  in Philadelphia FAQ but no dedicated content
- "Best window film for apartments Philadelphia" — renters are a large
  Philly segment, zero dedicated content

---

### 5.2 Missing page types

| Missing page | Priority | Reason |
|-------------|---------|--------|
| /about/ or /about-us/ | HIGH | Trust signal; GEO credibility gap (noted in audit 02) |
| /residential/ | HIGH | Residential homeowners have no dedicated landing page |
| /blog/ post: "window film cost Philadelphia" | HIGH | Highest-volume informational query, no content |
| /blog/ post: "window film historic buildings Philadelphia" | MEDIUM | Local intent + high differentiation value |
| /blog/ post: "window film vs window tinting — what's the difference?" | MEDIUM | Common confusion query |
| /blog/ post: "how long does window film last?" | MEDIUM | FAQ that appears on every competitor site |
| /cities/cherry-hill/ | MEDIUM | Currently sends to /contact/ — high NJ suburb population |
| /cities/voorhees/ | LOW | Same issue, lower volume |

---

## Section 6: Blog Content Assessment

### 6.1 Current state — Critical gap

The site has one blog post published April 22, 2026. The post URL structure
(YYYY/MM/DD/slug) is SEO-friendly and matches WordPress conventions.

Pre-fix: the post had four content problems (all fixed in this session).
Post-fix: the post is a solid informational piece covering energy, UV defense,
and comfort benefits of window tint in a Philadelphia context. The local
specificity (Fishtown, Manayunk, Passyunk Avenue, Rittenhouse Square, Schuylkill
references) is good. The citations (DOE, Skin Cancer Foundation) are appropriate.

The post links contextually to the glare reduction benefit page and the UV
blocking benefit page — good internal linking from an article.

**Gap:** One post is not a blog. Google evaluates site authority partly by
the consistent publication of relevant, helpful content. A single post
published weeks ago signals low editorial investment.

---

### 6.2 Recommended blog content roadmap

Priority posts to write — each targeting a real search query:

| Post title | Target query | Estimated volume |
|-----------|-------------|-----------------|
| How Much Does Window Film Cost in Philadelphia? (2026 Guide) | "window film cost Philadelphia" | HIGH |
| Window Film for Philadelphia's Historic Rowhouses and Townhomes | "window film historic buildings Philadelphia" | MEDIUM |
| How Long Does Window Film Last? What Philadelphia Homeowners Should Know | "how long does window film last" | HIGH |
| Window Film vs. Window Replacement: A Philadelphia Property Owner's Guide | "window film vs window replacement" | MEDIUM |
| The Best Window Film for South-Facing Windows in Philadelphia | "best window film for heat reduction" | MEDIUM |
| Window Film for Philadelphia Renters: What You Need to Know | "apartment window film Philadelphia" | MEDIUM |
| 3M vs. LLumar vs. Vista: Which Window Film Brand Is Right for Your Property? | "3M vs LLumar window film" | LOW-MEDIUM |
| How Window Film Reduces Philadelphia Energy Bills Year-Round | "window film energy savings Philadelphia" | MEDIUM |

The pricing post should be first. "How much does X cost in [city]" queries
have very high commercial intent — readers are actively considering buying.
A well-structured pricing guide that explains cost variables, gives ranges,
and ends with a CTA to get a quote is a high-converting page type.

---

## Section 7: Issues Fixed This Session

### Summary of all fixes applied

| File | Fix | Type |
|------|-----|------|
| benefits.astro | Changed broken link `/benefits/energy-saving-window-film-philadephia/` → `/benefits/energy-savings/` | Broken link |
| applications/office.astro | Same broken link fix | Broken link |
| index.astro | Added trailing slashes to 3 service card hrefs | Canonical URL |
| index.astro | Added trailing slash to applications href in slider | Canonical URL |
| cities/philadelphia.astro | Fixed word collision typo "theGreater" → "the Greater" | Typo |
| applications.astro | Fixed Airports/Transit card self-link → `/applications/mass-transit/` | Broken link |
| government-buildings.astro | Changed first BAF heading to avoid duplicate H1 | H-tag / content |
| government-buildings.astro | Replaced placeholder sentence fragment with full paragraph in second BAF | Content |
| blog post .astro | Fixed meta title (90 chars → 69 chars) | Meta |
| blog post .astro | Fixed meta description (truncated fragment → complete sentence) | Meta |
| blog post .astro | Replaced first BAF body (date artifact) with real intro paragraph | Content |
| blog post .astro | Replaced energy savings BAF body (cut off mid-word) with complete paragraph | Content |

**Build verification:** `npm run build` → 65 pages, 0 errors ✓

---

## Appendix: Keyword Density Quick Reference

Primary keyword "window film Philadelphia" as phrase:

| Page | Count | Verdict |
|------|-------|---------|
| index.astro (body text) | 1 | LOW — homepage should have 2–3 |
| cities/philadelphia.astro | 6+ | GOOD |
| cities/camden.astro | 8+ | GOOD |
| applications.astro | 3 | ADEQUATE |
| applications/office.astro | 2 | ADEQUATE |
| products/3m-window-film.astro | 4 | GOOD |
| government-buildings.astro | 4 | ADEQUATE |

The homepage is the weakest keyword-targeting page relative to its
importance — it drives the most traffic but the H1 has no geo modifier
and the primary phrase appears once in visible body content.
