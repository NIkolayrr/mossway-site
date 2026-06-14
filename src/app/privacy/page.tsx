import type { Metadata } from 'next'
import { PrivacyPolicy } from '@/components/PrivacyPolicy'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Mossway privacy policy and information about how account and gameplay data is handled.',
}

export default function PrivacyPage() {
  return <PrivacyPolicy />
}
