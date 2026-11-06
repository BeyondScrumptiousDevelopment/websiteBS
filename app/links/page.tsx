import { FaInstagram, FaTiktok, FaFacebook, FaEnvelope } from 'react-icons/fa'
import { client } from '../../sanity/lib/client'
import BrandCurve from '../../components/BrandCurve'
import BrandRipple from '../../components/BrandRipple'
import BrandPiping from '../../components/BrandPiping'

export const runtime = 'edge'
export const revalidate = 0

export const metadata = {
  title: 'Beyond Scrumptious | Links',
  description: 'Beyond Scrumptious — all our links in one place.',
  robots: {
    index: false,
    follow: false,
  },
}

type LinkItem = {
  label: string
  href: string
  meta?: string
  variant?: 'primary' | 'default'
}

// Used until a "Links Page" document is published in Sanity Studio, and as
// a safety net if the fetch ever fails — the page always has something to show.
const defaultLinks: LinkItem[] = [
  { href: '/contact', label: 'Request Your Quote', variant: 'primary' },
  { href: '/cakes', label: 'Bespoke Cakes', meta: 'from £55' },
  { href: '/desserts', label: 'Dessert Tables', meta: 'from £300' },
  { href: '/live-desserts', label: 'Live Dessert Stations', meta: 'from £250' },
  { href: '/croffle', label: 'Live Croffle Station', meta: 'New' },
  { href: '/gallery', label: 'Our Work', meta: 'Gallery' },
  { href: 'https://wa.me/447933903000', label: 'Message Us on WhatsApp', meta: '→' },
  {
    href: 'https://www.google.com/search?q=Beyond+Scrumptious+Harrow+reviews',
    label: 'Read Our Reviews',
    meta: 'Google',
  },
  { href: '/faq', label: 'FAQs & Allergen Information', meta: '→' },
]

async function getLinks(): Promise<LinkItem[]> {
  try {
    const data = await client.fetch(`*[_type == "linksPage"][0]{ links }`)
    if (data?.links?.length) return data.links
  } catch {
    // Sanity unreachable — fall through to defaults below
  }
  return defaultLinks
}

const socials = [
  { href: 'https://instagram.com/beyond.scrumptious', label: 'Instagram', icon: FaInstagram },
  { href: 'https://www.tiktok.com/@beyondscrumptious', label: 'TikTok', icon: FaTiktok },
  {
    href: 'https://www.facebook.com/profile.php?id=61578473547436',
    label: 'Facebook',
    icon: FaFacebook,
  },
  { href: 'mailto:hello@beyondscrumptious.com', label: 'Email', icon: FaEnvelope },
]

export default async function LinksPage() {
  const links = await getLinks()

  return (
    <main className="bs-brand relative overflow-hidden min-h-screen bg-[#D8E8F4] text-[#19253F] flex flex-col items-center px-6 py-16">
      <BrandRipple id="bs-ripple-links" tone="onLight" />
      <BrandCurve side="left" />
      <div className="relative w-full max-w-md mx-auto flex flex-col items-center">
        <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden border border-[#3F5478]/20 mb-6">
          <img
            src="/images/logo.jpg"
            alt="Beyond Scrumptious"
            className="w-full h-full object-cover"
          />
        </div>

        <img
          src="/images/wordmark-navy.png"
          alt="Beyond Scrumptious"
          className="h-10 md:h-12 w-auto mb-3"
        />

        <p className="uppercase tracking-[0.3em] text-xs text-[#3F5478]/80 mb-2 text-center">
          Eggless Desserts · Across London
        </p>

        <p className="text-sm text-[#19253F]/70 mb-1 text-center">
          Eggless cakes, dessert tables &amp; live dessert stations
        </p>
        <p className="text-xs uppercase tracking-[0.15em] text-[#3F5478]/70 mb-10 text-center">
          Eggless &amp; Gelatine-Free · Vegan Options · 5★ Hygiene Rating
        </p>

        <div className="w-full flex flex-col gap-4 mb-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={
                link.variant === 'primary'
                  ? 'w-full text-center rounded-[2px] px-6 py-5 text-sm uppercase tracking-[0.15em] transition bg-[#19253F] text-[#F3F8FB] hover:bg-[#3F5478]'
                  : 'w-full flex items-center justify-between gap-3 rounded-[2px] px-6 py-5 text-sm transition bg-[#F3F8FB] border border-[#3F5478]/20 hover:bg-[#C5D7EC]'
              }
            >
              <span className={link.variant === 'primary' ? '' : 'uppercase tracking-[0.1em]'}>
                {link.label}
              </span>
              {link.meta && (
                <span className="text-xs text-[#3F5478]/80 shrink-0">{link.meta}</span>
              )}
            </a>
          ))}
        </div>

        <div className="flex gap-6 text-2xl mb-16">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={social.label}
              className="hover:text-[#3F5478] transition"
            >
              <social.icon />
            </a>
          ))}
        </div>

        <p className="text-xs text-[#19253F]/40 text-center">
          Developed by{' '}
          <a
            href="https://naavcaptured.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3F5478] hover:text-[#19253F] transition"
          >
            naavcaptured
          </a>
        </p>
      </div>
      <div className="relative w-full max-w-md mx-auto mt-2">
        <BrandPiping tone="onLight" />
      </div>
    </main>
  )
}
