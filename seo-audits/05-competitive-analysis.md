# Competitive Analysis — Window Film Philadelphia
**Site:** windowfilmphiladelphia.net (Astro v4 SSG)
**Market:** Philadelphia PA + Camden NJ, Reading PA, Upper Darby PA
**Audit date:** 2026-05-27
**Prior audits:** 01-technical-seo, 02-geo, 03-onpage-content, 04-keyword-ranking
**Crawler:** Live site fetch via browser + web tooling

---

## Status

- [x] Phase 1 — Competitor Discovery (approved)
- [x] Phase 2 — Full Analysis (complete — findings only, no changes without approval)

---

## Pre-Report Flags (Read First)

### FLAG 1 — wfprofessionals.com: DEAD DOMAIN
wfprofessionals.com has expired and now resolves to sanstorm-blasters.com
(a sandblasting equipment site). SSL certificate mismatch confirmed.
This domain is no longer a competitor. It holds no SERP real estate at
this time. Removed from all analysis tables.

### FLAG 2 — suncontrolofpa.com: GEOGRAPHY MISMATCH
Phone area code: (717) — York/Lancaster/Harrisburg PA.
NOT Philadelphia (215/267/445). Location pages list York PA, Lancaster PA,
and Harrisburg PA — all 80-150 miles from Philadelphia.
Site appears to be targeting Pennsylvania broadly and ranking for
Philadelphia queries through keyword density, not genuine local presence.
Additionally, address listings on its /locations/ page are classic
placeholder values: "123 Main Street," "456 Lancaster Ave," "789 Market
Street." Two testimonials share identical body text — exposed AI/copy-paste
error. Included in analysis but flagged as LOW THREAT and geographically
mismatched.

### FLAG 3 — windowtintingphiladelphia.com: AUTOMOTIVE-FIRST, THIN SITE
Primary service offering is automotive tinting (PPF, ceramic coating,
windshield film). Architectural (residential/commercial) is secondary.
No manufacturer brands named. No physical address. No social media.
Template site with 19 thin doorway location pages. Real or lead-gen
operation unknown — but it holds SERP positions and must be treated
as a SERP occupant regardless of legitimacy.

### FLAG 4 — philafilm.com: THIN TEMPLATE SITE
Social media links go to facebook.com, instagram.com, youtube.com root
pages — not actual business profiles. No street address. Only 3 blog
posts, all from 2024, all generic. Manufactured brand certifications
listed but no real verification. Classified as thin/AI-generated.

---

## Section 1 — Top Competitive Gaps (Priority Order)

---

### GAP 1 — CRITICAL: No Phone Number in Header

Every active competitor has a clickable phone number in the header,
visible on every page load. WFP has none.

| Competitor                      | Phone in Header | Clickable |
|---------------------------------|-----------------|-----------|
| lloydwindowfilm.com             | YES — (215) 860-8610 | YES |
| windowtintingphiladelphia.com   | YES — (215) 709-7000 | YES |
| philafilm.com                   | YES — (215) 715-1075 | YES |
| suncontrolofpa.com              | YES — (717) 755-7505 | YES |
| windowfilmphiladelphia.net (WFP)| NOT PRESENT     | N/A |

WFP is the ONLY site in this competitive set with no phone in the
header. For a service business where phone calls are the primary
conversion channel, this is the single most damaging conversion gap
in the entire site.

ACTION: Add a clickable tel: link for WFP's phone number to the
Header.astro component — top bar or in the nav pill.

---

### GAP 2 — CRITICAL: No Dedicated Commercial or Residential Landing Pages

Both "residential window film Philadelphia" and "commercial window film
Philadelphia" are high-intent search queries. Every active competitor
has dedicated landing pages for these terms. WFP has zero.

