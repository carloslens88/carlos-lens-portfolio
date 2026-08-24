# Carlos Lens — Portfolio

Bilingual (EN/ES) portfolio built with Next.js (App Router, static export),
TypeScript, Tailwind CSS v4 and Framer Motion. No backend, no database —
fully static, deployable for €0.

## Stack

- Next.js `output: "export"` — the whole site is prerendered to static HTML
- `app/[locale]/` routing with hand-rolled dictionaries (`lib/i18n/en.ts` / `es.ts`)
- Curated project data in `lib/data/`; the "More on GitHub" grid on the
  Projects section fetches your public repos live from the GitHub API in
  the browser — **any new repo with a fork:false status and a description
  shows up automatically, no redeploy needed**
- Content — experience, projects, skills — lives in `lib/data/*.ts`, not
  scattered across components

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000 — it redirects to `/en/` or `/es/` based on
browser language.

## Build

```bash
npm run build
```

Outputs static files to `out/`.

## Deploy — Cloudflare Pages (recommended, €0)

Same recipe as `portfolio-jhenimar`: Workers static assets via Wrangler.

```bash
npm run build
npx wrangler pages deploy out --project-name=carlos-lens-portfolio
```

Or connect the GitHub repo in the Cloudflare dashboard for automatic
deploys on push — build command `npm run build`, output directory `out`.

## Deploy — Vercel (also €0)

Import the repo at vercel.com — zero config needed, it detects Next.js
automatically. (`output: "export"` still works there; Vercel just serves
the static files.)

## Before going live

- [ ] `lib/data/site.ts` — set the real domain in `url` and a real contact
      `email`
- [ ] Point your domain's DNS at whichever host you pick
- [ ] Swap `app/icon.tsx` / `app/[locale]/opengraph-image.tsx` for a real
      photo-based OG image if you want one — the generated ones are a
      placeholder that already works, no image asset required
