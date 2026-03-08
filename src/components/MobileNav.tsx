import { NAV_ITEMS } from '@/data'

interface MobileNavProps {
  active: string
  onNav:  (id: string) => void
}

export function MobileNav({ active, onNav }: MobileNavProps) {
  return (
    <nav
      id="mob-nav"
      className="hidden max-[860px]:flex fixed bottom-0 left-0 right-0 z-[300] py-[10px] justify-around"
      style={{
        backgroundColor: 'var(--color-bg-dark)',
        borderTop: '1px solid var(--color-stroke)',
      }}
    >
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          className="bg-transparent border-none cursor-pointer flex flex-col items-center gap-[3px] px-2 py-1"
          onClick={() => onNav(item.id)}
        >
          <span
            className="w-1 h-1 rounded-full"
            style={{ backgroundColor: active === item.id ? 'var(--color-gold)' : 'var(--color-stroke-faint)' }}
          />
          <span
            className="font-bold uppercase"
            style={{
              fontSize: 'var(--font-size-4xs)',
              letterSpacing: 'var(--letter-spacing-wide2)',
              color: active === item.id ? 'var(--color-gold)' : 'var(--color-ink-dim)',
            }}
          >
            {item.label}
          </span>
        </button>
      ))}
    </nav>
  )
}
