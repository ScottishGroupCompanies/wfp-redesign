import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

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
