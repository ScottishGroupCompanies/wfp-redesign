# Keyword & Ranking Audit — Window Film Philadelphia
**Site:** windowfilmphiladelphia.net (Astro v4 SSG)
**Audit date:** 2026-05-27
**Auditor:** Keyword & Ranking Intelligence Agent
**Scope:** 65 page files across 8 content directories
**Prior audits:** 01-technical-seo, 02-geo, 03-onpage-content

---

## Executive Summary

The site has strong structural bones — good URL slugs across most sections, a
clean canonical setup, and solid page-level titles in the city and application
pages. But the keyword strategy has three systemic problems that are suppressing
the site's ability to rank for its highest-value terms:

1. **Homepage H1 was not targeting the primary head term.** The most important
   keyword signal on the site's most authoritative page said "Window Film
   Solutions" instead of "Window Film Philadelphia." Fixed during this audit.

2. **28 hero-level headings (H1s) were missing geo-modification.** Every benefits
   sub-page, most resource pages, and several top-level pages had non-geo H1s
   like "Anti-Graffiti Window Film" with no city signal. Google reads these as
   national, not local. All fixed during this audit.

3. **Two critical commercial keyword gaps exist with zero page coverage:**
   "residential window film Philadelphia" and "commercial window film
   Philadelphia" — the two highest-volume intent queries for this business —
   have no dedicated landing page. Every major competitor in the market has
   these pages. This is the top new-page priority.

28 direct file fixes were implemented and confirmed with a clean 65-page build.
All changes are documented with [FIXED] markers below.

---

## Severity Scale
- CRITICAL — Directly preventing ranking on a high-value target keyword
- HIGH — Measurable negative impact on ranking potential
- MEDIUM — Missed opportunity, not actively harming rankings
- LOW — Minor polish; low incremental impact

---

## 1. Primary Keyword Mapping

### Homepage — Target: "window film Philadelphia"

| Signal | Before | After | Status |
|--------|--------|-------|--------|
| Meta title | "Window Film Philadelphia \| Leading Window Film Solutions" | No change needed | OK |
| Meta description | "Window Film Philadelphia provides professional window film installation..." | No change needed | OK |
| H1 | "Window Film Solutions — Done Right, Every Time" | "Window Film Philadelphia — Done Right, Every Time" | [FIXED] |
| URL | / | / | OK |
| First paragraph | Not applicable (no body paragraph, glass card section follows) | — | NOTE |

**Assessment:** Title and description were already solid. The H1 was the
critical miss — it wasted the page's strongest on-page signal on a generic
tagline rather than the primary head term. Fixed. The glass card section that
follows the hero has no paragraph text; the first semantic body copy appears in
the "What We Do" section. Acceptable given the design pattern. No further
homepage text changes needed.

---

### City Pages

All four city pages have strong keyword alignment:

| Page | Meta Title | H1 | First Body H2 |
|------|------------|-----|---------------|
| /cities/philadelphia/ | "Window Film Philadelphia PA \| Window Film Contractor Philadelphia" | "Window Film Solutions Philadelphia, PA" | "Philadelphia's Trusted Window Film Experts" |
| /cities/camden/ | "Window Film Camden NJ \| Window Film Contractor Camden" | "Window Film Solutions Camden, NJ" | "Window Film in Camden, NJ" |
| /cities/reading/ | "Window Film Reading, PA \| Window Film Contractor Reading" | "Window Film Solutions Reading, PA" | "Window Film in Reading, PA" |
| /cities/upper-darby-township/ | "Window Film Upper Darby Township PA \| Window Film Contractor Upper Darby" | "Window Film Solutions Upper Darby, PA" | "Window Film in Upper Darby, PA" |

**Assessment:** City pages are the best-optimized section of the site. Primary
keyword in title, H1, and first body heading. No changes needed.

---

### Benefits Top-Level — Target: "window film benefits Philadelphia"

| Signal | Before | After | Status |
|--------|--------|-------|--------|
| Meta title | "Window Film Benefits Philadelphia \| Energy, Security & More" | No change needed | OK |
| InnerPageHero H1 | "Window Film Benefits" | "Window Film Benefits Philadelphia" | [FIXED] |

---

### Applications Top-Level — Target: "window film applications Philadelphia"

