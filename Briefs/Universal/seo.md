# seo.md
> TYPE: Universal — use for every Pixova client build
> USED BY: Claude Code — follow every rule when building or auditing any page
> Works alongside: keywords.md · copy_examples.md · brand_voice.md
> Version 2 — Updated May 2026

---

## HOW CLAUDE USES THIS FILE

When given this file, Claude must:
1. Read it fully before writing or building anything
2. Apply every relevant rule to the page type being built
3. Cross-reference keywords.md to identify the correct primary and secondary keywords
4. Run the audit checklist before outputting any page
5. Never skip a rule because it's inconvenient — flag it if it cannot be implemented

---

## PART 1 — HOW TO USE KEYWORDS.MD

This section tells Claude exactly how to read and apply the keywords.md file.

### Step 1 — Identify the page being built
Every page has a primary keyword assigned in keywords.md under "PAGE KEYWORD ASSIGNMENTS."
Find the row for this page. That is the primary keyword. It owns the page.

### Step 2 — Pull the primary keyword
The primary keyword goes in these exact locations — in this priority order:
1. URL slug (most important — set at build time, hard to change later)
2. H1 — must appear naturally, not forced
3. Meta title — keyword first, brand name last
4. First 100 words of body copy
5. At least one H2 subheading
6. Image alt text on the hero/main image
7. Meta description — within the first 20 words

### Step 3 — Pull the secondary keywords
Secondary keywords are listed under each cluster in keywords.md.
Use them in:
- H2 and H3 subheadings (one secondary keyword per heading naturally)
- Body copy paragraphs — once or twice each, never forced
- Image alt text on supporting images

### Step 4 — Keyword density rule
Primary keyword: 1 instance per 150-200 words of body copy. No more.
Secondary keywords: 1-2 instances per keyword across the full page.
If you find yourself repeating a keyword more than this — you are stuffing. Remove the excess.

### Step 5 — Keyword cannibalism rule
NEVER use the same primary keyword on two different pages.
If two pages target the same keyword, Google cannot decide which to rank and ranks neither well.
Check keywords.md PAGE KEYWORD ASSIGNMENTS table before finalising any primary keyword.

### Step 6 — LSI keywords (related terms)
LSI = Latent Semantic Indexing. These are words Google expects to see near your primary keyword.
They help Google understand what the page is actually about.
Example: if primary keyword is "business coach birmingham" — LSI terms include:
"West Midlands", "entrepreneurial", "1-to-1", "coaching sessions", "small business", "founder"
These appear naturally in good copy. Claude does not need to force them — write naturally and they appear.

### Step 7 — People Also Ask (PAA)
Before writing any page, mentally check: what questions does Google show in "People Also Ask"
for this primary keyword? These become H2 or H3 subheadings.
They are free keyword research. They match exactly what searchers want to know.
Example for "business coach birmingham":
- "What does a business coach do?" → H2 on the About page
- "How much does a business coach cost in the UK?" → H2 or FAQ on homepage
- "Is business coaching worth it?" → Blog post topic

---

## PART 2 — E-E-A-T (THE MOST IMPORTANT RANKING SIGNAL FOR SERVICE BUSINESSES)

E-E-A-T = Experience · Expertise · Authoritativeness · Trustworthiness
Google uses this to evaluate whether a page deserves to rank — especially for service businesses,
coaching, consulting, financial advice, and health — any area where bad advice causes real harm.

For a personal brand like Feldon Haynes, E-E-A-T is the single biggest ranking lever.
More than technical SEO. More than backlinks. More than word count.

### Experience — show it, don't claim it
- Real credentials must appear on every page: "35+ businesses started", "40+ founders supported"
- Specific numbers beat vague claims always: "3 industry awards" not "award-winning"
- Real client results beat testimonials: "12 paying clients in 90 days" beats "great coach"
- The About page is the primary E-E-A-T page — it must be detailed, specific, and personal
- Photos of the real person massively increase trust signals — always use real photos, never stock

### Expertise — demonstrate knowledge
- Blog posts must demonstrate genuine expertise, not surface-level content
- Every blog post needs an author bio at the bottom with credentials
- Content should answer questions at a depth that only someone with real experience could match
- Never publish thin content (under 600 words) on a blog — it signals low expertise

