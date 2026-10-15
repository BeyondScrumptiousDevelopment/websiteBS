import FAQContent from '../../components/FAQContent'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'

export const metadata = {
  title: 'FAQ | Beyond Scrumptious, Harrow',
  description:
    'Answers to common questions about eggless cakes, desserts, dessert tables, the Live Mini Pancake Station and booking with Beyond Scrumptious.',
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'FAQ | Beyond Scrumptious, Harrow',
    description:
      'Answers to common questions about eggless cakes, desserts, dessert tables, the Live Mini Pancake Station and booking with Beyond Scrumptious.',
    url: 'https://www.beyondscrumptious.com/faq',
  },
}

export default function FAQPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'FAQ', path: '/faq' }]} />
      <FAQContent />
    </>
  )
}
