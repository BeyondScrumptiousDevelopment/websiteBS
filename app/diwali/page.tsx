import { FaInstagram, FaWhatsapp, FaTiktok, FaFacebook } from 'react-icons/fa'
import WhatsAppButton from '../../components/WhatsAppButton'
import DiwaliOrderForm from '../../components/DiwaliOrderForm'

export const metadata = {
  title: 'Diwali 2026 | Naturally Sweet Cupcakes | Beyond Scrumptious',
  description:
    'Naturally Sweet Cupcakes for Diwali 2026 — no added refined sugar, naturally sweetened with dates. Kulfi, Vanilla & Chocolate. Pickup 7th–8th November, Harrow, London.',
  robots: {
    index: true,
    follow: true,
  },
}

const flavours = [
  {
    emoji: '🌿',
    name: 'Kulfi',
    description: 'An aromatic flavour inspired by the classic Indian dessert.',
  },
  {
    emoji: '🤍',
    name: 'Vanilla',
    description: 'Simple, soft and naturally sweet.',
  },
  {
    emoji: '🍫',
    name: 'Chocolate',
    description: 'Rich, chocolatey and naturally sweetened with dates.',
  },
]

export default function DiwaliPage() {
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
      <section className="relative mt-8 px-6 pb-24 pt-16 md:pt-24">
        <div className="absolute inset-0">
          <img
            src="/images/diwali/cupcakes-1.jpg"
            alt="Beyond Scrumptious Naturally Sweet Cupcakes for Diwali"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1b1712]/85 via-[#1b1712]/75 to-[#1b1712]" />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-sm text-[#c9973f] mb-6">
            Diwali 2026 ✨
          </p>

          <h1 className="heading-font text-5xl md:text-7xl leading-tight mb-6 text-[#f3e3c3]">
            Naturally Sweet Cupcakes
          </h1>

          <p className="text-lg md:text-xl text-[#f8f8f8]/90 mb-2">
            No added refined sugar. Naturally sweetened with dates.
          </p>
          <p className="text-base md:text-lg text-[#f8f8f8]/70 mb-8 max-w-2xl mx-auto">
            A deliciously different way to enjoy something sweet this Diwali.
          </p>

          <p className="uppercase tracking-[0.3em] text-sm text-[#f3e3c3] mb-3">
            Kulfi • Vanilla • Chocolate
          </p>

          <p className="heading-font text-2xl md:text-3xl text-[#f8f8f8] mb-8">
            6 for £20 &nbsp;|&nbsp; 12 for £35
          </p>

          <div className="flex flex-col items-center gap-1 text-sm text-[#f8f8f8]/70 mb-10">
            <p>📅 Pickup 7th or 8th November 2026 only</p>
            <p>📍 Harrow, London</p>
          </div>

          <a
            href="#order"
            className="inline-block px-12 py-5 rounded-full bg-[#c9973f] text-[#1b1712] font-semibold uppercase tracking-[0.2em] hover:bg-[#f3e3c3] transition"
          >
            Order Your Box ↓
          </a>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase tracking-[0.4em] text-sm text-[#c9973f] mb-6">
              Naturally Sweet, Made For Diwali
            </p>

            <h2 className="heading-font text-3xl md:text-4xl mb-6 text-[#f3e3c3] leading-tight">
              Looking for something a little different this Diwali?
            </h2>

            <p className="text-[#f8f8f8]/80 leading-8 mb-4">
              Our Naturally Sweet Cupcakes are made without added refined
              sugar, with sweetness coming naturally from dates.
            </p>
            <p className="text-[#f8f8f8]/80 leading-8">
              Soft, flavourful and perfect for sharing, they're available in
              three flavours inspired by favourites from the Beyond
              Scrumptious range.
            </p>
          </div>

          <div className="rounded-[2rem] overflow-hidden shadow-2xl">
            <img
              src="/images/diwali/cupcakes-2.jpg"
              alt="Naturally Sweet Cupcake by Beyond Scrumptious"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* FLAVOURS */}
      <section className="px-6 py-16 bg-[#241e17]">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-font text-3xl md:text-4xl text-center mb-14 text-[#f3e3c3]">
            Choose From
          </h2>

          <div className="grid sm:grid-cols-3 gap-6">
            {flavours.map((f) => (
              <div
                key={f.name}
                className="bg-[#1b1712] border border-[#c9973f]/30 rounded-[2rem] p-8 text-center"
              >
                <p className="text-4xl mb-4">{f.emoji}</p>
                <h3 className="heading-font text-2xl mb-3 text-[#f3e3c3]">
                  {f.name}
                </h3>
                <p className="text-[#f8f8f8]/70 leading-7">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHOOSE YOUR BOX */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-font text-3xl md:text-4xl text-center mb-14 text-[#f3e3c3]">
            Choose Your Box
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-[#241e17] border border-[#c9973f]/30 rounded-[2rem] p-10 text-center">
              <h3 className="heading-font text-2xl mb-2 text-[#f8f8f8]">
                6 Cupcakes
              </h3>
              <p className="heading-font text-4xl mb-4 text-[#c9973f]">£20</p>
              <p className="text-[#f8f8f8]/70">One flavour only.</p>
            </div>

            <div className="bg-[#241e17] border border-[#c9973f]/30 rounded-[2rem] p-10 text-center">
              <h3 className="heading-font text-2xl mb-2 text-[#f8f8f8]">
                12 Cupcakes
              </h3>
              <p className="heading-font text-4xl mb-4 text-[#c9973f]">£35</p>
              <p className="text-[#f8f8f8]/70">
                Choose one flavour, or two flavours — 6 + 6.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PICKUP INFO */}
      <section className="px-6 py-24 bg-[#241e17]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-sm text-[#c9973f] mb-6">
            Your Diwali Order
          </p>
          <h2 className="heading-font text-3xl md:text-4xl mb-10 text-[#f3e3c3]">
            Pickup Dates
          </h2>

          <p className="text-[#f8f8f8]/80 leading-8 mb-6">
            Orders will be available for collection on:
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <div className="bg-[#1b1712] border border-[#c9973f]/30 rounded-2xl px-8 py-5">
              <p className="heading-font text-xl text-[#f8f8f8]">
                Saturday 7th November 2026
              </p>
            </div>
            <div className="bg-[#1b1712] border border-[#c9973f]/30 rounded-2xl px-8 py-5">
              <p className="heading-font text-xl text-[#f8f8f8]">
                Sunday 8th November 2026
              </p>
            </div>
          </div>

          <p className="text-[#f8f8f8]/70 mb-2">📍 Harrow, London</p>
          <p className="text-sm text-[#f8f8f8]/50">
            Pickup only — no delivery available for this collection.
          </p>
        </div>
      </section>

      {/* ORDER FORM */}
      <section id="order" className="px-6 py-24 scroll-mt-10">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="uppercase tracking-[0.4em] text-sm text-[#c9973f] mb-6">
            Order Form
          </p>
          <h2 className="heading-font text-4xl md:text-5xl text-[#f3e3c3]">
            Your Diwali Order
          </h2>
        </div>

        <DiwaliOrderForm />
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
