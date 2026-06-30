# WFP Redesign — Animations Reference

Todos los efectos de animación usados en el sitio. Parámetros exactos y cómo aplicarlos.

---

## 1. FlipWords (Rotating Words)

**Componente:** `src/components/FlipWords.astro`
**Uso:** Hero de Service Pages — línea de palabras que rotan con blur

### Props

```astro
<FlipWords
  words={["word1", "word2", "word3"]}
  prefix="Protect your"
  suffix="from UV damage."
  interval={3000}
/>
```

### CSS Override (por página)

```css
/* Contenedor: necesario para inline display */
.uv-hero__flip.flipwords-wrap {
  display: inline;
}

/* Columna: inline-flex para que no haya salto de línea */
.fw-word-col {
  display: inline-flex;
  flex-direction: column;
}

/* Palabra activa: blur 4px → 0, translateY 8px → 0 */
.fw-word.active {
  filter: blur(0px);
  opacity: 1;
  transform: translateY(0px);
  animation: fw-enter 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
}

/* Palabra saliendo: blur 0 → 4px, translateY 0 → 10px */
.fw-word.exit {
  filter: blur(4px);
  opacity: 0;
  transform: translateY(10px);
  animation: fw-exit 0.25s ease-in forwards;
}

/* Palabra inactiva: hidden */
.fw-word:not(.active):not(.exit) {
  opacity: 0;
  pointer-events: none;
  filter: blur(4px);
  transform: translateY(8px);
}

/* Palabra italic + verde en el hero oscuro */
.fw-word {
  color: var(--brand-green);
  font-style: italic;
}

/* Keyframes */
@keyframes fw-enter {
  from {
    filter: blur(4px);
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    filter: blur(0px);
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes fw-exit {
  from {
    filter: blur(0px);
    opacity: 1;
    transform: translateY(0px);
  }
  to {
    filter: blur(4px);
    opacity: 0;
    transform: translateY(10px);
  }
}

/* Min-width para evitar jump en palabras largas (ej: "hardwood floors") */
.fw-word {
  min-width: 8.5ch;
}
```

---

## 2. Parallax Scroll

**Uso:** Why Modern section del homepage, imágenes de fondo en secciones

### Implementación CSS

```css
.parallax-container {
  position: relative;
  overflow: hidden;
}

.parallax-img {
  position: absolute;
  inset: -20%;        /* Extend beyond container */
  width: 100%;
  height: 140%;
  object-fit: cover;
  will-change: transform;
  pointer-events: none;
}

/* Velocidades */
.parallax-slow   { animation: parallax-scroll 1s 0.3s linear both; }
.parallax-medium { animation: parallax-scroll 1s 0.4s linear both; }
.parallax-fast   { animation: parallax-scroll 1s 0.5s linear both; }

@keyframes parallax-scroll {
  from { transform: translateY(0); }
  to   { transform: translateY(-30%); }
}
```

### Scroll speeds disponibles

| Speed | Valor | Uso |
|---|---|---|
| Lento | `0.3x` | Fondos que deben moverse muy poco |
| Normal | `0.5x` | Imágenes de sección Why Modern |
| Rápido | `0.7x` | Elementos que deben destacar más |

---

## 3. Glassmorphism Cards

**Uso:** Glass cards del homepage, frosted panels sobre imágenes

### Parámetros exactos

```css
.glass-panel {
  background: rgba(20, 32, 26, 0.55);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}

/* Hover: ligeramente más brillante */
.glass-panel:hover {
  background: rgba(20, 32, 26, 0.65);
  border-color: rgba(255, 255, 255, 0.15);
}
```

### Para la Why Modern section

```css
.frosted-card {
  background: rgba(20, 32, 26, 0.45);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  padding: 40px 32px;
}
```

---

## 4. Scroll Entrance Animation

**Uso:** Cards, secciones, elementos que entran cuando entran al viewport

### Opción A: CSS-only con IntersectionObserver

```js
// En <script> de la página
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Opción B: Staggered (grid items)

```css
.reveal {
  opacity: 0;
  transform: translateY(24px) scale(0.98);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.reveal.is-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

/* Stagger: delay por cada nth-child */
.reveal:nth-child(1) { transition-delay: 0ms; }
.reveal:nth-child(2) { transition-delay: 80ms; }
.reveal:nth-child(3) { transition-delay: 160ms; }
.reveal:nth-child(4) { transition-delay: 240ms; }
```

---

## 5. Card Hover Effects

### Default lift (todas las cards)

```css
.card-hover {
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              box-shadow 0.3s ease,
              border-color 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
  border-color: rgba(124, 179, 66, 0.25);
}
```

### Photo card zoom

```css
.photo-card:hover .photo-card__img {
  transform: scale(1.04);
}

.photo-card__img {
  transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

### Border glow on hover

```css
.glow-hover:hover {
  border-color: rgba(124, 179, 66, 0.32);
  box-shadow: 0 4px 24px rgba(124, 179, 66, 0.08);
}
```

---

## 6. Testimonial Carousel

**Implementación:** CSS scroll-snap + botones prev/next

```css
.testi-track {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

.testi-track::-webkit-scrollbar { display: none; }

.testi-slide {
  flex: 0 0 100%;
  scroll-snap-align: center;
}

/* Si son 3 slides visibles: */
@media (min-width: 768px) {
  .testi-slide { flex: 0 0 calc(33.333% - 16px); }
}
```

---

## 7. Infinite Scroll Ticker

**Uso:** Cities ticker en footer

```css
.ticker-track {
  display: flex;
  animation: ticker-scroll 30s linear infinite;
  width: max-content;
}

@keyframes ticker-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

.ticker-track:hover {
  animation-play-state: paused;
}
```

---

## 8. Video Overlay Gradient

**Uso:** Secciones de CTA con video de fondo

```css
.video-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(13, 26, 15, 0.78) 0%,
    rgba(20, 32, 26, 0.68) 50%,
    rgba(13, 26, 15, 0.82) 100%
  );
  z-index: 1;
}
```

---

## 9. Cities Ticker (Homepage)

```css
.cities-ticker {
  background: var(--dark-bg);
  padding: 16px 0;
  overflow: hidden;
  border-top: 1px solid var(--border-subtle);
  border-bottom: 1px solid var(--border-subtle);
}

.ticker-inner {
  display: flex;
  gap: 48px;
  animation: ticker-scroll 25s linear infinite;
  width: max-content;
}

.ticker-city {
  font-family: 'Space Mono', monospace;
  font-size: 0.7rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--text-muted);
  white-space: nowrap;
  flex-shrink: 0;
}

@keyframes ticker-scroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

---

## 10. Accordion Animation

```css
.accordion-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.accordion-body[aria-hidden="false"] {
  max-height: 600px; /* Ajustar según contenido */
}

.accordion-icon {
  transition: transform 0.3s ease;
}

.accordion-trigger[aria-expanded="true"] .accordion-icon {
  transform: rotate(45deg);
}
```

---

## Respecting Reduced Motion

**SIEMPRE incluir:**

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Y en JavaScript:

```js
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // Skip animations
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
}
```
