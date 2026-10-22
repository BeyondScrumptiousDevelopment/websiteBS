'use client'

import { useEffect, useMemo, useState } from 'react'
import { useForm, ValidationError } from '@formspree/react'
import { trackEvent } from '../lib/gtag'
import { TapButton } from './motion/TapLink'

// TODO: replace with the real Diwali order Formspree form ID once provided.
const FORMSPREE_DIWALI_ID = 'xzezrdzj'

type Product = 'naturally-sweet' | 'collection'

type Box = '6' | '12'
type FlavourMode = 'one' | 'two'
type NSFlavour = 'Kulfi' | 'Vanilla' | 'Chocolate'

type CBox = 'single' | 'box3' | 'box6'
type CFlavour = 'Vanilla' | 'Chocolate' | 'Kulfi' | 'Oreo'

const nsFlavours: NSFlavour[] = ['Kulfi', 'Vanilla', 'Chocolate']
const cFlavourOptions: CFlavour[] = ['Vanilla', 'Chocolate', 'Kulfi', 'Oreo']

const pickupDates = [
  'Saturday 7th November 2026',
  'Sunday 8th November 2026',
]

function formatPrice(n: number): string {
  return Number.isInteger(n) ? `£${n}` : `£${n.toFixed(2)}`
}

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

function OptionCard({
  selected,
  onClick,
  title,
  subtitle,
}: {
  selected: boolean
  onClick: () => void
  title: string
  subtitle: string
}) {
  return (
    <TapButton
      type="button"
      onClick={onClick}
      className={`rounded-2xl p-6 text-left border transition ${
        selected
          ? 'bg-[#f3e3c3] border-[#c9973f] text-[#202b45]'
          : 'bg-white/5 border-white/20 text-[#f8f8f8] hover:bg-white/10'
      }`}
    >
      <p className="heading-font text-2xl mb-1">{title}</p>
      <p className="text-sm opacity-80">{subtitle}</p>
    </TapButton>
  )
}

