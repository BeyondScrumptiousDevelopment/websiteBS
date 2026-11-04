'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'How far in advance should I place my order?',
    answer:
      'We recommend at least 2 weeks in advance for custom cakes and event bookings.',
  },
  {
    question: 'Are all your desserts eggless?',
    answer: 'Yes — every single item is 100% eggless.',
  },
  {
    question: 'What events do you cater for?',
    answer:
      'Weddings, birthdays, mehndis, corporate events and luxury celebrations.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="space-y-6">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="bg-white rounded-[2rem] p-8 shadow-lg cursor-pointer"
          onClick={() => setOpen(open === i ? null : i)}
        >
          <h3 className="heading-font text-2xl text-black">
            {faq.question}
          </h3>

          {open === i && (
            <p className="text-[#19253F]/70 mt-4 leading-8">
              {faq.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}