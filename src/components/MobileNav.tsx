import { NAV_ITEMS } from "@/data";

interface MobileNavProps {
  active: string;
  onNav: (id: string) => void;
}

export function MobileNav({ active, onNav }: MobileNavProps) {
  const MOBILE_LABELS: Record<string, string> = {
    home: "Home",
    about: "About",
    work: "Work",
    skills: "Skills",
    contact: "Contact",
  };

  return (
    <nav
      id="mob-nav"
      className="hidden max-[1024px]:flex fixed bottom-0 left-0 right-0 z-[300] py-[8px] px-1 justify-between"
      style={{
        backgroundColor: "var(--color-bg-dark)",
        borderTop: "1px solid var(--color-stroke)",
      }}
    >
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          className="bg-transparent border-none cursor-pointer flex flex-col items-center gap-[3px] px-1 py-1 min-w-0 flex-1"
          onClick={() => onNav(item.id)}
        >
          <span
            className="w-1 h-1 rounded-full"
            style={{
              backgroundColor:
                active === item.id
                  ? "var(--color-gold)"
                  : "var(--color-stroke-faint)",
            }}
          />
          <span
            className="font-bold uppercase"
            style={{
              fontSize: "clamp(0.5rem, 1.2vw, 0.68rem)",
              letterSpacing: "0.12em",
              color:
                active === item.id
                  ? "var(--color-gold)"
                  : "var(--color-ink-dim)",
            }}
          >
            {MOBILE_LABELS[item.id] ?? item.label}
          </span>
        </button>
      ))}
    </nav>
  );
}
