import ContactForm from '../../components/ContactForm'
import BreadcrumbJsonLd from '../../components/BreadcrumbJsonLd'

export const metadata = {
  title: 'Contact & Enquiries | Beyond Scrumptious, Harrow',
  description:
    'Enquire about eggless cakes, cupcakes, desserts, dessert tables or the Live Mini Pancake Station in Harrow and London — or message us directly on WhatsApp or email.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact & Enquiries | Beyond Scrumptious, Harrow',
    description:
      'Enquire about eggless cakes, cupcakes, desserts, dessert tables or the Live Mini Pancake Station in Harrow and London — or message us directly on WhatsApp or email.',
    url: 'https://www.beyondscrumptious.com/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[{ name: 'Contact', path: '/contact' }]} />
      <ContactForm />
    </>
  )
}
