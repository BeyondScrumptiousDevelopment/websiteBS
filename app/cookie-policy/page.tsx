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
                This website is hosted on Cloudflare. We use a small number
                of essential cookies to keep the site secure and running
                properly, and — only with your consent — Google Analytics
                to understand how visitors use the site.
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
                can't function securely without them. We also store your
                cookie consent choice itself (accept/decline) in your
                browser so we don't ask again on every visit.
              </p>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                Analytics Cookies (Google Analytics)
              </h2>
              <p>
                With your consent, we use Google Analytics to understand
                how visitors find and use this website — for example, which
                pages are viewed and roughly how visitors arrived here.
                Google Analytics sets cookies that collect information
                anonymised or pseudonymised at the level Google provides;
                we don't use it to individually identify you.
              </p>
              <p className="mt-4">
                Google Analytics only loads after you accept cookies via the
                banner shown on your first visit. If you decline, Google
                Analytics is not loaded and no analytics cookies are set.
                You can change your mind at any time by clearing your
                browser's site data for this website, which will show the
                banner again.
              </p>
              <p className="mt-4">
                See{' '}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white"
                >
                  Google's Privacy Policy
                </a>{' '}
                for how Google processes this data.
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
