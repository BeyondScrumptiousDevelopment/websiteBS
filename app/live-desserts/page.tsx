import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'
import GallerySlideshow from '../../components/GallerySlideshow'
import TestimonialsSlideshow from '../../components/TestimonialsSlideshow'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import ServiceJsonLd from '../../components/ServiceJsonLd'
import { Reveal, RevealGroup, RevealItem } from '../../components/motion/Reveal'
import { TapLink } from '../../components/motion/TapLink'
import SectionSeam from '../../components/motion/SectionSeam'

const stations = [
  {
    id: 'pancake',
    name: 'Live Mini Pancake Station',
    tagline: 'Freshly Cooked. Served Live.',
    description:
      "Freshly cooked mini pancakes, made right in front of your guests and finished with their choice of toppings and sauces — a fun, interactive dessert experience for any celebration.",
    features: [
      'Cooked fresh on-site throughout your event',
      'Served warm with your chosen toppings & sauces',
      'Classic, Deluxe & Signature packages',
    ],
    image: '/images/pancake-1.jpg',
    imageAlt: 'Fresh mini pancakes cooked live on the griddle at a Beyond Scrumptious event',
    cta: 'Explore Pancake Packages',
  },
  {
    id: 'croffle',
    name: 'Live Croffle Station',
    tagline: 'Croissant Meets Waffle.',
    description:
      'Croissant meets waffle — pressed fresh at your event until golden and crispy, then finished with your choice of toppings and sauces for a dessert experience guests won’t forget.',
    features: [
      'Pressed fresh on-site throughout your event',
      'Finished with your chosen toppings & sauces',
      'Classic, Deluxe & Signature packages',
    ],
    image: '/images/croffle/croffle-station-wide.jpg',
    imageAlt: 'The Beyond Scrumptious Live Croffle Station set up at an event',
    cta: 'Explore Croffle Packages',
  },
]

const packages = [
  {
    name: 'Classic',
    detail: '2 toppings + 2 sauces',
    description:
      'A straightforward live dessert experience — our classic selection of favourite toppings and sauces, perfect if you want to keep things simple.',
  },
  {
    name: 'Deluxe',
    detail: '4 toppings + 4 sauces',
    description:
      'More variety for your guests to enjoy, with access to both our standard and premium toppings and sauces.',
    highlight: true,
  },
  {
    name: 'Signature',
    detail: '6 toppings + 6 sauces',
    description:
      'Our most generous package — a broader selection of toppings and sauces, perfect for larger celebrations where you want the station to be a real feature.',
  },
]

const standardToppings = ['Oreo Crumbs', 'Biscoff Crumbs', 'Sprinkles', 'Mini Marshmallows', 'Smarties']

const premiumToppings = ['Kunafa', 'Fresh Chopped Strawberries', 'Cake Pieces', 'Seasonal Fruits']

const addOnToppings = ['Pistachio', 'Hazelnuts']

const standardSauces = ['Milk Chocolate', 'White Chocolate', 'Biscoff', 'Mango']

const premiumSauces = ['Cookies & Cream', 'Pistachio', 'Chocolate Hazelnut']

const bookingSteps = [
  {
    step: '1',
    title: 'Choose Your Station',
    description: 'Pick the Live Mini Pancake Station, the Live Croffle Station — or both.',
  },
  {
    step: '2',
    title: 'Select Your Package',
    description: 'Tell us about your event and choose Classic, Deluxe or Signature.',
  },
  {
    step: '3',
    title: 'Receive Your Quote',
    description: 'We’ll put together a tailored quotation based on your requirements.',
  },
  {
    step: '4',
    title: 'We Set Up & Serve',
    description: 'Our team arrives, sets up, and serves freshly prepared desserts throughout your event.',
  },
]

const requirements = [
  'Approximately 6ft of table space',
  'Access to a power supply within approximately 5 metres',
  'Approximately 30–45 minutes for setup',
  'A safe, level area for the station and serving queue',
  'Outdoor events: a suitable shaded area is recommended',
]

