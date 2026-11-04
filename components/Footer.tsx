import { FaInstagram, FaWhatsapp, FaTiktok, FaFacebook } from 'react-icons/fa'
import BrandPiping from './BrandPiping'

const siteLinks = [
  { href: '/', label: 'Home' },
  { href: '/cakes', label: 'Cakes' },
  { href: '/desserts', label: 'Desserts & Dessert Tables' },
  { href: '/live-desserts', label: 'Live Desserts' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/our-story', label: 'Our Story' },
  { href: '/faq', label: 'FAQ' },
  { href: '/contact', label: 'Contact / Enquire' },
]

const legalLinks = [
  { href: '/allergen-information', label: 'Allergen Information' },
  { href: '/delivery-collection', label: 'Delivery & Collection' },
  { href: '/terms', label: 'Terms & Conditions' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/cookie-policy', label: 'Cookie Policy' },
]

export default function Footer() {
  return (
    <footer className="bg-[#D8E8F4] text-[#19253F] pt-24 pb-10 px-6 relative">
      <BrandPiping />
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 pb-16 border-b border-[#19253F]/10">
          <div>
            <img
              src="/images/logo-navy.png"
              alt="Beyond Scrumptious"
              className="h-8 w-auto mb-4"
            />
            <p className="text-sm uppercase tracking-[0.2em] text-[#3F5478]/80 mb-8">
              Cakes • Desserts • Live Dessert Experiences
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 rounded-full bg-[#19253F] text-[#F3F8FB] text-sm uppercase tracking-[0.2em] hover:bg-[#3F5478] transition"
            >
              Enquire Now
            </a>
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-[#3F5478]/70 mb-6">
              Explore
            </p>
            <ul className="space-y-3 text-sm text-[#19253F]/80">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-[#19253F] transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-[#3F5478]/70 mb-6">
              Policies
            </p>
            <ul className="space-y-3 text-sm text-[#19253F]/80">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-[#19253F] transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="uppercase tracking-[0.3em] text-xs text-[#3F5478]/70 mb-6">
              Harrow, London
            </p>
            <p className="text-sm text-[#19253F]/80 mb-6">
              hello@beyondscrumptious.com
            </p>
            <div className="flex gap-4 text-xl">
              <a
                href="https://instagram.com/beyond.scrumptious"
                target="_blank"
                aria-label="Instagram"
                className="hover:text-[#3F5478] transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/447933903000"
                target="_blank"
                aria-label="WhatsApp"
                className="hover:text-[#3F5478] transition"
              >
                <FaWhatsapp />
              </a>
              <a
                href="https://www.tiktok.com/@beyondscrumptious"
                target="_blank"
                aria-label="TikTok"
                className="hover:text-[#3F5478] transition"
              >
                <FaTiktok />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61578473547436"
                target="_blank"
                aria-label="Facebook"
                className="hover:text-[#3F5478] transition"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#19253F]/50">
          <p>&copy; {new Date().getFullYear()} Beyond Scrumptious. All rights reserved.</p>
          <p>
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
      </div>
    </footer>
  )
}
