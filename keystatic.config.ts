import { config, collection, singleton, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: { owner: 'feldelux-lgtm', name: 'falden-haynes-coaching-' },
  },
  ui: {
    brand: { name: 'Feldon Haynes — CMS' },
  },

  singletons: {

    site_settings: singleton({
      label: 'Site settings',
      path: 'src/data/site-settings',
      schema: {
        email: fields.text({ label: 'Email address', defaultValue: 'Feldonhaynes@gmail.com' }),
        phone: fields.text({ label: 'Phone number', defaultValue: '07562 614867' }),
        whatsapp_url: fields.text({ label: 'WhatsApp URL', defaultValue: 'https://wa.me/447562614867' }),
        location: fields.text({ label: 'Location', defaultValue: 'Halesowen, West Midlands' }),
        linkedin_url: fields.text({ label: 'LinkedIn URL', defaultValue: 'https://www.linkedin.com/in/feldon-haynes/' }),
        linktree_url: fields.text({ label: 'Linktree URL', defaultValue: 'https://linktr.ee/Feldeluxe' }),
        trustpilot_url: fields.text({ label: 'Trustpilot URL', defaultValue: 'https://uk.trustpilot.com/review/feldonhaynes.com' }),
        google_reviews_url: fields.text({ label: 'Google Reviews URL', defaultValue: 'https://www.google.com/search?q=feldon+haynes+coaching' }),
        calendly_discovery: fields.text({ label: 'Calendly — Discovery call', defaultValue: 'https://calendly.com/feldon-haynes/discovery-call' }),
        calendly_bundle_starter: fields.text({ label: 'Calendly — Starter bundle', defaultValue: 'https://calendly.com/feldon-haynes/packages/da7fbbe4-840c-4ea8-8147-2128f99cfd6b' }),
        calendly_bundle_foundation: fields.text({ label: 'Calendly — Foundation bundle', defaultValue: 'https://calendly.com/feldon-haynes/packages/549dd535-e12c-4506-822a-9a839af25318' }),
        calendly_bundle_action: fields.text({ label: 'Calendly — Action Sprint', defaultValue: 'https://calendly.com/feldon-haynes/packages/8af8f4b4-b4fc-4b38-a4d7-4c8863f57ce5' }),
        calendly_bundle_full: fields.text({ label: 'Calendly — Full Transformation', defaultValue: 'https://calendly.com/feldon-haynes/packages/bcd3e931-3e20-4faa-9d96-2a82cc4e121a' }),
      },
    }),

    homepage: singleton({
      label: 'Homepage',
      path: 'src/data/homepage',
      schema: {
        hero_chip: fields.text({ label: 'Hero chip tag', defaultValue: '1-to-1 Entrepreneurial Coaching' }),
        hero_headline: fields.text({ label: 'Hero headline (H1)', multiline: true, defaultValue: "The business coach who's actually built businesses." }),
        hero_subheading: fields.text({ label: 'Hero subheading', multiline: true, defaultValue: '1-to-1 business and project planning coaching for small business owners and ambitious founders. From someone who has actually built businesses, not just read about them.' }),
        hero_cta_primary: fields.text({ label: 'Primary CTA button', defaultValue: 'Book your free discovery call' }),
        hero_cta_secondary: fields.text({ label: 'Secondary CTA button', defaultValue: 'See how it works' }),
        hero_trust_1: fields.text({ label: 'Trust item 1', defaultValue: '35+ businesses started from scratch' }),
        hero_trust_2: fields.text({ label: 'Trust item 2', defaultValue: '40+ founders supported' }),
        hero_trust_3: fields.text({ label: 'Trust item 3', defaultValue: '3 industry awards including EPIC Spirit Award' }),
        hero_float_number: fields.text({ label: 'Floating stat — number', defaultValue: '40+' }),
        hero_float_label: fields.text({ label: 'Floating stat — label', defaultValue: 'Founders supported' }),
        hero_award_chip: fields.text({ label: 'Award chip text', defaultValue: 'EPIC Spirit Award' }),
      },
    }),

    about_page: singleton({
      label: 'About page',
      path: 'src/data/about-page',
      schema: {
        story_p1: fields.text({ label: 'Story — paragraph 1', multiline: true }),
        story_p2: fields.text({ label: 'Story — paragraph 2', multiline: true }),
        story_p3: fields.text({ label: 'Story — paragraph 3', multiline: true }),
        story_p4: fields.text({ label: 'Story — paragraph 4', multiline: true }),
        mission_heading: fields.text({ label: 'Mission heading', defaultValue: 'My mission' }),
        mission_body: fields.text({ label: 'Mission body', multiline: true }),
        years_coaching: fields.text({ label: 'Years coaching stat', defaultValue: '10+' }),
        businesses_started: fields.text({ label: 'Businesses started stat', defaultValue: '35+' }),
        founders_supported: fields.text({ label: 'Founders supported stat', defaultValue: '40+' }),
      },
    }),

    nav: singleton({
      label: 'Navigation',
      path: 'src/data/nav',
      schema: {
        cta_text: fields.text({ label: 'CTA button text', defaultValue: 'Book a call' }),
        cta_text_mobile: fields.text({ label: 'CTA button text (mobile menu)', defaultValue: 'Book a free call' }),
      },
    }),

    footer: singleton({
      label: 'Footer',
      path: 'src/data/footer',
      schema: {
        tagline: fields.text({ label: 'Tagline', multiline: true, defaultValue: "1-to-1 business coaching for ambitious founders.\nFrom someone who's actually done it." }),
        copyright: fields.text({ label: 'Copyright text', defaultValue: '© 2026 Feldon Haynes Coaching · All rights reserved.' }),
        cta_text: fields.text({ label: 'Footer CTA button text', defaultValue: 'Book a free call' }),
      },
    }),

    contact_page: singleton({
      label: 'Contact page',
      path: 'src/data/contact-page',
      schema: {
        hero_heading: fields.text({ label: 'Page heading', defaultValue: 'Get in touch' }),
        hero_sub: fields.text({ label: 'Page subheading', multiline: true, defaultValue: "Not sure where to start? Take the quick quiz below and I'll point you in the right direction." }),
        quiz_heading: fields.text({ label: 'Quiz section heading', defaultValue: 'Not sure where to start?' }),
        quiz_body: fields.text({ label: 'Quiz section body', multiline: true, defaultValue: "Eight quick questions. I'll tell you which package fits where you are right now, or whether a free call makes more sense first." }),
        options_heading: fields.text({ label: 'Contact options heading', defaultValue: "I'm easy to reach." }),
        email_card_body: fields.text({ label: 'Email card body', defaultValue: "Send me a message and I'll reply within 48 hours." }),
        whatsapp_card_body: fields.text({ label: 'WhatsApp card body', defaultValue: "Drop me a message and I'll get back to you." }),
        call_card_body: fields.text({ label: 'Book a call card body', defaultValue: '30 minutes, no pitch, no pressure. Just a conversation.' }),
      },
    }),

    privacy_page: singleton({
      label: 'Privacy policy',
      path: 'src/data/privacy-page',
      schema: {
        last_updated: fields.text({ label: 'Last updated date', defaultValue: '27 June 2025' }),
        content: fields.document({
          label: 'Privacy policy content',
          formatting: true,
          links: true,
        }),
      },
    }),

    terms_page: singleton({
      label: 'Terms & conditions',
      path: 'src/data/terms-page',
      schema: {
        last_updated: fields.text({ label: 'Last updated date', defaultValue: '27 June 2025' }),
        content: fields.document({
          label: 'Terms & conditions content',
          formatting: true,
          links: true,
        }),
      },
    }),

  },

  collections: {

    blog: collection({
      label: 'Blog posts',
      path: 'src/data/blog/*',
      slugField: 'title',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        excerpt: fields.text({ label: 'Excerpt', multiline: true, description: 'Short summary shown on blog index.' }),
        date: fields.date({ label: 'Published date' }),
        featured_image: fields.image({
          label: 'Featured image',
          directory: 'public/Images/blog',
          publicPath: '/Images/blog/',
        }),
        author: fields.text({ label: 'Author', defaultValue: 'Feldon Haynes' }),
        seo_title: fields.text({ label: 'SEO title (leave blank to use post title)' }),
        seo_description: fields.text({ label: 'Meta description', multiline: true }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          images: { directory: 'public/Images/blog', publicPath: '/Images/blog/' },
        }),
      },
    }),

    testimonials: collection({
      label: 'Testimonials',
      path: 'src/data/testimonials/*',
      slugField: 'reviewer_name',
      schema: {
        reviewer_name: fields.slug({ name: { label: 'Reviewer name', description: 'First name only, or first name + last initial.' } }),
        reviewer_role: fields.text({ label: 'Role or context', description: 'E.g. "Founder, London"' }),
        quote: fields.text({ label: 'Testimonial quote', multiline: true }),
        source: fields.select({
          label: 'Source',
          options: [
            { label: 'Trustpilot', value: 'trustpilot' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'Google', value: 'google' },
            { label: 'Direct', value: 'direct' },
          ],
          defaultValue: 'trustpilot',
        }),
        published: fields.checkbox({ label: 'Show on website', defaultValue: false }),
      },
    }),

    bundles: collection({
      label: 'Coaching bundles',
      path: 'src/data/bundles/*',
      slugField: 'name',
      schema: {
        name: fields.slug({ name: { label: 'Bundle name' } }),
        tagline: fields.text({ label: 'Tagline (shown under name)', defaultValue: 'Specific project' }),
        sessions: fields.number({ label: 'Number of sessions', validation: { isRequired: true, min: 1 } }),
        price: fields.number({ label: 'Current price (£)', validation: { isRequired: true, min: 0 } }),
        price_was: fields.number({ label: 'Was price (£)', validation: { isRequired: true, min: 0 } }),
        for_who: fields.text({ label: 'Who this is for', multiline: true }),
        description: fields.text({ label: 'Short description', multiline: true }),
        calendly_url: fields.text({ label: 'Calendly booking URL' }),
        sort_order: fields.number({ label: 'Sort order (1–4)', validation: { isRequired: true, min: 1, max: 4 } }),
        most_popular: fields.checkbox({ label: 'Show "Most Popular" badge', defaultValue: false }),
      },
    }),

  },
});
