// keystatic.config.ts — Keystatic CMS configuration
// Admin URL: feldeluxe.com/keystatic
// Storage: GitHub mode (requires GitHub OAuth app — see info.md Section 11)
// Editable fields: headline, bundles, testimonials, about copy, awards, contact details

import { config, collection, singleton, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'pixovauk/feldon-haynes-coaching', // Update to actual GitHub org/repo before launch
  },

  ui: {
    brand: {
      name: 'Feldon Haynes Coaching',
    },
  },

  singletons: {

    // ── Homepage headline and subheading ──────────────────────────────
    homepage: singleton({
      label: 'Homepage',
      path: 'src/data/homepage',
      schema: {
        headline: fields.text({
          label: 'Hero headline',
          description: 'The main H1 on the homepage. Keep under 60 characters.',
          defaultValue: 'Turn your idea into a plan.',
          validation: { length: { max: 80 } },
        }),
        subheading: fields.text({
          label: 'Hero subheading',
          description: 'The short line below the headline.',
          multiline: true,
          defaultValue: 'Business coaching for small business owners and ambitious founders — from someone who\'s actually done it.',
        }),
        cta_primary: fields.text({
          label: 'Primary CTA button text',
          defaultValue: 'Book your free discovery call',
          validation: { length: { max: 50 } },
        }),
      },
    }),

    // ── Contact details ───────────────────────────────────────────────
    contact: singleton({
      label: 'Contact details',
      path: 'src/data/contact',
      schema: {
        email: fields.text({
          label: 'Email address',
          defaultValue: 'info@feldeluxe.com',
        }),
        phone: fields.text({
          label: 'Phone number',
          defaultValue: '07562 614867',
        }),
        whatsapp_url: fields.url({
          label: 'WhatsApp link',
          defaultValue: 'https://wa.me/07562614867',
        }),
        calendly_discovery: fields.url({
          label: 'Calendly — discovery call URL',
          defaultValue: 'https://calendly.com/feldeluxe/discovery-call',
        }),
      },
    }),

    // ── About page body copy ──────────────────────────────────────────
    about: singleton({
      label: 'About page',
      path: 'src/data/about',
      schema: {
        story_paragraph_1: fields.text({
          label: 'Story — paragraph 1',
          multiline: true,
        }),
        story_paragraph_2: fields.text({
          label: 'Story — paragraph 2',
          multiline: true,
        }),
        story_paragraph_3: fields.text({
          label: 'Story — paragraph 3',
          multiline: true,
        }),
        story_paragraph_4: fields.text({
          label: 'Story — paragraph 4',
          multiline: true,
        }),
        years_coaching: fields.text({
          label: 'Years coaching (number only)',
          description: 'Used in stats. Confirm with Feldon.',
          defaultValue: '[YEARS_COACHING]',
        }),
      },
    }),

  },

  collections: {

    // ── Coaching bundles ──────────────────────────────────────────────
    bundles: collection({
      label: 'Coaching bundles',
      path: 'src/data/bundles/*',
      slugField: 'name',
      schema: {
        name: fields.slug({
          name: {
            label: 'Bundle name',
            description: 'E.g. "The Business Plan Bundle"',
          },
        }),
        sessions: fields.number({
          label: 'Number of sessions',
          validation: { isRequired: true, min: 1, max: 20 },
        }),
        price: fields.number({
          label: 'Current price (£)',
          validation: { isRequired: true, min: 0 },
        }),
        price_was: fields.number({
          label: 'Original price — was (£)',
          description: 'The crossed-out "was" price shown on the card.',
          validation: { isRequired: true, min: 0 },
        }),
        for_who: fields.text({
          label: 'Who this is for',
          description: 'One sentence. Shown under the price.',
          multiline: true,
        }),
        description: fields.text({
          label: 'Short description',
          description: 'What the bundle includes — comma-separated or short lines.',
          multiline: true,
        }),
        calendly_url: fields.url({
          label: 'Calendly booking URL',
          description: 'The specific Calendly link for this bundle. Leave blank to use the discovery call URL.',
        }),
        sort_order: fields.number({
          label: 'Sort order (1–4)',
          description: '1 = first card on the left. Action Sprint = 3 (Most Popular).',
          validation: { isRequired: true, min: 1, max: 4 },
        }),
        most_popular: fields.checkbox({
          label: 'Show "Most Popular" badge',
          defaultValue: false,
        }),
      },
    }),

    // ── Testimonials ──────────────────────────────────────────────────
    testimonials: collection({
      label: 'Testimonials',
      path: 'src/data/testimonials/*',
      slugField: 'reviewer_name',
      schema: {
        reviewer_name: fields.slug({
          name: {
            label: 'Reviewer name',
            description: 'First name only, or first name + last initial.',
          },
        }),
        reviewer_role: fields.text({
          label: 'Reviewer role or context',
          description: 'E.g. "Founder, London" or "Marketing webinar attendee".',
        }),
        quote: fields.text({
          label: 'Testimonial quote',
          multiline: true,
          description: 'The full review text. Do not edit the reviewer\'s words.',
        }),
        source: fields.select({
          label: 'Source',
          options: [
            { label: 'Trustpilot', value: 'trustpilot' },
            { label: 'LinkedIn', value: 'linkedin' },
            { label: 'Direct', value: 'direct' },
          ],
          defaultValue: 'trustpilot',
        }),
        published: fields.checkbox({
          label: 'Show on website',
          defaultValue: false,
          description: 'Only tick once permission is confirmed.',
        }),
      },
    }),

    // ── Awards ────────────────────────────────────────────────────────
    awards: collection({
      label: 'Awards',
      path: 'src/data/awards/*',
      slugField: 'name',
      schema: {
        name: fields.slug({
          name: {
            label: 'Award name',
            description: 'E.g. "EPIC Spirit Award"',
          },
        }),
        issuing_body: fields.text({
          label: 'Issuing organisation',
          description: 'The organisation that gave the award.',
        }),
        year: fields.text({
          label: 'Year awarded',
          validation: { length: { min: 4, max: 4 } },
        }),
        description: fields.text({
          label: 'Short description',
          description: 'One sentence about what this award recognises.',
          multiline: true,
        }),
        confirmed: fields.checkbox({
          label: 'Confirmed with Feldon',
          defaultValue: false,
        }),
      },
    }),

  },
});
