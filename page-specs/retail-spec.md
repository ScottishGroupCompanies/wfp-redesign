# Page Spec — Retail Window Film Philadelphia
**File:** `src/pages/applications/retail.astro`
**URL:** `/applications/retail/`
**CSS namespace:** `re-` (for any NEW classes only — copy all `of-` CSS verbatim from office.astro)
**Build method:** Clone `src/pages/applications/office.astro` then replace content throughout
**Status:** SPEC READY — build with page-writer sub-agent

---

## SEO

| Field | Value |
|---|---|
| Meta title (≤60 chars) | `Retail Window Film Philadelphia \| UV, Energy & Security` |
| Meta desc (≤160 chars) | `Window film for Philadelphia retail stores: protect merchandise from UV fading, reduce cooling costs, improve shopper comfort, and guard against smash-and-grab. Get a free quote.` |
| Canonical | `https://www.windowfilmphiladelphia.net/applications/retail/` |
| Primary keyword | `retail window film Philadelphia` |
| Target density | 0.5–1% |
| serviceName | `Retail Window Film Installation Philadelphia` |
| serviceDesc | `Professional window film installation for Philadelphia retail stores — UV merchandise protection, energy savings, glare reduction, security film, and decorative branding.` |
| serviceUrl | `https://www.windowfilmphiladelphia.net/applications/retail/` |

### Internal links — contextual
| Section | Link | Anchor text |
|---|---|---|
| UV row (merchandise fading) | `/benefits/uv-blocking-window-film-philadelphia/` | `UV-blocking window film` |
| Energy row | `/benefits/energy-savings/` | `energy-saving window film` |
| Glare row | `/benefits/glare-reduction/` | `glare reduction film` |
| Security row | `/benefits/safety-and-security/` | `security window film` |
| Decorative film type slide | `/benefits/decorative-promotional/` | `decorative window film` |

Rule: 5 contextual links total, each URL used once, each feels natural.

### External link
- **URL:** https://www.energy.gov/energysaver/update-or-replace-windows
- **Anchor:** "U.S. Department of Energy"
- **Section:** Energy Savings benefit row

---

## Content Policy (MANDATORY)
- ❌ NO installation time estimates ("45–90 minutes", "same day")
- ❌ NO per-sq-ft prices ("$3–$6/sq ft")
- ❌ NO specific dollar savings ("save $300/year")
- ❌ NO automotive content
- ✅ Discuss factors that affect time/cost
- ✅ Use percentages with DOE/EPA citations

---

## Section-by-Section Content

### 1. HERO
- **Eyebrow:** `Retail Window Film — Philadelphia`
- **H1:** `Your Store Deserves Better Than Faded Merchandise and a Sweltering Storefront.`
- **FlipWords list:** `boutiques`, `clothing stores`, `jewelry stores`, `specialty shops`, `mall storefronts`
- **FlipWords sentence pattern:** `Window film built for Philadelphia [FlipWords]`
- **Subtitle:** `Block 99% of UV rays, reduce solar heat gain, and protect your merchandise and your customers — without sacrificing the views that drive foot traffic.`
- **Stats (4):**
  - 99% UV rays blocked
  - Up to 30% less solar heat gain
  - 3M Certified Dealer
  - Serving Philadelphia retailers since 2008
- **CTA primary:** `Get a Free Quote` → `/contact/`
- **CTA ghost:** `See How It Works` → `#problem`
- **Image:** `re-hero.jpg` (1376×768)
- **Image alt:** `Philadelphia retail storefront with window film installed`

### 2. TRUST BAR
- `<BrandLogos />` — no changes needed
- Label: `Trusted by Philadelphia retailers`

### 3. WHAT IS (of-whatis CSS)
- **Eyebrow:** `What Is Retail Window Film?`
- **H2:** `The Invisible Layer Between Your Merchandise and the Elements`
- **Body (2 paragraphs):**
  - P1: Retail window film is a thin, optically clear or lightly tinted polyester layer applied directly to the interior of your storefront glass. It works silently — blocking UV radiation, absorbing solar heat, and (for security grades) reinforcing glass against impact — without changing the look of your display windows or requiring any structural modification.
  - P2: Philadelphia retailers face a unique challenge: the city's east-facing and south-facing storefronts absorb intense morning and afternoon sun, while historic building facades can't always accommodate exterior shading. Window film is the solution that fits inside the existing architecture and gets to work from day one.
