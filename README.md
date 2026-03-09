# DocNear — Find Trusted Doctors Near You

> India's healthcare platform connecting patients with verified doctors nearby.
> Book appointments, get digital prescriptions, manage health — all in one place.

![DocNear](https://img.shields.io/badge/DocNear-Healthcare-0d9488?style=flat-square)
![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)

---

## Tech Stack

| Layer      | Technology                 |
| ---------- | -------------------------- |
| Framework  | Next.js 16 (App Router)    |
| Language   | TypeScript 5 (strict mode) |
| Styling    | Tailwind CSS v4            |
| Components | shadcn/ui (new-york style) |
| Icons      | lucide-react               |
| Fonts      | Inter (Google Fonts)       |
| Deployment | Vercel                     |

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/your-org/docnear-landing.git
cd docnear-landing

# Install dependencies
pnpm install

# Start dev server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
docnear-website/
├── app/
│   ├── layout.tsx          # Root layout + JSON-LD schemas + SEO metadata
│   ├── page.tsx            # Homepage — section assembly
│   ├── globals.css         # Tailwind v4 + shadcn CSS variables
│   ├── sitemap.ts          # Auto XML sitemap
│   └── robots.ts           # robots.txt
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky, scroll-aware, mobile-responsive
│   │   └── Footer.tsx      # Multi-column footer
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── WaitlistBanner.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── ForDoctors.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Pricing.tsx
│   │   ├── Faq.tsx
│   │   └── Cta.tsx
│   ├── seo/
│   │   └── JsonLd.tsx
│   └── ui/
│       ├── DocNearLogo.tsx
│       ├── SectionHeading.tsx
│       ├── SectionBadge.tsx
│       └── StarRating.tsx
├── constants/
│   └── site.ts             # SITE_URL, SITE_NAME, emails, URLs
├── data/                   # All static content as typed arrays
│   ├── features.ts
│   ├── steps.ts
│   ├── testimonials.ts
│   ├── pricing.ts
│   ├── faqs.ts
│   ├── stats.ts
│   ├── navigation.ts
│   └── footer-links.ts
├── lib/
│   ├── seo.ts              # Next.js Metadata config
│   ├── structured-data.ts  # JSON-LD schemas
│   └── utils.ts            # cn() utility
└── types/
    └── index.ts            # Shared TypeScript interfaces
```

---

## Available Scripts

```bash
pnpm dev          # Start development server (Turbopack)
pnpm build        # Production build
pnpm start        # Start production server
pnpm lint         # Run ESLint on all files
pnpm lint:fix     # Run ESLint with auto-fix
pnpm format       # Prettier format all files
pnpm format:check # Check formatting without writing
pnpm type-check   # TypeScript check (no emit)
```

---

## Environment Variables

```bash
# .env.local — create this file, never commit it
NEXT_PUBLIC_SITE_URL=https://docnear.in
NEXT_PUBLIC_APP_URL=https://app.docnear.in
RESEND_API_KEY=your_resend_api_key   # for waitlist emails
```

---

## Branching Convention

```
main
 └── develop
      ├── feature/section-name
      ├── fix/issue-description
      ├── chore/task-description
      └── hotfix/critical-fix
```

### Branch Rules

| Branch      | Purpose                                            | Merges Into        |
| ----------- | -------------------------------------------------- | ------------------ |
| `main`      | Production — always deployable                     | —                  |
| `develop`   | Integration branch — all features merge here first | `main`             |
| `feature/*` | New sections, components, pages                    | `develop`          |
| `fix/*`     | Bug fixes, console errors, UI glitches             | `develop`          |
| `chore/*`   | Config, deps, tooling, README                      | `develop`          |
| `hotfix/*`  | Critical production fixes only                     | `main` + `develop` |

### Branch Name Examples

```bash
feature/blog-section
feature/doctor-search-page
fix/faq-hydration-error
fix/navbar-logo-color
chore/add-pre-commit-hooks
chore/update-dependencies
hotfix/broken-booking-link
```

---

## Commit Convention

Follows [Conventional Commits](https://www.conventionalcommits.org/) — enforced by commitlint.

### Format

```
<type>(<scope>): <subject>
```

- **type** — what kind of change
- **scope** — what area (optional but recommended)
- **subject** — short description, lowercase, no period at end

### Types

| Type       | Use When                                           |
| ---------- | -------------------------------------------------- |
| `feat`     | New component, section, page, or feature           |
| `fix`      | Bug fix — errors, broken UI, wrong behavior        |
| `style`    | Tailwind tweaks, spacing, colors — no logic change |
| `refactor` | Code restructure without behavior change           |
| `perf`     | Performance improvement                            |
| `docs`     | README, comments only                              |
| `chore`    | Config, deps, tooling, husky                       |
| `build`    | package.json, next.config.ts, tsconfig             |
| `ci`       | GitHub Actions, Vercel config                      |
| `revert`   | Reverting a previous commit                        |

### Examples

```bash
feat(hero): add animated live-city pill badge
feat(pricing): add 3-tier pricing section with highlighted pro card
fix(footer): resolve duplicate key error on platform links
fix(faq): suppress hydration mismatch from browser extensions
style(navbar): fix logo color on transparent hero background
refactor(footer): extract link data to data/footer-links.ts
chore(husky): add pre-commit lint and type-check hooks
chore(commitlint): add conventional commits config
docs(readme): add branching and commit conventions
build(deps): upgrade lucide-react to 0.577.0
```

---

## Pre-commit Hooks

Managed by **Husky** + **lint-staged** + **commitlint**.

| Hook         | Runs                                                    |
| ------------ | ------------------------------------------------------- |
| `pre-commit` | ESLint fix + Prettier on staged files, TypeScript check |
| `commit-msg` | commitlint — validates commit message format            |
| `pre-push`   | Full lint + type-check + build                          |

---

## SEO

| Feature      | Implementation                                             |
| ------------ | ---------------------------------------------------------- |
| Metadata     | `lib/seo.ts` → Next.js `Metadata` API                      |
| Open Graph   | og:title, og:description, og:image                         |
| Twitter Card | summary_large_image                                        |
| JSON-LD      | MedicalOrganization, WebSite, SoftwareApplication, FAQPage |
| Sitemap      | Auto-generated at `/sitemap.xml`                           |
| Robots       | Auto-generated at `/robots.txt`                            |
| Canonical    | Set per-page via `alternates.canonical`                    |

---

## Deployment

Deployed on **Vercel** — zero config required.

```bash
# Production deploy (auto via GitHub push to main)
git push origin main

# Manual deploy via Vercel CLI
pnpm dlx vercel --prod
```

---

## License

Private — © 2026 DocNear. All rights reserved.
