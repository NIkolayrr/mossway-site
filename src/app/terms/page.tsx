import type { Metadata } from 'next'
import { TermsAndConditions } from '@/components/Terms'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions for using Mossway.',
}

export default function TermsPage() {
  return <TermsAndConditions />
}