### Authoritativeness — build it over time
- Internal linking from blog posts back to service pages builds topical authority
- Covering a topic cluster thoroughly (all 5 blog posts in keywords.md) builds more authority than one long post
- External links from other credible sites (even directories and local listings) add authority signals
- Getting mentioned or quoted on other sites — even without a link — helps

### Trustworthiness — the foundation
- HTTPS is mandatory (Vercel handles this automatically)
- Privacy policy and Terms & Conditions pages must exist and be linked in the footer
- NAP (Name, Address, Phone) must be consistent everywhere: website, Google Business Profile, directories
- Real testimonials with full names and context — never anonymous or vague
- Contact information must be visible and real — not just a form

### Claude instruction for E-E-A-T
When writing or building any page, Claude must:
- Include specific credentials and numbers (not vague claims) wherever trust needs building
- Add an author bio with credentials on every blog post
- Never use stock photos where real photos are available
- Ensure Privacy Policy and T&Cs are linked from every page footer
- Surface the most credible signals (awards, client count, businesses started) near the top of the page

---

## PART 3 — SEARCH INTENT MATCHING

Google's primary job is to match the searcher's intent. If your page doesn't match the intent
of the keyword, it will not rank — regardless of how well optimised it is.

### The 4 intent types

**Informational** — the searcher wants to learn something
Keywords: "what is", "how to", "why", "benefits of", "guide to"
Page type: Blog post
Content: Answers the question thoroughly. Educational. No hard sell.
CTA: Soft — "If this sounds relevant, here's how I can help" → link to service page

**Commercial** — the searcher is researching options before deciding
Keywords: "best business coach", "business coach vs mentor", "is coaching worth it"
Page type: Blog post or comparison page
Content: Honest comparison. Positions the client well without being salesy.
CTA: Medium — "Book a free discovery call to see if we're a good fit"

**Transactional** — the searcher is ready to take action
Keywords: "business coach birmingham", "book business coaching session", "business coach uk"
Page type: Homepage or service page
Content: Clear what's offered, clear pricing or CTA, trust signals prominent, low friction
CTA: Strong — "Book your free discovery call" above the fold

**Navigational** — the searcher is looking for a specific brand
Keywords: "feldeluxe", "feldon haynes coaching"
Page type: Homepage
Content: Clear brand identity, what they do, who for
Note: These keywords don't need optimising — the brand name itself handles it

### Intent matching rules for Claude
- Blog post targeting informational keyword → do NOT include aggressive sales copy
- Service page targeting transactional keyword → do NOT bury the CTA
- Never write a service page for an informational keyword — create a blog post instead
- Never write a blog post for a transactional keyword — create a service/landing page instead
- If the intent is unclear, Google the keyword and look at what types of pages are already ranking

---

## PART 4 — ON-PAGE SEO

### Title Tag
- [ ] Unique per page — no two pages share the same title
- [ ] 50-60 characters max (Google truncates beyond this)
- [ ] Primary keyword as close to the start as possible
- [ ] Format: `Primary Keyword | Brand Name`
- [ ] Written for humans — it appears in search results as the clickable link
- [ ] No keyword stuffing — one natural use of the keyword only

### Meta Description
- [ ] Unique per page
- [ ] 150-160 characters max
- [ ] Primary keyword within the first 20 words
- [ ] Contains a clear benefit or action — what will they get by clicking?
- [ ] Written for humans, not robots — this is your search result ad copy
- [ ] Does NOT need to be a complete sentence — punchy and direct is fine

### URL Structure
- [ ] Short and descriptive — reflects the page content
- [ ] Lowercase, hyphens only (no underscores, no spaces, no capital letters)
- [ ] Primary keyword included
- [ ] No dates, session IDs, or random numbers
- [ ] Examples: `/business-coach-birmingham` · `/blog/benefits-of-a-business-plan`
- [ ] Once a URL is live and indexed — do NOT change it without a 301 redirect

