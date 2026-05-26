# Keystatic CMS — Complete Setup Guide
## For Astro SSR + Vercel + GitHub Storage

This guide documents every step, every bug hit, and every fix from a real production setup.
Follow this exactly and it works first time.

---

## Stack

- Astro v5, `output: 'server'`
- `@astrojs/vercel` adapter
- Keystatic v0.5.x
- GitHub storage (commits CMS saves directly to the repo)
- Deployed on Vercel

---

## Part 1 — GitHub App Setup

**Critical: Must be a GitHub App, NOT an OAuth App.**

OAuth Apps do not return `expires_in` or `refresh_token` in their auth response. Keystatic requires both. If you use an OAuth App, login will silently fail or throw "Authorization failed" with no useful error.

### Steps

1. Go to the GitHub account that owns the repo (e.g. `feldelux-lgtm`)
2. **Settings → Developer settings → GitHub Apps → New GitHub App**
3. Fill in:
   - **GitHub App name**: anything (e.g. `feldon-haynes-cms`)
   - **Homepage URL**: your site URL (e.g. `https://feldonhaynes.com`)
   - **Callback URL**: `https://yoursite.com/api/keystatic/github/oauth/callback`
   - **Setup URL**: leave blank
   - **Webhook**: untick "Active"
4. Under **Permissions → Repository permissions**:
   - Contents: **Read and write**
   - Metadata: **Read-only**
5. Under **Where can this GitHub App be installed**: **Only on this account**
6. Tick **"Expire user authorization tokens"** — this is what generates `refresh_token`
7. Click **Create GitHub App**
8. On the app page, note the **Client ID**
9. Scroll to **Client secrets** → **Generate a new client secret** → copy it immediately
10. Scroll to **Install App** → **Install** → select the repo → **Install**

### Values to save
```
KEYSTATIC_GITHUB_CLIENT_ID     = Iv23...
KEYSTATIC_GITHUB_CLIENT_SECRET = the secret you copied
PUBLIC_KEYSTATIC_GITHUB_APP_SLUG = the-app-name-you-chose (lowercase, hyphens)
```

The `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG` is the lowercase-hyphenated version of your app name shown in the GitHub App URL: `github.com/apps/your-app-slug`.

---

## Part 2 — Keystatic Config

### Install packages

```bash
npm install @keystatic/core @keystatic/astro
```

### `keystatic.config.ts`

```ts
import { config, collection, singleton, fields } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: { owner: 'github-org-or-user', name: 'repo-name' },
  },
  ui: {
    brand: { name: 'Client Name — CMS' },
  },
  singletons: {
    // one singleton per editable page/section
    homepage: singleton({
      label: 'Homepage',
      path: 'src/data/homepage',
      schema: {
        hero_headline: fields.text({ label: 'Hero headline', multiline: true }),
        // ... all your text fields
      },
    }),
    site_settings: singleton({
      label: 'Site settings',
      path: 'src/data/site-settings',
      schema: {
        email: fields.text({ label: 'Email address' }),
        calendly_discovery: fields.text({ label: 'Calendly — Discovery call URL' }),
        // ...
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
        content: fields.document({ label: 'Content', formatting: true, links: true }),
      },
    }),
  },
});
```

### `src/lib/reader.ts`

```ts
import { createReader } from '@keystatic/core/reader';
import config from '../../keystatic.config';

export const reader = createReader(process.cwd(), config);
```

---

## Part 3 — Astro Config

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';

