# design.md
> TYPE: Project-specific — Feldon Haynes Coaching
> USED BY: Claude Code — read before building any component or page
> Read alongside: site_brief.md · images.md
> Based on: confirmed brand colours + James David coaching site reference
> Last updated: May 2026

---

## DESIGN PHILOSOPHY

Premium personal brand. Warm and editorial — not corporate SaaS.
The design should feel like a trusted advisor's office — considered,
calm, and credible. Not a template. Not generic coaching.

Two references guided this design:
1. James David Coaching site — layout rhythm, card treatment,
   bundle presentation, Calendly embed style
2. SpeakingEdge site — photo-first hero, floating stat cards,
   dark/light section alternation

The result is a site that feels human-designed — not AI-generated.

---

## COLOURS — CONFIRMED NON-NEGOTIABLE

These override anything in the DESIGN.md system file.
Do not substitute. Do not invent new colours.

```css
:root {
  --navy:        #26215C;  /* hero, footer, dark sections, all headings */
  --purple:      #534AB7;  /* nav, primary buttons, stats strip, CTAs */
  --gold:        #F2D832;  /* nav CTA button, final CTA button, accents */
  --lavender:    #AFA9EC;  /* subheadings on dark, card borders, dividers */
  --lavender-bg: #EEEDFE;  /* bundle section bg, light card fills */
  --off-white:   #FAF9F6;  /* main page background, alternating sections */
  --footer-dark: #1a1744;  /* footer only — darker than navy */

  /* Shadows — atmospheric, navy-tinted, never pure black */
  --shadow-card: 0 4px 24px rgba(38, 33, 92, 0.07);
  --shadow-float: 0 8px 40px rgba(38, 33, 92, 0.12);
  --shadow-hover: 0 8px 32px rgba(38, 33, 92, 0.14);
}
```

**Gold rule — critical:**
Gold (#F2D832) appears maximum ONCE per section.
It is the accent. It loses power if it appears everywhere.
Use it only on: nav CTA button, final CTA button, stat numbers,
floating hero cards, and one accent per section maximum.

---

## TYPOGRAPHY — CONFIRMED NON-NEGOTIABLE

Playfair Display for headings. DM Sans for everything else.
Do NOT use Plus Jakarta Sans — the DESIGN.md file suggested it
but site_brief.md takes priority. Playfair gives Feldon's brand
editorial warmth that differentiates it from generic coaching sites.

```css
:root {
  --font-display: 'Playfair Display', Georgia, serif;
  --font-body:    'DM Sans', system-ui, sans-serif;
}
```

### Google Fonts load — in Layout.astro head
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400;1,700&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet">
```

### Type scale

| Element | Font | Size desktop | Size mobile | Weight | Line height |
|---|---|---|---|---|---|
| H1 | Playfair Display | 48px | 32px | 700 | 1.15 |
| H2 | Playfair Display | 36px | 26px | 700 | 1.25 |
| H3 | DM Sans | 20px | 18px | 600 | 1.4 |
| Body large | DM Sans | 16px | 15px | 400 | 1.75 |
| Body | DM Sans | 15px | 15px | 300-400 | 1.7 |
| Label / eyebrow | DM Sans | 11px | 11px | 600 | 1 |
| Nav links | DM Sans | 13px | 13px | 400 | 1 |
| Buttons | DM Sans | 13px | 13px | 600 | 1 |

### Italic heading rule
Use `font-style: italic` in Playfair Display on ONE key word
per H1 or H2 to create editorial contrast and personality.
Example: "Turn your <em>idea</em> into a plan."
Maximum one italic word or phrase per heading.
Never italic on body copy.

### Letter spacing
H1: letter-spacing: -0.02em
H2: letter-spacing: -0.01em
Labels/eyebrows: letter-spacing: 0.12em + text-transform: uppercase

---

## SPACING SYSTEM

8px baseline. All spacing is a multiple of 8.

```css
:root {
  --space-1:  8px;
  --space-2:  16px;
  --space-3:  24px;
  --space-4:  32px;
  --space-5:  40px;
  --space-6:  48px;
  --space-8:  64px;
  --space-10: 80px;
  --space-12: 96px;
}
```

### Section padding
Desktop: `padding: 80px 0`
Mobile: `padding: 48px 0`

### Container
```css
.container {
  max-width: 1160px;
  margin: 0 auto;
  padding: 0 40px;
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }
}
```

### Card padding
Desktop: 28px
Mobile: 20px
Minimum internal padding: 24px — never less

---

## SHAPE AND BORDER RADIUS

```css
:root {
  --radius-sm:   8px;   /* tags, badges, small elements */
  --radius-md:   12px;  /* inputs, small cards */
  --radius-lg:   14px;  /* standard cards, bundle cards */
  --radius-xl:   20px;  /* large feature cards */
  --radius-pill: 100px; /* all buttons */
  --radius-photo: 16px; /* photo frames */
}
```

---

## ELEVATION AND SHADOWS

Shadows are atmospheric — navy-tinted, high blur, very low opacity.
Never use pure black shadows. Never use heavy drop shadows.

```css
/* Standard card — used on most cards */
box-shadow: 0 4px 24px rgba(38, 33, 92, 0.07);

