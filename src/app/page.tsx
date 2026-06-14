import { connection } from 'next/server'
import { LandingPage } from '@/components/LandingPage'

export default async function HomePage() {
  if (process.env.GITHUB_PAGES !== 'true') {
    await connection()
  }

  return <LandingPage />
}
