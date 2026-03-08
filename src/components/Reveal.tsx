import { useRef, type ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'

interface RevealProps {
  children: ReactNode
  d?: number   // delay
  x?: number
  y?: number
}

export function Reveal({ children, d = 0, x = 0, y = 28 }: RevealProps) {
  const ref    = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.7, delay: d, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
