'use client'

import { useEffect, useState } from 'react'
import Script from 'next/script'
import { trackEvent } from '../lib/gtag'

const GA_ID = 'G-YP8PFRH5ZN'

type Consent = 'granted' | 'denied' | null

export default function Analytics() {
  const [consent, setConsent] = useState<Consent>(null)

  useEffect(() => {
    try {
      const stored = localStorage.getItem('cookie_consent')
      if (stored === 'granted' || stored === 'denied') {
        setConsent(stored)
      }
    } catch {
      // localStorage unavailable — leave consent as null (banner will not persist)
    }
  }, [])

  // Delegated click tracking for WhatsApp/email/phone links site-wide, so
  // individual pages and components don't each need their own handler.
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const link = (event.target as HTMLElement | null)?.closest('a')
      const href = link?.getAttribute('href')
      if (!href) return

      if (href.startsWith('mailto:')) {
        trackEvent('email_click', { link_url: href })
      } else if (href.includes('wa.me')) {
        trackEvent('whatsapp_click', { link_url: href })
      } else if (href.startsWith('tel:')) {
        trackEvent('phone_click', { link_url: href })
      }
    }

    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  function decide(value: 'granted' | 'denied') {
    try {
      localStorage.setItem('cookie_consent', value)
    } catch {
      // ignore
    }
    setConsent(value)
  }

  return (
    <>
      {GA_ID && consent === 'granted' && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}
          </Script>
        </>
      )}

      {GA_ID && consent === null && (
        <div className="fixed bottom-0 inset-x-0 z-[200] bg-[#131C2F] border-t border-white/10 px-6 py-5">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <p className="text-sm text-[#F3F8FB]/70 flex-1 text-center sm:text-left">
              We use a small number of cookies, including optional analytics
              cookies to understand how the site is used. See our{' '}
              <a href="/cookie-policy" className="underline hover:text-white">
                Cookie Policy
              </a>
              .
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={() => decide('denied')}
                className="px-6 py-3 rounded-sm border border-white/20 text-sm uppercase tracking-[0.1em] hover:bg-white/10 transition text-[#F3F8FB]"
              >
                Decline
              </button>
              <button
                onClick={() => decide('granted')}
                className="px-6 py-3 rounded-sm bg-[#F3F8FB] text-[#19253F] text-sm uppercase tracking-[0.1em] hover:bg-[#D8E8F4] transition"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
