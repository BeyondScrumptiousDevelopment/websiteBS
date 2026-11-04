import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Page Not Found | Beyond Scrumptious',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <main className="bs-brand bg-[#19253F] min-h-screen text-[#F3F8FB] flex flex-col">
      <Navbar />

      <section className="flex-1 flex items-center justify-center px-6 py-32 text-center">
        <div className="max-w-xl mx-auto">
          <img
            src="/images/logo-mist.png"
            alt="Beyond Scrumptious"
            className="h-10 md:h-12 w-auto mb-6 mx-auto"
          />

          <h1 className="heading-font text-7xl md:text-8xl mb-6">404</h1>

          <p className="text-lg leading-8 text-[#F3F8FB]/70 mb-12">
            We couldn&apos;t find the page you were looking for. It may have
            been moved, renamed, or no longer exists.
          </p>

          <a
            href="/"
            className="inline-block px-12 py-6 rounded-full bg-[#F3F8FB] text-[#19253F] text-base font-medium uppercase tracking-[0.2em] hover:bg-[#D8E8F4] hover:-translate-y-0.5 transition shadow-xl shadow-black/20"
          >
            Back To Homepage
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
