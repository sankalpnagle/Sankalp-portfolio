export function Footer() {
  return (
    <footer
      className="flex justify-between items-center flex-wrap gap-3"
      style={{
        backgroundColor: "var(--color-bg-darker)",
        borderTop: "1px solid var(--color-stroke)",
        padding: "24px clamp(24px, 5vw, 64px)",
      }}
    >
      <p
        className="cond font-black text-white"
        style={{
          fontSize: "18px",
          letterSpacing: "var(--letter-spacing-tight1)",
        }}
      >
        SANKALP <span style={{ color: "var(--color-gold)" }}>NAGLE</span>
      </p>
      <p
        className="uppercase"
        style={{
          fontSize: "var(--font-size-4xs)",
          color: "var(--color-ink-faint)",
          letterSpacing: "var(--letter-spacing-wide4)",
        }}
      >
        React · Tailwind v4 · Framer Motion · © 2025
      </p>
    </footer>
  );
}
