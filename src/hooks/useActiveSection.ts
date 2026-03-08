import { useState, useEffect } from 'react'
import { NAV_ITEMS } from '@/data'

export function useActiveSection(): string {
  const [active, setActive] = useState<string>('home')

  useEffect(() => {
    const ids = NAV_ITEMS.map((n) => n.id)

    const handleScroll = () => {
      const sp = window.scrollY + window.innerHeight * 0.35
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && el.offsetTop <= sp) {
          setActive(ids[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return active
}