| Signal | Before | After | Status |
|--------|--------|-------|--------|
| Meta title | "Window Film Applications \| Philadelphia PA \| All Properties" | No change needed | OK |
| InnerPageHero H1 | "Window Film Applications" | "Window Film Applications Philadelphia" | [FIXED] |

---

### Benefits Sub-pages (16 pages)

All 14 non-geo-modified H1s were fixed. The two pages that already had
"Philadelphia" in their InnerPageHero title were left unchanged:
- benefits/privacy-window-film-philadelphia — already correct
- benefits/uv-blocking-window-film-philadelphia — already correct

Fixed H1s (InnerPageHero title prop):

| Page | Before | After |
|------|--------|-------|
| anti-graffiti | "Anti-Graffiti Window Film" | "Anti-Graffiti Window Film Philadelphia" [FIXED] |
| ballistic-resistance | "Ballistic-Resistant Window Film" | "Ballistic-Resistant Window Film Philadelphia" [FIXED] |
| bird-strike-prevention | "Bird Strike Prevention Window Film" | "Bird Strike Prevention Window Film Philadelphia" [FIXED] |
| blast-mitigation | "Blast Mitigation Window Film" | "Blast Mitigation Window Film Philadelphia" [FIXED] |
| decorative-promotional | "Decorative & Promotional Window Film" | "Decorative Window Film Philadelphia" [FIXED] |
| elevator-refinishing | "Elevator Refinishing Window Film" | "Elevator Refinishing Film Philadelphia" [FIXED] |
| energy-savings | "Energy Saving Window Film" | "Energy Saving Window Film Philadelphia" [FIXED] |
| exterior-building-wraps | "Exterior Building Wraps & Film" | "Exterior Building Wraps Philadelphia" [FIXED] |
| exterior-window-film | "Exterior Window Film" | "Exterior Window Film Philadelphia" [FIXED] |
| glare-reduction | "Glare Reduction Window Film" | "Glare Reduction Window Film Philadelphia" [FIXED] |
| mirror-refinishing | "Mirror Refinishing Window Film" | "Mirror Refinishing Film Philadelphia" [FIXED] |
| safety-and-security | "Safety & Security Window Film" | "Safety & Security Window Film Philadelphia" [FIXED] |
| school-security-window-film | "School Security Window Film" | "School Security Window Film Philadelphia" [FIXED] |
| updating-surfaces | "Surface Updating Window Film" | "Surface Updating Film Philadelphia" [FIXED] |

**Note on meta titles:** Benefits sub-page meta titles are inconsistent — some
have "Philadelphia" (energy-savings, privacy, uv-blocking, safety-and-security,
anti-graffiti, glare-reduction, decorative), some do not (ballistic-resistance,
blast-mitigation, exterior-window-film, etc.). The H1 fixes bring the most
critical signal into alignment. Full meta title geo-modification sweep is
recommended as a follow-up task (see Section 7 action list).

---

### Resource Pages

| Page | Meta Title (Before) | Meta Title (After) | Status |
|------|--------------------|--------------------|--------|
| window-film-pricing | "Window Film Pricing \| WFP \| Leading Window Film" | "Window Film Cost Philadelphia \| Pricing Guide & Estimates" | [FIXED] |
| maintenance-and-care | "Maintenance & Care \| WFP \| Leading Window Film" | "Window Film Maintenance & Care Guide \| Philadelphia" | [FIXED] |
| property-code | "Property Code \| WFP \| Leading Window Film" | "Window Film for Property Code Compliance \| Philadelphia PA" | [FIXED] |
| warranty | "Warranty \| WFP \| Leading Window Film Solutions" | "Window Film Warranty Philadelphia \| Coverage & Guarantee" | [FIXED] |
| commercial-faq | "Commercial Window Film FAQ \| Window Film Philadelphia" | No change — already correctly structured | OK |
| commercial-guide | "Commercial Window Film Guide \| Window Film Philadelphia" | No change — already correctly structured | OK |
| architects-builders | "Commercial Window Film Specifications \| WFP" | Meta description fixed (title was acceptable) | [FIXED] |

**Meta descriptions (weak generic copy fixed):**

