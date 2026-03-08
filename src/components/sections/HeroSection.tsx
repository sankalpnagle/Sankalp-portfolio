import { motion } from 'framer-motion'
import { HERO_STATS } from '@/data'

interface HeroSectionProps {
  onNav: (id: string) => void
}

export function HeroSection({ onNav }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden max-[860px]:flex-col max-[860px]:pt-20 max-[860px]:pb-16"
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--color-bg)',
        padding: '0 64px',
      }}
    >
      {/* Giant decorative background word */}
      <div
        className="bg-word"
        style={{
          fontSize: 'clamp(160px, 22vw, 300px)',
          right: '-20px',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        CODE
      </div>

      {/* Vertical accent lines */}
      <div className="absolute left-[64px] top-0 bottom-0 w-px bg-accent-strong" />
      <div className="absolute left-[108px] top-0 bottom-0 w-px bg-accent-soft" />

      {/* ── Left content — wider ── */}
      <div className="relative z-10 flex-1 min-w-0 pr-12 max-[860px]:pr-0 max-[860px]:w-full" style={{ maxWidth: '640px' }}>

        {/* Available badge */}
        <motion.div
          className="flex items-center gap-3 mb-9"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-9 h-px" style={{ backgroundColor: 'var(--color-gold)' }} />
          <span
            className="text-[10px] font-bold uppercase"
            style={{ letterSpacing: 'var(--letter-spacing-wide8)', color: 'var(--color-gold)' }}
          >
            Available for opportunities
          </span>
          <span
            className="w-[6px] h-[6px] rounded-full bg-green-400 inline-block"
            style={{ boxShadow: 'var(--shadow-green)' }}
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="cond hero-h1 font-black uppercase text-white"
          style={{ letterSpacing: 'var(--letter-spacing-tight1)' }}
          initial={{ opacity: 0, y: 56 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Full-Stack<br />
          <span style={{ color: 'var(--color-gold)' }}>Web</span><br />
          Developer
        </motion.h1>

        {/* Gold rule */}
        <motion.div
          className="w-[88px] h-[2px] my-7"
          style={{ backgroundColor: 'var(--color-gold)' }}
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.55 }}
        />

        {/* Subtitle */}
        <motion.p
          className="leading-[1.85] mb-11"
          style={{
            fontSize: '15px',
            color: 'var(--color-ink-soft)',
            maxWidth: '480px',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          2.6+ years building scalable MERN stack applications with cloud deployments on AWS
          and automated CI/CD pipelines that ship with confidence.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex gap-[14px] flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
        >
          <motion.button
            className="cond font-bold uppercase cursor-pointer border-none rounded-[2px]"
            style={{
              fontSize: 'var(--font-size-2xs)',
              letterSpacing: 'var(--letter-spacing-wide7)',
              backgroundColor: 'var(--color-gold)',
              color: 'var(--color-bg-darker)',
              padding: '14px 38px',
            }}
            whileHover={{ scale: 1.04, boxShadow: '0 0 32px #c9973a44' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onNav('work')}
          >
            View Work
          </motion.button>
          <motion.button
            className="cond font-bold uppercase cursor-pointer rounded-[2px] transition-all duration-[250ms]"
            style={{
              fontSize: 'var(--font-size-2xs)',
              letterSpacing: 'var(--letter-spacing-wide7)',
              backgroundColor: 'transparent',
              color: 'var(--color-ink-muted)',
              padding: '14px 38px',
              border: '1px solid var(--color-stroke-faint)',
            }}
            whileHover={{ scale: 1.04, borderColor: '#c9973a', color: '#c9973a' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onNav('contact')}
          >
            Hire Me
          </motion.button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="flex gap-14 mt-[72px] pt-8"
          style={{ borderTop: '1px solid var(--color-stroke)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          {HERO_STATS.map(([v, l]) => (
            <div key={l}>
              <p className="cond text-white leading-none font-black" style={{ fontSize: '40px' }}>{v}</p>
              <p
                className="uppercase mt-[5px]"
                style={{
                  fontSize: 'var(--font-size-3xs)',
                  color: 'var(--color-ink-dim)',
                  letterSpacing: 'var(--letter-spacing-wide5)',
                }}
              >{l}</p>
            </div>
          ))}
        </motion.div>

      </div>

      {/* ── Right — Hero Photo ── */}
      <motion.div
        className="relative z-10 flex-shrink-0 max-[860px]:mt-12 max-[860px]:w-full max-[860px]:flex max-[860px]:justify-center"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Outer glow ring */}
        <div
          className="relative"
          style={{
            width: 'clamp(240px, 26vw, 380px)',
            height: 'clamp(300px, 33vw, 470px)',
          }}
        >
          {/* Decorative corner brackets */}
          <div
            className="absolute top-[-8px] left-[-8px] w-8 h-8"
            style={{ borderTop: '2px solid var(--color-gold)', borderLeft: '2px solid var(--color-gold)' }}
          />
          <div
            className="absolute bottom-[-8px] right-[-8px] w-8 h-8"
            style={{ borderBottom: '2px solid var(--color-gold)', borderRight: '2px solid var(--color-gold)' }}
          />
          <div
            className="absolute top-[-8px] right-[-8px] w-8 h-8"
            style={{ borderTop: '1px solid #c9973a44', borderRight: '1px solid #c9973a44' }}
          />
          <div
            className="absolute bottom-[-8px] left-[-8px] w-8 h-8"
            style={{ borderBottom: '1px solid #c9973a44', borderLeft: '1px solid #c9973a44' }}
          />

          {/* Glow behind image */}
          <div
            className="absolute inset-0 rounded-[3px]"
            style={{
              background: 'radial-gradient(ellipse at center, #c9973a15 0%, transparent 70%)',
              filter: 'blur(20px)',
              transform: 'scale(1.1)',
            }}
          />

          {/* Photo */}
          <img
            src="/hero-photo.png"
            alt="Sankalp Nagle"
            className="relative w-full h-full object-cover rounded-[3px]"
            style={{
              filter: 'grayscale(20%) contrast(1.05)',
              boxShadow: '0 0 60px #c9973a22, 0 32px 80px rgba(0,0,0,0.6)',
            }}
          />

          {/* Subtle gold overlay at bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-24 rounded-b-[3px]"
            style={{
              background: 'linear-gradient(to top, #c9973a08, transparent)',
            }}
          />

          {/* Floating badge */}
          <motion.div
            className="absolute rounded-[3px] flex items-center gap-2"
            style={{
              bottom: '-18px',
              left: '-24px',
              backgroundColor: 'var(--color-bg-card)',
              border: '1px solid var(--color-stroke)',
              padding: '10px 16px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            <span className="w-[6px] h-[6px] rounded-full bg-green-400 inline-block" style={{ boxShadow: 'var(--shadow-green)' }} />
            <span
              className="font-bold uppercase"
              style={{
                fontSize: 'var(--font-size-3xs)',
                color: 'var(--color-ink-light)',
                letterSpacing: 'var(--letter-spacing-wide4)',
              }}
            >
              Open to Work
            </span>
          </motion.div>
        </div>
      </motion.div>

    </section>
  )
}