| Competitor                      | /residential page | /commercial page |
|---------------------------------|-------------------|-----------------|
| lloydwindowfilm.com             | YES (~600w)       | YES (~600w)     |
| philafilm.com                   | YES (~450w)       | YES (~500w)     |
| windowtintingphiladelphia.com   | YES (~500w)       | YES (~450w)     |
| suncontrolofpa.com              | YES (~200w)       | YES (~250w)     |
| windowfilmphiladelphia.net (WFP)| NONE              | NONE            |

WFP is the only site without these pages. This was also the top finding
from Audit 04 (keyword ranking). Flagged there as CRITICAL. Still unbuilt.

ACTION: Create /residential-window-film/ and /commercial-window-film/
as full landing pages (800+ words each, FAQ section, lead form,
trust signals). These are the highest-priority new pages for the site.

---

### GAP 3 — HIGH: Google Reviews Not Displayed On-Site

WFP has an A+ BBB rating and is an established business since 2008.
No competitor shows any verified external review count on-site.
This is simultaneously a gap (no widget) and a major white-space
opportunity (WFP is the only site with verifiable third-party credibility).

| Competitor                      | Review Widget | Platform | Rating Shown |
|---------------------------------|---------------|----------|--------------|
| lloydwindowfilm.com             | Static only   | Google   | ~5.0 (no count) |
| windowtintingphiladelphia.com   | None          | None     | Self-described "5-Star" |
| philafilm.com                   | None          | None     | Anonymous text only |
| suncontrolofpa.com              | None          | None     | 5-star icons (fake) |
| windowfilmphiladelphia.net (WFP)| NOT PRESENT   | —        | None |

None of the thin/template competitors have real reviews. Lloyd has a
static Google rating display. WFP has an A+ BBB rating and 17 years of
actual operations — a live Google reviews widget and BBB badge would
instantly differentiate it from every template site in this SERP.

ACTION: Embed a live Google reviews widget on the homepage (and city
pages). Add BBB A+ badge to the header or homepage trust section.
These are the single strongest trust differentiators available.

---

### GAP 4 — HIGH: No FAQ Sections on Service Pages

WFP has a Camden city page FAQ. No competitor has FAQ sections on any
service page. Adding FAQs to /residential/ and /commercial/ pages
targets "how to" and "does window film..." queries and enables FAQ
rich results in Google.

| Competitor                      | FAQ on service pages |
|---------------------------------|---------------------|
| lloydwindowfilm.com             | No                  |
| windowtintingphiladelphia.com   | No                  |
| philafilm.com                   | YES — 4 FAQs on residential + commercial pages |
| suncontrolofpa.com              | No                  |
| windowfilmphiladelphia.net (WFP)| On Camden city page only; not on service pages |

philafilm.com is the one exception — 4-question FAQs appear on both
residential and commercial pages. WFP already has FAQ infrastructure
(accordion component, Camden pattern). This is a quick content win.

ACTION: Add 5-6 FAQ items to the new /residential/ and /commercial/
pages using the accordion pattern already built for Camden.

---

### GAP 5 — HIGH: No Blog or Content Marketing

WFP has no active blog. Most competitors also lack a blog, but
philafilm.com has 3 posts (thin) and the entire competitive set has
zero meaningful editorial content. This is a wide open white-space
lane for organic traffic through informational keywords.

| Competitor                      | Blog | Post count | Quality |
|---------------------------------|------|------------|---------|
| lloydwindowfilm.com             | No   | 0          | N/A     |
| windowtintingphiladelphia.com   | No   | 0          | N/A     |
| philafilm.com                   | Yes  | 3          | Generic/AI |
| suncontrolofpa.com              | Yes (empty) | 0   | N/A     |
| windowfilmphiladelphia.net (WFP)| Not built   | 0   | N/A     |

No competitor in this market publishes real informational content.
WFP could own the informational query layer for Philadelphia window
film topics entirely.

ACTION: Prioritize building the blog with 4-6 anchor posts at launch.
High-value starting topics: "How much does window film cost in
Philadelphia," "Best window film for Philadelphia row homes,"
"Energy savings from window film — Philadelphia utility rate data,"
"Security film for Philadelphia businesses."

---

