import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { client } from '../sanity/lib/client'
import { urlFor, altTextFor } from '../sanity/lib/image'
import WhatsAppButton from '../components/WhatsAppButton'
import TestimonialsSlideshow from '../components/TestimonialsSlideshow'
import TrustBadges from '../components/TrustBadges'
import DiwaliPopup from '../components/DiwaliPopup'
import HeroVideo from '../components/HeroVideo'

export const runtime = 'edge'
export const revalidate = 0

async function getFeatured() {
  try {
    return await client.fetch(`
      *[_type == "product" && featured == true] | order(order asc, _createdAt desc)[0...6]{
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

export default async function HomePage() {
  const featured = await getFeatured()

  return (
    <main className="bg-[#202b45] text-[#f8f8f8] overflow-hidden">
      <Navbar />
      <WhatsAppButton />
      <DiwaliPopup />

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center px-6">
        <HeroVideo />

        <div className="absolute inset-0 bg-[#202b45]/60" />

        <div className="relative z-10 max-w-5xl">
          <p className="uppercase tracking-[0.5em] text-sm mb-6 text-[#f8f8f8]/70">
            Cakes, Desserts & Live Dessert Experiences
          </p>

          <h1 className="logo-font text-7xl md:text-[10rem] leading-[0.9] mb-8">
            Beyond
            <br />
            Scrumptious
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#f8f8f8]/80 leading-8 mb-12">
            Handcrafted eggless cakes and desserts, styled dessert tables,
            and live dessert experiences for celebrations, parties, weddings
            and events across Harrow, London and beyond.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="/contact"
              className="px-10 py-5 rounded-full bg-[#f8f8f8] text-[#202b45] text-sm uppercase tracking-[0.2em] hover:bg-[#cfd7e2] transition"
            >
              Enquire Now
            </a>
            <a
              href="#offer"
              className="px-10 py-5 rounded-full border border-[#f8f8f8]/40 text-sm uppercase tracking-[0.2em] hover:bg-[#f8f8f8]/10 transition"
            >
              Explore
            </a>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* WHAT WE OFFER */}
      <section id="offer" className="bg-[#cfd7e2] text-[#202b45] py-28 px-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-sm text-[#202b45]/60 mb-6 text-center">
            What We Offer
          </p>

          <h2 className="heading-font text-5xl md:text-6xl mb-16 text-center">
            Three Ways We Bring
            <br />
            The Scrumptious
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <a
              href="/cakes"
              className="block rounded-[2rem] bg-[#f8f8f8] p-10 shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <h3 className="heading-font text-3xl mb-4">Cakes & Cupcakes</h3>
              <p className="text-[#202b45]/70 leading-7">
                Custom cakes for all occasions, plus cupcakes in a range of
                flavours and box sizes.
              </p>
            </a>

            <a
              href="/desserts"
              className="block rounded-[2rem] bg-[#f8f8f8] p-10 shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <h3 className="heading-font text-3xl mb-4">
                Desserts & Dessert Tables
              </h3>
              <p className="text-[#202b45]/70 leading-7">
                Individual desserts and beautifully styled dessert-table
                experiences for any celebration.
              </p>
            </a>

            <a
              href="/live-desserts"
              className="block rounded-[2rem] bg-[#f8f8f8] p-10 shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <h3 className="heading-font text-3xl mb-4">Live Desserts</h3>
              <p className="text-[#202b45]/70 leading-7">
                Our Live Mini Pancake Station, prepared fresh in front of
                your guests.
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* CREATIVE / VISUAL SECTION */}
      <section className="py-28 px-6 bg-[#202b45]">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6 text-center">
            Our Work
          </p>

          <h2 className="heading-font text-5xl md:text-6xl mb-16 text-center">
            Made To Impress
          </h2>

          {featured.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-6">
              {featured.map((item: any) => (
                <div
                  key={item._id}
                  className="rounded-[2rem] overflow-hidden shadow-xl"
                >
                  <img
                    src={urlFor(item.image).width(800).url()}
                    alt={altTextFor(item)}
                    className="w-full h-auto hover:scale-105 transition duration-500"
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-[#f8f8f8]/50">
              New photos coming soon — see our full gallery below.
            </p>
          )}

          <div className="text-center mt-14">
            <a
              href="/gallery"
              className="inline-block px-10 py-5 rounded-full border border-[#f8f8f8]/30 hover:bg-[#f8f8f8]/10 transition"
            >
              View Full Gallery
            </a>
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="py-32 px-6 bg-[#cfd7e2] text-[#202b45]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-sm text-[#202b45]/60 mb-6">
            Celebrations & Events
          </p>

          <h2 className="heading-font text-5xl md:text-7xl leading-tight mb-8">
            For Every Kind
            <br />
            Of Celebration
          </h2>

          <p className="text-lg leading-8 text-[#202b45]/70">
            Birthdays, weddings, mehndis, baby showers, corporate events and
            everything in between — every order is built around what you
            need for your occasion.
          </p>
        </div>
      </section>

      {/* LIVE DESSERT FEATURE */}
      <section className="py-32 px-6 bg-[#202b45] text-[#f8f8f8]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="grid grid-cols-2 gap-4 order-2 md:order-1">
            <div className="rounded-[2rem] overflow-hidden shadow-2xl aspect-[3/4] col-span-1 row-span-2">
              <img
                src="/images/pancake-2.jpg"
                alt="Fresh mini pancakes cooked live on the griddle"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl aspect-[3/2]">
              <img
                src="/images/pancake-1.jpg"
                alt="Mini pancake finished with sauce at the Live Mini Pancake Station"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
              Live Mini Pancake Station
            </p>

            <h2 className="heading-font text-5xl md:text-6xl leading-tight mb-8">
              Live Desserts,
              <br />
              Live Reactions
            </h2>

            <p className="text-[#f8f8f8]/70 leading-8 text-lg mb-10">
              Freshly made mini pancakes, cooked live in front of your
              guests and served with your choice of toppings and sauces.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="/live-desserts"
                className="px-8 py-4 bg-[#f8f8f8] text-[#202b45] rounded-full hover:bg-[#cfd7e2] transition"
              >
                Explore Live Desserts
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#cfd7e2] text-[#202b45] py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-sm text-[#202b45]/60 mb-6">
            Client Love
          </p>

          <h2 className="heading-font text-5xl md:text-6xl mb-16">
            Sweet Words
          </h2>

          <TestimonialsSlideshow />
        </div>
      </section>

      {/* OUR STORY TEASER */}
      <section className="py-32 px-6 bg-[#202b45] text-[#f8f8f8]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
            Our Story
          </p>

          <h2 className="heading-font text-5xl md:text-7xl leading-tight mb-8">
            From A Love Of Baking
            <br />
            To A Proper Business
          </h2>

          <p className="text-lg leading-8 text-[#f8f8f8]/70 mb-10">
            Beyond Scrumptious began in April 2021 from a genuine enjoyment
            of making cakes and exploring the creative side of desserts. It
            became an official business in October 2021 — and in 2025, live
            desserts joined the menu.
          </p>

          <a
            href="/our-story"
            className="inline-block px-10 py-5 rounded-full border border-[#f8f8f8]/30 hover:bg-[#f8f8f8]/10 transition"
          >
            Read Our Story
          </a>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contact" className="py-32 px-6 bg-[#cfd7e2] text-[#202b45]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-sm text-[#202b45]/60 mb-6">
            Let's Create Something Scrumptious
          </p>

          <h2 className="heading-font text-5xl md:text-7xl leading-tight mb-10">
            Enquire For A
            <br />
            Custom Quote
          </h2>

          <p className="text-[#202b45]/70 text-lg leading-8 max-w-2xl mx-auto mb-14">
            Tell us about your event and we'll get back to you with a quote
            tailored to what you need.
          </p>

          <a
            href="/contact"
            className="inline-block px-10 py-5 rounded-full bg-[#202b45] text-[#f8f8f8] text-sm uppercase tracking-[0.2em] hover:bg-[#8992a3] transition"
          >
            Enquire Now
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
