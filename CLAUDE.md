# WFP Redesign — Claude Code Context

## Project Overview
This is a redesign of **windowfilmphiladelphia.net** built with **Astro v4**. The project lives at `/Volumes/ZV-SSD/work/transcending-creative/wfp-redesign` on Mac and `~/wfp-redesign` on the Windows PC (WSL Ubuntu). The GitHub repo is `ScottishGroupCompanies/wfp-redesign`.

**Dev server:** `npm run dev` → `localhost:4321`
**Build:** `npm run build` — always confirm 0 errors before finishing any task.

---

## Design System

### Colors (CSS Variables)
```css
--brand: #272E32        /* dark charcoal — primary dark bg */
--green: #81AB4C        /* primary green accent */
--green-light: #eef4e4  /* light green tint for icon bg */
--off-white: #F7F6F3    /* section background alt */
--light-gray: #EFEFED   /* borders, dividers */
--text-dark: #1a1a1a    /* headings */
--text-mid: #4a4a4a     /* body copy */
--text-light: #888      /* muted labels */
```

### Typography
```css
--font-serif: 'Playfair Display', serif   /* headings, display text */
--font-body: 'DM Sans', sans-serif        /* body copy, UI labels */
```

### Border Radius
```css
--radius-pill: 100px
--radius-xl: 40px
--radius-lg: 24px
--radius-md: 16px
```

### Heading Scale (global standard)
- H1 display: `clamp(36px, 5vw, 64px)`, weight 700, Playfair Display
- H2 section: `clamp(28px, 3.5vw, 48px)`, weight 700, letter-spacing -0.5px
- H3 sub: `clamp(22px, 2.5vw, 36px)`, weight 700
- Eyebrow labels: 11px, weight 700, letter-spacing 2px, uppercase, color `--green`

---

## File Structure

```
src/
├── components/
│   ├── Header.astro          — pill-style floating nav (shared, do not modify structure)
│   ├── Footer.astro          — dark footer with background image + rounded container
│   ├── InnerPageHero.astro   — full-bleed hero for all inner pages (see below)
│   ├── BrandLogos.astro      — infinite scrolling grayscale logo carousel
│   ├── CTAStrip.astro        — "Ready to transform?" CTA (homepage only currently)
│   ├── BackAndForthSection.astro — alternating image/text rows (benefits sub-pages)
│   ├── SEOHead.astro
│   └── BaseLayout.astro (in layouts/)
├── pages/
│   ├── index.astro           — Homepage (fully redesigned)
│   ├── benefits.astro        — Top-level benefits page (redesigned)
│   ├── benefits/             — 16 sub-pages, all using BAF layout + InnerPageHero
│   ├── cities/
│   │   ├── camden.astro      — TEMPLATE for all city pages
│   │   ├── philadelphia.astro
│   │   ├── reading.astro
│   │   └── upper-darby-township.astro
│   ├── applications/         — Not yet redesigned
│   ├── products/             — Not yet redesigned
│   ├── resources/            — Not yet redesigned
│   ├── applications.astro    — Not yet redesigned
│   ├── products.astro        — Not yet redesigned
│   ├── resources.astro       — Not yet redesigned
│   ├── process.astro         — Not yet redesigned
│   ├── contact.astro         — Not yet redesigned
│   ├── blog.astro            — Not yet redesigned
│   └── government-buildings.astro — Not yet redesigned
└── styles/
    └── global.css            — Global styles (nav, footer, resets, brand logos)
```

---

## Key Components

### InnerPageHero
**Path:** `src/components/InnerPageHero.astro`
**Props:** `title: string`, `bgImage: string`, `desc: string`
**Usage:** First element on every inner page, inside `<BaseLayout>` before `div.ip-page-body`
**Notes:**
- Title is plain text only — NO `<em>` or HTML tags in the prop
- The component handles the dark gradient overlay internally
- Desc text appears bottom-right of the hero