### Headings
- [ ] One H1 per page only — contains the primary keyword naturally
- [ ] H2s for main sections — include secondary keywords naturally
- [ ] H3s for sub-points within H2 sections
- [ ] People Also Ask questions used as H2 or H3 headings where relevant
- [ ] Headings read as natural sentences — never keyword-stuffed
- [ ] Logical hierarchy always: H1 → H2 → H3 — never skip a level

### Body Content
- [ ] Primary keyword appears in the first 100 words
- [ ] Secondary and LSI keywords used naturally throughout
- [ ] Minimum word counts by page type:
  - Blog posts (informational): 1,000 words minimum, 1,500-2,000 for competitive keywords
  - Blog posts (commercial): 800-1,200 words
  - Service/homepage sections: 300-500 words per section
  - Landing pages: 400-600 words total (less friction = more conversions)
- [ ] Short paragraphs — 3 lines maximum — white space aids readability
- [ ] Bullet points and numbered lists used where content is list-like
- [ ] Search intent matched correctly (see Part 3)
- [ ] People Also Ask questions answered clearly within the content
- [ ] Readability: aim for Grade 8 or below (use Hemingway App to check)
- [ ] Zero duplicate content — every page is unique

### Images
- [ ] Filename is descriptive with keyword: `business-coach-birmingham-feldon.webp`
- [ ] Alt text on every image — descriptive, includes keyword where natural and honest
- [ ] Compressed before upload — target under 150kb per image
- [ ] WebP format — not JPG or PNG unless WebP unavailable
- [ ] `loading="lazy"` on all images below the fold
- [ ] `loading="eager"` on the hero/above-fold image only
- [ ] Width and height attributes explicitly set — prevents Cumulative Layout Shift (CLS)
- [ ] Hero image: 1200x630px minimum for OG sharing compatibility

### Internal Linking
- [ ] Every page links to at least 2 other relevant pages on the site
- [ ] Anchor text is descriptive — not "click here" or "read more"
- [ ] Anchor text contains the keyword of the page being linked to where natural
- [ ] Homepage links to all main service/category pages
- [ ] Every blog post links back to the most relevant service page
- [ ] Every blog post links to 1-2 other related blog posts (builds topical clusters)
- [ ] No orphan pages — every page is reachable from navigation or another page
- [ ] Do not over-link — maximum 5-6 internal links per 1,000 words

### External Linking
- [ ] Link out to 1-2 authoritative sources per blog post where genuinely useful
- [ ] Never link to competitors
- [ ] All external links: `target="_blank" rel="noopener noreferrer"`
- [ ] Check for broken outbound links before publishing

### Schema Markup
- [ ] Organisation schema on homepage — includes name, URL, logo, contact, social profiles
- [ ] LocalBusiness schema on About page — includes NAP, opening hours, geo coordinates
- [ ] Article schema on every blog post — includes headline, author, datePublished, dateModified
- [ ] Person schema on About page — includes name, job title, awards, social links
- [ ] FAQPage schema on any page with a FAQ section
- [ ] BreadcrumbList schema on all inner pages
- [ ] All schema validated with Google Rich Results Test before publishing
- [ ] Schema added as JSON-LD in the `<head>` — never inline

### CTAs
- [ ] Every page has one primary CTA — only one
- [ ] CTA appears above the fold on homepage and landing page
- [ ] CTA button text is action-specific: "Book your free discovery call" not "Submit"
- [ ] CTA repeated at the bottom of every long page
- [ ] CTA links to the correct destination (Calendly, contact page, etc.)
- [ ] CTA colour contrasts strongly with background — accessibility matters

---

## PART 5 — BLOG POST SPECIFIC RULES

Blog posts are different from service pages. Apply these additional rules to every post.

### Structure every blog post like this:
1. **Hook** (first 2-3 sentences) — APP framework from `copy_examples.md` — make them feel the problem
2. **What you'll learn** (optional but good for long posts) — sets expectation, reduces bounce
3. **H2 sections** — one per main point, secondary keyword in at least 2 of them
4. **People Also Ask sections** — use real PAA questions as H2/H3 headings
5. **Practical takeaways** — what can they DO with this information right now?
6. **CTA** — soft bridge to the service: "If you need help with this, here's how I work"
7. **Author bio** — credentials, photo, link to About page