### GAP 6 — MEDIUM: No Neighborhood-Level Location Pages

windowtintingphiladelphia.com has built 13 Philadelphia neighborhood
pages (South Philly, Fishtown, Rittenhouse Square, Old City, etc.)
plus 4 county pages and 2 NJ cities = 19 total geo pages.
lloydwindowfilm.com has 6 metro-area location pages.
WFP has 4 city pages (Philadelphia, Camden, Reading, Upper Darby).

The neighborhood page gap is significant for capturing "window film
[neighborhood]" queries. WFP's existing city pages are higher-quality
than any competitor's, but the sheer number of doorway pages that
windowtintingphiladelphia.com has built creates a wide SERP footprint
even if individual pages are thin.

WFP geo page comparison vs lloydwindowfilm.com (the real competitor):

| WFP City Pages                  | Lloyd Location Pages        |
|---------------------------------|-----------------------------|
| /cities/philadelphia/           | /philadelphia-pa/           |
| /cities/camden/                 | /south-jersey/              |
| /cities/reading/                | /bucks-county-pa/           |
| /cities/upper-darby-township/   | /montgomery-county-pa/      |
| (none)                          | /delaware-county-pa/        |
| (none)                          | /chester-county-pa/         |

WFP's individual city pages are substantially richer (Camden page alone
has testimonial carousel, sidebar, FAQ, process section, film options
grid). Lloyd's location pages appear to be thinner (~400-500 words, no FAQ).
But Lloyd covers 6 service areas vs WFP's 4, and WFP is missing
Delaware County and Chester County entirely.

ACTION: Add Delaware County PA and Cherry Hill NJ as new city pages
(both are already listed in the Cities We Serve sidebar as "/contact/"
placeholders). Medium priority — after /residential/ and /commercial/.

---

### GAP 7 — MEDIUM: No Before/After Photo Gallery

No competitor has a before/after photo gallery or real project portfolio.
Text testimonials dominate across the board. Before/after galleries are
a proven conversion driver for visual home/building improvement services.

| Competitor                      | Before/After Gallery | Project Photos |
|---------------------------------|--------------------|----------------|
| lloydwindowfilm.com             | No                 | Unknown        |
| windowtintingphiladelphia.com   | No                 | No real photos |
| philafilm.com                   | No                 | No real photos |
| suncontrolofpa.com              | No                 | No real photos |
| windowfilmphiladelphia.net (WFP)| Not built          | Hero/section images present |

WFP already has real installation photography. A dedicated gallery or
before/after section would be a genuine differentiator with zero
competitive overlap.

ACTION: Add a before/after gallery component to the homepage
or create a /gallery/ page with 8-12 real project photos.

---

### GAP 8 — MEDIUM: Manufacturer Brand Depth

WFP's BrandLogos carousel displays 12 brands. Lloyd shows 3M + LLumar.
philafilm shows 3M + LLumar + SolarGard + Vista. windowtintingphiladelphia
names no brands at all.

However, the brands are only shown in the carousel — no individual
brand pages, no certification call-outs in the header or trust section.
The depth advantage is real but not being exploited to its fullest.

| Competitor                      | Brands named | Certification claims |
|---------------------------------|-------------|---------------------|
| lloydwindowfilm.com             | 3M, LLumar  | Yes — certified installer |
| philafilm.com                   | 3M, LLumar, SolarGard, Vista | Yes (listed on About + Products) |
| windowtintingphiladelphia.com   | NONE        | No                  |
| suncontrolofpa.com              | NONE        | No                  |
| windowfilmphiladelphia.net (WFP)| 12 brands (carousel) | Not prominently called out |

ACTION: Move at least the top 3-4 brand logos (3M, LLumar, Vista,
Solar Gard) above the fold on the homepage with "Certified Dealer"
labels. Don't make users scroll to the BrandLogos carousel to discover
this. Add certification badges to the sidebar CTA card on city pages.

---

### GAP 9 — LOW: No Live Chat

