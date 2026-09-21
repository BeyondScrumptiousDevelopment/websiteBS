import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'

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
  title: 'Cakes | Beyond Scrumptious',
  description:
    'Custom eggless, gelatine-free cakes for all occasions, plus cupcakes — Beyond Scrumptious, Harrow, London.',
}

export default function CakesPage() {
  return (
    <main className="bg-[#202b45] min-h-screen text-[#f8f8f8]">
      <Navbar />
      <WhatsAppButton />

      {/* HERO */}
      <section className="pt-40 pb-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
            Cakes for All Occasions
          </p>

          <h1 className="heading-font text-5xl md:text-8xl leading-tight mb-8">
            Cakes
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl leading-8 text-[#f8f8f8]/70">
            Every cake is made to order and eggless from top to bottom —
            whether it's a birthday, wedding, or any celebration in between.
          </p>
        </div>
      </section>

      {/* FLAVOURS */}
      <section className="bg-[#cfd7e2] text-[#202b45] py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.4em] text-sm text-[#202b45]/60 mb-6">
              Current Flavours
            </p>
            <h2 className="heading-font text-4xl md:text-6xl">
              Pick Your Favourite
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {flavours.map((flavour) => (
              <div
                key={flavour}
                className="bg-white rounded-2xl py-6 px-4 text-center shadow-md heading-font text-lg"
              >
                {flavour}
              </div>
            ))}
          </div>

          <p className="text-center mt-10 text-[#202b45]/70 max-w-2xl mx-auto">
            Vegan cakes are available in certain flavours only — vegan
            availability is confirmed at the time of booking.
          </p>
        </div>
      </section>

      {/* CUSTOMISATION */}
      <section className="py-28 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-[#161f36] rounded-[2rem] p-10 shadow-xl">
            <h3 className="heading-font text-3xl mb-4">Fully Customisable</h3>
            <p className="leading-8 text-[#f8f8f8]/70">
              Send us your inspiration or reference images and we'll build
              your cake around your requirements — every design is made to
              order, not picked from a fixed catalogue.
            </p>
          </div>

          <div className="bg-[#161f36] rounded-[2rem] p-10 shadow-xl">
            <h3 className="heading-font text-3xl mb-4">Lead Time</h3>
            <p className="leading-8 text-[#f8f8f8]/70">
              Please allow approximately 1 week for cake orders. Last-minute
              orders may be possible depending on availability — get in
              touch and we'll let you know.
            </p>
          </div>
        </div>
      </section>

      {/* CUPCAKES */}
      <section className="bg-[#cfd7e2] text-[#202b45] py-28 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-sm text-[#202b45]/60 mb-6">
            Also Available
          </p>

          <h2 className="heading-font text-4xl md:text-6xl mb-8">
            Cupcakes
          </h2>

          <p className="max-w-3xl mx-auto text-lg leading-8 text-[#202b45]/70 mb-6">
            Available in a range of box quantities and flavour combinations,
            with deluxe flavours available at an additional charge. Lead
            time is approximately 1 week.
          </p>

          <p className="text-sm uppercase tracking-[0.2em] text-[#202b45]/50">
            Eggless • Gelatine-Free • Customisable
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center">
        <h2 className="heading-font text-4xl md:text-6xl mb-8">
          Ready To Order?
        </h2>
        <p className="text-[#f8f8f8]/70 max-w-2xl mx-auto mb-10 leading-8">
          Get in touch for a custom quote — tell us your flavour, design and
          event date.
        </p>
        <a
          href="/contact"
          className="inline-block px-10 py-5 rounded-full bg-[#f8f8f8] text-[#202b45] text-sm uppercase tracking-[0.2em] hover:bg-[#cfd7e2] transition"
        >
          Enquire Now
        </a>
      </section>

      <Footer />
    </main>
  )
}
