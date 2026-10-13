'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { TapLink } from './motion/TapLink'

const DISMISS_KEY = 'croffle_popup_dismissed'

/** Homepage popup announcing the Live Croffle Station launch. */
export default function CroffleBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[300] flex items-center justify-center bg-black/70 px-6"
      onClick={dismiss}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm bg-[#161f36] border border-[#cfd7e2]/20 rounded-[2rem] overflow-hidden shadow-2xl"
      >
        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/40 text-[#f8f8f8] flex items-center justify-center hover:bg-black/60 transition"
        >
          ×
        </button>

        <div className="p-8 text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-[#cfd7e2]/70 mb-3">
            New At Beyond Scrumptious
          </p>
          <h2 className="heading-font text-3xl text-[#f8f8f8] mb-3">
            Live Croffle Station
          </h2>
          <p className="text-sm text-[#f8f8f8]/70 mb-6 leading-6">
            Croissant meets waffle — freshly pressed at your event and
            finished with your choice of toppings and sauces. Eggless, and
            now bookable alongside our Live Mini Pancake Station.
          </p>

          <TapLink
            href="/croffle"
            className="block w-full px-8 py-4 rounded-full bg-[#f8f8f8] text-[#202b45] font-semibold uppercase tracking-[0.15em] text-sm hover:bg-[#cfd7e2] transition mb-3"
          >
            Learn More
          </TapLink>
          <button
            onClick={dismiss}
            className="text-xs text-[#f8f8f8]/50 hover:text-[#f8f8f8]/80 transition"
          >
            Maybe later
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
