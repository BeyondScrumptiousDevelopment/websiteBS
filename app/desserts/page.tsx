import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'

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
  title: 'Desserts & Dessert Tables | Beyond Scrumptious',
  description:
    'Individual desserts and styled dessert-table experiences — eggless, gelatine-free, fully customisable.',
}

export default function DessertsPage() {
  return (
    <main className="bg-[#202b45] min-h-screen text-[#f8f8f8]">
      <Navbar />
      <WhatsAppButton />

      {/* HERO */}
      <section className="pt-40 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
            Desserts & Dessert Tables
          </p>

          <h1 className="heading-font text-5xl md:text-7xl leading-tight mb-8">
            Individual Desserts,
            <br />
            Beautifully Styled Tables
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl leading-8 text-[#f8f8f8]/70">
            All of our desserts are eggless and gelatine-free, and every
            order is customisable to your event.
          </p>
        </div>
      </section>

      {/* RANGE */}
      <section className="bg-[#cfd7e2] text-[#202b45] py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-[#202b45]/60 mb-6">
              Our Dessert Range
            </p>
            <h2 className="heading-font text-4xl md:text-6xl">
              Something For Every Table
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {range.map((item) => (
              <div
                key={item.name}
                className="bg-white rounded-[2rem] p-8 shadow-md"
              >
                <h3 className="heading-font text-2xl mb-3">{item.name}</h3>
                <p className="text-[#202b45]/70 leading-7 mb-3">
                  {item.flavours}
                </p>
                <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.15em] text-[#202b45]/60">
                  <span className="bg-[#cfd7e2] rounded-full px-3 py-1">
                    {item.format}
                  </span>
                  {item.minimum && (
                    <span className="bg-[#cfd7e2] rounded-full px-3 py-1">
                      {item.minimum}
                    </span>
                  )}
                  <span className="bg-[#cfd7e2] rounded-full px-3 py-1">
                    Eggless / Gelatine-Free
                  </span>
                  <span className="bg-[#cfd7e2] rounded-full px-3 py-1">
                    {item.vegan}
                  </span>
                  <span className="bg-[#cfd7e2] rounded-full px-3 py-1">
                    Customisable
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESSERT TABLE EXPERIENCE */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
              The Dessert Table Experience
            </p>
            <h2 className="heading-font text-4xl md:text-6xl">
              Styled To You
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-14">
            <div className="bg-[#161f36] rounded-[2rem] p-10 shadow-xl">
              <h3 className="heading-font text-2xl mb-4">
                You Choose, We Advise
              </h3>
              <p className="leading-8 text-[#f8f8f8]/70">
                Pick your desserts and we'll advise on suitable quantities
                for your guest count — or choose your own selection
                entirely. Styling and decor is built around what you'd like
                and what we're able to provide.
              </p>
            </div>

            <div className="bg-[#161f36] rounded-[2rem] p-10 shadow-xl">
              <h3 className="heading-font text-2xl mb-4">
                Two Service Options
              </h3>
              <p className="leading-8 text-[#f8f8f8]/70 mb-3">
                <strong className="text-white">Setup Only</strong> — we style
                and set up the table before your event.
              </p>
              <p className="leading-8 text-[#f8f8f8]/70">
                <strong className="text-white">
                  Setup + Staying Throughout
                </strong>{' '}
                — we stay to replenish and keep the table stocked
                throughout your event.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="uppercase tracking-[0.3em] text-sm text-[#cfd7e2]/60">
              Delivery is included in every dessert-table quote
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#cfd7e2] text-[#202b45] py-32 px-6 text-center">
        <h2 className="heading-font text-4xl md:text-6xl mb-8">
          Let's Build Your Table
        </h2>
        <p className="max-w-2xl mx-auto mb-10 leading-8 text-[#202b45]/70">
          Enquire for a custom dessert or dessert-table quote.
        </p>
        <a
          href="/contact"
          className="inline-block px-10 py-5 rounded-full bg-[#202b45] text-[#f8f8f8] text-sm uppercase tracking-[0.2em] hover:bg-[#8992a3] transition"
        >
          Enquire Now
        </a>
      </section>

      <Footer />
    </main>
  )
}
