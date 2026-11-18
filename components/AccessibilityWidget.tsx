'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { FaUniversalAccess, FaTimes } from 'react-icons/fa'
import { useReduceMotion } from './motion/MotionProvider'

type FontScale = 'default' | 'large' | 'larger'

const FONT_SCALE_KEY = 'a11y_font_scale'
const CONTRAST_KEY = 'a11y_contrast'
const READABLE_FONT_KEY = 'a11y_readable_font'
const UNDERLINE_LINKS_KEY = 'a11y_underline_links'

function readBool(key: string): boolean {
  try {
    return localStorage.getItem(key) === '1'
  } catch {
    return false
  }
}

function writeBool(key: string, value: boolean) {
  try {
    localStorage.setItem(key, value ? '1' : '0')
  } catch {
    // best-effort persistence only
  }
}

function Toggle({
  label,
  description,
  on,
  onChange,
}: {
  label: string
  description: string
  on: boolean
  onChange: (value: boolean) => void
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!on)}
      aria-pressed={on}
      className={`w-full flex items-center justify-between gap-3 rounded-[2px] px-4 py-3 text-left border transition ${
        on
          ? 'bg-[#19253F] text-[#F3F8FB] border-[#19253F]'
          : 'bg-transparent border-[#3F5478]/25 text-[#19253F] hover:bg-[#3F5478]/5'
      }`}
    >
      <span>
        <span className="block text-sm">{label}</span>
        <span className={`block text-xs ${on ? 'text-[#F3F8FB]/60' : 'text-[#3F5478]/70'}`}>
          {description}
        </span>
      </span>
      <span
        aria-hidden="true"
        className={`shrink-0 w-10 h-6 rounded-full relative transition ${
          on ? 'bg-[#F3F8FB]/30' : 'bg-[#3F5478]/20'
        }`}
      >
        <span
          className={`absolute top-0.5 w-5 h-5 rounded-full transition-transform ${
            on ? 'translate-x-4 bg-[#F3F8FB]' : 'translate-x-0.5 bg-[#19253F]'
          }`}
        />
      </span>
    </button>
  )
}

export default function AccessibilityWidget() {
  const [open, setOpen] = useState(false)
  const [fontScale, setFontScale] = useState<FontScale>('default')
  const [contrast, setContrast] = useState(false)
  const [readableFont, setReadableFont] = useState(false)
  const [underlineLinks, setUnderlineLinks] = useState(false)
  const { forced: reduceMotion, setForced: setReduceMotion } = useReduceMotion()
  const pathname = usePathname()

  // Load saved preferences once on mount.
  useEffect(() => {
    try {
      const savedScale = localStorage.getItem(FONT_SCALE_KEY) as FontScale | null
      if (savedScale) setFontScale(savedScale)
    } catch {
      // localStorage unavailable — fall back to defaults
    }
    setContrast(readBool(CONTRAST_KEY))
    setReadableFont(readBool(READABLE_FONT_KEY))
    setUnderlineLinks(readBool(UNDERLINE_LINKS_KEY))
  }, [])

  // Apply each preference to <html> as a data attribute the CSS in
  // globals.css reacts to, and persist it.
  useEffect(() => {
    document.documentElement.dataset.a11yFontScale = fontScale
    try {
      localStorage.setItem(FONT_SCALE_KEY, fontScale)
    } catch {
      // best-effort persistence only
    }
  }, [fontScale])

  useEffect(() => {
    document.documentElement.dataset.a11yContrast = contrast ? 'high' : 'normal'
    writeBool(CONTRAST_KEY, contrast)
  }, [contrast])

  useEffect(() => {
    document.documentElement.dataset.a11yReadableFont = readableFont ? 'on' : 'off'
    writeBool(READABLE_FONT_KEY, readableFont)
  }, [readableFont])

  useEffect(() => {
    document.documentElement.dataset.a11yUnderlineLinks = underlineLinks ? 'on' : 'off'
    writeBool(UNDERLINE_LINKS_KEY, underlineLinks)
  }, [underlineLinks])

  useEffect(() => {
    document.documentElement.dataset.a11yReduceMotion = reduceMotion ? 'on' : 'off'
  }, [reduceMotion])

  // Close on Escape.
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  function resetAll() {
    setFontScale('default')
    setContrast(false)
    setReadableFont(false)
    setUnderlineLinks(false)
    setReduceMotion(false)
  }

  // Sanity Studio is a separate admin app, not a customer-facing page —
  // keep this widget off it.
  if (pathname?.startsWith('/studio')) return null

  return (
    <>
      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? 'Close accessibility options' : 'Open accessibility options'}
        aria-expanded={open}
        initial={{ opacity: 0, scale: 0.6, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 left-6 z-[100] bg-[#19253F] hover:bg-[#3F5478] transition-colors p-4 rounded-full border border-[#F3F8FB]/20"
      >
        <FaUniversalAccess className="text-2xl text-[#F3F8FB]" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Accessibility options"
            initial={{ opacity: 0, scale: 0.95, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 left-6 z-[100] w-[calc(100vw-3rem)] max-w-sm max-h-[70vh] overflow-y-auto bg-[#F3F8FB] border border-[#3F5478]/20 rounded-[2px] p-5"
          >
            <div className="flex items-center justify-between mb-4">
              <p className="heading-font text-lg text-[#19253F]">Accessibility</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="text-[#3F5478] hover:text-[#19253F] transition p-1"
              >
                <FaTimes />
              </button>
            </div>

            <div className="mb-5">
              <p className="text-sm text-[#19253F] mb-2">Text Size</p>
              <div className="grid grid-cols-3 gap-2">
                {(['default', 'large', 'larger'] as FontScale[]).map((scale) => (
                  <button
                    key={scale}
                    type="button"
                    onClick={() => setFontScale(scale)}
                    aria-pressed={fontScale === scale}
                    className={`rounded-[2px] py-2 text-sm border transition ${
                      fontScale === scale
                        ? 'bg-[#19253F] text-[#F3F8FB] border-[#19253F]'
                        : 'bg-transparent border-[#3F5478]/25 text-[#19253F] hover:bg-[#3F5478]/5'
                    }`}
                  >
                    {scale === 'default' ? 'A' : scale === 'large' ? 'A+' : 'A++'}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Toggle
                label="High Contrast"
                description="Stronger contrast throughout"
                on={contrast}
                onChange={setContrast}
              />
              <Toggle
                label="Reduce Motion"
                description="Turns off animations"
                on={reduceMotion}
                onChange={setReduceMotion}
              />
              <Toggle
                label="Readable Font"
                description="Plain sans-serif, wider spacing"
                on={readableFont}
                onChange={setReadableFont}
              />
              <Toggle
                label="Underline Links"
                description="Makes links easier to spot"
                on={underlineLinks}
                onChange={setUnderlineLinks}
              />
            </div>

            <button
              type="button"
              onClick={resetAll}
              className="w-full mt-5 rounded-[2px] px-4 py-3 text-sm uppercase tracking-[0.15em] border border-[#3F5478]/25 text-[#3F5478] hover:bg-[#3F5478]/5 transition"
            >
              Reset All
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
