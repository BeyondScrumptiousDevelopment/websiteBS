import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'
import GallerySlideshow from '../../components/GallerySlideshow'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import ServiceJsonLd from '../../components/ServiceJsonLd'
import { Reveal, RevealGroup, RevealItem } from '../../components/motion/Reveal'
import { TapLink } from '../../components/motion/TapLink'
import SectionSeam from '../../components/motion/SectionSeam'
import BrandCurve from '../../components/BrandCurve'

const flavours = [
  'Vanilla',
  'Chocolate',
  'Marble',
  'Lemon',
  'Raspberry',
  'Oreo',
  'Biscoff',
  'Chocolate Orange',
  'Black Forest',
  'Kulfi',
  'Tiramisu',
]

export const metadata = {
  title: 'Eggless Cakes in Harrow & London | Beyond Scrumptious',
  description:
    'Bespoke eggless celebration cakes, designed around your occasion and finished by hand — from £55, based in Harrow, serving all of London.',
  alternates: {
    canonical: '/cakes',
  },
  openGraph: {
    title: 'Eggless Cakes in Harrow & London | Beyond Scrumptious',
    description:
      'Bespoke eggless celebration cakes, designed around your occasion and finished by hand — from £55, based in Harrow, serving all of London.',
    url: 'https://www.beyondscrumptious.com/cakes',
  },
}

export default function CakesPage() {
  return (
    <main className="bs-brand bg-[#D8E8F4] min-h-screen text-[#19253F]">
      <BreadcrumbJsonLd items={[{ name: 'Cakes', path: '/cakes' }]} />
      <ServiceJsonLd
        name="Eggless Custom Cakes"
        description="Custom eggless cakes for birthdays, weddings and celebrations, handmade in Harrow and serving London."
        path="/cakes"
      />
      <Navbar />
      <WhatsAppButton />

      {/* HERO */}
      <section className="relative overflow-hidden pt-40 pb-24 px-6 text-center">
        <BrandCurve side="left" />
        <Reveal className="max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-sm text-[#3F5478]/80 mb-6">
            Eggless Cakes · Across London
          </p>

          <h1 className="heading-font text-5xl md:text-7xl leading-tight mb-8">
            Bespoke Celebration Cakes
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl leading-8 text-[#19253F]/70">
            Eggless cakes, designed around your occasion and finished by hand
            in smooth buttercream. From £55.
          </p>
        </Reveal>
      </section>

      <SectionSeam color="#3F5478" />

      {/* FLAVOURS */}
      <section className="bg-[#D8E8F4] text-[#19253F] py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-[#19253F]/60 mb-6">
              Current Flavours
            </p>
            <h2 className="heading-font text-4xl md:text-6xl">
              Our Flavours
            </h2>
          </Reveal>

          <RevealGroup className="grid grid-cols-2 md:grid-cols-4 gap-4" stagger={0.04}>
            {flavours.map((flavour) => (
              <RevealItem
                key={flavour}
                className="bg-white rounded-none py-6 px-4 text-center border border-[#3F5478]/20 heading-font text-lg"
                y={14}
              >
                {flavour}
              </RevealItem>
            ))}
          </RevealGroup>

          <p className="text-center mt-10 text-[#19253F]/70 max-w-2xl mx-auto">
            Vegan versions of selected flavours, confirmed at booking.
          </p>
        </div>
      </section>

      <SectionSeam color="#3F5478" />

      {/* CUSTOMISATION */}
      <section className="py-28 px-6">
        <RevealGroup className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <RevealItem className="bg-[#F3F8FB] text-[#19253F] rounded-none p-10 border border-[#3F5478]/20">
            <h3 className="heading-font text-3xl mb-4">Designed for You</h3>
            <p className="leading-8 text-[#19253F]/70">
              Share your theme, colours or inspiration images, and we'll
              design a cake that is entirely yours.
            </p>
          </RevealItem>

          <RevealItem className="bg-[#F3F8FB] text-[#19253F] rounded-none p-10 border border-[#3F5478]/20">
            <h3 className="heading-font text-3xl mb-4">Ordering &amp; Lead Time</h3>
            <p className="leading-8 text-[#19253F]/70">
              Please allow one week. Shorter notice may be possible — just
              ask.
            </p>
          </RevealItem>
        </RevealGroup>
      </section>

      <GallerySlideshow
        category={['cakes', 'cupcakes']}
        eyebrow="From The Gallery"
        title="Recent Cakes & Cupcakes"
      />

      <SectionSeam color="#3F5478" />

      {/* CUPCAKES */}
      <section className="bg-[#D8E8F4] text-[#19253F] py-28 px-6">
        <Reveal className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-sm text-[#19253F]/60 mb-6">
            Also Available
          </p>

          <h2 className="heading-font text-4xl md:text-6xl mb-8">
            Signature Cupcakes
          </h2>

          <p className="max-w-3xl mx-auto text-lg leading-8 text-[#19253F]/70 mb-6">
            Eggless cupcakes in boxes for gifting and events, with deluxe
            flavours available.
          </p>

          <p className="text-sm uppercase tracking-[0.2em] text-[#19253F]/50">
            Eggless • Gelatine-Free • Customisable
          </p>
        </Reveal>
      </section>

      <SectionSeam color="#3F5478" />

      {/* CTA */}
      <Reveal as="section" className="py-32 px-6 text-center" y={0}>
        <h2 className="heading-font text-4xl md:text-6xl mb-8">
          Begin Your Order
        </h2>
        <p className="text-[#19253F]/70 max-w-2xl mx-auto mb-6 leading-8">
          Send your date, flavour and design ideas, and we'll reply with a
          tailored quote.
        </p>
        <p className="text-[#19253F]/50 max-w-2xl mx-auto mb-10 leading-8 text-sm">
          Planning a bigger spread? Explore our{' '}
          <a href="/desserts" className="underline hover:text-[#19253F]">
            dessert tables
          </a>{' '}
          or add our{' '}
          <a href="/live-desserts" className="underline hover:text-[#19253F]">
            Live Mini Pancake Station
          </a>{' '}
          to the celebration.
        </p>
        <TapLink
          href="/contact"
          className="inline-block px-10 py-5 rounded-[2px] bg-[#19253F] text-[#F3F8FB] text-sm uppercase tracking-[0.2em] hover:bg-[#3F5478] transition"
        >
          Request a Cake Quote
        </TapLink>
      </Reveal>

      <Footer />
    </main>
  )
}
