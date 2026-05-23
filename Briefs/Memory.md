# memory.md — Feldon Haynes Coaching Build Log
> Claude Code reads this file FIRST at the start 
  of every single session.
> Update after every completed task.
> Never delete entries — only add.
> If this file exists and has entries — 
  you are resuming a previous session.
> If this file is empty — this is session 1.
> Last updated: 2026-05-19 — Session 1 started

---

## RULE — HOW TO USE THIS FILE

At the START of every session:
1. Read this entire file before touching any code
2. Check Project Status for where you left off
3. Check Keywords Used before writing any copy or meta tag
4. Check Placeholders before placing any content
5. Resume from exactly where the last session ended

After EVERY completed task:
1. Update the relevant section immediately
2. Update Last updated timestamp
3. Update Next task in Project Status
4. Never batch update — update as you go

---

## SECTION 1 — PROJECT STATUS

Current phase: IN PROGRESS — Session 1
Session 1 started: 2026-05-19
Last updated: 2026-05-19 — ALL BUILD TASKS COMPLETE. Build passing (7 pages + admin).
Session 1 complete. Awaiting Feldon's input to resolve ⚠️ CONFIRM items before launch.

Build order:
1. ✅ Astro project setup + folder structure
2. ✅ Layout.astro — head, meta, fonts, nav, footer
3. ✅ Homepage — all 8 sections + index.astro
4. ✅ About page — 5 sections + LocalBusiness + Person schema
5. ✅ Contact page
6. ✅ Landing page /start
7. ✅ Privacy page
8. ✅ Terms page
9. ✅ Keystatic CMS setup
10. ✅ Schema markup — Organisation on homepage
11. ✅ robots.txt + sitemap.xml
12. ✅ Performance optimisation
13. ✅ Pre-launch checklist (run — items awaiting Feldon input logged below)

### Keystatic deployment notes (IMPORTANT before launch)
- Admin URL: feldeluxe.com/keystatic
- Adapter: currently @astrojs/node (for local dev)
- BEFORE DEPLOY TO VERCEL: install @astrojs/vercel (Astro 6 compatible) OR upgrade Astro to 6.x
- GitHub OAuth app needed: Settings → Developer settings → OAuth Apps → new app
  - Homepage URL: https://feldeluxe.com
  - Callback URL: https://feldeluxe.com/api/keystatic/github/oauth/callback
- keystatic.config.ts repo: update 'pixovauk/feldon-haynes-coaching' to actual repo path
- Content stored in: src/data/ (bundles, testimonials, awards, homepage, contact, about)

---

## SECTION 2 — KEYWORDS USED

> PRIMARY KEYWORD RULE:
> One primary keyword per page. Locked once assigned.
> Never use the same primary keyword on two pages.
> Check this table before writing ANY copy, 
  H1, meta title, meta description, or URL slug.

### Page Primary Keywords — LOCKED

| Page | URL | Primary keyword | Meta title | Status |
|---|---|---|---|---|
| Home | / | business coach small business | Business Coach for Small Business Owners \| Feldon Haynes | ⬜ Not built |
| About | /about | business coach and mentor | Business Coach and Mentor \| Feldon Haynes | ⬜ Not built |
| Contact | /contact | find a business coach | Find a Business Coach \| Feldon Haynes | ⬜ Not built |
| Landing | /start | business startup advice | Free Business Coaching Call \| Feldon Haynes | ⬜ Not built |
| Privacy | /privacy | — | Privacy Policy \| Feldon Haynes Coaching | ⬜ Not built |
| Terms | /terms | — | Terms and Conditions \| Feldon Haynes Coaching | ⬜ Not built |

### Blog Primary Keywords — Reserved for Phase 2

| Page | URL | Primary keyword | Status |
|---|---|---|---|
| Blog post 1 | /blog/benefits-of-a-business-plan | benefits of a business plan | ⬜ Phase 2 |
| Blog post 2 | /blog/business-growth-plan | business growth plan | ⬜ Phase 2 |
| Blog post 3 | /blog/how-to-start-a-small-business-uk | how to start a small business | ⬜ Phase 2 |
| Blog post 4 | /blog/how-to-run-a-business-successfully | how to run a company successfully | ⬜ Phase 2 |

### Secondary Keywords by Cluster