const faqs = [
  {
    question: 'Which live dessert stations are available?',
    answer:
      'We currently offer two live dessert stations: the Live Mini Pancake Station and the Live Croffle Station. Both are prepared fresh at your event.',
  },
  {
    question: 'Are the desserts eggless?',
    answer:
      'Yes. Our mini pancakes and croffles are both made using eggless recipes, making both stations suitable for guests who avoid eggs.',
  },
  {
    question: 'What packages can I choose from?',
    answer:
      'Classic, Deluxe and Signature — offering 2, 4 and 6 toppings and sauces respectively. The same three packages apply to both the Mini Pancake Station and the Croffle Station.',
  },
  {
    question: 'Can I choose my toppings and sauces?',
    answer:
      'Yes. Your chosen package determines how many toppings and sauces you can select and which selections are available to you.',
  },
  {
    question: 'Do you offer premium toppings and sauces?',
    answer: 'Yes. We have a selection of premium toppings and sauces available through our higher-tier packages.',
  },
  {
    question: 'How is the price calculated?',
    answer:
      'Every event is individually quoted based on guest numbers, location, service requirements and your selected package. Packages begin at £250.',
  },
  {
    question: 'Is there a minimum number of guests?',
    answer:
      'We cater for events of different sizes. Your quote is based on your event requirements, so please get in touch with your guest numbers.',
  },
  {
    question: 'How long do you serve for?',
    answer:
      "Service duration depends on your guest numbers and event requirements. We'll recommend a suitable service period when preparing your quote.",
  },
  {
    question: 'Can you cater for larger events?',
    answer:
      'Yes. Larger events can be accommodated, with staffing, equipment and service requirements considered as part of the planning process.',
  },
  {
    question: 'What is the Live Croffle Station?',
    answer:
      'Our newest live dessert station — croffles (croissant-waffles) pressed fresh on-site until golden and crispy, then finished with your choice of toppings and sauces. Croffles are eggless.',
  },
  {
    question: 'Can I book the Croffle Station instead of the Pancake Station?',
    answer:
      'Yes. Both stations use the same Classic, Deluxe and Signature packages — just let us know which station you’d like when you enquire.',
  },
  {
    question: 'Can I have both the Pancake Station and the Croffle Station at my event?',
    answer:
      'Yes, this can be arranged — get in touch with your event details and we’ll put together a quote for both.',
  },
  {
    question: 'How do I enquire about a booking?',
    answer:
      "Use our enquiry form on the Contact page, or reach out via WhatsApp, email or Instagram and we'll follow up with a tailored quote.",
  },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
}

export const metadata = {
  title: 'Live Dessert Stations for Events in London | Beyond Scrumptious',
  description:
    "Make your celebration special with Beyond Scrumptious's eggless Live Mini Pancake and Croffle Stations in London. Explore packages and enquire about your event.",
  alternates: {
    canonical: '/live-desserts',
  },
  openGraph: {
    title: 'Live Dessert Stations for Events in London | Beyond Scrumptious',
    description:
      "Make your celebration special with Beyond Scrumptious's eggless Live Mini Pancake and Croffle Stations in London. Explore packages and enquire about your event.",
    url: 'https://www.beyondscrumptious.com/live-desserts',
  },
}