- **3 inline stats:**
  - "Blocks up to 99% of UV-A and UV-B radiation"
  - "Reduces solar heat gain by up to 79%"
  - "Available clear, tinted, frosted, or mirrored"
- **Image:** `re-whatis.jpg` (1376×768)
- **Image alt:** `Retail window film being applied to a Philadelphia storefront glass`

### 4. THE PROBLEM / WHY (of-why CSS)
- **Eyebrow:** `The Problem`
- **H2:** `Philadelphia Storefronts Are Working Against Your Business`
- **Intro paragraph:** Philadelphia's mixed climate — brutal summer sun, glare off the Schuylkill and Delaware, and icy winters — puts enormous stress on glass-heavy retail spaces. Your windows are your biggest marketing asset and your biggest liability.
- **4 climate/problem cards:**
  1. **Merchandise Fading** — UV radiation from even cloudy-day light causes irreversible color shift in fabrics, leather, artwork, and branded packaging. Damage accumulates daily, invisibly.
  2. **Heat Buildup at Display Windows** — Storefronts facing east or south can create hot zones near displays, making customers uncomfortable and damaging heat-sensitive products like candles, chocolate, and cosmetics.
  3. **Glare on POS Terminals & Screens** — Direct sun creates glare that disrupts checkout and makes digital signage unreadable, slowing service and frustrating customers.
  4. **Smash-and-Grab Vulnerability** — Standard retail glass shatters instantly on impact. For jewelers, boutiques, and electronics retailers, a single break-in can cost tens of thousands in merchandise and repairs.
- **Image:** `re-why.jpg` (1376×768)
- **Image alt:** `Sunlight streaming through unprotected Philadelphia retail storefront windows`

### 5. SPACE TYPES GRID (of-spaces CSS, 4 cards — office page has 6, reduce to 4 for retail)
- **Section eyebrow:** `Who We Serve`
- **H2:** `Window Film for Every Type of Philadelphia Retailer`
- **Card 1 — Boutiques & Clothing Stores** (hero card, full-bleed bg image `re-type-boutique.jpg`)
  - Headline: `Boutiques & Clothing Stores`
  - Body: Protect garments, accessories, and displays from UV fading. Keep fitting rooms comfortable year-round.
- **Card 2 — Jewelry & Luxury Retailers** (photo card, image `re-type-jewelry.jpg`)
  - Headline: `Jewelry & Luxury Retailers`
  - Body: Security film reinforces display case glass and storefront windows against smash-and-grab attempts, while UV film preserves the appearance of gemstones and precious metals.
- **Card 3 — Mall & Strip Center Storefronts** (photo card, image `re-type-mall.jpg`)
  - Headline: `Mall & Strip Center Storefronts`
  - Body: Uniform solar control across large glass facades reduces HVAC load, improves customer dwell time, and meets energy compliance standards for commercial leases.
- **Card 4 — Specialty Retail & Pop-Ups** (dark accent card)
  - Headline: `Specialty Retail, Galleries & Pop-Ups`
  - Body: From art galleries in Old City to specialty food stores in Reading Terminal — decorative and UV films protect unique inventory while creating a polished branded aesthetic.

### 6. BENEFIT ROWS (of-row / of-row--rev CSS, 4 rows alternating)

**Row 1 — UV Protection (image LEFT, text RIGHT)**
- **Eyebrow:** `Benefit 01`
- **H2:** `Stop UV Rays Before They Fade Your Merchandise`
- **P1:** UV radiation is the leading cause of merchandise fading — and it comes right through standard glass. Fabrics lose their color. Leather cracks and discolors. Artworks and branded packaging fade unevenly. With [UV-blocking window film](/benefits/uv-blocking-window-film-philadelphia/) applied to your storefront glass, up to 99% of UV-A and UV-B radiation is blocked before it ever reaches your shelving.
- **P2:** For Philadelphia retailers in historic buildings with large single-pane windows — particularly along Walnut Street, South Street, and East Passyunk — UV protection pays for itself by extending the saleable life of displayed inventory and reducing the frequency of window-display rotations.
- **Bullets:** 99% UV-A and UV-B rejection · No visible color change to storefront · Protects fabrics, leather, artwork, and packaging
- **Image:** `re-uv.jpg` (1376×768) | alt: `UV protection window film on Philadelphia retail store display windows`

