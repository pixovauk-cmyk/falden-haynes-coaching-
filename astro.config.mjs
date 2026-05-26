import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://feldonhaynes.com', // Update to confirmed domain before launch
  output: 'server',
  adapter: vercel({
    includeFiles: [
      'src/data/homepage.yaml',
      'src/data/site-settings.yaml',
      'src/data/about-page.yaml',
      'src/data/nav.yaml',
      'src/data/footer.yaml',
      'src/data/contact-page.yaml',
      'src/data/bundles/the-project-bundle.yaml',
      'src/data/bundles/the-action-sprint-bundle.yaml',
      'src/data/bundles/the-business-plan-bundle.yaml',
      'src/data/bundles/the-direction-bundle.yaml',
      'src/data/testimonials/workshop-attendee.yaml',
      'src/data/testimonials/new-venture-founder.yaml',
      'src/data/testimonials/business-owner.yaml',
      'src/data/testimonials/business-manager.yaml',
    ],
  }),
  compressHTML: true,
  integrations: [
    react(),
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