No competitor uses live chat. This is a first-mover opportunity for
the entire market.

ACTION: Consider adding Tawk.to (free) or similar live chat. Low
implementation cost, potential high conversion impact for commercial
inquiries. Monitor chat volume before investing in paid platforms.

---

## Section 2 — Side-by-Side Comparison Table

| Dimension                     | WFP (client)    | lloydwindowfilm | windowtintingphiladelphia | philafilm      | suncontrolofpa |
|-------------------------------|-----------------|-----------------|--------------------------|----------------|----------------|
| Phone in header               | NO              | YES (215)       | YES (215)                | YES (215)      | YES (717)*     |
| Clickable phone               | NO              | YES             | YES                      | YES            | YES            |
| Physical address              | Not checked     | None shown      | None shown               | City only      | FAKE***        |
| Geo match (Philly)            | YES             | YES             | YES                      | YES            | NO* (717 area) |
| Years / founded               | 2008 (17 yrs)   | 20+ yrs         | Vague "years"            | 15+ yrs        | 1974 (50+ yrs)** |
| BBB accreditation             | A+ (not shown)  | No              | No                       | No             | No             |
| Google review widget          | No              | Static only     | No                       | No             | No             |
| Brand certifications          | 12 (carousel)   | 3M, LLumar      | NONE                     | 3M, LLumar, SG, Vista | NONE    |
| Warranty mentioned            | Yes             | Yes             | Yes (Lifetime)           | Yes (mfr. warranty) | No         |
| Free quote CTA                | Yes             | YES — form      | YES — form               | YES — form     | CTA only       |
| Header CTA button             | Not visible     | "Get a Free Quote" | "Get a Free Quote"    | "Get a Free Quote" | Phone text |
| Live chat                     | No              | No              | No                       | No             | No             |
| /residential/ page            | NO              | YES             | YES                      | YES            | YES            |
| /commercial/ page             | NO              | YES             | YES                      | YES            | YES            |
| City / location pages         | 4               | 6               | 19                       | 0              | 3 (wrong city) |
| FAQ on service pages          | Camden only     | No              | No                       | YES (res+comm) | No             |
| Blog                          | Not built       | No              | No                       | 3 posts        | 0 posts        |
| Social media (real profiles)  | Unknown         | Facebook        | NONE                     | NONE (broken)  | NONE (broken)  |
| Before/after gallery          | No              | No              | No                       | No             | No             |
| Overall quality (1-5)         | 4 (redesign)    | 3               | 2 (thin)                 | 2 (thin)       | 2 (fake)       |

* suncontrolofpa.com: 717 area code = York/Lancaster PA, not Philadelphia
** Unverifiable — placeholder addresses confirm fake site
*** 123 Main Street / 456 Lancaster Ave / 789 Market Street — placeholder text

---

## Section 3 — Trust Signal Ranking

Ranked by strength of verifiable trust evidence:

1. windowfilmphiladelphia.net (WFP) — STRONGEST but unexploited
   - A+ BBB rating (not displayed on site)
   - 17 years in operation (verifiable)
   - 12 named manufacturer brands (only in carousel — not prominent)
   - Genuine photography
   - Zero Google review display despite presumably having reviews

2. lloydwindowfilm.com — SECOND MOST CREDIBLE
   - 215 area code (matches market)
   - 3M + LLumar certifications displayed
   - Static Google star rating (real, though no count shown)
   - "20+ years" claim (plausible for a real local operator)
   - No BBB, no before/after, no real review count

3. windowtintingphiladelphia.com — TEMPLATE SITE
   - 215 area code (matches market)
   - Lifetime warranty claimed but no legal backing shown
   - "Locally owned" claimed — unverifiable
   - No brands, no real reviews, no address

4. philafilm.com — TEMPLATE SITE
   - 215 area code (matches market)
   - Brand logos shown (3M, LLumar, SolarGard, Vista) — may be copied
   - Social links are broken placeholders
   - 3 blog posts (generic AI content)

