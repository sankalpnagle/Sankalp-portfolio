import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { INFO_GRID, STAT_BOXES } from "@/data";

export function AboutSection() {
  return (
    <section
      id="about"
      className="flex items-center"
      style={{
        minHeight: "auto",
        backgroundColor: "var(--color-bg-2)",
        padding: "clamp(64px, 8vh, 88px) clamp(24px, 5vw, 64px)",
      }}
    >
      <div className="w-full">
        <Reveal>
          <div className="sec-tag">About Me</div>
          <h2 className="sec-h">
            Know Me
            <br />
            <em>More</em>
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-[60px] items-start max-[1024px]:grid-cols-1 max-[1024px]:gap-10">
          {/* Left */}
          <div>
            <Reveal d={0.1}>
              <p
                className="leading-[1.9] mb-[18px]"
                style={{ fontSize: "16px", color: "var(--color-ink-soft)" }}
              >
                I'm a{" "}
                <strong
                  style={{ color: "var(--color-ink-base)", fontWeight: 600 }}
                >
                  Full-Stack Web Developer
                </strong>{" "}
                with 2.6+ years crafting clean, efficient and user-focused web
                applications. I specialise in the{" "}
                <strong style={{ color: "var(--color-gold)", fontWeight: 600 }}>
                  MERN stack
                </strong>{" "}
                alongside cloud-powered, production-ready deployments.
              </p>
              <p
                className="leading-[1.9] mb-9"
                style={{ fontSize: "16px", color: "var(--color-ink-soft)" }}
              >
                From designing RESTful APIs to orchestrating automated CI/CD
                pipelines, I build solutions that scale without compromise.
                Great software is as much about maintainability as features.
              </p>
            </Reveal>

            <Reveal d={0.18}>
              <div className="grid grid-cols-2 gap-x-7 gap-y-[14px] max-[560px]:grid-cols-1">
                {INFO_GRID.map(([k, v]) => (
                  <div
                    key={k}
                    className="pb-[10px]"
                    style={{ borderBottom: "1px solid var(--color-stroke)" }}
                  >
                    <p
                      className="font-bold uppercase mb-1"
                      style={{
                        fontSize: "var(--font-size-sm)",
                        color: "var(--color-gold)",
                        letterSpacing: "var(--letter-spacing-wide6)",
                      }}
                    >
                      {k}
                    </p>
                    <p
                      style={{
                        fontSize: "16px",
                        color: "var(--color-ink-light)",
                      }}
                    >
                      {v}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal d={0.28}>
              <motion.a
                href="mailto:sankalp.nagle07@gmail.com"
                className="cond inline-block mt-7 font-bold uppercase rounded-[2px] cursor-pointer"
                style={{
                  fontSize: "var(--font-size-2xs)",
                  letterSpacing: "var(--letter-spacing-wide7)",
                  backgroundColor: "var(--color-gold)",
                  color: "var(--color-bg-darker)",
                  padding: "13px 32px",
                }}
                whileHover={{ scale: 1.02, boxShadow: "0 0 24px #c9973a33" }}
              >
                Contact Me →
              </motion.a>
            </Reveal>
          </div>

          {/* Right — stat cards */}
          <div>
            <Reveal d={0.12}>
              <div className="grid grid-cols-2 gap-4 max-[560px]:grid-cols-1">
                {STAT_BOXES.map(({ n, l, ico }, i) => (
                  <motion.div
                    key={n}
                    className="card text-center"
                    style={{
                      paddingTop: 30,
                      paddingBottom: 30,
                      paddingLeft: 16,
                      paddingRight: 16,
                    }}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.55 }}
                    viewport={{ once: true }}
                    whileHover={{ borderColor: "#c9973a44", y: -4 }}
                  >
                    <div className="text-2xl mb-[10px]">{ico}</div>
                    <p
                      className="cond font-black leading-none"
                      style={{ fontSize: "44px", color: "var(--color-gold)" }}
                    >
                      {n}
                    </p>
                    <p
                      className="uppercase mt-2 whitespace-pre-line"
                      style={{
                        fontSize: "var(--font-size-3xs)",
                        color: "var(--color-ink-faint)",
                        letterSpacing: "var(--letter-spacing-wide3)",
                      }}
                    >
                      {l}
                    </p>
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
