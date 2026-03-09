import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HERO_STATS } from "@/data";

interface HeroSectionProps {
  onNav: (id: string) => void;
}

interface CountUpValueProps {
  value: string;
  className?: string;
  style?: React.CSSProperties;
  duration?: number;
  delay?: number;
}

function CountUpValue({
  value,
  className,
  style,
  duration = 1200,
  delay = 0,
}: CountUpValueProps) {
  const match = value.match(/-?\d+(?:\.\d+)?/);

  if (!match || match.index === undefined) {
    return (
      <p className={className} style={style}>
        {value}
      </p>
    );
  }

  const numericPart = match[0];
  const target = Number.parseFloat(numericPart);
  const prefix = value.slice(0, match.index);
  const suffix = value.slice(match.index + numericPart.length);
  const decimalPlaces = numericPart.includes(".")
    ? numericPart.split(".")[1].length
    : 0;

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    let frameId = 0;
    let timeoutId = 0;
    let startTime = 0;

    const step = (timestamp: number) => {
      if (!startTime) {
        startTime = timestamp;
      }

      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(target * eased);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(step);
      }
    };

    timeoutId = window.setTimeout(() => {
      frameId = window.requestAnimationFrame(step);
    }, delay);

    return () => {
      window.clearTimeout(timeoutId);
      window.cancelAnimationFrame(frameId);
    };
  }, [delay, duration, target]);

  const formatted =
    decimalPlaces > 0
      ? display.toFixed(decimalPlaces)
      : Math.round(display).toString();

  return (
    <p className={className} style={style}>
      {prefix}
      {formatted}
      {suffix}
    </p>
  );
}