### Blog post E-E-A-T requirements
Every blog post must include:
- [ ] Author name displayed — not "admin" or "team"
- [ ] Author bio at bottom — 2-3 sentences with real credentials
- [ ] Published date visible on the page
- [ ] Last updated date if the post has been refreshed
- [ ] At least one specific personal example or experience in the body
- [ ] At least one real stat or specific number

### Blog post internal linking rules
- [ ] Link to the most relevant service page at least once with natural anchor text
- [ ] Link to 1-2 other blog posts on related topics
- [ ] Do NOT link to external competitor sites
- [ ] The first internal link in the post should go to the most commercially valuable page

### Content freshness
- [ ] Review every blog post every 6 months
- [ ] Update stats, examples, and dates when refreshing
- [ ] Change the "last updated" date when making meaningful updates
- [ ] Google rewards freshness — stale posts lose rankings over time

---

## PART 6 — GOOGLE'S HELPFUL CONTENT RULES

Google's Helpful Content system actively demotes pages that exist to rank, not to help.
Claude must never produce content that fails these tests.

### The helpful content test — ask before publishing:
- Does this content provide original information, research, or analysis?
- Would a reader feel they learned something useful — even if they don't convert?
- Is the primary purpose of this content to help the reader, or to rank for a keyword?
- Would the reader feel satisfied, or would they immediately go back to Google for more?
- Is the content written by someone with real experience in this topic?

### What triggers Google's unhelpful content penalty:
- [ ] Content that summarises what other sites say without adding anything new
- [ ] Content written to hit a word count rather than answer a question fully
- [ ] Pages targeting keywords that have nothing to do with the site's actual purpose
- [ ] Content where the primary keyword is mentioned more than the topic deserves
- [ ] Pages that make promises the rest of the site doesn't deliver on
- [ ] Multiple thin pages targeting slight variations of the same keyword

### What Google rewards:
- [ ] Content that answers the question better than anything else ranking for that keyword
- [ ] First-hand experience and specific real examples — not generic advice
- [ ] Content that makes the reader better off for having read it
- [ ] Pages that naturally earn clicks, time-on-page, and return visits
- [ ] Content from an identifiable, credible person — not an anonymous website

---

## PART 7 — TECHNICAL SEO

### Core Web Vitals (Google's current metrics — updated March 2024)
- [ ] Largest Contentful Paint (LCP): under 2.5 seconds — time to render main content
- [ ] Interaction to Next Paint (INP): under 200ms — replaces FID, measures responsiveness
- [ ] Cumulative Layout Shift (CLS): under 0.1 — no content jumping around on load
- [ ] Test with: PageSpeed Insights · Chrome DevTools · web.dev/measure

