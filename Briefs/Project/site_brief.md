# site_brief.md
> TYPE: Project-specific — Feldon Haynes Coaching
> USED BY: Claude Code — read this first before any other project file
> READ ALONGSIDE: brand_voice.md · avatar.md · services.md · keywords.md · seo.md · images.md · copy.md
> Status: Ready to build — pending Feldon's photos, testimonials, Calendly URLs, GA4 ID, GSC tag
> Last updated: May 2026

---

## Business Overview

| Detail | Value |
|---|---|
| Brand name | Feldon Haynes Coaching |
| Legal entity | Feldeluxe Ltd |
| Director / Founder | Feldon Haynes |
| Domain | feldeluxe.com |
| Email | info@feldeluxe.com |
| Phone | 07562 614867 |
| Location | Halesowen, West Midlands |
| Framework | Astro (latest stable) |
| Hosting | Vercel (auto-deploy from GitHub) |
| CMS | Keystatic (Feldon edits text without touching code) |
| Analytics | GA4 — Tracking ID: TBC from Feldon |
| Search Console | GSC verification tag: TBC from Feldon |

---

## What the Business Does

Feldon Haynes is a serial entrepreneur and business coach offering 1-to-1 coaching for ambitious founders and small business owners. He has personally started 35+ businesses, supported 40+ founders, and won 3 industry awards including the personal EPIC Spirit Award for entrepreneurial perseverance.

Coaching is delivered entirely online via video call. Sessions available Wednesday and Thursday, 8am–6pm.

**The business is for:**
- Aspiring founders (18–27) who have an idea but no plan
- Early-stage founders (18–35) who have momentum but lack direction
- Wider sector clients (charities, social enterprises, private businesses) with specific project or strategic needs

---

## Brand Colours — CONFIRMED

| Role | Hex | Usage |
|---|---|---|
| Primary — buttons, nav, key UI | `#534AB7` | CTAs, navigation bar, icon accents |
| Secondary — badges, highlights | `#F2D832` | Gold accents, award callouts, highlight text |
| Section backgrounds / hero tints | `#AFA9EC` / `#EEEDFE` | Light section backgrounds, card fills |
| Page background | `#FAF9F6` | Main page background between sections |
| Body text / headings | `#26215C` | All headings, body copy, dark section backgrounds |

**Dark hero / footer:** `#26215C` navy for hero, footer, full-width dark bands.
**Navigation bar:** `#534AB7` purple with white links and gold CTA button.

---

## Typography

| Role | Font | Weight |
|---|---|---|
| Display / H1 / H2 | Playfair Display | 700 |
| Body / UI / H3 / buttons | DM Sans | 400 / 500 |

Load via Google Fonts. No fallback to Inter, Roboto, or Arial.

**Writing rules:**
- British English throughout
- Sentence case on all headings and buttons — never ALL CAPS
- "I" not "we" — this is a personal brand, solo founder
- No: "leverage", "synergy", "seamless", "game-changer", "In today's digital landscape"
- Tone: direct, honest, warm — knowledgeable friend, not corporate consultant

---

## Site Structure — 5 Pages + 1 Landing Page

| Page | URL | Purpose |
|---|---|---|
| Home | / | Main conversion page — who Feldon is, what he offers, drive discovery call bookings |
| About | /about | Personal story, credentials, awards, values — builds trust |
| Contact | /contact | Calendly embed (primary) + email + WhatsApp + contact form |
| Privacy Policy | /privacy | Legal requirement — reformat from Feldon's existing policy |
| Terms & Conditions | /terms | Legal requirement — reformat from Feldon's existing T&Cs |
| Landing page | /start | Ad/LinkedIn traffic only — single CTA, no nav, Calendly embed |

---

## Page Section Layouts

### HOME ( / )

**Hero**
- Background: `#26215C` (dark navy)
- Left column: H1 headline + subheading + 2 CTA buttons + trust badges
- Right column: Feldon's photo (use placeholder until photo received)
- H1: "Turn your idea into a plan. I'll show you how."
- Subheading: "1-to-1 entrepreneurial coaching for ambitious founders — from someone who's actually done it."
- CTA 1 (primary, `#534AB7` button): "Book your free discovery call"
- CTA 2 (secondary, outlined): "See how it works" → scrolls to bundles section
- Trust badges: "35+ businesses started · 40+ founders supported · 3 industry awards"

**Social proof strip**
- Background: `#534AB7` (purple)
- 4 stats in a row: 35+ Businesses Started · 40+ Founders Supported · 3 Industry Awards · EPIC Spirit Award Winner
- White text, `#F2D832` numbers

