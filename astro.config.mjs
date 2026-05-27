import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.windowfilmphiladelphia.net',
  trailingSlash: 'always',
  build: {
    assets: '_assets',
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/thank-you/'),
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
