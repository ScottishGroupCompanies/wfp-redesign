import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://www.windowfilmphiladelphia.net',
  trailingSlash: 'always',
  build: {
    assets: '_assets',
  },
  integrations: [
    icon({
      include: {
        lucide: ['*'],
        iconamoon: ['*'],
        'line-md': ['*'],
      },
    }),
  ],
});
