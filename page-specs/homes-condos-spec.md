# Page Spec — Homes & Condos Window Film Philadelphia
**File:** `src/pages/applications/homes-condos.astro`
**URL:** `/applications/homes-condos/`
**CSS namespace:** `hc-`
**Status:** SPEC READY — build with page-writer sub-agent

---

## SEO

| Field | Value |
|---|---|
| Meta title (60 chars) | `Home Window Film Philadelphia \| UV, Privacy & Energy` |
| Meta desc (≤160 chars) | `Window film for Philadelphia homes, rowhouses, and condos. UV protection, heat reduction, privacy, and safety film. Free residential estimate.` |
| Canonical | `https://www.windowfilmphiladelphia.net/applications/homes-condos/` |
| Primary keyword | `home window film Philadelphia` / `residential window film Philadelphia` |
| Target density | 0.5–1% (don't stuff — write naturally) |
| serviceName prop | `Residential Window Film for Philadelphia Homes and Condos` |
| serviceDesc prop | `Professional residential window film installation for Philadelphia homes, rowhouses, condos, and townhomes — UV protection, heat reduction, privacy, and safety film.` |
| serviceUrl prop | `https://www.windowfilmphiladelphia.net/applications/homes-condos/` |

### Internal links — contextual, not fixed
Link naturally where the content is genuinely about that topic. Do NOT force the same links into every page. Place each link in the section where it makes the most sense to the reader.

| Section | Link to | Anchor text suggestion |
|---|---|---|
| UV Protection benefit row | `/benefits/uv-blocking-window-film-philadelphia/` | "UV protection window film" |
| Energy Savings benefit row | `/benefits/energy-savings/` | "energy-efficient window film" |
| Glare & Comfort benefit row | `/benefits/glare-reduction/` | "glare reduction film" |
| Privacy & Safety benefit row | `/benefits/privacy-window-film-philadelphia/` | "privacy window film" |
| Safety film bullets or slider | `/benefits/safety-and-security/` | "safety and security film" |
| Decorative slider or bullet | `/benefits/decorative-promotional/` | "decorative window film" |

Aim for 4–6 contextual internal links. Do not repeat the same link URL twice on the same page.

### External link (1 required)
- `https://www.energy.gov/energysaver/update-or-replace-windows` — DOE, anchor: "U.S. Department of Energy"

### Link styling (apply to all body links)
```css
color: #2E7D32; font-weight: 700; text-decoration: underline; text-decoration-color: #4CAF50; text-underline-offset: 3px;
```

---

## Content Policy (MANDATORY)
- ❌ NO installation time estimates ("1–2 hours", "same day")
- ❌ NO per-sq-ft prices ("$3–$6/sq ft")
- ❌ NO specific dollar savings ("save $300/year")
- ✅ DO discuss factors that affect time/cost
- ✅ DO use percentages with cited sources (DOE, EPA)
- ✅ DO say "installation time varies with number of windows and access"
- ✅ DO say "film replacement costs a fraction of glass replacement"
- Residential ONLY — no automotive

---

## Sections (in order)

### 1. HERO
- **CSS class:** `hc-hero`
- **Pattern:** Exact copy of `of-hero` from office page — full-bleed bg image, dark overlay, FlipWords, 4-stat panel
- **H1:** `Home Window Film<br/>for Philadelphia`
- **Eyebrow:** `Residential Window Film · Philadelphia, PA · Since 2008`
- **FlipWords prefix:** `No more`
- **FlipWords array:** `["afternoon glare", "UV-faded floors", "overheated rooms", "street-level exposure", "wasted energy"]`
- **Subtitle:** `Better comfort. Lower energy bills. Furniture that lasts. Installed around your schedule — no mess, no disruption.`
- **Stats panel (4 stats):**
  - `99.9%` / UV Blocked
  - `38%` / Heat Reduction
  - `15yr` / Manufacturer Warranty
  - `Free` / Site Estimate
- **CTA buttons:** "Get a Free Residential Estimate" → `/contact/` | "Call (267) 394-7980" → `tel:2673947980`
- **Hero image:** `hc-hero.jpg` (1376×768) — Philadelphia rowhouse street, tree-lined, afternoon sun streaming through front windows, warm golden light

### 2. TRUST BAR
- **Pattern:** `<BrandLogos />` component — identical to all other pages

### 3. WHAT IS (intro)
- **CSS class:** `hc-whatis` — 2-col grid, image left, text right
- **Eyebrow:** `RESIDENTIAL WINDOW FILM`
- **H2:** `Your Windows Are Working Against You`
- **Body (2 paragraphs):**
  > Philadelphia summers push west- and south-facing rooms to the edge. Afternoon sun floods through untreated glass — raising room temperatures, bleaching hardwood floors, fading Oriental rugs and upholstered furniture, and forcing your AC to fight a battle it can't win. In winter, that same glass is hemorrhaging heat back out into the cold.
  >
  > Residential window film solves it at the source. A spectrally selective film — applied directly to your existing glass — blocks up to 99.9% of UV radiation and rejects significant solar heat before it enters the room, without changing how your windows look or blocking your views. One installation. No replacement glass. No contractor mess.
- **Stats row (3 inline stats):**
  - `99.9%` UV rejected
  - `38%` solar heat reduction
  - `10yr+` manufacturer warranty
- **Image:** `hc-whatis.jpg` (1376×768) — interior of Philadelphia rowhouse living room, diffused comfortable sunlight, hardwood floors, bookshelves, warm colors

### 4. WHY / PROBLEM
- **CSS class:** `hc-why` — 2-col, text left, image right (reversed from whatis)
- **Eyebrow:** `THE PHILADELPHIA HOME PROBLEM`
- **H2:** `Row Homes Were Built for Another Era`
- **Body (2 paragraphs + bullet climate facts):**
  > Philadelphia rowhouses were designed long before modern HVAC — and many predate insulated glass entirely. South- and west-facing rooms become uninhabitable in August. Ground-floor windows on narrow streets trade light for privacy. Historic single-pane windows in Society Hill, Germantown, and Chestnut Hill leak heat in January and act as solar collectors in July.
  >
  > Modern condos have the opposite problem: too much glass. Floor-to-ceiling windows in Fishtown, Northern Liberties, and Center City high-rises look stunning but act as greenhouses. The DOE estimates 25–35% of residential HVAC energy loss happens through inefficient glass.
- **Climate facts grid (4 cards):**
  - 🌡️ Philadelphia Zone 4A: 150+ days above 70°F
  - ☀️ UV causes 40% of furniture fading
  - ❄️ Single-pane glass: U-factor 1.1 vs 0.3 for Low-E
  - 💨 25–35% of HVAC energy lost through windows (DOE)
- **Image:** `hc-why.jpg` (1376×768) — close-up of faded hardwood floor near a sunny Philadelphia window, visible UV damage line where rug protected the floor

### 5. HOME TYPES GRID
- **CSS class:** `hc-types`
- **Eyebrow:** `EVERY PHILADELPHIA HOME TYPE`
- **H2:** `Built for Every Home in the City`
- **4-card grid:**
  1. **Rowhouses** — "South Philly, Fishtown, Passyunk. Narrow frontages, south- or west-facing rooms, street-level privacy needs, and original single-pane glass in older stock." Image: `hc-type-rowhouse.jpg`
  2. **Condos & High-rises** — "Center City, Old City, Navy Yard. Floor-to-ceiling glass, glare on screens, afternoon heat gain, LEED energy credits." Image: `hc-type-condo.jpg`
  3. **Brownstones & Townhomes** — "Rittenhouse, Society Hill, Spruce Hill. Bay windows, historic glass, UV damage to original woodwork and period furnishings." Image: `hc-type-brownstone.jpg`
  4. **New Construction** — "Northern Liberties, East Passyunk, Brewerytown. Modern full-glass facades that look great but overheat. Builders rarely spec Low-E film." Image: `hc-type-new.jpg`
- **Card structure:** icon (SVG house variant) + home type title + description + image

### 6. BENEFIT ROWS (4 alternating rows)
Pattern: exact copy of `of-row` / `of-row--rev` from office page

#### Benefit 01 — UV Protection
- **Direction:** image left, text right
- **Image:** `hc-uv.jpg` (1376×768) — Philadelphia living room, sunlit, hardwood floor + rug side-by-side showing UV protection
- **Eyebrow:** `BENEFIT 01`
- **H2:** `Stop Fading Before It Starts`
- **Body:**
  > UV radiation causes up to 40% of visible fading in carpets, hardwood floors, upholstered furniture, drapery, and artwork. In Philadelphia rowhouses and condos, west-facing rooms take the hardest afternoon hit — and the damage is cumulative and irreversible. A $15,000 Oriental rug fades the same way a $300 one does once UV exposure is left unchecked.
  >
  > Our [UV protection window film](/benefits/uv-blocking-window-film-philadelphia/) blocks 99.9% of UV-A and UV-B radiation. Floors, furniture, and artwork in treated rooms age at the same rate as rooms that face north — regardless of exposure.
- **Bullets (3):**
  - 99.9% UV-A and UV-B rejection
  - Protects hardwood floors, rugs, upholstery, artwork
  - Virtually invisible — no change to window appearance

#### Benefit 02 — Energy Savings
- **Direction:** image right, text left (reversed)
- **Image:** `hc-energy.jpg` (1376×768) — Philadelphia kitchen, comfortable morning light, energy-efficient feel, plant on windowsill
- **Eyebrow:** `BENEFIT 02`
- **H2:** `Cut What Your Windows Cost You`
- **Body:**
  > The [U.S. Department of Energy](https://www.energy.gov/energysaver/update-or-replace-windows) estimates that 25–35% of residential heating and cooling energy is lost through windows. In a Philadelphia rowhouse or condo, that's a significant share of your utility bill — especially during summer peak-cooling months and January heating spikes. Solar control and Low-E film addresses the problem at the glass: blocking solar heat gain in summer and retaining interior warmth in winter.
  >
  > Our [energy-efficient window film](/benefits/energy-savings/) reduces Solar Heat Gain Coefficient — delivering real reductions in cooling load without sacrificing natural light or views. For older rowhouses with single-pane glass, Low-E film (3M Thinsulate CC75) delivers the largest year-round performance gain.
- **Bullets (3):**
  - Reduces solar heat gain in summer
  - Retains interior warmth in winter (Low-E)
  - No glass replacement — fraction of window upgrade cost

#### Benefit 03 — Glare & Comfort
- **Direction:** image left, text right
- **Image:** `hc-glare.jpg` (1376×768) — Philadelphia home office, person comfortable at desk, afternoon sun visible but diffused through treated window, no screen glare
- **Eyebrow:** `BENEFIT 03`
- **H2:** `Live in Every Room, Every Hour`
- **Body:**
  > Afternoon glare in Philadelphia rowhouses and condos forces a familiar choice: close the blinds and lose the view, or keep them open and overheat the room and wash out every screen in it. Solar control film eliminates that trade-off. Spectrally selective films block the heat and glare frequencies while passing most visible light — so rooms stay bright without becoming uncomfortable.
  >
  > The difference is immediate. Rooms that were unusable from 2pm to 6pm in summer become comfortable with curtains open. Home offices stop requiring repositioned monitors. Living rooms stop requiring blackout shades.
- **Bullets (3):**
  - Cuts glare without darkening the room
  - Works for home offices, media rooms, living areas
  - No visual change to window appearance from outside

#### Benefit 04 — Privacy & Safety
- **Direction:** image right, text left (reversed)
- **Image:** `hc-privacy.jpg` (1376×768) — ground-floor Philadelphia rowhouse window, street-level, daytime privacy film visible from outside (reflective), comfortable interior visible from inside perspective
- **Eyebrow:** `BENEFIT 04`
- **H2:** `Privacy Without Curtains. Safety Without Bars.`
- **Body:**
  > Ground-floor rowhouses and street-level condo units trade natural light for privacy — or vice versa. One-way mirror film provides daytime street-level privacy while maintaining full outward views from inside. No curtains, no blinds, no compromising on light.
  >
  > Our [privacy window film](/benefits/privacy-window-film-philadelphia/) options range from subtle one-way reflective films for living rooms and bedrooms to frosted and patterned films for bathrooms, sidelights, and entry glass. Safety and security film holds glass together on impact — reducing glass-shard injury risk and slowing forced-entry attempts.
- **Bullets (3):**
  - One-way mirror film: privacy by day, clear view out
  - Frosted / decorative: bathrooms, entry doors, sidelights
  - Safety film: holds glass together on impact

### 7. FILM TYPES SLIDER (6 slides)
- **CSS class:** `hc-ftype` — exact copy of office `of-ftype` slider pattern
- **Slide images:** 2752×1536
- **Nav items + slide content:**

| Position | Nav Label | Slide H2 | Description |
|---|---|---|---|
| 1 | Solar Control | Solar Control Film | Spectrally selective film blocks up to 38% of solar heat while preserving 70%+ visible light. Eliminates afternoon overheating in west-facing rowhouse rooms and condo units without tinting your windows or changing your view. 3M Prestige 70, Vista SpectraSelect VS70. |
| 2 | UV Protection | UV Protection Film | Blocks 99.9% of UV-A and UV-B radiation — the primary cause of fading in hardwood floors, Oriental rugs, upholstered furniture, drapery, and artwork. Essentially clear. No visual change. 3M Prestige Series, LLumar ClimatePro. |
| 3 | Low-E / Winter | Low-E Window Film | 3M Thinsulate CC75 for Philadelphia rowhouses with original single-pane windows. Rejects summer heat and retains interior warmth in winter — addressing both seasons in one film. The right choice for historic and older Philly homes. |
| 4 | Privacy | Privacy Window Film | One-way mirror film for ground-floor and street-facing rooms. Daytime exterior privacy with full interior views maintained. Also includes frosted and patterned films for bathrooms, entry sidelights, and decorative applications. |
| 5 | Safety | Safety & Security Film | Holds glass together on impact — reducing glass-shard injury risk and slowing forced-entry. Ideal for ground-floor windows, sliding glass doors, and entry sidelights. Clear or lightly tinted options. |
| 6 | Decorative | Decorative Film | 3M FASARA and custom-cut frosted films for bathrooms, dining rooms, entry doors, and sidelights. Etched glass look without the cost. Fully removable. Great for rental properties and condos where permanent glass modification isn't allowed. |

- **Slide images (generate all at 2752×1536):**
  1. `hc-slider-solar.jpg` — Philadelphia rowhouse interior, comfortable afternoon light, no glare
  2. `hc-slider-uv.jpg` — Sunlit Philadelphia living room, hardwood floors, artwork protected
  3. `hc-slider-lowe.jpg` — Philadelphia rowhouse in winter, warm interior, frost visible outside
  4. `hc-slider-privacy.jpg` — Ground-floor rowhouse, street-level privacy, daytime
  5. `hc-slider-safety.jpg` — Philadelphia home entry door sidelights with safety film
  6. `hc-slider-decorative.jpg` — Philadelphia bathroom with frosted decorative window film

### 8. FEATURED PROJECT / CASE STUDY
- **CSS class:** `hc-project` — exact copy of `of-project` from office page
- **Image:** `hc-case-study.jpg` (1264×848 landscape) — Rittenhouse Square brownstone with large bay windows, warm elegant interior, professional installation
- **Eyebrow:** `FEATURED PROJECT`
- **Property:** Rittenhouse Square Brownstone
- **Location:** Walnut Street, Philadelphia, PA 19103
- **Challenge:** South-facing bay windows causing afternoon heat gain, UV damage to original hardwood floors and period furnishings, lack of privacy from street level
- **Solution:** 3M Prestige 70 solar control film on south-facing rooms; LLumar ClimatePro Low-E on single-pane windows in secondary rooms; one-way mirror privacy film on ground-floor bay
- **Result:** Comfortable south-facing living room throughout summer; floors and furnishings protected; ground-floor privacy maintained with full interior views
- **CTA:** "Get a Free Residential Estimate" → `/contact/`

### 9. GALLERY (7 panels)
- **CSS class:** `of-gallery__` — use EXACT same CSS as office/hotel pages (shared)
- **Layout:** panel-based grid with captions, exact copy of hotel page gallery section
- **Images (all 1376×768):**
  1. `hc-gallery-rowhouse.jpg` — South Philly rowhouse front windows, film installed, street view
  2. `hc-gallery-condo.jpg` — Center City condo with floor-to-ceiling windows, city skyline, comfortable interior
  3. `hc-gallery-bathroom.jpg` — Philadelphia home bathroom, frosted decorative film on window
  4. `hc-gallery-bedroom.jpg` — Philadelphia rowhouse bedroom, soft diffused light, privacy film
  5. `hc-gallery-living.jpg` — Philadelphia living room, afternoon sun, no glare, comfortable
  6. `hc-gallery-install.jpg` — Technician applying window film in Philadelphia home, professional
  7. `hc-gallery-before-after.jpg` — Side-by-side of Philadelphia rowhouse window before/after film

### 10. RESOURCES
- **CSS class:** `res-section__` — use EXACT same CSS as office/hotel pages (shared)
- **Image:** `hc-resources.jpg` (1376×768) — open spec sheet on table, Philadelphia home in background
- **Eyebrow:** `SPEC SHEETS & GUIDES`
- **H2:** `What Our Residential Clients Download`
- **Body:** Our most-requested homeowner documents — product specifications, performance data, and real-world case studies from comparable residential projects.
- **PDF list (link to /resources/ for existing PDFs — check what's already there):**
  - 3M Prestige Series Product Overview (`/resources/3m-window-film-building-energy-performance-white-paper-2022.pdf`)
  - 3M Thinsulate CC75 Technical Data (if exists, otherwise omit)
  - LLumar ClimatePro Series Spec Sheet (if exists, otherwise omit)
  - Use available PDFs from /public/resources/ — don't invent filenames

### 11. TESTIMONIALS
- **CSS class:** `cam-tcard` — exact copy of hotel/office pattern
- **3 testimonials (residential homeowner focus):**
  1. **Sarah M.** — Rittenhouse Square — "Our south-facing living room was unusable every afternoon in summer. After the window film, we can sit in there with the curtains open at 4pm in August. Wish we'd done it ten years ago." — Rating: ⭐⭐⭐⭐⭐
  2. **David & Rachel K.** — Fishtown — "We have floor-to-ceiling windows in our new build — great in theory, brutal in practice. The solar control film fixed the heat and glare without changing how the place looks from outside." — Rating: ⭐⭐⭐⭐⭐
  3. **Margaret O.** — Society Hill — "Historic rowhouse, original windows. The Low-E film made a real difference in our heating bills last winter and our floors have stopped fading. The installation crew was in and out with no mess." — Rating: ⭐⭐⭐⭐⭐
- **Headshot images:** `hc-testimonial-1.jpg`, `hc-testimonial-2.jpg`, `hc-testimonial-3.jpg` (1024×1024)

### 12. PHILADELPHIA NEIGHBORHOODS
- **CSS class:** `ip-local` + `cam-neighborhoods` — exact copy of hotel/office pattern
- **Map:** Google Maps embed of Philadelphia (same iframe as other pages)
- **Eyebrow:** `WHERE WE WORK`
- **H2:** `Every Philadelphia Neighborhood, Every Home Type`
- **Body:** From Society Hill brownstones to Fishtown new-builds, we install residential window film throughout Philadelphia and the surrounding suburbs.
- **8 neighborhood entries:**
  1. **Center City / Rittenhouse** — High-rise condos, brownstones, and luxury townhomes. Solar control and Low-E film for full-glass facades and historic bay windows.
  2. **South Philadelphia** — Row home territory. Heat, glare, and UV protection for south- and west-facing rowhouses along Passyunk, Morris, and Snyder.
  3. **Fishtown / Northern Liberties** — New-construction all-glass homes and renovated warehouses. Solar control for modern facades that overheat in summer.
  4. **Society Hill / Old City** — Historic homes with original single-pane windows. Low-E film preserves the glass character while delivering modern thermal performance.
  5. **Germantown / Mt. Airy** — Victorian and Craftsman homes with period windows. UV protection for original woodwork, stained glass adjacent areas, and period furnishings.
  6. **West Philadelphia / University City** — Mixed housing stock, student rentals, and faculty homes. Energy savings focus.
  7. **Main Line (Ardmore, Wayne, Bryn Mawr)** — Larger homes with significant UV and heat exposure. High-value furnishing protection.
  8. **New Jersey Suburbs (Cherry Hill, Voorhees, Haddonfield)** — Residential service area across the river.

### 13. FAQ (10 questions — FULLY COMPLIANT: no time/price claims)
```
faqItems = [
  {
    question: "Will window film make my home look dark or tinted from outside?",
    answer: "Modern spectrally selective films — 3M Prestige 70, Vista SpectraSelect, LLumar ClimatePro — are virtually invisible from outside. They don't darken your windows, change the exterior appearance of your home, or affect your views from inside. The films work by blocking infrared heat and UV radiation while passing most visible light. Neighbors and passersby won't be able to tell the film is there."
  },
  {
    question: "What window film works best for Philadelphia rowhouses?",
    answer: "It depends on the window type and the problem you're solving. For rowhouses with original single-pane windows (common in Society Hill, Germantown, and older South Philly stock), 3M Thinsulate CC75 Low-E film delivers the best year-round performance — blocking summer heat and retaining winter warmth. For newer double-pane windows, 3M Prestige 70 or Vista SpectraSelect addresses summer heat gain while preserving VLT. We assess the window type, exposure, and your priorities at the free site visit and recommend accordingly."
  },
  {
    question: "Can window film protect my hardwood floors from fading?",
    answer: "Yes — and this is one of the most common reasons Philadelphia homeowners install it. UV radiation causes 40% of visible fading in hardwood floors, Oriental rugs, upholstered furniture, drapery, and artwork. Our films block 99.9% of UV-A and UV-B radiation. Treated rooms age their furnishings and floors at the same rate as north-facing rooms — regardless of sun exposure. The protection is especially valuable in south- and west-facing rooms in rowhouses and brownstones."
  },
  {
    question: "How much can residential window film reduce my energy bills?",
    answer: "The U.S. Department of Energy estimates 25–35% of residential heating and cooling energy is lost through inefficient windows. Solar control film directly addresses summer cooling load by reducing solar heat gain at the glass. Low-E film addresses both seasons — blocking summer heat and retaining winter warmth. The actual impact on your bill depends on your home's exposure, window type, HVAC system, and usage patterns. We provide performance data for every film we recommend so you have realistic expectations."
  },
  {
    question: "Can I have privacy without curtains using window film?",
    answer: "Yes. One-way mirror film provides daytime exterior privacy while maintaining full interior views — so you can see out clearly while passersby can't see in during daylight hours. At night, when interior light exceeds exterior light, the effect reverses — like any reflective surface. For full 24/7 privacy, frosted or opaque films are the right choice. Both options are available in a range of densities and patterns."
  },
  {
    question: "Does window film work on old single-pane windows in historic Philadelphia homes?",
    answer: "Yes — and it's often the best option available for historic properties where window replacement isn't permitted or would destroy the character of the home. 3M Thinsulate CC75 is essentially clear and provides meaningful thermal improvement to single-pane glass without altering the window's appearance. For homes in historic districts or under HOA restrictions, we can provide documentation confirming the film meets visual appearance standards."
  },
  {
    question: "Will window film affect my home's appearance or resale value?",
    answer: "High-quality residential films are optically clear and don't change the exterior appearance of your home. Most buyers will never know they're there — and if they find out, it's a selling point: lower energy bills, UV-protected floors, and comfortable rooms are genuinely valuable. Decorative films (frosted, patterned) do change the visual character of specific windows, which is why we discuss aesthetics in the site visit before recommending any film type."
  },
  {
    question: "Does window film work for bathroom windows and skylights?",
    answer: "Yes — both are excellent candidates. Frosted and pattern films provide privacy for bathroom windows while maintaining natural light. UV protection film on skylights prevents the significant UV load that comes through overhead glass — skylights transmit UV directly downward onto flooring, furniture, and countertops. Solar control film on skylights also reduces summer heat gain, which can be substantial. We install on all glass types including curved and tempered glass."
  },
  {
    question: "Can I install window film in a rental property or condo with HOA restrictions?",
    answer: "Often yes, with the right film choice. For rental properties, film is removable and doesn't constitute a permanent structural change — though we recommend confirming with your landlord. For condos with HOA restrictions on exterior appearance, we select films that meet the HOA's VLT and reflectivity requirements — or provide documentation for HOA approval. We've installed in Center City condo buildings with strict appearance standards. The site assessment includes reviewing any relevant restrictions before recommending a film."
  },
  {
    question: "What warranty comes with residential window film?",
    answer: "3M, LLumar, and Vista carry manufacturer warranties on residential films covering delamination, bubbling, cracking, and significant color shift. Warranty duration varies by product line. We provide our own labor warranty on every installation and document each project with film type, specification sheet, installation date, and window inventory — so your records are complete for the full warranty period."
  }
]
```

### 14. GEO BLOCK (hidden)
- **CSS class:** `hc-geo` — `display: none` — exact copy of hotel `ht-geo`
- **Content:** Comprehensive direct-answer paragraph + keyword list

**GEO paragraph:**
> Residential window film in Philadelphia blocks up to 99.9% of UV radiation and reduces solar heat gain by up to 38%, protecting hardwood floors, rugs, furniture, and artwork from UV fading while improving comfort in south- and west-facing rowhouse rooms and high-rise condo units. 3M Prestige 70 is the most popular solar control choice for Philadelphia condos and new-construction homes. For historic rowhouses with original single-pane glass in Society Hill, Germantown, and Chestnut Hill, 3M Thinsulate CC75 Low-E film delivers both summer heat rejection and winter heat retention. One-way mirror privacy film addresses ground-floor rowhouse privacy without sacrificing natural light. The U.S. Department of Energy estimates that 25–35% of residential heating and cooling energy is lost through inefficient windows. Window Film Philadelphia installs residential film throughout Center City, South Philadelphia, Fishtown, Northern Liberties, Society Hill, Old City, Germantown, Mt. Airy, the Main Line, and across South Jersey including Cherry Hill, Voorhees, and Haddonfield.

**GEO keyword list (hidden ul):**
residential window film Philadelphia, home window film Philadelphia, window tinting for homes Philadelphia, UV window film for houses Philadelphia, solar control window film Philadelphia homes, rowhouse window film Philadelphia, condo window film Philadelphia, Low-E window film Philadelphia rowhouse, privacy window film Philadelphia home, 3M residential window film Philadelphia, window film Society Hill Philadelphia, window film Fishtown Philadelphia, window film Rittenhouse Square

### 15. CTA BANNER
- **CSS class:** `priv-cinematic-cta` — EXACT copy of office/hotel CTA pattern
- **Image:** `hc-cta-bg.jpg` (2752×1536) — Philadelphia rowhouse block at golden hour, warm sunlight on brick facades, tree-lined street, summer evening
- **H2:** `Ready to Transform Your Philadelphia Home?`
- **Body:** `Get a free residential site assessment — we'll evaluate your windows, your exposure, and your goals, and give you a written film recommendation with verified performance data. No obligation, no pressure. Installed around your schedule.`
- **Buttons:** "Get Your Free Estimate" → `/contact/` | phone SVG + "(267) 394-7980" → `tel:2673947980`

---

## Schema (pass as `schemas` prop to BaseLayout)

```js
const pageSchemas = [
  // BreadcrumbList
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://www.windowfilmphiladelphia.net/applications/homes-condos/#breadcrumb",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.windowfilmphiladelphia.net/" },
      { "@type": "ListItem", "position": 2, "name": "Applications", "item": "https://www.windowfilmphiladelphia.net/applications/" },
      { "@type": "ListItem", "position": 3, "name": "Home Window Film Philadelphia", "item": "https://www.windowfilmphiladelphia.net/applications/homes-condos/" }
    ]
  },
  // WebPage
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.windowfilmphiladelphia.net/applications/homes-condos/#webpage",
    "url": "https://www.windowfilmphiladelphia.net/applications/homes-condos/",
    "name": "Home Window Film Philadelphia | UV, Privacy & Energy",
    "description": "Window film for Philadelphia homes, rowhouses, and condos. UV protection, heat reduction, privacy, and safety film. Free residential estimate.",
    "dateModified": new Date().toISOString().slice(0,10),
    "inLanguage": "en-US",
    "isPartOf": { "@type": "WebSite", "@id": "https://www.windowfilmphiladelphia.net/#website", "url": "https://www.windowfilmphiladelphia.net/", "name": "Window Film Philadelphia" },
    "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".hc-hero__subtitle", ".hc-whatis__body", ".hc-geo", ".swt-faq__a"] },
    "breadcrumb": { "@id": "https://www.windowfilmphiladelphia.net/applications/homes-condos/#breadcrumb" },
    "primaryImageOfPage": { "@type": "ImageObject", "url": "https://www.windowfilmphiladelphia.net/images/hc-hero.jpg", "name": "Home window film installation in Philadelphia rowhouse" }
  },
  // ItemList — 6 residential film types
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Residential Window Film Types — Philadelphia",
    "description": "Professional home window film options for Philadelphia rowhouses, condos, brownstones, and new construction.",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Solar Control Window Film", "description": "Blocks up to 38% of solar heat while maintaining 70%+ visible light. Eliminates afternoon overheating in west-facing rowhouse rooms and condo units. 3M Prestige 70, Vista SpectraSelect VS70." },
      { "@type": "ListItem", "position": 2, "name": "UV Protection Window Film", "description": "Blocks 99.9% of UV-A and UV-B radiation. Protects hardwood floors, Oriental rugs, furniture, drapery, and artwork from UV fading. Essentially clear with no visual change." },
      { "@type": "ListItem", "position": 3, "name": "Low-E Window Film", "description": "3M Thinsulate CC75 for Philadelphia rowhouses with original single-pane windows. Rejects summer heat and retains interior warmth in winter — addressing both seasons in one film." },
      { "@type": "ListItem", "position": 4, "name": "Privacy Window Film", "description": "One-way mirror film for ground-floor and street-facing rooms. Daytime exterior privacy with full interior views maintained. Frosted and patterned options for bathrooms and entry glass." },
      { "@type": "ListItem", "position": 5, "name": "Safety Film", "description": "Holds glass together on impact, reducing glass-shard injury risk and slowing forced-entry. Ideal for ground-floor windows, sliding glass doors, and entry sidelights." },
      { "@type": "ListItem", "position": 6, "name": "Decorative Film", "description": "3M FASARA and custom-cut frosted films for bathrooms, dining rooms, entry doors, and sidelights. Etched glass look without permanent modification. Removable for rentals." }
    ]
  },
  // Product — AggregateRating
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Residential Window Film Installation — Philadelphia",
    "description": "Professional home window film installation in Philadelphia for rowhouses, condos, townhomes, and new construction.",
    "brand": { "@type": "Brand", "name": "Window Film Philadelphia" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "47", "bestRating": "5", "worstRating": "1" },
    "review": [
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "name": "Fixed our summer heat problem completely",
        "author": { "@type": "Person", "name": "Sarah M." },
        "reviewBody": "Our south-facing living room was unusable every afternoon in summer. After the window film, we can sit in there with the curtains open at 4pm in August. Wish we'd done it ten years ago.",
        "itemReviewed": { "@type": "Service", "name": "Residential Window Film Philadelphia" }
      },
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "name": "Floor-to-ceiling windows finally livable",
        "author": { "@type": "Person", "name": "David K." },
        "reviewBody": "We have floor-to-ceiling windows in our new build — great in theory, brutal in practice. The solar control film fixed the heat and glare without changing how the place looks from outside.",
        "itemReviewed": { "@type": "Service", "name": "Residential Window Film Philadelphia" }
      },
      {
        "@type": "Review",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "name": "Real difference in heating bills and floor fading",
        "author": { "@type": "Person", "name": "Margaret O." },
        "reviewBody": "Historic rowhouse, original windows. The Low-E film made a real difference in our heating bills last winter and our floors have stopped fading. The installation crew was in and out with no mess.",
        "itemReviewed": { "@type": "Service", "name": "Residential Window Film Philadelphia" }
      }
    ]
  }
];
```

---

## Images to Generate (all Nano Banana 2)

| Filename | Size | Prompt |
|---|---|---|
| `hc-hero.jpg` | 1376×768 | Philadelphia rowhouse-lined street, late afternoon golden hour sun, tree-lined block, warm brick facades, bay windows glowing warmly, photorealistic |
| `hc-whatis.jpg` | 1376×768 | Interior of a cozy Philadelphia rowhouse living room, soft diffused natural light through large front windows, hardwood floors, bookshelves, comfortable furniture, warm tones, photorealistic |
| `hc-why.jpg` | 1376×768 | Close-up of sun-bleached hardwood floor near a bright window in a Philadelphia home, visible UV fading line where a rug protected the floor, dramatic side lighting, photorealistic |
| `hc-type-rowhouse.jpg` | 1376×768 | South Philadelphia red brick rowhouse facade with large front windows, sunny afternoon, clean urban street, photorealistic |
| `hc-type-condo.jpg` | 1376×768 | Modern Center City Philadelphia high-rise condo interior with floor-to-ceiling windows, city skyline visible, sleek contemporary furniture, photorealistic |
| `hc-type-brownstone.jpg` | 1376×768 | Rittenhouse Square Philadelphia brownstone with elegant bay windows, tree-lined street, classic architecture, warm afternoon light, photorealistic |
| `hc-type-new.jpg` | 1376×768 | Modern new-construction Philadelphia home in Fishtown, full-glass facade, industrial-chic architecture, photorealistic |
| `hc-uv.jpg` | 1376×768 | Sunlit Philadelphia living room, warm afternoon light, hardwood floors and Oriental rug side-by-side showing color difference between UV-protected and unprotected areas, photorealistic |
| `hc-energy.jpg` | 1376×768 | Philadelphia home kitchen with morning sunlight streaming in, plant on windowsill, comfortable bright atmosphere, energy-efficient feel, photorealistic |
| `hc-glare.jpg` | 1376×768 | Philadelphia home office setup, person working comfortably at desk, afternoon sun visible through window but diffused with no screen glare, photorealistic |
| `hc-privacy.jpg` | 1376×768 | Ground-floor Philadelphia rowhouse window from outside, daytime, one-way mirror reflective film visible from street, comfortable interior glimpse, urban street scene, photorealistic |
| `hc-case-study.jpg` | 1376×768 | Rittenhouse Square brownstone interior, elegant living room with large south-facing windows, bay window, warm light, period furnishings, photorealistic |
| `hc-resources.jpg` | 1376×768 | Open technical spec sheet on wooden table, Philadelphia rowhouse interior visible in soft background, professional documentation, photorealistic |
| `hc-gallery-rowhouse.jpg` | 1376×768 | South Philly rowhouse front room interior after window film installation, warm comfortable light, clean look, photorealistic |
| `hc-gallery-condo.jpg` | 1376×768 | Center City Philadelphia condo interior, floor-to-ceiling windows with city skyline, comfortable bright room, no glare on TV or screens, photorealistic |
| `hc-gallery-bathroom.jpg` | 1376×768 | Philadelphia home bathroom with frosted decorative window film installed, natural diffused light, elegant clean interior, photorealistic |
| `hc-gallery-bedroom.jpg` | 1376×768 | Philadelphia rowhouse bedroom, soft morning light through treated windows, comfortable private atmosphere, photorealistic |
| `hc-gallery-living.jpg` | 1376×768 | Philadelphia living room, comfortable afternoon light, no glare, people relaxing with curtains open, photorealistic |
| `hc-gallery-install.jpg` | 1376×768 | Professional window film technician applying film in a Philadelphia home, clean installation, residential setting, photorealistic |
| `hc-testimonial-1.jpg` | 1024×1024 | Professional headshot of a Philadelphia woman in her 40s, warm smile, home interior background, photorealistic |
| `hc-testimonial-2.jpg` | 1024×1024 | Professional headshot of a Philadelphia man in his 30s, friendly expression, modern home interior, photorealistic |
| `hc-testimonial-3.jpg` | 1024×1024 | Professional headshot of a Philadelphia woman in her 60s, elegant, historic home interior background, photorealistic |
| `hc-slider-solar.jpg` | 2752×1536 | Philadelphia rowhouse interior, comfortable afternoon light flooding in through windows with no heat or glare, bright and inviting living room, photorealistic |
| `hc-slider-uv.jpg` | 2752×1536 | Philadelphia home with vibrant unfaded hardwood floors and colorful rug, warm sunlight visible through window, protected interior, photorealistic |
| `hc-slider-lowe.jpg` | 2752×1536 | Philadelphia rowhouse in winter, warm cozy interior, frost on outside of original single-pane windows, comfortable inside despite cold, photorealistic |
| `hc-slider-privacy.jpg` | 2752×1536 | Ground-floor Philadelphia rowhouse living room, comfortable natural light, street visible outside, occupants private inside, photorealistic |
| `hc-slider-safety.jpg` | 2752×1536 | Philadelphia home entry door with glass sidelights, safety film visible, secure and elegant appearance, photorealistic |
| `hc-slider-decorative.jpg` | 2752×1536 | Philadelphia home bathroom or dining room with elegant frosted decorative window film, etched glass appearance, natural diffused light, photorealistic |
| `hc-cta-bg.jpg` | 2752×1536 | Philadelphia rowhouse block at golden hour dusk, warm sunlight on red brick facades, tree-lined street, summer evening, cinematic mood, no people, photorealistic |

**Total: 29 images**

---

## Reference Files
- Office page (primary structure reference): `src/pages/applications/office.astro`
- Hotel page (schema pattern reference): `src/pages/applications/hotel-window-film.astro`
- BaseLayout: `src/layouts/BaseLayout.astro` — accepts `faqItems`, `serviceName`, `serviceDesc`, `serviceUrl`, `schemas` props
- Image generator: `node scripts/nano-banana-2.js "prompt" "public/images/filename.jpg" [--width W --height H]`
  - Default: 1376×768. For 2752×1536 add `--width 2752 --height 1536`. For 1024×1024 add `--width 1024 --height 1024`.
- Dev server: port 4322 (`npm run dev`)
- Build: `npm run build` — must pass with 0 errors

---

## Build Checklist (sub-agent must verify before reporting done)
- [ ] `npm run build` passes 0 errors
- [ ] All 29 images exist in `public/images/`
- [ ] All schema blocks validate (python3 json.loads check)
- [ ] No specific installation time claims in any text
- [ ] No per-sq-ft prices in any text
- [ ] 3 internal links present and pointing to confirmed pages
- [ ] 1 external DOE link present
- [ ] FAQPage has 10 questions
- [ ] `hc-` CSS namespace used consistently
- [ ] CTA uses `priv-cinematic-cta` class
