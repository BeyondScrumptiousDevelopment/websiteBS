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
    <main className="bg-[#202b45] min-h-screen text-[#f8f8f8] flex flex-col">
      <Navbar />

      <section className="flex-1 flex items-center justify-center px-6 py-32 text-center">
        <div className="max-w-xl mx-auto">
          <p className="logo-font text-4xl md:text-5xl mb-6 text-[#cfd7e2]">
            Beyond Scrumptious
          </p>

          <h1 className="heading-font text-7xl md:text-8xl mb-6">404</h1>

          <p className="text-lg leading-8 text-[#f8f8f8]/70 mb-12">
            We couldn&apos;t find the page you were looking for. It may have
            been moved, renamed, or no longer exists.
          </p>

          <a
            href="/"
            className="inline-block px-12 py-6 rounded-full bg-[#f8f8f8] text-[#202b45] text-base font-medium uppercase tracking-[0.2em] hover:bg-[#cfd7e2] hover:-translate-y-0.5 transition shadow-xl shadow-black/20"
          >
            Back To Homepage
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
