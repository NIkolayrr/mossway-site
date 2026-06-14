import type { Metadata } from 'next'
import { connection } from 'next/server'
import { TermsAndConditions } from '@/components/Terms'

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions for using Mossway.',
}

export default async function TermsPage() {
  if (process.env.GITHUB_PAGES !== 'true') {
    await connection()
  }

  return <TermsAndConditions />
}
