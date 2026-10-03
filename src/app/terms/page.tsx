import type { Metadata } from 'next'
import { TermsAndConditions } from '@/components/Terms'

const title = 'Terms & Conditions'
const description = 'Read the terms and conditions for using the Mossway real-life quest app.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/terms/' },
  openGraph: {
    type: 'website',
    siteName: 'Mossway',
    locale: 'en_US',
    title: `${title} | Mossway`,
    description,
    url: '/terms/',
    images: [
      {
        url: '/images/social-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Mossway — real-life quests and everyday adventures',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${title} | Mossway`,
    description,
    images: ['/images/social-preview.jpg'],
  },
}

export default function Page() {
  return <TermsAndConditions />
}
