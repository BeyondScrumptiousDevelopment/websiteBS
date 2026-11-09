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

const range = [
  {
    name: 'Cheesecakes',
    flavours: 'Biscoff, Oreo, Lemon, Gajar Ka Halwa, Mango, Nutella',
    format: 'Pots only',
    minimum: 'Minimum 12',
    vegan: 'No vegan option',
  },
  {
    name: 'Cake Pots',
    flavours: 'Same flavours as our cakes',
    format: 'Pots',
    minimum: 'Minimum 15',
    vegan: 'Vegan options available',
  },
  {
    name: 'Traybake Slices',
    flavours: 'Same flavours as our cakes',
    format: '1.5-inch square pieces',
    minimum: 'Minimum 50',
    vegan: 'Vegan options available',
  },
  {
    name: 'Mini Cakes',
    flavours: 'Same flavours as our cakes',
    format: 'Same quantity structure as traybake slices',
    minimum: 'Minimum 50',
    vegan: 'Vegan availability follows agreed product options',
  },
  {
    name: 'Coconut Lamingtons',
    flavours: 'Chocolate Coconut, Vanilla',
    format: 'Fixed 1.5-inch size',
    minimum: 'Minimum 30',
    vegan: 'Vegan options available',
  },
  {
    name: 'Mini Doughnuts',
    flavours:
      'Pistachio & Dark Chocolate, White Chocolate & Raspberry, Milk Chocolate & Sprinkles',
    format: 'Box of 20',
    minimum: 'Minimum 20',
    vegan: 'No vegan option',
  },
  {
    name: 'Loaves',
    flavours: 'Lemon, Black Forest, Blueberry, Oreo',
    format: 'Sold as one whole loaf, not slices',
    minimum: null,
    vegan: 'Vegan options available',
  },
]

export const metadata = {
  title: 'Desserts & Dessert Tables in Harrow | Beyond Scrumptious',
  description:
    'Styled dessert tables, curated for your event — handcrafted eggless desserts from £300, based in Harrow, serving all of London.',
  alternates: {
    canonical: '/desserts',
  },
  openGraph: {
    title: 'Desserts & Dessert Tables in Harrow | Beyond Scrumptious',
    description:
      'Styled dessert tables, curated for your event — handcrafted eggless desserts from £300, based in Harrow, serving all of London.',
    url: 'https://www.beyondscrumptious.com/desserts',
  },
}

