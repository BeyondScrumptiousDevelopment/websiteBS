import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import WhatsAppButton from '../../../components/WhatsAppButton'

export const metadata = {
  title: 'Thank You | Beyond Scrumptious',
  description: 'Your enquiry has been sent to Beyond Scrumptious.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function ContactThankYouPage() {
  return (
    <main className="bg-[#202b45] min-h-screen text-[#f8f8f8]">
      <Navbar />
      <WhatsAppButton />
      <section className="pt-48 pb-40 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="heading-font text-4xl md:text-6xl mb-8">
            Thank You!
          </h1>
          <p className="text-lg leading-8 text-[#f8f8f8]/70 mb-4">
            Your enquiry has been sent — we'll get back to you as soon as
            we can.
          </p>
          <p className="text-sm text-[#f8f8f8]/50">
            Please note: submitting an enquiry does not itself confirm a
            booking. Booking is only confirmed once availability has been
            confirmed and the required payment received — see our{' '}
            <a href="/terms" className="underline hover:text-white">
              Terms &amp; Conditions
            </a>
            .
          </p>
          <a
            href="/"
            className="inline-block mt-12 px-10 py-5 rounded-full border border-[#f8f8f8]/30 hover:bg-[#f8f8f8]/10 transition"
          >
            Back to Home
          </a>
        </div>
      </section>
      <Footer />
    </main>
  )
}
