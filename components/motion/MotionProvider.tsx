'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { MotionConfig } from 'framer-motion'

const STORAGE_KEY = 'a11y_reduce_motion'

const ReduceMotionContext = createContext<{
  forced: boolean
  setForced: (value: boolean) => void
}>({ forced: false, setForced: () => {} })

/** Lets the accessibility widget force animations off, on top of the
 *  OS-level "reduce motion" setting every framer-motion animation already
 *  honors by default. */
export function useReduceMotion() {
  return useContext(ReduceMotionContext)
}

export default function MotionProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [forced, setForcedState] = useState(false)

  useEffect(() => {
    try {
      setForcedState(localStorage.getItem(STORAGE_KEY) === '1')
    } catch {
      // localStorage unavailable — default to OS setting only
    }
  }, [])

  const setForced = (value: boolean) => {
    setForcedState(value)
    try {
      localStorage.setItem(STORAGE_KEY, value ? '1' : '0')
    } catch {
      // best-effort persistence only
    }
  }

  return (
    <ReduceMotionContext.Provider value={{ forced, setForced }}>
      <MotionConfig reducedMotion={forced ? 'always' : 'user'}>
        {children}
      </MotionConfig>
    </ReduceMotionContext.Provider>
  )
}
