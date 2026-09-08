# The Craft Box Porthcawl — Website

Marketing website for The Craft Box Porthcawl, a creative hub in Porthcawl showcasing handmade
crafts and artwork from local resident artists. Rebuilt off Wix per the accepted website quote —
same content and pages, moved to a site Vanguard Digital Solutions builds and hosts, with the
proposal's fixes (working nav on every page, brand colours, working CTA, contact info, no
duplicate logos / blank layout gaps) applied.

## Tech Stack
- **Vue 3 + TypeScript** scaffolded with **Vite**
- **Vue Router 4** — client-side routing with per-route SEO meta
- **vite-ssg** — prerenders every route to static HTML at build time (SSG)
- **@unhead/vue** — dynamic `<head>` management (title, meta description, Open Graph, JSON-LD)
- **Tailwind CSS v4** — utility-first styling
- **No backend** — static site; no contact form in this first pass

## Pages
```
Home              — Hero, mission, CTA
Events            — Empty state until events are added
Meet the Artists  — Resident artist directory (see note below)
About Us          — The Craft Box's story
404               — Not-found page
```

## Content note: Meet the Artists

The live Wix site's artist directory has broken/misaligned data — several artists have no bio
(still showing Wix's placeholder text) and some have no photo uploaded. Those artists are omitted
from `src/data/artists.ts` rather than replicated with placeholder content — getting real bios
and photos from Mason for those artists is a follow-up, not done here.

## SEO
- Per-route title/description/OG via `useSeoMeta` (`src/composables/useSeoMeta.ts`)
- Site-wide JSON-LD (`Store`/`ArtGallery`/`LocalBusiness`) in `src/seo/siteSchema.ts`
- Sitemap generated at build time from the prerendered output (`scripts/generate-sitemap.mjs`)
- `robots.txt` with an explicit AI-crawler allow-list, `llms.txt`
- Single H1 per page, semantic landmarks, skip link

## Development

```bash
npm install
npm run dev       # Start dev server
npm run build     # Production build (type-check + SSG + sitemap)
npm run preview   # Preview production build
```

## Branching

`main` is protected — no direct pushes. All changes go through a pull request.
