import './globals.css'
import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import Analytics from '../components/Analytics'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-heading',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.beyondscrumptious.com'),
  title: {
    default: 'Beyond Scrumptious',
    template: '%s',
  },
  description:
    'Handcrafted eggless cakes, desserts, dessert tables and live dessert experiences in Harrow, London.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={playfair.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}