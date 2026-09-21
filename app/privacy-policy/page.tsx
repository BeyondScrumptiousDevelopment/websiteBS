import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'

export const metadata = {
  title: 'Privacy Policy | Beyond Scrumptious',
  description: 'How Beyond Scrumptious collects and uses your information.',
}

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>

          <div className="space-y-12 text-lg leading-8 text-[#f8f8f8]/80">
            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                Who We Are
              </h2>
              <p>
                Beyond Scrumptious is a sole trader business based in
                Harrow, London. This policy explains what information we
                collect through this website (beyondscrumptious.com), why
                we collect it, and how it's used.
              </p>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                Information We Collect
              </h2>
              <p>
                When you submit an enquiry through our contact form, we
                collect the information you provide — which may include
                your name, email address, phone number, event date, venue,
                guest numbers, order details and any reference images you
                choose to upload.
              </p>
              <p className="mt-4">
                We do not collect payment card details through this
                website. Payment for confirmed orders is arranged directly
                with us.
              </p>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                How We Use Your Information
              </h2>
              <p>
                We use the information you provide solely to respond to
                your enquiry, discuss your order or booking, and provide a
                quote. We don't use your information for marketing unless
                you separately opt in (for example, by following us on
                social media), and we never sell your information to third
                parties.
              </p>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                Third-Party Services We Use
              </h2>
              <p className="mb-4">
                This website is built with the following third-party
                services, each of which processes limited data on our
                behalf:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong className="text-white">Formspree</strong> —
                  processes and delivers enquiry form submissions
                  (including any uploaded reference images) to us by
                  email. See Formspree's own privacy policy for how they
                  handle submitted data.
                </li>
                <li>
                  <strong className="text-white">Sanity</strong> — our
                  content management system, used to store and serve the
                  images shown in our Gallery. It does not process
                  personal data submitted by visitors.
                </li>
                <li>
                  <strong className="text-white">Cloudflare</strong> —
                  hosts this website and provides content delivery and
                  security infrastructure. Cloudflare may process
                  standard technical data (such as IP address) as part of
                  serving the site securely.
                </li>
              </ul>
              <p className="mt-4">
                We don't currently use analytics tools, advertising pixels
                or other tracking services on this website. If that
                changes, this policy — and our Cookie Policy — will be
                updated first.
              </p>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                Data Retention
              </h2>
              <p>
                Enquiry information is kept for as long as reasonably
                needed to respond to your enquiry, fulfil a confirmed
                booking, and meet our accounting and legal obligations.
              </p>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                Your Rights
              </h2>
              <p>
                Under UK data protection law, you can ask us what
                information we hold about you, request that it be
                corrected, or ask us to delete it. To do so, email{' '}
                <a
                  href="mailto:hello@beyondscrumptious.com"
                  className="underline hover:text-white"
                >
                  hello@beyondscrumptious.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                Contact
              </h2>
              <p>
                For any questions about this privacy policy, contact us at{' '}
                <a
                  href="mailto:hello@beyondscrumptious.com"
                  className="underline hover:text-white"
                >
                  hello@beyondscrumptious.com
                </a>
                .
              </p>
            </div>

            <div className="pt-10 border-t border-white/10">
              <p className="text-sm uppercase tracking-[0.3em] text-[#cfd7e2]/60">
                Last Updated: September 2026
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
