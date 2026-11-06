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
    <main className="bs-brand bg-[#D8E8F4] min-h-screen text-[#19253F]">
      <Navbar />
      <WhatsAppButton />
      <section className="pt-48 pb-40 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <h1 className="heading-font text-4xl md:text-6xl mb-8">
            Thank You!
          </h1>
          <p className="text-lg leading-8 text-[#19253F]/70 mb-4">
            Your enquiry has been sent — we'll get back to you as soon as
            we can.
          </p>
          <p className="text-sm text-[#19253F]/50">
            Please note: submitting an enquiry does not itself confirm a
            booking. Booking is only confirmed once availability has been
            confirmed and the required payment received — see our{' '}
            <a href="/terms" className="underline hover:text-[#19253F]">
              Terms &amp; Conditions
            </a>
            .
          </p>
          <a
            href="/"
            className="inline-block mt-12 px-10 py-5 rounded-[2px] border border-[#19253F]/30 hover:bg-[#19253F]/5 transition"
          >
            Back to Home
          </a>
        </div>
      </section>
      <Footer />
    </main>
  )
}
