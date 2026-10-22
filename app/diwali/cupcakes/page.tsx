import { FaInstagram, FaWhatsapp, FaTiktok, FaFacebook } from 'react-icons/fa'
import WhatsAppButton from '../../../components/WhatsAppButton'
import DiwaliOrderForm from '../../../components/DiwaliOrderForm'
import { Reveal, RevealGroup, RevealItem } from '../../../components/motion/Reveal'
import { TapLink } from '../../../components/motion/TapLink'

export const metadata = {
  title: 'The Diwali Cupcake Collection | Beyond Scrumptious',
  description:
    'The Diwali Cupcake Collection — beautifully decorated, gift-boxed cupcakes in Vanilla, Chocolate, Kulfi & Oreo. Pickup 7th–8th Nov, Harrow.',
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/diwali/cupcakes',
  },
}

const flavours = ['Vanilla', 'Chocolate', 'Kulfi', 'Oreo']

const boxes = [
  {
    name: 'Single Cupcake',
    price: '£4.50',
    description: 'One beautifully decorated cupcake in your choice of flavour.',
  },
  {
    name: 'Box of 3',
    price: '£12.50',
    description: 'Choose up to three different flavours.',
  },
  {
    name: 'Box of 6',
    price: '£22.50',
    description:
      'A gift-ready selection of six cupcakes. Choose up to three different flavours.',
  },
]

