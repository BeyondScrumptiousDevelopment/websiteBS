import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'

export const metadata = {
  title: 'Allergen Information | Beyond Scrumptious',
  description: 'Allergen information for Beyond Scrumptious products.',
}

export default function AllergenInformationPage() {
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
            Allergen Information
          </h1>

          <div className="space-y-8 text-lg leading-8 text-[#f8f8f8]/80">
            <p>All of our products are egg-free and gelatine-free.</p>

            <p>
              Vegan options are available for selected products/options
              only, and must be discussed and agreed at the time of
              booking. Not every flavour or product is vegan.
            </p>

            <p>
              An allergen matrix is available — please ask us if you'd like
              to see it before ordering.
            </p>

            <p>
              Our kitchen handles allergens including milk, wheat/gluten,
              soy, peanuts, tree nuts and sesame. Reasonable precautions
              are taken, but our products cannot be guaranteed completely
              free from allergen cross-contact.
            </p>

            <p>
              If you or a guest has a severe allergy, please contact us
              before ordering so we can discuss suitability together.
            </p>

            <p>
              Our live mini pancake station uses shared cooking equipment.
              Vegan pancakes are cooked on the same griddle as standard
              pancakes unless a separate arrangement is agreed in writing,
              and dairy cross-contact cannot be guaranteed.
            </p>
          </div>

          <div className="mt-16">
            <a
              href="/contact"
              className="inline-block px-10 py-5 rounded-full bg-[#f8f8f8] text-[#202b45] text-sm uppercase tracking-[0.2em] hover:bg-[#cfd7e2] transition"
            >
              Ask A Question
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
