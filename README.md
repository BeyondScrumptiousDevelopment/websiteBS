# Beyond Scrumptious Website

## Quick Start

1. Install Node.js:
https://nodejs.org

2. Open terminal in this folder

3. Run:

```bash
npm install
npm run dev
```

4. Open:
http://localhost:3000

## Managing the Gallery

Photos are managed through Sanity Studio, no developer needed:

```bash
npm run dev
```

Then open http://localhost:3000/studio (or the deployed `/studio` route) to
add, replace, delete, caption, tag, reorder and feature gallery images.

## Enquiry Form

The contact form at `/contact` submits to Formspree
(`https://formspree.io/f/mrpbpyzd`). Enquiries are emailed to whichever
address is configured on that Formspree form — manage recipients and
spam settings from the Formspree dashboard.

## Hidden Link-in-Bio Page

`/links` is a simple, mobile-first "link in bio" page for social media —
it's marked `noindex` and isn't linked from the site navigation, so it's
only reachable if you share the direct URL.

## Deploying to Cloudflare

This site deploys to Cloudflare Workers using
[OpenNext for Cloudflare](https://opennext.js.org/cloudflare).

1. Install the Cloudflare CLI auth (one-time): `npx wrangler login`
2. Build and deploy:

```bash
npm run cf:deploy
```

This runs `opennextjs-cloudflare build` (adapts the Next.js build for
Cloudflare Workers) followed by `opennextjs-cloudflare deploy` (publishes
via Wrangler). To preview a production build locally first, run
`npm run cf:preview` instead.

Configuration lives in `wrangler.jsonc` and `open-next.config.ts`.

### A note on `/studio`

Sanity Studio is bundled into this Next.js app at `/studio`, which is
convenient but adds significant weight to the deployed Worker. If you hit
Cloudflare's Worker size limits, the standard fix is to deploy Studio
separately with `npx sanity deploy` (hosted free at
`beyond-scrumptious.sanity.studio` or similar) and remove the `/studio`
route from this app — the gallery data lives in Sanity either way, so
nothing else needs to change.

## Deploy

Push to GitHub. Either connect the repo to Cloudflare Pages/Workers for
git-based deploys, or run `npm run cf:deploy` from CI/locally.
