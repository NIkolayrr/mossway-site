import { Link } from 'react-router'
import { ArrowLeft } from 'lucide-react'

export function TermsAndConditions() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-[#0f0a08] via-[#1a2810] to-[#0f0a08] text-[#d4c5a0]'>
      {/* Header */}
      <header className='border-b border-[#3d2f1f] bg-[#1a1410]/80 backdrop-blur-sm sticky top-0 z-40'>
        <div className='max-w-4xl mx-auto px-4 py-4 flex items-center justify-between'>
          <Link to='/' className='flex items-center gap-2 text-[#9ec940] hover:text-[#b5e055] transition-colors'>
            <ArrowLeft className='w-5 h-5' />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className='max-w-4xl mx-auto px-4 py-12'>
        <div className='bg-gradient-to-br from-[#2a2420] to-[#1a1410] rounded-xl border-2 border-[#3d2f1f] p-8 md:p-12'>
          <h1 className='text-4xl font-bold mb-3 text-[#9ec940]' style={{ fontFamily: 'serif' }}>
            Terms & Conditions
          </h1>
          <p className='text-sm text-[#6b4423] mb-8'>Last updated: March 22, 2026</p>

          <div className='space-y-8 leading-relaxed'>
            <Section title='1. Acceptance of Terms'>
              <p>
                Welcome to Mossway ("we," "our," or "us"). By accessing or using the Mossway mobile application (the
                "App"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these
                Terms, please do not use the App.
              </p>
            </Section>

            <Section title='2. Description of Service'>
              <p>
                Mossway is a gamified task and goal tracking application designed to help users complete real-world
                challenges and quests through an RPG-style interface. The App allows users to:
              </p>
              <ul className='list-disc list-inside ml-4 mt-2 space-y-1'>
                <li>Create and track personal quests and goals</li>
                <li>Earn experience points (XP) and virtual rewards</li>
                <li>Track progress across five skill categories</li>
                <li>Customize their character and journey</li>
                <li>Access an interactive overworld map with themed quest zones</li>
              </ul>
            </Section>

            <Section title='3. User Accounts and Data'>
              <p>
                Currently, Mossway stores all user data locally on your device. We do not collect, store, or transmit
                your personal data to external servers. You are responsible for:
              </p>
              <ul className='list-disc list-inside ml-4 mt-2 space-y-1'>
                <li>Maintaining the security of your device</li>
                <li>Backing up your data if desired</li>
                <li>Understanding that uninstalling the App may result in data loss</li>
              </ul>
            </Section>

            <Section title='4. User Conduct'>
              <p>
                You agree to use Mossway for lawful purposes only. While the App is designed for personal growth and
                goal achievement, you acknowledge that:
              </p>
              <ul className='list-disc list-inside ml-4 mt-2 space-y-1'>
                <li>You are solely responsible for the quests and goals you create</li>
                <li>Mossway is not a substitute for professional medical, mental health, or fitness advice</li>
                <li>You should consult professionals before undertaking significant lifestyle changes</li>
                <li>Virtual rewards and achievements have no real-world monetary value</li>
              </ul>
            </Section>

            <Section title='5. Intellectual Property'>
              <p>
                All content, features, and functionality of the App, including but not limited to text, graphics, logos,
                icons, images, and software, are the exclusive property of Mossway and are protected by copyright,
                trademark, and other intellectual property laws.
              </p>
            </Section>

            <Section title='6. Disclaimer of Warranties'>
              <p>
                THE APP IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
                IMPLIED. We do not warrant that:
              </p>
              <ul className='list-disc list-inside ml-4 mt-2 space-y-1'>
                <li>The App will be uninterrupted or error-free</li>
                <li>Defects will be corrected</li>
                <li>The App is free from viruses or other harmful components</li>
                <li>Results from using the App will meet your expectations</li>
              </ul>
            </Section>

            <Section title='7. Limitation of Liability'>
              <p>
                TO THE FULLEST EXTENT PERMITTED BY LAW, MOSSWAY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
                SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED
                DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.
              </p>
            </Section>

            <Section title='8. Philosophy and Approach'>
              <p>
                Mossway embraces a "moss grows when it grows" philosophy, promoting self-compassion and sustainable
                growth. We encourage users to:
              </p>
              <ul className='list-disc list-inside ml-4 mt-2 space-y-1'>
                <li>Take rest days when needed</li>
                <li>Progress at their own pace</li>
                <li>Avoid unhealthy comparisons or pressure</li>
                <li>Prioritize well-being over achievement metrics</li>
              </ul>
            </Section>

            <Section title='9. Changes to Terms'>
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by
                updating the "Last updated" date. Your continued use of the App after such changes constitutes
                acceptance of the new Terms.
              </p>
            </Section>

            <Section title='10. Future Features'>
              <p>
                Mossway may introduce new features, including but not limited to cloud synchronization, social features,
                or premium subscriptions. These features will be subject to additional terms and conditions as
                applicable.
              </p>
            </Section>

            <Section title='11. Termination'>
              <p>
                You may stop using the App at any time by uninstalling it from your device. We reserve the right to
                terminate or suspend access to the App for violations of these Terms or for any other reason at our
                discretion.
              </p>
            </Section>

            <Section title='12. Contact Information'>
              <p>If you have questions about these Terms, please contact us at:</p>
              <p className='mt-2 text-[#9ec940]'>mosswayapp@gmail.com</p>
            </Section>

            <Section title='13. Governing Law'>
              <p>
                These Terms shall be governed by and construed in accordance with applicable laws, without regard to
                conflict of law provisions.
              </p>
            </Section>
          </div>

          <div className='mt-12 pt-8 border-t border-[#3d2f1f] text-center'>
            <p className='text-sm text-[#6b4423] italic'>
              "Moss grows when it grows" — Use Mossway responsibly and with kindness to yourself.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className='border-t border-[#3d2f1f] bg-[#1a1410]/80 mt-20'>
        <div className='max-w-4xl mx-auto px-4 py-6 text-center'>
          <div className='flex gap-6 text-sm justify-center mb-4'>
            <Link to='/' className='hover:text-[#9ec940] transition-colors'>
              Home
            </Link>
            <Link to='/terms' className='text-[#9ec940]'>
              Terms & Conditions
            </Link>
            <Link to='/privacy' className='hover:text-[#9ec940] transition-colors'>
              Privacy Policy
            </Link>
          </div>
          <p className='text-sm text-[#6b4423]'>© 2026 Mossway. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className='text-2xl font-bold mb-4 text-[#9ec940]'>{title}</h2>
      <div className='text-[#a89968] space-y-3'>{children}</div>
    </section>
  )
}
