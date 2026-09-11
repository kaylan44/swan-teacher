# Swan — French & English Teacher · Landing Page

Site vitrine pour Swan, professeure certifiée de français et d'anglais en ligne.  
Objectif : maximiser les prises de contact via WhatsApp.

---

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** — design system custom (couleur principale `#e51d1d`)
- **Framer Motion** — animations légères au scroll
- **Sanity CMS** — Studio embarqué à `/studio` pour gérer les prix, avis et photos
- **Vercel** — hébergement + Analytics

---

## Démarrage

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # build de production
pnpm lint       # ESLint
```

Variables d'environnement requises dans `.env.local` :

```
NEXT_PUBLIC_SANITY_PROJECT_ID=...
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_STUDIO_SANITY_PROJECT_ID=...
SANITY_STUDIO_SANITY_DATASET=production
```

---

## Internationalisation

Le site est disponible en **FR / EN / ES** via un contexte React custom (sans librairie i18n).  
Toutes les traductions sont centralisées dans `lib/constants.ts` → objet `TRANSLATIONS`.

---

## Contenu dynamique (Sanity)

Le Studio Sanity est accessible à `/studio`. Les données modifiables sans redéploiement :

| Document | Champs | Composant |
|---|---|---|
| `importantData` (`site-info`) | email, WhatsApp, `price40`, `price60` | Layout → `SiteDataContext` |
| `review` | auteur, texte (EN/FR/ES) | `Testimonials.tsx` |
| `imageType` | titre, photo | `About.tsx`, `Personal.tsx` |
| `longText` | titre, contenu (Portable Text) | `About.tsx` |

> Les prix se modifient directement dans le Studio — le site se met à jour en moins de 60 secondes grâce à l'ISR (revalidation toutes les 60 s).

---

## Structure

```
app/
  layout.tsx          # Providers, fetch Sanity, Analytics
  page.tsx            # Assemblage des sections
components/
  Navbar / Hero / About / Credentials / Lessons / Trial
  Pricing / Testimonials / Personal / Contact / Footer
  WhatsAppButton / LanguageSwitcher / FadeIn
lib/
  constants.ts        # Traductions + données de fallback
  LanguageContext.tsx
  SiteDataContext.tsx
sanity/
  schemaTypes/        # importantData, review, imageType, longText
```
