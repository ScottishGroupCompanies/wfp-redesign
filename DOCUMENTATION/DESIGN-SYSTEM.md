# WFP Redesign — Design System

## Brand Tokens

### Colors (CSS Custom Properties)

```css
:root {
  /* Primary brand green */
  --brand-green: #7CB342;
  --brand-green-dark: #2E6B30;
  --brand-green-darker: #14201A;

  /* Dark backgrounds */
  --dark-bg: #14201A;
  --dark-bg-extra: #0d1a0f;
  --dark-surface: #1a2e20;

  /* Light backgrounds */
  --off-white: #F3F6F1;
  --white: #ffffff;

  /* Text */
  --text-primary: #F3F6F1;
  --text-muted: rgba(243, 246, 241, 0.65);
  --text-muted-strong: rgba(243, 246, 241, 0.75);
  --text-dark: #14201A;
  --text-mid: #4A5C48;

  /* Borders */
  --border-subtle: rgba(124, 179, 66, 0.12);
  --border-medium: rgba(124, 179, 66, 0.18);
  --border-strong: rgba(124, 179, 66, 0.25);

  /* Shadows */
  --shadow-card: 0 4px 24px rgba(0, 0, 0, 0.2);
  --shadow-card-hover: 0 12px 40px rgba(0, 0, 0, 0.3);
  --shadow-card-sm: 0 4px 20px rgba(0, 0, 0, 0.15);
}
```

**Nota:** No usar los colores del CLAUDE.md antiguo (`#272E32`, `#81AB4C`) — esos son del old site. Usar los nuevos tokens de arriba.

### Typography

```css
/* Fonts (cargadas en BaseLayout.astro) */
font-family: 'Playfair Display', Georgia, serif;  /* Headlines */
font-family: 'Inter', system-ui, sans-serif;        /* Body */
font-family: 'Space Mono', monospace;               /* Stats, pills, badges, labels */
```

| Uso | Font | Weight | Size |
|---|---|---|---|
| Hero H1 | Playfair Display | 700 | `clamp(2.5rem, 6vw, 4.5rem)` |
| Section H2 | Playfair Display | 700 | `clamp(1.75rem, 3.5vw, 2.75rem)` |
| Section H3 | Playfair Display | 700 | `clamp(1.3rem, 2.5vw, 1.75rem)` |
| Card titles | Playfair Display | 700 | `clamp(1.1rem, 2vw, 1.4rem)` |
| Body copy | Inter | 400 | `0.95rem` – `1rem` |
| Stats/numbers | Space Mono | 700 | `clamp(1.5rem, 3vw, 2.5rem)` |
| Eyebrow labels | Inter | 700 | `0.7rem` + `letter-spacing: 2px` + `uppercase` |
| Pills/badges | Space Mono | 700 | `0.6rem` + `letter-spacing: 1.2px` + `uppercase` |

### Border Radius

```css
--radius-pill: 100px;
--radius-xl: 40px;
--radius-lg: 24px;  /* Cards principales */
--radius-md: 16px;  /* Cards secundarias */
--radius-sm: 12px;   /* Botones, inputs */
```

### Spacing Scale

```css
/* Padding sections */
--section-padding: 100px 24px;   /* Desktop */
--section-padding-mobile: 60px 20px;

/* Gap grid */
--grid-gap: 20px;                 /* Desktop */
--grid-gap-mobile: 16px;

/* Card padding */
--card-padding-lg: 48px 40px;     /* Hero cards */
--card-padding-md: 36px 32px;     /* Cards normales */
--card-padding-sm: 24px 28px;     /* Cards compactas */
```

### Max Widths

```css
--max-width: 1200px;   /* Contenedor principal */
--max-width-sm: 900px;  /* Contenedores de texto ancho */
--max-width-xs: 560px;  /* Subheadlines, labels */
```

---

## Eyebrow Pattern (usar siempre)

```html
<span class="eyebrow-modern">KEY BENEFITS</span>
```

```css
.eyebrow-modern {
  display: inline-block;
  font-family: 'Inter', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--brand-green);
  margin-bottom: 16px;
}
```

---

## Buttons

