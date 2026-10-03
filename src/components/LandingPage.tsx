import Image from 'next/image'
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  Check,
  Compass,
  Feather,
  Leaf,
  Map,
  Plus,
  Sparkles,
  Sprout,
} from 'lucide-react'
import { SiteFooter, SiteHeader } from '@/components/SiteChrome'
import { StoreLinks } from '@/components/StoreLinks'
import { site } from '@/lib/site'

const questions = [
  {
    question: 'What is Mossway?',
    answer:
      'Mossway is a real-life quest app for iOS and Android. It brings an RPG-inspired world to everyday self-improvement: discover quests, do something meaningful in the real world, and earn experience points for your character. Think of it as a little extra adventure in your day.',
  },
  {
    question: 'How do real-life quests work?',
    answer:
      'Explore the map and meet guides who offer quests. Choose something that fits your time and energy, complete the activity in real life, then mark it complete in Mossway. Activities can include taking a walk, trying something creative, learning, or connecting with someone.',
  },
  {
    question: 'Can I track longer goals as well as small tasks?',
    answer:
      'Yes. Alongside smaller quests, Mossway has longer adventures with checklists. Track individual steps and keep your ongoing adventures and completed quests together in your quest log.',
  },
  {
    question: 'Do I have to use Mossway every day?',
    answer:
      'Your journey is yours. Mossway celebrates progress with XP, rewards, and streaks, but you can choose quests at your own pace. Come back when you have the time and energy for your next adventure.',
  },
  {
    question: 'Where can I download Mossway?',
    answer:
      'Mossway is available on the Apple App Store for iPhone and iPad, and on Google Play for Android. Use either download button on this page to open the official store listing for your device.',
  },
]

const steps = [
  {
    number: '01',
    label: 'FOLLOW YOUR CURIOSITY',
    title: 'Find your next little quest.',
    text: 'A walk somewhere new. A moment to create. A reason to reconnect. Meet the guides on your map and choose an activity that fits your day.',
    image: 'quests',
    alt: 'Mossway quest selection with real-life creative activities and XP rewards',
    icon: Compass,
  },
  {
    number: '02',
    label: 'ONE STEP AT A TIME',
    title: 'Make room for bigger things.',
    text: 'Some adventures take a little longer. Break them into manageable steps and keep your progress close, wherever the journey takes you.',
    image: 'adventures',
    alt: 'A longer Mossway adventure with a checklist of individual steps',
    icon: Map,
  },
  {
    number: '03',
    label: 'SEE HOW FAR YOU’VE COME',
    title: 'Every small step adds up.',
    text: 'Earn XP, grow your character, and look back on your completed quests. Your quest log is a reminder of all the things you made time for.',
    image: 'journal',
    alt: 'Mossway quest log showing ongoing adventures, completed activities, and earned XP',
    icon: BookOpen,
  },
]