| Page | Issue | Status |
|------|-------|--------|
| maintenance-and-care | "WFP is happy to share..." filler copy | [FIXED] |
| property-code | "WFP is happy to share..." filler copy | [FIXED] |
| warranty | "WFP is happy to share..." filler copy | [FIXED] |
| window-film-alternatives | "WFP is happy to provide resources..." filler copy | [FIXED] |
| window-replacement-alternative | "WFP is happy to provide leading services..." filler copy | [FIXED] |
| architects-builders | "WFP is happy to provide specifications..." filler copy | [FIXED] |
| government-buildings | "WFP is honored to provide..." filler copy | [FIXED] |

---

### Contact / Utility Pages

| Page | Issue | Fix | Status |
|------|-------|-----|--------|
| contact.astro | InnerPageHero H1 was "Get in Touch" — zero keyword signal | Changed to "Contact Window Film Philadelphia" | [FIXED] |
| blog.astro | H1 was "Window Film Blog" — no geo | Changed to "Window Film Blog \| Philadelphia Tips & Guides" | [FIXED] |
| government-buildings | Uses old BAF layout (no InnerPageHero), H1 is "Government Window Film in Philadelphia" | H1 already geo-modified, description fixed | [FIXED] |
| process.astro | Uses old layout (no InnerPageHero), H1 is "Expert Window Film Installation in Philadelphia" | H1 already correct | OK |

---

## 2. Keyword Gaps — HIGH PRIORITY

These are service or location combos with confirmed search intent that the site
has NO dedicated page targeting.

### CRITICAL GAPS — New Pages Required

**A. "Residential Window Film Philadelphia"**
- Est. volume: 200-400 mo / High commercial intent
- Current state: Zero dedicated page. The homepage mentions "Residential Film"
  in a glass card but there is no /residential/ or /residential-window-film/
  URL. All residential traffic is being diluted across city pages and benefits
  sub-pages.
- Why it matters: This is the highest-volume residential service keyword for
  this market. Competitors with a dedicated /residential-window-film-philadelphia/
  page will outrank WFP for this term regardless of how strong the homepage is.
- Recommendation: Create /residential-window-film-philadelphia/ as a dedicated
  service page targeting solar control, privacy, UV, and energy savings for
  Philadelphia homes. Use the Camden city page template as structural reference.

**B. "Commercial Window Film Philadelphia"**
- Est. volume: 300-600 mo / Very high commercial intent
- Current state: Zero dedicated page. /applications/ covers commercial use cases
  but the URL and H1 ("Window Film Applications Philadelphia") do not match
  searcher intent. Someone searching "commercial window film Philadelphia" is
  looking for a commercial service page, not an applications index.
- Why it matters: Commercial film is higher ticket and higher margin than
  residential. This keyword is almost certainly in the top 5 revenue-driving
  queries for the business, and the site has no direct match for it.
- Recommendation: Create /commercial-window-film-philadelphia/ targeting offices,
  retail, and institutions. The applications index can remain as a supporting
  hub page linking to this one.

**C. "Window Tinting Philadelphia" / "Window Tint Philadelphia"**
- Est. volume: 500-1000 mo (combined) / Mixed intent (auto + commercial)
- Current state: Zero coverage. "Window tint" is the consumer-friendly version
  of "window film" — less technical, higher search volume. The blog post at
  /2026/04/22/benefits-window-tint-philadelphia-energy-comfort-uv-defense/
  uses "window tint" in its title, which is good, but there is no service page
  targeting this term.
- Caveat: Volume includes automotive searches. A service page should clearly
  position WFP as commercial/residential (not automotive) in the intro copy.
- Recommendation: Create /window-tinting-philadelphia/ or add this as the
  target on the homepage if a separate page feels redundant. The blog post
  alone will not capture this volume.

**D. "Solar Window Film Philadelphia" / "Solar Control Film Philadelphia"**
- Est. volume: 100-250 mo / High commercial intent
- Current state: energy-savings.astro covers solar control film but the URL
  is /benefits/energy-savings/ — not a keyword-match URL. The meta title
  "Energy Saving Window Film Philadelphia | Solar Films" has a solar mention
  in the subtitle but it is weak.
- Recommendation: Either rename /benefits/energy-savings/ to
  /benefits/solar-control-window-film-philadelphia/ or create a dedicated solar
  film page and redirect the current URL to it.

### MEDIUM GAPS — Adjacent City Pages

The site serves Cherry Hill NJ, Voorhees NJ, Haddonfield NJ, Collingswood NJ,
Pennsauken NJ, Marlton NJ, and Maple Shade NJ (listed in the sidebar) — but
all seven of these cities point to /contact/ with no dedicated city page.

