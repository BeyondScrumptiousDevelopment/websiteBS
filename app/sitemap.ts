import type { MetadataRoute } from 'next'

const routes = [
  '',
  '/cakes',
  '/desserts',
  '/live-desserts',
  '/gallery',
  '/our-story',
  '/faq',
  '/contact',
  '/allergen-information',
  '/delivery-collection',
  '/terms',
  '/privacy-policy',
  '/cookie-policy',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.beyondscrumptious.com'

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }))
}
