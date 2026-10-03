import { site } from '@/lib/site'

export function StoreLinks() {
  return (
    <div className='store-links'>
      <a className='store-button' href={site.appStore} aria-label='Download Mossway on the App Store'>
        <svg viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
          <path d='M17.05 12.54c.03 3.19 2.8 4.25 2.83 4.26-.02.08-.44 1.52-1.46 3.01-.88 1.29-1.79 2.58-3.23 2.61-1.41.03-1.87-.84-3.49-.84-1.61 0-2.12.81-3.46.87-1.39.05-2.45-1.4-3.34-2.68-1.82-2.63-3.21-7.43-1.34-10.68.93-1.61 2.59-2.63 4.39-2.65 1.37-.03 2.67.92 3.5.92.84 0 2.4-1.14 4.04-.97.69.03 2.63.28 3.88 2.11-.1.06-2.32 1.35-2.32 4.04ZM14.39 4.62c.74-.9 1.24-2.14 1.11-3.38-1.07.04-2.36.71-3.12 1.61-.69.8-1.29 2.08-1.13 3.3 1.19.09 2.4-.61 3.14-1.53Z' />
        </svg>
        <span>
          <small>Download on the</small>
          <strong>App Store</strong>
        </span>
      </a>
      <a className='store-button' href={site.googlePlay} aria-label='Get Mossway on Google Play'>
        <svg viewBox='0 0 24 26' aria-hidden='true'>
          <path fill='#58c9ee' d='M1 1.2v23.6L13 13Z' />
          <path fill='#71d898' d='m1 1.2 15 8.5-3 3.3Z' />
          <path fill='#ffcf67' d='m16 9.7 5.1 2.9c.5.3.5.6 0 .9L16 16.4 13 13Z' />
          <path fill='#f27b7d' d='m1 24.8 15-8.4-3-3.4Z' />
        </svg>
        <span>
          <small>Get it on</small>
          <strong>Google Play</strong>
        </span>
      </a>
    </div>
  )
}