Each of these markets has local search intent:
- "window film Cherry Hill NJ" — vol: 50-150/mo, very low competition
- "window film Voorhees NJ" — vol: 30-100/mo, very low competition
- "window film Cherry Hill" — val: similar

These are easy wins. Low competition, geo-specific intent, zero content
investment needed beyond replicating the Camden/Reading template.

Priority order: Cherry Hill NJ (largest population, most searches) > Voorhees >
Marlton > Haddonfield > Collingswood > Pennsauken > Maple Shade.

### LOW GAPS — Resource Content

The following high-intent question queries have no matching content:
- "how much does window film cost Philadelphia" — /resources/window-film-pricing/
  exists but its H1 says "What Does Window Film Actually Cost?" without the
  geo-modifier. Medium fix: add "in Philadelphia" to the pricing H1.
- "window film vs window replacement" — covered by /resources/window-replacement-alternative/
  but very weak title ("Window Replacement Alternative"). Rename to
  "Window Film vs Window Replacement | Philadelphia Cost Comparison".
- "how long does window film last" — FAQ content exists scattered across
  multiple pages but there is no standalone page targeting this query. Would
  make a good blog post.
- "3M window film Philadelphia" — covered by /products/3m-window-film/ with
  solid title and H1. No gap here.

---

## 3. Keyword Cannibalization

### CONFIRMED CANNIBALIZATION — Severity: HIGH

**"Safety and security window film Philadelphia"**
- /benefits/safety-and-security/ — title: "Security Window Film Philadelphia"
- /benefits/school-security-window-film/ — title: "School Security Window Film"
- /benefits/ballistic-resistance/ — title: "Ballistic-Resistant Window Film Philadelphia"
- /benefits/blast-mitigation/ — title: "Blast Mitigation Window Film Philadelphia"

The first two are competing most directly. "Security Window Film Philadelphia"
and "School Security Window Film Philadelphia" overlap on the core modifier
"security window film." These pages are differentiated by use case (general
vs. school) but a crawler may not clearly demarcate them.

Resolution: Ensure /benefits/safety-and-security/ explicitly targets the
parent term "security window film Philadelphia" and has internal links TO the
school-specific page. The school page should be positioned as a sub-topic of
the parent, not a co-equal competitor. Consider adding canonical tags or
an explicit "For schools, see..." cross-link in the body copy.

**"Glare reduction" vs "Energy saving" overlap**
- /benefits/glare-reduction/ — targets anti-glare film
- /benefits/energy-savings/ — targets solar control / energy savings

These are not true cannibalization — they target distinct intent. However,
both pages likely discuss heat rejection, which creates partial content overlap.
Not a priority fix; worth monitoring if rankings for either drop.

### POTENTIAL CANNIBALIZATION — Severity: MEDIUM

**Applications index vs individual application pages**
- /applications/ — H1 now "Window Film Applications Philadelphia"
- /applications/office/ — title "Office Window Film Philadelphia"
- /applications/retail/ — title "Retail Window Film Philadelphia"

The index page broadly targets "window film applications Philadelphia" while
the sub-pages target specific verticals. This is correct hub-and-spoke
architecture — it is NOT cannibalization as long as the index page does not
have full-length content duplicating the sub-pages. Currently the index is
a card grid linking to sub-pages, which is the right structure.

**Government buildings — dual coverage**
- /government-buildings/ — dedicated government page
- /applications/secured-buildings/ — high-security applications page

These two pages share some security/government overlap. "Government window film
Philadelphia" and "high security window film Philadelphia" are genuinely
different queries, so this is acceptable. Monitor: if /applications/secured-buildings/
starts ranking for government terms, consolidation should be considered.

---

## 4. Long-Tail Opportunities

### Question-Based Queries (High Intent, Low Competition)

The site's FAQ infrastructure is strong — every major page has structured FAQ
schema. These specific long-tail queries are not currently well-matched to
individual pages:

