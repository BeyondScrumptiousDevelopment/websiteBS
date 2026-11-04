import { FaInstagram, FaWhatsapp, FaTiktok, FaFacebook } from 'react-icons/fa'
import { client } from '../../sanity/lib/client'
import BrandCurve from '../../components/BrandCurve'

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

type LinkItem = { label: string; href: string; highlight?: boolean }

// Used until a "Links Page" document is published in Sanity Studio, and as
// a safety net if the fetch ever fails — the page always has something to show.
const defaultLinks: LinkItem[] = [
  { href: '/diwali', label: 'Diwali 2026 — Order Now ✨', highlight: true },
  { href: '/croffle', label: 'Live Croffle Station — New ✨', highlight: true },
  { href: '/contact', label: 'Enquire Now', highlight: true },
  { href: '/cakes', label: 'View Cakes' },
  { href: '/desserts', label: 'View Desserts & Dessert Tables' },
  { href: '/live-desserts', label: 'Mini Pancake Station' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/our-story', label: 'Our Story' },
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
  { href: 'https://wa.me/447933903000', label: 'WhatsApp', icon: FaWhatsapp },
  { href: 'https://www.tiktok.com/@beyondscrumptious', label: 'TikTok', icon: FaTiktok },
  {
    href: 'https://www.facebook.com/profile.php?id=61578473547436',
    label: 'Facebook',
    icon: FaFacebook,
  },
]

export default async function LinksPage() {
  const links = await getLinks()

  return (
    <main className="bs-brand relative overflow-hidden min-h-screen bg-[#D8E8F4] text-[#19253F] flex flex-col items-center px-6 py-16">
      <BrandCurve side="left" />
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden shadow-2xl ring-2 ring-[#F3F8FB]/20 mb-6">
          <img
            src="/images/logo.jpg"
            alt="Beyond Scrumptious"
            className="w-full h-full object-cover"
          />
        </div>

        <img
          src="/images/logo-navy.png"
          alt="Beyond Scrumptious"
          className="h-10 md:h-12 w-auto mb-3"
        />

        <p className="uppercase tracking-[0.3em] text-xs text-[#3F5478]/80 mb-2 text-center">
          Cakes • Desserts • Live Dessert Experiences
        </p>

        <p className="text-sm text-[#19253F]/60 mb-10 text-center">
          Harrow, London
        </p>

        <div className="w-full flex flex-col gap-4 mb-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`w-full text-center rounded-full px-6 py-5 text-sm uppercase tracking-[0.15em] transition ${
                link.highlight
                  ? 'bg-[#F3F8FB] text-[#19253F] hover:bg-[#C5D7EC]'
                  : 'border border-[#19253F]/30 hover:bg-[#19253F]/5'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex gap-6 text-2xl mb-16">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
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
    </main>
  )
}