export default function DiwaliCupcakeCollectionPage() {
  return (
    <main className="bg-[#1b1712] text-[#f8f8f8]">
      <WhatsAppButton />

      {/* MINIMAL TOP BAR */}
      <div className="pt-8 px-6 text-center">
        <a
          href="/diwali"
          className="uppercase tracking-[0.3em] text-xs text-[#c9973f] hover:text-[#f3e3c3] transition"
        >
          ← Diwali 2026
        </a>
        <div className="mt-3">
          <a href="/" className="logo-font text-2xl md:text-3xl text-[#f3e3c3]">
            Beyond Scrumptious
          </a>
        </div>
      </div>

      {/* HERO */}
      <section className="relative mt-8 px-6 pb-24 pt-16 md:pt-24">
        <div className="absolute inset-0">
          <img
            src="/images/diwali/cupcake-collection-hero.jpg"
            alt="A gift box of three Beyond Scrumptious Diwali cupcakes with elegant rose-swirl buttercream piping"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1b1712]/85 via-[#1b1712]/75 to-[#1b1712]" />
        </div>

        <Reveal className="relative max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-sm text-[#c9973f] mb-6">
            Diwali 2026 ✨
          </p>

          <h1 className="heading-font text-5xl md:text-7xl leading-tight mb-6 text-[#f3e3c3]">
            The Diwali Cupcake Collection
          </h1>

          <p className="text-lg md:text-xl text-[#f8f8f8]/90 mb-8">
            A little sweetness, beautifully presented.
          </p>

          <p className="uppercase tracking-[0.3em] text-sm text-[#f3e3c3] mb-3">
            Vanilla • Chocolate • Kulfi • Oreo
          </p>

          <p className="heading-font text-2xl md:text-3xl text-[#f8f8f8] mb-8">
            From £4.50
          </p>

          <div className="flex flex-col items-center gap-1 text-sm text-[#f8f8f8]/70 mb-10">
            <p>📅 Pickup 7th or 8th November 2026 only</p>
            <p>📍 Harrow, London</p>
            <p>✨ While stocks last</p>
          </div>

          <TapLink
            href="#order"
            className="inline-block px-12 py-5 rounded-full bg-[#c9973f] text-[#1b1712] font-semibold uppercase tracking-[0.2em] hover:bg-[#f3e3c3] transition"
          >
            Order Your Box ↓
          </TapLink>
        </Reveal>
      </section>

      {/* INTRO */}
      <section className="px-6 py-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="uppercase tracking-[0.4em] text-sm text-[#c9973f] mb-6">
              Thoughtfully Decorated, Beautifully Packaged
            </p>

            <p className="text-[#f8f8f8]/80 leading-8 mb-4">
              Our Diwali cupcakes are here — thoughtfully decorated,
              beautifully packaged and made to bring a little something
              special to your celebrations.
            </p>
            <p className="text-[#f8f8f8]/80 leading-8">
              Each cupcake is finished with elegant buttercream piping and
              delicate festive details, presented in our crystal-lid gift
              boxes. Perfect for gifting, sharing or adding a little
              sweetness to your Diwali celebrations.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="rounded-[2rem] overflow-hidden shadow-2xl">
            <img
              src="/images/diwali/cupcake-collection-box.jpg"
              alt="Three Beyond Scrumptious Diwali cupcakes in a crystal-lid gift box, finished with buttercream rose piping"
              className="w-full h-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      {/* CHOOSE YOUR BOX */}
      <section className="px-6 py-24 bg-[#241e17]">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <h2 className="heading-font text-3xl md:text-4xl text-center mb-14 text-[#f3e3c3]">
              Choose Your Box
            </h2>
          </Reveal>

          <RevealGroup className="grid sm:grid-cols-3 gap-6" stagger={0.08}>
            {boxes.map((b) => (
              <RevealItem
                key={b.name}
                className="bg-[#1b1712] border border-[#c9973f]/30 rounded-[2rem] p-8 text-center"
              >
                <h3 className="heading-font text-xl mb-2 text-[#f8f8f8]">
                  {b.name}
                </h3>
                <p className="heading-font text-3xl mb-4 text-[#c9973f]">
                  {b.price}
                </p>
                <p className="text-[#f8f8f8]/70 leading-7 text-sm">
                  {b.description}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* FLAVOURS */}
      <section className="px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <h2 className="heading-font text-3xl md:text-4xl text-center mb-14 text-[#f3e3c3]">
              Choose Your Flavours
            </h2>
          </Reveal>

          <RevealGroup className="grid grid-cols-2 sm:grid-cols-4 gap-4" stagger={0.08}>
            {flavours.map((f) => (
              <RevealItem
                key={f}
                className="bg-[#241e17] border border-[#c9973f]/30 rounded-2xl py-6 text-center"
              >
                <p className="heading-font text-lg text-[#f3e3c3]">{f}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* COLLECTION & AVAILABILITY */}
      <section className="px-6 py-24 bg-[#241e17]">
        <Reveal className="max-w-3xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-sm text-[#c9973f] mb-6">
            Collection &amp; Availability
          </p>
          <h2 className="heading-font text-3xl md:text-4xl mb-8 text-[#f3e3c3]">
            A Limited Seasonal Collection
          </h2>

          <p className="text-[#f8f8f8]/80 leading-8 mb-10">
            This is a limited seasonal collection, with a small number of
            boxes available.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            <div className="bg-[#1b1712] border border-[#c9973f]/30 rounded-2xl px-6 py-5">
              <p className="uppercase tracking-[0.2em] text-xs text-[#c9973f] mb-2">
                Collection
              </p>
              <p className="text-[#f8f8f8]">Sat 7 or Sun 8 November 2026</p>
            </div>
            <div className="bg-[#1b1712] border border-[#c9973f]/30 rounded-2xl px-6 py-5">
              <p className="uppercase tracking-[0.2em] text-xs text-[#c9973f] mb-2">
                Location
              </p>
              <p className="text-[#f8f8f8]">Harrow, London</p>
            </div>
            <div className="bg-[#1b1712] border border-[#c9973f]/30 rounded-2xl px-6 py-5">
              <p className="uppercase tracking-[0.2em] text-xs text-[#c9973f] mb-2">
                Availability
              </p>
              <p className="text-[#f8f8f8]">While stocks last</p>
            </div>
          </div>

          <p className="text-sm text-[#f8f8f8]/50">
            Orders are subject to availability. Please enquire to reserve
            your box.
          </p>
        </Reveal>
      </section>

      {/* ORDER FORM */}
      <section id="order" className="px-6 py-24 scroll-mt-10">
        <Reveal className="max-w-3xl mx-auto text-center mb-14">
          <p className="uppercase tracking-[0.4em] text-sm text-[#c9973f] mb-6">
            Order Form
          </p>
          <h2 className="heading-font text-4xl md:text-5xl mb-4 text-[#f3e3c3]">
            Reserve Your Box
          </h2>
          <p className="text-[#f8f8f8]/60">
            A little Diwali sweetness, the Beyond Scrumptious way.
          </p>
        </Reveal>

        <DiwaliOrderForm defaultProduct="collection" />
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
