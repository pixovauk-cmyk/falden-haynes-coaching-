# pre_launch_checklist.md
> TYPE: Universal — use for every Pixova client site before deploying to production.
> USED BY: You (Anil) — run this manually before every launch
> Every single item must be ticked before the domain goes live.
> No exceptions. No "we'll fix it after launch."
> Last updated: May 2026

---

## HOW TO USE THIS FILE

Work through every section in order.
Tick each item only when you have personally verified it — not assumed it.
If an item cannot be completed, document why before proceeding.
Do not deploy until this checklist is 100% complete.

---

## SECTION 1 — COPY AND CONTENT

### Every page
- [ ] All placeholder copy replaced with real copy — zero "Lorem ipsum" or "TBC" visible
- [ ] All placeholder images replaced with real or approved stock images
- [ ] All copy has passed the anti-AI checklist in `copy_examples.md`
- [ ] British English throughout — no "color", "organize", "license" (noun)
- [ ] Client name and contact details are correct everywhere they appear
- [ ] Prices are correct and match `services.md`
- [ ] All Calendly links are live and tested — click each one, confirm booking works
- [ ] All external links work and open in a new tab
- [ ] No broken internal links
- [ ] Footer copyright year is correct
- [ ] Privacy Policy exists and is linked in footer
- [ ] Terms & Conditions exist and are linked in footer

### Blog posts (if applicable)
- [ ] Author name displayed — not "admin"
- [ ] Author bio present with real credentials
- [ ] Published date visible
- [ ] At least one internal link to a service page
- [ ] At least one internal link to another blog post

---

## SECTION 2 — ON-PAGE SEO

### Every page
- [ ] One H1 only — contains primary keyword naturally
- [ ] Primary keyword in first 100 words of body copy
- [ ] Primary keyword in at least one H2 subheading
- [ ] Meta title: under 60 characters, primary keyword first, brand name last
- [ ] Meta description: under 160 characters, primary keyword in first 20 words, has a benefit
- [ ] URL: lowercase, hyphens only, includes primary keyword
- [ ] Canonical tag pointing to correct preferred URL
- [ ] No keyword cannibalism — each primary keyword used on one page only
- [ ] Secondary keywords distributed naturally in H2s and body copy
- [ ] No keyword stuffing — primary keyword max once per 150 words
- [ ] People Also Ask questions addressed as H2 or H3 headings where relevant
- [ ] Internal links: minimum 2 per page with descriptive anchor text
- [ ] No orphan pages — every page reachable from nav or another page
- [ ] Search intent matched — informational content for informational keywords,
     conversion content for transactional keywords

### Schema markup
- [ ] Homepage: Organisation schema — validated with Google Rich Results Test
- [ ] About page: LocalBusiness schema — validated
- [ ] About page: Person schema — validated
- [ ] Every blog post: Article schema with author, datePublished, dateModified — validated
- [ ] Any FAQ section: FAQPage schema — validated
- [ ] Inner pages: BreadcrumbList schema — validated
- [ ] All schema in JSON-LD format in `<head>` — not inline

### E-E-A-T signals
- [ ] Real credentials with specific numbers visible on homepage and about page
- [ ] Author bio with credentials on every blog post
- [ ] Real photos used — no generic stock photos of handshakes or meetings
- [ ] Real testimonials with full names and permission confirmed
- [ ] Awards, certifications, or recognitions named specifically — not "award-winning"

---

## SECTION 3 — IMAGES

- [ ] Every image is WebP format
- [ ] Every image has a descriptive filename with keyword where natural
  (e.g. `business-coach-birmingham-feldon.webp` not `IMG_4829.jpg`)
- [ ] Every image has meaningful alt text — not empty, not "image"
- [ ] Every image has explicit `width` and `height` attributes set
- [ ] All images below the fold have `loading="lazy"`
- [ ] Hero / above-fold image has `loading="eager"`
- [ ] Hero image file size under 200kb
- [ ] All other images under 150kb
- [ ] OG image exists: 1200×630px, looks good when shared on social

