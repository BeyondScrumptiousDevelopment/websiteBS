declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

// No-ops when GA hasn't loaded (e.g. before the user accepts cookies).
export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  if (typeof window.gtag === 'function') {
    window.gtag('event', name, params)
  }
}
