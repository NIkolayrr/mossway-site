import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import localFont from 'next/font/local'
import { site } from '@/lib/site'
import './globals.css'

const cinzel = localFont({
  src: '../../public/fonts/cinzel-semibold.ttf',
  variable: '--font-cinzel',
  weight: '600',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: '%s | Mossway' },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: site.name,
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
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: ['/images/social-preview.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  icons: { icon: [{ url: '/icon.png', sizes: '96x96', type: 'image/png' }], apple: '/apple-touch-icon.png' },
  appleWebApp: { title: 'Mossway' },
  itunes: { appId: '6759486915' },
}

export const viewport: Viewport = { themeColor: '#151c13' }

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang='en' className={cinzel.variable}>
      <body>
        <a href='#main-content' className='skip-link'>
          Skip to content
        </a>
        {children}
      </body>
    </html>
  )
}
