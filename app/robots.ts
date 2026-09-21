import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/links', '/studio'],
    },
    sitemap: 'https://www.beyondscrumptious.com/sitemap.xml',
  }
}
