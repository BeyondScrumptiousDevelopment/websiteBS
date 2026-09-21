'use client'

import { useState } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import WhatsAppButton from '../../components/WhatsAppButton'

const faqGroups = [
  {
    category: 'Cakes & Cupcakes',
    items: [
      {
        question: 'What flavours do you offer?',
        answer:
          'Vanilla, Chocolate, Marble, Lemon, Raspberry, Oreo, Biscoff, Chocolate Orange, Black Forest, Kulfi and Tiramisu.',
      },
      {
        question: 'Can I send an inspiration picture?',
        answer:
          'Yes — send over any inspiration or reference images and we’ll build your cake around them.',
      },
      {
        question: 'Can cakes be customised?',
        answer:
          'Absolutely. Every cake is made to order and customised around your requirements — we don’t work from a fixed catalogue.',
      },
      {
        question: 'Do you offer vegan cakes?',
        answer:
          'Vegan cakes are available in certain flavours only. Vegan availability is confirmed at the time of booking.',
      },
      {
        question: 'How far in advance should I order?',
        answer: 'Please allow approximately 1 week for cake orders.',
      },
      {
        question: 'Do you offer last-minute orders?',
        answer:
          'Last-minute orders may be possible depending on availability — get in touch and we’ll let you know.',
      },
      {
        question:
          'What cupcake quantities/flavour combinations are available?',
        answer:
          'Cupcakes are available in a range of box quantities and flavour combinations. Get in touch to discuss what you need.',
      },
      {
        question: 'Do you offer deluxe cupcake flavours?',
        answer: 'Yes — deluxe flavours are available at an additional charge.',
      },
    ],
  },
  {
    category: 'Desserts & Dessert Tables',
    items: [
      {
        question: 'What desserts do you offer?',
        answer:
          'Cheesecakes, Cake Pots, Traybake Slices, Mini Cakes, Coconut Lamingtons, Mini Doughnuts and Loaves. See our Desserts & Dessert Tables page for the full range.',
      },
      {
        question: 'What are the minimum quantities?',
        answer:
          'Minimums vary by product, generally between 12 and 50 depending on the item — full details are on the Desserts & Dessert Tables page.',
      },
      {
        question: 'Are the products egg-free?',
        answer: 'Yes — all of our products are egg-free.',
      },
      {
        question: 'Are they gelatine-free?',
        answer: 'Yes — all of our products are gelatine-free.',
      },
      {
        question: 'Which options are vegan?',
        answer:
          'Vegan options are available for selected products only — this must be discussed and agreed at booking. Not every flavour or product is vegan.',
      },
      {
        question: 'Can I choose my own dessert selection?',
        answer:
          'Yes — you’re welcome to choose your own selection, or we can advise based on your guest count.',
      },
      {
        question: 'Can you recommend quantities?',
        answer:
          'Yes, we’re happy to advise on suitable quantities for your guest numbers.',
      },
      {
        question: 'Do you provide styling?',
        answer:
          'Yes — styling and decor is based on what you’d like and what we’re able to provide.',
      },
      {
        question: 'Do you offer setup only?',
        answer: 'Yes, a Setup Only service is available for dessert tables.',
      },
      {
        question: 'Can you stay and replenish the table?',
        answer:
          'Yes — our Setup + Staying Throughout option means we stay to replenish and keep the table stocked during your event.',
      },
      {
        question: 'Is delivery included?',
        answer: 'Yes, delivery is included in every dessert-table quote.',
      },
    ],
  },
  {
    category: 'Live Desserts',
    items: [
      {
        question: 'What is included in the mini pancake station?',
        answer:
          'Freshly made, eggless mini pancakes cooked live at your event, served with your choice of toppings and sauces.',
      },
      {
        question: 'What toppings and sauces are available?',
        answer:
          'Toppings: Oreo crumbs, Biscoff crumbs, mini marshmallows, sprinkles, kunafa, fresh chopped strawberries, seasonal fruits and Smarties. Sauces: milk chocolate, white chocolate, Biscoff and mango.',
      },
      {
        question: 'Is there a minimum number of guests?',
        answer:
          'There’s no minimum number of guests. For smaller events, a minimum booking charge applies. Get in touch and we’ll provide a quote based on your event.',
      },
      {
        question: 'How much space is required?',
        answer: 'We generally need approximately 6ft of table space.',
      },
      {
        question: 'Do you need electricity?',
        answer: 'Yes — power is required within approximately 4.5m of the setup.',
      },
      {
        question: 'Do you travel outside London?',
        answer: 'Yes, live dessert services can travel outside London.',
      },
      {
        question: 'How long does setup take?',
        answer: 'Setup takes approximately 45–60 minutes.',
      },
      {
        question: 'Can you accommodate vegan requirements?',
        answer:
          'Vegan pancakes are cooked on the same griddle as standard pancakes unless a separate arrangement is agreed in writing, and dairy cross-contact cannot be guaranteed.',
      },
    ],
  },
  {
    category: 'Booking',
    items: [
      {
        question: 'How do I enquire?',
        answer:
          'Use our enquiry form on the Contact / Enquire page, or reach out via WhatsApp, email or Instagram.',
      },
      {
        question: 'When is payment due?',
        answer:
          'Final payment is normally due 1 week before your event, subject to the specific terms of your booking/quote.',
      },
      {
        question: 'Can I make changes after booking?',
        answer:
          'We’ll always try our best to accommodate changes, but they can’t be guaranteed close to your collection, delivery or event date. See our Terms & Conditions for full details.',
      },
      {
        question: 'What happens if I have an allergy?',
        answer:
          'Please contact us before ordering so we can discuss suitability. While reasonable precautions are taken, we can’t guarantee any product is completely free from allergen cross-contact — see our Allergen Information page.',
      },
      {
        question: 'What are your booking terms?',
        answer: 'Full details are available on our Terms & Conditions page.',
      },
    ],
  },
]

