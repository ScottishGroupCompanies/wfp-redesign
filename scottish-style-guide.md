# Scottish Sites — Design Style Guide
**Version 1.0 | May 2026**
For use by the site-builder agent when rebuilding Scottish Window Tinting and Scottish Stained Glass micro sites.

---

## 1. Brand Colors

| Role | Name | Hex |
|------|------|-----|
| Primary action | Scottish Green | `#81AB4C` |
| Dark / structure | Charcoal | `#272E32` |
| Occasional accent | Red | `#CE4741` |
| Background alt | Off-white | `#F7F6F3` |
| Background surface | Light gray | `#EFEFED` |
| Body text | Near-black | `#1a1a1a` |
| Secondary text | Mid gray | `#4a4a4a` |
| Muted text | Light gray | `#888888` |
| Green tint (bg) | Green light | `#eef4e4` |
| Footer bg | Deep charcoal | `#1a1f22` |

### Color Usage Rules
- **Green `#81AB4C`** — primary CTAs, section eyebrows, checkmarks, hover accents, stat suffixes, footer logo dot, form submit buttons, service card bottom border on hover
- **Charcoal `#272E32`** — nav logo, ghost button borders, stats band background, CTA banner background, dark card backgrounds (quote form)
- **Red `#CE4741`** — used **sparingly and only** for: seasonal promo alert banners, urgent callouts, sale announcements. Never use as a primary CTA color. Never use on more than one element per page.
- **Off-white `#F7F6F3`** — alternating section backgrounds, service cards, testimonial cards, step cards, sidebar cards
- **Green light `#eef4e4`** — eyebrow pill backgrounds, step icon backgrounds, featured film card background, hero accent circle

---

## 2. Typography

### Font Families
| Role | Font | Weights Used |
|------|------|-------------|
| Headings / Display | Playfair Display (serif) | 400, 500, 600 |
| Body / UI | DM Sans (sans-serif) | 300, 400, 500, 600 |

Load via Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
```

### Type Scale
| Element | Font | Size | Weight | Notes |
|---------|------|------|--------|-------|
| Hero H1 | Playfair Display | clamp(38px, 5vw, 62px) | 600 | letter-spacing: -1px |
| Page H1 (inner) | Playfair Display | clamp(32px, 4vw, 52px) | 600 | letter-spacing: -0.8px |
| Section H2 | Playfair Display | clamp(28px, 3.5vw, 44px) | 600 | letter-spacing: -0.5px |
| Prose H2 | Playfair Display | 28px | 600 | margin-top: 48px |
| Card H3 | Playfair Display | 20px | 600 | — |
| Step H4 | Playfair Display | 18px | 600 | — |
| Body | DM Sans | 16px | 400 | line-height: 1.8 |
| Lead paragraph | DM Sans | 17–18px | 400 | line-height: 1.7 |
| Nav links | DM Sans | 14px | 500 | — |
| Eyebrow labels | DM Sans | 12px | 600 | uppercase, letter-spacing: 1px |
| Captions / meta | DM Sans | 13px | 400–500 | — |
| Small print | DM Sans | 12px | 400 | — |

### Typography Rules
- Use **italic** Playfair Display for emphasis within headlines (e.g. `<em>Done Right,</em>`) — color it `#81AB4C`
- Section eyebrows are always: uppercase, 12px, DM Sans 600, `#81AB4C`, letter-spacing 1px
- Never use system fonts (Arial, Helvetica) or other Google Fonts — maintain Playfair + DM Sans exclusively
- Headings use `line-height: 1.1–1.2`, body uses `line-height: 1.7–1.8`

---

## 3. Border Radius

| Token | Value | Use |
|-------|-------|-----|
| `--radius-sm` | 8px | Small badges, inner elements |
| `--radius-md` | 16px | Form inputs, icon containers, film cards |
| `--radius-lg` | 24px | Cards (service, testimonial, step, sidebar) |
| `--radius-xl` | 40px | Image containers, local map, hero images |
| `--radius-pill` | 100px | All buttons, nav CTA, eyebrow pills, trust badges, tag chips |

### Radius Rules
- **All buttons** use `border-radius: 100px` (full pill) — no exceptions
- **All cards** use `border-radius: 24px`
- **All image containers** use `border-radius: 40px`
- **CTA banner** uses `border-radius: 40px` — it's a large rounded dark block, not full-width
- Never use square corners anywhere on this site

---

## 4. Spacing

