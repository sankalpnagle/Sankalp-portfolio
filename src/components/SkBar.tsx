import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SkBarProps {
  name: string
  pct:  number
  d?:   number
}

export function SkBar({ name, pct, d = 0 }: SkBarProps) {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true })

  return (
    <div className="sb-wrap" ref={ref}>
      <div className="sb-meta">
        <span className="sb-name">{name}</span>
        <span className="sb-pct">{pct}%</span>
      </div>
      <div className="sb-track">
        <motion.div
          className="sb-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1.3, delay: d + 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  )
}