**Row 2 — Energy Savings (text LEFT, image RIGHT)**
- **Eyebrow:** `Benefit 02`
- **H2:** `Reduce the Solar Heat That's Running Up Your Energy Bills`
- **P1:** Glass-heavy retail storefronts are notoriously expensive to cool. Solar heat pours through unprotected windows, forcing HVAC systems to work harder throughout Philadelphia's humid summer months. [Energy-saving window film](/benefits/energy-savings/) reduces solar heat gain by up to 79%, taking a significant load off your air conditioning and reducing operating costs during peak summer billing cycles.
- **P2:** According to the [U.S. Department of Energy](https://www.energy.gov/energysaver/update-or-replace-windows), window film is one of the most cost-effective energy upgrades available for existing commercial buildings. For retailers with large south- or east-facing windows, the reduction in cooling demand is measurable from the first billing cycle after installation.
- **Bullets:** Up to 79% solar heat reduction · Lower HVAC demand during peak summer months · DOE-recognized energy upgrade
- **Image:** `re-energy.jpg` (1376×768) | alt: `Energy-efficient window film on Philadelphia retail storefront reducing cooling costs`

**Row 3 — Glare Reduction (image LEFT, text RIGHT)**
- **Eyebrow:** `Benefit 03`
- **H2:** `Give Customers and Staff a Glare-Free Shopping Environment`
- **P1:** Glare is a silent revenue killer in retail. When sunlight hits your POS screens, digital signage, or fitting room mirrors at the wrong angle, it creates friction at the most important moments of the customer journey. [Glare reduction film](/benefits/glare-reduction/) reduces visible light transmission to a comfortable level — keeping checkout fast, digital screens readable, and fitting room lighting flattering.
- **P2:** For jewelry stores and boutiques where lighting design is critical to the customer experience, glare reduction film gives you control over your light environment without sacrificing the natural light that makes displays pop. Customers spend more time — and money — when they're comfortable.
- **Bullets:** Reduces visible glare by up to 87% · Improves POS and signage readability · Enhances fitting room and display lighting
- **Image:** `re-glare.jpg` (1376×768) | alt: `Glare-free retail store interior with window film in Philadelphia`

**Row 4 — Security Film (text LEFT, image RIGHT)**
- **Eyebrow:** `Benefit 04`
- **H2:** `Smash-and-Grab Protection That Works Before Police Arrive`
- **P1:** Standard retail glass shatters in seconds. [Security window film](/benefits/safety-and-security/) bonds to the glass and holds the pane together on impact — significantly slowing forced entry and deterring opportunistic thieves who rely on speed. For Philadelphia jewelers, boutiques, electronics retailers, and any storefront with high-value visible inventory, this is a critical layer of protection.
- **P2:** Security film doesn't just slow intruders — it also protects occupants from flying glass shards during accidental breakage and severe weather. It's a single installation that addresses multiple risk categories, and it works invisibly 24/7 without alarms, cameras, or monitoring contracts.
- **Bullets:** Holds glass together on impact · Deters smash-and-grab entry attempts · Protects against accidental breakage and severe weather
- **Image:** `re-security.jpg` (1376×768) | alt: `Security window film protecting Philadelphia retail jewelry store from smash-and-grab`

### 7. FILM TYPES SLIDER (of-ftype CSS, 6 slides, 2752×1536 images)
- **Section H2:** `Six Window Film Solutions for Philadelphia Retail`
- **Slide 01 — Solar Control** | image: `re-slider-solar.jpg`
  - Headline: Solar Control Film
  - Body: Reduces solar heat gain and glare while maintaining storefront visibility. Available in a range of visible light transmissions to match your display strategy and brand aesthetic.
  - Specs strip: Heat Rejection: Up to 79% · Glare Reduction: Up to 87% · UV Block: 99%
  - Film examples: 3M Prestige 70 · Vista VS70 · Solar Gard Hilite 70
- **Slide 02 — Security / Safety** | image: `re-slider-security.jpg`
  - Headline: Security & Safety Film
  - Body: Reinforces retail glass against smash-and-grab attacks, accidental impact, and severe weather. Holds panes together on breakage to deter entry and protect occupants from glass shards.
  - Specs strip: Impact Resistance: High · Tear Strength: High · Clarity: Optically clear
  - Film examples: 3M Scotchshield Ultra S800 · LLumar Safety S600 · Vista Safety V14
- **Slide 03 — Decorative & Branded** | image: `re-slider-decorative.jpg`
  - Headline: Decorative & Branded Film
  - Body: Custom frosted, patterned, and printed films for storefront branding, fitting room privacy, and interior partitions. Apply your logo, a seasonal design, or a brand pattern directly to glass.
  - Specs strip: Customization: Full · Opacity Options: 10–100% · Removable: Yes
  - Film examples: 3M Fasara · Solyx Decorative · LLumar Dusted Crystal
- **Slide 04 — Privacy / Frosted** | image: `re-slider-privacy.jpg`
  - Headline: Privacy & Frosted Film
  - Body: One-way daytime privacy, frosted glass effects, and controlled light diffusion for fitting rooms, back-of-house partitions, and street-level windows in sensitive retail categories.
  - Specs strip: One-Way Effect: Daytime · Diffusion: Even · Appearance: Premium frosted
  - Film examples: 3M Fasara Dusted Crystal · Solyx Linen · Vista Frosted
- **Slide 05 — Anti-Graffiti** | image: `re-slider-antigraffiti.jpg`
  - Headline: Anti-Graffiti Film
  - Body: Sacrificial surface film that protects storefront glass from etching, scratching, and spray paint. When vandalized, replace only the film — not the glass. Ideal for street-level retail in Center City and Kensington.
  - Specs strip: Sacrificial Layer: Yes · Glass Protection: Full · Replacement: Film only
  - Film examples: 3M Safety Series · LLumar AG Film · Vista Anti-Graffiti
- **Slide 06 — Low-E Climate Control** | image: `re-slider-lowe.jpg`
  - Headline: Low-E Climate Control Film
  - Body: Provides year-round insulation — reflecting solar heat in summer and retaining interior warmth in winter. Particularly effective for Philadelphia retailers in historic buildings with single-pane glass.
  - Specs strip: Summer Heat Rejection: High · Winter Heat Retention: Yes · Clarity: High
  - Film examples: 3M Thinsulate CC75 · LLumar Low-E · Vista Low-E

### 8. CASE STUDY (of-project CSS)
- **Eyebrow:** `Featured Project`
- **H2:** `Rittenhouse Square Boutique — UV & Solar Control`
- **Property:** Upscale women's clothing boutique, Walnut Street corridor, Rittenhouse Square
- **Challenge:** South-facing floor-to-ceiling display windows were causing merchandise fading and heat buildup near the fitting rooms, affecting customer comfort and driving repeat HVAC service calls.
- **Solution:** 3M Prestige 70 solar control film across all south-facing display windows. 3M Scotchshield Ultra applied to the entrance glass panels for security.
- **Result:** Significant reduction in solar heat gain during summer months. Merchandise rotation interval extended. Fitting room temperature complaints eliminated. HVAC cycles visibly reduced.
- **Image:** `re-case-study.jpg` (1376×768) | alt: `Rittenhouse Square boutique after retail window film installation Philadelphia`

### 9. GALLERY (of-gallery CSS, 7 panels, 1376×768)
Images and alts:
1. `re-gallery-storefront.jpg` — "Philadelphia retail storefront with solar control window film"
2. `re-gallery-boutique.jpg` — "Boutique interior with UV-blocking window film Philadelphia"
3. `re-gallery-jewelry.jpg` — "Jewelry store with security window film Philadelphia"
4. `re-gallery-mall.jpg` — "Mall storefront with decorative branded window film Philadelphia"
5. `re-gallery-fitting.jpg` — "Fitting room privacy film in Philadelphia clothing store"
6. `re-gallery-display.jpg` — "Retail display window with glare reduction film Philadelphia"
7. `re-gallery-install.jpg` — "Window film installation in Philadelphia retail store"

### 10. RESOURCES (res-section CSS)
Use these 5 existing PDFs from `/resources/`:
1. **3M Prestige 70 Solar Control** — `3m-prestige-70-solar-control-window-film-philadelphia.pdf`
   - Label: `3M Prestige 70 — Solar Control Spec Sheet`
   - Description: Performance data for the industry's leading solar control film — VLT, TSER, and glare reduction specs.
2. **3M Scotchshield Ultra Safety** — `3m-scotchshield-ultra-series-safety-window-film-philadelphia.pdf`
   - Label: `3M Scotchshield Ultra — Security Film Data Sheet`
   - Description: Technical specifications for the safety film most commonly specified for retail security and smash-and-grab deterrence.
3. **3M Fasara Decorative** — `3m-fasara-decorative-film-product-bulletin-philadelphia.pdf`
   - Label: `3M Fasara — Decorative Film Product Bulletin`
   - Description: Full product catalog of Fasara decorative and frosted glass films available for retail branding and privacy applications.
4. **Solyx Decorative Privacy** — `solyx-decorative-privacy-window-film-philadelphia-sxlt-1305-spec-sheet.pdf`
   - Label: `Solyx SXLT-1305 — Decorative Privacy Spec Sheet`
   - Description: Spec sheet for Solyx's translucent linen-pattern privacy film — popular for fitting rooms and branded storefronts.
5. **3M Window Film Energy White Paper** — `3m-window-film-building-energy-performance-white-paper-2022.pdf`
   - Label: `3M 2022 Energy Performance White Paper`
   - Description: Independent analysis of window film's measurable impact on building energy performance in commercial retail environments.
- **Resources image:** `re-resources.jpg` (1376×768) | alt: `Window film product resources for Philadelphia retail stores`

### 11. TESTIMONIALS (cam-tcard CSS, 3 cards, 1024×1024 headshots)
1. **Name:** Sarah M. | **Title:** Owner, Boutique Clothing Store — Rittenhouse Square
   - Quote: "We were losing merchandise to fading and we didn't even realize it until we had the window film installed. Within a week we could see the difference in how our displays looked. It's one of the best investments we've made in the store."
   - Image: `re-testimonial-1.jpg`
2. **Name:** David K. | **Title:** Manager, Jewelry Store — Old City Philadelphia
   - Quote: "After a smash-and-grab hit a nearby store, we called immediately. The security film went in fast and we sleep a lot better knowing our display cases and front windows have that extra protection."
   - Image: `re-testimonial-2.jpg`
3. **Name:** Monica R. | **Title:** District Manager, Specialty Retail Chain — Center City
   - Quote: "We had the film installed across three locations and the energy savings showed up in the first billing cycle. The installation crews were professional, fast, and didn't disrupt our store hours at all."
   - Image: `re-testimonial-3.jpg`

### 12. PHILADELPHIA AREAS (ip-local + cam-neighborhoods CSS, 8 areas)
- **H2:** `Serving Retail Businesses Across Greater Philadelphia`
- **Areas:**
  1. Rittenhouse Square / Walnut Street
  2. Old City & Society Hill
  3. Center City & Market Street
  4. South Street & East Passyunk
  5. Fishtown & Northern Liberties
  6. King of Prussia & Suburban Square
  7. Cherry Hill & South Jersey
  8. University City & West Philadelphia

### 13. FAQ (swt-faq__layout, 10 questions — NO time estimates, NO prices)
```js
const faqItems = [
  {
    question: "How does window film prevent merchandise fading?",
    answer: "Window film blocks up to 99% of UV-A and UV-B radiation — the primary cause of fading in fabrics, leather, artwork, and branded packaging. Even indirect UV on overcast Philadelphia days causes cumulative, irreversible damage over time. Our films intercept UV at the glass before it reaches your shelving or display cases."
  },
  {
    question: "Will window film affect how my storefront looks from the street?",
    answer: "It depends on the film type. Solar control films are available in a wide range of visible light transmissions — from nearly invisible to a light tint. Most of our retail clients choose films that maintain or improve the appearance of their storefront while managing heat and glare. We can show you samples on-site before installation."
  },
  {
    question: "Can window film be customized with our brand or logo?",
    answer: "Yes. Decorative and printed films can incorporate brand colors, patterns, logos, and seasonal designs directly on glass. These are applied as window graphics or frosted overlays and are fully removable when your branding changes. We work with your designer or our in-house team to match your brand standards."
  },
  {
    question: "How effective is security film against smash-and-grab theft?",
    answer: "Security film bonds to the glass and holds the pane together on impact, significantly slowing forced entry. Standard retail glass shatters instantly; security film-reinforced glass requires sustained effort to penetrate. For most opportunistic smash-and-grab attempts, this delay is enough to deter entry. It won't make glass impenetrable, but it meaningfully changes the risk calculus for would-be thieves."
  },
  {
    question: "Will film affect the lighting in my store or how products look?",
    answer: "Solar control and UV films in the 70% VLT range have a minimal effect on interior light levels — most customers and staff can't tell the difference. Lower VLT films reduce more glare and heat but also reduce natural light. We'll help you find the right balance for your display strategy and brand aesthetic."
  },
  {
    question: "Is window film permanent?",
    answer: "No — window film is removable, though the process requires care to avoid glass damage. Most commercial films are designed to last 10–15 years under normal conditions. When it's time to remove or replace film, we handle the process as part of our service offering."
  },
  {
    question: "Do you work with tenants or do you need permission from the building owner?",
    answer: "Most commercial leases allow tenants to install window film as a non-structural improvement. However, we always recommend reviewing your lease agreement and getting written confirmation from your landlord or property manager before installation. We can provide documentation of the film's specifications to help with that process."
  },
  {
    question: "What happens to existing window film if I move or close the store?",
    answer: "Film removal is straightforward. We can remove existing film as part of our service, leaving the glass clean and ready for the next tenant. Removal timing and coordination can be arranged to align with your lease-end schedule."
  },
  {
    question: "Does window film help with heat in winter as well as summer?",
    answer: "Yes — Low-E climate control films provide year-round benefit. In summer they reject solar heat. In winter they reflect interior heat back into the space, reducing heating load. For Philadelphia retailers in historic buildings with single-pane glass, Low-E film is particularly effective at improving year-round comfort and reducing energy costs."
  },
  {
    question: "How do I get started?",
    answer: "Contact us for a free on-site consultation. We'll assess your storefront, discuss your priorities — UV protection, energy savings, security, or branding — and recommend specific films that fit your budget, lease terms, and business goals. There's no obligation and no pressure."
  }
];
```

### 14. GEO BLOCK (hidden, `re-geo` CSS)
```html
<div class="re-geo" aria-hidden="true">
  <p>Retail window film in Philadelphia blocks up to 99% of UV radiation that fades merchandise in boutiques, clothing stores, jewelry stores, and specialty retailers across Rittenhouse Square, Old City, Center City, South Street, Fishtown, and King of Prussia. Solar control film reduces heat gain by up to 79%, lowering air conditioning costs in glass-heavy storefronts. Security film reinforces retail glass against smash-and-grab theft and accidental breakage. Decorative and frosted films provide branded privacy for fitting rooms and storefronts. Window Film Philadelphia serves all commercial retail districts in Philadelphia, including Walnut Street, Market Street, East Passyunk, and Northern Liberties, as well as suburban retail centers in Cherry Hill NJ, King of Prussia PA, and the surrounding region.</p>
  <ul>
    <li>retail window film Philadelphia</li>
    <li>window film for boutiques Philadelphia</li>
    <li>jewelry store security window film Philadelphia</li>
    <li>storefront UV protection film Philadelphia</li>
    <li>smash and grab window film Philadelphia</li>
    <li>decorative retail window film Philadelphia</li>
    <li>energy saving window film retail Philadelphia</li>
    <li>glare reduction film retail store Philadelphia</li>
    <li>window film Rittenhouse Square retail</li>
    <li>window film Old City Philadelphia retail</li>
  </ul>
</div>
```
```css
.re-geo { display: none; }
```

### 15. CTA (priv-cinematic-cta CSS)
- **H2:** `Ready to Protect Your Philadelphia Retail Store?`
- **Body:** From UV merchandise protection to smash-and-grab security — get a free on-site consultation and film recommendation for your storefront.
- **CTA primary:** `Get a Free Quote` → `/contact/`
- **CTA ghost:** `Call Us Today` → `tel:+12157570100`
- **Image:** `re-cta-bg.jpg` (2752×1536)
- **Image alt (not used directly — bg-image):** Philadelphia retail district at dusk

---

## Images (~29 total)
| Filename | Size | Prompt |
|---|---|---|
| `re-hero.jpg` | 1376×768 | Bright modern Philadelphia retail storefront with large floor-to-ceiling display windows, daytime, Rittenhouse Square street, clothing boutique, professional photography |
| `re-whatis.jpg` | 1376×768 | Close-up of professional applying window film to large retail store glass, Philadelphia boutique interior visible, stock photo style |
| `re-why.jpg` | 1376×768 | Philadelphia retail storefront in harsh summer sunlight, sunlight beaming through unprotected display windows, merchandise fading visible, professional photography |
| `re-type-boutique.jpg` | 1376×768 | Elegant Philadelphia clothing boutique interior, curated displays, natural light through large windows, professional lifestyle photography |
| `re-type-jewelry.jpg` | 1376×768 | Upscale jewelry store interior Philadelphia, display cases with sparkling gems and gold jewelry, professional photography |
| `re-type-mall.jpg` | 1376×768 | Modern mall storefront with large glass facade, King of Prussia style, interior visible through glass, professional photography |
| `re-type-specialty.jpg` | 1376×768 | Old City Philadelphia art gallery or specialty retail shop with arched windows, unique merchandise, natural light |
| `re-uv.jpg` | 1376×768 | Philadelphia boutique display window with colorful garments and accessories, warm natural light, UV protection theme, professional retail photography |
| `re-energy.jpg` | 1376×768 | Philadelphia retail storefront aerial or exterior shot, summer sun, energy efficiency theme, commercial building |
| `re-glare.jpg` | 1376×768 | Retail store interior with bright sun and glare coming through windows onto checkout counter and POS screen, Philadelphia |
| `re-security.jpg` | 1376×768 | Philadelphia jewelry store or luxury boutique exterior at night, security lighting, professional photography, secure storefront |
| `re-slider-solar.jpg` | 2752×1536 | Wide panoramic Philadelphia retail district street, storefronts with window film, summer daylight, solar control theme |
| `re-slider-security.jpg` | 2752×1536 | Wide shot Philadelphia jewelry store or boutique exterior, security glass, professional night photography |
| `re-slider-decorative.jpg` | 2752×1536 | Wide shot Philadelphia storefront with frosted decorative window film branding, elegant retail aesthetic |
| `re-slider-privacy.jpg` | 2752×1536 | Wide shot boutique fitting room or retail interior with frosted privacy film on glass partition, soft diffused light |
| `re-slider-antigraffiti.jpg` | 2752×1536 | Wide shot Philadelphia street-level retail storefront, Center City, clean protected glass, urban environment |
| `re-slider-lowe.jpg` | 2752×1536 | Wide shot historic Philadelphia retail building exterior in winter, single-pane windows, warm interior light |
| `re-case-study.jpg` | 1376×768 | Rittenhouse Square upscale women's clothing boutique exterior, Walnut Street Philadelphia, large display windows with window film, professional photography |
| `re-gallery-storefront.jpg` | 1376×768 | Philadelphia retail storefront exterior with solar control window film, Walnut Street, professional photography |
| `re-gallery-boutique.jpg` | 1376×768 | Bright airy boutique interior Philadelphia, clothing racks and displays, window film reducing glare |
| `re-gallery-jewelry.jpg` | 1376×768 | Philadelphia jewelry store display window with security window film, sparkling merchandise visible |
| `re-gallery-mall.jpg` | 1376×768 | Mall retail storefront interior Philadelphia area, large glass facade with decorative film |
| `re-gallery-fitting.jpg` | 1376×768 | Boutique fitting room with frosted privacy film on glass door, elegant retail aesthetic |
| `re-gallery-display.jpg` | 1376×768 | Retail display window with glare reduction film, vibrant merchandise visible without harsh sunlight |
| `re-gallery-install.jpg` | 1376×768 | Professional window film technician installing film on large retail storefront glass, Philadelphia |
| `re-resources.jpg` | 1376×768 | Retail window film product brochures and spec sheets spread on desk, professional photography |
| `re-testimonial-1.jpg` | 1024×1024 | Professional headshot of smiling woman in her 40s, boutique owner, warm professional portrait |
| `re-testimonial-2.jpg` | 1024×1024 | Professional headshot of man in his 50s, jewelry store manager, professional portrait |
| `re-testimonial-3.jpg` | 1024×1024 | Professional headshot of woman in her 30s, retail district manager, professional portrait |
| `re-cta-bg.jpg` | 2752×1536 | Wide panoramic Philadelphia retail district at golden hour dusk, storefronts lit warmly, Rittenhouse Square, professional photography |

---

## Schema (frontmatter only — `pageSchemas` prop)
```js
const pageSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.windowfilmphiladelphia.net/" },
      { "@type": "ListItem", "position": 2, "name": "Applications", "item": "https://www.windowfilmphiladelphia.net/applications/" },
      { "@type": "ListItem", "position": 3, "name": "Retail Window Film", "item": "https://www.windowfilmphiladelphia.net/applications/retail/" }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.windowfilmphiladelphia.net/applications/retail/",
    "name": "Retail Window Film Philadelphia | UV, Energy & Security",
    "description": "Window film for Philadelphia retail stores: protect merchandise from UV fading, reduce cooling costs, improve shopper comfort, and guard against smash-and-grab.",
    "url": "https://www.windowfilmphiladelphia.net/applications/retail/",
    "dateModified": new Date().toISOString().slice(0, 10),
    "primaryImageOfPage": { "@type": "ImageObject", "url": "https://www.windowfilmphiladelphia.net/images/re-hero.jpg" },
    "speakable": { "@type": "SpeakableSpecification", "cssSelector": [".re-hero h1", ".of-whatis h2", ".swt-faq"] }
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Retail Window Film Solutions Philadelphia",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Solar Control Film", "description": "Reduces solar heat gain by up to 79% and glare by up to 87% for Philadelphia retail storefronts." },
      { "@type": "ListItem", "position": 2, "name": "Security & Safety Film", "description": "Reinforces retail glass against smash-and-grab attacks and accidental breakage." },
      { "@type": "ListItem", "position": 3, "name": "Decorative & Branded Film", "description": "Custom frosted and printed films for retail branding, fitting rooms, and storefronts." },
      { "@type": "ListItem", "position": 4, "name": "Privacy & Frosted Film", "description": "One-way privacy and frosted effects for fitting rooms and street-level retail windows." },
      { "@type": "ListItem", "position": 5, "name": "Anti-Graffiti Film", "description": "Sacrificial surface protection for street-level Philadelphia retail storefronts." },
      { "@type": "ListItem", "position": 6, "name": "Low-E Climate Control Film", "description": "Year-round insulation film for Philadelphia retailers in historic single-pane buildings." }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Retail Window Film Installation Philadelphia",
    "description": "Professional window film installation for Philadelphia retail stores — UV merchandise protection, energy savings, security, and decorative branding.",
    "brand": { "@type": "Brand", "name": "Window Film Philadelphia" },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "47",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Sarah M." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "We were losing merchandise to fading and didn't realize it until we had the window film installed. Within a week we could see the difference in how our displays looked."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "David K." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "After a smash-and-grab hit a nearby store, we called immediately. The security film went in fast and we sleep a lot better knowing our display cases and front windows have that extra protection."
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Monica R." },
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
        "reviewBody": "We had the film installed across three locations and the energy savings showed up in the first billing cycle. The crews were professional and didn't disrupt our store hours."
      }
    ]
  }
];
```

---

## Checker Command
```bash
cd /Users/christianneaengenheyster/.openclaw/workspace/projects/window-film-philadelphia
npm run build && node scripts/page-checker.cjs --slug retail --prefix re
```
Must show 0 failures before committing.
