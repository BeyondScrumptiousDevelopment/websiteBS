const BASE_URL = 'https://www.beyondscrumptious.com'

export default function ServiceJsonLd({
  name,
  description,
  path,
}: {
  name: string
  description: string
  path: string
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: name,
    name,
    description,
    url: `${BASE_URL}${path}`,
    areaServed: {
      '@type': 'Place',
      name: 'Harrow, London',
    },
    provider: {
      '@type': 'LocalBusiness',
      name: 'Beyond Scrumptious',
      url: BASE_URL,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
