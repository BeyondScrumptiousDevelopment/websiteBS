'use client'

import dynamic from 'next/dynamic'

export const runtime = 'edge'

// Sanity Studio (and the Media plugin specifically) touch `window` at
// module-import time, so the entire studio app — not just its component —
// must be kept out of the server-rendered/SSR module graph.
const StudioApp = dynamic(() => import('../../../components/StudioApp'), {
  ssr: false,
})

export default function StudioPage() {
  return <StudioApp />
}
