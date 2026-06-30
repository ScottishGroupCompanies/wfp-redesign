# WFP Redesign — Components

Todos los componentes reutilizables del proyecto. Usar estos, no crear nuevos sin necesidad.

---

## Header

**Archivo:** `src/components/Header.astro`

Navegación flotante estilo pill. Ya configurada en BaseLayout. **No modificar la estructura** — solo añadir links de menú si hay nuevas secciones.

### Links actuales
- Residential | Commercial | Products | Services | About | Contact

### Botón CTA en header
```html
<a href="/contact/" class="header-cta">Get a Free Quote</a>
```

---

## Footer

**Archivo:** `src/components/Footer.astro`

Footer oscuro con imagen de fondo. Tres columnas: logo/tagline | Resources + Company | Phone/Email/Social.

### Info de contacto en footer
```html
<p class="footer-phone">(267) 394-7980</p>
<p class="footer-email">info@windowfilmphl.com</p>
```

### Links del footer
- Resources: Window Film Products, Commercial, Architectural, About
- Company: About, Gallery, Service Areas, Contact

---

## InnerPageHero

**Archivo:** `src/components/InnerPageHero.astro`

Hero para todas las inner pages. Usar este componente, NO recrear un hero personalizado a menos que la página lo necesite (como Service Page).

### Props

| Prop | Tipo | Descripción |
|---|---|---|
| `title` | `string` | Título de la página (texto plano, sin HTML) |
| `bgImage` | `string` | URL de la imagen de fondo |
| `desc` | `string` | Descriptor corto (bottom-right del hero) |

### Uso

```astro
---
import InnerPageHero from '../components/InnerPageHero.astro'; // top-level pages
import InnerPageHero from '../../components/InnerPageHero.astro'; // sub-pages
---

<InnerPageHero
  title="Page Title Here"
  bgImage="/images/some-image.jpg"
  desc="Short descriptor text shown bottom-right."
/>
```

### Notas
- El título es **solo texto plano** — sin `<em>`, sin tags HTML
- El componente maneja el overlay oscuro internamente
- El `desc` aparece en bottom-right
- Importar desde la ruta correcta según la profundidad del archivo

---

## BrandLogos

**Archivo:** `src/components/BrandLogos.astro`

Carousel horizontal infinito con logos de fabricantes. **Siempre a todo color, sin grayscale ni opacity.**

### Uso

```astro
<BrandLogos />
```

### Datos (hardcoded en el componente)
3M, LLumar, Vista, Solar Gard, Huper Optik, Casper, C-Bond, Madico, HDClear, Hanita Coatings, Solyx, Graffiti Shield

### Posición en la página
Segunda a última sección antes del CTA en cada página.

### Text
```
Trusted by Leading Philadelphia Businesses
```

---

## CTAStrip

**Archivo:** `src/components/CTAStrip.astro`

Strip de CTA "Ready to transform?" — dark rounded.

### Uso

```astro
<CTAStrip />
```

### Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `headline` | `string` | "Ready to Transform Your Space?" | Headline |
| `phone` | `string` | "(267) 394-7980" | Número de teléfono |
| `primaryText` | `string` | "Get a Free Quote" | Texto botón primario |
| `secondaryText` | `string` | "Call (267) 394-7980" | Texto botón secundario |

---

## BackAndForthSection (BAF)

**Archivo:** `src/components/BackAndForthSection.astro`

Filas alternadas imagen/texto para secciones de beneficios.

### Props

| Prop | Tipo | Descripción |
|---|---|---|
| `image` | `string` | URL de imagen |
| `imageAlt` | `string` | Alt text |
| `eyebrow` | `string` | Label pequeño (ej: "01", "ENERGY") |
| `title` | `string` | Título de la sección |
| `body` | `string` | Texto del body |
| `reversed` | `boolean` | Si es true, imagen va a la derecha |

### Uso

```astro
<BackAndForthSection
  image="/images/benefit-image.jpg"
  imageAlt="Window film installation"
  eyebrow="01"
  title="Energy Savings"
  body="Professional window film can help reduce energy costs by regulating indoor temperatures..."
  reversed={false}
/>
```

---

## SEOHead

**Archivo:** `src/components/SEOHead.astro`

Inyecta meta tags SEO.

### Props

| Prop | Tipo | Descripción |
|---|---|---|
| `title` | `string` | Meta title |
| `description` | `string` | Meta description |
| `image` | `string` | OG image URL (opcional) |

### Uso

```astro
<SEOHead
  title="Page Title | Window Film Philadelphia"
  description="Professional window film installation in Philadelphia..."
  image="/images/og-image.jpg"
/>
```

---

## FlipWords

**Archivo:** `src/components/FlipWords.astro`

Animación de palabras rotando. Usado en hero de Service Pages.

### Props

| Prop | Tipo | Descripción |
|---|---|---|
| `words` | `string[]` | Array de palabras a rotar |
| `prefix` | `string` | Texto antes de las palabras (opcional) |
| `suffix` | `string` | Texto después de las palabras (opcional) |
| `interval` | `number` | Ms entre rotación (default: 2500) |

### Uso

```astro
<FlipWords
  words={["hardwood floors", "furniture", "artwork", "interiors"]}
  prefix="Protect your"
  suffix="from UV damage."
  interval={3000}
/>
```

### CSS del override (en la página que lo usa)

```css
/* Override para que funcione bien en hero oscuro */
.fw-word {
  color: var(--brand-green);
  font-style: italic;
}
.fw-word-col {
  display: inline-flex;
  flex-direction: column;
}
```

---

## Accordion (standalone)

**Archivo:** `src/components/Accordion.astro`

Accordion accesible para FAQs y Buyer's Guides.

### Props

| Prop | Tipo | Descripción |
|---|---|---|
| `items` | `array` | Array de items con `question` y `answer` |

### Uso

```astro
<Accordion items={[
  {
    question: "How long does installation take?",
    answer: "Most residential installations are completed in a single day..."
  },
  {
    question: "Will window film damage my windows?",
    answer: "No. Professional installation ensures..."
  }
]} />
```

---

## ParallaxSection

**Archivo:** `src/components/ParallaxSection.astro`

Imagen parallax como background de sección.

### Props

| Prop | Tipo | Descripción |
|---|---|---|
| `image` | `string` | URL de imagen |
| `speed` | `number` | Velocidad parallax: 0.3 (lento), 0.5 (normal), 0.7 (rápido) |
| `overlay` | `string` | Color de overlay (default: rgba(13, 26, 15, 0.75)) |

### Uso

```astro
<ParallaxSection
  image="/images/installer.jpg"
  speed={0.4}
  overlay="rgba(13, 26, 15, 0.75)"
>
  <!-- contenido de la sección -->
</ParallaxSection>
```

---

## Component Creation Rules

1. **¿Ya existe?** → Usar el existente
2. **¿Existe algo similar?** → Extenderlo con props, no crear nuevo
3. **¿Realmente es necesario uno nuevo?** → Crear en `src/components/`, documentar aquí
4. **¿Es solo para una página?** → Poner el CSS en el `<style>` de esa página, no crear componente
