import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { client } from '../sanity/lib/client'
import { urlFor, altTextFor } from '../sanity/lib/image'
import WhatsAppButton from '../components/WhatsAppButton'
import TestimonialsSlideshow from '../components/TestimonialsSlideshow'
import TrustBadges from '../components/TrustBadges'
import CroffleBanner from '../components/CroffleBanner'
import HeroVideo from '../components/HeroVideo'
import ScrollCue from '../components/motion/ScrollCue'
import { Reveal, RevealGroup, RevealItem } from '../components/motion/Reveal'
import { TapLink } from '../components/motion/TapLink'
import SectionSeam from '../components/motion/SectionSeam'
import PopDessert from '../components/motion/PopDessert'

export const runtime = 'edge'
export const revalidate = 0

export const metadata = {
  title: 'Beyond Scrumptious | Eggless Cakes & Desserts in Harrow, London',
  description:
    'Eggless custom cakes, cupcakes, desserts, dessert tables and the Live Mini Pancake Station — handmade in Harrow, serving celebrations and events across London.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Beyond Scrumptious | Eggless Cakes & Desserts in Harrow, London',
    description:
      'Eggless custom cakes, cupcakes, desserts, dessert tables and the Live Mini Pancake Station — handmade in Harrow, serving celebrations and events across London.',
    url: 'https://www.beyondscrumptious.com/',
  },
}

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
      <CroffleBanner />

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center text-center px-6">
        <HeroVideo />

        <div className="absolute inset-0 bg-[#202b45]/60" />

        <div className="relative z-10 max-w-5xl">
          <Reveal delay={0}>
            <p className="uppercase tracking-[0.5em] text-sm mb-6 text-[#f8f8f8]/70">
              Eggless Cakes, Desserts & Live Dessert Experiences
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="logo-font text-7xl md:text-[10rem] leading-[0.9] mb-8">
              Beyond
              <br />
              Scrumptious
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-[#f8f8f8]/80 leading-8 mb-12">
              Handcrafted eggless cakes and desserts, styled dessert tables,
              and live dessert experiences for celebrations, parties, weddings
              and events across Harrow, London and beyond.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap justify-center gap-5">
              <TapLink
                href="/contact"
                className="px-10 py-5 rounded-full bg-[#f8f8f8] text-[#202b45] text-sm uppercase tracking-[0.2em] hover:bg-[#cfd7e2] transition"
              >
                Enquire Now
              </TapLink>
              <TapLink
                href="#offer"
                className="px-10 py-5 rounded-full border border-[#f8f8f8]/40 text-sm uppercase tracking-[0.2em] hover:bg-[#f8f8f8]/10 transition"
              >
                Explore
              </TapLink>
            </div>
          </Reveal>
        </div>

        <ScrollCue targetId="offer" />
      </section>

      {/* POP-UP DESSERTS */}
      <section className="relative py-24 px-6 bg-[#202b45] overflow-hidden">
        <Reveal className="text-center mb-4">
          <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-4">
            Fresh. Hot. Ready To Enjoy.
          </p>
        </Reveal>

        <div className="max-w-4xl mx-auto grid grid-cols-2 gap-6 items-end">
          <PopDessert
            src="/images/popup/pancake-sauce-cutout.webp"
            alt="Mini pancake finished with sauce at the Live Mini Pancake Station"
            className="w-full aspect-[2/3]"
          />
          <PopDessert
            src="/images/popup/croffle-cutout.webp"
            alt="A freshly pressed croffle drizzled with chocolate sauce"
            className="w-full aspect-[2/3]"
            floatDelay={0.6}
          />
        </div>
      </section>

      <TrustBadges />
      <SectionSeam color="#8992a3" />

      {/* WHAT WE OFFER */}
      <section id="offer" className="bg-[#cfd7e2] text-[#202b45] py-28 px-6 scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <p className="uppercase tracking-[0.4em] text-sm text-[#202b45]/60 mb-6 text-center">
              What We Offer
            </p>

            <h2 className="heading-font text-5xl md:text-6xl mb-16 text-center">
              Three Ways We Bring
              <br />
              The Scrumptious
            </h2>
          </Reveal>

          <RevealGroup className="grid md:grid-cols-3 gap-8">
            <RevealItem>
              <TapLink
                href="/cakes"
                className="block rounded-[2rem] bg-[#f8f8f8] p-10 shadow-xl hover:-translate-y-2 transition duration-300"
              >
                <h3 className="heading-font text-3xl mb-4">Cakes & Cupcakes</h3>
                <p className="text-[#202b45]/70 leading-7">
                  Custom eggless cakes for all occasions, plus cupcakes in a
                  range of flavours and box sizes.
                </p>
              </TapLink>
            </RevealItem>

            <RevealItem>
              <TapLink
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
              </TapLink>
            </RevealItem>

            <RevealItem>
              <TapLink
                href="/live-desserts"
                className="block rounded-[2rem] bg-[#f8f8f8] p-10 shadow-xl hover:-translate-y-2 transition duration-300"
              >
                <h3 className="heading-font text-3xl mb-4">Live Desserts</h3>
                <p className="text-[#202b45]/70 leading-7">
                  Our Live Mini Pancake Station, prepared fresh in front of
                  your guests.
                </p>
              </TapLink>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      <SectionSeam color="#8992a3" />

      {/* CREATIVE / VISUAL SECTION */}
      <section className="py-28 px-6 bg-[#202b45]">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6 text-center">
              Our Work
            </p>

            <h2 className="heading-font text-5xl md:text-6xl mb-16 text-center">
              Made To Impress
            </h2>
          </Reveal>

          {featured.length > 0 ? (
            <RevealGroup className="grid md:grid-cols-3 gap-6">
              {featured.map((item: any) => (
                <RevealItem
                  key={item._id}
                  className="rounded-[2rem] overflow-hidden shadow-xl"
                >
                  <img
                    src={urlFor(item.image).width(800).url()}
                    alt={altTextFor(item)}
                    loading="lazy"
                    className="w-full h-auto hover:scale-105 transition duration-500"
                  />
                </RevealItem>
              ))}
            </RevealGroup>
          ) : (
            <p className="text-center text-[#f8f8f8]/50">
              New photos coming soon — see our full gallery below.
            </p>
          )}

          <div className="text-center mt-14">
            <TapLink
              href="/gallery"
              className="inline-block px-10 py-5 rounded-full border border-[#f8f8f8]/30 hover:bg-[#f8f8f8]/10 transition"
            >
              View Full Gallery
            </TapLink>
          </div>
        </div>
      </section>

      <SectionSeam color="#8992a3" />

      {/* EVENTS */}
      <section className="py-32 px-6 bg-[#cfd7e2] text-[#202b45]">
        <Reveal className="max-w-4xl mx-auto text-center">
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
        </Reveal>
      </section>

      <SectionSeam color="#8992a3" />

      {/* LIVE DESSERT FEATURE */}
      <section className="py-32 px-6 bg-[#202b45] text-[#f8f8f8]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <Reveal className="grid grid-cols-2 gap-4 order-2 md:order-1" y={32}>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl aspect-[3/4] col-span-1 row-span-2">
              <img
                src="/images/pancake-2.jpg"
                alt="Fresh mini pancakes cooked live on the griddle"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl aspect-[3/2]">
              <img
                src="/images/pancake-1.jpg"
                alt="Mini pancake finished with sauce at the Live Mini Pancake Station"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal className="order-1 md:order-2" y={32}>
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
              <TapLink
                href="/live-desserts"
                className="px-8 py-4 bg-[#f8f8f8] text-[#202b45] rounded-full hover:bg-[#cfd7e2] transition"
              >
                Explore Live Desserts
              </TapLink>
            </div>
          </Reveal>
        </div>
      </section>

      <SectionSeam color="#8992a3" />

      {/* LIVE CROFFLE STATION FEATURE */}
      <section className="py-32 px-6 bg-[#cfd7e2] text-[#202b45]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <Reveal className="grid grid-cols-2 gap-4" y={32}>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl aspect-[3/4] col-span-1 row-span-2">
              <img
                src="/images/croffle/croffle-drizzle-1.jpg"
                alt="Chocolate sauce being drizzled over a freshly pressed croffle"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-[2rem] overflow-hidden shadow-2xl aspect-[3/2]">
              <img
                src="/images/croffle/croffle-station-wide.jpg"
                alt="The Beyond Scrumptious Live Croffle Station set up at an event"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal y={32}>
            <p className="uppercase tracking-[0.4em] text-sm text-[#202b45]/60 mb-6">
              New — Live Croffle Station
            </p>

            <h2 className="heading-font text-5xl md:text-6xl leading-tight mb-8">
              Croissant
              <br />
              Meets Waffle
            </h2>

            <p className="text-[#202b45]/70 leading-8 text-lg mb-10">
              Our newest live dessert station — croffles pressed fresh at
              your event until golden and crispy, then finished with your
              choice of toppings and sauces. Eggless, and bookable with the
              same packages as our Mini Pancake Station.
            </p>

            <div className="flex gap-4 flex-wrap">
              <TapLink
                href="/croffle"
                className="px-8 py-4 bg-[#202b45] text-[#f8f8f8] rounded-full hover:bg-[#161f36] transition"
              >
                Explore The Croffle Station
              </TapLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-[#cfd7e2] text-[#202b45] py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <Reveal>
            <p className="uppercase tracking-[0.4em] text-sm text-[#202b45]/60 mb-6">
              Client Love
            </p>

            <h2 className="heading-font text-5xl md:text-6xl mb-16">
              Sweet Words
            </h2>
          </Reveal>

          <TestimonialsSlideshow />
        </div>
      </section>

      <SectionSeam color="#8992a3" />

      {/* OUR STORY TEASER */}
      <section className="py-32 px-6 bg-[#202b45] text-[#f8f8f8]">
        <Reveal className="max-w-4xl mx-auto text-center">
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

          <TapLink
            href="/our-story"
            className="inline-block px-10 py-5 rounded-full border border-[#f8f8f8]/30 hover:bg-[#f8f8f8]/10 transition"
          >
            Read Our Story
          </TapLink>
        </Reveal>
      </section>

      <SectionSeam color="#8992a3" />

      {/* FINAL CTA */}
      <section id="contact" className="py-32 px-6 bg-[#cfd7e2] text-[#202b45]">
        <Reveal className="max-w-4xl mx-auto text-center">
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

          <TapLink
            href="/contact"
            className="inline-block px-10 py-5 rounded-full bg-[#202b45] text-[#f8f8f8] text-sm uppercase tracking-[0.2em] hover:bg-[#8992a3] transition"
          >
            Enquire Now
          </TapLink>
        </Reveal>
      </section>

      <Footer />
    </main>
  )
}
