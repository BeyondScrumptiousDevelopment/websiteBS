'use client'

import { useEffect, useState } from 'react'

const testimonials = [
  {
    quote:
      'Naavyen was so helpful with design suggestions and the taste was out of this world — super moist sponge, perfect sweetness and packed with rich flavour. Everyone couldn’t stop raving about it.',
    name: 'Joti Manji',
  },
  {
    quote:
      'The live pancake station was a huge hit! The pancakes are freshly made, delicious, and both kids and adults enjoyed them. Friendly team, professional and excellent service.',
    name: 'Bhavini Pindoria',
  },
  {
    quote:
      'I have used them a few times now and they have exceeded with excellence every time — from my gender reveal cake to my son’s party pancake station. Always amazing, professional and delicious.',
    name: 'Nikki Patel',
  },
  {
    quote:
      'The cakes were absolutely delicious, beautifully made and loved by both kids and adults. The live pancake station was a huge hit — freshly made pancakes with a great variety of toppings. The team was professional, friendly and well organised, making everything completely stress-free for us.',
    name: 'Priya Rajan Kerai',
  },
  {
    quote:
      'The pancakes were absolutely incredible — freshly made, beautifully presented and genuinely some of the best we’ve ever had. Naavyen was friendly, professional and organised from start to finish, even with a constant queue of excited guests.',
    name: 'Neema Gami',
  },
  {
    quote:
      'The desserts supplied were absolutely delicious and definitely worth recommending!',
    name: 'Bhavna Lakhani',
  },
]

export default function TestimonialsSlideshow() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  function go(i: number) {
    setIndex(((i % testimonials.length) + testimonials.length) % testimonials.length)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative min-h-[280px] sm:min-h-[220px]">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className={`absolute inset-0 transition-opacity duration-700 ${
              i === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="bg-[#f8f8f8] text-[#202b45] rounded-[2rem] p-10 shadow-lg h-full flex flex-col justify-center">
              <p className="leading-7 mb-6 text-lg">&ldquo;{t.quote}&rdquo;</p>
              <h3 className="heading-font text-xl">{t.name}</h3>
              <p className="text-xs uppercase tracking-[0.2em] text-[#202b45]/50">
                Google Review
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-3 mt-8">
        <button
          onClick={() => go(index - 1)}
          aria-label="Previous review"
          className="w-10 h-10 rounded-full border border-[#202b45]/20 flex items-center justify-center hover:bg-[#202b45]/10 transition"
        >
          ‹
        </button>

        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Show review ${i + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? 'w-6 bg-[#202b45]' : 'w-2.5 bg-[#202b45]/25'
              }`}
            />
          ))}
        </div>

        <button
          onClick={() => go(index + 1)}
          aria-label="Next review"
          className="w-10 h-10 rounded-full border border-[#202b45]/20 flex items-center justify-center hover:bg-[#202b45]/10 transition"
        >
          ›
        </button>
      </div>
    </div>
  )
}
