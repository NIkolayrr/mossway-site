import type { Metadata } from 'next'
import { PrivacyPolicy } from '@/components/PrivacyPolicy'

const title = 'Privacy Policy'
const description = 'How Mossway handles account information, quest progress, and your data choices.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/privacy/' },
  openGraph: {
    type: 'website',
    siteName: 'Mossway',
    locale: 'en_US',
    title: `${title} | Mossway`,
    description,
    url: '/privacy/',
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
  return <PrivacyPolicy />
}