| Context | Value |
|---------|-------|
| Section vertical padding | `100px 5%` (homepage sections) |
| Section vertical padding (inner page) | `80px 5%` |
| Nav height | `68px` |
| Grid gap (cards) | `24px` |
| Grid gap (content+sidebar) | `60px` |
| Grid gap (why-us rows) | `80px` |
| Card internal padding | `28–36px` |
| Button padding | `14px 28px` |
| Horizontal page margin | `5%` both sides |

---

## 5. Buttons

### Primary Button (green filled)
```css
background: #81AB4C;
color: white;
padding: 14px 28px;
border-radius: 100px;
font-size: 15px;
font-weight: 500;
border: 2px solid #81AB4C;
transition: all 0.2s;
```
Hover: `background: #6e9640; border-color: #6e9640; transform: translateY(-2px)`

### Ghost Button (dark outline)
```css
background: transparent;
color: #272E32;
padding: 14px 28px;
border-radius: 100px;
font-size: 15px;
font-weight: 500;
border: 2px solid #272E32;
transition: all 0.2s;
```
Hover: `background: #272E32; color: white; transform: translateY(-2px)`

### White Button (on dark backgrounds)
```css
background: white;
color: #272E32;
padding: 14px 28px;
border-radius: 100px;
font-size: 15px;
font-weight: 600;
```
Hover: `background: #F7F6F3; transform: translateY(-2px)`

### Nav CTA Button
```css
background: #81AB4C;
color: white;
padding: 10px 22px;
border-radius: 100px;
font-size: 14px;
font-weight: 500;
```

### Form Submit Button
```css
width: 100%;
background: #81AB4C;
color: white;
padding: 14px;
border-radius: 100px;
font-size: 15px;
font-weight: 600;
border: none;
```

---

## 6. Navigation

- **Position:** `sticky`, `top: 0`, `z-index: 100`
- **Background:** `rgba(255,255,255,0.93)` with `backdrop-filter: blur(12px)`
- **Border bottom:** `1px solid rgba(0,0,0,0.07)`
- **Height:** `68px`
- **Logo:** Playfair Display 20px 600, charcoal `#272E32`, dot/period in green `#81AB4C`
- **Links:** DM Sans 14px 500, color `#4a4a4a`, hover `#272E32`
- **CTA:** Green pill button (see buttons above)
- **No hamburger menu in template** — implement mobile menu per project requirements

---

## 7. Page Sections

### Section Background Alternation Pattern
Alternate between white and off-white to create visual rhythm:
```
Alert banner     → Red #CE4741 (only when promo active)
Nav              → White (frosted)
Hero             → White
Logo strip       → Off-white #F7F6F3
Services         → White
Stats band       → Charcoal #272E32
Why Us           → Off-white #F7F6F3
How It Works     → Off-white #F7F6F3
Testimonials     → White
CTA Banner       → Charcoal #272E32 (rounded block, not full bleed)
Footer           → Deep charcoal #1a1f22
```

### Alert Banner (red — use only for promos)
- Full-width, `background: #CE4741`
- Centered text: white, 14px DM Sans 500
- Link: white, bold, underlined
- Remove this element when no active promotion

### Hero Section (homepage)
- 2-column grid: `1fr 1fr`, gap `60px`, min-height `92vh`
- Left: eyebrow pill → H1 → lead paragraph → dual CTAs → trust stats row
- Right: large rounded image (`border-radius: 40px`) with floating badge overlay (bottom-left) and circular accent element (top-right, `border-radius: 50%`)
- Trust stats row: 3 stats separated by 1px dividers

### Hero Section (inner / city page)
- 2-column grid: `1fr 420px`, gap `60px`
- Left: eyebrow pill → H1 → lead → dual CTAs → trust badge row
- Right: sticky quote form card (dark `#272E32` background)
- Below hero: full-width rounded hero image with caption pill overlay

### Logo / Location Scroll Strip
- Background: off-white
- Auto-scrolling marquee animation (CSS `translateX` loop, 28s)
- Items: Playfair Display 16px 600, color `#888`
- Label above: DM Sans 12px 600 uppercase, `#888`, letter-spacing 1px

### Services Grid
- 3-column grid, gap `24px`
- Cards: off-white background, `border-radius: 24px`, padding `36px 28px`
- Icon container: charcoal background, `border-radius: 16px`, 52×52px
- Bottom border accent: `height: 3px`, green, scales in on hover via CSS transform
- Card hover: `translateY(-4px)` + box-shadow