```astro
import InnerPageHero from '../components/InnerPageHero.astro'; // top-level pages
import InnerPageHero from '../../components/InnerPageHero.astro'; // sub-pages

<InnerPageHero
  title="Page Title Here"
  bgImage="/images/some-image.jpg"
  desc="Short descriptor text shown bottom-right."
/>
```

### ip-page-body Wrapper
Every inner page wraps all content (after InnerPageHero, before `</BaseLayout>`) in:

```html
<div class="ip-page-body">
  <!-- all page content -->
</div>
```

With this CSS (add to each page's `<style>` block):

```css
.ip-page-body {
  position: relative;
  background: #ffffff;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  margin-top: -40px;
  z-index: 10;
  overflow: visible;
  padding-bottom: 80px;
}
```

---

## Page Patterns

### Homepage (index.astro)
Fully redesigned. Sections in order:
1. `section.hp-hero` — full viewport background image, centered title + buttons
2. `div.hp-glass` — 3 frosted glass service cards (overlaps hero bottom, z-index 20, top: -120px)
3. `section.hp-body` — white rounded container (border-top-radius 40px, margin-top -40px)
   - hp-section-hd (What We Do)
   - hp-stats (dark bg, 4 stats)
   - hp-why (alternating BAF sections)
   - hp-apps (sticky scroll slider — 3 slides: Office, Retail, All Applications)
   - hp-testi (testimonials)
4. `section.hp-cta-section` — dark rounded CTA strip (border-bottom-radius 40px)
5. `footer.s-footer` — background image footer with rounded white container

### City Pages (camden.astro is the template)
Structure:
1. `<InnerPageHero />` — city-specific title, image, desc
2. `div.ip-page-body` — rounded corners top and bottom
   - `div.ip-hero` — 2-col grid: big h1 left, lead text + CTA buttons right (NO form, NO trust badges)
   - `div.ip-hero-img-wrap` — full-width rounded image with caption pill
   - `div.ip-content-wrap` — main content (1fr) + sticky sidebar (420px)
     - **Main:** intro text, callout box, film options grid, why choose list, installation process
     - **Sidebar:** CTA image card (sticky), Cities We Serve menu, certifications
   - `section.ip-testimonials` — dark bg, centered carousel, 3 slides, prev/next arrows
   - `div.ip-local` — map embed + neighborhood copy
   - `div.ip-faq` — accordion, 6 questions
   - `<BrandLogos />` — logo carousel
   - `div.ip-cta` — dark rounded "Ready to get started in [City]?" banner

### Benefits Sub-pages (16 pages)
Each uses `BackAndForthSection` component with alternating image/text rows + InnerPageHero + ip-page-body wrapper. Do not change the BAF content — only the hero and wrapper were added.

### Benefits Top-level (benefits.astro)
Fully redesigned with:
1. Intro section — 2-col split heading/text
2. Stats row — dark bg
3. Featured benefits — 3 numbered alternating rows (01/02/03)
4. All benefits grid — 5-col icon cards (15 items)
5. Why us grid — dark bg, 4-col with green divider lines
6. Chooser section — 6 goal cards
7. FAQ accordion
8. BrandLogos carousel
9. CTA banner

---

## Cities We Serve Menu (sidebar)
Used in city pages sidebar. The `ip-sidebar-city-link--active` class highlights the current city in green. Full list:
- Philadelphia PA → `/cities/philadelphia/`
- Camden NJ → `/cities/camden/`
- Reading PA → `/cities/reading/`
- Upper Darby PA → `/cities/upper-darby-township/`
- Cherry Hill NJ → `/contact/` (no dedicated page yet)
- Voorhees NJ → `/contact/`
- Haddonfield NJ → `/contact/`
- Collingswood NJ → `/contact/`
- Pennsauken NJ → `/contact/`
- Marlton NJ → `/contact/`
- Maple Shade NJ → `/contact/`

---

## BrandLogos Component
Infinite horizontal scrolling carousel. 12 logos (3M, LLumar, Vista, Solar Gard, Huper Optik, Casper, C-Bond, Madico, HDClear, Hanita Coatings, Solyx, Graffiti Shield). All grayscale with fade-in on hover. Uses CSS `@keyframes brand-scroll` animation. Edge fade via `mask-image` on the track wrapper.

**Placement:** Second to last section on every page, before the CTA banner.

---

## Footer
**Component:** `src/components/Footer.astro`
- Full-width background image: `/images/wfp-footer-bg-commercial-window-film.jpg`
- Dark base color: `#1a1f1e`
- `margin-top: -40px` so it tucks under the rounded bottom corners of the last content section
- Rounded white container inside with 3 columns: logo/tagline | resources + company menus | phone/email/social
- Footer gutter: copyright left, phone/location right

---

## Images Available
Key images in `/public/images/`:
- `wfp-landing-hero.jpg` — Philadelphia skyline (homepage hero, Philadelphia city page)
- `wfp-premium-films-v2.jpg` — film close-up (benefits page, Reading city page)
- `wfp-expert-installation-v1.jpg` — installation shot (Upper Darby, sidebar CTA cards)
- `wfp-footer-bg-commercial-window-film.jpg` — footer background
- `camden-window-film-company.jpg` — Camden city hero
- `2021-08-window-film-philadelphia-dark.png` — dark logo (footer)
- Various benefit-specific images: `2021-08-philadelphia-window-film-[benefit].jpg`
- Safety/security: `safety-and-security-window-film-philadelphia.png`

---

## What's Been Completed
- [x] Homepage full redesign (hero, glass cards, stats, why section, applications slider, testimonials, CTA, footer)
- [x] InnerPageHero component created
- [x] BrandLogos component converted to infinite scroll carousel
- [x] Footer redesigned (background image, rounded container, 3-col layout)
- [x] All 4 city pages (Camden template + Philadelphia, Reading, Upper Darby)
- [x] Benefits top-level page redesigned
- [x] All 16 benefits sub-pages — InnerPageHero + ip-page-body added
- [x] Camden page — full content redesign (new hero section, sticky sidebar, testimonial carousel, cities menu)

## What Still Needs Work
- [ ] Applications top-level page + sub-pages
- [ ] Products top-level page + sub-pages
- [ ] Resources top-level page + sub-pages
- [ ] Process page
- [ ] Contact page
- [ ] Blog page
- [ ] Government buildings page
- [ ] Homepage applications slider — slide-up animation (pending, deprioritized)
- [ ] Homepage rounded corners — bottom of hp-cta-section visibility (minor)
- [ ] Philadelphia, Reading, Upper Darby city pages — full content redesign (currently have InnerPageHero + ip-page-body but content not yet retrofitted to Camden template)

---

## Design Reference
The primary design reference is the **Spaciaz real estate WordPress theme** (Envato/ThemeForest). Key aesthetic elements being replicated:
- Pill-style floating navigation
- Full-bleed hero with large bottom-left title + bottom-right descriptor
- White rounded-corner body sections sliding up over hero
- Dark footer with background image and floating rounded container
- Numbered alternating content rows (01, 02, 03)
- 4-column icon grids on dark backgrounds
- Infinite logo carousels
- Full-width testimonial carousels on dark backgrounds

---

## Development Notes
- All page-level styles go in the `<style>` block of the `.astro` file, NOT in `global.css` (unless truly global)
- `global.css` contains: nav styles, footer styles, BrandLogos styles, CSS reset, font imports
- Never use `overflow: hidden` on `ip-page-body` — use `overflow: visible` to preserve card hover shadows
- The Hallmark skill is available at `/mnt/skills/user/hallmark/SKILL.md` — use it for all design tasks
- Always run `npm run build` and confirm 0 errors before completing any task
- Agent profile for design work: `hermes chat --profile site-builder` (Windows PC / WSL only)
