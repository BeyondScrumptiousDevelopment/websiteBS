import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'
import { client } from '../../sanity/lib/client'
import GalleryGrid from './GalleryGrid'

export const runtime = 'edge'
export const revalidate = 0

export const metadata = {
  title: 'Gallery | Beyond Scrumptious',
  description:
    'Handcrafted cakes, desserts, dessert tables and live dessert experiences from Beyond Scrumptious — Harrow, London.',
}

async function getProducts() {
  try {
    return await client.fetch(`
      *[_type == "product"] | order(order asc, _createdAt desc){
        _id,
        caption,
        category,
        image
      }
    `)
  } catch {
    return []
  }
}

export default async function GalleryPage() {
  const products = await getProducts()

  return (
    <main className="bg-[#202b45] min-h-screen text-[#f8f8f8]">
      <Navbar />
      <WhatsAppButton />

      <section className="pt-40 pb-16 px-6 text-center">
        <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
          Our Work
        </p>

        <h1 className="heading-font text-6xl md:text-8xl mb-8">
          Gallery
        </h1>

        <p className="max-w-3xl mx-auto text-lg leading-8 text-[#f8f8f8]/70">
          Handcrafted cakes, desserts, dessert tables and live dessert
          experiences created for celebrations across Harrow, London and
          beyond.
        </p>
      </section>

      <GalleryGrid products={products} />

      <Footer />
    </main>
  )
}
