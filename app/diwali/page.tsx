import { FaInstagram, FaWhatsapp, FaTiktok, FaFacebook } from 'react-icons/fa'
import WhatsAppButton from '../../components/WhatsAppButton'
import { Reveal, RevealGroup, RevealItem } from '../../components/motion/Reveal'
import { TapLink } from '../../components/motion/TapLink'

export const metadata = {
  title: 'Diwali 2026 | Beyond Scrumptious',
  description:
    'Diwali 2026 at Beyond Scrumptious — choose from Naturally Sweet Cupcakes or The Diwali Cupcake Collection. Pickup 7th–8th Nov, Harrow.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/diwali',
  },
}

export default function DiwaliLandingPage() {
  return (
    <main className="bg-[#1b1712] text-[#f8f8f8]">
      <WhatsAppButton />

      {/* MINIMAL TOP BAR */}
      <div className="pt-8 px-6 text-center">
        <a href="/" className="logo-font text-2xl md:text-3xl text-[#f3e3c3]">
          Beyond Scrumptious
        </a>
      </div>

      {/* HERO */}
      <section className="relative mt-8 px-6 pb-16 pt-16 md:pt-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,151,63,0.18),transparent_55%),radial-gradient(circle_at_75%_70%,rgba(201,151,63,0.12),transparent_50%)]" />

        <Reveal className="relative max-w-3xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-sm text-[#c9973f] mb-6">
            Diwali 2026 ✨
          </p>

          <h1 className="heading-font text-5xl md:text-7xl leading-tight mb-6 text-[#f3e3c3]">
            A Little Sweetness For Diwali
          </h1>

          <p className="text-lg md:text-xl text-[#f8f8f8]/80 max-w-2xl mx-auto mb-4">
            Two ways to celebrate this year — choose the range that's right
            for you.
          </p>

          <div className="flex flex-col items-center gap-1 text-sm text-[#f8f8f8]/60">
            <p>📅 Pickup 7th or 8th November 2026 only</p>
            <p>📍 Harrow, London</p>
          </div>
        </Reveal>
      </section>

      {/* COLLECTIONS */}
      <section className="px-6 pb-24">
        <RevealGroup className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8" stagger={0.1}>
          <RevealItem className="rounded-[2rem] overflow-hidden border border-[#c9973f]/30 bg-[#241e17] flex flex-col">
            <div className="relative h-56">
              <img
                src="/images/diwali/cupcakes-1.jpg"
                alt="Beyond Scrumptious Naturally Sweet Cupcakes for Diwali"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241e17] via-[#241e17]/10 to-transparent" />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h2 className="heading-font text-2xl md:text-3xl mb-3 text-[#f3e3c3]">
                Naturally Sweet Cupcakes
              </h2>
              <p className="text-[#f8f8f8]/70 leading-7 mb-6 flex-1">
                No added refined sugar — naturally sweetened with dates.
                Kulfi, Vanilla &amp; Chocolate.
              </p>
              <p className="uppercase tracking-[0.2em] text-xs text-[#c9973f] mb-6">
                From £20
              </p>
              <TapLink
                href="/diwali/naturally-sweet"
                className="inline-block text-center px-8 py-4 rounded-full bg-[#c9973f] text-[#1b1712] font-semibold uppercase tracking-[0.2em] text-sm hover:bg-[#f3e3c3] transition"
              >
                Explore &amp; Order
              </TapLink>
            </div>
          </RevealItem>

          <RevealItem className="rounded-[2rem] overflow-hidden border border-[#c9973f]/30 bg-[#241e17] flex flex-col">
            <div className="relative h-56">
              <img
                src="/images/diwali/cupcake-collection-detail.jpg"
                alt="A Beyond Scrumptious Diwali cupcake finished with buttercream rose piping in a crystal-lid gift box"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241e17] via-[#241e17]/10 to-transparent" />
            </div>
            <div className="p-8 flex flex-col flex-1">
              <h2 className="heading-font text-2xl md:text-3xl mb-3 text-[#f3e3c3]">
                The Diwali Cupcake Collection
              </h2>
              <p className="text-[#f8f8f8]/70 leading-7 mb-6 flex-1">
                Thoughtfully decorated, beautifully packaged. Vanilla,
                Chocolate, Kulfi &amp; Oreo.
              </p>
              <p className="uppercase tracking-[0.2em] text-xs text-[#c9973f] mb-6">
                From £4.50
              </p>
              <TapLink
                href="/diwali/cupcakes"
                className="inline-block text-center px-8 py-4 rounded-full bg-[#c9973f] text-[#1b1712] font-semibold uppercase tracking-[0.2em] text-sm hover:bg-[#f3e3c3] transition"
              >
                Explore &amp; Order
              </TapLink>
            </div>
          </RevealItem>
        </RevealGroup>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-16 bg-[#1b1712] border-t border-[#c9973f]/20 text-center">
        <a href="/" className="logo-font text-2xl text-[#f3e3c3] mb-6 inline-block">
          Beyond Scrumptious
        </a>

        <div className="flex justify-center gap-6 text-xl text-[#f8f8f8]/70 mb-8">
          <a
            href="https://instagram.com/beyond.scrumptious"
            target="_blank"
            aria-label="Instagram"
            className="hover:text-[#c9973f] transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/447933903000"
            target="_blank"
            aria-label="WhatsApp"
            className="hover:text-[#c9973f] transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.tiktok.com/@beyondscrumptious"
            target="_blank"
            aria-label="TikTok"
            className="hover:text-[#c9973f] transition"
          >
            <FaTiktok />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61578473547436"
            target="_blank"
            aria-label="Facebook"
            className="hover:text-[#c9973f] transition"
          >
            <FaFacebook />
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs uppercase tracking-[0.15em] text-[#f8f8f8]/50 mb-8">
          <a href="/allergen-information" className="hover:text-[#f3e3c3] transition">
            Allergen Information
          </a>
          <a href="/terms" className="hover:text-[#f3e3c3] transition">
            Terms &amp; Conditions
          </a>
          <a href="/privacy-policy" className="hover:text-[#f3e3c3] transition">
            Privacy Policy
          </a>
          <a href="/" className="hover:text-[#f3e3c3] transition">
            Full Website
          </a>
        </div>

        <p className="text-xs text-[#f8f8f8]/40">
          &copy; {new Date().getFullYear()} Beyond Scrumptious, Harrow, London. Developed by{' '}
          <a
            href="https://naavcaptured.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#c9973f] hover:text-[#f3e3c3] transition"
          >
            naavcaptured
          </a>
        </p>
      </footer>
    </main>
  )
}
