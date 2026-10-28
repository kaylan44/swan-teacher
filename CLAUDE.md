# CLAUDE.md — Swan Lessons

This file guides Claude Code (and other agents) when working on this repository.

## Before any change

1. Read the **Project Structure** section of this file — it maps every file to its responsibility.
2. UI copy lives exclusively in `lib/constants.ts` → `TRANSLATIONS`. Never hardcode strings in components.
3. Dynamic content (prices, contact info, reviews) lives in Sanity. Prefer editing the `importantData` document in Sanity Studio over changing fallback values in code.
4. Do not introduce UI component libraries, i18n libraries, or form libraries — the project intentionally uses none.
5. Do not introduce another animation library. Framer Motion is the only one used.

## Validation commands

After any code change, run in this order:

```bash
pnpm lint        # ESLint check — must pass with no errors
pnpm build       # Production build — must complete without errors
```

A task is not done if `pnpm build` or `pnpm lint` reports errors.

## Project structure — file responsibilities

```
app/
  layout.tsx          # Root layout: fonts, metadata (SEO), JSON-LD, Sanity fetch, providers
  page.tsx            # Page assembly — imports and orders all section components
  globals.css         # Tailwind directives + reusable CSS classes (.btn-primary, .card, …)
  sitemap.ts          # Auto-generated sitemap for Google
  robots.ts           # robots.txt — blocks /studio/, points to sitemap

components/
  Navbar.tsx          # Sticky nav, mobile hamburger, LanguageSwitcher
  Hero.tsx            # Hero split layout, floating badges, dual CTA
  About.tsx           # Teacher intro, stats, image
  Credentials.tsx     # 3-card qualification grid
  Lessons.tsx         # French + English two-column cards
  Trial.tsx           # Free trial highlight section
  Pricing.tsx         # Two pricing cards — prices overridden by Sanity if set
  Testimonials.tsx    # Reviews — Sanity data takes priority over constants fallback
  Personal.tsx        # Hobby tags, personal story, image collage
  Contact.tsx         # WhatsApp CTA + email + contact form
  Footer.tsx          # CTA band + nav links + copyright
  WhatsAppButton.tsx  # Floating sticky WhatsApp button (bottom-right)
  LanguageSwitcher.tsx # EN / FR / ES pill toggle
  FadeIn.tsx          # Shared Framer Motion scroll animation wrapper

lib/
  constants.ts        # Fallback content: TRANSLATIONS, PRICING, WHATSAPP_NUMBER, EMAIL
  LanguageContext.tsx  # React context — active language + t() translations
  SiteDataContext.tsx  # React context — exposes Sanity importantData to all components

sanity/schemaTypes/
  importantDataType.ts # Site config: email, WhatsApp, prices
  reviewType.ts        # Student reviews
  imageType.ts         # Named image documents
  longTextType.ts      # Long-form text blocks
```

## Strict rules

- Never hardcode colors outside Tailwind classes. The design system uses `primary-600` (#e51d1d) for red and `#25D366` for the WhatsApp button only.
- Never hardcode UI strings in components. All copy goes in `lib/constants.ts` → `TRANSLATIONS`.
- Never access Sanity data directly in a component. Use `useSiteData()` (from `SiteDataContext`) for site config, and `useEffect` + `client.fetch` for runtime data (see `Testimonials.tsx`).
- Never add a "most popular" badge or visual hierarchy to pricing cards — cards must stay visually equal.
- Every new section component must: (1) be added to `app/page.tsx`, (2) have an anchor link added to `navLinks` in `Navbar.tsx`, (3) include a WhatsApp CTA to maintain conversion funnel continuity.
- `FadeIn.tsx` is the only scroll animation wrapper. Use it instead of writing custom Framer Motion variants in components.

## When a task touches several files

Recommended order of changes:

1. `lib/constants.ts` — add new translation keys or fallback values
2. `lib/LanguageContext.tsx` or `lib/SiteDataContext.tsx` — if the data shape changes
3. `components/*.tsx` — component UI
4. `app/page.tsx` — integrate the new section
5. `components/Navbar.tsx` — add anchor link if needed

## SEO — critical files

The following files affect Google indexing directly. Edit with care:

- `app/layout.tsx` — `metadata` export (title, description, OG, canonical) + JSON-LD structured data
- `app/sitemap.ts` — update `lastModified` when content changes significantly
- `app/robots.ts` — do not accidentally block `/` or expose `/studio/`

After deploying SEO changes, submit the sitemap at **Google Search Console** → Sitemaps → `https://www.swanlessons.com/sitemap.xml`.

## Sanity CMS

Studio is at `/studio`. The `importantData` document (identifier: `"site-info"`) is the single source of truth for prices, WhatsApp number, and contact email. Editing it takes effect within 60 seconds (revalidation interval) without redeployment.

To add a new Sanity document type:
1. Create `sanity/schemaTypes/myType.ts`
2. Register it in `sanity/schemaTypes/index.ts`
3. Add it to `sanity/structure.ts`

## Git workflow — absolute rules

- Never push directly to `main`. Always create a branch (`feat/…`, `fix/…`, `docs/…`, `seo/…`) and open a PR.
- Never use `git push --force` without explicit confirmation from the user.
- Before creating a PR, verify the current branch is not `main`: `git branch --show-current`.
- Never run `git push` or create a PR unless the user explicitly asks. All work stays local until told otherwise.

## Environment variables

Do not read `.env.local` directly. To know which variables are expected, read `.env.example` if present, or check `sanity/env.ts`.

Every new environment variable must be documented in `README.md`.

## Never do without asking for confirmation

- Change the `metadataBase` URL in `layout.tsx` — it affects all canonical and OG URLs site-wide.
- Change the WhatsApp link format — it directly impacts conversion tracking.
- Remove or rename a Sanity schema field that is already in use — it can break the live site silently.
- Change `next.config.mjs` image domains — it can block all images from loading.
