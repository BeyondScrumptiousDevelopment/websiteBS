'use client'

import { useEffect, useState } from 'react'

const DISMISS_KEY = 'diwali_popup_dismissed'
// After this date the popup stops showing, regardless of dismissal state.
const PROMO_END = new Date('2026-11-09T00:00:00')

export default function DiwaliPopup() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (new Date() >= PROMO_END) return

    try {
      if (localStorage.getItem(DISMISS_KEY)) return
    } catch {
      // localStorage unavailable — fall through and show once
    }

    const timer = setTimeout(() => setVisible(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  function dismiss() {
    setVisible(false)
    try {
      localStorage.setItem(DISMISS_KEY, '1')
    } catch {
      // ignore
    }
  }

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center bg-black/70 px-6"
      onClick={dismiss}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm bg-[#1b1712] border border-[#c9973f]/40 rounded-[2rem] overflow-hidden shadow-2xl"
      >
        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/40 text-[#f8f8f8] flex items-center justify-center hover:bg-black/60 transition"
        >
          ×
        </button>

        <img
          src="/images/diwali/cupcakes-1.jpg"
          alt="Naturally Sweet Cupcakes for Diwali"
          className="w-full h-48 object-cover"
        />

        <div className="p-8 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-[#c9973f] mb-3">
            Diwali 2026 ✨
          </p>
          <h2 className="heading-font text-3xl text-[#f3e3c3] mb-3">
            Naturally Sweet Cupcakes
          </h2>
          <p className="text-sm text-[#f8f8f8]/70 mb-6 leading-6">
            No added refined sugar, sweetened naturally with dates. Kulfi,
            Vanilla &amp; Chocolate — pickup 7th–8th November, Harrow.
          </p>

          <a
            href="/diwali"
            className="block w-full px-8 py-4 rounded-full bg-[#c9973f] text-[#1b1712] font-semibold uppercase tracking-[0.15em] text-sm hover:bg-[#f3e3c3] transition mb-3"
          >
            Order Your Box
          </a>
          <button
            onClick={dismiss}
            className="text-xs text-[#f8f8f8]/50 hover:text-[#f8f8f8]/80 transition"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  )
}