export function HeroSection({ onNav }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative flex items-center justify-start gap-12 overflow-hidden max-[1024px]:flex-col max-[1024px]:items-start max-[1024px]:gap-8"
      style={{
        minHeight: "clamp(460px, 70svh, 640px)",
        backgroundColor: "var(--color-bg)",
        padding:
          "clamp(48px, 7vh, 72px) clamp(18px, 5vw, 64px) clamp(36px, 6vh, 56px)",
      }}
    >
      {/* Giant decorative background word */}
      {/* <div
        className="bg-word"
        style={{
          fontSize: "clamp(160px, 22vw, 300px)",
          right: "-20px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        CODE
      </div> */}

      {/* Vertical accent lines */}
      <div className="absolute left-[64px] top-0 bottom-0 w-px bg-accent-strong max-[1024px]:hidden" />
      <div className="absolute left-[108px] top-0 bottom-0 w-px bg-accent-soft max-[1024px]:hidden" />

      <motion.div
        className="absolute right-[clamp(18px,5vw,64px)] top-[clamp(18px,3vh,30px)] z-20 flex items-center gap-4 max-[1024px]:relative max-[1024px]:right-auto max-[1024px]:top-auto max-[1024px]:order-0 max-[1024px]:w-full max-[1024px]:justify-end"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.2 }}
      >
        <a
          href="/cv/Sankalp_Resume.pdf"
          download="Sankalp_Resume.pdf"
          className="cond uppercase transition-colors duration-200"
          style={{
            fontSize: "10px",
            letterSpacing: "var(--letter-spacing-wide6)",
            color: "var(--color-ink-muted)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--color-gold)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "var(--color-ink-muted)")
          }
        >
          Resume
        </a>
        <span style={{ color: "var(--color-stroke-faint)", fontSize: "10px" }}>
          /
        </span>
        <a
          href="/cv/Sankalp_cover.pdf"
          download="Sankalp_cover.pdf"
          className="cond uppercase transition-colors duration-200"
          style={{
            fontSize: "10px",
            letterSpacing: "var(--letter-spacing-wide6)",
            color: "var(--color-ink-muted)",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--color-gold)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "var(--color-ink-muted)")
          }
        >
          Cover Letter
        </a>
      </motion.div>

      {/* ── Left content — wider ── */}
      <div
        className="relative z-10 flex-1 min-w-0 pr-6 max-[1024px]:order-2 max-[1024px]:pr-0 max-[1024px]:w-full"
        style={{ maxWidth: "640px" }}
      >
        {/* Available badge */}
        <motion.div
          className="flex items-center gap-3 mb-7"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="w-9 h-px"
            style={{ backgroundColor: "var(--color-gold)" }}
          />
          <span
            className="text-[10px] font-bold uppercase"
            style={{
              letterSpacing: "var(--letter-spacing-wide8)",
              color: "var(--color-gold)",
            }}
          >
            Available for opportunities
          </span>
          <span
            className="w-[6px] h-[6px] rounded-full bg-green-400 inline-block"
            style={{ boxShadow: "var(--shadow-green)" }}
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="cond hero-h1 font-black uppercase text-white"
          style={{ letterSpacing: "var(--letter-spacing-tight1)" }}
          initial={{ opacity: 0, y: 56 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          Full-Stack
          <br />
          <span style={{ color: "var(--color-gold)" }}>Web</span>
          <br />
          Developer
        </motion.h1>

        {/* Gold rule */}
        <motion.div
          className="w-[88px] h-[2px] my-7"
          style={{ backgroundColor: "var(--color-gold)" }}
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.55 }}
        />

        {/* Subtitle */}
        <motion.p
          className="leading-[1.8] mb-7"
          style={{
            fontSize: "clamp(15px, 3.8vw, 18px)",
            color: "var(--color-ink-muted)",
            maxWidth: "540px",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          2.6+ years building scalable MERN stack applications with cloud
          deployments on AWS and automated CI/CD pipelines that ship with
          confidence.
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
              fontSize: "var(--font-size-2xs)",
              letterSpacing: "var(--letter-spacing-wide7)",
              backgroundColor: "var(--color-gold)",
              color: "var(--color-bg-darker)",
              padding: "14px 38px",
            }}
            whileHover={{ scale: 1.04, boxShadow: "0 0 32px #c9973a44" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onNav("work")}
          >
            View Work
          </motion.button>
          <motion.button
            className="cond font-bold uppercase cursor-pointer rounded-[2px] transition-all duration-[250ms]"
            style={{
              fontSize: "var(--font-size-2xs)",
              letterSpacing: "var(--letter-spacing-wide7)",
              backgroundColor: "transparent",
              color: "var(--color-ink-muted)",
              padding: "14px 38px",
              border: "1px solid var(--color-stroke-faint)",
            }}
            whileHover={{
              scale: 1.04,
              borderColor: "#c9973a",
              color: "#c9973a",
            }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onNav("contact")}
          >
            Hire Me
          </motion.button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="flex gap-9 mt-8 pt-5 max-[1024px]:grid max-[1024px]:grid-cols-2 max-[1024px]:gap-5 max-[1024px]:mt-8 max-[560px]:grid-cols-1"
          style={{ borderTop: "1px solid var(--color-stroke)" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          {HERO_STATS.map(([v, l], i) => (
            <div key={l}>
              <CountUpValue
                value={v}
                className="cond text-white w-fit mx-auto leading-none font-black"
                style={{ fontSize: "clamp(30px, 8vw, 40px)" }}
                delay={1100 + i * 120}
              />
              <p
                className="uppercase mt-[7px]"
                style={{
                  fontSize: "var(--font-size-3xs)",
                  color: "var(--color-ink-faint)",
                  letterSpacing: "var(--letter-spacing-wide5)",
                }}
              >
                {l}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Right — Hero Photo ── */}
      <motion.div
        className="relative -top-[14px] left-[28px] z-10 self-center shrink-0 -ml-8 max-[1440px]:-ml-6 max-[1280px]:-ml-5 max-[1024px]:order-1 max-[1024px]:top-0 max-[1024px]:left-0 max-[1024px]:ml-0 max-[1024px]:w-full max-[1024px]:flex max-[1024px]:justify-start max-[560px]:justify-center"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Outer glow ring */}
        <div
          className="relative max-[560px]:mx-auto"
          style={{
            width: "clamp(180px, 42vw, 300px)",
            height: "clamp(260px, 62vw, 430px)",
          }}
        >
          {/* Decorative corner brackets */}
          <div
            className="absolute top-[-8px] left-[-8px] w-8 h-8"
            style={{
              borderTop: "2px solid var(--color-gold)",
              borderLeft: "2px solid var(--color-gold)",
            }}
          />
          <div
            className="absolute bottom-[-8px] right-[-8px] w-8 h-8"
            style={{
              borderBottom: "2px solid var(--color-gold)",
              borderRight: "2px solid var(--color-gold)",
            }}
          />
          <div
            className="absolute top-[-8px] right-[-8px] w-8 h-8"
            style={{
              borderTop: "1px solid #c9973a44",
              borderRight: "1px solid #c9973a44",
            }}
          />
          <div
            className="absolute bottom-[-8px] left-[-8px] w-8 h-8"
            style={{
              borderBottom: "1px solid #c9973a44",
              borderLeft: "1px solid #c9973a44",
            }}
          />

          {/* Glow behind image */}
          <div
            className="absolute inset-0 rounded-[3px]"
            style={{
              background:
                "radial-gradient(ellipse at center, #c9973a15 0%, transparent 70%)",
              filter: "blur(20px)",
              transform: "scale(1.1)",
            }}
          />

          {/* Photo */}
          <img
            src="/hero-photo.png"
            alt="Sankalp Nagle"
            className="relative w-full h-full object-cover rounded-[3px]"
            style={{
              filter: "grayscale(20%) contrast(1.05)",
              boxShadow: "0 0 44px #c9973a1a, 0 24px 64px rgba(0,0,0,0.5)",
            }}
          />

          {/* Subtle gold overlay at bottom */}
          <div
            className="absolute bottom-0 left-0 right-0 h-24 rounded-b-[3px]"
            style={{
              background: "linear-gradient(to top, #c9973a08, transparent)",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