**Cluster 1 — Homepage (business coaching general):**
coaching for small business owners · online business coach · business coach and mentor ·
find a business coach · small business coaching services · small business mentoring ·
business coaches for entrepreneurs uk · find a business mentor · business coaches for entrepreneurs ·
small business coach · business coach uk

**Cluster 2 — Blog 1 (business planning):**
business plan template uk · business plan examples · small business plan · benefits of a business plan ·
business plan consultant · advantages of business plan · one page business plan ·
business planning process · business development plan template

**Cluster 3 — Blog 2 (strategy & growth):**
business growth plan · company growth strategy · growth strategy business · business development plan ·
small business strategy · business planning and strategy · growth plan in business plan ·
company development plan · business strategy for small business · your business growth · strategies for growth

**Cluster 4 — About + Blog 3 (entrepreneurial development):**
how to start a small business · business startup advice · how to start an online business uk ·
young entrepreneurs uk · how to begin an online business · business ownership ·
enterprising entrepreneur · mentorship uk · how to set up your own business ·
how to start a startup company · how can i open my own business · how to register a small business

**Cluster 5 — Landing + Blog 4 (overcoming challenges):**
how to run a company successfully · how do you run a successful business · how to build a successful business ·
how start a successful business · how to grow a small business · how to grow your business ·
help me grow my business · business support services · business support helpline ·
business tips · how can you grow your business · how to grow a small company

---

## SECTION 3 — COMPONENTS BUILT

> Log every Astro component the moment it is created.
> Check this before creating anything new — 
  it may already exist.

| Component | File path | Status | Notes |
|---|---|---|---|
| Base layout | src/layouts/Layout.astro | ✅ Built | Head, meta, fonts, OG tags, GA4 placeholder |
| Navigation | src/components/Nav.astro | ✅ Built | Sticky, #534AB7, mobile overlay, scroll shadow |
| Footer | src/components/Footer.astro | ✅ Built | #1a1744, nav, social (LinkedIn + WhatsApp), contact |
| Hero | src/components/Hero.astro | ✅ Built | Copy left, photo right, 2 float cards, trust signals |
| Stats strip | src/components/StatsStrip.astro | ✅ Built | #534AB7, 4 stats, gold numbers |
| Problem grid | src/components/ProblemGrid.astro | ✅ Built | 2×2 grid, 4 cards, Jordan's language |
| Bundle cards | src/components/BundleCards.astro | ✅ Built | 4-col desktop, Most Popular badge, all prices |
| Session includes | src/components/SessionIncludes.astro | ✅ Built | Purple rounded card, 3 features, 2×2 photo grid |
| About teaser | src/components/AboutTeaser.astro | ✅ Built | Photo left, text right, gold+ghost buttons |
| Testimonials | src/components/Testimonials.astro | ✅ Built | 3 placeholder cards, Keystatic-ready |
| Final CTA | src/components/FinalCTA.astro | ✅ Built | #534AB7, decorative circles, gold button |
| Homepage | src/pages/index.astro | ✅ Built | All 8 sections, Organisation schema, correct rhythm |
| About page | src/pages/about.astro | ✅ Built | 5 sections, BreadcrumbList+LocalBusiness+Person schema |
| AboutPageHero | src/components/AboutPageHero.astro | ✅ Built | Dark navy, H1 contains keyword, credential badges |
| AboutPageStory | src/components/AboutPageStory.astro | ✅ Built | DRAFT copy — update with Feldon's own words |
| AboutPageCredentials | src/components/AboutPageCredentials.astro | ✅ Built | EPIC confirmed, Awards 2+3 placeholder |
| AboutPageMission | src/components/AboutPageMission.astro | ✅ Built | Mission/Vision/Values, exact brief text |
| AboutPageFit | src/components/AboutPageFit.astro | ✅ Built | Dark navy, 3 good fit cards, not-fit section |
| Calendly embed | src/components/CalendlyEmbed.astro | ✅ Built | Used on /contact and /start — url+height props |
| Contact form | src/components/ContactForm.astro | ✅ Built | Honeypot, validation, Zapier webhook placeholder |
| Contact page | src/pages/contact.astro | ✅ Built | 3 sections, BreadcrumbList+ContactPage schema |
| Landing page | src/pages/start.astro | ✅ Built | Self-contained, no nav, no footer nav, Calendly right col |
| 404 page | src/pages/404.astro | ✅ Built | #26215C, gold 404 number, two CTAs |
| Privacy page | src/pages/privacy.astro | ✅ Built | noindex, GDPR content with confirmed details, review vs live site |
| Terms page | src/pages/terms.astro | ✅ Built | noindex, T&Cs with confirmed details, review vs live site |

