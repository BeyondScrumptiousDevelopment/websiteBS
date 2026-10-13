import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'
import GallerySlideshow from '../../components/GallerySlideshow'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import ServiceJsonLd from '../../components/ServiceJsonLd'
import { Reveal, RevealGroup, RevealItem } from '../../components/motion/Reveal'
import { TapLink } from '../../components/motion/TapLink'
import SectionSeam from '../../components/motion/SectionSeam'

const standardToppings = ['Oreo Crumbs', 'Biscoff Crumbs', 'Sprinkles', 'Mini Marshmallows', 'Smarties']

const premiumToppings = ['Kunafa', 'Fresh Chopped Strawberries', 'Cake Pieces']

const addOnToppings = ['Pistachio', 'Hazelnuts']

const standardSauces = ['Milk Chocolate', 'White Chocolate', 'Biscoff', 'Mango']

const premiumSauces = ['Cookies & Cream', 'Pistachio', 'Chocolate Hazelnut']

const packages = [
  {
    name: 'Classic',
    detail: '2 toppings + 2 sauces',
    description:
      'Our classic selection of favourite toppings and sauces — perfect if you want to keep things simple while still giving your guests plenty of choice.',
  },
  {
    name: 'Deluxe',
    detail: '4 toppings + 4 sauces',
    description:
      'A wider selection with access to both our standard and premium toppings and sauces. Ideal for events where you want to offer guests more variety.',
    highlight: true,
  },
  {
    name: 'Signature',
    detail: '6 toppings + 6 sauces',
    description:
      'Our most generous package, giving you access to our full selection of toppings and sauces. Perfect for larger celebrations and events where you want the pancake station to be a real feature.',
  },
]

const croffleFeatures = [
  'Croffles freshly pressed at your event',
  'Served warm, finished with your chosen toppings & sauces',
  'Three fixed package options — Classic, Deluxe, Signature',
  'Perfect for weddings, mehndis, birthdays & corporate events',
]

const whyChoose = [
  {
    title: 'Cooked Fresh On-Site',
    description:
      'Our mini pancakes and croffles are cooked and pressed live throughout your booked service, giving your guests a freshly prepared dessert experience.',
  },
  {
    title: 'Something Different',
    description:
      'Add an interactive dessert experience that guests can watch, enjoy and customise.',
  },
  {
    title: 'Made For Your Event',
    description:
      'From intimate family celebrations to large weddings and corporate events, the station can be planned around your event.',
  },
  {
    title: 'Personalised Options',
    description:
      'Add personalised elements to make the station fit your event, theme or branding.',
  },
]

const customisation = [
  {
    title: 'Custom Tabletop Hanging Ring Sign',
    description: 'A personalised sign designed to complement your event styling.',
  },
  {
    title: 'Wedding / Event Logo Tabletop Plaque',
    description: 'Add your wedding, event or company logo to the station.',
  },
  {
    title: 'Custom Machine Front Board',
    description: 'Create a personalised front board designed around your event.',
  },
]

const howItWorks = [
  {
    step: '1',
    title: 'We Set Up',
    description: "We'll arrive ahead of your service and prepare the station ready for your guests.",
  },
  {
    step: '2',
    title: 'Freshly Cooked Or Pressed',
    description: 'Our mini pancakes or croffles are cooked and pressed live on-site throughout your booked service.',
  },
  {
    step: '3',
    title: 'Guests Choose Their Favourites',
    description:
      'Guests can enjoy their pancakes or croffles with the toppings and sauces included in your chosen package.',
  },
  {
    step: '4',
    title: 'We Keep Things Moving',
    description:
      'Our team manages the station throughout service, keeping everything organised while your guests enjoy freshly prepared pancakes.',
  },
]

const perfectFor = [
  {
    title: 'Weddings',
    description: 'A memorable dessert experience for your wedding celebrations.',
  },
  {
    title: 'Mehndis & Family Celebrations',
    description: 'A fun live dessert option for guests of all ages.',
  },
  {
    title: 'Birthdays',
    description: 'Add something interactive and different to your celebration.',
  },
  {
    title: 'Corporate Events',
    description: 'A unique dessert experience for staff, clients and guests.',
  },
  {
    title: 'Private Parties',
    description: "From intimate gatherings to larger celebrations, we'll bring the station to you.",
  },
  {
    title: 'Community Events',
    description: 'A freshly prepared dessert experience for your guests.',
  },
]

