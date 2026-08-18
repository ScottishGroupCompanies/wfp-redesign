import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// ─── Sitemap serialize: add <lastmod> to every URL ─────────────────
// Uses the file's last git-commit date (falls back to build time).
// This gives Google + AI engines a freshness signal (~1.8× AI-citation lift).
import { execSync } from 'child_process';
import { existsSync, statSync } from 'fs';
import { join } from 'path';

function getLastmod(page) {
  try {
    const srcPath = page
      .replace('https://windowfilmphiladelphia.net', '')
      .replace(/\/$/, '');
    
    // Check if it's a blog post (markdown content)
    const blogPath = join(process.cwd(), 'src/content/blog', srcPath.replace('/blog/', '') + '.md');
    if (existsSync(blogPath)) {
      return statSync(blogPath).mtime.toISOString();
    }
    
    // Try git last-commit date for the source file
    const gitDate = execSync(
      `git log -1 --format=%cI -- "${srcPath}" 2>/dev/null || echo ""`,
      { encoding: 'utf-8', cwd: process.cwd() }
    ).trim();
    
    if (gitDate) return gitDate;
    
    // Fall back to the most recent git commit date overall
    return execSync('git log -1 --format=%cI', { encoding: 'utf-8', cwd: process.cwd() }).trim();
  } catch {
    return new Date().toISOString();
  }
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
