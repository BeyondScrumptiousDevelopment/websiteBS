'use client'

import { useEffect, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import { trackEvent } from '../lib/gtag'
import { Reveal, RevealGroup, RevealItem } from './motion/Reveal'
import { TapLink, TapButton } from './motion/TapLink'
import BrandCurve from './BrandCurve'
import BrandRipple from './BrandRipple'

type Topic =
  | 'Cake'
  | 'Cupcakes'
  | 'Desserts'
  | 'Dessert Table'
  | 'Live Mini Pancake Station'
  | 'Live Croffle Station'
  | 'Other'

const topics: Topic[] = [
  'Cake',
  'Cupcakes',
  'Desserts',
  'Dessert Table',
  'Live Mini Pancake Station',
  'Live Croffle Station',
  'Other',
]

const liveStationTopics: Topic[] = ['Live Mini Pancake Station', 'Live Croffle Station']

const flavours = [
  'Vanilla',
  'Chocolate',
  'Marble',
  'Lemon',
  'Raspberry',
  'Oreo',
  'Biscoff',
  'Chocolate Orange',
  'Black Forest',
  'Kulfi',
  'Tiramisu',
  'Mix / Not sure yet',
]

const flavourBranches: Topic[] = ['Cake', 'Cupcakes', 'Desserts']

const inputClass =
  'w-full rounded-[2px] bg-[#F3F8FB]/95 text-[#19253F] px-5 py-4 placeholder:text-[#19253F]/40 focus:outline-none focus:ring-2 focus:ring-[#19253F]/30'

const labelClass = 'block text-sm uppercase tracking-[0.15em] text-[#3F5478] mb-2'

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      {children}
    </div>
  )
}

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mrpbpyzd')
  const [topic, setTopic] = useState<Topic | ''>('')

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get('enquiry')
    if (requested && topics.includes(requested as Topic)) {
      setTopic(requested as Topic)
    }
  }, [])

  useEffect(() => {
    if (state.succeeded) {
      trackEvent('form_submit', { form: 'contact' })
      // Update the URL for conversion tracking (Google Ads/Analytics) without
      // triggering a Next.js navigation — the inline Thank You view below
      // stays mounted exactly as-is. window.history is used directly here
      // (not the Next router) specifically so no route change/remount happens.
      try {
        window.history.pushState(null, '', '/contact/thank-you')
      } catch {
        // ignore — URL tracking is best-effort, never block the thank-you view
      }
    }
  }, [state.succeeded])

  if (state.succeeded) {
    return (
      <main className="bs-brand bg-[#D8E8F4] min-h-screen text-[#19253F]">
        <Navbar />
        <WhatsAppButton />
        <section className="relative overflow-hidden pt-48 pb-40 px-6 text-center">
          <BrandCurve side="left" />
          <Reveal className="max-w-2xl mx-auto">
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
            <TapLink
              href="/"
              className="inline-block mt-12 px-10 py-5 rounded-[2px] border border-[#19253F]/30 hover:bg-[#19253F]/5 transition"
            >
              Back to Home
            </TapLink>
          </Reveal>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="bs-brand bg-[#D8E8F4] min-h-screen text-[#19253F]">
      <Navbar />
      <WhatsAppButton />

      <section className="relative pt-40 pb-16 px-6 bg-[#19253F] text-[#F3F8FB]">
        <BrandRipple id="bs-ripple-enquire" tone="onNavy" />
        <Reveal className="relative max-w-3xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-sm text-[#D8E8F4]/70 mb-6">
            Contact / Enquire
          </p>
          <h1 className="heading-font text-5xl md:text-7xl mb-8">
            Request Your Quote
          </h1>
          <p className="max-w-2xl mx-auto text-lg leading-8 text-[#F3F8FB]/70">
            Tell us about your event below, or message us directly — we're
            happy to chat there too.
          </p>
        </Reveal>
      </section>

      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-10">
            {/* Honeypot spam trap */}
            <input
              type="text"
              name="_gotcha"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />

            {/* STEP 1 */}
            <div>
              <label className={labelClass}>
                What are you enquiring about?
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {topics.map((t) => (
                  <TapButton
                    type="button"
                    key={t}
                    onClick={() => setTopic(t)}
                    className={`rounded-[2px] px-4 py-4 text-sm text-center transition border ${
                      topic === t
                        ? 'bg-[#19253F] text-[#F3F8FB] border-[#19253F]'
                        : 'bg-[#19253F]/5 border-[#19253F]/20 text-[#19253F]/80 hover:bg-[#19253F]/10'
                    }`}
                  >
                    {t}
                  </TapButton>
                ))}
              </div>
              <input type="hidden" name="enquiry_type" value={topic} />
            </div>

            {topic && (
              <>
                {/* SHARED FIELDS */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Field label="Name">
                    <input
                      type="text"
                      name="name"
                      required
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Email">
                    <input
                      type="email"
                      name="email"
                      required
                      className={inputClass}
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </Field>

                  <Field label="Phone / WhatsApp">
                    <input
                      type="tel"
                      name="phone"
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Event Date">
                    <input
                      type="date"
                      name="event_date"
                      className={inputClass}
                    />
                  </Field>
                </div>

                {/* FLAVOUR (Cake / Cupcakes / Desserts) */}
                {flavourBranches.includes(topic) && (
                  <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-[#19253F]/10">
                    <Field label="Flavour">
                      <select name="flavour" className={inputClass}>
                        {flavours.map((f) => (
                          <option key={f} value={f}>
                            {f}
                          </option>
                        ))}
                      </select>
                    </Field>

                    <div className="flex items-end pb-4">
                      <label className="flex items-center gap-3 text-sm text-[#19253F]/80">
                        <input
                          type="checkbox"
                          name="vegan_requirement"
                          value="Yes"
                          className="w-5 h-5 rounded accent-[#F3F8FB]"
                        />
                        This needs to be vegan
                      </label>
                    </div>

                  </div>
                )}

                {/* DESSERT TABLE */}
                {topic === 'Dessert Table' && (
                  <div className="pt-4 border-t border-[#19253F]/10">
                    <Field label="Service Option">
                      <select name="service_option" className={inputClass}>
                        <option value="Not sure">Not sure yet</option>
                        <option value="Setup Only">Setup Only</option>
                        <option value="Setup + Staying Throughout">
                          Setup + Staying Throughout
                        </option>
                      </select>
                    </Field>
                  </div>
                )}

                {/* LIVE DESSERT STATIONS (Pancake / Croffle) */}
                {topic && liveStationTopics.includes(topic) && (
                  <div className="pt-4 border-t border-[#19253F]/10">
                    <Field label="Package Preference">
                      <select name="package" className={inputClass}>
                        <option value="Not sure">Not sure yet</option>
                        <option value="Classic">Classic (2 toppings + 2 sauces)</option>
                        <option value="Deluxe">Deluxe (4 toppings + 4 sauces)</option>
                        <option value="Signature">Signature (6 toppings + 6 sauces)</option>
                      </select>
                    </Field>
                  </div>
                )}

                {/* DETAILS */}
                <Field label="Tell Us More — Design, Guest Numbers, Venue, Anything Else">
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="e.g. design/theme/colours, roughly how many guests, venue or area, any dietary needs..."
                    className={inputClass}
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </Field>

                <TapButton
                  type="submit"
                  disabled={state.submitting}
                  className="w-full md:w-auto px-12 py-5 rounded-[2px] bg-[#19253F] text-[#F3F8FB] text-sm uppercase tracking-[0.2em] hover:bg-[#3F5478] transition disabled:opacity-50"
                >
                  {state.submitting ? 'Sending...' : 'Send Enquiry'}
                </TapButton>

                <p className="text-xs text-[#19253F]/40 pt-2">
                  Submitting this form does not confirm a booking. Booking
                  is confirmed once availability is confirmed and required
                  payment received — see our{' '}
                  <a href="/terms" className="underline">
                    Terms &amp; Conditions
                  </a>
                  .
                </p>
              </>
            )}
          </form>
        </div>
      </section>

      {/* DIRECT CONTACT OPTIONS */}
      <section className="px-6 pb-32">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="h-px bg-[#19253F]/10 mb-12" />
          <p className="uppercase tracking-[0.3em] text-xs text-[#3F5478]/80">
            Or reach us directly
          </p>
        </div>
        <RevealGroup className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5" stagger={0.08}>
          <RevealItem>
            <TapLink
              href="https://wa.me/447933903000"
              target="_blank"
              className="flex items-center justify-center gap-3 rounded-none bg-[#25D366]/10 border border-[#25D366]/30 text-[#19253F] px-6 py-5 hover:bg-[#25D366]/20 transition"
            >
              <FaWhatsapp className="text-2xl text-[#25D366]" />
              <span className="uppercase tracking-[0.15em] text-sm">
                WhatsApp Us
              </span>
            </TapLink>
          </RevealItem>
          <RevealItem>
            <TapLink
              href="mailto:hello@beyondscrumptious.com"
              className="flex items-center justify-center gap-3 rounded-none bg-[#19253F]/5 border border-[#19253F]/20 text-[#19253F] px-6 py-5 hover:bg-[#19253F]/10 transition"
            >
              <FaEnvelope className="text-2xl text-[#3F5478]" />
              <span className="uppercase tracking-[0.15em] text-sm">
                Email Us
              </span>
            </TapLink>
          </RevealItem>
        </RevealGroup>
      </section>

      <Footer />
    </main>
  )
}