/* Floating elements — stat cards, featured cards */
box-shadow: 0 8px 40px rgba(38, 33, 92, 0.12);

/* Hover state — card lifts slightly */
box-shadow: 0 8px 32px rgba(38, 33, 92, 0.14);
transition: box-shadow 0.2s ease, transform 0.2s ease;
transform: translateY(-2px);

/* Nav shadow when scrolled */
box-shadow: 0 2px 20px rgba(38, 33, 92, 0.15);
```

Use shadows sparingly — only on cards and floating elements.
Do not add shadows to sections or full-width bands.

---

## NAVIGATION

Reference: James David site — clean, minimal, sticky

```
Background: #534AB7
Height: 64px desktop / 56px mobile
Position: sticky top: 0, z-index: 100

Logo (left):
  Font: Playfair Display 700
  "Feldon" → color: #F2D832
  "Haynes Coaching" → color: #ffffff
  Or use: feldon-haynes-logo-white.webp from images.md
  Height: 32px

Nav links (right, before CTA):
  Services · About · Contact
  Font: DM Sans 13px 400
  Color: rgba(255,255,255,0.8)
  Gap: 28px between links

CTA button (far right):
  Text: "Book a call"
  Background: #F2D832
  Color: #26215C
  Font: DM Sans 13px 600
  Padding: 10px 22px
  Border-radius: 100px (pill)

Mobile (under 768px):
  Hamburger icon (right side)
  Full screen overlay on open
  Background: #26215C
  Links stacked, large, centered
  CTA button at bottom of overlay
```

---

## HERO SECTION

Reference: James David site (screenshot 2) — heading left,
photo right, floating stat card over photo

```
Background: #26215C (dark navy)
Min-height: 560px desktop / auto mobile
Layout: 2 columns — 1fr 1fr desktop / stacked mobile