### Stats Band
- Full-width, charcoal background, padding `80px 5%`
- 4-column grid, vertical dividers `rgba(255,255,255,0.12)`
- Numbers: Playfair Display 52px 600, white
- Suffix (+ or ★): green `#81AB4C`
- Labels: DM Sans 14px, `rgba(255,255,255,0.55)`

### Why Us (alternating rows)
- 2-column grid `1fr 1fr`, gap `80px`
- Image: `height: 420px`, `border-radius: 40px`, floating pill label top-right
- Content: large ghost number (01, 02), serif H3, body, green checkmark list
- Even rows: `.reverse` class flips image to right
- Large background numbers: color `#EFEFED` (light gray), 64px Playfair

### How It Works
- 4-column grid, gap `24px`
- Cards: white bg, `border-radius: 24px`
- Step label: DM Sans 13px 600, green, letter-spacing 0.5px
- Icon container: green-light bg, `border-radius: 16px`
- Connector line between cards: `2px` horizontal, light gray, absolute positioned

### Testimonials
- 3-column grid, gap `24px`
- Cards: off-white, `border-radius: 24px`
- Stars: green `#81AB4C`, font-size 16px, letter-spacing 2px
- Quote text: italic, 15px, mid gray
- Avatar: 44×44px circle, charcoal bg, white initials

### CTA Banner
- **Not full-width** — `margin: 0 5%`, giving it rounded corners that float above the footer
- Background: charcoal `#272E32`, `border-radius: 40px`
- Padding: `72px 60px`
- Flexbox: H2 left, buttons right
- H2: Playfair 36px, white, italic em in green
- Buttons: white filled + green filled side by side

### Footer
- Background: `#1a1f22` (deeper than charcoal)
- 4-column grid: `2fr 1fr 1fr 1fr`
- Logo: Playfair 22px, white, dot in green
- Column headers: DM Sans 13px 600, uppercase, white
- Links: 14px, `rgba(255,255,255,0.55)`, hover white
- Bottom bar: `rgba(255,255,255,0.35)`, flex space-between

---

## 8. Inner Page Specific Elements

### Breadcrumb
- Background: off-white, bottom border light gray
- Links: green, 13px
- Separators: `›`, light gray text

### Sticky Quote Form Sidebar
- `position: sticky; top: 84px`
- Dark card: charcoal background, `border-radius: 24px`, padding `32px 28px`
- Inputs: `rgba(255,255,255,0.1)` bg, `rgba(255,255,255,0.2)` border, white text
- Input focus: border-color green
- Submit: full-width green pill button

### Callout Box
- Background: green-light `#eef4e4`
- Left border: `4px solid #81AB4C`
- Border radius: `0 16px 16px 0` (right side only)
- Text: `#3a5a1f`, 15px, line-height 1.7

### Film Options Grid
- 2-column grid, gap `16px`
- Cards: off-white, `border-radius: 24px`, `border: 2px solid transparent`
- Featured card: green border + green-light background
- "Most Popular" badge: green pill, white text, 11px
- Hover: green border + `translateY(-2px)`
- Price line: green, 13px, font-weight 600

### Sidebar Cards
- Background: off-white, `border-radius: 24px`, padding `24px`
- Review items: separated by light gray bottom borders
- Avatar circles: 36×36px, charcoal bg
- Certification badges: white bg, light gray border, `border-radius: 16px`

### Neighborhood / City Tags
- Background: white, `border: 1px solid #EFEFED`
- `border-radius: 100px` (pill)
- Font: DM Sans 13px 500, mid gray
- Used in: service area sidebar, local section

### FAQ Accordion
- Max-width `900px`, centered
- Items separated by `1px solid #EFEFED` borders
- Question: DM Sans 15px 600, charcoal
- Toggle icon: `+` in green, rotates 45° when open via CSS transform
- Answer: DM Sans 14px, mid gray, `display: none` toggled via JS class
- Only one item open at a time

### Related Cities Grid
- 5-column grid, gap `12px`
- City cards: white bg, `border-radius: 16px`, light gray border
- Hover: green border + green text + `translateY(-2px)`
- City name: 14px 500; State: 11px light gray below

---

## 9. Animations & Interactions

### Scroll Fade-In
All major content blocks animate in on scroll:
```css
.fade-in {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.65s ease, transform 0.65s ease;
}
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
```
Use `IntersectionObserver` with `threshold: 0.12` to trigger `.visible` class.

