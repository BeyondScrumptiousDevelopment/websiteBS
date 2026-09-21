'use client'

import { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'

type Topic =
  | 'Cake'
  | 'Cupcakes'
  | 'Desserts'
  | 'Dessert Table'
  | 'Live Mini Pancake Station'
  | 'Other'

const topics: Topic[] = [
  'Cake',
  'Cupcakes',
  'Desserts',
  'Dessert Table',
  'Live Mini Pancake Station',
  'Other',
]

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
  'w-full rounded-xl bg-white/95 text-[#202b45] px-5 py-4 placeholder:text-[#202b45]/40 focus:outline-none focus:ring-2 focus:ring-[#202b45]/30'

const labelClass = 'block text-sm uppercase tracking-[0.15em] text-[#cfd7e2] mb-2'

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

  if (state.succeeded) {
    return (
      <main className="bg-[#202b45] min-h-screen text-[#f8f8f8]">
        <Navbar />
        <WhatsAppButton />
        <section className="pt-48 pb-40 px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="heading-font text-4xl md:text-6xl mb-8">
              Thank You!
            </h1>
            <p className="text-lg leading-8 text-[#f8f8f8]/70 mb-4">
              Your enquiry has been sent — we'll get back to you as soon as
              we can.
            </p>
            <p className="text-sm text-[#f8f8f8]/50">
              Please note: submitting an enquiry does not itself confirm a
              booking. Booking is only confirmed once availability has been
              confirmed and the required payment received — see our{' '}
              <a href="/terms" className="underline hover:text-white">
                Terms &amp; Conditions
              </a>
              .
            </p>
            <a
              href="/"
              className="inline-block mt-12 px-10 py-5 rounded-full border border-[#f8f8f8]/30 hover:bg-[#f8f8f8]/10 transition"
            >
              Back to Home
            </a>
          </div>
        </section>
        <Footer />
      </main>
    )
  }

  return (
    <main className="bg-[#202b45] min-h-screen text-[#f8f8f8]">
      <Navbar />
      <WhatsAppButton />

      <section className="pt-40 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="uppercase tracking-[0.4em] text-sm text-[#cfd7e2]/70 mb-6">
            Contact / Enquire
          </p>
          <h1 className="heading-font text-5xl md:text-7xl mb-8">
            Enquire Now
          </h1>
          <p className="max-w-2xl mx-auto text-lg leading-8 text-[#f8f8f8]/70">
            Prefer to skip the form? Message us directly — we're happy to
            chat there too.
          </p>
        </div>
      </section>

      {/* DIRECT CONTACT OPTIONS */}
      <section className="px-6 pb-20">
        <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-5">
          <a
            href="https://wa.me/447933903000"
            target="_blank"
            className="flex items-center justify-center gap-3 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 text-[#f8f8f8] px-6 py-5 hover:bg-[#25D366]/20 transition"
          >
            <FaWhatsapp className="text-2xl text-[#25D366]" />
            <span className="uppercase tracking-[0.15em] text-sm">
              WhatsApp Us
            </span>
          </a>
          <a
            href="mailto:hello@beyondscrumptious.com"
            className="flex items-center justify-center gap-3 rounded-2xl bg-white/5 border border-white/20 text-[#f8f8f8] px-6 py-5 hover:bg-white/10 transition"
          >
            <FaEnvelope className="text-2xl text-[#cfd7e2]" />
            <span className="uppercase tracking-[0.15em] text-sm">
              Email Us
            </span>
          </a>
        </div>
      </section>

      <section className="px-6 pb-32">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="h-px bg-white/10 mb-12" />
            <p className="uppercase tracking-[0.3em] text-xs text-[#cfd7e2]/60">
              Or send us a quick enquiry
            </p>
          </div>

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
                  <button
                    type="button"
                    key={t}
                    onClick={() => setTopic(t)}
                    className={`rounded-xl px-4 py-4 text-sm text-center transition border ${
                      topic === t
                        ? 'bg-[#f8f8f8] text-[#202b45] border-[#f8f8f8]'
                        : 'bg-white/5 border-white/20 text-[#f8f8f8]/80 hover:bg-white/10'
                    }`}
                  >
                    {t}
                  </button>
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
                  <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-white/10">
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
                      <label className="flex items-center gap-3 text-sm text-[#f8f8f8]/80">
                        <input
                          type="checkbox"
                          name="vegan_requirement"
                          value="Yes"
                          className="w-5 h-5 rounded accent-[#f8f8f8]"
                        />
                        This needs to be vegan
                      </label>
                    </div>

                  </div>
                )}

                {/* DESSERT TABLE */}
                {topic === 'Dessert Table' && (
                  <div className="pt-4 border-t border-white/10">
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

                {/* PANCAKE STATION */}
                {topic === 'Live Mini Pancake Station' && (
                  <div className="pt-4 border-t border-white/10">
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

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full md:w-auto px-12 py-5 rounded-full bg-[#f8f8f8] text-[#202b45] text-sm uppercase tracking-[0.2em] hover:bg-[#cfd7e2] transition disabled:opacity-50"
                >
                  {state.submitting ? 'Sending...' : 'Send Enquiry'}
                </button>

                <p className="text-xs text-[#f8f8f8]/40 pt-2">
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

      <Footer />
    </main>
  )
}