5. suncontrolofpa.com — MISMATCHED/FAKE
   - 717 area code = not Philadelphia
   - Placeholder addresses
   - Duplicate testimonials (AI error)
   - Claims 50 years in business but shows zero real business evidence

---

## Section 4 — Content Coverage Matrix

### Service Type Coverage

| Service Type              | WFP | Lloyd | wtp.com | philafilm | suncontrol |
|---------------------------|-----|-------|---------|-----------|------------|
| Solar control / heat      | Yes | Yes   | Yes     | Yes       | Yes        |
| Privacy film              | Yes | Yes   | Yes     | Yes       | Yes        |
| Safety & security film    | Yes | Yes   | Yes     | Yes       | Yes        |
| Decorative film           | Yes | Yes   | Yes     | Yes       | Yes        |
| Anti-graffiti film        | Yes | No    | No      | Yes       | No         |
| Residential (landing page)| NO  | Yes   | Yes     | Yes       | Yes        |
| Commercial (landing page) | NO  | Yes   | Yes     | Yes       | Yes        |
| Government buildings      | Yes | No    | No      | No        | No         |
| Automotive                | No  | No    | YES     | No        | Yes        |
| Branding / graphics       | No  | Yes   | No      | No        | Yes        |
| Paint protection film     | No  | No    | YES     | No        | No         |

WFP has the broadest architectural service coverage (government buildings,
anti-graffiti) but is missing the two most important commercial keyword
landing pages (residential and commercial).

### White Space Opportunities — Things NO Competitor Does

1. GENUINE BLOG WITH LOCAL CONTENT — philafilm has 3 AI posts.
   No one owns the Philadelphia window film informational query space.

2. BBB BADGE ON SITE — no competitor mentions BBB. WFP has A+ accreditation
   sitting unused.

3. LIVE GOOGLE REVIEWS WIDGET — Lloyd has a static star icon. No one
   embeds real, dynamic review counts. First mover gets the trust halo.

4. BEFORE/AFTER PROJECT GALLERY — the entire market is running on stock
   and generic imagery.

5. ENERGY SAVINGS CALCULATOR — not one competitor offers even a simple
   estimate tool. A "how much could you save?" widget would be a unique
   conversion driver.

6. NEIGHBORHOOD-LEVEL CONTENT (for Philadelphia) — 13 neighborhood pages
   at windowtintingphiladelphia.com are thin templates. WFP's Camden page
   level of depth applied to Fishtown, Old City, Center City, etc. would
   dominate the sub-city query space.

7. REAL TEAM / ABOUT PAGE WITH NAMED STAFF — every competitor is completely
   anonymous (no employee names, no team photos, no owner bio).

---

## Section 5 — On-Page SEO Comparison

### Homepage Title Tags

| Site                           | Title Tag                                             | Keyword Present |
|--------------------------------|-------------------------------------------------------|-----------------|
| windowfilmphiladelphia.net     | Window Film Philadelphia | Leading Window Film Solutions | YES |
| lloydwindowfilm.com            | Lloyd Window Film | Philadelphia Window Tinting & Film Installation | YES |
| windowtintingphiladelphia.com  | Window Tinting Philadelphia | #1 Rated Tint Shop | Free Quotes | YES |
| philafilm.com                  | Philadelphia Window Film | Residential & Commercial Window Tinting | YES |
| suncontrolofpa.com             | Window Tinting & Film Services | Sun Control of PA | NO (PA, not Philadelphia) |

All Philadelphia-market sites include "Philadelphia" in the title. WFP's
title is solid. suncontrolofpa.com notably does NOT include "Philadelphia"
in the title — consistent with its geographic mismatch.

### Homepage H1 Tags

| Site                           | H1 Tag                                                |
|--------------------------------|-------------------------------------------------------|
| windowfilmphiladelphia.net     | Window Film Philadelphia — Done Right, Every Time [FIXED audit 04] |
| lloydwindowfilm.com            | Philadelphia's Premier Window Film Installer          |
| windowtintingphiladelphia.com  | Philadelphia's #1 Window Tinting Service              |
| philafilm.com                  | Expert Window Tinting Services in Philadelphia & Beyond |
| suncontrolofpa.com             | Pennsylvania's Premier Window Film Company            |

