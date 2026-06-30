# WFP Redesign — Image Strategy

Todo sobre imágenes: URLs, generación, almacenamiento, y reglas.

---

## URLs válidas

### CloudFront (para imágenes generadas/remotas)

```
https://d8j0ntlcm91z4.cloudfront.net/[path]
```

**Usar para:**
- Imágenes generadas con Higgsfield CLI
- Imágenes subidas a CloudFront
- Imágenes de Unsplash, Pexels (solo si hay licencia)

### Locales (public/images/)

```
/images/[nombre-archivo].[ext]
```

**Usar para:**
- Logo del sitio: `/images/logo.png` ← IMPORTANTE: NO Cloudinary, NO SVG
- Imágenes de instaladores, edificios, productos (una vez que estén en el repo)
- Footer background
- Hero images locales

### Logo del sitio — REGLA CRÍTICA

```html
<!-- SIEMPRE usar imagen local: -->
<img src="/images/logo.png" alt="Window Film Philadelphia" width="180" height="48">

<!-- NO usar Cloudinary ni SVG inline para el logo principal -->
```

---

## Generar imágenes con Higgsfield CLI

### Setup

```bash
# Instalar si no está
npm install -g @higgsfield/cli

# Login
higgsfield auth login

# Verificar créditos
higgsfield balance
```

### Cuenta
- Email: `lina@scottishgroupcompanies.com`
- Plan: Creator
- Créditos: ~4,400

### Modelo para imágenes arquitectónicas

Usar **Nano Banana 2** para imágenes ultra-realistas de arquitectura:

```bash
higgsfield generate image \
  --model nano_banana_2 \
  --prompt "YOUR PROMPT HERE" \
  --aspect 16:9
```

### Prompts de referencia

#### Hero interior Philadelphia
```
Professional window film installation in Philadelphia historic brownstone interior, large windows with natural light streaming in, original hardwood floors, sunlit living room with artwork on walls, elegant furniture, warm afternoon light, clean and modern finish, photorealistic, 8K
```

#### Installer / trabajador
```
Professional window film installer in Philadelphia, wearing branded workwear, applying window film to large commercial glass, clean workspace, natural light, respectful and professional appearance, photorealistic, 8K
```

---

## Imágenes existentes en el repo

| Archivo | Uso |
|---|---|
| `wfp-landing-hero.jpg` | Homepage hero |
| `wfp-premium-films-v2.jpg` | Benefits pages |
| `wfp-expert-installation-v1.jpg` | City pages, sidebar |
| `wfp-footer-bg-commercial-window-film.jpg` | Footer background |
| `camden-window-film-company.jpg` | Camden hero |
| `uv-protection-hero-philadelphia.png` | UV Protection hero |

---

## Reglas de optimización

### Tamaños recomendados

| Uso | Ancho máximo |
|---|---|
| Hero background | 1920px |
| Photo cards | 800px |
| Thumbnail/sidebar | 400px |
| Logo | 300px |

### Lazy loading

```html
<img
  src="/images/example.jpg"
  alt="Descriptive alt text"
  loading="lazy"
  decoding="async"
  width="800"
  height="450"
/>
```

---

## Alt text

**SIEMPRE escribir alt text descriptivo:**

```html
<!-- ❌ No hacer esto: -->
<img src="photo.jpg" alt="photo">

<!-- ✅ Hacer esto: -->
<img src="photo.jpg" alt="Natural light streaming through window film-protected windows in a Philadelphia brownstone living room">
```

## Mike Kinsey — fotos reales (NO IA)

Mike Kinsey es una persona real. **NO generar imágenes de él con IA.** El usuario va a proporcionar fotos reales.