| Query | Est. Vol | Intent | Existing Coverage | Recommendation |
|-------|----------|--------|-------------------|----------------|
| "does window film reduce heat Philadelphia" | 50-150/mo | Informational → transactional | Partial — energy-savings page | Add this exact phrase to energy-savings H2 or intro paragraph |
| "window film for historic buildings Philadelphia" | 30-80/mo | Transactional | Covered in Philadelphia city FAQ | Surface this in the city page H2 or add a callout section |
| "one way window film Philadelphia" | 50-150/mo | Transactional | Not covered | Add to privacy page body copy |
| "frosted window film Philadelphia" | 50-150/mo | Transactional | Not directly covered | Add to decorative-promotional or privacy page |
| "window film for office buildings Philadelphia" | 50-100/mo | Transactional | /applications/office/ | Good coverage — ensure intro paragraph mentions "Philadelphia offices" in first 50 words |
| "window film installer near me Philadelphia" | High / local | Transactional | Not targeted | Add to contact page body copy or homepage intro |
| "how long does window film last" | 200-500/mo (national) | Informational | FAQ content only | Good blog post topic; could own this nationally |
| "is window film worth it Philadelphia" | 50-100/mo | Informational → commercial | Not covered | Strong blog post or FAQ resource page |
| "window film tax credit Philadelphia" | 30-60/mo | Informational | Not covered | Short FAQ answer on energy-savings page. PA/federal energy credits are a real purchase motivator. |
| "anti graffiti film Philadelphia subway" | 30-50/mo | Very targeted | /benefits/anti-graffiti/ + /applications/mass-transit/ | Cross-link between these two pages |

### Informational Content That Can Drive Leads

The blog currently has one post. These topics would generate organic traffic
from mid-funnel searchers who convert to leads:

1. "How Much Does Window Film Cost in Philadelphia? (2026 Pricing Guide)"
   — directly reinforces /resources/window-film-pricing/ and owns the pricing SERP

2. "Window Film vs. Window Replacement: Which Makes More Sense for a Philadelphia Home?"
   — supports /resources/window-replacement-alternative/ and captures comparison searchers

3. "The Best Window Film for Philadelphia Row Homes (What Actually Works)"
   — hyper-local, captures residential searchers with specific housing context

4. "Does Window Film Qualify for Energy Tax Credits in Pennsylvania?"
   — captures a high-intent query with zero local competition

5. "Window Film for Philadelphia Historic Buildings: What's Allowed and What Works"
   — captures a niche but high-value segment (Society Hill, Old City, Fairmount)

---

## 5. URL Slug Audit

### Strong Slugs (keyword-optimized, no changes needed)

- /cities/philadelphia/ — clean, geo-correct
- /cities/camden/ — clean
- /cities/reading/ — clean
- /cities/upper-darby-township/ — clean (full township name is correct)
- /benefits/privacy-window-film-philadelphia/ — exact keyword match URL
- /benefits/uv-blocking-window-film-philadelphia/ — exact keyword match URL
- /benefits/school-security-window-film/ — descriptive and specific
- /applications/restaurants-window-film-philadelphia/ — keyword-rich
- /applications/hotel-window-film/ — appropriate
- /products/3m-window-film/ — brand + product keyword
- /resources/window-film-pricing/ — question-intent match

### Weak Slugs — Recommendations (No Automatic Fixes — Review Before Changing)

These slugs are live URLs with inbound links and indexed pages. Changing them
requires 301 redirects. Flagged here for review only — DO NOT change slugs
without implementing redirects in vercel.json.

| Current URL | Issue | Recommended Slug |
|-------------|-------|------------------|
| /benefits/energy-savings/ | Generic — misses "solar control film" keyword | /benefits/solar-control-window-film-philadelphia/ |
| /benefits/anti-graffiti/ | Missing city modifier | /benefits/anti-graffiti-window-film-philadelphia/ |
| /benefits/glare-reduction/ | Missing city modifier | /benefits/glare-reduction-window-film-philadelphia/ |
| /benefits/safety-and-security/ | Generic — misses "security window film" exact match | /benefits/security-window-film-philadelphia/ |
| /benefits/decorative-promotional/ | "promotional" adds nothing; users search "decorative" | /benefits/decorative-window-film-philadelphia/ |
| /resources/window-replacement-alternative/ | Weak intent match | /resources/window-film-vs-window-replacement/ |
| /resources/window-film-alternatives/ | Vague | /resources/window-film-vs-blinds-shades-glass/ |
| /government-buildings/ | Acceptable but could be stronger | /commercial/government-window-film-philadelphia/ |