### Primary (green fill)

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: #0d1a0f;
  background: var(--brand-green);
  border: 1px solid var(--brand-green);
  padding: 14px 28px;
  border-radius: var(--radius-pill);
  text-decoration: none;
  transition: all 0.25s ease;
  cursor: pointer;
}
.btn-primary:hover {
  background: var(--brand-green-dark);
  border-color: var(--brand-green-dark);
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(124, 179, 66, 0.3);
}
```

### Secondary (outline)

```css
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
  background: transparent;
  border: 1.5px solid rgba(243, 246, 241, 0.35);
  padding: 14px 28px;
  border-radius: var(--radius-pill);
  text-decoration: none;
  transition: all 0.25s ease;
}
.btn-secondary:hover {
  border-color: var(--brand-green);
  color: var(--brand-green);
  transform: translateY(-2px);
}
```

### Button in dark section

```css
.btn-secondary-dark {
  color: var(--dark-bg);
  border-color: var(--dark-bg);
}
.btn-secondary-dark:hover {
  border-color: var(--brand-green-dark);
  color: var(--brand-green-dark);
}
```

---

## Cards

### Dark gradient card (default)

```css
.kb-card--hero {
  background: linear-gradient(145deg, #1a3024 0%, #0d1a0f 60%);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: var(--card-padding-lg);
  box-shadow: var(--shadow-card);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
}
.kb-card--hero:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-card-hover);
  border-color: var(--border-strong);
}
```

### Photo card

```css
.kb-card--photo {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  min-height: 280px; /* ajustar según contexto */
  box-shadow: var(--shadow-card-sm);
}
.kb-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  inset: 0;
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
.kb-card--photo:hover .kb-card__img {
  transform: scale(1.04);
}
/* Overlay gradient — siempre del color más oscuro abajo */
.kb-card__photo-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(10, 20, 14, 0.88) 0%,
    rgba(10, 20, 14, 0.35) 50%,
    rgba(10, 20, 14, 0.05) 100%
  );
}
```

### Off-white card (en secciones claras)

```css
.off-card {
  background: var(--off-white);
  border: 1px solid rgba(20, 32, 26, 0.08);
  border-radius: var(--radius-lg);
  padding: var(--card-padding-md);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.off-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border-color: rgba(20, 32, 26, 0.14);
}
```

---

## Section Patterns

### Section dark (default)

```css
.section-dark {
  background: var(--dark-bg-extra);
  padding: var(--section-padding);
}
```

### Section light

```css
.section-light {
  background: var(--off-white);
  padding: var(--section-padding);
}
```

### Section container

```css
.section-container {
  max-width: var(--max-width);
  margin: 0 auto;
}
```

### Section header (centered)

```css
.section-header {
  text-align: center;
  margin-bottom: 60px;
}
.section-headline {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.75rem, 3.5vw, 2.75rem);
  font-weight: 700;
  color: #F3F6F1;
  margin-bottom: 16px;
  line-height: 1.2;
  letter-spacing: -0.01em;
}
/* En sección clara: */
.section-headline { color: var(--text-dark); }
```

---

## Stats Row

```css
.stats-row {
  display: flex;
  justify-content: center;
  gap: 0;
  flex-wrap: wrap;
  background: var(--dark-bg);
  border-radius: var(--radius-lg);
  padding: 32px 40px;
  border: 1px solid var(--border-subtle);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
  border-right: 1px solid var(--border-subtle);
}
.stat-item:last-child { border-right: none; }

.stat-number {
  font-family: 'Space Mono', monospace;
  font-size: clamp(1.5rem, 3vw, 2.5rem);
  font-weight: 700;
  color: var(--brand-green);
  line-height: 1;
  margin-bottom: 6px;
}

.stat-label {
  font-family: 'Inter', sans-serif;
  font-size: 0.8rem;
  color: var(--text-muted);
  text-align: center;
}

/* Mobile */
@media (max-width: 768px) {
  .stats-row { flex-direction: column; gap: 20px; }
  .stat-item { border-right: none; border-bottom: 1px solid var(--border-subtle); padding-bottom: 20px; }
  .stat-item:last-child { border-bottom: none; }
}
```

---

## Accordion

```css
.accordion-item {
  border-bottom: 1px solid var(--border-subtle);
}

.accordion-trigger {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text-primary);
  transition: color 0.2s;
}
.accordion-trigger:hover { color: var(--brand-green); }
.accordion-trigger[aria-expanded="true"] { color: var(--brand-green); }

.accordion-icon {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: var(--brand-green);
  transition: transform 0.3s ease;
}
.accordion-trigger[aria-expanded="true"] .accordion-icon {
  transform: rotate(45deg);
}

.accordion-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s ease;
}
.accordion-body[aria-hidden="false"] {
  max-height: 600px;
}

.accordion-body-inner {
  padding-bottom: 24px;
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: var(--text-muted);
  line-height: 1.75;
}
```

---

## Trust Strip (Brand Logos)

- **NO grayscale** — logos a todo color
- **NO opacity** — colores completos
- **Text:** "Trusted by Leading Philadelphia Businesses"
- **Auto-scroll** con `@keyframes brand-scroll`
- **Fade edges** con `mask-image`
- **Fonts:** Inter 700, 11px, letter-spacing 2px, uppercase
- Más detalle en `COMPONENTS.md`

---

## Mobile Breakpoints

```css
/* Tablet */
@media (max-width: 1024px) { ... }

/* Mobile landscape / small tablet */
@media (max-width: 768px) { ... }

/* Mobile portrait */
@media (max-width: 480px) { ... }
```

---

## Image Overlay Colors

Para hero images y photo cards:

```css
/* Dark gradient overlay */
background: linear-gradient(to top, rgba(13, 26, 15, 0.88) 0%, rgba(20, 32, 26, 0.5) 50%, rgba(13, 26, 15, 0.1) 100%);

/* Video section overlay */
background: linear-gradient(135deg, rgba(13, 26, 15, 0.75) 0%, rgba(20, 32, 26, 0.65) 100%);
```

---

## Chat Widget (drift/tidio/whatever)

```css
/* Asegurar que siempre esté por encima */
#chat-widget, [class*="chat"] {
  z-index: 9998 !important;
}
/* Botón trigger */
#chat-widget [class*="trigger"], [class*="chat-bubble"] {
  z-index: 9999 !important;
}
```
