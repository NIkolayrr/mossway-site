import { SiteHeader, SiteFooter } from '@/components/SiteChrome'

export function TermsAndConditions() {
  return (
    <>
      {/* Header */}
      <SiteHeader />

      {/* Content */}
      <main id='main-content' className='legal-main container'>
        <div className='legal-content'>
          <h1 className='text-4xl font-bold mb-3 text-[#b4cf79]'>Terms & Conditions</h1>
          <p className='text-sm text-[#b4b8a5] mb-8'>Last updated: March 22, 2026</p>

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
                Mossway stores account and app data using Firebase and related service infrastructure so your profile
                and progress can be saved and accessed across sessions and devices.
              </p>
              <p>
                This may include information such as your name, email address, authentication details, selected
                character, quest progress, quest completion history, streaks, XP, gold, levels, notes, and other
                gameplay-related data.
              </p>
              <ul className='list-disc list-inside ml-4 mt-2 space-y-1'>
                <li>Keeping your sign-in credentials secure</li>
                <li>Using a secure device and protecting access to your Google account</li>
                <li>
                  Understanding that deleting your account may permanently remove stored progress and related data
                </li>
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
              <p className='mt-2 text-[#b4cf79]'>mosswayapp@gmail.com</p>
            </Section>

            <Section title='13. Governing Law'>
              <p>
                These Terms shall be governed by and construed in accordance with applicable laws, without regard to
                conflict of law provisions.
              </p>
            </Section>
          </div>

          <div className='mt-12 pt-8 border-t border-[#3d2f1f] text-center'>
            <p className='text-sm text-[#b4b8a5] italic'>
              "Moss grows when it grows" — Use Mossway responsibly and with kindness to yourself.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <SiteFooter />
    </>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className='text-2xl font-bold mb-4 text-[#b4cf79]'>{title}</h2>
      <div className='text-[#b4b8a5] space-y-3'>{children}</div>
    </section>
  )
}