LEFT COLUMN:
  Eyebrow label:
    Font: DM Sans 11px 600
    Color: #AFA9EC
    Letter-spacing: 0.12em
    Text-transform: uppercase
    Margin-bottom: 16px
    Display: flex + align-items: center
    Gold line accent: 28px wide, 1px height, #F2D832, margin-right: 8px

  H1:
    Font: Playfair Display 48px 700 (32px mobile)
    Color: #ffffff
    Line-height: 1.18
    Letter-spacing: -0.02em
    One italic word in #F2D832 gold
    Margin-bottom: 18px

  Subheading:
    Font: DM Sans 15px 300
    Color: #AFA9EC
    Line-height: 1.75
    Max-width: 340px
    Margin-bottom: 32px

  Buttons row:
    Gap: 12px
    Primary: background #534AB7, color #fff, pill, 12px 24px
    Secondary: transparent, border 1px rgba(255,255,255,0.2),
               color rgba(255,255,255,0.8), pill, 12px 24px

  Trust signals:
    Margin-top: 28px
    Padding-top: 24px
    Border-top: 1px solid rgba(255,255,255,0.08)
    Display: flex, flex-direction: column, gap: 8px
    Each item: gold dot (5px circle #F2D832) + DM Sans 12px
               color rgba(255,255,255,0.6)
               Bold value: color #fff

RIGHT COLUMN:
  Photo treatment:
    Border-radius: 16px
    Height: 420px desktop
    Object-fit: cover
    Object-position: center top
    Use: feldon-haynes-thinking-business-coach-cutout.webp
         OR feldon-haynes-thoughtful-portrait.webp

  Floating stat card 1 (bottom-left of photo):
    Position: absolute, bottom: 40px, left: -20px
    Background: rgba(26,23,68,0.9)
    Border: 1px solid rgba(242,216,50,0.25)
    Border-radius: 12px
    Padding: 12px 18px
    Backdrop-filter: blur(8px)
    Stat number: Playfair Display 26px 700 color #F2D832
    Label: DM Sans 10px color rgba(255,255,255,0.65)

  Floating stat card 2 (top-right of photo):
    Position: absolute, top: 32px, right: -16px
    Background: rgba(83,74,183,0.92)
    Border: 1px solid rgba(175,169,236,0.25)
    Border-radius: 12px
    Padding: 10px 16px
    Backdrop-filter: blur(8px)
    Award label: DM Sans 9px 600 color #F2D832
                 letter-spacing 0.1em uppercase
    Sublabel: DM Sans 10px color rgba(255,255,255,0.7)
```

---

## STATS STRIP

Reference: James David — clean stat row below hero

```
Background: #534AB7
Padding: 24px 0
Layout: 4 columns equal width
Border between columns: 1px solid rgba(255,255,255,0.1)

Each stat:
  Number: Playfair Display 32px 700 color #F2D832
  Label: DM Sans 11px 500 color rgba(255,255,255,0.6)
         text-transform: uppercase letter-spacing: 0.06em
  Text-align: center
  Padding: 16px 24px
```

---

## PROBLEM GRID (Who It's For)

Reference: James David — numbered cards in a 2x2 grid

```
Background: #FAF9F6
Section padding: 80px 0

Eyebrow: same treatment as hero eyebrow
H2: Playfair Display, #26215C

Cards: 2x2 grid, gap 14px

Each card:
  Background: #ffffff
  Border-radius: 12px
  Border: 0.5px solid #e4e2f5
  Border-left: 3px solid #534AB7
  Padding: 24px
  Box-shadow: var(--shadow-card)
  Position: relative

  Number (decorative):
    Playfair Display 40px 700
    Color: #EEEDFE (very light — background decoration)
    Position: absolute top: 12px right: 16px

  Heading: DM Sans 14px 600 color #26215C
           padding-right: 32px line-height: 1.4
  Body: DM Sans 13px 300 color #888 line-height: 1.7
```

---

## BUNDLE CARDS

Reference: James David — 4 cards in a row, "Most Popular" badge
This replaces the 2x2 grid from earlier designs.

```
Background: #EEEDFE
Section padding: 80px 0

Layout: 4 columns desktop / 2 columns tablet / 1 column mobile
Gap: 14px

Each card:
  Background: #ffffff
  Border-radius: 14px
  Border: 0.5px solid #d4d1f0
  Padding: 28px 24px
  Box-shadow: var(--shadow-card)
  Position: relative
  Transition: transform 0.2s ease, box-shadow 0.2s ease

  Hover:
    Transform: translateY(-4px)
    Box-shadow: var(--shadow-hover)

  Icon wrapper:
    Width: 40px height: 40px
    Background: #EEEDFE border-radius: 10px
    Display: flex align-items: center justify-content: center
    Margin-bottom: 14px
    Icon: Tabler icon, 20px, color #534AB7

  Bundle name: DM Sans 14px 600 color #26215C margin-bottom: 4px
  Meta: DM Sans 11px 400 color #AFA9EC margin-bottom: 16px

  Price row:
    Display: flex align-items: baseline gap: 8px margin-bottom: 18px
    Price: Playfair Display 30px 700 color #534AB7
    Was price: DM Sans 13px color #ccc text-decoration: line-through
    Save badge: DM Sans 10px 600 color #085041
                background: #E1F5EE padding: 3px 8px border-radius: 100px

  CTA button:
    Width: 100%
    Background: #534AB7 color #fff
    Font: DM Sans 12px 500
    Padding: 10px
    Border-radius: 100px
    Border: none
    Cursor: pointer
    Transition: background 0.2s ease
    Hover: background #3b309e

  Most Popular badge (Action Sprint only):
    Position: absolute top: -12px left: 50% transform: translateX(-50%)
    Background: #26215C color #F2D832
    Font: DM Sans 10px 600 letter-spacing: 0.08em uppercase
    Padding: 4px 14px border-radius: 100px
    White-space: nowrap
```

---

## WHAT EVERY SESSION INCLUDES

Reference: James David — dark purple rounded rectangle section
with photo collage right side. Use this treatment.

```
Background: #534AB7
Border-radius: 24px (rounded card section, not full width)
Margin: 0 40px (leaves gap on sides)
Padding: 48px
Layout: 2 columns — text left, photo grid right

Left:
  H2: Playfair Display color #fff
  Subtext: DM Sans color rgba(255,255,255,0.7)
  3 feature items with Tabler icons:
    Icon: 20px color #F2D832 in small #26215C rounded square
    Title: DM Sans 14px 600 color #fff
    Body: DM Sans 12px 300 color rgba(255,255,255,0.65)

Right:
  2x2 grid of photos or abstract shapes
  Rounded corners 12px
  Use available images from images.md
```

---

## ABOUT TEASER

Reference: James David — photo left, text right on dark background

```
Background: #26215C
Layout: 2 columns — photo left (1fr), text right (1.4fr)
Min-height: 400px

Photo (left):
  Use: feldon-haynes-professional-headshot.webp
  Object-fit: cover height: 100%
  Border-radius: 16px on right side panels

Text (right):
  Padding: 60px 48px 60px 32px
  Eyebrow: DM Sans 10px 600 color #AFA9EC uppercase letter-spacing 0.12em
  H2: Playfair Display 28px 700 color #fff
      One italic phrase in #F2D832
  Body: DM Sans 13px 300 color #AFA9EC line-height: 1.8
        margin-bottom: 28px
  Two buttons:
    Primary: #F2D832 background #26215C text (gold button)
    Secondary: transparent border rgba(255,255,255,0.15)
               color rgba(255,255,255,0.7)
```

---

## TESTIMONIALS

Reference: James David — dark purple section, 3 cards,
avatar photo + name + company + stars

```
Background: #EEEDFE (light) or #534AB7 (dark version)
Use #FAF9F6 for this site to alternate correctly

Cards: 3 column grid, gap 14px

Each card:
  Background: #ffffff
  Border-radius: 14px
  Border: 0.5px solid #e4e2f5
  Padding: 24px
  Box-shadow: var(--shadow-card)

  Stars: 5 × gold stars #F2D832 font-size 14px
         gap: 3px margin-bottom: 14px

  Quote: DM Sans 13px 300 color #555
         font-style: italic line-height: 1.75
         margin-bottom: 16px

  Separator: 24px wide 1px #EEEDFE margin-bottom: 12px

  Name: DM Sans 13px 600 color #26215C
  Role/company: DM Sans 11px 400 color #AFA9EC margin-top: 2px

Placeholder card (while awaiting testimonials):
  Background: #EEEDFE
  Border: 1px dashed #AFA9EC
  Border-radius: 14px
  Min-height: 160px
  Display flex align-items center justify-content center
  Text: DM Sans 11px color #AFA9EC text-align center
```

---

## FINAL CTA SECTION

Reference: James David — icon + heading + Calendly embed side by side

```
Background: #534AB7
Padding: 80px 40px
Position: relative overflow: hidden

Background circles (decorative):
  Two large circles, rgba(38,33,92,0.2), positioned off-edge

Layout option A (without Calendly embed):
  Text-align: center
  Eyebrow tag: DM Sans 10px uppercase letter-spacing color #AFA9EC
  H2: Playfair Display 34px 700 color #fff
      Italic phrase in #F2D832
  Subtext: DM Sans 14px 300 color rgba(255,255,255,0.65)
           margin-bottom: 32px
  Button: #F2D832 background #26215C text
          DM Sans 14px 600 padding: 16px 40px border-radius: 100px
  Note below button: DM Sans 11px color rgba(255,255,255,0.4)
                    "No pitch. No pressure. Just a conversation."

Layout option B (with Calendly embed — use on /contact):
  2 columns: text left, Calendly embed right
  Background: #FAF9F6 section (not purple)
```

---

## FOOTER

```
Background: #1a1744
Padding: 36px 40px

Top row:
  Logo left: Playfair Display 15px 700
             "Feldon" color #F2D832
             "Haynes Coaching" color #fff
  Nav links centre: DM Sans 12px color rgba(255,255,255,0.4)
                    gap: 24px
  Contact right: DM Sans 12px color rgba(255,255,255,0.4)
                 line-height: 1.6
                 info@feldeluxe.com
                 07562 614867

Divider: 1px solid rgba(255,255,255,0.06) margin: 20px 0

Bottom row:
  Copyright left: DM Sans 11px color rgba(255,255,255,0.25)
  Legal links right: Privacy · Terms
                     DM Sans 11px color rgba(255,255,255,0.25)
                     gap: 20px

Social icons (between nav and contact):
  LinkedIn · Facebook · WhatsApp
  Icon size: 18px
  Color: rgba(255,255,255,0.4)
  Hover: rgba(255,255,255,0.9)
  Gap: 16px
  Hide Instagram and TikTok until URLs confirmed
```

---

## BUTTONS — COMPLETE SPEC

```css
/* Primary — purple */
.btn-primary {
  background: #534AB7;
  color: #ffffff;
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  font-weight: 600;
  padding: 12px 24px;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;
}
.btn-primary:hover { background: #3b309e; }
.btn-primary:active { transform: scale(0.98); }

/* Gold — main CTA only */
.btn-gold {
  background: #F2D832;
  color: #26215C;
  font-family: 'DM Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  padding: 14px 36px;
  border-radius: 100px;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;
}
.btn-gold:hover { background: #e8ce2a; }
.btn-gold:active { transform: scale(0.98); }

/* Ghost — secondary actions */
.btn-ghost {
  background: transparent;
  color: rgba(255,255,255,0.8);
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  font-weight: 400;
  padding: 12px 24px;
  border-radius: 100px;
  border: 1px solid rgba(255,255,255,0.2);
  cursor: pointer;
  transition: border-color 0.2s ease;
}
.btn-ghost:hover { border-color: rgba(255,255,255,0.5); }
```

---

## MOBILE RULES

Mobile first. Design every component at 375px before desktop.

```
Breakpoints:
  Mobile: 375px (design here first)
  Tablet: 768px
  Desktop: 1024px+
  Wide: 1440px

Mobile changes:
  H1: 32px
  H2: 26px
  Section padding: 48px 0
  Container padding: 0 20px
  Hero: stacked — photo top, copy bottom
  Bundle cards: 1 column
  Problem grid: 1 column
  About teaser: stacked
  Testimonials: 1 column
  Font size minimum: 16px body
  Tap targets minimum: 48x48px all buttons and links
  No horizontal scroll
```

---

## ANIMATION

Subtle only. Nothing that slows the page or distracts.

```css
/* Fade in on scroll — apply to sections */
.fade-in {
  opacity: 0;
  transform: translateY(16px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
/* Use Intersection Observer — threshold 0.1 */

/* Card hover — lift effect */
transition: transform 0.2s ease, box-shadow 0.2s ease;

/* Button press — spring feel */
:active { transform: scale(0.98); }

/* No parallax. No heavy animations. No auto-playing anything. */
```

---

## SECTION RHYTHM — PAGE FLOW

The dark/light alternation creates visual breathing room.
Follow this rhythm exactly — do not break it.

```
Nav          → #534AB7 (purple)
Hero         → #26215C (dark navy)
Stats strip  → #534AB7 (purple)
Problem grid → #FAF9F6 (off-white)
Bundles      → #EEEDFE (light lavender)
Session inc  → #534AB7 rounded card (inside off-white section)
About teaser → #26215C (dark navy)
Testimonials → #FAF9F6 (off-white)
Final CTA    → #534AB7 (purple)
Footer       → #1a1744 (darkest)
```

---

## WHAT NOT TO DO

- No pure black anywhere — use #26215C for dark
- No Inter, Roboto, or Arial — Playfair Display + DM Sans only
- No Plus Jakarta Sans — wrong for this brand
- No Tailwind — scoped Astro CSS only
- No heavy drop shadows — atmospheric only
- No more than 2 fonts loaded
- No animation on page load — only on scroll
- No emoji as design elements — Tabler icons only
- No gold on gold — never #F2D832 text on #F2D832 background
- No ALL CAPS on headings — sentence case only
- No generic stock photos of handshakes or meetings
- Gold (#F2D832) maximum once per section — it must pop