### Performance
- [ ] PageSpeed score 90+ on mobile (mobile is Google's primary index)
- [ ] PageSpeed score 90+ on desktop
- [ ] No render-blocking JavaScript in `<head>`
- [ ] CSS minified
- [ ] JavaScript deferred or loaded async where possible
- [ ] Fonts loaded via `font-display: swap` — prevents invisible text during load
- [ ] Images compressed and in WebP format
- [ ] Astro's built-in optimisation handles most of this automatically

### Mobile (Google indexes mobile first — this is not optional)
- [ ] Fully responsive at 320px, 375px, 768px, 1024px, 1440px
- [ ] Tap targets minimum 48x48px — all buttons and links
- [ ] No horizontal scroll on any screen size
- [ ] Font size minimum 16px on mobile body text
- [ ] Mobile menu functional, accessible, and keyboard-navigable
- [ ] Test every page on real mobile device before publishing

### Crawlability
- [ ] `robots.txt` present — no important pages accidentally blocked
- [ ] `sitemap.xml` present and includes all indexable pages
- [ ] Sitemap submitted to Google Search Console
- [ ] No `noindex` tags on pages that should rank
- [ ] Canonical tag on every page pointing to the preferred URL
- [ ] No redirect chains — A → B → C must be fixed to A → C
- [ ] All internal links use HTTPS not HTTP
- [ ] Privacy Policy and T&Cs pages exist but can be noindexed (they don't need to rank)

### Security and Technical Basics
- [ ] HTTPS enabled — Vercel handles this automatically
- [ ] No mixed content warnings (HTTP assets served on HTTPS pages)
- [ ] Custom 404 page exists with navigation back to main site
- [ ] No broken internal links — check with Screaming Frog or Ahrefs after launch

### HTML Basics
- [ ] `<html lang="en">` or `<html lang="en-GB">` for UK sites
- [ ] Unique `<title>` tag per page
- [ ] Unique `<meta name="description">` per page
- [ ] OG tags on every page: `og:title` · `og:description` · `og:image` · `og:url` · `og:type`
- [ ] Twitter card tags: `twitter:card` · `twitter:title` · `twitter:description` · `twitter:image`
- [ ] Favicon: 32x32px for browser tab · 180x180px for Apple touch icon
- [ ] Viewport meta tag: `<meta name="viewport" content="width=device-width, initial-scale=1">`
- [ ] No duplicate `<h1>` tags — one per page only

---

## PART 8 — OFF-PAGE SEO

### Google Business Profile (essential for any local or UK-based service business)
- [ ] Profile created and verified at business.google.com
- [ ] Business name matches website and all directories exactly (NAP consistency)
- [ ] Address: use real address or service area if home-based
- [ ] Phone number matches website
- [ ] Category set correctly — "Business Management Consultant" or "Business Coach"
- [ ] Website URL added
- [ ] 5+ photos uploaded — real photos of the person, not stock
- [ ] Business description written with primary keyword naturally included
- [ ] Posting at minimum once per week — tip, insight, or offer
- [ ] Responding to ALL reviews within 48 hours — positive and negative
- [ ] Q&A section: add your own common questions and answer them

### Citations and Directories (UK)
Getting listed consistently builds authority and local trust signals.
- [ ] Google Search Console — verify site ownership
- [ ] Bing Webmaster Tools — verify and submit sitemap
- [ ] Yell.com — free UK business listing
- [ ] FreeIndex.co.uk — free UK service business directory
- [ ] Thomson Local — free UK listing
- [ ] Checkatrade or Trustatrader — if relevant to the client's trade
- [ ] LinkedIn company page — link to website
- [ ] Any industry association directories relevant to the client

### NAP Consistency Rule
Name, Address, Phone must be IDENTICAL everywhere:
- Website footer
- Google Business Profile
- Every directory listing
- Social media bios
Even a small difference (Ltd vs Limited, 0121 vs +44121) creates confusion for Google.

### Link Building (realistic for new sites)
- [ ] Submit to the free directories above — each is a low-authority backlink
- [ ] Ask genuine clients to mention the site on their own website or socials
- [ ] Guest post on 1-2 relevant UK business blogs — real guest posts, not paid links
- [ ] Get listed on industry association sites
- [ ] Create one genuinely useful free resource — a guide, checklist, or tool — that earns links naturally
- [ ] Do NOT buy links — Google penalises this and it is not recoverable easily

### Social Signals
- [ ] Website URL in all social media bios — LinkedIn, Instagram, Facebook
- [ ] Every new blog post shared to at least 2 social platforms on publish day
- [ ] OG image (1200x630px) set on every page so posts look professional when shared
- [ ] Social sharing does not directly improve rankings but drives traffic that signals relevance

---

## PART 9 — KEYWORD RULES SUMMARY

One page, one primary keyword. These rules apply universally.

| Location | Rule |
|---|---|
| URL | Primary keyword, hyphens, lowercase, no dates |
| H1 | Primary keyword, reads naturally, one per page only |
| Title tag | Primary keyword first, brand name last, 50-60 chars |
| Meta description | Primary keyword in first 20 words, 150-160 chars, has a benefit |
| First 100 words | Primary keyword appears at least once naturally |
| H2 subheadings | Secondary keywords where natural, PAA questions |
| Body copy | Primary: 1 per 150-200 words. Secondary: 1-2 instances each |
| Image alt text | Primary keyword on hero image, secondary on supporting images |
| Internal links | Anchor text uses keywords of destination page |

**Never:**
- Same primary keyword on two pages (cannibalism)
- Primary keyword more than once per 150 words (stuffing)
- Keyword in a heading that doesn't relate to what follows (deceptive)
- Exact keyword match if it reads unnaturally — use a variation instead

---

## PART 10 — CLAUDE CODE INSTRUCTION BLOCK

Paste this at the top of every Claude Code session when building a site:

```
Follow all rules in seo.md for every page you build.

KEYWORD RULES:
- Read keywords.md PAGE KEYWORD ASSIGNMENTS table to find the primary keyword for each page
- Primary keyword goes in: URL slug, H1, title tag, meta description, first 100 words, one H2, hero image alt text
- Secondary keywords go in: H2s and H3s naturally, body copy 1-2 times each
- Never use the same primary keyword on two pages
- Keyword density: primary keyword max once per 150-200 words

ON-PAGE REQUIREMENTS PER PAGE:
- One H1 only, containing primary keyword
- Title tag: 50-60 chars, keyword first, brand name last
- Meta description: 150-160 chars, keyword in first 20 words, includes a benefit
- All images: descriptive filename with keyword, alt text, WebP format, width+height set, loading=lazy (except hero: loading=eager)
- Schema: Organisation on homepage, LocalBusiness on About, Article on blog posts, Person on About, FAQ where applicable
- Internal links: minimum 2 per page, descriptive anchor text
- OG tags on every page: og:title, og:description, og:image, og:url, og:type
- Twitter card tags on every page
- Canonical tag pointing to preferred URL
- Robots.txt and sitemap.xml in project root

E-E-A-T:
- Surface real credentials with specific numbers — never vague claims
- Author bio with credentials on every blog post
- Real photos only — no stock photos where avoidable
- Privacy Policy and T&Cs linked from every page footer

TECHNICAL:
- Mobile first — test at 375px minimum
- Tap targets 48x48px minimum
- Font size 16px minimum on mobile
- font-display: swap on all fonts
- No render-blocking scripts in head
- PageSpeed target: 90+ mobile and desktop
- INP under 200ms, LCP under 2.5s, CLS under 0.1
- HTML lang="en-GB" for UK clients
- Custom 404 page
- HTTPS (Vercel handles automatically)
```

---

## PART 11 — AUDIT PROMPT

Paste this into Claude after building any page. Returns a structured fix list.

```
Audit this page against all rules in seo.md.

Return your findings in this exact format:

CRITICAL (fix before launch):
1. [Issue] — [What to fix]

IMPORTANT (fix within first week):
1. [Issue] — [What to fix]

NICE TO HAVE (fix when time allows):
1. [Issue] — [What to fix]

Check in this order:
1. Primary keyword placement — URL, H1, title tag, meta description, first 100 words
2. Meta title character count and format
3. Meta description character count and keyword placement
4. Schema markup — correct type, complete fields, JSON-LD format
5. Image filenames, alt text, format, lazy loading, width+height attributes
6. Internal links — count, anchor text quality, orphan page check
7. E-E-A-T signals — credentials, author bio (blog posts), real photos
8. Search intent match — does the page content match what the keyword searcher actually wants?
9. Core Web Vitals risks — render-blocking scripts, unset image dimensions, layout shift risks
10. OG tags and Twitter card tags
11. Canonical tag
12. robots.txt and sitemap.xml presence
13. Mobile responsiveness basics
14. Helpful Content check — is this page genuinely useful or does it exist only to rank?
```

---

## QUICK REFERENCE — THE 10 MOST IMPORTANT SEO RULES

When time is short, these 10 rules cover 80% of what matters:

1. One primary keyword per page — in URL, H1, title, meta, first 100 words
2. Match the search intent — informational keyword = blog, transactional = service page
3. E-E-A-T signals — specific credentials, real photos, author bios, trust signals
4. Title tag under 60 characters — keyword first, brand last
5. Meta description under 160 characters — keyword in first 20 words, has a benefit
6. Every image: WebP, descriptive filename, alt text, width+height, lazy load
7. Internal links with descriptive anchor text — minimum 2 per page
8. Schema markup — right type for right page, validated before launch
9. Mobile first — 375px, 48px tap targets, 16px font, no horizontal scroll
10. Helpful content only — if it doesn't genuinely help the reader, don't publish it
