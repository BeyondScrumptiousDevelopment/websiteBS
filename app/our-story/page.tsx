import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'
import { Reveal } from '../../components/motion/Reveal'
import { TapLink } from '../../components/motion/TapLink'
import BrandCurve from '../../components/BrandCurve'

export const metadata = {
  title: 'Our Story | Beyond Scrumptious',
  description:
    'Beyond Scrumptious is an eggless cake and dessert business based in Harrow, serving celebrations and events across London.',
  alternates: {
    canonical: '/our-story',
  },
  openGraph: {
    title: 'Our Story | Beyond Scrumptious',
    description:
      'Beyond Scrumptious is an eggless cake and dessert business based in Harrow, serving celebrations and events across London.',
    url: 'https://www.beyondscrumptious.com/our-story',
  },
}

export default function OurStoryPage() {
  return (
    <main className="bs-brand bg-[#D8E8F4] min-h-screen text-[#19253F]">
      <BreadcrumbJsonLd items={[{ name: 'Our Story', path: '/our-story' }]} />
      <Navbar />
      <WhatsAppButton />

      <section className="relative overflow-hidden pt-40 pb-32 px-6">
        <BrandCurve side="left" />
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <p className="uppercase tracking-[0.4em] text-sm text-[#3F5478]/80 mb-6 text-center">
              Beyond Scrumptious
            </p>

            <h1 className="heading-font text-5xl md:text-7xl mb-16 text-center">
              Our <span className="bs-accent">Story</span>
            </h1>
          </Reveal>

          <Reveal className="space-y-8 text-lg leading-8 text-[#19253F]/80" delay={0.1}>
            <p>
              Beyond Scrumptious began in April 2021, out of a genuine
              enjoyment of making cakes, creating dessert tables and
              exploring the creative side of desserts. In October 2021, it
              officially became a business — at age 16.
            </p>

            <p>
              What started as something made for fun grew into a proper
              business. In 2025, live desserts were introduced, and Beyond
              Scrumptious began moving further into events.
            </p>

            <p>
              What keeps it going is the love of creating interesting and
              creative things — seeing people's reactions, watching guests
              enjoy the desserts, and meeting new people along the way.
            </p>

            <p>
              Looking ahead, the goal is to keep expanding the live dessert
              side of the business and take on bigger events.
            </p>
          </Reveal>

          <Reveal className="text-center mt-16">
            <TapLink
              href="/contact"
              className="inline-block px-10 py-5 rounded-[2px] bg-[#19253F] text-[#F3F8FB] text-sm uppercase tracking-[0.2em] hover:bg-[#3F5478] transition"
            >
              Request Your Quote
            </TapLink>
          </Reveal>
        </div>
      </section>

      <Footer />
    </main>
  )
}
