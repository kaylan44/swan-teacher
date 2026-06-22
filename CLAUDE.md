# Swan — French & English Teacher · Landing Page

> Next.js 14 (App Router) + Tailwind CSS + Framer Motion + Sanity CMS  
> Goal: maximize WhatsApp contact conversions for an online language teacher

---

## Quick Start

```bash
pnpm install
pnpm dev       # http://localhost:3000
pnpm build     # production build
pnpm lint      # ESLint check
```

Sanity Studio is accessible at **`/studio`** (embedded in the Next.js app).

---

## Project Structure

```
swan-teacher/
├── app/
│   ├── layout.tsx                    # Root layout — fonts, metadata, providers, Sanity fetch
│   ├── page.tsx                      # Page assembly (imports all section components)
│   ├── globals.css                   # Tailwind directives + custom utilities & animations
│   └── studio/[[...tool]]/page.tsx   # Embedded Sanity Studio route
│
├── components/
│   ├── Navbar.tsx          # Sticky nav, mobile hamburger, LanguageSwitcher
│   ├── Hero.tsx            # Hero split layout, floating badges, dual CTA
│   ├── About.tsx           # Teacher intro, stats, image
│   ├── Credentials.tsx     # 3-card qualification grid
│   ├── Lessons.tsx         # French + English two-column cards
│   ├── Trial.tsx           # Free trial highlight section
│   ├── Pricing.tsx         # Two pricing cards — prices overridden by Sanity if set
│   ├── Testimonials.tsx    # Reviews — Sanity data takes priority over constants fallback
│   ├── Personal.tsx        # Hobby tags, personal story, image collage
│   ├── Contact.tsx         # WhatsApp CTA + email + contact form
│   ├── Footer.tsx          # CTA band + nav links + copyright
│   ├── WhatsAppButton.tsx  # Floating sticky WhatsApp button (bottom-right)
│   ├── LanguageSwitcher.tsx # EN / FR / ES pill toggle
│   └── FadeIn.tsx          # Shared Framer Motion scroll animation wrapper
│
├── lib/
│   ├── constants.ts        # Fallback content: translations, pricing, WhatsApp link
│   ├── LanguageContext.tsx  # React context for active language + t() translations
│   └── SiteDataContext.tsx  # React context exposing Sanity importantData to all components
│
└── sanity/
    ├── env.ts              # projectId, dataset, apiVersion (from env vars)
    ├── structure.ts        # Studio sidebar structure
    ├── lib/
    │   ├── client.ts       # createClient (useCdn: true)
    │   ├── image.ts        # urlFor() image URL builder
    │   └── live.ts         # sanityFetch + SanityLive (live content API)
    └── schemaTypes/
        ├── index.ts            # Schema registry
        ├── blockContentType.ts # Portable Text block type
        ├── imageType.ts        # Named image documents (identifier + image + alt)
        ├── reviewType.ts       # Student reviews (reviewer + reviewText)
        ├── longTextType.ts     # Long-form text blocks (title + blockContent)
        └── importantDataType.ts # Site config: email, WhatsApp, prices
```

---

## Sanity CMS

### Studio
Embedded at `/studio`. Managed schemas:

| Document type | Fields | Used by |
|---|---|---|
| `importantData` | `identifier`, `contactEmail`, `whatsappNumber`, `price40`, `price60` | Layout fetch → `SiteDataContext` |
| `review` | `reviewer`, `reviewText` | `Testimonials.tsx` (runtime fetch) |
| `imageType` | `title`, `image` (with `alt`) | Available for future use |
| `longText` | `title`, `content` (blockContent) | Available for future use |

### Site config document (`importantData`)
Create one document with `identifier: "site-info"`. The layout fetches it at request time and injects it into `SiteDataContext`. Components read it via `useSiteData()`.

Fields override their `constants.ts` fallbacks:
- `whatsappNumber` → overrides `WHATSAPP_NUMBER`
- `price40` / `price60` → overrides `PRICING[].price`
- `contactEmail` → overrides `EMAIL`

### Reviews (`review`)
`Testimonials.tsx` fetches all `review` documents at runtime (client-side, via `useEffect`). If Sanity returns ≥ 1 review, the hardcoded `TESTIMONIALS` array is replaced entirely. If the fetch fails or returns empty, the fallback array is shown silently.

### Environment variables
Required in `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=...
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_STUDIO_SANITY_PROJECT_ID=...
SANITY_STUDIO_SANITY_DATASET=production
```

### Images from Sanity
`cdn.sanity.io` is whitelisted in `next.config.mjs`. Use `urlFor(source).url()` from `sanity/lib/image.ts` to build URLs.

---

## Key Configuration

### Fallback values (used when Sanity document is absent)
In `lib/constants.ts`:
```ts
export const WHATSAPP_NUMBER = "XXXXXXXXXXX";  // international format, no +
export const EMAIL = "swan@example.com";
export const PRICING = [
  { duration: "60 min", price: "40€", description: "Full lesson" },
  { duration: "40 min", price: "28€", description: "Focused session" },
];
```

These are fallbacks only. Prefer editing values in Sanity (`importantData` document) for live updates without redeployment.

---

## Internationalization (i18n)

The site supports **EN / FR / ES** with a custom React context (no i18n library).

- All strings live in `lib/constants.ts` → `TRANSLATIONS` object
- Active language is stored in `LanguageContext` (`useState`)
- Any component accesses translations via:
  ```ts
  const { t, lang } = useLanguage();
  ```