export default function DiwaliOrderForm({
  defaultProduct,
}: {
  defaultProduct?: Product
} = {}) {
  const [state, handleSubmit] = useForm(FORMSPREE_DIWALI_ID)

  const [product, setProduct] = useState<Product | ''>(defaultProduct ?? '')

  // Naturally Sweet Cupcakes
  const [box, setBox] = useState<Box | ''>('')
  const [flavourMode, setFlavourMode] = useState<FlavourMode>('one')
  const [flavour6, setFlavour6] = useState<NSFlavour | ''>('')
  const [flavour12One, setFlavour12One] = useState<NSFlavour | ''>('')
  const [flavour1, setFlavour1] = useState<NSFlavour | ''>('Kulfi')
  const [flavour2, setFlavour2] = useState<NSFlavour | ''>('Chocolate')
  const [personalise, setPersonalise] = useState(false)
  const [personaliseName, setPersonaliseName] = useState('')

  // The Diwali Cupcake Collection
  const [cBox, setCBox] = useState<CBox | ''>('')
  const [cFlavourSingle, setCFlavourSingle] = useState<CFlavour | ''>('')
  const [cFlavours, setCFlavours] = useState<CFlavour[]>([])

  const [pickupDate, setPickupDate] = useState('')

  function toggleCFlavour(f: CFlavour) {
    setCFlavours((prev) => {
      if (prev.includes(f)) return prev.filter((x) => x !== f)
      if (prev.length >= 3) return prev
      return [...prev, f]
    })
  }

  const total =
    product === 'naturally-sweet'
      ? (box === '6' ? 20 : box === '12' ? 35 : 0) + (personalise ? 4 : 0)
      : product === 'collection'
      ? cBox === 'single'
        ? 4.5
        : cBox === 'box3'
        ? 12.5
        : cBox === 'box6'
        ? 22.5
        : 0
      : 0

  const summaryLines = useMemo(() => {
    if (product === 'naturally-sweet') {
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

      if (personalise && personaliseName) {
        lines.push(`Personalisation: "${personaliseName}" (+£4)`)
      }

      if (pickupDate) lines.push(`Pickup: ${pickupDate}`)
      return lines
    }

    if (product === 'collection') {
      if (!cBox) return []
      const boxLabel =
        cBox === 'single'
          ? 'Single Cupcake — The Diwali Cupcake Collection'
          : cBox === 'box3'
          ? 'Box of 3 — The Diwali Cupcake Collection'
          : 'Box of 6 — The Diwali Cupcake Collection'
      const lines: string[] = [boxLabel]

      if (cBox === 'single') {
        if (cFlavourSingle) lines.push(`Flavour: ${cFlavourSingle}`)
      } else if (cFlavours.length) {
        lines.push(`Flavours: ${cFlavours.join(', ')}`)
      }

      if (pickupDate) lines.push(`Pickup: ${pickupDate}`)
      return lines
    }

    return []
  }, [
    product,
    box,
    flavour6,
    flavourMode,
    flavour12One,
    flavour1,
    flavour2,
    personalise,
    personaliseName,
    cBox,
    cFlavourSingle,
    cFlavours,
    pickupDate,
  ])

  const orderSummaryText =
    summaryLines.join(' | ') + (total ? ` | Total: ${formatPrice(total)}` : '')

  useEffect(() => {
    if (state.succeeded) {
      trackEvent('form_submit', { form: 'diwali_order', product })
    }
  }, [state.succeeded, product])

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

  const showSharedFields = product === 'naturally-sweet' ? !!box : product === 'collection' ? !!cBox : false

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

        {state.errors && state.errors.getFormErrors().length > 0 && (
          <div className="bg-red-500/10 border border-red-500/40 rounded-xl p-5 text-red-200 text-sm">
            {state.errors.getFormErrors().map((err, i) => (
              <p key={i}>{err.message}</p>
            ))}
          </div>
        )}

        {/* PRODUCT */}
        <div>
          <label className={labelClass}>Which Collection?</label>
          <div className="grid sm:grid-cols-2 gap-4">
            <OptionCard
              selected={product === 'naturally-sweet'}
              onClick={() => setProduct('naturally-sweet')}
              title="Naturally Sweet Cupcakes"
              subtitle="No added refined sugar — from £20"
            />
            <OptionCard
              selected={product === 'collection'}
              onClick={() => setProduct('collection')}
              title="The Diwali Cupcake Collection"
              subtitle="Beautifully decorated & gift-boxed — from £4.50"
            />
          </div>
          <input type="hidden" name="product_line" value={product} />
        </div>

        {/* NATURALLY SWEET — BOX */}
        {product === 'naturally-sweet' && (
          <div>
            <label className={labelClass}>Choose Your Box</label>
            <div className="grid sm:grid-cols-2 gap-4">
              <OptionCard
                selected={box === '6'}
                onClick={() => setBox('6')}
                title="6 Cupcakes"
                subtitle="£20 · One flavour only"
              />
              <OptionCard
                selected={box === '12'}
                onClick={() => setBox('12')}
                title="12 Cupcakes"
                subtitle="£35 · One or two flavours (6 + 6)"
              />
            </div>
            <input type="hidden" name="box" value={box ? `${box} Cupcakes — £${total}` : ''} />
          </div>
        )}

        {product === 'naturally-sweet' && box === '6' && (
          <Field label="Flavour">
            <select
              name="flavour"
              required
              value={flavour6}
              onChange={(e) => setFlavour6(e.target.value as NSFlavour)}
              className={inputClass}
            >
              <option value="" disabled>
                Select flavour
              </option>
              {nsFlavours.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </Field>
        )}

        {product === 'naturally-sweet' && box === '12' && (
          <div className="space-y-6">
            <div>
              <label className={labelClass}>Choose Your Flavour</label>
              <div className="grid sm:grid-cols-2 gap-4">
                <TapButton
                  type="button"
                  onClick={() => setFlavourMode('one')}
                  className={`rounded-2xl p-5 text-left border transition ${
                    flavourMode === 'one'
                      ? 'bg-[#f3e3c3] border-[#c9973f] text-[#202b45]'
                      : 'bg-white/5 border-white/20 text-[#f8f8f8] hover:bg-white/10'
                  }`}
                >
                  One flavour — 12 cupcakes
                </TapButton>
                <TapButton
                  type="button"
                  onClick={() => setFlavourMode('two')}
                  className={`rounded-2xl p-5 text-left border transition ${
                    flavourMode === 'two'
                      ? 'bg-[#f3e3c3] border-[#c9973f] text-[#202b45]'
                      : 'bg-white/5 border-white/20 text-[#f8f8f8] hover:bg-white/10'
                  }`}
                >
                  Two flavours — 6 + 6
                </TapButton>
              </div>
              <input type="hidden" name="flavour_mode" value={flavourMode} />
            </div>

            {flavourMode === 'one' ? (
              <Field label="Flavour">
                <select
                  name="flavour_12"
                  required
                  value={flavour12One}
                  onChange={(e) => setFlavour12One(e.target.value as NSFlavour)}
                  className={inputClass}
                >
                  <option value="" disabled>
                    Select flavour
                  </option>
                  {nsFlavours.map((f) => (
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
                    onChange={(e) => setFlavour1(e.target.value as NSFlavour)}
                    className={inputClass}
                  >
                    {nsFlavours.map((f) => (
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
                    onChange={(e) => setFlavour2(e.target.value as NSFlavour)}
                    className={inputClass}
                  >
                    {nsFlavours.map((f) => (
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

        {product === 'naturally-sweet' && box && (
          <div>
            <label className="flex items-center gap-3 text-sm text-[#f8f8f8]/90">
              <input
                type="checkbox"
                checked={personalise}
                onChange={(e) => setPersonalise(e.target.checked)}
                className="w-5 h-5 rounded accent-[#c9973f]"
              />
              Add a personalised name to the box (+£4)
            </label>
            <input
              type="hidden"
              name="personalisation"
              value={personalise ? `Yes — "${personaliseName}" (+£4)` : 'No'}
            />

            {personalise && (
              <div className="mt-4">
                <Field label="Name To Add">
                  <input
                    type="text"
                    name="personalisation_name"
                    required={personalise}
                    value={personaliseName}
                    onChange={(e) => setPersonaliseName(e.target.value)}
                    className={inputClass}
                  />
                </Field>
                <p className="text-xs text-[#f8f8f8]/50 mt-2">
                  Please also add this name in "Anything we should know?"
                  below, just so we don't miss it.
                </p>
              </div>
            )}
          </div>
        )}

        {/* COLLECTION — BOX */}
        {product === 'collection' && (
          <div>
            <label className={labelClass}>Choose Your Box</label>
            <div className="grid sm:grid-cols-3 gap-4">
              <OptionCard
                selected={cBox === 'single'}
                onClick={() => setCBox('single')}
                title="Single"
                subtitle="£4.50 · One flavour"
              />
              <OptionCard
                selected={cBox === 'box3'}
                onClick={() => setCBox('box3')}
                title="Box of 3"
                subtitle="£12.50 · Up to 3 flavours"
              />
              <OptionCard
                selected={cBox === 'box6'}
                onClick={() => setCBox('box6')}
                title="Box of 6"
                subtitle="£22.50 · Up to 3 flavours"
              />
            </div>
            <input
              type="hidden"
              name="collection_box"
              value={
                cBox === 'single'
                  ? `Single — £${total}`
                  : cBox === 'box3'
                  ? `Box of 3 — £${total}`
                  : cBox === 'box6'
                  ? `Box of 6 — £${total}`
                  : ''
              }
            />
          </div>
        )}

        {product === 'collection' && cBox === 'single' && (
          <Field label="Flavour">
            <select
              name="collection_flavour"
              required
              value={cFlavourSingle}
              onChange={(e) => setCFlavourSingle(e.target.value as CFlavour)}
              className={inputClass}
            >
              <option value="" disabled>
                Select flavour
              </option>
              {cFlavourOptions.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
          </Field>
        )}

        {product === 'collection' && (cBox === 'box3' || cBox === 'box6') && (
          <div>
            <label className={labelClass}>
              Choose Up To 3 Flavours ({cFlavours.length}/3 selected)
            </label>
            <div className="grid sm:grid-cols-2 gap-3">
              {cFlavourOptions.map((f) => {
                const selected = cFlavours.includes(f)
                const disabled = !selected && cFlavours.length >= 3
                return (
                  <TapButton
                    type="button"
                    key={f}
                    onClick={() => toggleCFlavour(f)}
                    disabled={disabled}
                    className={`rounded-xl px-4 py-4 text-sm text-left transition border ${
                      selected
                        ? 'bg-[#f3e3c3] border-[#c9973f] text-[#202b45]'
                        : disabled
                        ? 'bg-white/5 border-white/10 text-[#f8f8f8]/30 cursor-not-allowed'
                        : 'bg-white/5 border-white/20 text-[#f8f8f8]/80 hover:bg-white/10'
                    }`}
                  >
                    {f}
                  </TapButton>
                )
              })}
            </div>
            <input type="hidden" name="collection_flavours" value={cFlavours.join(', ')} />
            <p className="text-xs text-[#f8f8f8]/50 mt-3">
              If you'd like a specific quantity split between your chosen
              flavours, let us know in "Anything we should know?" below.
            </p>
          </div>
        )}

        {/* PICKUP */}
        {showSharedFields && (
          <div>
            <label className={labelClass}>Preferred Pickup Date</label>
            <div className="grid sm:grid-cols-2 gap-4">
              {pickupDates.map((date) => (
                <TapButton
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
                </TapButton>
              ))}
            </div>
            <input type="hidden" name="pickup_date" value={pickupDate} />
          </div>
        )}

        {/* DETAILS */}
        {showSharedFields && (
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
        )}

        {/* NOTES */}
        {showSharedFields && (
          <Field label="Anything We Should Know? (optional)">
            <textarea name="notes" rows={4} className={inputClass} />
          </Field>
        )}

        {/* ORDER SUMMARY */}
        {showSharedFields && summaryLines.length > 0 && (
          <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
            <p className={labelClass}>Your Order</p>
            <ul className="space-y-1 text-[#f8f8f8] leading-7">
              {summaryLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            {total > 0 && (
              <p className="heading-font text-2xl mt-4 text-[#f3e3c3]">
                Total: {formatPrice(total)}
              </p>
            )}
            <input type="hidden" name="order_summary" value={orderSummaryText} />
            <input type="hidden" name="total" value={total ? formatPrice(total) : ''} />
          </div>
        )}

        {showSharedFields && (
          <TapButton
            type="submit"
            disabled={state.submitting}
            className="w-full px-12 py-5 rounded-full bg-[#c9973f] text-[#202b45] text-sm font-semibold uppercase tracking-[0.2em] hover:bg-[#f3e3c3] transition disabled:opacity-50"
          >
            {state.submitting ? 'Sending...' : 'Submit Order'}
          </TapButton>
        )}

        {showSharedFields && (
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