WFP's H1 (fixed in audit 04) is the strongest of the group — includes the
exact match "Window Film Philadelphia" as the primary phrase. Lloyd and
wtp.com lead with branding claims ("Premier," "#1") rather than the keyword.

### Meta Descriptions

| Site                           | Meta Description (truncated)                          |
|--------------------------------|-------------------------------------------------------|
| windowfilmphiladelphia.net     | "Window Film Philadelphia provides professional window film installation..." |
| lloydwindowfilm.com            | "Lloyd Window Film provides professional window film installation in Philadelphia, PA..." |
| windowtintingphiladelphia.com  | "Window tinting Philadelphia offering residential and commercial window film services. Call now for a free quote (267) 223-4192" |
| philafilm.com                  | "Philadelphia Window Film provides professional window film installation services..." |
| suncontrolofpa.com             | "Sun Control of PA provides professional window tinting and film services for residential, commercial, and automotive applications throughout Pennsylvania." |

Notable: windowtintingphiladelphia.com includes the phone number IN the
meta description. This makes the number visible in the SERP snippet — a
strong conversion tactic. WFP's meta descriptions do not include the phone.

ACTION: Consider adding WFP's phone number to homepage and city page
meta descriptions to enable click-to-call directly from SERP.

---

## Section 6 — Conversion Elements Comparison

| Element                     | WFP | Lloyd | wtp.com | philafilm | suncontrol |
|-----------------------------|-----|-------|---------|-----------|------------|
| Phone in header             | NO  | YES   | YES     | YES       | YES        |
| Phone in meta description   | No  | No    | YES     | No        | No         |
| Header quote CTA button     | No  | YES   | YES     | YES       | Yes (text) |
| Contact form                | Yes | YES   | YES     | YES       | Unknown    |
| Inline quote forms on pages | No  | YES   | No      | YES       | No         |
| Live chat                   | No  | No    | No      | No        | No         |
| Review widget               | No  | Static| No      | No        | No         |
| BBB badge                   | No* | No    | No      | No        | No         |
| Certifications visible      | Carousel | Header area | No | About page | No |

* WFP has A+ BBB but does not display the badge on the site.

WFP is currently losing on 4 of the 5 header/above-fold conversion signals
that every competitor uses. The redesign is the right time to fix all of these.

---

## Section 7 — White Space Summary

Opportunities no competitor is currently exploiting:

1. LIVE GOOGLE REVIEWS WIDGET — first-mover advantage in this SERP
2. BBB BADGE — only WFP has one; it's invisible
3. INFORMATIONAL BLOG CONTENT — no one owns this space
4. BEFORE/AFTER GALLERY — all competitors use stock/generic imagery
5. ENERGY SAVINGS CALCULATOR — no competitor offers any interactive tool
6. PHILADELPHIA NEIGHBORHOOD PAGES — wtp.com has 13 thin ones; rich
   versions would dominate (Fishtown, Old City, Center City, Northern
   Liberties, Manayunk, Chestnut Hill all viable)
7. NAMED TEAM + OWNER STORY — zero competitors show real people.
   A real About page with an owner bio is an immediate authenticity
   separator from the template sites.
8. BUILDING TYPE LANDING PAGES — no competitor has /office-buildings/,
   /retail-stores/, /schools/, /healthcare/ dedicated pages. WFP's
   government-buildings page is the only building-type page in the
   entire competitive set.

---

## Section 8 — Competitive Threat Tiers

### HIGH THREAT

lloydwindowfilm.com
- Real local business with genuine Philadelphia area code
- 3M + LLumar certifications (credible trust signals)
- 6 service area pages covering the WFP market footprint
- Steady SERP presence across all 3 keyword queries
- Largest real-content service page depth in the competitor set (~600w per page)
- Missing: blog, FAQ, real review count, no Google widget
- Current weakness WFP can exploit: No FAQ, no blog, no BBB badge