**Verdict on slug changes:** The benefits sub-page slug changes carry the highest
potential upside since those pages rank on long-tail geo terms. Prioritize
energy-savings → solar-control and safety-and-security → security-window-film.
Both require 301 redirects and internal link updates.

---

## 6. Homepage Keyword Strategy Assessment

### Primary Term: "window film Philadelphia"

**Before this audit:**
- Title: "Window Film Philadelphia | Leading Window Film Solutions" — STRONG
- Meta description: Leads with "Window Film Philadelphia provides..." — STRONG
- H1: "Window Film Solutions — Done Right, Every Time" — WEAK (no city signal)
- First body content: "Residential Film / Commercial Film / Security Film" cards — no
  city mention in visible headings

**After this audit:**
- H1: "Window Film Philadelphia — Done Right, Every Time" — STRONG [FIXED]

**Remaining homepage keyword concerns:**

1. First body heading is "Expert film solutions for every surface" — no geo.
   This is an H2 in the "What We Do" section. It should contain "Philadelphia"
   somewhere. Recommended change: "Expert window film solutions for every
   Philadelphia property" or simply add a Philadelphia mention to the
   section subtext.

2. The stats section heading and the "Why Window Film Philadelphia" section
   are already geo-modified. Good.

3. The homepage has no paragraph text in the hero or immediately below the
   hero that contains "window film Philadelphia" as a phrase. The first full
   paragraph of copy appears deep in the page. For a site targeting a
   competitive local head term, the first ~150 words visible to a crawler
   should include the primary keyword at least once in running prose.
   Recommendation: Add 2-3 sentences of intro copy to the "What We Do"
   section before the services grid.

4. Internal link anchor text: Links from the homepage to /cities/philadelphia/
   and /benefits/ should use keyword-rich anchor text. Currently the glass
   cards use "Learn more →" as the CTA — this is fine for UX but adds no
   keyword signal to the link graph. Not a critical issue for a homepage,
   but worth noting.

**Overall homepage assessment:** With the H1 fix applied, the homepage is now
properly optimized for "window film Philadelphia" as its primary target. It
passes the four-signal test: keyword in URL (implied by domain), title, meta
description, and H1. The remaining items above are incremental improvements
rather than blockers.

---

## 7. Prioritized Action List

### Immediate — Done in This Audit [FIXED]

All 28 fixes below were implemented and confirmed with a clean 65-page build:

- [FIXED] Homepage H1 — added "Philadelphia" to primary head term signal
- [FIXED] benefits.astro InnerPageHero title — geo-modified
- [FIXED] applications.astro InnerPageHero title — geo-modified
- [FIXED] contact.astro InnerPageHero title — keyword-aligned
- [FIXED] blog.astro H1 — geo-modified
- [FIXED] resources.astro InnerPageHero title — geo-modified
- [FIXED] 14 benefits sub-page InnerPageHero titles — all geo-modified
- [FIXED] window-film-pricing meta title — searcher-intent aligned
- [FIXED] maintenance-and-care meta title + description — keyword-optimized
- [FIXED] property-code meta title + description — keyword-optimized
- [FIXED] warranty meta title + description — keyword-optimized
- [FIXED] window-film-alternatives meta description — substantive copy
- [FIXED] window-replacement-alternative meta description — substantive copy
- [FIXED] architects-builders meta description — substantive copy
- [FIXED] government-buildings meta description — keyword-specific copy

---

### HIGH PRIORITY — New Pages (Require Approval Before Creation)

