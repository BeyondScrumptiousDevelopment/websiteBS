import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'
import GallerySlideshow from '../../components/GallerySlideshow'

const toppings = [
  'Oreo Crumbs',
  'Biscoff Crumbs',
  'Mini Marshmallows',
  'Sprinkles',
  'Kunafa',
  'Fresh Chopped Strawberries',
  'Smarties',
  'Homemade Cake Pieces',
  'Nuts (Pistachios or Hazelnuts)',
]

const sauces = [
  'Milk Chocolate',
  'White Chocolate',
  'Biscoff Sauce',
  'Mango Sauce',
  'Pistachio Sauce',
  'Chocolate Hazelnut Sauce',
]

const packages = [
  { name: 'Classic', detail: '2 toppings + 2 sauces' },
  { name: 'Deluxe', detail: '4 toppings + 4 sauces' },
  { name: 'Signature', detail: '6 toppings + 6 sauces' },
]

export const metadata = {
  title: 'Live Desserts | Beyond Scrumptious',
  description:
    'Live Mini Pancake Station — freshly made mini pancakes cooked live at your event, with a choice of toppings and sauces, plus custom options on request.',
}

export default function LiveDessertsPage() {
  return (
    <main className="bg-[#202b45] min-h-screen text-[#f8f8f8]">
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

          <h1 className="heading-font text-5xl md:text-8xl leading-tight mb-10">
            Live Dessert.
            <br />
            Live Reactions.
            <br />
            Live Joy.
          </h1>

          <p className="max-w-4xl mx-auto text-lg md:text-xl leading-8 text-[#f8f8f8]/70 mb-12">
            Our Live Mini Pancake Station brings fluffy, eggless mini
            pancakes to your event — cooked fresh on-site and served with
            your choice of toppings and sauces.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="/contact"
              className="px-12 py-6 rounded-full bg-[#f8f8f8] text-[#202b45] text-base font-medium uppercase tracking-[0.2em] hover:bg-[#cfd7e2] hover:-translate-y-0.5 transition shadow-xl shadow-black/20"
            >
              Enquire Now
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
        title="Live Desserts In Action"
      />

      {/* PACKAGES */}
      <section id="packages" className="bg-[#cfd7e2] text-[#202b45] py-32 px-6 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-[#202b45]/60 mb-6">
              Packages
            </p>
            <h2 className="heading-font text-5xl md:text-7xl">
              Classic, Deluxe & Signature
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className="bg-white rounded-[2rem] p-10 shadow-xl text-center"
              >
                <h3 className="heading-font text-3xl mb-4">{pkg.name}</h3>
                <p className="text-[#202b45]/70 leading-7">{pkg.detail}</p>
              </div>
            ))}
          </div>

          <p className="text-center mt-10 text-[#202b45]/60 uppercase tracking-[0.2em] text-sm">
            Get in touch for a custom quote
          </p>
        </div>
      </section>

      {/* TOPPINGS & SAUCES */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
          <div>
            <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
              The Toppings Bar
            </p>

            <h2 className="heading-font text-5xl md:text-6xl mb-10">
              Current Toppings
            </h2>

            <div className="grid grid-cols-2 gap-4 text-lg text-[#f8f8f8]/80">
              {toppings.map((t) => (
                <div key={t}>{t}</div>
              ))}
            </div>
          </div>

          <div>
            <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
              Sauces Selection
            </p>

            <h2 className="heading-font text-5xl md:text-6xl mb-10">
              Current Sauces
            </h2>

            <div className="grid grid-cols-2 gap-4 text-lg text-[#f8f8f8]/80">
              {sauces.map((s) => (
                <div key={s}>{s}</div>
              ))}
            </div>
          </div>
        </div>

        <p className="max-w-3xl mx-auto text-center mt-16 text-[#cfd7e2]/70 leading-7">
          Don't see what you're after? Custom toppings and sauces can often
          be arranged on request — just let us know when you enquire.
        </p>
      </section>

      {/* GUEST COUNT / LOGISTICS */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
              Good To Know
            </p>
            <h2 className="heading-font text-4xl md:text-6xl">
              Guest Numbers & Setup
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#161f36] rounded-[2rem] p-10 shadow-xl">
              <h3 className="heading-font text-2xl mb-4">Guest Count</h3>
              <p className="leading-8 text-[#f8f8f8]/70">
                There's no minimum number of guests. For smaller events, a
                minimum booking charge applies. Get in touch and we'll
                provide a quote based on your event.
              </p>
            </div>

            <div className="bg-[#161f36] rounded-[2rem] p-10 shadow-xl">
              <h3 className="heading-font text-2xl mb-4">Space & Setup</h3>
              <p className="leading-8 text-[#f8f8f8]/70">
                We generally need approximately 6ft of table space and power
                within approximately 4.5m. Setup takes approximately 45–60
                minutes.
              </p>
            </div>

            <div className="bg-[#161f36] rounded-[2rem] p-10 shadow-xl">
              <h3 className="heading-font text-2xl mb-4">Travel</h3>
              <p className="leading-8 text-[#f8f8f8]/70">
                Live dessert services can travel outside London — get in
                touch with your location for a quote.
              </p>
            </div>

            <div className="bg-[#161f36] rounded-[2rem] p-10 shadow-xl">
              <h3 className="heading-font text-2xl mb-4">
                Dietary Requirements
              </h3>
              <p className="leading-8 text-[#f8f8f8]/70">
                Vegan pancakes are cooked on the same griddle as standard
                pancakes unless a separate arrangement is agreed in writing,
                and dairy cross-contact cannot be guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="bg-[#cfd7e2] text-[#202b45] py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="logo-font text-3xl md:text-4xl mb-6">
            Beyond Scrumptious
          </p>

          <h2 className="heading-font text-5xl md:text-7xl leading-tight mb-10">
            Book Your Live
            <br />
            Pancake Experience
          </h2>

          <p className="text-lg leading-8 text-[#202b45]/70 mb-12">
            Let's make your event extra sweet — live and in the moment.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="/contact"
              className="px-12 py-6 rounded-full bg-[#202b45] text-[#f8f8f8] text-base font-medium uppercase tracking-[0.2em] hover:bg-[#8992a3] hover:-translate-y-0.5 transition shadow-xl"
            >
              Enquire Now
            </a>
            <a
              href="https://wa.me/447933903000"
              target="_blank"
              className="px-12 py-6 rounded-full border border-[#202b45]/30 text-base uppercase tracking-[0.2em] hover:bg-[#202b45]/10 transition"
            >
              WhatsApp Us
            </a>
            <a
              href="mailto:hello@beyondscrumptious.com"
              className="px-12 py-6 rounded-full border border-[#202b45]/30 text-base uppercase tracking-[0.2em] hover:bg-[#202b45]/10 transition"
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