### MEDIUM THREAT (SERP Occupants)

windowtintingphiladelphia.com
- Thin template site but holds SERP positions through keyword-exact domain + 19 location pages
- Serves automotive primarily — not a pure architectural competitor
- No brands named, no real photos, no address
- SERP threat: Location page volume alone creates search visibility even with thin content
- Current weakness WFP can exploit: Everything. This is a weak operator in a strong domain.

philafilm.com
- Thin template site with broken social media and no real street address
- Has brand logos and 3 blog posts — slightly more credible than windowtintingphiladelphia
- Has FAQs on service pages (one real content advantage)
- Consistently ranks but lacks content depth on any individual page
- Current weakness WFP can exploit: No geo pages, no real trust signals, no verifiable reviews

### LOW THREAT / MONITOR ONLY

suncontrolofpa.com
- GEOGRAPHY MISMATCH: serves York/Lancaster/Harrisburg, not Philadelphia
- Placeholder addresses, copied testimonials, broken social links
- Ranks for Philadelphia queries but has no genuine local presence
- Poses minimal conversion threat but occupies SERP real estate
- WATCH: If a real business acquires/builds on this domain, threat level rises

### ELIMINATED

wfprofessionals.com — DEAD DOMAIN, no further action needed

---

## Section 9 — Priority Action Plan

FINDINGS ONLY. No changes without explicit approval.

### Immediate (before site launch)

1. Add phone number to Header.astro — clickable tel: link, visible on all pages.
   (No competitor data required — this is the most critical conversion fix.)

2. Create /residential-window-film/ landing page — 800+ words, FAQ section,
   free quote form, trust signals. Target keyword: "residential window film
   Philadelphia."

3. Create /commercial-window-film/ landing page — 800+ words, FAQ section,
   industry applications list, free quote form. Target keyword: "commercial
   window film Philadelphia."

4. Move BBB A+ badge to visible position on homepage — above the fold or
   in the trust bar alongside brand logos. This is the strongest single trust
   differentiator vs every thin-site competitor.

