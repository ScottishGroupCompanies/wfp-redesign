import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.windowfilmphiladelphia.net',
  trailingSlash: 'always',
  build: {
    assets: '_assets',
  },
});