- `t` is the full typed translation object for the active language
- `lang` is the raw `"en" | "fr" | "es"` string (used for data arrays like `CREDENTIALS`, `TESTIMONIALS`)

**To add a new language:**
1. Add a new key to `TRANSLATIONS` in `lib/constants.ts` (copy the `en` block)
2. Add it to the `LANGS` array in `components/LanguageSwitcher.tsx`
3. Add it to the `Language` type in `lib/constants.ts`

---

## Design System

### Colors
- **Primary**: red (`primary-600` = `#e51d1d`) — buttons, tags, accents
- **Background**: white + `cream` (`#fdfaf7`) for hero/sections
- **Neutral grays**: text hierarchy
- **WhatsApp green**: `#25D366` (floating button only)

### Typography
- **Display / headings**: Playfair Display (`font-display`) — loaded via `next/font/google`
- **Body / UI**: DM Sans (`font-sans`) — loaded via `next/font/google`

### Reusable CSS classes (defined in `globals.css`)
| Class | Usage |
|---|---|
| `.btn-primary` | Red filled CTA button, rounded-full |
| `.btn-secondary` | White outlined button |
| `.card` | White card with border + hover shadow |
| `.section-tag` | Small red pill label above section titles |
| `.section-pad` | Consistent vertical section padding (`py-20 md:py-28`) |
| `.container-pad` | Horizontal padding (`px-4 sm:px-6 lg:px-8`) |

---

## Animations

Framer Motion is used **lightly**:

- **`FadeIn.tsx`**: reusable scroll-triggered wrapper (direction: `up` / `left` / `right` / `none`)
  ```tsx
  <FadeIn delay={0.1} direction="left">
    <YourComponent />
  </FadeIn>
  ```
- **Hero**: staggered entrance animations on mount
- **Hero image badges**: infinite floating `y` animation
- **WhatsApp button**: spring entrance + AnimatePresence tooltip
- **CSS**: `whatsapp-pulse` keyframe animation (green glow ring)

---

## Conversion Strategy

Every section has a WhatsApp CTA. The funnel is:

```
Hero (dual CTA) → About → Trial (highlight) → Pricing → Contact → Footer band
                                                         ↑
                                          Floating button always visible
```

WhatsApp link format:
```
https://wa.me/XXXXXXXXXXX?text=Hi%20Swan!%20I'd%20love%20to%20book%20a%20free%20trial%20lesson.%20%F0%9F%98%8A
```

---

## Content Principles

- **Tone**: fun, warm, human — not corporate
- **Beginners**: explicitly welcomed in Lessons section (both French and English cards)
- **No ranking**: pricing cards are visually equal (no "most popular" badge)
- UI copy lives in `lib/constants.ts` — no hardcoded strings in components
- Dynamic content (prices, contact info, reviews) lives in Sanity

---

## Images

All images use `next/image` with:
- `fill` + `sizes` for responsive loading
- `priority` on the Hero image
- Sources: Unsplash (`images.unsplash.com`) and Sanity CDN (`cdn.sanity.io`) — both whitelisted in `next.config.mjs`

**To use real photos of Swan**, replace the Unsplash URLs in:
- `components/Hero.tsx` — teacher portrait
- `components/About.tsx` — second portrait
- `components/Personal.tsx` — lifestyle photos

Place local images in `/public/` and reference as `/your-image.jpg`, or upload to Sanity and use `urlFor()`.

---

## SEO

Metadata is defined in `app/layout.tsx`:
```ts
export const metadata: Metadata = {
  title: "Swan — French & English Teacher | Online Lessons",
  description: "...",
  keywords: [...],
  openGraph: { ... },
};
```

---

## Dependencies

| Package | Version | Purpose |
|---|---|---|
| `next` | 14.2.5 | Framework (App Router) |
| `react` / `react-dom` | ^18 | UI library |
| `framer-motion` | ^11.3.0 | Animations |
| `tailwindcss` | ^3.4.1 | Styling |
| `typescript` | ^5 | Type safety |
| `sanity` | — | CMS + Studio |
| `next-sanity` | — | Next.js integration (client, live, studio) |
| `@sanity/image-url` | — | Image URL builder |

No UI component libraries. No i18n libraries. No form libraries.

---

## Common Tasks

**Change a price (without redeployment):**
→ Edit the `importantData` document in Sanity Studio (`/studio`) — `price40` / `price60` fields

**Change a price (in code fallback):**
→ Edit `PRICING` array in `lib/constants.ts`

**Edit copy for one language only:**
→ Edit the relevant key inside `TRANSLATIONS.en` / `TRANSLATIONS.fr` / `TRANSLATIONS.es` in `lib/constants.ts`

**Add/edit a testimonial:**
→ Create or edit a `review` document in Sanity Studio — no code change needed

**Add a testimonial (fallback only):**
→ Add an object to the `TESTIMONIALS` array in `lib/constants.ts` (include `en`, `fr`, `es` text fields)

**Add a new Sanity document type:**
1. Create `sanity/schemaTypes/myType.ts`
2. Register it in `sanity/schemaTypes/index.ts`
3. Add it to `sanity/structure.ts` for Studio sidebar

**Add a new section:**
1. Create `components/NewSection.tsx`
2. Import and add it to `app/page.tsx`
3. Add anchor link to `navLinks` in `components/Navbar.tsx`