5. Add phone number to meta descriptions for homepage and city pages to
   enable SERP click-to-call (following windowtintingphiladelphia.com's pattern).

### Short-Term (first 30 days post-launch)

6. Add Google reviews widget to homepage and Camden city page.
   (Use a real Google Places API widget, not a static badge.)

7. Add FAQs to the new /residential/ and /commercial/ pages — 5-6 questions
   each using the Camden accordion pattern.

8. Retro-apply FAQs to the Philadelphia, Reading, and Upper Darby city pages
   (Camden already has FAQs — others do not).

9. Add 3M + LLumar + Vista certification badges to the Header.astro trust bar
   or the homepage hero section trust strip — above the fold. Currently only
   visible in the BrandLogos carousel which requires scrolling.

10. Create an authentic About / Our Team page with owner name, years founded
    (2008), and a real photo. Every competitor is completely anonymous — this
    is an easy differentiator.

### Medium-Term (60-90 days)

11. Launch blog with 4-6 anchor posts targeting informational keywords:
    - "How much does window film cost in Philadelphia?"
    - "Best window film for Philadelphia row homes"
    - "Commercial window film Philadelphia — energy savings data"
    - "Privacy film for Philadelphia offices — laws and options"

12. Add Delaware County PA and Cherry Hill NJ as full city pages using
    the Camden template. Both are already listed as "/contact/" placeholders
    in the Cities We Serve sidebar.

13. Build a before/after gallery page or homepage section with real project
    photos. No competitor has one.

14. Evaluate Philadelphia neighborhood pages: if commercial expansion is a
    priority, Center City, Old City, and University City neighborhood pages
    targeting commercial queries would generate near-zero competitive overlap.

### Ongoing

15. Monitor wfprofessionals.com — if the domain gets re-acquired and rebuilt,
    reassess threat level. Currently dead.

16. Monitor suncontrolofpa.com — if a real Philadelphia operator ever
    acquires/redirects this domain (which already ranks for Philly terms),
    it could rapidly become a HIGH threat.

17. Ahrefs audit (see Section 10) — run once site is live and indexed to
    baseline organic traffic and identify which competitor pages are actually
    driving traffic vs just existing.

---

## Section 10 — Data Confidence Notes + What Ahrefs Would Add

### What this audit covered (on-site crawl)
- Title tags, meta descriptions, H1s for all competitor homepages
- Service page inventory and approximate word counts
- Geographic page inventory
- Trust signals visible on-page
- Conversion elements (CTAs, forms, phone, chat)
- Blog and content marketing presence
- Schema / structured data: NOT assessed (requires source inspection)

### What this audit did NOT cover
- Actual organic keyword rankings and traffic estimates
- Domain authority / backlink profiles
- Which pages are actually generating organic traffic (vs just existing)
- Historical ranking trajectory (rising vs falling competitors)
- Paid search activity (Google Ads competitors)

### Ahrefs Reports Needed

To complete a full competitive picture, export the following from Ahrefs
for each active domain:

1. Site Explorer > Organic Keywords — for: lloydwindowfilm.com,
   windowtintingphiladelphia.com, philafilm.com
   Shows: which keywords each competitor ranks for, positions, traffic
   volume. Reveals keyword gaps WFP could target.

2. Site Explorer > Referring Domains — for the same 3 domains
   Shows: backlink profile and domain authority. Reveals whether any
   competitor's ranking strength is link-based vs content-based.

3. Site Explorer > Top Pages — for lloydwindowfilm.com
   Shows: which pages are actually driving traffic. If their
   /philadelphia-pa/ page gets significant traffic, that validates
   the geo-page strategy for WFP.

4. Keywords Explorer > "window film Philadelphia" + "commercial window
   film Philadelphia" + "residential window film Philadelphia"
   Shows: exact monthly search volumes and difficulty scores.
   Confirms priority of new page builds.

---

## Competitor Quick Reference Card

| Metric                    | windowtintingphiladelphia.com | philafilm.com | suncontrolofpa.com | lloydwindowfilm.com |
|---------------------------|-------------------------------|---------------|--------------------|---------------------|
| Phone                     | (215) 709-7000                | (215) 715-1075 | (717) 755-7505*    | (215) 860-8610 |
| Geo match                 | YES                           | YES           | NO*                | YES |
| Site quality              | 2/5 (thin)                    | 2/5 (thin)    | 2/5 (fake)         | 3/5 (functional) |
| Brands named              | None                          | 3M/LLumar/SG/Vista | None          | 3M, LLumar |
| BBB                       | No                            | No            | No                 | No |
| Blog                      | No                            | 3 posts       | Empty              | No |
| Location pages            | 19 (thin)                     | 0             | 3 (wrong city)     | 6 (Philly metro) |
| /residential/ page        | Yes                           | Yes           | Yes                | Yes |
| /commercial/ page         | Yes                           | Yes           | Yes                | Yes |
| FAQ on service pages      | No                            | Yes           | No                 | No |
| Review widget             | No                            | No            | No                 | Static |
| Free quote form           | Yes                           | Yes           | CTA only           | Yes |
| Automotive services       | YES (primary)                 | No            | Yes                | No |
| Threat tier               | MEDIUM (SERP occupant)        | MEDIUM        | LOW (geo mismatch) | HIGH (real operator) |

* suncontrolofpa.com: 717 area code (York/Lancaster PA) confirmed. Not a Philadelphia local competitor.

---

*Report complete. All findings are for analysis purposes only. No site changes have been made.*
*Recommended next step: Ahrefs Site Explorer exports for lloydwindowfilm.com + windowtintingphiladelphia.com + philafilm.com to validate traffic and keyword overlap before building new pages.*