---

## SECTION 4 — TECHNICAL SEO

- [ ] `robots.txt` present at root — no important pages accidentally blocked
- [ ] `sitemap.xml` present at root — includes all indexable pages
- [ ] Privacy Policy and T&Cs pages are noindex (they don't need to rank)
- [ ] No noindex tags on pages that should rank
- [ ] No redirect chains — A → B → C fixed to A → C
- [ ] All internal links use HTTPS not HTTP
- [ ] No duplicate `<title>` tags across pages
- [ ] No duplicate `<meta description>` tags across pages
- [ ] `<html lang="en-GB">` set on every page
- [ ] Viewport meta tag present on every page
- [ ] Favicon: 32×32px browser tab icon confirmed visible
- [ ] Apple touch icon: 180×180px confirmed

---

## SECTION 5 — OG AND SOCIAL TAGS

Every page must have all of these:
- [ ] `og:title` — matches meta title
- [ ] `og:description` — matches meta description
- [ ] `og:image` — 1200×630px image that looks good when shared
- [ ] `og:url` — canonical URL of the page
- [ ] `og:type` — "website" for pages, "article" for blog posts
- [ ] `twitter:card` — "summary_large_image"
- [ ] `twitter:title`
- [ ] `twitter:description`
- [ ] `twitter:image`

Test: paste the live URL into Facebook Debugger and Twitter Card Validator.
Confirm the preview looks correct on both.

---

## SECTION 6 — PERFORMANCE

Run Google PageSpeed Insights on every page before deploying.

- [ ] Mobile PageSpeed score: 90 or above
- [ ] Desktop PageSpeed score: 95 or above
- [ ] LCP (Largest Contentful Paint): under 2.5 seconds
- [ ] INP (Interaction to Next Paint): under 200ms
- [ ] CLS (Cumulative Layout Shift): under 0.1
- [ ] No render-blocking resources in `<head>`
- [ ] All JavaScript deferred or loaded async
- [ ] Google Fonts loaded with `display=swap` and preconnect
- [ ] CSS minified in production build
- [ ] No unused CSS shipped to the browser
- [ ] Astro build output verified — `npm run build` completes with zero errors

---

## SECTION 7 — MOBILE AND ACCESSIBILITY

- [ ] Site tested on real mobile device — not just browser emulator
- [ ] No horizontal scroll at any screen size
- [ ] All text readable at 320px minimum viewport
- [ ] Font size minimum 16px on mobile body text
- [ ] All tap targets minimum 48×48px — buttons, links, nav items
- [ ] Mobile navigation functional and closes correctly
- [ ] Forms usable on mobile keyboard — correct input types set
  (`type="email"` for email, `type="tel"` for phone)
- [ ] Colour contrast passes WCAG AA minimum on all text
  (check with webaim.org/resources/contrastchecker)
- [ ] Gold #F2D832 on navy #26215C contrast ratio confirmed — passes AA
- [ ] All interactive elements keyboard accessible via Tab key
- [ ] Custom 404 page exists with link back to homepage

---

## SECTION 8 — INTEGRATIONS

### Calendly
- [ ] Discovery call Calendly link tested — booking flow completes successfully
- [ ] All bundle Calendly links tested individually
- [ ] Inline Calendly embed loads correctly on /contact page
- [ ] Inline Calendly embed loads correctly on /start landing page
- [ ] Calendly widget does not block page load (loaded async)

### Contact form
- [ ] Form submits successfully — test with real email address
- [ ] Form submission arrives in Notion via Zapier webhook
- [ ] Form has basic validation — empty fields show error before submit
- [ ] Success message shown after submission — not a blank page
- [ ] Form fields have correct input types and labels

### Keystatic CMS
- [ ] Keystatic admin accessible at /keystatic
- [ ] Client can log in with their GitHub account
- [ ] All editable fields visible and functional in the admin
- [ ] Saving a change in Keystatic triggers a Vercel redeploy
- [ ] Redeploy completes and change is visible on live site
- [ ] Client has been shown how to use it — or video walkthrough recorded

---

## SECTION 9 — ANALYTICS AND TRACKING

### Google Analytics 4
- [ ] GA4 property created in Google Analytics
- [ ] Tracking ID (G-XXXXXXXXXX) added to site `<head>` layout
- [ ] GA4 is tracking — visit the site and confirm a session appears in Realtime report
- [ ] No tracking on /keystatic admin pages — exclude from analytics
- [ ] GA4 configured to exclude internal traffic (developer IP addresses)

### Google Search Console
- [ ] Site verified in Google Search Console
- [ ] Verification method: HTML meta tag in `<head>` (preferred)
- [ ] Sitemap submitted to GSC: Settings → Sitemaps → Submit
- [ ] GSC showing the site as verified and sitemap as submitted
- [ ] No coverage errors in GSC Index Coverage report

### Google Business Profile (local clients)
- [ ] GBP profile created or claimed at business.google.com
- [ ] Profile verified
- [ ] NAP (Name, Address, Phone) matches website footer exactly — character for character
- [ ] Website URL added to GBP
- [ ] Category set correctly
- [ ] At least 5 photos uploaded
- [ ] Business description written — includes primary keyword naturally

---

## SECTION 10 — SECURITY AND INFRASTRUCTURE

- [ ] HTTPS confirmed — padlock visible in browser (Vercel handles automatically)
- [ ] No mixed content warnings — all assets load over HTTPS
- [ ] Custom domain connected to Vercel and propagated
- [ ] www redirect configured — www.domain.com redirects to domain.com (or vice versa)
- [ ] Both variations return 200 on the chosen canonical version
- [ ] Environment variables stored in Vercel dashboard — not hardcoded in files
- [ ] GitHub repository is private
- [ ] Vercel auto-deploy from main branch confirmed working
- [ ] Test deploy: push a minor change to main, confirm it appears live within 2 minutes

---

## SECTION 11 — FINAL HUMAN REVIEW

Before handing to the client, a human must review every page.
Not a checklist review. An actual read-through as a visitor.

- [ ] Read every page as if you are the primary avatar — does it make sense?
- [ ] Click every button and link — do they all go to the right place?
- [ ] Fill out the contact form — does it work end to end?
- [ ] Book a test slot on Calendly — does the flow complete?
- [ ] View the site on a real iPhone and a real Android device
- [ ] View the site in Chrome, Safari, and Firefox
- [ ] Check the site at 1440px, 1024px, 768px, 375px
- [ ] Confirm the design looks premium — not generic, not rushed
- [ ] Confirm all copy sounds human — not AI-generated
- [ ] Confirm the gold accent is used sparingly — not on every element

---

## SECTION 12 — HANDOVER TO CLIENT

Once all sections above are complete:

- [ ] Record a short Loom walkthrough of the live site (2-3 minutes)
- [ ] Record a separate Loom showing how to use Keystatic to edit content
- [ ] Share Vercel dashboard access with client (read-only minimum)
- [ ] Share Google Analytics access with client
- [ ] Share Google Search Console access with client
- [ ] Document any items intentionally left for Phase 2 (blog, additional pages etc.)
- [ ] Confirm Calendly links are the client's own — not test links
- [ ] Remove any test content or placeholder testimonials
- [ ] Save a copy of this completed checklist to the project Notion page

---

## SIGN OFF

Site is ready to deploy when:

**All 12 sections above are fully ticked.**
**PageSpeed mobile score is 90 or above on every page.**
**The site has been reviewed as a human visitor on a real mobile device.**

Do not deploy before these three conditions are met.
Do not make exceptions.
A site launched with known issues is harder to fix than one launched clean.
