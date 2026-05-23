import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://feldonhaynes.com', // Update to confirmed domain before launch
  output: 'server',
  adapter: vercel(),
  compressHTML: true,
  integrations: [
    sitemap({
      // Exclude noindex and ad-only pages
      filter: (page) =>
        !page.includes('/privacy') &&
        !page.includes('/terms') &&
        !page.includes('/start') &&
        !page.includes('/lp') &&
        !page.includes('/keystatic'),
    }),
    keystatic(),
  ],
});