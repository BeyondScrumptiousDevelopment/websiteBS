import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'

export const metadata = {
  title: 'Terms & Conditions | Beyond Scrumptious',
  description: 'Terms & Conditions for Beyond Scrumptious orders and bookings.',
}

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

          <h1 className="heading-font text-5xl md:text-7xl mb-6">
            Terms & Conditions
          </h1>

          <p className="text-sm uppercase tracking-[0.3em] text-[#cfd7e2]/60 mb-16">
            Last Updated: August 2026
          </p>

          <div className="space-y-6 text-[#f8f8f8]/80 leading-8 text-lg mb-16">
            <p>
              These Terms &amp; Conditions apply to all orders and bookings
              placed with Beyond Scrumptious, including cakes, cupcakes,
              desserts, dessert tables, live mini pancake stations and
              related food and event services.
            </p>
            <p>
              By accepting a quotation, paying a requested deposit or
              payment, signing a Booking Agreement where applicable, or
              otherwise confirming a booking with Beyond Scrumptious, you
              confirm that you have had the opportunity to read, understand
              and agree to these Terms &amp; Conditions.
            </p>
            <p>
              These Terms &amp; Conditions should be read together with the
              applicable quotation, invoice, booking confirmation and,
              where applicable, Booking Agreement.
            </p>
          </div>

          <div className="space-y-16 text-[#f8f8f8]/80 leading-8 text-lg">

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                1. Bookings &amp; Payment
              </h2>
              <div className="space-y-3">
                <p><strong className="text-white">1.1</strong> Orders and bookings are only confirmed once Beyond Scrumptious has accepted the order or booking, availability has been confirmed and the required payment has been received.</p>
                <p><strong className="text-white">1.2</strong> An enquiry, quotation or expression of interest does not guarantee availability. Acceptance of a quotation alone does not necessarily constitute confirmation of a booking.</p>
                <p><strong className="text-white">1.3</strong> A deposit or full payment may be required to confirm a booking. The amount required will be stated in the quotation, invoice, Booking Agreement or booking confirmation.</p>
                <p><strong className="text-white">1.4</strong> For orders with a total value of less than £100, Beyond Scrumptious may request full payment at the time of booking or payment in full before collection, delivery or the event date.</p>
                <p><strong className="text-white">1.5</strong> For larger bookings, a deposit may be required to secure the booking, with the remaining balance due by the payment date stated in the quotation, invoice or Booking Agreement.</p>
                <p><strong className="text-white">1.6</strong> Failure to make payment by the stated due date may result in the booking being cancelled. Where a booking is cancelled due to non-payment, Beyond Scrumptious reserves the right to recover reasonable costs or losses directly resulting from the cancellation, subject to applicable law.</p>
                <p><strong className="text-white">1.7</strong> Payment may be made by bank transfer or another payment method agreed in advance.</p>
              </div>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                2. Quotations
              </h2>
              <div className="space-y-3">
                <p><strong className="text-white">2.1</strong> All quotations are valid for 7 days from the date issued, unless otherwise stated.</p>
                <p><strong className="text-white">2.2</strong> Prices and availability are not guaranteed until the booking has been confirmed.</p>
                <p><strong className="text-white">2.3</strong> Beyond Scrumptious reserves the right to amend pricing or availability after the quotation validity period has expired. Where a quotation has expired, a new quotation may be issued based on current pricing and availability.</p>
                <p><strong className="text-white">2.4</strong> Once a booking has been confirmed, the agreed price will not be changed unless the customer requests additional products or services, changes guest numbers or service requirements, or additional costs arise which were not included in the original quotation and are subsequently agreed.</p>
              </div>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                3. Bespoke Products &amp; Handmade Designs
              </h2>
              <div className="space-y-3">
                <p><strong className="text-white">3.1</strong> All products are handmade and individually prepared.</p>
                <p><strong className="text-white">3.2</strong> Customers may provide inspiration images; however, Beyond Scrumptious does not guarantee exact replicas of another baker's work or designs.</p>
                <p><strong className="text-white">3.3</strong> Designs, colours, decorations, finishes, proportions and presentation may vary slightly due to the handmade nature of our products, availability of materials, seasonal ingredients and supplier differences.</p>
                <p><strong className="text-white">3.4</strong> Where a specific colour, decoration or design element is requested, Beyond Scrumptious will make reasonable efforts to achieve the requested result but cannot guarantee an exact match.</p>
                <p><strong className="text-white">3.5</strong> Minor variations resulting from the handmade nature of the product will not be considered a fault where the product remains substantially consistent with the agreed description.</p>
              </div>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                4. Changes to Orders
              </h2>
              <div className="space-y-3">
                <p><strong className="text-white">4.1</strong> Any changes to an order should be communicated as early as possible. Changes are subject to availability and cannot always be guaranteed.</p>
                <p><strong className="text-white">4.2</strong> Changes requested within 48 hours of cake or dessert collection or delivery cannot be guaranteed.</p>
                <p><strong className="text-white">4.3</strong> Changes requested within 14 days of a dessert table or live mini pancake station booking cannot be guaranteed.</p>
                <p><strong className="text-white">4.4</strong> Changes may result in additional charges where they require additional ingredients, materials, products, labour, personalised items or preparation.</p>
                <p><strong className="text-white">4.5</strong> Changes to guest numbers, menu, package, service duration or other event requirements may affect the price, staffing, quantities and services provided.</p>
                <p><strong className="text-white">4.6</strong> Where a customer requests a significant change to a bespoke order after work or preparation has commenced, Beyond Scrumptious will advise whether the change is possible and whether additional charges apply.</p>
              </div>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                5. Larger &amp; Event Bookings
              </h2>
              <div className="space-y-3">
                <p><strong className="text-white">5.1</strong> For bookings with a total value of £300 or more, or bookings involving live services, dessert tables, specialist venues, substantial bespoke work or significant advance preparation, Beyond Scrumptious may require the customer to complete and sign a separate Booking Agreement.</p>
                <p><strong className="text-white">5.2</strong> The Booking Agreement may record specific details including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Customer information</li>
                  <li>Event date and venue</li>
                  <li>Guest numbers</li>
                  <li>Agreed products and services</li>
                  <li>Service times</li>
                  <li>Setup and pack-down requirements</li>
                  <li>Staffing</li>
                  <li>Delivery and travel arrangements</li>
                  <li>Venue requirements</li>
                  <li>Dietary requirements</li>
                  <li>Total booking value</li>
                  <li>Deposit and payment schedule</li>
                  <li>Other booking-specific requirements</li>
                </ul>
                <p><strong className="text-white">5.3</strong> Where a Booking Agreement is required, the booking may not be considered fully confirmed until the required payment and completed agreement have been received.</p>
                <p><strong className="text-white">5.4</strong> The Booking Agreement forms part of the agreement between Beyond Scrumptious and the customer and should be read together with these Terms &amp; Conditions.</p>
                <p><strong className="text-white">5.5</strong> For smaller orders, Beyond Scrumptious may use the quotation, invoice and acceptance of these Terms &amp; Conditions without requiring a separate Booking Agreement.</p>
              </div>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                6. Cancellation
              </h2>
              <div className="space-y-3 mb-6">
                <p>Cancellation requests must be submitted in writing by email or WhatsApp.</p>
                <p>Cancellation charges will be assessed reasonably, taking into account work already undertaken, costs already incurred, commitments made specifically for the booking and losses that Beyond Scrumptious could not reasonably avoid.</p>
                <p>Beyond Scrumptious will take reasonable steps to reduce its losses where possible.</p>
                <p>Nothing in this section is intended to exclude or restrict any statutory cancellation or consumer rights that apply.</p>
              </div>

              <h3 className="heading-font text-2xl mb-3 text-white">6.1 Cakes &amp; Desserts</h3>
              <div className="space-y-3 mb-6">
                <p>Where a payment has been made to secure a booking, Beyond Scrumptious may retain an appropriate amount of that payment to cover reasonable costs and losses directly resulting from cancellation.</p>
                <p>This may include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Work or preparation already completed</li>
                  <li>Ingredients purchased specifically for the order</li>
                  <li>Personalised items ordered or produced</li>
                  <li>Bespoke decorations</li>
                  <li>Edible prints or cake toppers</li>
                  <li>Specially sourced items</li>
                  <li>Preparation and administration time</li>
                  <li>Other reasonable direct costs that cannot reasonably be recovered or reused</li>
                </ul>
                <p>Where the amount retained is less than the amount already paid, any remaining balance will be refunded where appropriate.</p>
              </div>

              <h3 className="heading-font text-2xl mb-3 text-white">6.2 Personalised &amp; Bespoke Items</h3>
              <div className="space-y-3 mb-6">
                <p>Personalised items, edible prints, cake toppers, bespoke decorations and specially sourced items may be non-refundable once they have been ordered or produced specifically for the customer and cannot reasonably be reused, returned or recovered.</p>
              </div>

              <h3 className="heading-font text-2xl mb-3 text-white">6.3 Dessert Tables &amp; Live Mini Pancake Stations</h3>
              <div className="space-y-3 mb-6">
                <p>Live event bookings require Beyond Scrumptious to reserve the event date, staff, equipment, ingredients, stock, preparation time and operational capacity.</p>
                <p>Cancellation may therefore result in reasonable costs and losses even where the event has not yet taken place.</p>
                <p>If a customer cancels, Beyond Scrumptious may retain or charge an amount reasonably reflecting direct losses arising from the cancellation, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Preparation already undertaken</li>
                  <li>Ingredients or stock purchased specifically for the event</li>
                  <li>Bespoke or personalised items ordered</li>
                  <li>Staffing commitments</li>
                  <li>Equipment reserved for the booking</li>
                  <li>Preparation, administration and planning time</li>
                  <li>Travel or other committed costs</li>
                  <li>The reasonable loss of an opportunity to accept another booking for the same date</li>
                  <li>Other reasonable direct costs or losses resulting from the cancellation</li>
                </ul>
              </div>

              <div className="space-y-3">
                <p><strong className="text-white">6.4</strong> Where Beyond Scrumptious is able to reduce its losses, for example by securing another booking for the same date, this will be taken into account when assessing any cancellation charge. Beyond Scrumptious will not seek to recover the same loss more than once.</p>
                <p><strong className="text-white">6.5</strong> Cancellation charges will be applied reasonably and will not be intended to operate as an unfair financial penalty.</p>
              </div>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                7. Allergies &amp; Dietary Requirements
              </h2>
              <div className="space-y-3">
                <p><strong className="text-white">7.1</strong> All products produced by Beyond Scrumptious are egg-free and gelatine-free.</p>
                <p><strong className="text-white">7.2</strong> Vegan options are available upon request and must be discussed and agreed at the time of booking.</p>
                <p><strong className="text-white">7.3</strong> Customers must clearly communicate all allergies, intolerances and dietary requirements before placing an order.</p>
                <p><strong className="text-white">7.4</strong> Our kitchen handles a variety of allergens, including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Milk</li>
                  <li>Wheat / Gluten</li>
                  <li>Soy</li>
                  <li>Peanuts</li>
                  <li>Tree Nuts</li>
                  <li>Sesame</li>
                </ul>
                <p><strong className="text-white">7.5</strong> Whilst reasonable precautions are taken during preparation, Beyond Scrumptious cannot guarantee an allergen-free environment or guarantee that products are completely free from cross-contact.</p>
                <p><strong className="text-white">7.6</strong> Customers with severe allergies should contact Beyond Scrumptious before ordering so that we can advise whether we are able to safely accommodate their requirements.</p>
                <p><strong className="text-white">7.7</strong> Beyond Scrumptious reserves the right to decline an order where we reasonably believe that a customer's dietary or allergy requirements cannot be safely accommodated.</p>
              </div>

              <h3 className="heading-font text-2xl mt-6 mb-3 text-white">7.8 Live Mini Pancake Stations</h3>
              <div className="space-y-3">
                <p>Mini pancakes are prepared using shared cooking equipment.</p>
                <p>Unless specifically agreed otherwise in writing before the event, vegan pancakes are cooked on the same griddle used for standard pancakes. As a result, Beyond Scrumptious cannot guarantee that vegan pancakes are free from dairy cross-contact.</p>
                <p>Customers requiring vegan or allergen-specific pancakes must communicate this requirement when booking.</p>
              </div>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                8. Collection, Delivery &amp; Product Care
              </h2>

              <h3 className="heading-font text-2xl mb-3 text-white">8.1 Collection</h3>
              <div className="space-y-3 mb-6">
                <p>Customers are responsible for collecting orders at the agreed date and time.</p>
                <p>Collection times should be adhered to wherever possible. If you expect to be late, you must notify Beyond Scrumptious as soon as possible.</p>
                <p>Late collection may affect the quality, freshness or condition of the product. Beyond Scrumptious cannot guarantee that a product collected late will remain in the same condition as it would have been at the agreed collection time.</p>
                <p>Responsibility for the product transfers to the customer once the order has been collected.</p>
              </div>

              <h3 className="heading-font text-2xl mb-3 text-white">8.2 Delivery</h3>
              <div className="space-y-3 mb-6">
                <p>Delivery may be available for an additional charge, subject to availability, location and the requirements of the order.</p>
                <p>The agreed delivery window may be affected by circumstances outside our reasonable control, including traffic, road closures, accidents, adverse weather or other unforeseen circumstances.</p>
                <p>Customers must ensure that someone is available to receive the order at the agreed delivery location.</p>
                <p>If nobody is available to receive the order, additional delivery charges may apply for a second delivery attempt where this is possible.</p>
                <p>Responsibility for the product transfers to the customer once the order has been delivered to the agreed location.</p>
                <p>Beyond Scrumptious cannot accept responsibility for damage caused after delivery, including damage resulting from customer handling, transportation, storage or display.</p>
              </div>

              <h3 className="heading-font text-2xl mb-3 text-white">8.3 Safe Transportation</h3>
              <div className="space-y-3 mb-6">
                <p>Customers collecting cakes are responsible for transporting them safely.</p>
                <p>We recommend:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Placing the cake box on a flat, stable surface</li>
                  <li>Avoiding placing the cake on a car seat where possible</li>
                  <li>Securing the box to prevent sliding</li>
                  <li>Keeping the cake level at all times</li>
                  <li>Avoiding sudden braking or sharp turns</li>
                  <li>Driving carefully and avoiding unnecessary bumps</li>
                  <li>Using air conditioning during warm weather where appropriate</li>
                </ul>
                <p>Where possible, another person should hold or support the cake from underneath rather than placing pressure on the cake box itself.</p>
                <p>Beyond Scrumptious cannot accept responsibility for damage caused during customer transportation.</p>
              </div>

              <h3 className="heading-font text-2xl mb-3 text-white">8.4 Cake Care &amp; Storage</h3>
              <div className="space-y-3">
                <p>Customers must follow any storage and care instructions provided with their order.</p>
                <p>Where advised, cakes should be refrigerated and removed approximately one hour before serving.</p>
                <p>Cakes and desserts should be kept away from direct sunlight, excessive heat and unsuitable environments.</p>
                <p>Beyond Scrumptious cannot accept responsibility for deterioration, melting, damage or other changes caused by incorrect storage, transportation, handling or display after collection or delivery.</p>
                <p>Leftover cake should be stored appropriately in an airtight container where suitable.</p>
              </div>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                9. Event Services
              </h2>
              <div className="space-y-3">
                <p><strong className="text-white">9.1</strong> The quoted package includes the agreed services, products and serving period stated in the quotation or Booking Agreement.</p>
                <p><strong className="text-white">9.2</strong> Setup and pack-down time are separate from the agreed serving period.</p>
                <p><strong className="text-white">9.3</strong> Additional serving time requested on the day is subject to staff availability and may incur an additional charge.</p>
                <p><strong className="text-white">9.4</strong> Whilst every reasonable effort will be made to serve guests efficiently, Beyond Scrumptious cannot guarantee that every guest will be served where:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Guest numbers exceed those originally booked</li>
                  <li>Queues significantly delay service</li>
                  <li>Guests arrive outside the agreed serving period</li>
                  <li>Service is interrupted by circumstances beyond our reasonable control</li>
                  <li>The agreed serving period has ended</li>
                </ul>
                <p><strong className="text-white">9.5</strong> The customer is responsible for ensuring that the number of guests communicated to Beyond Scrumptious is reasonably accurate.</p>
                <p><strong className="text-white">9.6</strong> Mini pancakes are prepared and served fresh during the agreed service period.</p>
                <p><strong className="text-white">9.7</strong> Pancakes are cooked on the same griddle unless a separate arrangement has been agreed in advance.</p>
                <p><strong className="text-white">9.8</strong> Cooking and serving times may vary depending on guest numbers, queue lengths, equipment performance and other circumstances. Beyond Scrumptious will make reasonable efforts to maintain an efficient service throughout the agreed serving period.</p>
              </div>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                10. Venue, Outdoor Events &amp; Equipment
              </h2>

              <h3 className="heading-font text-2xl mb-3 text-white">10.1 Venue Requirements</h3>
              <div className="space-y-3 mb-6">
                <p>For dessert tables and live dessert bookings, the customer is responsible for ensuring that the venue provides suitable:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access for loading and unloading</li>
                  <li>Working and setup space</li>
                  <li>Electricity where required</li>
                  <li>Lighting where reasonably required</li>
                  <li>Parking or loading access where applicable</li>
                  <li>Venue permissions required for the service</li>
                </ul>
              </div>

              <div className="space-y-3">
                <p><strong className="text-white">10.2</strong> The customer must inform Beyond Scrumptious of any venue-specific restrictions, access limitations, loading requirements, security procedures or other relevant requirements before the booking is confirmed.</p>
                <p><strong className="text-white">10.3</strong> Where access, electricity, space or other essential requirements are unavailable upon arrival due to circumstances attributable to the customer or venue, Beyond Scrumptious cannot be held responsible for any resulting reduction, delay or inability to provide the agreed service.</p>
                <p><strong className="text-white">10.4</strong> Parking charges, congestion charges, tolls or other venue-related costs may be included in the quotation or charged separately where agreed in advance.</p>
              </div>

              <h3 className="heading-font text-2xl mt-6 mb-3 text-white">10.5 Outdoor Events</h3>
              <div className="space-y-3 mb-6">
                <p>Outdoor dessert stations must have suitable shelter and protection from rain, excessive heat, direct sunlight and strong winds.</p>
                <p>The customer is responsible for arranging suitable weather protection unless otherwise agreed.</p>
                <p>Beyond Scrumptious reserves the right to suspend, relocate or cease service where weather or environmental conditions present a reasonable risk to food safety, staff safety, customers or equipment.</p>
                <p>Where service cannot safely continue due to conditions beyond our reasonable control, Beyond Scrumptious will use reasonable endeavours to provide an appropriate alternative where possible.</p>
              </div>

              <h3 className="heading-font text-2xl mb-3 text-white">10.6 Equipment</h3>
              <div className="space-y-3">
                <p>All equipment supplied by Beyond Scrumptious remains the property of Beyond Scrumptious at all times.</p>
                <p>Customers must take reasonable care to ensure that equipment is not damaged, moved, tampered with or misused by guests, venue staff or third parties.</p>
                <p>Where equipment is lost or damaged beyond reasonable wear and tear due to the actions or negligence of the customer, guests, venue staff or other third parties under the customer's responsibility, reasonable repair or replacement costs may be charged.</p>
              </div>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                11. Photography &amp; Marketing
              </h2>
              <div className="space-y-3">
                <p><strong className="text-white">11.1</strong> Beyond Scrumptious may photograph completed cakes, desserts, dessert tables and event setups for use in our portfolio, website and social media.</p>
                <p><strong className="text-white">11.2</strong> We will make reasonable efforts to avoid photographing identifiable guests without appropriate permission.</p>
                <p><strong className="text-white">11.3</strong> If you do not wish your order or event setup to be photographed for marketing purposes, please notify Beyond Scrumptious in writing before the order is completed or the event takes place.</p>
              </div>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                12. Circumstances Beyond Our Control
              </h2>
              <div className="space-y-3">
                <p><strong className="text-white">12.1</strong> Beyond Scrumptious shall not be liable for any delay, interruption or failure to perform its obligations where this arises from circumstances beyond our reasonable control.</p>
                <p><strong className="text-white">12.2</strong> This may include, but is not limited to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Severe weather</li>
                  <li>Road closures</li>
                  <li>Accidents</li>
                  <li>Vehicle breakdown</li>
                  <li>Illness or injury</li>
                  <li>Power outages</li>
                  <li>Supplier failures</li>
                  <li>Venue closure or restrictions</li>
                  <li>Government restrictions or requirements</li>
                  <li>Other unforeseen circumstances beyond our reasonable control</li>
                </ul>
                <p><strong className="text-white">12.3</strong> Where reasonably practicable, Beyond Scrumptious will use reasonable endeavours to rearrange the booking or offer an alternative date or reasonable alternative solution.</p>
                <p><strong className="text-white">12.4</strong> Nothing in this section removes any statutory rights a customer may have.</p>
              </div>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                13. Quality &amp; Complaints
              </h2>
              <div className="space-y-3">
                <p><strong className="text-white">13.1</strong> Beyond Scrumptious takes pride in the quality of its products and services.</p>
                <p><strong className="text-white">13.2</strong> If you have a concern about an order, you should contact Beyond Scrumptious as soon as reasonably possible after collection, delivery or the event.</p>
                <p><strong className="text-white">13.3</strong> Where appropriate, customers may be asked to provide photographs or other relevant information to help us investigate the issue.</p>
                <p><strong className="text-white">13.4</strong> Nothing in these Terms &amp; Conditions limits or removes any statutory rights you may have under applicable UK consumer law.</p>
              </div>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                14. Liability &amp; Consumer Rights
              </h2>
              <div className="space-y-3">
                <p><strong className="text-white">14.1</strong> Nothing in these Terms &amp; Conditions excludes or limits any liability or rights that cannot legally be excluded or limited under UK law.</p>
                <p><strong className="text-white">14.2</strong> This includes statutory rights relating to the quality of goods and services and any liability which cannot lawfully be excluded.</p>
                <p><strong className="text-white">14.3</strong> Beyond Scrumptious shall not be liable for indirect or consequential losses, loss of profits or loss of business except where such liability cannot legally be excluded.</p>
                <p><strong className="text-white">14.4</strong> Nothing in these Terms &amp; Conditions excludes or limits liability for death or personal injury caused by negligence, fraud or fraudulent misrepresentation, or any other liability which cannot legally be excluded.</p>
                <p><strong className="text-white">14.5</strong> Nothing in these Terms &amp; Conditions is intended to remove or restrict any statutory rights you have as a consumer.</p>
                <p><strong className="text-white">14.6</strong> Where applicable, goods will be of satisfactory quality, fit for purpose and as described, and services will be provided with reasonable care and skill, in accordance with applicable UK consumer law.</p>
                <p><strong className="text-white">14.7</strong> If any provision of these Terms &amp; Conditions is found to be unfair or unenforceable under applicable law, that provision will be interpreted or modified to the minimum extent necessary to make it lawful, and the remaining provisions will continue to apply.</p>
              </div>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                15. Amendments to these Terms &amp; Conditions
              </h2>
              <div className="space-y-3">
                <p><strong className="text-white">15.1</strong> Beyond Scrumptious may update these Terms &amp; Conditions from time to time.</p>
                <p><strong className="text-white">15.2</strong> Any updated Terms &amp; Conditions will apply to bookings confirmed after the updated version has been published.</p>
                <p><strong className="text-white">15.3</strong> The version applicable to a booking will be the version in force on the date the booking is confirmed.</p>
                <p><strong className="text-white">15.4</strong> Changes made after a booking has been confirmed will not retrospectively alter the terms agreed for that booking unless required by law or agreed with the customer.</p>
              </div>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                16. Acceptance of Terms
              </h2>
              <div className="space-y-3">
                <p><strong className="text-white">16.1</strong> By accepting a quotation, paying the requested deposit or payment, signing a Booking Agreement where applicable, or otherwise confirming a booking with Beyond Scrumptious, you confirm that:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You have had the opportunity to read these Terms &amp; Conditions</li>
                  <li>You understand and agree to them</li>
                  <li>You have provided accurate information relating to your order or event</li>
                  <li>You understand that the specific details of your booking will be set out in your quotation, invoice and/or Booking Agreement</li>
                </ul>
                <p><strong className="text-white">16.2</strong> For bookings requiring a Booking Agreement, the customer may be required to sign or electronically accept the agreement before the booking is confirmed.</p>
                <p><strong className="text-white">16.3</strong> A copy of these Terms &amp; Conditions will be made available to the customer before payment and can be provided upon request.</p>
              </div>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                17. Governing Law
              </h2>
              <div className="space-y-3">
                <p><strong className="text-white">17.1</strong> These Terms &amp; Conditions are governed by the laws of England and Wales.</p>
                <p><strong className="text-white">17.2</strong> Any dispute will be subject to the jurisdiction of the courts of England and Wales, subject to any mandatory consumer rights that may apply.</p>
              </div>
            </div>

            <div>
              <h2 className="heading-font text-3xl mb-4 text-white">
                Contact
              </h2>

              <div className="space-y-2">
                <p>Beyond Scrumptious</p>
                <p>Naavyen Patel</p>
                <p>📧 hello@beyondscrumptious.com</p>
                <p>📞 +44 7933 903000</p>
                <p>🌐 www.beyondscrumptious.com</p>
              </div>
            </div>

            <div className="pt-10 border-t border-white/10">
              <p className="text-sm uppercase tracking-[0.3em] text-[#cfd7e2]/60">
                Last Updated: August 2026
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
