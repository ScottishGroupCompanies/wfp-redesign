# WFP Redesign — Page Types

Cada página en el sitio pertenece a uno de estos 6 tipos. Antes de rediseñar, identifica cuál es.

---

## Type 1: Homepage

**Archivo:** `src/pages/index.astro`
**Ruta:** `/`

### Estructura completa

```
1. Hero (88vh, full-bleed bg image, centered content)
   ├── Eyebrow pill
   ├── H1 headline
   ├── Subheadline
   ├── Primary + Secondary CTA buttons
   └── Stats glass panel (4 stats, glassmorphism, overlay 68/82/95%)
      ├── 99% UV Blocked
      ├── Serving Since 2008
      ├── 2,400+ Projects
      └── Clear Film Options

2. Glass Cards — Service pills (3 cards, overlap hero bottom, z-index: 20)
   ├── Residential Window Film
   ├── Commercial & Retail
   └── Custom Solutions

3. What We Do — alternating BAF rows (back-and-forth)
   ├── Row 1: Image left → Text right
   ├── Row 2: Text left → Image right
   └── Row 3: Image left → Text right

4. Stats Wall — dark background, 4 big stats + paragraph
   ├── 2008 Founded
   ├── 2,400+ Projects
   ├── 99% UV Rejection
   └── 4.9★ Rating

5. Why Modern — glassmorphism parallax section (3 frosted cards over installer photo)
   ├── Scroll speed 0.3x / 0.4x / 0.5x
   └── 3 cards: precision, performance, peace of mind

6. Testimonials — dark bg, centered, prev/next arrows

7. CTA Section — dark rounded strip

8. Cities Ticker — infinite scroll strip

9. Footer
```

### Tokens Homepage

- Hero overlay: `68% / 82% / 95%` opacity
- Glass cards: `rgba(20, 32, 26, 0.55)` + `backdrop-filter: blur(20px)`
- Parallax installer image: `/images/wfp-professional-window-film-installer.png`

---

## Type 2: Service Page (Hero + Full Content)

**Archivos:** `src/pages/services/index.astro`, `src/pages/services/uv-protection-film.astro`
**Rutas:** `/services/`, `/services/[slug]/`

### Estructura

```
1. Hero (88vh, parallax bg, overlay ~40%)
   ├── Eyebrow pill "Philadelphia · [Service Name]"
   ├── H1 headline
   ├── FlipWords animated line (opcional)
   ├── Subheadline
   └── 2 CTAs + Stats glass panel (4 stats)

2. Section: Why [Service] Matters (dark bg)

3. Section: Benefits compact trust band (light bg, 3 horizontal items)

4. Section: Key Benefits bento grid (dark bg)
   ├── Row 1: Hero card 6-col + 2 photo cards 3-col
   └── Row 2: 3 equal dark cards 4-col

5. Section: Content rows (alternating BAF — light bg)

6. Section: Buyer's Guide accordion (light bg, 8 items)

7. Section: Proof wall / Why Choose Us (dark bg, 4 reason cards)

8. Section: Service Areas (light bg, map panel + 4-5 region cards)

9. Section: Final CTA with background video (dark bg)

10. Cities Ticker

11. Footer
```

### Tokens Service Page

- Page ID prefix: `uv-` (ej: `.uv-hero`, `.uv-bento`, `.uv-proof`)
- Si es otra service page, usar prefijo del servicio (ej: `sec-` para security, `ener-` para energy)

---

## Type 3: Benefits Index

**Archivo:** `src/pages/benefits.astro`
**Ruta:** `/benefits/`

### Estructura

```
1. Hero (no InnerPageHero — hero propio con stats)
   ├── Eyebrow
   ├── H1
   ├── 4 stats: 20+, 99%, 2,400+, 4.9★
   └── 2 CTAs

2. Featured Benefits (3 rows BAF)

3. All Benefits Grid (16 icon cards, light bg)

4. Why Us (dark bg, 4-col with divider lines)

5. Chooser (6 goal cards)

6. FAQ Accordion

7. BrandLogos

8. CTA

9. Footer
```

---

## Type 4: Benefits Sub-Page (BAF + InnerPageHero)

**Archivos:** `src/pages/benefits/*.astro` (16 páginas)
**Ruta:** `/benefits/[slug]/`

### Estructura

```
1. InnerPageHero
   └── Pasar: title, bgImage, desc

2. ip-page-body (rounded corners 40px)
   ├── Intro section (2-col heading/text)
   ├── BackAndForthSection rows (alternating)
   ├── Stats row (dark bg)
   ├── FAQ Accordion
   ├── BrandLogos
   └── CTA
```

### Cómo usar InnerPageHero