export function LandingPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        logo: `${site.url}/icon.png`,
        sameAs: [site.appStore, site.googlePlay],
      },
      {
        '@type': 'WebSite',
        '@id': `${site.url}/#website`,
        name: site.name,
        url: site.url,
        publisher: { '@id': `${site.url}/#organization` },
        inLanguage: 'en',
      },
      {
        '@type': 'MobileApplication',
        '@id': `${site.url}/#app`,
        name: site.name,
        description: site.description,
        url: site.url,
        operatingSystem: 'iOS, iPadOS, Android',
        applicationCategory: 'LifestyleApplication',
        installUrl: [site.appStore, site.googlePlay],
        image: `${site.url}/images/social-preview.jpg`,
        screenshot: steps.map((step) => `${site.url}/images/${step.image}.webp`),
        publisher: { '@id': `${site.url}/#organization` },
      },
    ],
  }

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }}
      />
      <SiteHeader />
      <main id='main-content'>
        <section className='hero container' aria-labelledby='hero-heading'>
          <div className='hero-copy'>
            <p className='eyebrow'>
              <span className='status-dot' /> A LITTLE WONDER IN YOUR EVERYDAY
            </p>
            <h1 id='hero-heading'>
              Your life.
              <br />
              Your pace.
              <br />
              <span>Your adventure.</span>
            </h1>
            <p className='hero-description'>
              Turn everyday moments into real-life quests. Build habits, discover new things, and grow your character in
              a world that grows with you.
            </p>
            <StoreLinks />
            <p className='download-note'>Available for iOS & Android. Adventure included.</p>
            <a href='#adventure' className='text-link hero-explore'>
              Take a look around <ArrowDown size={15} aria-hidden='true' />
            </a>
          </div>
          <div className='hero-art' aria-label='The illustrated world and characters of Mossway' role='img'>
            <div className='orbit orbit-outer' />
            <div className='orbit orbit-inner' />
            <span className='map-coordinate coordinate-top'>A WORLD OF POSSIBILITY</span>
            <div className='world-window'>
              <Image src='/images/world.webp' alt='' fill sizes='(max-width: 700px) 78vw, 470px' priority />
            </div>
            <span className='art-compass'>
              <Compass size={30} strokeWidth={1.2} />
            </span>
            <div className='portrait portrait-finn'>
              <Image src='/images/guide-finn.webp' alt='' width={108} height={95} />
            </div>
            <div className='portrait portrait-aria'>
              <Image src='/images/guide-aria.webp' alt='' width={102} height={87} />
            </div>
            <Sparkles className='art-sparkle' size={24} aria-hidden='true' />
            <div className='quest-token'>
              <span className='quest-check'>
                <Check size={20} />
              </span>
              <span>
                <small>A LITTLE STEP FORWARD</small>
                <strong>Take the path less traveled</strong>
              </span>
              <b>+25 XP</b>
            </div>
            <span className='map-coordinate coordinate-bottom'>YOUR NEXT CHAPTER STARTS HERE</span>
          </div>
        </section>
        <div className='values-band'>
          <div className='container values-inner'>
            <span>
              <Compass />
              Real-life quests
            </span>
            <i />
            <span>
              <Sprout />
              Growth at your pace
            </span>
            <i />
            <span>
              <Sparkles />A little everyday magic
            </span>
          </div>
        </div>
        <section className='intro-section container' id='adventure' aria-labelledby='adventure-heading'>
          <div>
            <p className='eyebrow'>LESS ROUTINE. MORE DISCOVERY.</p>
            <h2 id='adventure-heading'>
              Life isn’t a to-do list.
              <br />
              <span>It’s a world to explore.</span>
            </h2>
          </div>
          <div className='intro-copy'>
            <p>You don’t need a grand plan to begin. Just a little curiosity.</p>
            <p>
              Mossway turns personal growth into a cozy RPG adventure. Explore an illustrated map, meet your guides, and
              find small, meaningful things to do in the real world. A little movement, a spark of creativity, a moment
              of connection. It all counts.
            </p>
          </div>
        </section>
        <section className='journey-section container' id='how-it-works' aria-labelledby='journey-heading'>
          <div className='section-heading'>
            <div>
              <p className='eyebrow'>A PEEK INSIDE MOSSWAY</p>
              <h2 id='journey-heading'>Small quests. Real progress.</h2>
            </div>
            <span className='section-side-note'>
              <Leaf size={16} /> Built around your everyday
            </span>
          </div>
          <div className='journey-grid'>
            {steps.map((step) => (
              <article className='journey-card' key={step.number}>
                <div className='screen-stage'>
                  <span className='stage-number'>{step.number}</span>
                  <step.icon className='stage-icon' size={24} strokeWidth={1.2} aria-hidden='true' />
                  <div className='phone-frame'>
                    <Image
                      src={`/images/${step.image}.webp`}
                      alt={step.alt}
                      width={640}
                      height={1385}
                      sizes='(max-width: 700px) 240px, 260px'
                      loading='lazy'
                    />
                  </div>
                </div>
                <div className='journey-copy'>
                  <p className='eyebrow'>{step.label}</p>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className='pace-section' aria-labelledby='pace-heading'>
          <div className='container pace-inner'>
            <div className='guide-garden' aria-hidden='true'>
              <div className='garden-ring' />
              <Image className='garden-sage' src='/images/guide-sage.webp' alt='' width={180} height={180} />
              <Image className='garden-finn' src='/images/guide-finn.webp' alt='' width={210} height={184} />
              <Image className='garden-aria' src='/images/guide-aria.webp' alt='' width={200} height={170} />
              <span className='garden-caption'>
                <Leaf size={15} /> A little company for the road.
              </span>
            </div>
            <div className='pace-copy'>
              <p className='eyebrow'>PROGRESS, WITH A LITTLE KINDNESS</p>
              <h2 id='pace-heading'>
                Moss grows
                <br />
                <span>when it grows.</span>
              </h2>
              <p>Some days you climb a mountain. Some days you just step outside. Both are part of the adventure.</p>
              <p>
                Pick the quests that feel right, celebrate the small wins, and make room for rest. There’s no race to
                the finish line here.
              </p>
              <div className='pace-signoff'>
                <Feather size={19} />
                <span>Your journey. Your own good time.</span>
              </div>
            </div>
          </div>
        </section>
        <section className='faq-section container' id='questions' aria-labelledby='faq-heading'>
          <div className='faq-intro'>
            <p className='eyebrow'>BEFORE YOU SET OFF</p>
            <h2 id='faq-heading'>
              A few things
              <br />
              you might wonder.
            </h2>
            <p>Still curious about something?</p>
            <a className='text-link' href='mailto:mosswayapp@gmail.com'>
              Say hello <ArrowUpRight size={16} aria-hidden='true' />
            </a>
          </div>
          <div className='faq-list'>
            {questions.map((item) => (
              <details key={item.question}>
                <summary>
                  {item.question}
                  <Plus size={18} aria-hidden='true' />
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </section>
        <section className='download-section container' id='download' aria-labelledby='download-heading'>
          <div className='download-panel'>
            <Image
              src='/images/logo.webp'
              alt='Mossway'
              width={190}
              height={190}
              sizes='190px'
              className='download-logo'
            />
            <p className='eyebrow'>EVERY ADVENTURE STARTS SOMEWHERE</p>
            <h2 id='download-heading'>
              Yours starts with
              <br />
              <span>one little quest.</span>
            </h2>
            <p>A world to explore. A character to grow. A reason to begin.</p>
            <StoreLinks />
            <span className='download-platforms'>Find Mossway on the App Store and Google Play.</span>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