export default function DessertsPage() {
  return (
    <main className="bs-brand bg-[#D8E8F4] min-h-screen text-[#19253F]">
      <BreadcrumbJsonLd items={[{ name: 'Desserts & Dessert Tables', path: '/desserts' }]} />
      <ServiceJsonLd
        name="Desserts & Dessert Tables"
        description="Eggless desserts and styled dessert tables for weddings, parties and events, handmade in Harrow and serving London."
        path="/desserts"
      />
      <Navbar />
      <WhatsAppButton />

      {/* HERO */}
      <section className="relative overflow-hidden pt-40 pb-24 px-6 text-center">
        <BrandCurve side="left" />
        <Reveal className="max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-sm text-[#3F5478]/80 mb-6">
            Dessert Tables · Across London
          </p>

          <h1 className="heading-font text-5xl md:text-7xl leading-tight mb-8">
            Styled Dessert Tables,
            <br />
            Curated For Your <span className="bs-accent">Event</span>
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl leading-8 text-[#19253F]/70">
            A beautiful spread of handcrafted eggless desserts, styled to
            your theme and set up for you. From £300.
          </p>
        </Reveal>
      </section>

      <SectionSeam color="#3F5478" />

      {/* RANGE */}
      <section className="bg-[#D8E8F4] text-[#19253F] py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-[#19253F]/60 mb-6">
              Our Dessert Range
            </p>
            <h2 className="heading-font text-4xl md:text-6xl">
              The Dessert Collection
            </h2>
          </Reveal>

          <RevealGroup className="grid md:grid-cols-2 gap-6" stagger={0.05}>
            {range.map((item) => (
              <RevealItem
                key={item.name}
                className="bg-[#F3F8FB] rounded-none p-8 border border-[#3F5478]/20"
              >
                <h3 className="heading-font text-2xl mb-3">{item.name}</h3>
                <p className="text-[#19253F]/70 leading-7 mb-3">
                  {item.flavours}
                </p>
                <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.15em] text-[#19253F]/60">
                  <span className="bg-[#D8E8F4] rounded-[2px] px-3 py-1">
                    {item.format}
                  </span>
                  {item.minimum && (
                    <span className="bg-[#D8E8F4] rounded-[2px] px-3 py-1">
                      {item.minimum}
                    </span>
                  )}
                  <span className="bg-[#D8E8F4] rounded-[2px] px-3 py-1">
                    Eggless / Gelatine-Free
                  </span>
                  <span className="bg-[#D8E8F4] rounded-[2px] px-3 py-1">
                    {item.vegan}
                  </span>
                  <span className="bg-[#D8E8F4] rounded-[2px] px-3 py-1">
                    Customisable
                  </span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <GallerySlideshow
        category={['desserts', 'dessert-tables']}
        eyebrow="From The Gallery"
        title="Recent Desserts & Tables"
      />

      <SectionSeam color="#3F5478" />

      {/* DESSERT TABLE EXPERIENCE */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-[#3F5478]/80 mb-6">
              The Dessert Table Experience
            </p>
            <h2 className="heading-font text-4xl md:text-6xl">
              Styled Around Your Celebration
            </h2>
          </Reveal>

          <RevealGroup className="grid md:grid-cols-2 gap-8 mb-14">
            <RevealItem className="bg-[#F3F8FB] text-[#19253F] rounded-none p-10 border border-[#3F5478]/20">
              <h3 className="heading-font text-2xl mb-4">
                Curated With You
              </h3>
              <p className="leading-8 text-[#19253F]/70">
                Tell us your guest numbers and theme; we'll recommend the
                right mix and quantities, then style the table in your
                colours.
              </p>
            </RevealItem>

            <RevealItem className="bg-[#F3F8FB] text-[#19253F] rounded-none p-10 border border-[#3F5478]/20">
              <h3 className="heading-font text-2xl mb-4">
                Our Service Options
              </h3>
              <p className="leading-8 text-[#19253F]/70 mb-3">
                <strong className="text-[#19253F]">Styled &amp; Set</strong> — we
                deliver, style and set up your table before guests arrive.
              </p>
              <p className="leading-8 text-[#19253F]/70">
                <strong className="text-[#19253F]">
                  Styled &amp; Hosted
                </strong>{' '}
                — we stay throughout to replenish and keep the table looking
                its best.
              </p>
            </RevealItem>
          </RevealGroup>

          <div className="text-center">
            <p className="uppercase tracking-[0.3em] text-sm text-[#3F5478]/70">
              Delivery across London is included in every dessert table quote
            </p>
          </div>
        </div>
      </section>

      <SectionSeam color="#3F5478" />

      {/* CTA */}
      <Reveal as="section" className="bg-[#D8E8F4] text-[#19253F] py-32 px-6 text-center" y={0}>
        <h2 className="heading-font text-4xl md:text-6xl mb-8">
          Design Your Dessert Table
        </h2>
        <p className="max-w-2xl mx-auto mb-6 leading-8 text-[#19253F]/70">
          Enquire for a custom dessert or dessert-table quote.
        </p>
        <p className="max-w-2xl mx-auto mb-10 leading-8 text-[#19253F]/60 text-sm">
          Looking for a cake too? See our{' '}
          <a href="/cakes" className="underline hover:text-[#19253F]">
            eggless custom cakes
          </a>
          , or add our{' '}
          <a href="/live-desserts" className="underline hover:text-[#19253F]">
            Live Mini Pancake Station
          </a>{' '}
          for a live dessert experience.
        </p>
        <TapLink
          href="/contact"
          className="inline-block px-10 py-5 rounded-[2px] bg-[#19253F] text-[#F3F8FB] text-sm uppercase tracking-[0.2em] hover:bg-[#3F5478] transition"
        >
          Request a Dessert Table Quote
        </TapLink>
      </Reveal>

      <Footer />
    </main>
  )
}
