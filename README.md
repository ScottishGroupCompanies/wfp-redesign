# Window Film Philadelphia

Static Astro rebuild of [windowfilmphiladelphia.net](https://www.windowfilmphiladelphia.net) — residential & commercial window film in Philadelphia, Camden, Reading, Upper Darby Township.

- **Stack:** Astro v4 + Tailwind CSS + TypeScript
- **Repo:** [`ScottishGroupCompanies/wfp-redesign`](https://github.com/ScottishGroupCompanies/wfp-redesign)
- **Branch:** `main` (Vercel auto-deploys)
- **Production:** https://www.windowfilmphiladelphia.net

## Quickstart

```bash
npm install
npm run dev      # → http://localhost:4321
npm run build    # production build (must be 0 errors)
```

---

## 📚 Documentación del Proyecto

**LEER ANTES DE TRABAJAR EN CUALQUIER PÁGINA:**

```
DOCUMENTATION/
├── README.md          ← Empezar aquí
├── SITE-MAP.md        ← Estado de las 68 páginas
├── DESIGN-SYSTEM.md   ← Colores, tipografía, spacing, componentes CSS
├── PAGE-TYPES.md      ← 8 tipos de página + estructura de cada una
├── COMPONENTS.md      ← Componentes reutilizables
├── ANIMATIONS.md      ← FlipWords, Parallax, Glassmorphism, etc.
├── WORKFLOW.md        ← Paso a paso: cómo rediseñar una página
├── CONTENT-GUIDE.md   ← Reglas de copy, claims, SEO
└── IMAGES.md          ← Estrategia de imágenes, generación, CloudFront
```

**Stack de diseño:** Scottish Group (green `#7CB342`, dark green `#14201A`, Playfair Display + Inter + Space Mono)

---

## Project layout

```
wfp-redesign/
├── DOCUMENTATION/          ← Sistema de documentación completo
├── CLAUDE.md               ← Design system + dev conventions (LEER PRIMERO)
├── scottish-style-guide.md ← Brand & component rules
├── WFP-IMAGE-AUDIT-REPORT.md
├── src/
│   ├── components/         Header, Footer, InnerPageHero, BackAndForthSection…
│   ├── pages/              68 páginas — ver SITE-MAP.md para estado
│   ├── layouts/            BaseLayout.astro
│   └── styles/global.css
├── public/
│   └── images/             site imagery
└── scripts/                generators + image tools
```

---

## Page status

| Page / section | Status |
|---|---|
| Homepage | ✅ Redesigned |
| Services (2 páginas) | ✅ Redesigned |
| Benefits (17 páginas) | ✅ Redesigned |
| Cities (Camden template + 3 copias pendientes) | 🟡 Template listo |
| Applications (10 páginas) | 🔴 Por hacer |
| Products (12 páginas) | 🔴 Por hacer |
| Resources (10 páginas) | 🔴 Por hacer |
| Process, Contact, Blog, Government | 🔴 Por hacer |

**Total: 68 páginas · 3 completas · 1 template listo · 26 por hacer**

Build correcto: **88 páginas** = todas las rutas generan correctamente.

---

## Design system

Tokens de colores (usar siempre estos, NO los del old site):

```css
--brand-green: #7CB342
--brand-green-dark: #2E6B30
--dark-bg: #14201A
--dark-bg-extra: #0d1a0f
--off-white: #F3F6F1
```

**Full spec:** `DOCUMENTATION/DESIGN-SYSTEM.md`

---

## Brand constants

| Dato | Valor |
|---|---|
| Año | **2008** |
| Experiencia | **20+ years** |
| Proyectos | **2,400+** |
| UV | **99%** |
| Rating | **4.9★** |
| Teléfono | **(267) 394-7980** |
| Email | **info@windowfilmphl.com** |
| Tagline | **"Done right, every time."** |

---

## Deploy pipeline

Vercel watches `main`. Pushes van live automáticamente.

## Workflow rules

1. `npm run build` → **siempre 0 errores** antes de commit
2. Build correcto = **88 páginas**
3. Leer `DOCUMENTATION/WORKFLOW.md` antes de rediseñar cualquier página
4. Claims de copy: ver `DOCUMENTATION/CONTENT-GUIDE.md`
5. Imágenes: `DOCUMENTATION/IMAGES.md`
