const paths = {
  left: {
    viewBox: '0 0 300 400',
    fillBack: 'M0 120C80 140 150 220 190 330C205 370 215 390 225 400L0 400Z',
    fillFront: 'M0 180C70 190 120 260 155 340C170 375 185 392 195 400L0 400Z',
    strokes: [
      { d: 'M0 20C90 70 150 200 190 320C205 365 225 390 250 400', width: 1.2 },
      { d: 'M0 160C75 168 140 240 180 330C192 360 205 385 215 400', width: 1 },
    ],
    pos: 'left-0 bottom-0',
  },
  right: {
    viewBox: '0 0 260 500',
    fillBack: 'M260 0C200 80 230 200 180 300C150 360 90 430 60 500L260 500Z',
    fillFront: 'M260 120C230 220 240 300 200 370C175 420 140 470 120 500L260 500Z',
    strokes: [{ d: 'M250 60C190 200 220 300 160 380C130 420 90 470 70 500', width: 1.2 }],
    pos: 'right-0 bottom-0',
  },
}

export default function BrandCurve({
  side = 'left',
  tone = 'onLight',
}: {
  side?: 'left' | 'right'
  /** 'onLight' (default): the curves as printed, on powder blue/mist.
   *  'onNavy': lighter, more transparent layers and a mist line, for the
   *  navy bands — the kit's "premium" treatment. */
  tone?: 'onLight' | 'onNavy'
}) {
  const p = paths[side]
  const fill = tone === 'onNavy' ? '#9BB3D3' : undefined
  const fillBackProps =
    tone === 'onNavy' ? { fill, opacity: 0.18 } : { fill: '#C5D7EC' }
  const fillFrontProps =
    tone === 'onNavy' ? { fill, opacity: 0.32 } : { fill: '#9BB3D3' }
  const stroke = tone === 'onNavy' ? '#F3F8FB' : '#3F5478'
  const strokeOpacity = tone === 'onNavy' ? 0.5 : 1

  return (
    <svg
      width={side === 'left' ? 220 : 190}
      height={side === 'left' ? 320 : 360}
      viewBox={p.viewBox}
      className={`absolute ${p.pos} pointer-events-none`}
      aria-hidden="true"
    >
      <path d={p.fillBack} {...fillBackProps} />
      <path d={p.fillFront} {...fillFrontProps} />
      {p.strokes.map((s) => (
        <path
          key={s.d}
          d={s.d}
          fill="none"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={s.width}
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  )
}
