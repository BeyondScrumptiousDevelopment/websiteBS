import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'
import GallerySlideshow from '../../components/GallerySlideshow'

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

const whyChoose = [
  {
    title: 'Cooked Fresh On-Site',
    description:
      'Our mini pancakes are cooked live throughout your booked service, giving your guests a freshly prepared dessert experience.',
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
    title: 'Pancakes Are Cooked Fresh',
    description: 'Our mini pancakes are cooked live on-site throughout your booked service.',
  },
  {
    step: '3',
    title: 'Guests Choose Their Favourites',
    description:
      'Guests can enjoy their pancakes with the toppings and sauces included in your chosen package.',
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
  title: 'Live Pancake Station | Beyond Scrumptious',
  description:
    'Make your event extra special with our Live Mini Pancake Station. Freshly cooked mini pancakes, delicious toppings and sauces, and personalised options for weddings, parties, mehndis and events.',
}

export default function LiveDessertsPage() {
  return (
    <main className="bg-[#202b45] min-h-screen text-[#f8f8f8]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <WhatsAppButton />

      {/* HERO */}
      <section className="pt-40 pb-24 px-6 text-center">
        <div className="max-w-5xl mx-auto">
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
            <a
              href="/contact"
              className="px-12 py-6 rounded-full bg-[#f8f8f8] text-[#202b45] text-base font-medium uppercase tracking-[0.2em] hover:bg-[#cfd7e2] hover:-translate-y-0.5 transition shadow-xl shadow-black/20"
            >
              Enquire For Your Event
            </a>
            <a
              href="#packages"
              className="px-12 py-6 rounded-full border border-[#f8f8f8]/40 text-base uppercase tracking-[0.2em] hover:bg-[#f8f8f8]/10 transition"
            >
              View Packages
            </a>
          </div>
        </div>
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

      {/* INTRODUCTION */}
      <section className="bg-[#cfd7e2] text-[#202b45] py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
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
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
              Why Choose The Live Pancake Station?
            </p>
            <h2 className="heading-font text-4xl md:text-6xl">
              Freshly Made. Served Live.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="bg-[#161f36] rounded-[2rem] p-10 shadow-xl"
              >
                <h3 className="heading-font text-2xl mb-4">{item.title}</h3>
                <p className="leading-8 text-[#f8f8f8]/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="packages" className="bg-[#cfd7e2] text-[#202b45] py-32 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-[#202b45]/60 mb-6">
              Packages
            </p>
            <h2 className="heading-font text-4xl md:text-6xl mb-6">
              Choose Your Pancake Experience
            </h2>
            <p className="max-w-2xl mx-auto text-lg leading-8 text-[#202b45]/70">
              Our packages are designed to give you different levels of
              choice, from a simple selection of favourites to our full
              premium experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
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
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="heading-font text-2xl md:text-3xl mb-4">
              Packages begin at £250.
            </p>
            <p className="text-[#202b45]/70 mb-10">
              Every event is individually quoted based on guest numbers,
              location, service requirements and selected options.
            </p>
            <a
              href="/contact"
              className="inline-block px-12 py-6 rounded-full bg-[#202b45] text-[#f8f8f8] text-base font-medium uppercase tracking-[0.2em] hover:bg-[#8992a3] hover:-translate-y-0.5 transition shadow-xl"
            >
              Request A Quote
            </a>
          </div>
        </div>
      </section>

      {/* TOPPINGS */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
              Toppings
            </p>
            <h2 className="heading-font text-4xl md:text-6xl mb-6">
              Choose Your Toppings
            </h2>
            <p className="max-w-2xl mx-auto text-lg leading-8 text-[#f8f8f8]/70">
              We offer a mix of classic favourites and premium selections so
              you can create a combination that suits your event.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#161f36] rounded-[2rem] p-10 shadow-xl">
              <p className="uppercase tracking-[0.3em] text-xs text-[#cfd7e2]/70 mb-6">
                Standard Selection
              </p>
              <ul className="space-y-3 text-lg text-[#f8f8f8]/85">
                {standardToppings.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>

            <div className="bg-[#161f36] rounded-[2rem] p-10 shadow-xl border border-[#cfd7e2]/20">
              <p className="uppercase tracking-[0.3em] text-xs text-[#cfd7e2]/70 mb-6">
                Premium Selection
              </p>
              <ul className="space-y-3 text-lg text-[#f8f8f8]/85">
                {premiumToppings.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>

            <div className="bg-[#161f36] rounded-[2rem] p-10 shadow-xl border border-[#c9973f]/30">
              <p className="uppercase tracking-[0.3em] text-xs text-[#c9973f]/80 mb-6">
                Add-On
              </p>
              <ul className="space-y-3 text-lg text-[#f8f8f8]/85">
                {addOnToppings.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>

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
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-[#202b45]/60 mb-6">
              Sauces
            </p>
            <h2 className="heading-font text-4xl md:text-6xl">
              Drizzle It Your Way
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-[2rem] p-10 shadow-xl">
              <p className="uppercase tracking-[0.3em] text-xs text-[#202b45]/50 mb-6">
                Standard Selection
              </p>
              <ul className="space-y-3 text-lg text-[#202b45]/80">
                {standardSauces.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-[2rem] p-10 shadow-xl border border-[#202b45]/10">
              <p className="uppercase tracking-[0.3em] text-xs text-[#202b45]/50 mb-6">
                Premium Selection
              </p>
              <ul className="space-y-3 text-lg text-[#202b45]/80">
                {premiumSauces.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </div>

          <p className="max-w-2xl mx-auto text-center mt-10 text-[#202b45]/60 leading-7">
            Your chosen package determines the number of toppings and sauces
            available and the selection you can choose from.
          </p>
        </div>
      </section>

      {/* CUSTOMISATION */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
              Customisation
            </p>
            <h2 className="heading-font text-4xl md:text-6xl mb-6">
              Make It Yours
            </h2>
            <p className="max-w-2xl mx-auto text-lg leading-8 text-[#f8f8f8]/70">
              Want your pancake station to feel even more personal to your
              event? We offer a range of optional customisation features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {customisation.map((item) => (
              <div
                key={item.title}
                className="bg-[#161f36] rounded-[2rem] p-10 shadow-xl text-center"
              >
                <h3 className="heading-font text-xl mb-4">{item.title}</h3>
                <p className="leading-7 text-[#f8f8f8]/70">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="max-w-2xl mx-auto text-[#f8f8f8]/60 leading-7 mb-10">
              Customisation options are available at an additional charge and
              will be included in your individual quote.
            </p>
            <a
              href="/contact"
              className="inline-block px-12 py-6 rounded-full border border-[#f8f8f8]/40 text-base uppercase tracking-[0.2em] hover:bg-[#f8f8f8]/10 transition"
            >
              Ask About Customisation
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#cfd7e2] text-[#202b45] py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-[#202b45]/60 mb-6">
              How It Works
            </p>
            <h2 className="heading-font text-4xl md:text-6xl">
              How Our Live Pancake Station Works
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {howItWorks.map((item) => (
              <div
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE / TRAVEL / VENUE REQUIREMENTS */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
              Good To Know
            </p>
            <h2 className="heading-font text-4xl md:text-6xl">
              Planning Your Event
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#161f36] rounded-[2rem] p-10 shadow-xl">
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
            </div>

            <div className="bg-[#161f36] rounded-[2rem] p-10 shadow-xl">
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
            </div>

            <div className="bg-[#161f36] rounded-[2rem] p-10 shadow-xl">
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
            </div>
          </div>
        </div>
      </section>

      {/* PERFECT FOR */}
      <section className="bg-[#cfd7e2] text-[#202b45] py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-[#202b45]/60 mb-6">
              Occasions
            </p>
            <h2 className="heading-font text-4xl md:text-6xl">Perfect For</h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {perfectFor.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-[2rem] p-10 shadow-xl text-center"
              >
                <h3 className="heading-font text-xl mb-4">{item.title}</h3>
                <p className="leading-7 text-[#202b45]/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOD INFORMATION */}
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
            Food Information
          </p>
          <h2 className="heading-font text-3xl md:text-5xl mb-8">
            Eggless Mini Pancakes
          </h2>
          <p className="text-lg leading-8 text-[#f8f8f8]/70 mb-4">
            Our mini pancakes are made using an eggless recipe, making the
            station suitable for guests who avoid eggs.
          </p>
          <p className="text-lg leading-8 text-[#f8f8f8]/70">
            If you have other dietary requirements, please mention them when
            enquiring so we can discuss what arrangements may be possible.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#cfd7e2] text-[#202b45] py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-[#202b45]/60 mb-6">
              FAQ
            </p>
            <h2 className="heading-font text-4xl md:text-6xl">
              Common Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((item) => (
              <div
                key={item.question}
                className="bg-white rounded-[2rem] p-8 shadow-xl"
              >
                <h3 className="heading-font text-xl mb-3">{item.question}</h3>
                <p className="leading-7 text-[#202b45]/70">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
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
            personalised quote for your Live Mini Pancake Station.
          </p>

          <p className="heading-font text-2xl text-[#cfd7e2] mb-12">
            Packages begin at £250.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="/contact"
              className="px-12 py-6 rounded-full bg-[#f8f8f8] text-[#202b45] text-base font-medium uppercase tracking-[0.2em] hover:bg-[#cfd7e2] hover:-translate-y-0.5 transition shadow-xl shadow-black/20"
            >
              Request Your Quote
            </a>
            <a
              href="https://wa.me/447933903000"
              target="_blank"
              className="px-12 py-6 rounded-full border border-[#f8f8f8]/40 text-base uppercase tracking-[0.2em] hover:bg-[#f8f8f8]/10 transition"
            >
              WhatsApp Us
            </a>
            <a
              href="mailto:hello@beyondscrumptious.com"
              className="px-12 py-6 rounded-full border border-[#f8f8f8]/40 text-base uppercase tracking-[0.2em] hover:bg-[#f8f8f8]/10 transition"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
