import Link from 'next/link'
import { ArrowUpRight, Leaf } from 'lucide-react'

export function SiteHeader() {
  return (
    <header className='site-header'>
      <div className='container header-inner'>
        <Link href='/' className='wordmark' aria-label='Mossway home'>
          <Leaf aria-hidden='true' />
          <span>Mossway</span>
        </Link>
        <nav aria-label='Main navigation'>
          <Link className='nav-detail' href='/#adventure'>
            The adventure
          </Link>
          <Link className='nav-detail' href='/#how-it-works'>
            How it works
          </Link>
          <Link className='nav-detail' href='/#questions'>
            FAQs
          </Link>
          <Link className='nav-cta' href='/#download'>
            Get Mossway <ArrowUpRight size={16} aria-hidden='true' />
          </Link>
        </nav>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className='site-footer container'>
      <div className='footer-top'>
        <div>
          <Link href='/' className='wordmark'>
            <Leaf aria-hidden='true' />
            <span>Mossway</span>
          </Link>
          <p>A little adventure. A little growth. Every day.</p>
        </div>
        <nav aria-label='Footer navigation'>
          <Link href='/privacy/'>Privacy Policy</Link>
          <Link href='/terms/'>Terms & Conditions</Link>
          <a href='mailto:mosswayapp@gmail.com'>
            Get in touch <ArrowUpRight size={14} aria-hidden='true' />
          </a>
        </nav>
      </div>
      <div className='footer-bottom'>
        <span>© {new Date().getFullYear()} Mossway</span>
        <span>Made for the journey, not the finish line.</span>
      </div>
    </footer>
  )
}
