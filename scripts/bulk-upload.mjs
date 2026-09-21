#!/usr/bin/env node
/**
 * Bulk-upload gallery photos to Sanity.
 *
 * Usage:
 *   SANITY_API_TOKEN=sk_your_token node scripts/bulk-upload.mjs ./my-photos
 *
 * Folder structure — one subfolder per category, named exactly one of:
 *   cakes, cupcakes, desserts, dessert-tables, live-desserts, events
 *
 *   my-photos/
 *     cakes/birthday-cake-1.jpg
 *     cakes/wedding-cake.jpg
 *     live-desserts/pancake-station.jpg
 *
 * Each image becomes one gallery document (same as adding it by hand in
 * Studio): captioned from its filename, tagged with its folder's category,
 * not featured, no explicit order (sorts by upload date until you set one).
 *
 * Get a token at https://www.sanity.io/manage — open the project, API ->
 * Tokens -> Add API token, permission "Editor". Treat it like a password:
 * don't commit it, don't share it, and revoke it from the same page when
 * you're done with a one-off import.
 */

import { createClient } from '@sanity/client'
import fs from 'node:fs'
import path from 'node:path'

const ALLOWED_CATEGORIES = [
  'cakes',
  'cupcakes',
  'desserts',
  'dessert-tables',
  'live-desserts',
  'events',
]

const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.gif'])

function fail(message) {
  console.error(`\nError: ${message}\n`)
  process.exit(1)
}

const folderArg = process.argv[2]
if (!folderArg) {
  fail('Usage: node scripts/bulk-upload.mjs <folder>')
}

const rootDir = path.resolve(folderArg)
if (!fs.existsSync(rootDir) || !fs.statSync(rootDir).isDirectory()) {
  fail(`"${rootDir}" is not a folder.`)
}

const token = process.env.SANITY_API_TOKEN
if (!token) {
  fail(
    'Set SANITY_API_TOKEN first, e.g.\n  SANITY_API_TOKEN=sk_xxx node scripts/bulk-upload.mjs ' +
      folderArg
  )
}

const client = createClient({
  projectId: '8mwfu81d',
  dataset: 'production',
  apiVersion: '2025-01-01',
  token,
  useCdn: false,
})

function captionFromFilename(filename) {
  const base = path.basename(filename, path.extname(filename))
  return base
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

async function run() {
  const categoryFolders = fs
    .readdirSync(rootDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())

  if (categoryFolders.length === 0) {
    fail(
      `No subfolders found in "${rootDir}". Create one subfolder per category ` +
        `(${ALLOWED_CATEGORIES.join(', ')}) and put images inside those.`
    )
  }

  let uploaded = 0
  let skipped = 0
  let failed = 0

  for (const folder of categoryFolders) {
    const category = folder.name
    if (!ALLOWED_CATEGORIES.includes(category)) {
      console.warn(
        `Skipping folder "${category}" — not a recognised category (expected one of: ${ALLOWED_CATEGORIES.join(', ')})`
      )
      continue
    }

    const categoryDir = path.join(rootDir, folder.name)
    const files = fs
      .readdirSync(categoryDir)
      .filter((f) => IMAGE_EXTENSIONS.has(path.extname(f).toLowerCase()))

    console.log(`\n${category}: ${files.length} image(s)`)

    for (const file of files) {
      const filePath = path.join(categoryDir, file)
      try {
        const asset = await client.assets.upload(
          'image',
          fs.createReadStream(filePath),
          { filename: file }
        )

        await client.create({
          _type: 'product',
          category,
          caption: captionFromFilename(file),
          featured: false,
          image: {
            _type: 'image',
            asset: { _type: 'reference', _ref: asset._id },
          },
        })

        uploaded += 1
        console.log(`  uploaded: ${file}`)
      } catch (err) {
        failed += 1
        console.error(`  FAILED: ${file} — ${err.message}`)
      }
    }
  }

  console.log(`\nDone. Uploaded ${uploaded}, failed ${failed}.`)
  if (failed > 0) process.exitCode = 1
}

process.on('unhandledRejection', (err) => {
  console.error(`\nNetwork error: ${err.message || err}`)
  process.exit(1)
})
process.on('uncaughtException', (err) => {
  console.error(`\nNetwork error: ${err.message || err}`)
  process.exit(1)
})

run()
