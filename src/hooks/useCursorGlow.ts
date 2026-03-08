import { useState, useEffect } from 'react'

interface CursorPosition {
  x: number
  y: number
}

export function useCursorGlow(): CursorPosition {
  const [cursor, setCursor] = useState<CursorPosition>({ x: -999, y: -999 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return cursor
}
