import { motion } from 'framer-motion'
import { NAV_ITEMS } from '@/data'

interface SidebarProps {
  active: string
  onNav: (id: string) => void
}

export function Sidebar({ active, onNav }: SidebarProps) {
  return (
    <aside
      id="sidebar"
      className="fixed left-0 top-0 bottom-0 flex flex-col overflow-hidden z-[200] px-9 pt-[44px] pb-9 max-[860px]:hidden"
      style={{
        width: 'var(--width-sidebar)',
        backgroundColor: 'var(--color-bg-dark)',
        borderRight: '1px solid var(--color-stroke)',
      }}
    >
      {/* Gold gradient right-edge glow */}
      <div className="absolute top-0 right-0 bottom-0 w-px bg-sidebar-border opacity-15" />

      {/* Name block */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-[52px]"
      >
        <p className="cond text-[28px] font-black text-white leading-none" style={{ letterSpacing: 'var(--letter-spacing-tight1)' }}>SANKALP</p>
        <p className="cond text-[28px] font-black leading-none mb-[10px]" style={{ color: 'var(--color-gold)', letterSpacing: 'var(--letter-spacing-tight1)' }}>NAGLE</p>
        <p className="text-[10px] font-bold uppercase" style={{ letterSpacing: 'var(--letter-spacing-badge)', color: 'var(--color-stroke-faint)' }}>Full-Stack Developer</p>
        <div className="w-9 h-[2px] mt-[14px] rounded-[1px]" style={{ backgroundColor: 'var(--color-gold)' }} />
      </motion.div>

      {/* Nav links */}
      <nav className="flex-1">
        {NAV_ITEMS.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.18 + i * 0.08 }}
          >
            <div
              className={`nl ${active === item.id ? 'on' : ''}`}
              onClick={() => onNav(item.id)}
            >
              <span className="d" />
              {item.label}
              <span className="bar" />
            </div>
          </motion.div>
        ))}
      </nav>

      {/* Sidebar footer */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
        <div className="flex gap-2 mb-5">
          {['in', 'gh', 'tw'].map((s) => (
            <div key={s} className="soc">{s}</div>
          ))}
        </div>
        <p className="text-[8px] uppercase" style={{ color: 'var(--color-ink-faint)', letterSpacing: 'var(--letter-spacing-wide2)' }}>© 2025 Sankalp Nagle</p>
      </motion.div>
    </aside>
  )
}