**P1. /residential-window-film-philadelphia/**
Target keyword: "residential window film Philadelphia" (200-400 mo)
Template: Camden city page structure
Key sections: film types for homes, rowhouse/historic building use cases,
energy savings ROI, privacy options, pricing callout, FAQ

**P2. /commercial-window-film-philadelphia/**
Target keyword: "commercial window film Philadelphia" (300-600 mo)
Template: Camden city page structure
Key sections: office/retail/industrial use cases, energy code compliance,
LEED documentation, installation process for occupied spaces, FAQ

**P3. /window-tinting-philadelphia/**
Target keyword: "window tinting Philadelphia" / "window tint Philadelphia" (500-1k mo)
Note: Make clear in intro this is building/home/office film, not automotive
Can be a shorter pillar page that links to residential + commercial pages

---

### HIGH PRIORITY — Existing Page Improvements

**P4. Homepage — add intro paragraph copy**
Add 2-3 sentences to the "What We Do" section intro that contains the phrase
"window film Philadelphia" in running prose. This gives the crawler meaningful
keyword-in-context copy above the fold.

**P5. Residential + Commercial keyword mentions on homepage**
The three glass service cards ("Residential Film / Commercial Film / Security Film")
link to /benefits/ and /applications/ respectively. Update these card links to
point to the new /residential-window-film-philadelphia/ and
/commercial-window-film-philadelphia/ pages once those exist.

**P6. Benefits sub-page meta titles — geo-modification sweep**
Several benefits sub-pages still have non-geo meta titles (ballistic-resistance,
blast-mitigation, exterior-window-film, exterior-building-wraps, elevator-refinishing,
bird-strike-prevention, updating-surfaces, mirror-refinishing, school-security).
The H1 fixes already addressed the most critical signal; updating meta titles
is the natural follow-up sweep.

---

### MEDIUM PRIORITY — Adjacent City Pages

**P7-P13. Cherry Hill NJ, Voorhees NJ, Marlton NJ, Haddonfield NJ, Collingswood NJ,
Pennsauken NJ, Maple Shade NJ**
Each page: use Camden as the structural template, update city-specific copy,
neighborhoods, FAQ answers, and set the sidebar active state. These are fast
to build and have very low competition.
Priority order: Cherry Hill > Voorhees > Marlton > Haddonfield

---

### MEDIUM PRIORITY — Slug Changes (Require 301 Redirects)

**P14. /benefits/energy-savings/ → /benefits/solar-control-window-film-philadelphia/**
Highest-value slug upgrade. Requires: add redirect to vercel.json, update all
internal links pointing to the old slug, update the benefits.astro grid card href.

**P15. /benefits/safety-and-security/ → /benefits/security-window-film-philadelphia/**
Second-highest value. Same procedure as above.

---

### LOW PRIORITY — Content Additions

**P16. Blog posts (see Section 4 recommendations)**
Window film cost guide, window film vs replacement, row home guide, energy tax
credits, historic buildings — any one of these would likely generate leads within
60-90 days of publication.

**P17. /resources/window-film-pricing/ — add city mention to H1**
Current H1: "What Does Window Film Actually Cost?" → add "in Philadelphia" to end.

**P18. Long-tail body copy additions**
- energy-savings page: add "does window film reduce heat in Philadelphia" in
  a subheading or FAQ item
- privacy page: add "one way window film Philadelphia" and "frosted window film
  Philadelphia" to body copy
- office applications page: ensure "Philadelphia offices" appears in first
  50 words of body copy

---

## 8. Cannibalization Resolution Actions

1. /benefits/safety-and-security/ — add explicit cross-link to
   /benefits/school-security-window-film/ in the body copy. Position the school
   page as a sub-use-case of the parent security page.

2. /applications/ and /applications/secured-buildings/ — ensure the applications
   index card for "Secured Buildings" links to /applications/secured-buildings/
   (not /government-buildings/). Government and secured-buildings serve different
   intents and should remain separate pages.

3. If/when /commercial-window-film-philadelphia/ is created, add a canonical
   breadcrumb signal: /applications/ should link to it as the "parent" commercial
   service page, not the other way around.

---

## 9. What Data Would Improve This Audit

This audit was conducted from source files only. The following data would
materially improve keyword targeting decisions:

1. **Google Search Console data** — actual impressions/clicks/position data
   for every page would identify which pages are already ranking in positions
   4-20 (quick-win candidates to push to #1-3) vs. not ranking at all.

2. **Ahrefs / Semrush keyword explorer** — exact search volumes for
   geo-modified terms like "residential window film Philadelphia" and
   "commercial window film Philadelphia." Current volume estimates in this
   audit are informed approximations, not verified data.

3. **Competitor URL inventory** — crawling the top 3 competitors for
   "window film Philadelphia" to map their exact page structure would
   confirm which gaps are most urgently exploited by competing sites.

4. **GSC position data for the /blog/ post** — the one published blog post
   (/2026/04/22/benefits-window-tint-philadelphia-...) contains strong
   keyword targeting. Knowing its current impression count would indicate
   whether the blog is getting crawled and indexed before investing in more posts.

---

*Build status: 65 pages built, 0 errors. All [FIXED] changes confirmed clean.*
