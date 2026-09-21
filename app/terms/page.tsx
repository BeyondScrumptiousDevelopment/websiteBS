import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'

export default function TermsPage() {
  return (
    <main className="bg-[#202b45] min-h-screen text-[#f8f8f8]">
      <Navbar />
      <WhatsAppButton />

      <section className="pt-40 pb-32 px-6">
        <div className="max-w-5xl mx-auto">

          <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
            Beyond Scrumptious
          </p>

          <h1 className="heading-font text-5xl md:text-7xl mb-16">
            Terms & Conditions
          </h1>

          <div className="space-y-16 text-[#f8f8f8]/80 leading-8 text-lg">

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                Order Confirmation and Payment
              </h2>

              <p>
                All orders must be confirmed with payment in advance.
              </p>

              <p>
                Payment can be made via cash or bank transfer.
              </p>

              <p>
                Orders are only considered confirmed once payment has been received in full, unless otherwise agreed in writing.
              </p>

              <p>
                Unless otherwise specified, a 50% deposit is required to confirm your booking, with the remaining balance due no later than 7 days before collection or delivery.
              </p>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                Quotes
              </h2>

              <p>
                All quotes provided by Beyond Scrumptious are valid for 7 days from the quoted date.
              </p>

              <p>
                Prices quoted are subject to change after the 7-day validity period.
              </p>

              <p>
                Payment must be made within the validity period to secure the quoted price.
              </p>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                Originality
              </h2>

              <p>
                Beyond Scrumptious prides itself on creating unique and original designs for cakes and desserts.
              </p>

              <p>
                We do not directly copy designs and instead create custom pieces inspired by your vision.
              </p>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                Cancellation Policy
              </h2>

              <p>
                Cancellations must be made in writing via email or WhatsApp at least 7 days before collection or delivery.
              </p>

              <p>
                Cancellations within 7 days incur a 50% cancellation fee.
              </p>

              <p>
                Any custom items already purchased are also chargeable.
              </p>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                Changes to Orders
              </h2>

              <p>
                Any order changes must be communicated at least 48 hours before collection or delivery.
              </p>

              <p>
                We will always try our best to accommodate changes but cannot guarantee last-minute alterations.
              </p>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                Allergies and Dietary Requirements
              </h2>

              <p>
                All products are egg-free and gelatin-free.
              </p>

              <p>
                Customers are responsible for informing us of allergies at the time of ordering.
              </p>

              <p>
                While precautions are taken, we cannot guarantee products are allergen-free.
              </p>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                Pickup and Delivery
              </h2>

              <p>
                Pickup times must be adhered to wherever possible.
              </p>

              <p>
                Once products leave our premises, responsibility transfers to the customer.
              </p>

              <p>
                Delivery may be available subject to location and availability.
              </p>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                Cake Care Instructions
              </h2>

              <p>
                Cakes should be refrigerated upon arrival and removed approximately one hour before cutting.
              </p>

              <p>
                Leftover cake should be stored in an airtight container.
              </p>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                Dessert Tables & Live Dessert Stations
              </h2>

              <p>
                A 50% deposit is required to secure all dessert table and live dessert station bookings.
              </p>

              <p>
                Remaining balances are due 2 weeks before the booking date.
              </p>

              <p>
                Bookings cancelled within 14 days incur a 50% cancellation fee.
              </p>

              <p>
                Any specialty items purchased specifically for your booking are non-refundable.
              </p>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                Changes to Terms
              </h2>

              <p>
                Beyond Scrumptious reserves the right to update these terms and conditions at any time without prior notice.
              </p>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                Contact
              </h2>

              <div className="space-y-2">
                <p>Naavyen Patel</p>
                <p>📧 hello@beyondscrumptious.com</p>
                <p>📞 +44 7933 903000</p>
                <p>📸 @beyond.scrumptious</p>
                <p>🌐 www.beyondscrumptious.com</p>
              </div>
            </div>

            <div className="pt-10 border-t border-white/10">
              <p className="text-sm uppercase tracking-[0.3em] text-[#cfd7e2]/60">
                Last Updated: 15/05/2026
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}