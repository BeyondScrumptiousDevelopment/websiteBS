import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'

export const metadata = {
  title: 'Delivery & Collection | Beyond Scrumptious',
  description: 'Delivery and collection information for Beyond Scrumptious orders.',
}

export default function DeliveryCollectionPage() {
  return (
    <main className="bg-[#202b45] min-h-screen text-[#f8f8f8]">
      <Navbar />
      <WhatsAppButton />

      <section className="pt-40 pb-32 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
            Beyond Scrumptious
          </p>

          <h1 className="heading-font text-5xl md:text-7xl mb-16">
            Delivery & Collection
          </h1>

          <div className="space-y-16 text-lg leading-8 text-[#f8f8f8]/80">
            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                Cakes & Desserts
              </h2>
              <p>
                Collection only — we don't offer delivery for cakes or
                individual desserts. Our collection address is private and
                is shared directly with you once your order is confirmed.
              </p>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                Dessert Tables
              </h2>
              <p>
                Delivery is included within all dessert-table quotes.
              </p>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                Live Desserts
              </h2>
              <p>
                Live dessert services, including the Live Mini Pancake
                Station, can travel outside London. Specific travel
                arrangements are handled through the enquiry and quote
                process.
              </p>
            </div>
          </div>

          <div className="mt-16">
            <a
              href="/contact"
              className="inline-block px-10 py-5 rounded-full bg-[#f8f8f8] text-[#202b45] text-sm uppercase tracking-[0.2em] hover:bg-[#cfd7e2] transition"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
