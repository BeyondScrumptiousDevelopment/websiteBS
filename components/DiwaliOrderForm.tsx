'use client'

import { useMemo, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'

// TODO: replace with the real Diwali order Formspree form ID once provided.
const FORMSPREE_DIWALI_ID = 'xzezrdzj'

type Box = '6' | '12'
type FlavourMode = 'one' | 'two'
type Flavour = 'Kulfi' | 'Vanilla' | 'Chocolate'

const flavours: Flavour[] = ['Kulfi', 'Vanilla', 'Chocolate']

const pickupDates = [
  'Saturday 7th November 2026',
  'Sunday 8th November 2026',
]

const inputClass =
  'w-full rounded-xl bg-white/95 text-[#202b45] px-5 py-4 placeholder:text-[#202b45]/40 focus:outline-none focus:ring-2 focus:ring-[#c9973f]/50'

const labelClass = 'block text-sm uppercase tracking-[0.15em] text-[#f3e3c3] mb-2'

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      {children}
    </div>
  )
}

export default function DiwaliOrderForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_DIWALI_ID)

  const [box, setBox] = useState<Box | ''>('')
  const [flavourMode, setFlavourMode] = useState<FlavourMode>('one')
  const [flavour6, setFlavour6] = useState<Flavour | ''>('')
  const [flavour12One, setFlavour12One] = useState<Flavour | ''>('')
  const [flavour1, setFlavour1] = useState<Flavour | ''>('Kulfi')
  const [flavour2, setFlavour2] = useState<Flavour | ''>('Chocolate')
  const [pickupDate, setPickupDate] = useState('')

  const total = box === '6' ? 20 : box === '12' ? 35 : 0

  const summaryLines = useMemo(() => {
    if (!box) return []
    const lines: string[] = [`${box} × Naturally Sweet Cupcakes`]

    if (box === '6') {
      if (flavour6) lines.push(`6 × ${flavour6}`)
    } else if (box === '12') {
      if (flavourMode === 'one') {
        if (flavour12One) lines.push(`12 × ${flavour12One}`)
      } else {
        if (flavour1) lines.push(`6 × ${flavour1}`)
        if (flavour2) lines.push(`6 × ${flavour2}`)
      }
    }

    if (pickupDate) lines.push(`Pickup: ${pickupDate}`)
    return lines
  }, [box, flavour6, flavourMode, flavour12One, flavour1, flavour2, pickupDate])

  const orderSummaryText = summaryLines.join(' | ') + (total ? ` | Total: £${total}` : '')

  if (state.succeeded) {
    return (
      <div className="max-w-2xl mx-auto text-center bg-[#f8f8f8] text-[#202b45] rounded-[2rem] p-12 shadow-2xl">
        <h2 className="heading-font text-4xl md:text-5xl mb-6">Thank You! ✨</h2>
        <p className="text-lg leading-8 text-[#202b45]/80 mb-4">
          We've received your Diwali cupcake order request.
        </p>
        <p className="text-lg leading-8 text-[#202b45]/80 mb-8">
          We'll review your order and contact you shortly with confirmation
          and payment details.
        </p>
        <p className="text-sm text-[#202b45]/60">
          Please note: your order is not confirmed until payment has been
          received and your order has been confirmed by Beyond Scrumptious.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-10">
        <input
          type="text"
          name="_gotcha"
          style={{ display: 'none' }}
          tabIndex={-1}
          autoComplete="off"
        />

        {/* DETAILS */}
        <div className="grid md:grid-cols-2 gap-6">
          <Field label="Name">
            <input type="text" name="name" required className={inputClass} />
          </Field>
          <Field label="Email Address">
            <input type="email" name="email" required className={inputClass} />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </Field>
          <Field label="Phone Number">
            <input type="tel" name="phone" required className={inputClass} />
          </Field>
        </div>

        {/* BOX */}
        <div>
          <label className={labelClass}>Choose Your Box</label>
          <div className="grid sm:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setBox('6')}
              className={`rounded-2xl p-6 text-left border transition ${
                box === '6'
                  ? 'bg-[#f3e3c3] border-[#c9973f] text-[#202b45]'
                  : 'bg-white/5 border-white/20 text-[#f8f8f8] hover:bg-white/10'
              }`}
            >
              <p className="heading-font text-2xl mb-1">6 Cupcakes</p>
              <p className="text-sm opacity-80">£20 · One flavour only</p>
            </button>
            <button
              type="button"
              onClick={() => setBox('12')}
              className={`rounded-2xl p-6 text-left border transition ${
                box === '12'
                  ? 'bg-[#f3e3c3] border-[#c9973f] text-[#202b45]'
                  : 'bg-white/5 border-white/20 text-[#f8f8f8] hover:bg-white/10'
              }`}
            >
              <p className="heading-font text-2xl mb-1">12 Cupcakes</p>
              <p className="text-sm opacity-80">£35 · One or two flavours (6 + 6)</p>
            </button>
          </div>
          <input type="hidden" name="box" value={box ? `${box} Cupcakes — £${total}` : ''} />
        </div>

        {/* FLAVOUR — 6 BOX */}
        {box === '6' && (
          <Field label="Flavour">
            <select
              name="flavour"
              required
              value={flavour6}
              onChange={(e) => setFlavour6(e.target.value as Flavour)}
              className={inputClass}
            >
              <option value="" disabled>
                Select flavour
              </option>
              {flavours.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </Field>
        )}

        {/* FLAVOUR — 12 BOX */}
        {box === '12' && (
          <div className="space-y-6">
            <div>
              <label className={labelClass}>Choose Your Flavour</label>
              <div className="grid sm:grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setFlavourMode('one')}
                  className={`rounded-2xl p-5 text-left border transition ${
                    flavourMode === 'one'
                      ? 'bg-[#f3e3c3] border-[#c9973f] text-[#202b45]'
                      : 'bg-white/5 border-white/20 text-[#f8f8f8] hover:bg-white/10'
                  }`}
                >
                  One flavour — 12 cupcakes
                </button>
                <button
                  type="button"
                  onClick={() => setFlavourMode('two')}
                  className={`rounded-2xl p-5 text-left border transition ${
                    flavourMode === 'two'
                      ? 'bg-[#f3e3c3] border-[#c9973f] text-[#202b45]'
                      : 'bg-white/5 border-white/20 text-[#f8f8f8] hover:bg-white/10'
                  }`}
                >
                  Two flavours — 6 + 6
                </button>
              </div>
              <input type="hidden" name="flavour_mode" value={flavourMode} />
            </div>

            {flavourMode === 'one' ? (
              <Field label="Flavour">
                <select
                  name="flavour_12"
                  required
                  value={flavour12One}
                  onChange={(e) => setFlavour12One(e.target.value as Flavour)}
                  className={inputClass}
                >
                  <option value="" disabled>
                    Select flavour
                  </option>
                  {flavours.map((f) => (
                    <option key={f} value={f}>
                      {f}
                    </option>
                  ))}
                </select>
              </Field>
            ) : (
              <div className="grid sm:grid-cols-2 gap-6">
                <Field label="Flavour 1">
                  <select
                    name="flavour_1"
                    required
                    value={flavour1}
                    onChange={(e) => setFlavour1(e.target.value as Flavour)}
                    className={inputClass}
                  >
                    {flavours.map((f) => (
                      <option key={f} value={f}>
                        {f}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Flavour 2">
                  <select
                    name="flavour_2"
                    required
                    value={flavour2}
                    onChange={(e) => setFlavour2(e.target.value as Flavour)}
                    className={inputClass}
                  >
                    {flavours.map((f) => (
                      <option key={f} value={f}>
                        {f}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>
            )}
          </div>
        )}

        {/* PICKUP */}
        {box && (
          <div>
            <label className={labelClass}>Preferred Pickup Date</label>
            <div className="grid sm:grid-cols-2 gap-4">
              {pickupDates.map((date) => (
                <button
                  type="button"
                  key={date}
                  onClick={() => setPickupDate(date)}
                  className={`rounded-2xl p-5 text-left border transition ${
                    pickupDate === date
                      ? 'bg-[#f3e3c3] border-[#c9973f] text-[#202b45]'
                      : 'bg-white/5 border-white/20 text-[#f8f8f8] hover:bg-white/10'
                  }`}
                >
                  {date}
                </button>
              ))}
            </div>
            <input type="hidden" name="pickup_date" value={pickupDate} />
          </div>
        )}

        {/* NOTES */}
        {box && (
          <Field label="Anything We Should Know? (optional)">
            <textarea name="notes" rows={4} className={inputClass} />
          </Field>
        )}

        {/* ORDER SUMMARY */}
        {box && summaryLines.length > 0 && (
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
            <p className={labelClass}>Your Order</p>
            <ul className="space-y-1 text-[#f8f8f8] leading-7">
              {summaryLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            {total > 0 && (
              <p className="heading-font text-2xl mt-4 text-[#f3e3c3]">
                Total: £{total}
              </p>
            )}
            <input type="hidden" name="order_summary" value={orderSummaryText} />
            <input type="hidden" name="total" value={total ? `£${total}` : ''} />
          </div>
        )}

        {box && (
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full px-12 py-5 rounded-full bg-[#c9973f] text-[#202b45] text-sm font-semibold uppercase tracking-[0.2em] hover:bg-[#f3e3c3] transition disabled:opacity-50"
          >
            {state.submitting ? 'Sending...' : 'Submit Order'}
          </button>
        )}

        {box && (
          <p className="text-xs text-[#f8f8f8]/50 text-center">
            Submitting this form does not confirm your order. Your order is
            only confirmed once payment has been received and Beyond
            Scrumptious has confirmed it with you.
          </p>
        )}
      </form>
    </div>
  )
}