export default function FAQPage() {
  const [open, setOpen] = useState<string | null>('0-0')

  return (
    <main className="bg-[#202b45] min-h-screen text-[#f8f8f8]">
      <Navbar />
      <WhatsAppButton />

      <section className="pt-40 pb-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
              Beyond Scrumptious
            </p>

            <h1 className="heading-font text-5xl md:text-7xl mb-8">
              Frequently Asked Questions
            </h1>

            <p className="max-w-3xl mx-auto text-lg leading-8 text-[#f8f8f8]/70">
              Everything you need to know before placing your order.
            </p>
          </div>

          {faqGroups.map((group, gi) => (
            <div key={group.category} className="mb-16">
              <h2 className="heading-font text-3xl md:text-4xl mb-8 text-[#cfd7e2]">
                {group.category}
              </h2>

              <div className="space-y-6">
                {group.items.map((faq, i) => {
                  const id = `${gi}-${i}`
                  return (
                    <div
                      key={id}
                      className="bg-[#f8f8f8] text-[#202b45] rounded-[2rem] p-8 shadow-xl"
                    >
                      <button
                        onClick={() => setOpen(open === id ? null : id)}
                        className="w-full flex items-center justify-between text-left"
                      >
                        <h3 className="heading-font text-xl md:text-2xl pr-8">
                          {faq.question}
                        </h3>

                        <span className="text-3xl shrink-0">
                          {open === id ? '−' : '+'}
                        </span>
                      </button>

                      {open === id && (
                        <p className="mt-6 leading-8 text-[#202b45]/80 text-lg">
                          {faq.answer}
                        </p>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}

          <div className="text-center mt-4">
            <p className="text-[#f8f8f8]/70 mb-8">
              Didn't find what you're looking for?
            </p>
            <a
              href="/contact"
              className="inline-block px-10 py-5 rounded-full bg-[#f8f8f8] text-[#202b45] text-sm uppercase tracking-[0.2em] hover:bg-[#cfd7e2] transition"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
