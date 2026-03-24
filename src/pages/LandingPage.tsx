import { Link } from 'react-router'
import { BookOpen, Brain, Handshake, Shield, Sparkles, Target, Search, Dumbbell, Leaf } from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'
import mosswayLogo from '../assets/logo_main.png'

export function LandingPage() {
  const { scrollY } = useScroll()

  // subtle parallax (NOT aggressive)
  const heroY = useTransform(scrollY, [0, 600], [0, 120])
  const logoY = useTransform(scrollY, [0, 600], [0, -60])
  const featuresY = useTransform(scrollY, [0, 1000], [0, -40])

  return (
    <div className='min-h-screen bg-gradient-to-b from-[#0f0a08] via-[#1a2810] to-[#0f0a08] text-[#d4c5a0]'>
      {/* Header */}
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

      {/* Hero */}
      <section className='mx-auto max-w-6xl px-4 py-20 text-center overflow-hidden'>
        <motion.div className='relative mb-8 flex justify-center' style={{ y: logoY }}>
          <motion.img
            src={mosswayLogo}
            alt='Mossway Logo'
            className='h-60 w-auto'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
            <Sparkles className='absolute -right-8 -top-2 h-6 w-6 animate-pulse text-[#9ec940]' />
          </motion.div>
        </motion.div>

        <motion.div style={{ y: heroY }}>
          <motion.h2
            className='mb-6 text-5xl font-bold text-[#9ec940] md:text-6xl'
            style={{
              textShadow: '0 0 20px rgba(158,201,64,0.5)',
              fontFamily: 'serif',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Your Life, An Epic Quest
          </motion.h2>

          <motion.p
            className='mx-auto mb-4 max-w-2xl text-xl leading-relaxed text-[#a89968]'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Transform real-world goals into RPG-style quests. Explore an interactive medieval world where you earn XP,
            level up skills, and become the hero of your own story.
          </motion.p>

          <motion.p
            className='mb-12 text-lg italic text-[#9ec940]'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            "Moss grows when it grows"
          </motion.p>

          <motion.div
            className='flex flex-col justify-center gap-4 sm:flex-row'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <button className='rounded-lg bg-[#9ec940] px-8 py-4 font-bold text-[#1a1410] shadow-[0_0_20px_rgba(158,201,64,0.3)] transition-all hover:bg-[#b5e055] hover:scale-105'>
              Download on iOS
            </button>
            <button className='rounded-lg border-2 border-[#9ec940] bg-[#3d2f1f] px-8 py-4 font-bold text-[#9ec940] transition-all hover:bg-[#4a3a28] hover:scale-105'>
              Get on Android
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features */}
      <motion.section className='mx-auto max-w-6xl px-4 py-20' style={{ y: featuresY }}>
        <motion.h3
          className='mb-12 text-center text-3xl font-bold text-[#9ec940]'
          style={{ fontFamily: 'serif' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Embark on Your Journey
        </motion.h3>

        <div className='grid gap-8 md:grid-cols-3'>
          {[
            {
              icon: <Target className='h-8 w-8' />,
              title: 'Real-World Quests',
              description:
                'Turn daily tasks and life goals into epic adventures. Complete side quests to level up your skills across Body, Mind, Creativity, Connection, and Discovery.',
            },
            {
              icon: <Shield className='h-8 w-8' />,
              title: 'No Pressure Philosophy',
              description:
                'A non-punishing approach to self-improvement. Rest days are encouraged, streaks are celebrated but not mandatory. Progress at your own pace.',
            },
            {
              icon: <BookOpen className='h-8 w-8' />,
              title: 'Interactive World',
              description:
                'Explore an overworld map with themed biomes and zones. Meet NPCs who offer quests through engaging dialogue systems.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              viewport={{ once: true }}
            >
              <FeatureCard {...item} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Stats */}
      <section className='mx-auto max-w-6xl bg-gradient-to-r from-transparent via-[#1a2810]/50 to-transparent px-4 py-20'>
        <motion.div
          className='mb-12 text-center'
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className='mb-4 text-3xl font-bold text-[#9ec940]' style={{ fontFamily: 'serif' }}>
            Track Your Growth
          </h3>
          <p className='text-[#a89968]'>
            Earn XP, gold, and skill points as you complete quests and grow your character
          </p>
        </motion.div>

        <div className='mx-auto grid max-w-4xl grid-cols-2 gap-6 md:grid-cols-5 justify-center'>
          {[
            { icon: <Dumbbell className='h-8 w-8' />, label: 'Body', color: '#9ec940' },
            { icon: <Brain className='h-8 w-8' />, label: 'Mind', color: '#6b9bd1' },
            { icon: <Sparkles className='h-8 w-8' />, label: 'Creativity', color: '#d97cc4' },
            { icon: <Handshake className='h-8 w-8' />, label: 'Connection', color: '#fbbf24' },
            { icon: <Search className='h-8 w-8' />, label: 'Discovery', color: '#f59e0b' },
          ].map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <StatCard {...s} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer stays unchanged */}
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
              <Link to='/terms'>Terms & Conditions</Link>
              <Link to='/privacy'>Privacy Policy</Link>
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
    <div className='bg-gradient-to-br from-[#2a2420] to-[#1a1410] p-6 rounded-xl border-2 border-[#3d2f1f] hover:border-[#9ec940] transition-all group'>
      <div className='text-[#9ec940] mb-4 group-hover:scale-110 transition-transform'>{icon}</div>
      <h4 className='text-xl font-bold mb-3 text-[#9ec940]'>{title}</h4>
      <p className='text-[#a89968] leading-relaxed'>{description}</p>
    </div>
  )
}

function StatCard({ icon, label, color }: { icon: React.ReactNode; label: string; color: string }) {
  return (
    <div className='rounded-lg border-2 border-[#3d2f1f] bg-gradient-to-br from-[#2a2420] to-[#1a1410] p-4 text-center transition-all hover:border-[#9ec940]'>
      <div className='mb-2 flex items-center justify-center' style={{ color }}>
        <div className='flex h-8 w-8 items-center justify-center'>{icon}</div>
      </div>
      <div className='text-sm font-bold' style={{ color }}>
        {label}
      </div>
    </div>
  )
}
