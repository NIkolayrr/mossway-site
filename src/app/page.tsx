import type { Metadata } from 'next'
import { LandingPage } from '@/components/LandingPage'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'Mossway',
    locale: 'en_US',
    url: '/',
    title: site.title,
    description: site.description,
    images: [
      {
        url: '/images/social-preview.jpg',
        width: 1200,
        height: 630,
        alt: 'Mossway — real-life quests and everyday adventures',
      },
    ],
  },
}

export default function HomePage() {
  return <LandingPage />
}