const venueRequirements = [
  'Approximately 6ft of table space',
  'Access to a suitable power supply',
  'A suitable area for the station and serving queue',
  'A safe, level setup area',
]

const faqs = [
  {
    question: 'Is there a minimum number of guests?',
    answer:
      'We cater for events of different sizes. Your quote is based on your event requirements, so please get in touch with your guest numbers.',
  },
  {
    question: 'Are the pancakes cooked fresh?',
    answer: 'Yes. Our mini pancakes are cooked live on-site throughout your booked service.',
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
    question: 'Can the station be personalised?',
    answer:
      'Yes. We offer personalised signage, wedding/event logo plaques and custom machine front boards.',
  },
  {
    question: 'How long do you serve for?',
    answer:
      "Service duration depends on your guest numbers and event requirements. We'll recommend a suitable service period when preparing your quote.",
  },
  {
    question: 'Do you travel?',
    answer: 'Yes. We travel across London and beyond. Travel requirements are calculated as part of your individual quote.',
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
  title: 'Live Mini Pancake & Croffle Stations in London | Beyond Scrumptious',
  description:
    'Live Mini Pancake Station and Live Croffle Station for weddings, mehndis, birthdays and corporate events across London. Freshly made eggless desserts, toppings and sauces, cooked on-site.',
  alternates: {
    canonical: '/live-desserts',
  },
  openGraph: {
    title: 'Live Mini Pancake & Croffle Stations in London | Beyond Scrumptious',
    description:
      'Live Mini Pancake Station and Live Croffle Station for weddings, mehndis, birthdays and corporate events across London. Freshly made eggless desserts, toppings and sauces, cooked on-site.',
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

      {/* HERO */}
      <section className="pt-40 pb-24 px-6 text-center relative">
        <Reveal className="max-w-5xl mx-auto">
          <p className="logo-font text-3xl md:text-4xl mb-4 text-[#cfd7e2]">
            Beyond Scrumptious
          </p>

          <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
            Live Mini Pancake Station
          </p>

          <h1 className="heading-font text-5xl md:text-8xl leading-tight mb-6">
            Live Pancake Station
          </h1>

          <p className="text-xl md:text-2xl text-[#f8f8f8]/90 mb-10">
            Freshly cooked. Served live. Made for your event.
          </p>

          <p className="max-w-3xl mx-auto text-lg leading-8 text-[#f8f8f8]/70 mb-4">
            Bring something a little different to your celebration with our
            Live Mini Pancake Station.
          </p>
          <p className="max-w-3xl mx-auto text-lg leading-8 text-[#f8f8f8]/70 mb-4">
            Fresh mini pancakes are cooked on-site and served with a
            selection of delicious toppings and sauces, creating a fun
            dessert experience your guests can enjoy as it&apos;s made.
          </p>
          <p className="max-w-3xl mx-auto text-lg leading-8 text-[#f8f8f8]/70 mb-10">
            Perfect for weddings, mehndis, birthdays, baby showers, corporate
            events, private parties and celebrations.
          </p>

          <p className="heading-font text-2xl md:text-3xl text-[#cfd7e2] mb-10">
            Packages begin at £250.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <TapLink
              href="/contact"
              className="px-12 py-6 rounded-full bg-[#f8f8f8] text-[#202b45] text-base font-medium uppercase tracking-[0.2em] hover:bg-[#cfd7e2] hover:-translate-y-0.5 transition shadow-xl shadow-black/20"
            >
              Enquire For Your Event
            </TapLink>
            <TapLink
              href="#packages"
              className="px-12 py-6 rounded-full border border-[#f8f8f8]/40 text-base uppercase tracking-[0.2em] hover:bg-[#f8f8f8]/10 transition"
            >
              View Packages
            </TapLink>
          </div>

          <p className="mt-10 text-sm text-[#f8f8f8]/60">
            New — also introducing our{' '}
            <a href="#croffle" className="underline hover:text-[#f8f8f8]">
              Live Croffle Station
            </a>
            .
          </p>
        </Reveal>
      </section>

      {/* VIDEOS — full-bleed media showcase */}
      <section className="pb-8">
        <div className="grid md:grid-cols-2">
          <div className="aspect-[9/16] md:aspect-auto md:h-[85vh] bg-black overflow-hidden">
            <video
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            >
              <source src="/videos/live1.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="aspect-[9/16] md:aspect-auto md:h-[85vh] bg-black overflow-hidden">
            <video
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            >
              <source src="/videos/live2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      <GallerySlideshow
        category="live-desserts"
        eyebrow="From The Gallery"
        title="The Live Pancake Station In Action"
      />

      <SectionSeam color="#8992a3" />

      {/* INTRODUCTION */}
      <section className="bg-[#cfd7e2] text-[#202b45] py-32 px-6">
        <Reveal className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-sm text-[#202b45]/60 mb-6">
            The Experience
          </p>
          <h2 className="heading-font text-4xl md:text-6xl leading-tight mb-10">
            More Than Dessert — It&apos;s An Experience
          </h2>

          <p className="text-lg leading-8 text-[#202b45]/70 mb-5">
            Our Live Mini Pancake Station brings freshly cooked mini pancakes
            straight to your guests.
          </p>
          <p className="text-lg leading-8 text-[#202b45]/70 mb-5">
            With the pancakes prepared live on-site and finished with your
            choice of toppings and sauces, it&apos;s a dessert experience
            that&apos;s interactive, fun and made to be enjoyed.
          </p>
          <p className="text-lg leading-8 text-[#202b45]/70">
            Whether you&apos;re planning an intimate celebration or a large
            event, we&apos;ll bring the setup, equipment and serving team
            needed to make the experience run smoothly.
          </p>
        </Reveal>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
              Why Choose A Beyond Scrumptious Live Dessert Station?
            </p>
            <h2 className="heading-font text-4xl md:text-6xl">
              Freshly Made. Served Live.
            </h2>
          </Reveal>

          <RevealGroup className="grid md:grid-cols-2 gap-8">
            {whyChoose.map((item) => (
              <RevealItem
                key={item.title}
                className="bg-[#161f36] rounded-[2rem] p-10 shadow-xl"
              >
                <h3 className="heading-font text-2xl mb-4">{item.title}</h3>
                <p className="leading-8 text-[#f8f8f8]/70">{item.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* LIVE CROFFLE STATION */}
      <section id="croffle" className="py-32 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <Reveal className="max-w-3xl mx-auto text-center mb-14">
            <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
              Live Dessert Stations
            </p>
            <h2 className="heading-font text-4xl md:text-6xl mb-6">
              Introducing Our Live Croffle Station
            </h2>
            <p className="heading-font text-xl md:text-2xl text-[#cfd7e2] mb-8">
              Croissant Meets Waffle.
            </p>

            <p className="text-lg leading-8 text-[#f8f8f8]/70 mb-5">
              The newest addition to the Beyond Scrumptious Live Dessert
              range. Our Live Croffle Station brings together the buttery
              layers of a croissant and the distinctive shape of a waffle,
              pressed fresh until golden and crispy.
            </p>
            <p className="text-lg leading-8 text-[#f8f8f8]/70 mb-5">
              Freshly pressed at your event and finished with your choice of
              toppings and sauces, it&apos;s a live dessert experience
              designed to make your celebration even more special.
            </p>
            <p className="text-lg leading-8 text-[#f8f8f8]/70">
              Perfect for weddings, engagements, mehndis, birthdays,
              corporate events and other special occasions.
            </p>
          </Reveal>

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

          <RevealGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {croffleFeatures.map((feature) => (
              <RevealItem
                key={feature}
                className="bg-[#161f36] rounded-2xl p-6 text-center"
              >
                <p className="leading-6 text-[#f8f8f8]/80 text-sm">
                  {feature}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>

          <Reveal className="max-w-2xl mx-auto text-center">
            <p className="text-[#f8f8f8]/60 leading-7 mb-10">
              Our croffles are eggless. Choose your package — the same
              Classic, Deluxe and Signature options as our Mini Pancake
              Station, with the same{' '}
              <a href="#toppings-sauces" className="underline hover:text-white">
                toppings and sauces
              </a>{' '}
              to choose from.
            </p>
            <TapLink
              href="/contact?enquiry=Live%20Croffle%20Station"
              className="inline-block px-12 py-6 rounded-full bg-[#f8f8f8] text-[#202b45] text-base font-medium uppercase tracking-[0.2em] hover:bg-[#cfd7e2] hover:-translate-y-0.5 transition shadow-xl shadow-black/20"
            >
              Enquire About The Live Croffle Station
            </TapLink>
          </Reveal>
        </div>
      </section>

      <GallerySlideshow
        category="croffle"
        eyebrow="From The Gallery"
        title="The Live Croffle Station In Action"
      />

      {/* PACKAGES */}
      <section id="packages" className="bg-[#cfd7e2] text-[#202b45] py-32 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-[#202b45]/60 mb-6">
              Packages
            </p>
            <h2 className="heading-font text-4xl md:text-6xl mb-6">
              Choose Your Live Dessert Package
            </h2>
            <p className="max-w-2xl mx-auto text-lg leading-8 text-[#202b45]/70">
              The same three packages apply whether you choose the Mini
              Pancake Station or the Croffle Station — from a simple
              selection of favourites to our full premium experience.
            </p>
          </Reveal>

          <RevealGroup className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <RevealItem
                key={pkg.name}
                className={`rounded-[2rem] p-10 shadow-xl text-center flex flex-col ${
                  pkg.highlight
                    ? 'bg-[#202b45] text-[#f8f8f8] md:-translate-y-4 shadow-2xl'
                    : 'bg-white'
                }`}
              >
                <h3 className="heading-font text-3xl mb-2">{pkg.name}</h3>
                <p
                  className={`uppercase tracking-[0.15em] text-sm mb-6 ${
                    pkg.highlight ? 'text-[#cfd7e2]/80' : 'text-[#202b45]/60'
                  }`}
                >
                  {pkg.detail}
                </p>
                <p
                  className={`leading-7 ${
                    pkg.highlight ? 'text-[#f8f8f8]/80' : 'text-[#202b45]/70'
                  }`}
                >
                  {pkg.description}
                </p>
              </RevealItem>
            ))}
          </RevealGroup>

          <div className="text-center mt-16">
            <p className="heading-font text-2xl md:text-3xl mb-4">
              Packages begin at £250.
            </p>
            <p className="text-[#202b45]/70 mb-10">
              Every event is individually quoted based on guest numbers,
              location, service requirements and selected options.
            </p>
            <TapLink
              href="/contact"
              className="inline-block px-12 py-6 rounded-full bg-[#202b45] text-[#f8f8f8] text-base font-medium uppercase tracking-[0.2em] hover:bg-[#8992a3] hover:-translate-y-0.5 transition shadow-xl"
            >
              Request A Quote
            </TapLink>
          </div>
        </div>
      </section>

      {/* TOPPINGS */}
      <section id="toppings-sauces" className="py-32 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
              Toppings
            </p>
            <h2 className="heading-font text-4xl md:text-6xl mb-6">
              Choose Your Toppings
            </h2>
            <p className="max-w-2xl mx-auto text-lg leading-8 text-[#f8f8f8]/70">
              The same toppings are available across both our Mini Pancake
              Station and Croffle Station — mix classic favourites with
              premium selections to suit your event.
            </p>
          </Reveal>

          <RevealGroup className="grid md:grid-cols-3 gap-8">
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

            <RevealItem className="bg-[#161f36] rounded-[2rem] p-10 shadow-xl border border-[#c9973f]/30">
              <p className="uppercase tracking-[0.3em] text-xs text-[#c9973f]/80 mb-6">
                Add-On
              </p>
              <ul className="space-y-3 text-lg text-[#f8f8f8]/85">
                {addOnToppings.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </RevealItem>
          </RevealGroup>

          <p className="max-w-2xl mx-auto text-center mt-10 text-[#f8f8f8]/60 leading-7">
            Premium selections are available depending on your chosen
            package. Add-on toppings can be included with any package for an
            additional charge, confirmed as part of your quote.
          </p>
        </div>
      </section>

      {/* SAUCES */}
      <section className="bg-[#cfd7e2] text-[#202b45] py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-[#202b45]/60 mb-6">
              Sauces
            </p>
            <h2 className="heading-font text-4xl md:text-6xl">
              Drizzle It Your Way
            </h2>
          </Reveal>

          <RevealGroup className="grid md:grid-cols-2 gap-8">
            <RevealItem className="bg-white rounded-[2rem] p-10 shadow-xl">
              <p className="uppercase tracking-[0.3em] text-xs text-[#202b45]/50 mb-6">
                Standard Selection
              </p>
              <ul className="space-y-3 text-lg text-[#202b45]/80">
                {standardSauces.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </RevealItem>

            <RevealItem className="bg-white rounded-[2rem] p-10 shadow-xl border border-[#202b45]/10">
              <p className="uppercase tracking-[0.3em] text-xs text-[#202b45]/50 mb-6">
                Premium Selection
              </p>
              <ul className="space-y-3 text-lg text-[#202b45]/80">
                {premiumSauces.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </RevealItem>
          </RevealGroup>

          <p className="max-w-2xl mx-auto text-center mt-10 text-[#202b45]/60 leading-7">
            Your chosen package determines the number of toppings and sauces
            available and the selection you can choose from.
          </p>
        </div>
      </section>

      {/* CUSTOMISATION */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
              Customisation
            </p>
            <h2 className="heading-font text-4xl md:text-6xl mb-6">
              Make It Yours
            </h2>
            <p className="max-w-2xl mx-auto text-lg leading-8 text-[#f8f8f8]/70">
              Want your pancake or croffle station to feel even more
              personal to your event? We offer a range of optional
              customisation features.
            </p>
          </Reveal>

          <RevealGroup className="grid md:grid-cols-3 gap-8 mb-14">
            {customisation.map((item) => (
              <RevealItem
                key={item.title}
                className="bg-[#161f36] rounded-[2rem] p-10 shadow-xl text-center"
              >
                <h3 className="heading-font text-xl mb-4">{item.title}</h3>
                <p className="leading-7 text-[#f8f8f8]/70">{item.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>

          <div className="text-center">
            <p className="max-w-2xl mx-auto text-[#f8f8f8]/60 leading-7 mb-10">
              Customisation options are available at an additional charge and
              will be included in your individual quote.
            </p>
            <TapLink
              href="/contact"
              className="inline-block px-12 py-6 rounded-full border border-[#f8f8f8]/40 text-base uppercase tracking-[0.2em] hover:bg-[#f8f8f8]/10 transition"
            >
              Ask About Customisation
            </TapLink>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#cfd7e2] text-[#202b45] py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-[#202b45]/60 mb-6">
              How It Works
            </p>
            <h2 className="heading-font text-4xl md:text-6xl">
              How Our Live Dessert Stations Work
            </h2>
          </Reveal>

          <RevealGroup className="grid md:grid-cols-2 gap-8">
            {howItWorks.map((item) => (
              <RevealItem
                key={item.step}
                className="bg-white rounded-[2rem] p-10 shadow-xl flex gap-6"
              >
                <span className="heading-font text-4xl text-[#202b45]/20 shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="heading-font text-2xl mb-3">{item.title}</h3>
                  <p className="leading-7 text-[#202b45]/70">{item.description}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* SERVICE / TRAVEL / VENUE REQUIREMENTS */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
              Good To Know
            </p>
            <h2 className="heading-font text-4xl md:text-6xl">
              Planning Your Event
            </h2>
          </Reveal>

          <RevealGroup className="grid md:grid-cols-3 gap-8">
            <RevealItem className="bg-[#161f36] rounded-[2rem] p-10 shadow-xl">
              <h3 className="heading-font text-2xl mb-4">Service</h3>
              <p className="leading-7 text-[#f8f8f8]/70 mb-4">
                Our service is planned around your guest numbers and event
                requirements.
              </p>
              <p className="leading-7 text-[#f8f8f8]/70">
                For larger events, staffing, equipment and service
                arrangements can be adjusted where required to ensure
                everything runs smoothly. If you have a specific service
                duration or event format in mind, let us know when enquiring
                and we&apos;ll recommend the most suitable setup.
              </p>
            </RevealItem>

            <RevealItem className="bg-[#161f36] rounded-[2rem] p-10 shadow-xl">
              <h3 className="heading-font text-2xl mb-4">Travel</h3>
              <p className="leading-7 text-[#f8f8f8]/70 mb-4">
                Based in Harrow, we can travel to events across London and
                beyond.
              </p>
              <p className="leading-7 text-[#f8f8f8]/70">
                Travel requirements are considered as part of your individual
                quote. Any applicable travel, parking or other venue-related
                requirements will be confirmed before booking.
              </p>
            </RevealItem>

            <RevealItem className="bg-[#161f36] rounded-[2rem] p-10 shadow-xl">
              <h3 className="heading-font text-2xl mb-4">
                Venue Requirements
              </h3>
              <ul className="space-y-2 text-[#f8f8f8]/70 leading-7 mb-4">
                {venueRequirements.map((req) => (
                  <li key={req}>{req}</li>
                ))}
              </ul>
              <p className="leading-7 text-[#f8f8f8]/70">
                For outdoor events, suitable shelter or shade may be required
                depending on the venue and weather conditions. Setup and
                packdown are handled by our team.
              </p>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      {/* PERFECT FOR */}
      <section className="bg-[#cfd7e2] text-[#202b45] py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-[#202b45]/60 mb-6">
              Occasions
            </p>
            <h2 className="heading-font text-4xl md:text-6xl">Perfect For</h2>
          </Reveal>

          <RevealGroup className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {perfectFor.map((item) => (
              <RevealItem
                key={item.title}
                className="bg-white rounded-[2rem] p-10 shadow-xl text-center"
              >
                <h3 className="heading-font text-xl mb-4">{item.title}</h3>
                <p className="leading-7 text-[#202b45]/70">{item.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* FOOD INFORMATION */}
      <section className="py-28 px-6">
        <Reveal className="max-w-3xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
            Food Information
          </p>
          <h2 className="heading-font text-3xl md:text-5xl mb-8">
            Eggless Mini Pancakes &amp; Croffles
          </h2>
          <p className="text-lg leading-8 text-[#f8f8f8]/70 mb-4">
            Our mini pancakes and croffles are both made using eggless
            recipes, making both stations suitable for guests who avoid
            eggs.
          </p>
          <p className="text-lg leading-8 text-[#f8f8f8]/70">
            If you have other dietary requirements, please mention them when
            enquiring so we can discuss what arrangements may be possible.
          </p>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="bg-[#cfd7e2] text-[#202b45] py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-[#202b45]/60 mb-6">
              FAQ
            </p>
            <h2 className="heading-font text-4xl md:text-6xl">
              Common Questions
            </h2>
          </Reveal>

          <RevealGroup className="space-y-6" stagger={0.05}>
            {faqs.map((item) => (
              <RevealItem
                key={item.question}
                className="bg-white rounded-[2rem] p-8 shadow-xl"
                y={14}
              >
                <h3 className="heading-font text-xl mb-3">{item.question}</h3>
                <p className="leading-7 text-[#202b45]/70">{item.answer}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <SectionSeam color="#8992a3" />

      {/* FINAL CTA */}
      <section className="py-32 px-6 text-center">
        <Reveal className="max-w-4xl mx-auto">
          <p className="logo-font text-3xl md:text-4xl mb-6 text-[#cfd7e2]">
            Beyond Scrumptious
          </p>

          <h2 className="heading-font text-4xl md:text-7xl leading-tight mb-8">
            Ready To Add Something
            <br />
            Sweet To Your Event?
          </h2>

          <p className="text-lg leading-8 text-[#f8f8f8]/70 mb-4 max-w-2xl mx-auto">
            Tell us a little about your event and we&apos;ll create a
            personalised quote for your Live Mini Pancake Station or Live
            Croffle Station.
          </p>

          <p className="heading-font text-2xl text-[#cfd7e2] mb-6">
            Packages begin at £250.
          </p>

          <p className="text-sm text-[#f8f8f8]/50 mb-12 max-w-xl mx-auto">
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

          <div className="flex flex-wrap justify-center gap-5">
            <TapLink
              href="/contact"
              className="px-12 py-6 rounded-full bg-[#f8f8f8] text-[#202b45] text-base font-medium uppercase tracking-[0.2em] hover:bg-[#cfd7e2] hover:-translate-y-0.5 transition shadow-xl shadow-black/20"
            >
              Request Your Quote
            </TapLink>
            <TapLink
              href="https://wa.me/447933903000"
              target="_blank"
              className="px-12 py-6 rounded-full border border-[#f8f8f8]/40 text-base uppercase tracking-[0.2em] hover:bg-[#f8f8f8]/10 transition"
            >
              WhatsApp Us
            </TapLink>
            <TapLink
              href="mailto:hello@beyondscrumptious.com"
              className="px-12 py-6 rounded-full border border-[#f8f8f8]/40 text-base uppercase tracking-[0.2em] hover:bg-[#f8f8f8]/10 transition"
            >
              Email Us
            </TapLink>
          </div>
        </Reveal>
      </section>

      <Footer />
    </main>
  )
}
