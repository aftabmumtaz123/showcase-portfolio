# DevStak Project Showcase

A responsive Next.js App Router portfolio for 10 projects, with searchable project cards and individual case-study pages.

## Included
- 10 project entries with repository links and supplied live-demo URLs
- Search, category filters and live-status filters
- Individual `/projects/[slug]` case-study pages
- Project overview, challenge, approach, key features, technology tags and project links
- Screenshot galleries for Convertly, AI Note Taker, POST Scheduler, QR Studio/LumaLink, Roman2Urdu and Calculyt
- Responsive dark UI with the DevStak purple accent

## Run locally
Requires Node.js 18.18+ (Node.js 20+ recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customize content
Edit `lib/projects.ts`. Each project contains its case-study copy and a `screenshots` array. Add image files under `public/projects/` and reference them with paths such as `/projects/example.png`.

## Deploy
Import the project into Vercel and use the default Next.js build settings.

## Content notes
- Repository URLs are preserved as supplied, including `covertly-web` for Convertly.
- Only supplied live URLs are shown as live demos.
- Video Downloader is marked `Demo link unavailable` because no live URL or explicit not-live status was supplied.
- Case-study copy is based on supplied project names, links and screenshots. Where screenshots or repository-level implementation details were not supplied, the page clearly indicates that more project evidence can be added.
- No performance metrics or unverified business outcomes are claimed.


Case study pages use the first supplied project screenshot as the lead visual and display the full screenshot gallery below the project details. SearchNow includes its supplied overview and repository-insights screenshots.