**Who it's for**
- Background: `#FAF9F6` (off-white)
- H2: "Is this you?"
- 3 cards (border-left accent in `#534AB7`):
  - The Aspiring Founder — "You've got the idea. You haven't launched yet. You need a plan, not another YouTube video."
  - The Early Founder — "You're up and running but losing direction. You need someone to help you see the bigger picture."
  - The Business Owner — "You've got a specific project or challenge. You need focused, experienced input — fast."

**The 4 Bundles**
- Background: `#EEEDFE` (light lavender)
- H2: "Choose your starting point"
- 2×2 card grid — one card per bundle (detail in Services section below)
- Below grid: "Not sure which one? Start with a free 30-minute discovery call." + Calendly button

**Testimonials**
- Background: `#FAF9F6`
- H2: "What founders say"
- 2–3 quote cards — PLACEHOLDER until Feldon provides real testimonials

**About teaser**
- Background: `#26215C` (navy)
- Left: Feldon's photo
- Right: 3–4 lines in first person + "Read my full story →" → /about

**Final CTA**
- Background: `#534AB7`
- H2: "Ready to build something real?"
- Body: "Your free 30-minute discovery call costs nothing. Let's see if we're a good fit."
- Button (`#F2D832` gold, dark text): "Book your free call" → Calendly discovery call

---

### ABOUT ( /about )

**Hero**
- Background: `#26215C`
- H1: "I'm Feldon. I've started 35 businesses. Now I help you build yours."
- Full-width or split layout with Feldon's photo

**His story**
- Background: `#FAF9F6`
- First person, conversational — written in Claude using brand voice doc
- Core: West Midlands, real founder experience, saw brilliant people held back by lack of a plan, started coaching to change that

**Credentials & Awards**
- Background: `#EEEDFE`
- H2: "Why trust me?"
- Award cards — EPIC Spirit Award + 2 others (TBC from Feldon)
- Stats: 35+ businesses started · 40+ founders supported

**Mission, Vision, Values**
- Background: `#FAF9F6`
- Mission: "To help ambitious entrepreneurs turn their ideas into structured, actionable plans — and give them the clarity and confidence to execute them."
- Vision: "To become the go-to entrepreneurial coaching brand for the next generation of West Midlands founders."
- Values list: Honesty · Action · Accessibility · Experience · Integrity

**Who I work with / who I don't**
- Transparent niche clarity paragraph — filters right clients in, wrong clients out

**CTA**
- Background: `#534AB7`
- "If any of this sounds like what you need — let's talk."
- Button: "Book your free discovery call" → Calendly

---

### CONTACT ( /contact )

**Header**
- H1: "Let's talk"
- Subheading: "The best place to start is a free 30-minute discovery call. No pitch. No pressure."

**Calendly embed (primary)**
- Full inline Calendly embed
- URL: calendly.com/feldeluxe/discovery-call

**Other ways to reach Feldon**
- Email: info@feldeluxe.com
- WhatsApp: 07562 614867
- Simple contact form: Name / Email / Message → Notion via Zapier webhook

---

### LANDING PAGE ( /start )

**Rules: No navigation bar. No footer nav links. Single goal only.**

- Hero background: `#26215C`
- H1: "You've got the idea. Let's build the plan."
- 3 bullet points: what the free call gives them (clarity, a plan, no obligation)
- Inline Calendly embed — discovery call
- Social proof line: "35+ businesses started · 40+ founders coached · EPIC Spirit Award winner"
- Zero links off the page except Calendly

---

## Services — Full Detail

### Free discovery call (entry point)
- 30 minutes, video call
- Not a coaching session — qualification and trust-building call
- Ends with a verbal one-time offer for first paid session
- Calendly: calendly.com/feldeluxe/discovery-call

### Bundle 1 — The Business Plan Bundle
- Sessions: 6
- Launch price: £160 (was £300)
- For: Aspiring founders who need a complete plan to launch
- Includes: Idea validation, business model, brand & positioning, operations, launch planning, 90-day roadmap, written action summary every session, email support
- Calendly: calendly.com/feldeluxe/packages/8af8f4b4 ← CONFIRM FULL URL with Feldon

### Bundle 2 — The Project Bundle
- Sessions: 3
- Launch price: £90 (was £150)
- For: Founders with a specific project to plan and deliver
- Includes: Project scoping, action mapping & timeline, risk review, launch readiness, written action summary, email support
- Calendly: calendly.com/feldeluxe/packages/da7fbbe4 ← CONFIRM FULL URL with Feldon