export default function LiveDessertsPage() {
  return (
    <main className="bg-[#202b45] min-h-screen text-[#f8f8f8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <BreadcrumbJsonLd items={[{ name: 'Live Desserts', path: '/live-desserts' }]} />
      <ServiceJsonLd
        name="Live Dessert Stations — Mini Pancakes & Croffles"
        description="Freshly cooked eggless mini pancakes and freshly pressed eggless croffles, prepared live on-site for weddings, mehndis, birthdays and corporate events across London."
        path="/live-desserts"
      />
      <Navbar />
      <WhatsAppButton />

      {/* SECTION 1 — HERO */}
      <section className="pt-40 pb-20 px-6 text-center">
        <Reveal className="max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
            Live Dessert Stations For Weddings, Mehndis &amp; Events
          </p>

          <h1 className="heading-font text-4xl md:text-7xl leading-tight mb-8">
            Freshly Made. Beautifully Served.
            <br />
            Unforgettable Moments.
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl leading-8 text-[#f8f8f8]/70 mb-8">
            Bring the excitement of freshly prepared desserts to your celebration
            with our Live Mini Pancake and Live Croffle Stations. Cooked fresh at
            your event and finished with your guests&apos; favourite toppings and
            sauces, every serving adds something special to the occasion.
          </p>

          <p className="text-sm uppercase tracking-[0.2em] text-[#cfd7e2]/60 mb-2">
            Perfect For Weddings, Mehndis, Birthdays &amp; Corporate Events
          </p>
          <p className="text-sm text-[#f8f8f8]/50 mb-10">
            Both stations are eggless · Packages begin at £250, individually quoted
          </p>

          <div className="flex flex-wrap justify-center gap-5 mb-4">
            <TapLink
              href="/contact"
              className="px-10 py-5 rounded-full bg-[#f8f8f8] text-[#202b45] text-sm uppercase tracking-[0.2em] hover:bg-[#cfd7e2] hover:-translate-y-0.5 transition shadow-xl shadow-black/20"
            >
              Request A Quote
            </TapLink>
            <TapLink
              href="#stations"
              className="px-10 py-5 rounded-full border border-[#f8f8f8]/40 text-sm uppercase tracking-[0.2em] hover:bg-[#f8f8f8]/10 transition"
            >
              Explore Our Stations
            </TapLink>
          </div>
        </Reveal>

        <RevealGroup className="max-w-4xl mx-auto grid grid-cols-2 gap-4 mt-14" stagger={0.1}>
          <RevealItem className="rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5]">
            <img
              src="/images/pancake-2.jpg"
              alt="Sauce being drizzled over a mini pancake at the Live Mini Pancake Station"
              className="w-full h-full object-cover"
            />
          </RevealItem>
          <RevealItem className="rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/5]">
            <img
              src="/images/croffle/croffle-drizzle-1.jpg"
              alt="Chocolate sauce being drizzled over a freshly pressed croffle"
              className="w-full h-full object-cover"
            />
          </RevealItem>
        </RevealGroup>
      </section>

      <SectionSeam color="#8992a3" />

      {/* SECTION 2 — CHOOSE YOUR STATION */}
      <section id="stations" className="bg-[#cfd7e2] text-[#202b45] py-28 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-[#202b45]/60 mb-6">
              Our Live Dessert Stations
            </p>
            <h2 className="heading-font text-4xl md:text-6xl">
              Choose Your Live Dessert Station
            </h2>
          </Reveal>

          <RevealGroup className="grid md:grid-cols-2 gap-8" stagger={0.1}>
            {stations.map((station) => (
              <RevealItem
                key={station.id}
                id={station.id === 'croffle' ? 'croffle' : undefined}
                className="bg-white rounded-[2rem] overflow-hidden shadow-xl flex flex-col scroll-mt-24"
              >
                <div className="aspect-[16/10]">
                  <img
                    src={station.image}
                    alt={station.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <p className="uppercase tracking-[0.3em] text-xs text-[#202b45]/50 mb-2">
                    {station.tagline}
                  </p>
                  <h3 className="heading-font text-2xl md:text-3xl mb-4">
                    {station.name}
                  </h3>
                  <p className="text-[#202b45]/70 leading-7 mb-6">
                    {station.description}
                  </p>
                  <ul className="space-y-2 mb-8 text-sm text-[#202b45]/70">
                    {station.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="text-[#202b45]/40 mt-0.5">&bull;</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <TapLink
                    href="#packages"
                    className="mt-auto inline-block text-center px-8 py-4 rounded-full bg-[#202b45] text-[#f8f8f8] text-sm uppercase tracking-[0.15em] hover:bg-[#161f36] transition"
                  >
                    {station.cta}
                  </TapLink>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* SECTION 3 — PACKAGES & PRICING */}
      <section id="packages" className="bg-[#cfd7e2] text-[#202b45] py-28 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-6">
            <p className="uppercase tracking-[0.4em] text-sm text-[#202b45]/60 mb-6">
              Packages
            </p>
            <h2 className="heading-font text-4xl md:text-6xl mb-6">
              Classic, Deluxe &amp; Signature
            </h2>
            <p className="heading-font text-2xl md:text-3xl mb-4">
              Both Stations Begin From £250
            </p>
            <p className="max-w-2xl mx-auto text-lg leading-8 text-[#202b45]/70">
              The same three fixed packages apply to both the Mini Pancake Station
              and the Croffle Station. Every quote is tailored to your event —
              guest numbers, package and selected options all affect the final
              price.
            </p>
          </Reveal>

          <RevealGroup className="grid md:grid-cols-3 gap-8 mt-12" stagger={0.1}>
            {packages.map((pkg) => (
              <RevealItem
                key={pkg.name}
                className={`relative rounded-[2rem] p-10 shadow-xl text-center flex flex-col ${
                  pkg.highlight
                    ? 'bg-[#202b45] text-[#f8f8f8] md:-translate-y-4 shadow-2xl'
                    : 'bg-white'
                }`}
              >
                {pkg.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#c9973f] text-[#1b1712] text-xs uppercase tracking-[0.15em] font-semibold">
                    Recommended
                  </span>
                )}
                <h3 className="heading-font text-3xl mb-2">{pkg.name}</h3>
                <p
                  className={`uppercase tracking-[0.15em] text-sm mb-6 ${
                    pkg.highlight ? 'text-[#cfd7e2]/80' : 'text-[#202b45]/60'
                  }`}
                >
                  {pkg.detail}
                </p>
                <p
                  className={`leading-7 mb-8 ${
                    pkg.highlight ? 'text-[#f8f8f8]/80' : 'text-[#202b45]/70'
                  }`}
                >
                  {pkg.description}
                </p>
                <div className="mt-auto">
                  <TapLink
                    href="/contact"
                    className={`block px-8 py-4 rounded-full text-sm uppercase tracking-[0.15em] transition ${
                      pkg.highlight
                        ? 'bg-[#f8f8f8] text-[#202b45] hover:bg-[#cfd7e2]'
                        : 'bg-[#202b45] text-[#f8f8f8] hover:bg-[#161f36]'
                    }`}
                  >
                    Request A Quote
                  </TapLink>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>

          <p className="text-center mt-12 text-[#202b45]/70 max-w-2xl mx-auto">
            Every event is individually quoted based on guest numbers, location,
            service requirements and selected options.
          </p>
        </div>
      </section>

      <SectionSeam color="#8992a3" />

      {/* SECTION 4 — TOPPINGS & SAUCES */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
              Toppings &amp; Sauces
            </p>
            <h2 className="heading-font text-4xl md:text-6xl mb-6">
              Choose Your Toppings &amp; Sauces
            </h2>
            <p className="max-w-2xl mx-auto text-lg leading-8 text-[#f8f8f8]/70">
              The same toppings and sauces are available across both stations.
              Your chosen package determines how many you can pick from the
              selections below.
            </p>
          </Reveal>

          <Reveal className="mb-4">
            <p className="uppercase tracking-[0.3em] text-xs text-[#cfd7e2]/60 text-center mb-6">
              Toppings
            </p>
          </Reveal>
          <RevealGroup className="grid md:grid-cols-3 gap-8 mb-16" stagger={0.08}>
            <RevealItem className="bg-[#161f36] rounded-[2rem] p-10 shadow-xl">
              <p className="uppercase tracking-[0.3em] text-xs text-[#cfd7e2]/70 mb-6">
                Standard Selection
              </p>
              <ul className="space-y-3 text-lg text-[#f8f8f8]/85">
                {standardToppings.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </RevealItem>

            <RevealItem className="bg-[#161f36] rounded-[2rem] p-10 shadow-xl border border-[#cfd7e2]/20">
              <p className="uppercase tracking-[0.3em] text-xs text-[#cfd7e2]/70 mb-6">
                Premium Selection
              </p>
              <ul className="space-y-3 text-lg text-[#f8f8f8]/85">
                {premiumToppings.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </RevealItem>

            <RevealItem className="bg-[#c9973f]/10 rounded-[2rem] p-10 shadow-xl border-2 border-[#c9973f]/50 flex flex-col">
              <span className="inline-block self-start px-4 py-1.5 rounded-full bg-[#c9973f] text-[#1b1712] uppercase tracking-[0.15em] text-xs font-semibold mb-6">
                Add-On
              </span>
              <ul className="space-y-4 mb-auto">
                {addOnToppings.map((t) => (
                  <li key={t} className="heading-font text-3xl text-[#f8f8f8]">
                    {t}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-[#f8f8f8]/60 mt-8">
                Available with any package for an additional charge.
              </p>
            </RevealItem>
          </RevealGroup>

          <Reveal className="mb-4">
            <p className="uppercase tracking-[0.3em] text-xs text-[#cfd7e2]/60 text-center mb-6">
              Sauces
            </p>
          </Reveal>
          <RevealGroup className="grid md:grid-cols-2 gap-8" stagger={0.08}>
            <RevealItem className="bg-[#161f36] rounded-[2rem] p-10 shadow-xl">
              <p className="uppercase tracking-[0.3em] text-xs text-[#cfd7e2]/70 mb-6">
                Standard Selection
              </p>
              <ul className="space-y-3 text-lg text-[#f8f8f8]/85">
                {standardSauces.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </RevealItem>

            <RevealItem className="bg-[#161f36] rounded-[2rem] p-10 shadow-xl border border-[#cfd7e2]/20">
              <p className="uppercase tracking-[0.3em] text-xs text-[#cfd7e2]/70 mb-6">
                Premium Selection
              </p>
              <ul className="space-y-3 text-lg text-[#f8f8f8]/85">
                {premiumSauces.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      <SectionSeam color="#8992a3" />

      {/* SECTION 5 — REAL EVENTS & SOCIAL PROOF */}
      <section className="bg-[#cfd7e2] text-[#202b45] py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="uppercase tracking-[0.4em] text-sm text-[#202b45]/60 mb-6">
              Real Events
            </p>
            <h2 className="heading-font text-4xl md:text-6xl">
              See It Live
            </h2>
          </Reveal>
        </div>
      </section>

      <GallerySlideshow
        category="live-desserts"
        eyebrow="Mini Pancake Station"
        title="The Live Pancake Station In Action"
      />

      <section className="bg-[#202b45] pb-8">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4 px-6 mb-16">
          <Reveal className="rounded-[2rem] overflow-hidden shadow-2xl aspect-[9/16] bg-black">
            <video controls playsInline preload="metadata" className="w-full h-full object-cover">
              <source src="/videos/live1.mp4" type="video/mp4" />
            </video>
          </Reveal>
          <Reveal className="rounded-[2rem] overflow-hidden shadow-2xl aspect-[9/16] bg-black" delay={0.1}>
            <video controls playsInline preload="metadata" className="w-full h-full object-cover">
              <source src="/videos/live2.mp4" type="video/mp4" />
            </video>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#cfd7e2] text-[#202b45] py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="mb-14">
            <div className="grid md:grid-cols-[1fr_auto] gap-4 items-stretch mb-4">
              <div className="rounded-[2rem] overflow-hidden shadow-2xl aspect-[16/9] md:aspect-auto">
                <img
                  src="/images/croffle/croffle-station-wide.jpg"
                  alt="The Beyond Scrumptious Live Croffle Station set up at an event"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-[2rem] overflow-hidden shadow-2xl aspect-[9/16] w-full md:w-64 bg-black mx-auto">
                <video
                  controls
                  playsInline
                  preload="metadata"
                  poster="/images/croffle/croffle-video-poster.jpg"
                  className="w-full h-full object-cover"
                >
                  <source src="/videos/croffle-1.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[2/3]">
                <img
                  src="/images/croffle/croffle-variety.jpg"
                  alt="A selection of freshly pressed croffles with different toppings"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[2/3]">
                <img
                  src="/images/croffle/croffle-selection.jpg"
                  alt="Croffles finished with toppings and sauces, served in trays"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[2/3]">
                <img
                  src="/images/croffle/croffle-drizzle-1.jpg"
                  alt="Chocolate sauce being drizzled over a freshly pressed croffle"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[2/3]">
                <img
                  src="/images/croffle/croffle-drizzle-2.jpg"
                  alt="White chocolate sauce being drizzled over a freshly pressed croffle"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          <Reveal className="text-center mb-10">
            <p className="uppercase tracking-[0.4em] text-sm text-[#202b45]/60 mb-6">
              What Our Clients Say
            </p>
          </Reveal>
          <TestimonialsSlideshow />
        </div>
      </section>

      <SectionSeam color="#8992a3" />

      {/* SECTION 6 — HOW IT WORKS (booking process) */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
              How It Works
            </p>
            <h2 className="heading-font text-4xl md:text-6xl">
              From Enquiry To Event
            </h2>
          </Reveal>

          <RevealGroup className="grid md:grid-cols-2 gap-8" stagger={0.08}>
            {bookingSteps.map((item) => (
              <RevealItem
                key={item.step}
                className="bg-[#161f36] rounded-[2rem] p-10 shadow-xl flex gap-6"
              >
                <span className="heading-font text-4xl text-[#f8f8f8]/20 shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="heading-font text-2xl mb-3">{item.title}</h3>
                  <p className="leading-7 text-[#f8f8f8]/70">{item.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* SECTION 7 — EVENT REQUIREMENTS */}
      <section className="bg-[#cfd7e2] text-[#202b45] py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-14">
            <p className="uppercase tracking-[0.4em] text-sm text-[#202b45]/60 mb-6">
              Good To Know
            </p>
            <h2 className="heading-font text-4xl md:text-6xl">
              Planning Your Event
            </h2>
          </Reveal>

          <RevealGroup className="grid sm:grid-cols-2 gap-4 mb-10" stagger={0.06}>
            {requirements.map((req) => (
              <RevealItem
                key={req}
                className="bg-white rounded-2xl p-6 flex items-start gap-3"
              >
                <span className="text-[#202b45]/40 mt-0.5">&bull;</span>
                <span className="text-[#202b45]/80 leading-6">{req}</span>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="text-center text-[#202b45]/70 max-w-2xl mx-auto">
            <p className="mb-2">
              Based in Harrow, we travel to events across London and beyond —
              travel requirements are considered as part of your individual quote.
            </p>
            <p>
              Want to personalise your station further? Custom signage, event
              logo plaques and branded front boards are available at an
              additional charge — just ask when enquiring.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 8 — FAQ */}
      <section className="py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
              FAQ
            </p>
            <h2 className="heading-font text-4xl md:text-6xl">
              Frequently Asked Questions
            </h2>
          </Reveal>

          <RevealGroup className="space-y-6" stagger={0.04}>
            {faqs.map((item) => (
              <RevealItem
                key={item.question}
                className="bg-[#161f36] rounded-[2rem] p-8 shadow-xl"
                y={14}
              >
                <h3 className="heading-font text-xl mb-3">{item.question}</h3>
                <p className="leading-7 text-[#f8f8f8]/70">{item.answer}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <SectionSeam color="#8992a3" />

      {/* SECTION 9 — FINAL CTA */}
      <section className="py-28 px-6 text-center">
        <Reveal className="max-w-3xl mx-auto">
          <p className="logo-font text-3xl md:text-4xl mb-6 text-[#cfd7e2]">
            Beyond Scrumptious
          </p>

          <h2 className="heading-font text-4xl md:text-6xl leading-tight mb-8">
            Let&apos;s Make Your Event
            <br />
            Extra Special.
          </h2>

          <p className="text-lg leading-8 text-[#f8f8f8]/70 mb-10 max-w-2xl mx-auto">
            Tell us about your event, your preferred dessert station and your
            guest numbers. We&apos;ll help you find the right package for your
            celebration.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mb-10">
            <TapLink
              href="/contact"
              className="px-12 py-6 rounded-full bg-[#f8f8f8] text-[#202b45] text-base font-medium uppercase tracking-[0.2em] hover:bg-[#cfd7e2] hover:-translate-y-0.5 transition shadow-xl shadow-black/20"
            >
              Request A Quote
            </TapLink>
            <TapLink
              href="https://wa.me/447933903000"
              target="_blank"
              className="px-12 py-6 rounded-full border border-[#f8f8f8]/40 text-base uppercase tracking-[0.2em] hover:bg-[#f8f8f8]/10 transition"
            >
              WhatsApp Us
            </TapLink>
          </div>

          <p className="text-sm text-[#f8f8f8]/50 max-w-xl mx-auto">
            Also planning the cake? See our{' '}
            <a href="/cakes" className="underline hover:text-white">
              eggless custom cakes
            </a>{' '}
            or{' '}
            <a href="/desserts" className="underline hover:text-white">
              dessert tables
            </a>
            .
          </p>
        </Reveal>
      </section>

      <Footer />
    </main>
  )
}
