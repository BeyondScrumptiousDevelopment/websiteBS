import { redirect } from 'next/navigation'

export const runtime = 'edge'

// Convenience short link for marketing/social use — always sends visitors
// straight to the Live Croffle Station section on the Live Desserts page.
export default function CroffleRedirect() {
  redirect('/live-desserts#croffle')
}
