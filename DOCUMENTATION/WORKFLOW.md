# WFP Redesign — Workflow

Cómo rediseñar una página desde cero. Paso a paso.

---

## Antes de empezar

1. Confirma el estado actual en `SITE-MAP.md`
2. Identifica el tipo de página en `PAGE-TYPES.md`
3. Lee `DESIGN-SYSTEM.md` para tokens
4. Revisa `ANIMATIONS.md` para efectos

---

## Flujo por tipo de página

### 🔴 Página Applications (Index)

```
1. Crear estructura básica
   ├── Copiar el layout base de una página ya completa
   ├── InnerPageHero o hero personalizado
   └── ip-page-body wrapper

2. Añadir secciones en orden:
   ├── Hero ( parallax bg )
   ├── Eyebrow + Headline + Subheadline
   ├── Applications grid (iconos + títulos + descripciones)
   ├── Why this matters (stats row)
   ├── FAQ accordion
   ├── BrandLogos
   └── CTA

3. Apply design tokens
   └── Colores, tipografía, espaciado del DESIGN-SYSTEM.md

4. Añadir animaciones
   └── FlipWords en hero, parallax en bg, hover en cards

5. Build check
   └── npm run build → 0 errores

6. Git
   └── git add + commit + push
```

### 🟡 City Pages (copiar de Camden template)

```
1. Copiar camden.astro → nueva-ciudad.astro

2. Buscar/reemplazar:
   Camden → [Nueva Ciudad]
   camden → [nueva-ciudad]
   NJ → [Estado]
   /cities/camden/ → /cities/nueva-ciudad/

3. Cambiar hero image

4. Ajustar contenido del sidebar:
   ├── Ciudades específicas de esa área
   └── Map embed de la nueva ciudad

5. Ajustar FAQ si hay preguntas específicas

6. npm run build → 0 errores

7. git add + commit + push

8. Actualizar SITE-MAP.md
```

### 🔴 Products Index (template nuevo)

```
1. InnerPageHero
   └── Título: "Premium Window Film Brands"

2. Brands grid
   └── 12-13 cards con logo + nombre + breve descripción

3. Why choose us
   └── 3-4 razones para confiar

4. Featured product highlight
   └── 1-2 productos destacados

5. CTA

6. npm run build → 0 errores

7. git add + commit + push
```

### 🔴 Product sub-pages (12 páginas)

```
1. InnerPageHero
   └── Logo del fabricante + nombre

2. About this brand
   └── Historia breve, origen

3. Key products/features grid
   └── 3-4 films destacados

4. Applications
   └── Dónde se usa este producto

5. Why this brand

6. CTA → Contact

7. npm run build → 0 errores

8. git add + commit + push
```

### 🔴 Resource pages (10 páginas)

```
1. InnerPageHero o hero simple

2. Content sections (varies per page)
   ├── FAQ page: accordion
   ├── Pricing: tabla de precios o rangos
   ├── Guide: pasos/capítulos
   └── Fact sheet: datos/estadísticas

3. Related resources

4. CTA

5. npm run build → 0 errores

6. git add + commit + push
```

---

## Checklist pre-commit

Antes de hacer `git push`, siempre verificar:

- [ ] `npm run build` → 0 errores
- [ ] Build output muestra el número correcto de páginas
- [ ] No hay console errors en la página (si hay dev server)
- [ ] Responsive funciona (probar 3 breakpoints: 1440px, 768px, 375px)
- [ ] Las animaciones respetan `prefers-reduced-motion`
- [ ] Los colores usan los tokens del DESIGN-SYSTEM.md
- [ ] No hay texto hardcodeado de "Lorem ipsum"
- [ ] Los links apuntan a las rutas correctas
- [ ] Las imágenes usan CloudFront URL o paths locales correctos
- [ ] El año es 2008, stats son 2,400+, 4.9★
- [ ] SITE-MAP.md actualizado con el nuevo estado

---

## Common Patterns

### Reutilizar el CSS del DESIGN-SYSTEM

```css
/* No escribir esto (hardcoded): */
color: #7CB342;
font-size: 1.75rem;
padding: 100px 24px;

/* Sí escribir esto (tokens): */
color: var(--brand-green);
font-size: clamp(1.75rem, 3.5vw, 2.75rem);
padding: var(--section-padding);
```

### CSS específico de página

Todo CSS que no sea global va en el `<style>` block del archivo `.astro`. **No añadir a `global.css`** a menos que sea realmente global.

### Imágenes remotas

```html
<!-- CloudFront -->
<img src="https://d8j0ntlcm91z4.cloudfront.net/images/name.jpg" alt="...">

<!-- Local (en public/images/) -->
<img src="/images/name.jpg" alt="...">
```

### Logo local (importante para SEO)

```html
<!-- SIEMPRE usar la imagen local, NO Cloudinary: -->
<img src="/images/logo.png" alt="Window Film Philadelphia" width="180" height="48">
```

---

## Si algo sale mal

### Build falla

```
1. Leer el error completo en la terminal
2. Buscar el archivo y línea específicos
3. Si es un error de CSS: revisar que no haya llaves sin cerrar
4. Si es un error de import: verificar que la ruta sea correcta
5. Si es un error de prop: verificar que el componente reciba los props correctos
6. npm run build de nuevo
```

### La página se ve mal

```
1. Probar en dev server (npm run dev)
2. Revisar que el CSS del DESIGN-SYSTEM esté aplicado
3. Verificar que los colores no hayan sido hardcodeados con valores incorrectos
4. Probar en móvil (768px y 375px)
```

### Git conflict

```
1. git status → ver qué archivos tienen conflicto
2. Abrir los archivos con conflicto
3. Buscar <<<<<<< y >>>>>>>
4. Decidir cuál versión mantener
5. Marcar como resuelto: git add <archivo>
6. git commit
```