### Bundle 3 — The Action Sprint Bundle
- Sessions: 3 sessions across 3 weeks
- Launch price: £90 (was £150)
- For: Founders who are stuck and need to move fast
- Includes: Diagnose the block, prioritise & decide, 30-day action plan, accountability check-in, written action summary
- Calendly: calendly.com/feldeluxe/packages/549dd535 ← CONFIRM FULL URL with Feldon

### Bundle 4 — The Direction Bundle
- Sessions: 6
- Launch price: £160 (was £300)
- For: Existing businesses that have lost strategic clarity
- Includes: Business audit, vision work, diagnosing barriers, strategic priorities & decisions, 6-month strategic roadmap, written action summary every session
- Calendly: calendly.com/feldeluxe/packages/bcd3e931 ← CONFIRM FULL URL with Feldon

---

## Integrations

| Integration | Where | Method |
|---|---|---|
| Calendly | Contact page, /start, bundle cards, hero + footer CTAs | Inline embed on /contact and /start; button links everywhere else |
| Notion | Contact form submissions | Zapier free tier webhook → Notion database (Name, Email, Message, Date) |
| GA4 | All pages, head layout | Tracking ID TBC from Feldon |
| Google Search Console | All pages, head layout | Verification meta tag TBC from Feldon |
| Keystatic CMS | Editable content areas | feldeluxe.com/keystatic — GitHub storage mode |

---

## Keystatic CMS — Editable Fields

Feldon must be able to edit without touching code:
- Homepage headline and subheading
- Bundle names, descriptions, prices
- Testimonials (add / edit / remove)
- About page body copy
- Award names and descriptions
- Contact details (email, phone)

Config: `storage: { kind: 'github' }` for production.
Admin URL: feldeluxe.com/keystatic

---

## SEO — Follow seo.md

All SEO rules live in `seo.md`. Claude Code reads that file for every technical SEO requirement.
Summary of requirements:

- One H1 per page containing the primary keyword (from `keywords.md`)
- British English throughout
- Meta title: under 60 characters, primary keyword first, "Feldon Haynes Coaching" last
- Meta description: under 160 characters, primary keyword in first 20 words
- All images: per `images.md` — WebP, descriptive filename, alt text, width + height, loading=lazy
- Schema: Organisation (homepage) · LocalBusiness + Person (about) · Article (blog posts)
- OG tags + canonical tag on every page
- robots.txt and sitemap.xml in project root

| Page | Primary keyword |
|---|---|
| / | business coach small business |
| /about | business coach and mentor |
| /contact | find a business coach |
| /start | business startup advice |

Full keyword clusters, secondary keywords, and blog post assignments are in `keywords.md`.
Claude Code reads `keywords.md` for all meta titles, meta descriptions, URL slugs, and schema.

---

## Navigation

**Sticky header:**
- Logo left (wordmark: "Feldon Haynes" in Playfair Display, or FH monogram)
- Nav links right: Services · About · Contact
- CTA button right of links: "Book a call" — `#F2D832` gold button, `#26215C` text
- Background: `#534AB7` purple
- On mobile: hamburger menu, full-screen overlay

**Footer:**
- Background: `#26215C`
- Logo + tagline
- Nav links: Home · About · Contact · Privacy · Terms
- Email + phone
- Copyright: © 2026 Feldon Haynes Coaching · Feldeluxe Ltd. All rights reserved.

---

## Technical Spec

- Framework: Astro (latest stable)
- Deploy: Vercel, auto-deploy from GitHub main branch
- CSS: Scoped Astro component styles — no Tailwind, no external UI library
- Fonts: Google Fonts (Playfair Display + DM Sans) — load via `<link>` in head layout
- Images: WebP only, stored in /public/images/
- Mobile-first — all layouts must work at 375px minimum viewport
- No heavy animation — subtle fade-in on scroll only (use Intersection Observer)
- Accessibility: all images have alt text, all buttons have descriptive labels, colour contrast AA minimum

---

## Content Still Needed from Feldon

| Item | Status |
|---|---|
| Photos — headshot + working/candid | AWAITING |
| Client testimonials (2–3) with permission | AWAITING |
| Award 2 — name + issuing body + year | AWAITING |
| Award 3 — name + issuing body + year | AWAITING |
| Full Calendly bundle URLs (confirm live) | AWAITING |
| GA4 tracking ID | AWAITING |
| GSC verification tag | AWAITING |
| His story in his own words (for About) | AWAITING |

---

## What NOT to Do

- Do not hide prices — show them clearly on bundle cards
- Do not use "we" — always "I"
- Do not use stock photos of handshakes, meetings, or generic office scenes
- Do not use Inter, Roboto, or Arial
- Do not add heavy animations or parallax effects
- Do not include a blog section in this build (add later once live)
- Do not add social media feed embeds — links only