```astro
---
import InnerPageHero from '../../components/InnerPageHero.astro';
---

<BaseLayout ...>
  <InnerPageHero
    title="UV Blocking Window Film Philadelphia"
    bgImage="/images/wfp-uv-protection-hero.jpg"
    desc="Professional UV film installation across Greater Philadelphia."
  />
  <div class="ip-page-body">
    <!-- contenido -->
  </div>
</BaseLayout>
```

### ip-page-body CSS (siempre añadir al `<style>` de la página)

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

## Type 5: City Page (Template)

**Archivo (template):** `src/pages/cities/camden.astro`
**Ruta:** `/cities/[slug]/`

### Estructura

```
1. InnerPageHero

2. ip-page-body
   ├── ip-hero (2-col: H1 left + lead text + CTAs right)
   ├── ip-hero-img-wrap (full-width rounded image + caption pill)
   ├── ip-content-wrap (main 1fr + sticky sidebar 420px)
   │   ├── Main:
   │   │   ├── Intro text
   │   │   ├── Callout box
   │   │   ├── Film options grid
   │   │   ├── Why choose list
   │   │   └── Installation process
   │   └── Sidebar (sticky):
   │       ├── CTA image card
   │       ├── Cities We Serve menu
   │       └── Certifications
   ├── ip-testimonials (dark bg, carousel, 3 slides)
   ├── ip-local (map embed + neighborhood copy)
   ├── ip-faq (accordion, 6 questions)
   ├── BrandLogos
   └── ip-cta (dark rounded banner)

3. Footer
```

### Cómo copiar el template para una nueva ciudad

1. Copiar `camden.astro` → `nueva-ciudad.astro`
2. Buscar/replace todos los textos específicos de Camden
3. Cambiar hero image
4. Cambiar sidebar city links
5. Ajustar map embed
6. `npm run build` → 0 errores

### Ciudad links en sidebar

```html
<!-- El link activo usa la clase: -->
<a href="/cities/camden/" class="ip-city-link ip-city-link--active">Camden NJ</a>
```

Ciudades disponibles:
- Philadelphia PA → `/cities/philadelphia/`
- Camden NJ → `/cities/camden/`
- Reading PA → `/cities/reading/`
- Upper Darby PA → `/cities/upper-darby-township/`
- Cherry Hill NJ → `/contact/` (sin página propia)
- Voorhees NJ → `/contact/`
- Haddonfield NJ → `/contact/`
- Collingswood NJ → `/contact/`
- Pennsauken NJ → `/contact/`
- Marlton NJ → `/contact/`
- Maple Shade NJ → `/contact/`

---

## Type 6: Product Page (Template por hacer)

**Archivos:** `src/pages/products/*.astro`
**Ruta:** `/products/[slug]/`

### Estructura (planeada)

```
1. InnerPageHero

2. ip-page-body
   ├── Product intro (logo del fabricante + headline)
   ├── Key features grid (3-4 cards)
   ├── Film options table
   ├── Applications section
   ├── Why choose this brand
   ├── FAQ
   ├── BrandLogos
   └── CTA
```

### Brands disponibles
3M, Llumar, Vista, Solar Gard, Huper Optik, Hanita Coatings, Madico, Nanotint, HDClear, Solyx, C-Bond, Bird Divert, Casper Cloaking

---

## Type 7: Application Page (Template por hacer)

**Archivos:** `src/pages/applications/*.astro`
**Ruta:** `/applications/[slug]/`

### Estructura (planeada — similar a Benefits sub-page)

```
1. InnerPageHero

2. ip-page-body
   ├── Intro (heading + text)
   ├── BAF rows específicos de la aplicación
   ├── Benefits para esta aplicación
   ├── Case studies / gallery
   ├── FAQ
   ├── BrandLogos
   └── CTA
```

---

## Type 8: Resource Page (Template por hacer)

**Archivos:** `src/pages/resources/*.astro`
**Ruta:** `/resources/[slug]/`

### Estructura (planeada)

```
1. InnerPageHero o hero simple

2. ip-page-body
   ├── Content sections (artículos, guías, etc.)
   ├── Related resources
   └── CTA
```

---

## Quick Reference: Qué template usar

| Situación | Template |
|---|---|
| Página de homepage | Homepage (`index.astro`) |
| Servicio principal (UV, Security, etc.) | Service Page (`uv-protection-film.astro`) |
| Índice de beneficios | Benefits Index (`benefits.astro`) |
| Sub-página de beneficio | Benefits Sub-Page (BAF + InnerPageHero) |
| Ciudad (Philadelphia, Reading, etc.) | City Page (`camden.astro`) |
| Producto (3M, Llumar, etc.) | Product Page (por crear) |
| Aplicación (Office, Retail, etc.) | Application Page (por crear) |
| Recurso (FAQ, Pricing, etc.) | Resource Page (por crear) |
| Página de contacto | Contact (por crear) |
| Página de proceso | Process (por crear) |
| Blog post | Blog (por crear) |
