import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// ─── Sitemap serialize: add <lastmod> to every URL ─────────────────
// Uses git last-commit date for each page's source file.
// This gives Google + AI engines a freshness signal (~1.8× AI-citation lift).
// On Vercel, git checkout resets file mtimes, so we MUST use git log (not statSync).
import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { join } from 'path';

function gitLastmod(filePath) {
  try {
    const date = execSync(
      `git log -1 --format=%cI -- "${filePath}" 2>/dev/null || echo ""`,
      { encoding: 'utf-8', cwd: process.cwd() }
    ).trim();
    return date || null;
  } catch {
    return null;
  }
}

function getLastmod(page) {
  const srcPath = page
    .replace('https://windowfilmphiladelphia.net', '')
    .replace(/\/$/, ''); // e.g. "/blog/uv-window-film-philadelphia" or "/about"

  // 1. Blog posts: src/content/blog/{slug}.md
  if (srcPath.startsWith('/blog/') && !srcPath.includes('/category/')) {
    const slug = srcPath.replace('/blog/', '');
    const mdPath = join('src/content/blog', slug + '.md');
    if (existsSync(join(process.cwd(), mdPath))) {
      const date = gitLastmod(mdPath);
      if (date) return date;
    }
  }

  // 2. Astro pages: try src/pages/{path}.astro or src/pages/{path}/index.astro
  //    Strip leading slash for filesystem lookup
  const relPath = srcPath.replace(/^\//, '');
  const candidates = [
    join('src/pages', relPath + '.astro'),           // /about → src/pages/about.astro
    join('src/pages', relPath, 'index.astro'),        // /about → src/pages/about/index.astro
    join('src/pages', relPath + '.md'),               // /blog/post → src/pages/blog/post.md (fallback)
  ];

  for (const candidate of candidates) {
    if (existsSync(join(process.cwd(), candidate))) {
      const date = gitLastmod(candidate);
      if (date) return date;
    }
  }

  // 3. Product sub-pages: src/pages/products/{brand}/{slug}.astro
  if (srcPath.startsWith('/products/') && srcPath.split('/').length > 2) {
    const productPath = join('src/pages', relPath + '.astro');
    if (existsSync(join(process.cwd(), productPath))) {
      const date = gitLastmod(productPath);
      if (date) return date;
    }
  }

  // 4. Fall back to last overall git commit (better than nothing)
  const fallback = gitLastmod('');
  if (fallback) return fallback;

  // 5. Final fallback: build time
  return new Date().toISOString();
}

export default defineConfig({
  site: 'https://windowfilmphiladelphia.net',
  trailingSlash: 'always',
  build: {
    assets: '_assets',
  },
  integrations: [
    tailwind({
      applyBaseStyles: false, // We have custom base styles in global.css
    }),
    sitemap({
      filter: (page) => !page.includes('/thank-you/') && !page.includes('/index-hiw-new'),
      serialize(item) {
        if (item.url) {
          item.lastmod = getLastmod(item.url);
        }
        return item;
      },
    }),
    icon({
      include: {
        lucide: ['*'],
        iconamoon: ['*'],
        'line-md': ['*'],
      },
    }),
  ],
});