export default defineConfig({
  site: 'https://yoursite.com',
  output: 'server',
  adapter: vercel({
    includeFiles: [
      // List EVERY yaml file in src/data/
      // Without this, Vercel's serverless function can't find the files at runtime
      // and the reader silently falls back to hardcoded defaults.
      // Add new entries here whenever you create new data files.
      'src/data/homepage.yaml',
      'src/data/site-settings.yaml',
      'src/data/nav.yaml',
      'src/data/footer.yaml',
      'src/data/contact-page.yaml',
      'src/data/bundles/the-project-bundle.yaml',
      'src/data/testimonials/workshop-attendee.yaml',
      // ... all other yaml files
    ],
  }),
  integrations: [
    react(),   // Keystatic admin UI requires React
    keystatic(),
  ],
});
```

**Why `includeFiles` is required:**
Vercel's serverless function only auto-bundles JS/TS files. YAML data files are excluded by default. At runtime, `createReader` looks for files on the serverless function's filesystem. Without `includeFiles`, the files aren't there → reader returns `null` → every field falls back to the hardcoded default → CMS edits never show on the live site.

**Important:** Every time you add a new YAML data file, add it to `includeFiles` too.

---

## Part 4 — API Route Override (Critical for Vercel)

Keystatic's built-in API route uses `req.url` to determine the host. On Vercel, `req.url` is a relative path (e.g. `/api/keystatic/...`) not an absolute URL. This causes the OAuth callback to redirect to `undefined` or `localhost`.

Create this file to fix it:

### `src/pages/api/keystatic/[...params].ts`

```ts
import { makeHandler } from '@keystatic/astro/api';
import config from '../../../../keystatic.config';

export const ALL = makeHandler({
  config,
  request: (req) => {
    const forwardedHost = req.headers.get('x-forwarded-host');
    const forwardedProto = req.headers.get('x-forwarded-proto');

    if (forwardedHost && forwardedProto) {
      const fixedUrl = new URL(
        req.url.startsWith('http') ? req.url : `${forwardedProto}://${forwardedHost}${req.url}`
      );
      return new Request(fixedUrl.toString(), req);
    }

    const base = process.env.KEYSTATIC_URL ?? req.url;
    if (!req.url.startsWith('http')) {
      const fixedUrl = new URL(req.url, base);
      return new Request(fixedUrl.toString(), req);
    }

    return req;
  },
});
```

---

## Part 5 — Vercel Environment Variables

Go to **Vercel → Project → Settings → Environment Variables** and add all of these:

| Variable | Value | Notes |
|---|---|---|
| `KEYSTATIC_GITHUB_CLIENT_ID` | `Iv23...` | From GitHub App page |
| `KEYSTATIC_GITHUB_CLIENT_SECRET` | `the-secret` | Generated on GitHub App page |
| `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG` | `your-app-slug` | Lowercase-hyphenated app name |
| `KEYSTATIC_URL` | `https://yoursite.com` | Full production URL, no trailing slash |
| `KEYSTATIC_SECRET` | `random-40+-char-string` | Generate with `openssl rand -hex 20` |

**Notes:**
- `PUBLIC_KEYSTATIC_GITHUB_APP_SLUG` must start with `PUBLIC_` — it's exposed to the browser
- `KEYSTATIC_URL` fixes the localhost redirect bug on Vercel
- `KEYSTATIC_SECRET` is required — Keystatic throws `"Missing required config... - secret"` without it
- After adding env vars, trigger a **manual redeploy** from Vercel dashboard (env vars only apply to new deployments)

---

## Part 6 — Seed Data Files

Create YAML files for every singleton before first deploy, otherwise the CMS shows blank fields and components fall back to hardcoded defaults.

```
src/data/homepage.yaml
src/data/site-settings.yaml
src/data/nav.yaml
src/data/footer.yaml
src/data/contact-page.yaml
```

Example `src/data/homepage.yaml`:
```yaml
hero_headline: "Your headline here."
hero_subheading: "Your subheading here."
```

For collections (blog, testimonials, bundles), create one YAML file per entry:
```
src/data/testimonials/first-reviewer.yaml
src/data/bundles/starter-bundle.yaml
```

Example bundle entry `src/data/bundles/starter-bundle.yaml`:
```yaml
name: The Starter Bundle
tagline: For new founders
sessions: 3
price: 90
price_was: 150
description: "Three sessions to get you started."
calendly_url: "https://calendly.com/your-link"
sort_order: 1
most_popular: false
```

---

## Part 7 — Reading CMS Data in Components

```astro
---
import { reader } from '../lib/reader';

const hp   = await reader.singletons.homepage.read();
const site = await reader.singletons.site_settings.read();

// Always provide a hardcoded fallback in case the file is missing
const headline = hp?.hero_headline ?? 'Your fallback headline.';
const email    = site?.email ?? 'hello@yoursite.com';
---

<h1>{headline}</h1>
```

