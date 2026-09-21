import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'

export const metadata = {
  title: 'Cookie Policy | Beyond Scrumptious',
  description: 'How Beyond Scrumptious uses cookies on this website.',
}

export default function CookiePolicyPage() {
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
            Cookie Policy
          </h1>

          <div className="space-y-12 text-lg leading-8 text-[#f8f8f8]/80">
            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                Our Approach
              </h2>
              <p>
                This website is hosted on Cloudflare and does not currently
                run any analytics, advertising, or marketing tracking
                tools. We only use the essential technical cookies needed
                to keep the site secure and running properly — there is
                currently nothing non-essential to ask your consent for.
              </p>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                Essential Cookies
              </h2>
              <p>
                Cloudflare, our hosting provider, may set a small number of
                strictly necessary cookies to protect the site from abuse
                and keep it running reliably. These don't track you across
                other websites and can't be switched off, as the site
                can't function securely without them.
              </p>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                Non-Essential Cookies
              </h2>
              <p>
                We don't currently use analytics cookies, advertising
                cookies or embedded third-party trackers. If we introduce
                any of these in future, we'll update this page and ask for
                your consent before they're set, where required by law.
              </p>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                Our Enquiry Form
              </h2>
              <p>
                Our contact form is powered by Formspree. Submitting the
                form does not set tracking cookies on your device — it
                simply sends your enquiry details to us. See our{' '}
                <a href="/privacy-policy" className="underline hover:text-white">
                  Privacy Policy
                </a>{' '}
                for more on how enquiry data is handled.
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