---

## SECTION 4 — DESIGN DECISIONS

> Log every design decision made during the build.
> Check this before making any visual decision 
  on any page — consistency is everything.

### Confirmed before build (from site_brief.md)

| Decision | Value |
|---|---|
| Primary colour | #534AB7 purple |
| Secondary colour | #F2D832 gold |
| Dark background | #26215C navy |
| Light lavender bg | #EEEDFE |
| Lavender accent | #AFA9EC |
| Page background | #FAF9F6 off-white |
| Footer background | #26215C navy |
| Heading font | Playfair Display 700 |
| Body font | DM Sans 400/500 |
| H1 size desktop | 48px |
| H1 size mobile | 32px |
| H2 size desktop | 32px |
| H2 size mobile | 24px |
| Body size | 16px (min on mobile) |
| Card border radius | 14px |
| Button shape | Pill — border-radius 100px |
| Section padding desktop | 80px 0 |
| Section padding mobile | 48px 0 |
| Container max-width | 1160px |
| Container padding | 0 40px desktop / 0 20px mobile |
| Card shadow | 0 2px 16px rgba(38,33,92,0.06) |
| Gold rule | Max once per section |
| Nav background | #534AB7 |
| Nav CTA button | #F2D832 gold, #26215C text |
| Hero layout | Copy left column, photo right column |
| Image format | WebP only |
| Image folder | /public/Images/ (capital I — actual folder name) |
| Animation | Subtle fade-in on scroll only |
| Framework | Astro (no Tailwind, no React) |
| CSS approach | Scoped component styles |
| Language | British English — en-GB |
| Voice | I not we — personal brand |

### Decisions made during build
| Decision | Value | Reason | Session |
|---|---|---|---|
| Hero image | feldon-haynes-cutout-thoughtful.webp | Actual file in /public/Images/ — images.md listed different filename | 1 |
| Bundle cards layout | 4-col desktop / 2-col tablet / 1-col mobile | design.md overrides site_brief.md 2×2 grid spec | 1 |
| ProblemGrid | 4 cards (2×2) | User instruction overrides 3-card spec in site_brief.md | 1 |
| Footer background | #1a1744 | design.md confirmed — overrides #26215C in original memory.md | 1 |
| Session includes wrapper | #FAF9F6 outer + #534AB7 inner card | Matches section rhythm "inside off-white section" | 1 |
| About teaser mobile | Photo hidden on mobile | Teaser only — photo shown in full /about page | 1 |
| SessionIncludes feature: session recording | Included | User specified — not in services.md — CONFIRM with Feldon | 1 |
| astro.config site URL | feldeluxe.com | Confirmed in site_brief.md and info.md despite [DOMAIN] instruction | 1 |

---

## SECTION 5 — PLACEHOLDERS OUTSTANDING

> Check this before placing any content.
> If something is marked ⚠️ — use a placeholder.
> Never invent real details. Never leave dead links.