For collections:
```astro
---
const bundles = await reader.collections.bundles.all();
const sorted  = bundles.sort((a, b) => (a.entry.sort_order ?? 99) - (b.entry.sort_order ?? 99));
---

{sorted.map(b => (
  <div>{b.entry.name}</div>
))}
```

For slug fields (`fields.slug`), access the display name as:
```ts
const name = (entry.name as any)?.name ?? entry.name;
```

---

## Part 8 — Deployment Checklist

Before going live, verify:

- [ ] GitHub App created with "Expire user authorization tokens" ticked
- [ ] GitHub App installed on the correct repo
- [ ] All 5 Vercel env vars set
- [ ] `src/pages/api/keystatic/[...params].ts` exists with the URL fix
- [ ] `astro.config.mjs` has `includeFiles` listing all YAML data files
- [ ] All seed YAML files committed and pushed
- [ ] Manual redeploy triggered after setting env vars

---

## Bugs Hit and Fixes

### Bug: "Authorization failed" on login
**Cause:** Used an OAuth App instead of a GitHub App. OAuth Apps don't return `refresh_token`.
**Fix:** Delete the OAuth App. Create a GitHub App with "Expire user authorization tokens" enabled.

### Bug: 500 error on `/keystatic` — "Missing required config: secret"
**Cause:** `KEYSTATIC_SECRET` env var not set in Vercel.
**Fix:** Add `KEYSTATIC_SECRET` to Vercel env vars. Any random 40+ character string works. Generate with `openssl rand -hex 20`.

### Bug: 500 error — OAuth callback redirects to `localhost` or `undefined`
**Cause:** Vercel's `req.url` is a relative path, not an absolute URL. Keystatic can't construct the callback URL.
**Fix:** Add the `src/pages/api/keystatic/[...params].ts` override that reads `x-forwarded-host` headers. Also add `KEYSTATIC_URL` env var.

### Bug: CMS edits save to GitHub but live site never updates
**Cause:** YAML files are not bundled into Vercel's serverless function. At runtime, `createReader` can't find the files and returns `null` for every field, causing components to use hardcoded fallbacks.
**Fix:** Add `includeFiles` to the `vercel()` adapter config in `astro.config.mjs` listing every YAML file path explicitly.

### Bug: Push rejected — "Permission denied to pixovauk-cmyk"
**Cause:** The developer account was removed as a collaborator from the client's GitHub repo.
**Fix:** Client re-adds developer as collaborator with Write access, OR use a Personal Access Token from the client's account with `Contents: Read and write` permission.

### Bug: Fine-grained PAT push fails with 403 despite API working
**Cause:** Fine-grained PAT was created with only `metadata=read` permission, not `contents=write`.
**Fix:** Recreate the token with **Repository permissions → Contents → Read and write** selected.

### Bug: Keystatic commit and local branch diverge on next push
**Cause:** When Keystatic saves via the CMS, it commits directly to GitHub. Local branch is now behind.
**Fix:** Before each push, run: `git pull origin main --rebase` then `git push`.

---

## How CMS Edits Flow to Production

```
Feldon edits text in /keystatic
        ↓
Keystatic commits YAML change to GitHub (main branch)
        ↓
Vercel webhook fires → new build triggered
        ↓
Astro build runs — YAML files bundled into serverless function
        ↓
Vercel deploys new version (~60 seconds total)
        ↓
Live site shows updated text
```

**Every CMS save = a new GitHub commit = a new Vercel deployment.**
Changes are not instant — allow ~1 minute.

---

## Adding New Pages to CMS

1. Add a new singleton to `keystatic.config.ts`
2. Create the seed YAML file at the configured path
3. Add the YAML file path to `includeFiles` in `astro.config.mjs`
4. Update the component to read from the reader
5. Commit, push — done

---

## Files Changed in a Full Setup

```
keystatic.config.ts                          ← CMS schema definition
astro.config.mjs                             ← vercel includeFiles + keystatic integration
src/lib/reader.ts                            ← createReader helper
src/pages/api/keystatic/[...params].ts       ← Vercel URL fix
src/data/homepage.yaml                       ← seed data
src/data/site-settings.yaml                  ← seed data
src/data/[page-name].yaml                    ← seed data (one per singleton)
src/data/[collection]/[entry].yaml           ← seed data (one per collection entry)
src/components/[Component].astro             ← wired to reader
```