Stagger delays for grid children:
```css
.fade-in-delay-1 { transition-delay: 0.1s; }
.fade-in-delay-2 { transition-delay: 0.2s; }
.fade-in-delay-3 { transition-delay: 0.3s; }
```

### Location Strip Scroll
```css
@keyframes scroll-logos {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
animation: scroll-logos 28s linear infinite;
```
Duplicate content in HTML for seamless loop.

### Card Hover
- Cards: `transform: translateY(-4px)` + `box-shadow: 0 16px 48px rgba(0,0,0,0.1)`
- Buttons: `transform: translateY(-2px)`
- All transitions: `0.2–0.25s ease`

### Nav Frosted Glass
```css
background: rgba(255,255,255,0.93);
backdrop-filter: blur(12px);
```

### Service Card Bottom Accent
```css
.service-card::after {
  content: '';
  position: absolute; bottom: 0; left: 0; right: 0;
  height: 3px;
  background: #81AB4C;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s;
}
.service-card:hover::after { transform: scaleX(1); }
```

---

## 10. Layout Principles

- **Horizontal margins:** Always `5%` both sides — never full-bleed content except stats band, footer, and alert banner
- **Max content width:** No explicit max-width on sections — the `5%` margins handle it naturally
- **2-column grids:** Use `grid-template-columns: 1fr 1fr` for equal splits, `1fr 420px` for content+sidebar
- **3-column grids:** `repeat(3, 1fr)` for service/testimonial cards
- **4-column grids:** `repeat(4, 1fr)` for steps/stats
- **5-column grids:** `repeat(5, 1fr)` for city link grids
- **No max-width containers** — layout breathes via percentage margins
- **Sticky sidebar:** Inner page quote form uses `position: sticky; top: 84px`

---

## 11. Image Treatment

- All image containers use `border-radius: 40px` and `overflow: hidden`
- Images fill containers via `object-fit: cover` or `background: url() center/cover`
- **Floating overlays on images:**
  - Bottom-left badge: white card, `border-radius: 24px`, box-shadow, icon + text
  - Top-right circle: green-light background, `border-radius: 50%`, serif text
  - Pill label: white, `border-radius: 100px`, positioned top-right or bottom-left
- Caption pills on full-width images: white semi-transparent, `backdrop-filter: blur(8px)`, bottom-left

---

## 12. CSS Variables Reference

Include these in `:root` on every page:

```css
:root {
  --brand: #272E32;
  --brand-light: #3a4449;
  --green: #81AB4C;
  --green-light: #eef4e4;
  --red: #CE4741;
  --white: #ffffff;
  --off-white: #F7F6F3;
  --light-gray: #EFEFED;
  --text-dark: #1a1a1a;
  --text-mid: #4a4a4a;
  --text-light: #888;
  --radius-sm: 8px;
  --radius-md: 16px;
  --radius-lg: 24px;
  --radius-xl: 40px;
  --radius-pill: 100px;
}
```

---

## 13. Reference Files

| File | Purpose |
|------|---------|
| `scottish-design-template-homepage.html` | Full homepage layout with all sections |
| `scottish-design-template-inner-page.html` | City/service inner page with sidebar, FAQ, related cities |
| `scottish-style-guide.md` | This file — design rules and tokens |

---

## 14. Builder Agent Instructions

When rebuilding a Scottish site page using these templates:

1. **Always load both HTML template files** as design reference before writing any code
2. **Copy the CSS variables block** from the templates into every new page's `:root`
3. **Replace placeholder content** — city names, phone numbers, neighborhood tags, map embeds, related city links — with location-specific data
4. **Do not change colors, fonts, border-radius values, or animation patterns** — these are locked
5. **Red `#CE4741`** — only add the alert banner if there is an active promotion. Otherwise omit it entirely
6. **Images** — replace Unsplash placeholder URLs with actual Scottish project photos. Maintain the same container dimensions and border-radius
7. **Google Map** — replace the map placeholder div with an actual `<iframe>` embed for the city's service area
8. **FAQ content** — localize answers with city-specific details (local tinting laws, climate notes, scheduling info)
9. **Film prices** — confirm with client before publishing; placeholders are approximate
10. **Maintain section order** — do not reorder, remove, or add sections without explicit instruction
11. **WordPress/WPBakery conversion** — when converting HTML templates to WPBakery shortcodes, preserve all class names and inline styles; use WPBakery row/column structure for the grid layouts and Custom CSS fields for component-specific styles