| Item | Used on | Placeholder to use | Status |
|---|---|---|---|
| Domain name | All URLs, canonical, OG | [DOMAIN] | ⚠️ Note: briefs show feldeluxe.com — awaiting user confirmation |
| GA4 Tracking ID | All pages, head layout | [GA4_ID] | ⚠️ CONFIRM G-XXXXXXXXXX format |
| GSC Verification tag | All pages, head layout | [GSC_TAG] | ⚠️ CONFIRM from Google Search Console |
| Calendly: discovery call | Hero, footer CTAs, /contact, /start | calendly.com/feldeluxe/discovery-call | ⚠️ CONFIRM live |
| Calendly: Business Plan Bundle | Bundle card | calendly.com/feldeluxe/packages/8af8f4b4 | ⚠️ CONFIRM full URL — fallback: discovery call URL |
| Calendly: Project Bundle | Bundle card | calendly.com/feldeluxe/packages/da7fbbe4 | ⚠️ CONFIRM full URL — fallback: discovery call URL |
| Calendly: Action Sprint Bundle | Bundle card | calendly.com/feldeluxe/packages/549dd535 | ⚠️ CONFIRM full URL — fallback: discovery call URL |
| Calendly: Direction Bundle | Bundle card | calendly.com/feldeluxe/packages/bcd3e931 | ⚠️ CONFIRM full URL — fallback: discovery call URL |
| Award 2 | About page, credentials section | [AWARD_2_NAME] — [AWARD_2_BODY] — [AWARD_2_YEAR] | ⚠️ CONFIRM with Feldon |
| Award 3 | About page, credentials section | [AWARD_3_NAME] — [AWARD_3_BODY] — [AWARD_3_YEAR] | ⚠️ CONFIRM with Feldon |
| Years coaching | About page, stats | [YEARS_COACHING] | ⚠️ CONFIRM with Feldon |
| Tagline (new) | Meta, OG, footer | "Turn your idea into a plan." (suggested) | ⚠️ CONFIRM with Feldon |
| Video call platform | Services, about | [VIDEO_PLATFORM] (Zoom or Google Meet) | ⚠️ CONFIRM with Feldon |
| Facebook URL | Footer social links | [FACEBOOK_URL] | ⚠️ CONFIRM exact URL |
| Instagram URL | Footer social links | [INSTAGRAM_URL] | ⚠️ CONFIRM handle/URL |
| TikTok URL | Footer social links | [TIKTOK_URL] | ⚠️ CONFIRM handle/URL |
| X (Twitter) URL | Footer social links | [TWITTER_URL] | ⚠️ CONFIRM handle/URL |
| Trustpilot TrustScore | Testimonials section | [TRUSTSCORE] | ⚠️ CONFIRM current score |
| Trustpilot Business ID | Testimonials widget | [TRUSTPILOT_ID] | ⚠️ CONFIRM from business.trustpilot.com |
| Testimonial 1 — reviewer name | Homepage testimonials | [REVIEWER_1_NAME] | ⚠️ CONFIRM from Trustpilot |
| Testimonial 2 — reviewer name | Homepage testimonials | [REVIEWER_2_NAME] | ⚠️ CONFIRM from Trustpilot |
| Testimonial 3 — reviewer name | Homepage testimonials | [REVIEWER_3_NAME] | ⚠️ CONFIRM from Trustpilot |
| LinkedIn recommendations (3) | About page | Do not use until permission confirmed | ⚠️ CONFIRM with each reviewer |
| Notion database URL | Contact form | [NOTION_DB_URL] | ⚠️ CONFIRM Zapier + Notion setup |
| Zapier webhook URL | Contact form | [ZAPIER_WEBHOOK_URL] | ⚠️ CONFIRM account exists |
| Stripe | Payment processing | Stripe invoiced in advance | ⚠️ CONFIRM active |
| Cookie policy | Footer | May need creating if GA4/Trustpilot used | ⚠️ CONFIRM required |
| Feldon's GitHub account | Keystatic CMS setup | — | ⚠️ CONFIRM — needs account for Keystatic |

### Images — all available (actual files in /public/Images/)
| File | Status |
|---|---|
| feldon-haynes-thinking-business-coach-cutout.webp | ✅ Available — use for homepage hero |
| feldon-haynes-thoughtful-portrait.webp | ✅ Available |
| feldon-haynes-professional-headshot.webp | ✅ Available |
| feldon-haynes-whiteboard-strategy-session.webp | ✅ Available |
| feldon-haynes-award-photo.webp | ✅ Available |
| feldon-haynes-sales-funnel-training.webp | ✅ Available |
| feldon-haynes-working-at-laptop.webp | ✅ Available |
| feldon-haynes-cutout-headshot.webp | ✅ Available |
| feldon-haynes-logo-dark.webp | ✅ Available |
| feldon-haynes-logo-light.webp | ✅ Available |
| feldon-haynes-favicon.webp | ✅ Available |

Note: Actual folder is /public/Images/ (capital I). All images confirmed present.

---

## SECTION 6 — BRIEF CHANGES AND NOTES

> Log anything that diverges from the original brief 
  or requires a decision to be flagged back to the user.

| Date | Item | Note |
|---|---|---|
| 2026-05-19 | Image folder | Actual folder is /public/Images/ (capital I), not /public/images/ as in site_brief.md |
| 2026-05-19 | Domain | Briefs state feldeluxe.com — user instructions say use [DOMAIN]. Flagged in Section 5. |
| 2026-05-19 | Footer bg | Memory.md previously had #1a1744 — corrected to #26215C per site_brief.md |
| 2026-05-19 | Hero layout | site_brief.md says left copy / right photo — confirmed |
