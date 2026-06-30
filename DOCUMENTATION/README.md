# WFP Redesign — Project Documentation

> **Para quién es esto:** Tú (directora), empleados nuevos, y cualquier agente de IA que trabaje en este proyecto.
> **Regla #1:** Lee esto antes de tocar cualquier archivo.

---

## Quick Start

```bash
cd ~/workspace/websites/new\ window\ film\ philadelphia
npm run dev       # Dev server → localhost:4321
npm run build     # Build → confirm 0 errors siempre
git push          # Push a GitHub después de cada sesión
```

---

## Estado del Proyecto

| Sección | Páginas | Estado |
|---|---|---|
| Homepage | 1 | ✅ Completo |
| Services | 2 | ✅ Completo |
| Benefits | 17 | ✅ Completo (menor refinamiento pendiente) |
| Cities | 4 | 🟡 Template listo (3 copias pendientes) |
| Applications | 10 | 🔴 Por hacer |
| Products | 12 | 🔴 Por hacer |
| Resources | 10 | 🔴 Por hacer |
| Top-level (Process, Contact, Blog, Gov) | 4 | 🔴 Por hacer |
| Thank You | 1 | ✅ Completo |
| **Total** | **68** | **3✅ · 1🟡 · 26🔴** |

---

## Cómo usar esta documentación

```
DOCUMENTATION/
├── README.md              ← Estás aquí
├── SITE-MAP.md            ← Estado de TODAS las 68 páginas
├── DESIGN-SYSTEM.md       ← Tokens, colores, tipografía, espaciado
├── PAGE-TYPES.md          ← 6 tipos de página + estructura de cada una
├── COMPONENTS.md          ← Todos los componentes reutilizables
├── ANIMATIONS.md          ← FlipWords, Parallax, Glassmorphism, etc.
├── WORKFLOW.md            ← Paso a paso: cómo rediseñar una página
├── CONTENT-GUIDE.md       ← Reglas de copy, claims, SEO
└── IMAGES.md              ← Estrategia de imágenes, generación, CloudFront
```

---

## Principios de diseño

1. **Build passing siempre** — `npm run build` = 0 errores antes de cada commit
2. **Mobile-first** — diseña para móvil, mejora para desktop
3. **Copy en inglés** — el sitio es para Philadelphia
4. **No claims no verificados** — nada de "reduce 30%" sin fuente
5. **Imágenes reales** — Mike Kinsey es una persona real, NO generar con IA
6. **Precisión constante** — año: 2008, proyectos: 2,400+, rating: 4.9★, UV: 99%
7. **Componentes > duplicación** — si ves código repetido, crea un componente

---

## Workflow rápido para rediseñar una página

1. Lee `SITE-MAP.md` → confirma el estado actual
2. Lee `PAGE-TYPES.md` → identifica el tipo de página
3. Lee `DESIGN-SYSTEM.md` → aplica los tokens correctos
4. Lee `ANIMATIONS.md` → añade efectos si corresponde
5. Implementa la página
6. `npm run build` → 0 errores
7. Git add + commit + push
8. Actualiza `SITE-MAP.md` con el nuevo estado

Más detalle en `WORKFLOW.md`.
