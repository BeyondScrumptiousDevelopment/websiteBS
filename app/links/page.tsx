import { FaInstagram, FaWhatsapp, FaTiktok, FaFacebook } from 'react-icons/fa'

export const metadata = {
  title: 'Beyond Scrumptious | Links',
  description: 'Beyond Scrumptious — all our links in one place.',
  robots: {
    index: false,
    follow: false,
  },
}

const links = [
  { href: '/contact', label: 'Enquire Now', highlight: true },
  { href: '/cakes', label: 'View Cakes' },
  { href: '/desserts', label: 'View Desserts & Dessert Tables' },
  { href: '/live-desserts', label: 'Mini Pancake Station' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/our-story', label: 'Our Story' },
]

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

export default function LinksPage() {
  return (
    <main className="min-h-screen bg-[#202b45] text-[#f8f8f8] flex flex-col items-center px-6 py-16">
      <div className="w-full max-w-md mx-auto flex flex-col items-center">
        <div className="w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden shadow-2xl ring-2 ring-[#f8f8f8]/20 mb-6">
          <img
            src="/images/logo.jpg"
            alt="Beyond Scrumptious"
            className="w-full h-full object-cover"
          />
        </div>

        <p className="logo-font text-4xl md:text-5xl mb-3 text-center leading-none">
          Beyond Scrumptious
        </p>

        <p className="uppercase tracking-[0.3em] text-xs text-[#cfd7e2]/70 mb-2 text-center">
          Cakes • Desserts • Live Dessert Experiences
        </p>

        <p className="text-sm text-[#f8f8f8]/60 mb-10 text-center">
          Harrow, London
        </p>

        <div className="w-full flex flex-col gap-4 mb-10">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`w-full text-center rounded-full px-6 py-5 text-sm uppercase tracking-[0.15em] transition ${
                link.highlight
                  ? 'bg-[#f8f8f8] text-[#202b45] hover:bg-[#cfd7e2]'
                  : 'border border-[#f8f8f8]/30 hover:bg-[#f8f8f8]/10'
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
              className="hover:text-[#cfd7e2] transition"
            >
              <social.icon />
            </a>
          ))}
        </div>

        <p className="text-xs text-[#f8f8f8]/40 text-center">
          Developed by{' '}
          <a
            href="https://naavcaptured.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#cfd7e2] hover:text-white transition"
          >
            naavcaptured
          </a>
        </p>
      </div>
    </main>
  )
}
