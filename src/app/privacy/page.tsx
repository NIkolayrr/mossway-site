import type { Metadata } from 'next'
import { connection } from 'next/server'
import { PrivacyPolicy } from '@/components/PrivacyPolicy'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Mossway privacy policy and information about how account and gameplay data is handled.',
}

export default async function PrivacyPage() {
  if (process.env.GITHUB_PAGES !== 'true') {
    await connection()
  }

  return <PrivacyPolicy />
}
