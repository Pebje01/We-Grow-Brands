# We Grow Brands - Project Guidelines

## Project Overview
Next.js 14 website for We Grow Brands, a web design agency. Dutch language site with premium design focus.

## Tech Stack
- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Animations**: GSAP + ScrollTrigger, CSS animations
- **Language**: TypeScript
- **Components**: React functional components with hooks

## Key Directories
- `src/app/` - Pages (Next.js App Router)
- `src/components/` - Reusable components
- `src/app/globals.css` - Global styles and animations
- `public/` - Static assets (images, logos, mock-ups)

## Important Components
- `WavyLineScroll` - Animated SVG line that draws on scroll
- `WavyText` - Text with wavy hover animation
- `WavyUnderline` - Animated underline effect
- `ScrollReveal` - Fade-in animations on scroll

## SVG Line Animations
- Desktop lines use `WavyLineScroll` component with `direction="up"` or `direction="down"`
- Mobile lines use inline SVG with CSS class `animate-wavy-line` or `animate-wavy-line-delay`
- Lines should feel organic and hand-drawn, not mechanical
- Mobile lines often need different paths than desktop

## Styling Conventions
- Colors defined in Tailwind config: `green-dark`, `lila`, `cream`, `text-dark`, `text-muted`
- Rounded corners: `rounded-[20px] md:rounded-[30px]` for sections
- Buttons use `btn-spring`, `btn-uniform`, `link-wave` classes
- Dark sections: `bg-[#1a1a1a]`

## Packages/Pricing
- Essentials: €999 (tot 3 pagina's)
- Groei: €1.450 (tot 8 pagina's) - most popular
- Premium: €2.650 (vanaf, maatwerk)

## Common Patterns
- Mobile-first responsive design
- Section padding: `py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8`
- Max width containers: `max-w-6xl 2xl:max-w-[1600px] mx-auto`
- Dark sections have `z-index` layering for decorative elements

## Git Workflow
- Main branch: `main`
- Commit messages in English
- Include `Co-Authored-By: Claude` for AI-assisted commits
