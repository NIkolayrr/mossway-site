import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://mossway.site'),
  title: {
    default: 'Mossway',
    template: '%s | Mossway',
  },
  description: 'Transform real-world goals into RPG-style quests.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
