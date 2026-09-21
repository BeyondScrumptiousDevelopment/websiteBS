import {createImageUrlBuilder} from '@sanity/image-url'
import {client} from './client'

const builder = createImageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

export function altTextFor(item: { caption?: string; category?: string }) {
  if (item.caption) return item.caption
  if (item.category) {
    const readable = item.category
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase())
    return `Beyond Scrumptious — ${readable}`
  }
  return 'Beyond Scrumptious — Harrow, London'
}