# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
node_modules/.bin/next dev -p 3005   # dev server (vaste poort voor dit project)
npm run build                         # production build
npm run lint                          # ESLint
```

No test suite is configured.

## Architecture

Next.js 14 App Router website for We Grow Brands (webdesign agency). Dutch-only (`nl`) with next-intl wired up for future multilingual support.

### Routing

All public pages live under `src/app/[locale]/`. The middleware (`src/middleware.ts`) uses next-intl with `localePrefix: 'as-needed'`, so the default locale (`nl`) has no URL prefix — `/portfolio/bleijenberg` not `/nl/portfolio/bleijenberg`.

Routes outside the i18n system (no locale wrapper, no middleware):
- `src/app/offerte/` — client-facing quote viewer, Supabase-backed
- `src/app/factuur/` — invoice pages (static HTML per invoice)
- `src/app/api/` — API routes for offerte create/send/verify

### Navigation

Always use `{ Link, redirect, usePathname, useRouter }` from `@/i18n/routing`, NOT from `next/link` or `next/navigation`, for all pages inside `[locale]`. For parameterized routes use the typed object form:

```tsx
// Correct
<Link href={{ pathname: '/portfolio/[slug]', params: { slug: 'bleijenberg' } }} />

// Wrong — bypasses i18n typing and can break in production
<Link href={`/portfolio/${slug}` as any} />
```

### Translations

All UI strings for `[locale]` pages live in `messages/nl.json` (and `en.json` as shadow). Access via `useTranslations('sectionName')` in client components or `getTranslations('sectionName')` in server components. Keys map 1:1 to the top-level keys in the JSON file.

### Styling

Custom Tailwind colors: `green-dark`, `lila`, `lila-light`, `cream`, `cream-dark`, `text-dark`, `text-muted`, `text-light`.

Custom CSS utility classes (defined in `globals.css`, not Tailwind):
- **Buttons:** `btn-spring btn-uniform` — use together. Add `btn-no-lila` to suppress lila hover. Add `link-wave` for the wave hover animation.
- **Links:** `link-light` / `link-dark` for colored links, `link-wave` for wave hover.
- **Text:** `serif-header` for large display headings, `highlight-title` for lila underline accent.
- **Wavy SVG animations:** `animate-wavy-line` / `animate-wavy-line-delay` / `animate-wavy-line-down` for inline SVG paths.

### Animation components

- `WavyText` — wraps text for the letter-by-letter wave on hover. Wrap every button label with it when the button has `link-wave`.
- `WavyLineScroll` — draws an SVG line on scroll. Use `direction="up"` or `direction="down"`.
- `ScrollReveal` — fade/pull-in animations. Use `animation="fade-up"` or `animation="pull-in"`.
- `WavyLink` — anchor wrapper that applies wave effect to external links.

GSAP + ScrollTrigger is imported via `@gsap/react` in client components.

### Case studies (portfolio)

All case data is hardcoded in `src/app/[locale]/portfolio/[slug]/page.tsx` as a `caseStudies` array. To add a new case: add an entry to that array and add a `slug` to `generateStaticParams`. No CMS or database involved.

### Offerte system

Quotes are stored in Supabase. `src/lib/supabase.ts` exports two lazy clients:
- `getSupabase()` — anon key, for client-facing pages
- `getAdminClient()` — service role key, for API routes only

Offerte flow: create via `/api/offerte/create` → send PDF via `/api/offerte/send-email-resend` → client views at `/offerte/[slug]` → verifies identity at `/offerte/verify`.

### Known pitfalls

- **Never create backup folders with spaces in the name** (e.g., `[locale] 2`) inside `src/app/`. Next.js will try to build them as routes and crash the static paths worker.
- The `dist/` folder is gitignored. Do not commit build artifacts.
- Images use `unoptimized: true` in `next.config.js` — no `next/image` optimization pipeline.
- `trailingSlash: true` is set globally. All internal hrefs resolve to paths ending with `/`.

## Deployment

Deployed on Vercel from the `main` branch (auto-deploy on push). No manual trigger needed.

## Content guidelines

- **No em-dashes (—)** anywhere in copy, UI text, or comments. Use a comma, colon, or pipe instead.
- Prices: Essentials €999, Groei €1.450, Premium €2.650+.
