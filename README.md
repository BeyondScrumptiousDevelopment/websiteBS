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

Photos are managed through Sanity Studio, run separately from this app
(see below). Once running, use it to add, replace, delete, caption, tag,
reorder and feature gallery images — changes show up on `/gallery` and the
homepage right away.

## Bulk Uploading Photos

Adding photos one at a time in Studio is fine for a handful, but for a big
batch use `scripts/bulk-upload.mjs`:

```bash
SANITY_API_TOKEN=sk_your_token node scripts/bulk-upload.mjs ./my-photos
```

Organise the folder with one subfolder per category first:

```
my-photos/
  cakes/birthday-cake-1.jpg
  cakes/wedding-cake.jpg
  live-desserts/pancake-station.jpg
```

Subfolder names must be one of: `cakes`, `cupcakes`, `desserts`,
`dessert-tables`, `live-desserts`, `events`. Each image becomes a gallery
entry captioned from its filename — check them over in Studio afterwards
and tweak captions/featured/order as needed.

Get a token at sanity.io/manage → your project → API → Tokens → Add API
token (permission: Editor). Treat it like a password — don't commit it,
and revoke it from the same page once you're done with a one-off import.

## Sanity Studio

Studio isn't bundled into this Next.js app (that used to cause build/size
issues on Cloudflare) — it runs and deploys independently via the Sanity
CLI, using the `sanity.config.ts` at the repo root:

```bash
npx sanity dev      # local studio at http://localhost:3333
npx sanity deploy   # publishes a hosted studio at <project>.sanity.studio
```

The gallery data itself lives in Sanity's cloud either way, so this
doesn't change anything about how the website reads it.

## Enquiry Form

The contact form at `/contact` submits to Formspree
(`https://formspree.io/f/mrpbpyzd`). Enquiries are emailed to whichever
address is configured on that Formspree form — manage recipients and
spam settings from the Formspree dashboard.

## Hidden Link-in-Bio Page

`/links` is a simple, mobile-first "link in bio" page for social media —
it's marked `noindex` and isn't linked from the site navigation, so it's
only reachable if you share the direct URL.

## Deploying to Cloudflare Pages

This site deploys to classic Cloudflare Pages using
[`@cloudflare/next-on-pages`](https://github.com/cloudflare/next-on-pages).

**Cloudflare dashboard → Pages → Create → Import a repository**, with:

| Field | Value |
|---|---|
| Framework preset | None (leave as-is, or "Next.js" if offered) |
| Build command | `npx @cloudflare/next-on-pages@1` |
| Build output directory | `.vercel/output/static` |
| Root directory | `/` |
| Environment variables | None required |

Also set the **`nodejs_compat`** compatibility flag for both Production and
Preview under the Pages project's **Settings → Functions → Compatibility
Flags** (Sanity's client and Next's runtime need it). A `wrangler.toml` in
this repo declares the same flag for local/CLI use.

To build and deploy from the command line instead:

```bash
npx wrangler login   # one-time
npm run cf:deploy
```

`npm run cf:preview` builds and serves the Pages output locally first.

### Note on `next` and `next-sanity` versions

`@cloudflare/next-on-pages` is Cloudflare's original Pages adapter; it caps
out at Next.js 15.5.x (Cloudflare now steers newer Next apps toward Workers
+ OpenNext instead, which this repo doesn't use). `next` is pinned to a
patched 15.5.x release and `next-sanity` to a matching 11.x release for
that reason — don't bump either past what their peer ranges allow without
re-testing `npm run pages:build`.

## Deploy

Push to GitHub, then either connect the repo to Cloudflare Pages for
git-based deploys (above), or run `npm run cf:deploy` from CI/locally.
