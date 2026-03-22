import { Link } from 'react-router'
import { BookOpen, Brain, Handshake, Shield, Sparkles, Target, Search, Dumbbell, Leaf } from 'lucide-react'
import mosswayLogo from '../assets/logo_main.png'

export function LandingPage() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-[#0f0a08] via-[#1a2810] to-[#0f0a08] text-[#d4c5a0]'>
      <header className='sticky top-0 z-40 border-b border-[#3d2f1f] bg-[#1a1410]/80 backdrop-blur-sm'>
        <div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-4'>
          <div className='flex items-center gap-3'>
            <Leaf className='w-6 h-6 text-[#9ec940]' />

            <span className='text-xl font-bold text-[#9ec940]' style={{ fontFamily: 'serif', letterSpacing: 1 }}>
              MOSSWAY
            </span>
          </div>
          <nav className='flex items-center gap-6'>
            <Link to='/terms' className='text-sm transition-colors hover:text-[#9ec940]'>
              Terms
            </Link>
            <Link to='/privacy' className='text-sm transition-colors hover:text-[#9ec940]'>
              Privacy
            </Link>
          </nav>
        </div>
      </header>

      <section className='mx-auto max-w-6xl px-4 py-20 text-center'>
        <div className='relative mb-8 flex justify-center'>
          <img src={mosswayLogo} alt='Mossway Logo' className='h-32 w-auto' />
          <Sparkles className='absolute -right-8 -top-2 h-6 w-6 animate-pulse text-[#9ec940]' />
        </div>

        <h2
          className='mb-6 text-5xl font-bold text-[#9ec940] md:text-6xl'
          style={{
            textShadow: '0 0 20px rgba(158,201,64,0.5)',
            fontFamily: 'serif',
          }}
        >
          Your Life, An Epic Quest
        </h2>

        <p className='mx-auto mb-4 max-w-2xl text-xl leading-relaxed text-[#a89968]'>
          Transform real-world goals into RPG-style quests. Explore an interactive medieval world where you earn XP,
          level up skills, and become the hero of your own story.
        </p>

        <p className='mb-12 text-lg italic text-[#9ec940]'>"Moss grows when it grows"</p>

        <div className='flex flex-col justify-center gap-4 sm:flex-row'>
          <button className='rounded-lg bg-[#9ec940] px-8 py-4 font-bold text-[#1a1410] shadow-[0_0_20px_rgba(158,201,64,0.3)] transition-colors hover:bg-[#b5e055]'>
            Download on iOS
          </button>
          <button className='rounded-lg border-2 border-[#9ec940] bg-[#3d2f1f] px-8 py-4 font-bold text-[#9ec940] transition-colors hover:bg-[#4a3a28]'>
            Get on Android
          </button>
        </div>
      </section>

      <section className='mx-auto max-w-6xl px-4 py-20'>
        <h3 className='mb-12 text-center text-3xl font-bold text-[#9ec940]' style={{ fontFamily: 'serif' }}>
          Embark on Your Journey
        </h3>

        <div className='grid gap-8 md:grid-cols-3'>
          <FeatureCard
            icon={<Target className='h-8 w-8' />}
            title='Real-World Quests'
            description='Turn daily tasks and life goals into epic adventures. Complete side quests to level up your skills across Body, Mind, Creativity, Connection, and Discovery.'
          />
          <FeatureCard
            icon={<Shield className='h-8 w-8' />}
            title='No Pressure Philosophy'
            description='A non-punishing approach to self-improvement. Rest days are encouraged, streaks are celebrated but not mandatory. Progress at your own pace.'
          />
          <FeatureCard
            icon={<BookOpen className='h-8 w-8' />}
            title='Interactive World'
            description='Explore an overworld map with themed biomes and zones. Meet NPCs who offer quests through engaging dialogue systems.'
          />
        </div>
      </section>

      <section className='mx-auto max-w-6xl bg-gradient-to-r from-transparent via-[#1a2810]/50 to-transparent px-4 py-20'>
        <div className='mb-12 text-center'>
          <h3 className='mb-4 text-3xl font-bold text-[#9ec940]' style={{ fontFamily: 'serif' }}>
            Track Your Growth
          </h3>
          <p className='text-[#a89968]'>
            Earn XP, gold, and skill points as you complete quests and grow your character
          </p>
        </div>

        <div className='mx-auto grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-5'>
          <StatCard icon={<Dumbbell className='h-8 w-8' />} label='Body' color='#9ec940' />
          <StatCard icon={<Brain className='h-8 w-8' />} label='Mind' color='#6b9bd1' />
          <StatCard icon={<Sparkles className='h-8 w-8' />} label='Creativity' color='#d97cc4' />
          <StatCard icon={<Handshake className='h-8 w-8' />} label='Connection' color='#fbbf24' />
          <StatCard icon={<Search className='h-8 w-8' />} label='Discovery' color='#f59e0b' />
        </div>
      </section>

      <footer className='mt-20 border-t border-[#3d2f1f] bg-[#1a1410]/80'>
        <div className='mx-auto max-w-6xl px-4 py-8'>
          <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
            <div className='flex items-center gap-2'>
              <Leaf className='h-6 w-6 text-[#9ec940]' />
              <span className='font-bold text-[#9ec940]' style={{ fontFamily: 'serif' }}>
                MOSSWAY
              </span>
              <span className='text-sm text-[#6b4423]'>v1.0</span>
            </div>

            <div className='flex gap-6 text-sm'>
              <Link to='/terms' className='transition-colors hover:text-[#9ec940]'>
                Terms & Conditions
              </Link>
              <Link to='/privacy' className='transition-colors hover:text-[#9ec940]'>
                Privacy Policy
              </Link>
            </div>
          </div>

          <div className='mt-6 text-center text-sm text-[#6b4423]'>
            <p>© 2026 Mossway. All rights reserved.</p>
            <p className='mt-2 text-xs italic'>"Moss grows when it grows"</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className='group rounded-xl border-2 border-[#3d2f1f] bg-gradient-to-br from-[#2a2420] to-[#1a1410] p-6 transition-all hover:border-[#9ec940]'>
      <div className='mb-4 text-[#9ec940] transition-transform group-hover:scale-110'>{icon}</div>
      <h4 className='mb-3 text-xl font-bold text-[#9ec940]'>{title}</h4>
      <p className='leading-relaxed text-[#a89968]'>{description}</p>
    </div>
  )
}

function StatCard({ icon, label, color }: { icon: React.ReactNode; label: string; color: string }) {
  return (
    <div className='rounded-lg border-2 border-[#3d2f1f] bg-gradient-to-br from-[#2a2420] to-[#1a1410] p-4 text-center transition-all hover:border-[#9ec940]'>
      <div className='mb-2 flex justify-center' style={{ color }}>
        {icon}
      </div>
      <div className='text-sm font-bold' style={{ color }}>
        {label}
      </div>
    </div>
  )
}
