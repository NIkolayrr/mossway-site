import { Link } from 'react-router'
import { ArrowLeft, Shield, Lock, Eye, Database } from 'lucide-react'

export function PrivacyPolicy() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-[#0f0a08] via-[#1a2810] to-[#0f0a08] text-[#d4c5a0]'>
      <header className='sticky top-0 z-40 border-b border-[#3d2f1f] bg-[#1a1410]/80 backdrop-blur-sm'>
        <div className='mx-auto flex max-w-4xl items-center justify-between px-4 py-4'>
          <Link to='/' className='flex items-center gap-2 text-[#9ec940] transition-colors hover:text-[#b5e055]'>
            <ArrowLeft className='h-5 w-5' />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      <main className='mx-auto max-w-4xl px-4 py-12'>
        <div className='rounded-xl border-2 border-[#3d2f1f] bg-gradient-to-br from-[#2a2420] to-[#1a1410] p-8 md:p-12'>
          <div className='mb-3 flex items-center gap-3'>
            <Shield className='h-8 w-8 text-[#9ec940]' />
            <h1 className='text-4xl font-bold text-[#9ec940]' style={{ fontFamily: 'serif' }}>
              Privacy Policy
            </h1>
          </div>
          <p className='mb-8 text-sm text-[#6b4423]'>Last updated: March 22, 2026</p>

          <div className='mb-8 rounded-lg border-2 border-[#9ec940] bg-[#1a2810]/50 p-6'>
            <h3 className='mb-4 text-xl font-bold text-[#9ec940]'>Privacy at a Glance</h3>
            <div className='grid gap-4 md:grid-cols-2'>
              <PrivacyHighlight
                icon={<Lock className='h-5 w-5' />}
                text='We use Google Sign-In to authenticate your account'
              />
              <PrivacyHighlight
                icon={<Database className='h-5 w-5' />}
                text='We store account and progress data needed to run the app'
              />
              <PrivacyHighlight icon={<Eye className='h-5 w-5' />} text='We do not sell your personal data' />
              <PrivacyHighlight
                icon={<Shield className='h-5 w-5' />}
                text='You can request deletion of your account and stored data'
              />
            </div>
          </div>

          <div className='space-y-8 leading-relaxed'>
            <Section title='1. Introduction'>
              <p>
                Mossway ("we", "our", or "us") values your privacy. This Privacy Policy explains what information we
                collect, how we use it, and the choices you have when using our mobile application.
              </p>
              <p>
                <strong className='text-[#9ec940]'>Short version:</strong> we collect limited account and gameplay data
                needed to provide Mossway, including authentication details, progress, quest history, and related app
                data.
              </p>
            </Section>

            <Section title='2. Information We Collect'>
              <p>We may collect and store the following categories of information:</p>
              <ul className='ml-4 mt-2 list-disc list-inside space-y-1'>
                <li>
                  <strong>Account information</strong>, such as your name, email address, and authentication provider
                  information when you sign in with Google
                </li>
                <li>
                  <strong>Profile and character information</strong>, such as selected character, character name, and
                  customization choices
                </li>
                <li>
                  <strong>Gameplay and progress information</strong>, such as quests assigned, completed quests, quest
                  history, streaks, XP, level, gold, skill-related progress, notes, and related activity
                </li>
                <li>
                  <strong>Technical and service data</strong>, such as timestamps and identifiers necessary to provide,
                  maintain, and secure the app
                </li>
              </ul>
            </Section>

            <Section title='3. How We Use Information'>
              <p>We use collected information to:</p>
              <ul className='ml-4 mt-2 list-disc list-inside space-y-1'>
                <li>Create and manage your Mossway account</li>
                <li>Authenticate you through Google Sign-In</li>
                <li>Save and sync your progress across sessions and devices</li>
                <li>
                  Generate quests, track completions, and calculate stats such as streaks, XP, levels, and rewards
                </li>
                <li>Provide support, troubleshoot issues, and improve app reliability</li>
                <li>Protect the service against abuse, fraud, and unauthorized access</li>
              </ul>
            </Section>

            <Section title='4. Authentication and Google Sign-In'>
              <p>
                Mossway uses Google Sign-In for authentication. When you sign in with Google, we may receive certain
                information associated with your Google account, such as your name, email address, and a unique account
                identifier, as permitted by Google and your account settings.
              </p>
              <p>
                This information is used only to create and manage your Mossway account and provide access to the app.
              </p>
            </Section>

            <Section title='5. Where Data Is Stored'>
              <p>
                Mossway stores data using app infrastructure and backend services required to operate the product. This
                may include cloud databases and authentication providers used to store account details and gameplay
                progress such as quest history, completions, streaks, XP, levels, and related information.
              </p>
              <p>
                Some app preferences or temporary data may also be stored locally on your device to improve the user
                experience.
              </p>
            </Section>

            <Section title='6. Sharing of Information'>
              <p>We do not sell your personal information.</p>
              <p>We may share information only in the following limited situations:</p>
              <ul className='ml-4 mt-2 list-disc list-inside space-y-1'>
                <li>
                  With service providers that help us operate the app, such as authentication and hosting providers
                </li>
                <li>When required by law, regulation, legal process, or valid government request</li>
                <li>To protect the rights, safety, and security of Mossway, our users, or others</li>
                <li>As part of a merger, acquisition, or transfer of assets, if that ever occurs</li>
              </ul>
            </Section>

            <Section title='7. Data Retention'>
              <p>
                We retain your information for as long as needed to provide the service, maintain your account and
                gameplay progress, comply with legal obligations, resolve disputes, and enforce our agreements.
              </p>
              <p>
                If you delete your account, we will delete or anonymize associated data within a reasonable period,
                except where retention is required for legal, security, or fraud-prevention purposes.
              </p>
            </Section>

            <Section title='8. Your Rights and Choices'>
              <p>Depending on your location, you may have rights regarding your personal information, including:</p>
              <ul className='ml-4 mt-2 list-disc list-inside space-y-1'>
                <li>Accessing the information associated with your account</li>
                <li>Correcting inaccurate information</li>
                <li>Requesting deletion of your account and associated data</li>
                <li>Withdrawing from use of the service by deleting your account</li>
              </ul>
              <p className='mt-3'>
                If you would like to exercise these rights, contact us using the information below.
              </p>
            </Section>

            <Section title='9. Children’s Privacy'>
              <p>
                Mossway is not intended to knowingly collect personal information from children in violation of
                applicable law. If you believe a child has provided personal information inappropriately, contact us so
                we can review and take appropriate action.
              </p>
            </Section>

            <Section title='10. Security'>
              <p>
                We take reasonable technical and organizational measures to protect your information from unauthorized
                access, loss, misuse, or alteration. However, no method of storage or transmission is completely secure,
                and we cannot guarantee absolute security.
              </p>
            </Section>

            <Section title='11. International Users'>
              <p>
                Your information may be processed and stored in countries other than your own, depending on the
                infrastructure and service providers used to operate Mossway. By using the app, you understand that your
                information may be transferred and processed in those locations.
              </p>
            </Section>

            <Section title='12. Changes to This Privacy Policy'>
              <p>
                We may update this Privacy Policy from time to time. When we do, we will update the “Last updated” date
                at the top of this page. Continued use of Mossway after updates become effective means you accept the
                revised Privacy Policy.
              </p>
            </Section>

            <Section title='13. Contact Us'>
              <p>If you have questions about this Privacy Policy or your data, contact us at:</p>
              <p className='mt-2 text-[#9ec940]'>mosswayapp@gmail.com</p>
            </Section>
          </div>
        </div>
      </main>

      <footer className='mt-20 border-t border-[#3d2f1f] bg-[#1a1410]/80'>
        <div className='mx-auto max-w-4xl px-4 py-6 text-center'>
          <div className='mb-4 flex justify-center gap-6 text-sm'>
            <Link to='/' className='transition-colors hover:text-[#9ec940]'>
              Home
            </Link>
            <Link to='/terms' className='transition-colors hover:text-[#9ec940]'>
              Terms & Conditions
            </Link>
            <Link to='/privacy' className='text-[#9ec940]'>
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
      <h2 className='mb-4 text-2xl font-bold text-[#9ec940]'>{title}</h2>
      <div className='space-y-3 text-[#a89968]'>{children}</div>
    </section>
  )
}

function PrivacyHighlight({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className='flex items-center gap-3'>
      <div className='text-[#9ec940]'>{icon}</div>
      <span className='text-sm'>{text}</span>
    </div>
  )
}
