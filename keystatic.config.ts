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
        calendly_bundle_starter: fields.text({ label: 'Calendly — Project Bundle', defaultValue: 'https://calendly.com/feldon-haynes/packages/da7fbbe4-840c-4ea8-8147-2128f99cfd6b' }),
        calendly_bundle_foundation: fields.text({ label: 'Calendly — Action Sprint', defaultValue: 'https://calendly.com/feldon-haynes/packages/549dd535-e12c-4506-822a-9a839af25318' }),
        calendly_bundle_action: fields.text({ label: 'Calendly — Business Plan', defaultValue: 'https://calendly.com/feldon-haynes/packages/8af8f4b4-b4fc-4b38-a4d7-4c8863f57ce5' }),
        calendly_bundle_full: fields.text({ label: 'Calendly — Direction Bundle', defaultValue: 'https://calendly.com/feldon-haynes/packages/bcd3e931-3e20-4faa-9d96-2a82cc4e121a' }),
      },
    }),

    homepage: singleton({
      label: 'Homepage',
      path: 'src/data/homepage',
      schema: {
        // ── Hero ──────────────────────────────────────────────────────────
        hero_chip: fields.text({ label: 'Hero — chip tag', defaultValue: '1-to-1 Entrepreneurial Coaching' }),
        hero_headline: fields.text({ label: 'Hero — headline (H1)', multiline: true, defaultValue: "The business coach who's actually built businesses." }),
        hero_subheading: fields.text({ label: 'Hero — subheading', multiline: true, defaultValue: '1-to-1 business and project planning coaching for small business owners and ambitious founders. From someone who has actually built businesses, not just read about them.' }),
        hero_cta_primary: fields.text({ label: 'Hero — primary CTA button', defaultValue: 'Book your free discovery call' }),
        hero_cta_secondary: fields.text({ label: 'Hero — secondary CTA button', defaultValue: 'See how it works' }),
        hero_trust_1: fields.text({ label: 'Hero — trust item 1', defaultValue: '35+ businesses started from scratch' }),
        hero_trust_2: fields.text({ label: 'Hero — trust item 2', defaultValue: '40+ founders supported' }),
        hero_trust_3: fields.text({ label: 'Hero — trust item 3', defaultValue: '3 industry awards including EPIC Spirit Award' }),
        hero_float_number: fields.text({ label: 'Hero — floating stat number', defaultValue: '40+' }),
        hero_float_label: fields.text({ label: 'Hero — floating stat label', defaultValue: 'Founders supported' }),
        hero_award_chip: fields.text({ label: 'Hero — award chip', defaultValue: 'EPIC Spirit Award' }),

        // ── Problem Grid ──────────────────────────────────────────────────
        prob_chip: fields.text({ label: 'Problems — chip tag', defaultValue: "Who it's for" }),
        prob_h2: fields.text({ label: 'Problems — heading', defaultValue: 'Is this you?' }),
        prob_intro: fields.text({ label: 'Problems — intro text', multiline: true, defaultValue: 'Four types of founders come through my door. One of them is you.' }),
        prob_card1_chip: fields.text({ label: 'Card 1 — label', defaultValue: 'Aspiring Founder' }),
        prob_card1_title: fields.text({ label: 'Card 1 — title', defaultValue: "You've got the idea. Now what?" }),
        prob_card1_body: fields.text({ label: 'Card 1 — body', multiline: true, defaultValue: "You know you want to build something, but you don't know where to start. I'll help you turn it into a plan you can follow." }),
        prob_card2_chip: fields.text({ label: 'Card 2 — label', defaultValue: 'Early-Stage Founder' }),
        prob_card2_title: fields.text({ label: 'Card 2 — title', defaultValue: "You've started. Now it gets real." }),
        prob_card2_body: fields.text({ label: 'Card 2 — body', multiline: true, defaultValue: "The first steps are done. Now you're in the messy middle: money, systems, customers, all at once. Let's cut through it." }),
        prob_card3_chip: fields.text({ label: 'Card 3 — label', defaultValue: 'Stuck Founder' }),
        prob_card3_title: fields.text({ label: 'Card 3 — title', defaultValue: "You're running. But something's off." }),
        prob_card3_body: fields.text({ label: 'Card 3 — body', multiline: true, defaultValue: "Growth has stalled or the business feels harder than it should. I'll help you find out why, and fix it." }),
        prob_card4_chip: fields.text({ label: 'Card 4 — label', defaultValue: 'Business Owner' }),
        prob_card4_title: fields.text({ label: 'Card 4 — title', defaultValue: "Established. Now let's build on it." }),
        prob_card4_body: fields.text({ label: 'Card 4 — body', multiline: true, defaultValue: "Your business is running. But there's more: scaling, systemising, or just getting your time back. I can help with all of it." }),
        prob_cta: fields.text({ label: 'Problems — CTA button text', defaultValue: 'Book a free 30-minute call' }),

        // ── Steps / Services ──────────────────────────────────────────────
        steps_chip: fields.text({ label: 'Steps — chip tag', defaultValue: 'How it works' }),
        steps_h2: fields.text({ label: 'Steps — heading', defaultValue: '3 easy steps' }),
        step1_title: fields.text({ label: 'Step 1 — title', defaultValue: 'Got your idea?' }),
        step1_body: fields.text({ label: 'Step 1 — body', multiline: true, defaultValue: 'You have something in mind — a business, a project, a change you want to make. That is the starting point. Bring it as it is. Half-formed is fine.' }),
        step2_title: fields.text({ label: 'Step 2 — title', defaultValue: 'Choose the pack that suits your idea' }),
        step2_body: fields.text({ label: 'Step 2 — body', multiline: true, defaultValue: 'Not sure which package fits? Take the quick quiz and I will point you in the right direction.' }),
        step2_link: fields.text({ label: 'Step 2 — link text', defaultValue: 'Take the quiz' }),
        step3_title: fields.text({ label: 'Step 3 — title', defaultValue: 'Get a plan to bring your idea to life' }),
        step3_body: fields.text({ label: 'Step 3 — body', multiline: true, defaultValue: 'Real, structured, actionable. A plan built around your idea, your resources, and what you want to achieve.' }),
        step3_link: fields.text({ label: 'Step 3 — link text', defaultValue: 'Book a free call' }),

        // ── Session Includes ──────────────────────────────────────────────
        session_chip: fields.text({ label: 'Session — chip tag', defaultValue: 'Every session' }),
        session_h2: fields.text({ label: 'Session — heading', defaultValue: 'This is what you get. Every time.' }),
        session_sub: fields.text({ label: 'Session — sub text', defaultValue: 'Every bundle. Every session. No exceptions.' }),
        session_f1_title: fields.text({ label: 'Feature 1 — title', defaultValue: 'Recorded every time' }),
        session_f1_body: fields.text({ label: 'Feature 1 — body', multiline: true, defaultValue: 'Full replay in your inbox. Revisit any moment, any time.' }),
        session_f2_title: fields.text({ label: 'Feature 2 — title', defaultValue: 'Action plan the same day' }),
        session_f2_body: fields.text({ label: 'Feature 2 — body', multiline: true, defaultValue: 'Not next week. Written and in your inbox before you sleep.' }),
        session_f3_title: fields.text({ label: 'Feature 3 — title', defaultValue: "I'm reachable between sessions" }),
        session_f3_body: fields.text({ label: 'Feature 3 — body', multiline: true, defaultValue: 'Drop me a message when something comes up. I respond within 48 hours.' }),

        // ── About Teaser ──────────────────────────────────────────────────
        about_chip: fields.text({ label: 'About — chip tag', defaultValue: 'About Feldon' }),
        about_h2: fields.text({ label: 'About — heading', multiline: true, defaultValue: "I've started 35 businesses. Now I help you build yours." }),
        about_body1: fields.text({ label: 'About — paragraph 1', multiline: true, defaultValue: "I know what it's like to have an idea you believe in and not know where to take it next. I've also built businesses from scratch. Made the mistakes, figured out what works, and come out the other side with something real." }),
        about_body2: fields.text({ label: 'About — paragraph 2', multiline: true, defaultValue: "That's what I bring to every session. Not theory. Not frameworks from a book. Real experience from someone who's been in the same position and found a way through." }),
        about_stat1_num: fields.text({ label: 'About — stat 1 number', defaultValue: '35+' }),
        about_stat1_label: fields.text({ label: 'About — stat 1 label', defaultValue: 'Businesses started' }),
        about_stat2_num: fields.text({ label: 'About — stat 2 number', defaultValue: '40+' }),
        about_stat2_label: fields.text({ label: 'About — stat 2 label', defaultValue: 'Founders supported' }),
        about_stat3_num: fields.text({ label: 'About — stat 3 number', defaultValue: '3×' }),
        about_stat3_label: fields.text({ label: 'About — stat 3 label', defaultValue: 'Industry awards' }),
        about_award_chip: fields.text({ label: 'About — award overlay chip', defaultValue: '3× Award winner' }),
        about_btn1: fields.text({ label: 'About — primary button', defaultValue: 'Read my full story' }),
        about_btn2: fields.text({ label: 'About — secondary button', defaultValue: 'Book a free call' }),

        // ── Bundles section header ────────────────────────────────────────
        bundles_chip: fields.text({ label: 'Bundles — chip tag', defaultValue: 'Investment bundles' }),
        bundles_h2: fields.text({ label: 'Bundles — heading', defaultValue: 'Choose your starting point' }),
        bundles_intro: fields.text({ label: 'Bundles — intro text', multiline: true, defaultValue: 'Launch pricing. All sessions online, Wednesdays and Thursdays, 8am to 6pm.' }),

        // ── Testimonials header ───────────────────────────────────────────
        test_h2: fields.text({ label: 'Testimonials — heading', multiline: true, defaultValue: "Honest words from people I've worked with." }),
        test_sub: fields.text({ label: 'Testimonials — sub text', multiline: true, defaultValue: 'Real feedback from founders and business owners. Verified on Trustpilot.' }),

        // ── Final CTA ─────────────────────────────────────────────────────
        cta_chip: fields.text({ label: 'CTA — chip tag', defaultValue: 'Ready to start?' }),
        cta_h2: fields.text({ label: 'CTA — heading', defaultValue: "Let's build something real together." }),
        cta_body: fields.text({ label: 'CTA — body text', multiline: true, defaultValue: "Your free 30-minute discovery call costs nothing. I'll listen to where you are, tell you honestly whether I think I can help, and if we're a good fit, we'll talk next steps. No pitch. No pressure." }),
        cta_social_text: fields.text({ label: 'CTA — social proof text', defaultValue: '40+ founders already working with Feldon' }),
        cta_btn: fields.text({ label: 'CTA — button text', defaultValue: 'Book your free discovery call' }),
        cta_note: fields.text({ label: 'CTA — note below button', defaultValue: 'Free · 30 minutes · No obligation' }),
      },
    }),

    about_page: singleton({
      label: 'About page',
      path: 'src/data/about-page',
      schema: {
        // ── Hero ──────────────────────────────────────────────────────────
        hero_chip: fields.text({ label: 'Hero — chip tag', defaultValue: 'Business Coach and Mentor' }),
        hero_sub: fields.text({ label: 'Hero — subheading', multiline: true, defaultValue: 'Serial entrepreneur. 35+ businesses started. 40+ founders supported. Based in Halesowen, coaching founders across the UK online.' }),
        hero_btn: fields.text({ label: 'Hero — button text', defaultValue: 'Read my story' }),
        hero_float_num: fields.text({ label: 'Hero — floating stat number', defaultValue: '40+' }),
        hero_float_label: fields.text({ label: 'Hero — floating stat label', defaultValue: 'Founders supported' }),
        hero_award_chip: fields.text({ label: 'Hero — award chip', defaultValue: 'EPIC Spirit Award' }),

        // ── Story timeline ────────────────────────────────────────────────
        story_chip: fields.text({ label: 'Story — eyebrow', defaultValue: 'My journey' }),
        story_h2: fields.text({ label: 'Story — heading', multiline: true, defaultValue: 'Where I came from.\nAnd why I coach.' }),
        story_sub: fields.text({ label: 'Story — sub text', multiline: true, defaultValue: 'A story that starts earlier than most. And gets more honest along the way.' }),
        m1_tag: fields.text({ label: 'Milestone 1 — tag', defaultValue: 'The start' }),
        m1_h3: fields.text({ label: 'Milestone 1 — heading', defaultValue: "I didn't wait for permission." }),
        m1_body1: fields.text({ label: 'Milestone 1 — paragraph 1', multiline: true, defaultValue: "I started my first business when most people my age were still figuring out what they wanted to study. That was a choice, and it came with everything you'd expect. The excitement. The mistakes. The moments of genuine progress, and the moments where it all felt like it was going backwards." }),
        m1_body2: fields.text({ label: 'Milestone 1 — paragraph 2', multiline: true, defaultValue: 'Raised in the West Midlands, this community has always been part of how I think and operate.' }),
        m2_tag: fields.text({ label: 'Milestone 2 — tag', defaultValue: 'The real bit' }),
        m2_h3: fields.text({ label: 'Milestone 2 — heading', defaultValue: '35 businesses. Not all of them worked.' }),
        m2_body1: fields.text({ label: 'Milestone 2 — paragraph 1', multiline: true, defaultValue: "I've now started 35 businesses. They haven't all worked. That's the bit most coaches won't tell you. But it's also the bit that matters most. Because you don't get real business knowledge from the ones that went smoothly. You get it from figuring out what went wrong and what you'd do differently." }),
        m2_body2: fields.text({ label: 'Milestone 2 — paragraph 2', multiline: true, defaultValue: "The West Midlands is where I grew up, where I built my businesses, and where I'm based now. I've worked with the Black Country Chamber of Commerce, delivered workshops at the University of Warwick Science Park, and spent time in rooms with people who are trying to build something real." }),
        m3_tag: fields.text({ label: 'Milestone 3 — tag', defaultValue: 'Why I coach' }),
        m3_h3: fields.text({ label: 'Milestone 3 — heading', defaultValue: 'I got tired of watching talented people get stuck.' }),
        m3_body1: fields.text({ label: 'Milestone 3 — paragraph 1', multiline: true, defaultValue: "When I started coaching, it wasn't a pivot or a next step. It came from watching talented, motivated people get stuck in exactly the same places. Not because they lacked ability, but because no one had helped them turn what was in their head into a structured plan." }),
        m3_body2: fields.text({ label: 'Milestone 3 — paragraph 2', defaultValue: "That's what I do. And that's why I do it." }),
        m3_cta: fields.text({ label: 'Milestone 3 — CTA text', defaultValue: 'Book a free call' }),

        // ── Mission / Vision / Values ─────────────────────────────────────
        mvv_chip: fields.text({ label: 'MVV — eyebrow', defaultValue: 'The why behind the work' }),
        mvv_h2: fields.text({ label: 'MVV — heading', defaultValue: 'Mission, Vision & Values' }),
        mission_body: fields.text({ label: 'Mission — body', multiline: true, defaultValue: 'I started this to make entrepreneurship practical and achievable through action-focused coaching and structured planning, helping startup founders seize opportunities and build successful ventures that create meaningful impact.' }),
        vision_body: fields.text({ label: 'Vision — body', multiline: true, defaultValue: 'A future where entrepreneurial success is driven by preparation rather than chance. More start-up businesses in the UK solving real problems, equipped with the planning and confidence to build businesses that last.' }),
        value1_title: fields.text({ label: 'Value 1 — title', defaultValue: 'Always be growing' }),
        value1_body: fields.text({ label: 'Value 1 — body', multiline: true, defaultValue: 'committed to learning, experimenting and finding the right people.' }),
        value2_title: fields.text({ label: 'Value 2 — title', defaultValue: 'Follow up when needed' }),
        value2_body: fields.text({ label: 'Value 2 — body', multiline: true, defaultValue: 'a call to keep you on track with what you are doing.' }),
        value3_title: fields.text({ label: 'Value 3 — title', defaultValue: 'Listen for clarity' }),
        value3_body: fields.text({ label: 'Value 3 — body', multiline: true, defaultValue: 'gaining clarity to provide the best advice possible.' }),

        // ── How I work ────────────────────────────────────────────────────
        hw_chip: fields.text({ label: 'How I work — eyebrow', defaultValue: 'How I work' }),
        hw_h2: fields.text({ label: 'How I work — heading', multiline: true, defaultValue: 'No theory. No fluff.\nJust honest work.' }),
        hw_sub: fields.text({ label: 'How I work — sub text', multiline: true, defaultValue: 'What you get from me, every session, every client, no exceptions.' }),
        hw_card1_title: fields.text({ label: 'Card 1 — title', defaultValue: 'I come prepared.' }),
        hw_card1_body: fields.text({ label: 'Card 1 — body', multiline: true, defaultValue: "Before every session, I've thought about your specific situation, not just your industry. You're never starting from scratch." }),
        hw_card2_title: fields.text({ label: 'Card 2 — title', defaultValue: "I'll tell you what I actually think." }),
        hw_card2_body: fields.text({ label: 'Card 2 — body', multiline: true, defaultValue: "If the idea has a gap, I'll say so. Honest input is more useful than comfortable agreement." }),
        hw_card3_title: fields.text({ label: 'Card 3 — title', defaultValue: 'You leave with a plan.' }),
        hw_card3_body: fields.text({ label: 'Card 3 — body', multiline: true, defaultValue: 'Every session ends with a written action plan in your inbox, the same day. Not a vague list. A real plan you can act on.' }),
        hw_footer_text: fields.text({ label: 'How I work — footer text', multiline: true, defaultValue: "I've delivered workshops at the University of Warwick Science Park, worked with the Black Country Chamber of Commerce, and spent years in rooms with people who are trying to build something real. The West Midlands business community matters to me. Genuinely." }),
        hw_footer_cta: fields.text({ label: 'How I work — footer CTA', defaultValue: 'Book a free call' }),

        // ── Credentials ───────────────────────────────────────────────────
        cred_chip: fields.text({ label: 'Credentials — eyebrow', defaultValue: 'Why trust me' }),
        cred_h2: fields.text({ label: 'Credentials — heading', multiline: true, defaultValue: 'Real experience.\nReal recognition.' }),
        cred_intro: fields.text({ label: 'Credentials — intro', multiline: true, defaultValue: "Here's what I've built and earned. And what it means for the founders I work with." }),
        award_h3: fields.text({ label: 'Award — heading', defaultValue: 'Awarded for entrepreneurial perseverance.' }),
        award_body1: fields.text({ label: 'Award — paragraph 1', multiline: true, defaultValue: "The EPIC Spirit Award recognises founders who keep building through real adversity. Not the overnight success stories. The ones who hit genuine setbacks and pushed through anyway." }),
        award_body2: fields.text({ label: 'Award — paragraph 2', multiline: true, defaultValue: "It's the most personally meaningful recognition I've received. Because it's about character, not just revenue." }),
        award_pullquote: fields.text({ label: 'Award — pull quote', multiline: true, defaultValue: "My mum always told me: my smile is my biggest selling point." }),
        trusted_chip1: fields.text({ label: 'Also active — chip 1', defaultValue: 'Birmingham Library' }),
        trusted_chip2: fields.text({ label: 'Also active — chip 2', defaultValue: 'Birmingham Chamber of Commerce' }),
        trusted_chip3: fields.text({ label: 'Also active — chip 3', defaultValue: 'Young Leaders Club' }),

        // ── Google Reviews header ─────────────────────────────────────────
        gr_h2: fields.text({ label: 'Google Reviews — heading', defaultValue: 'What clients say on Google.' }),
        gr_sub: fields.text({ label: 'Google Reviews — sub text', multiline: true, defaultValue: "Real feedback from people who've worked with Feldon directly." }),
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
        avatar_initial: fields.text({ label: 'Avatar initial (single letter)', defaultValue: 'F' }),
        avatar_colour: fields.select({
          label: 'Avatar colour',
          options: [
            { label: 'Purple', value: 'purple' },
            { label: 'Navy', value: 'navy' },
            { label: 'Gold', value: 'gold' },
          ],
          defaultValue: 'purple',
        }),
        published: fields.checkbox({ label: 'Show on website', defaultValue: true }),
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
        description: fields.text({ label: 'Short description', multiline: true }),
        calendly_url: fields.text({ label: 'Calendly booking URL' }),
        sort_order: fields.number({ label: 'Sort order (1–4)', validation: { isRequired: true, min: 1, max: 4 } }),
        most_popular: fields.checkbox({ label: 'Show "Most Popular" badge', defaultValue: false }),
      },
    }),

  },
});
