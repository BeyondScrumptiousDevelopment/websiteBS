import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import Analytics from '../components/Analytics'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
})

const description =
  'Handcrafted eggless cakes, desserts, dessert tables and live dessert experiences in Harrow, London.'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.beyondscrumptious.com'),
  title: {
    default: 'Beyond Scrumptious',
    template: '%s',
  },
  description,
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.beyondscrumptious.com',
    siteName: 'Beyond Scrumptious',
    title: 'Beyond Scrumptious',
    description,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Beyond Scrumptious',
    description,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Beyond Scrumptious',
  description,
  url: 'https://www.beyondscrumptious.com',
  telephone: '+447933903000',
  email: 'hello@beyondscrumptious.com',
  areaServed: 'Harrow, London',
  sameAs: [
    'https://instagram.com/beyond.scrumptious',
    'https://www.tiktok.com/@beyondscrumptious',
    'https://www.facebook.com/profile.php?id=61578473547436',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={playfair.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}