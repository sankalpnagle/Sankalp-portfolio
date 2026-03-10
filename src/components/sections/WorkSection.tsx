import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { EXP, PROJECTS } from "@/data";
import type { Project } from "@/types";

function SectionDivider({ label }: { label: string }) {
  return (
    <div
      className="flex items-center gap-4 font-bold uppercase mb-8"
      style={{
        fontSize: "var(--font-size-2xs)",
        letterSpacing: "var(--letter-spacing-nav)",
        color: "var(--color-ink-dimmer)",
      }}
    >
      {label}
      <div
        className="flex-1 h-px"
        style={{ backgroundColor: "var(--color-stroke)" }}
      />
    </div>
  );
}

export function WorkSection() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (!activeProject) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveProject(null);
      }

      if (event.key === "ArrowRight") {
        setActiveImage(
          (idx) => (idx + 1) % Math.max(activeProject.images.length, 1),
        );
      }

      if (event.key === "ArrowLeft") {
        setActiveImage((idx) => {
          const count = Math.max(activeProject.images.length, 1);
          return (idx - 1 + count) % count;
        });
      }
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeProject]);

  const openProject = (project: Project) => {
    setActiveProject(project);
    setActiveImage(0);
  };

  return (
    <section
      id="work"
      style={{
        backgroundColor: "var(--color-bg)",
        padding: "clamp(64px, 8vh, 88px) clamp(24px, 5vw, 64px)",
      }}
    >
      <Reveal>
        <div className="sec-tag">My Work</div>
        <h2 className="sec-h">
          Experience &<br />
          <em>Projects</em>
        </h2>
      </Reveal>

      <Reveal d={0.05}>
        <SectionDivider label="Work Experience" />
      </Reveal>

      <div className="tl mb-[72px]">
        {EXP.map((e, i) => (
          <Reveal key={i} d={i * 0.13}>
            <motion.div
              className="tl-item pl-6 max-[1024px]:pl-4 max-[560px]:pl-3"
              whileHover={{ x: 4 }}
            >
              <div className="tl-dot" />
              <div className="card">
                <div className="flex flex-wrap justify-between gap-2 mb-4">
                  <div>
                    <h3
                      className="font-bold text-white mb-1"
                      style={{ fontSize: "clamp(16px, 4.2vw, 18px)" }}
                    >
                      {e.role}
                    </h3>
                    <p
                      className="font-semibold"
                      style={{
                        fontSize: "14px",
                        color: "var(--color-gold)",
                        letterSpacing: "var(--letter-spacing-wide2)",
                      }}
                    >
                      {e.co} · {e.loc}
                    </p>
                  </div>
                  <span
                    className="cond font-bold uppercase rounded-[2px] self-start"
                    style={{
                      fontSize: "12px",
                      padding: "4px 12px",
                      border: "1px solid var(--color-gold-border)",
                      color: "var(--color-gold)",
                      letterSpacing: "var(--letter-spacing-wide2)",
                    }}
                  >
                    {e.period}
                  </span>
                </div>
                <ul className="list-none space-y-1">
                  {e.pts.map((p, j) => (
                    <li
                      key={j}
                      className="flex gap-[10px] leading-[1.75]"
                      style={{
                        fontSize: "clamp(14px, 3.8vw, 16px)",
                        color: "var(--color-ink-faint)",
                      }}
                    >
                      <span
                        style={{ color: "var(--color-gold)", flexShrink: 0 }}
                      >
                        —
                      </span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>

      <Reveal d={0.05}>
        <SectionDivider label="Featured Projects" />
      </Reveal>

      <div
        className="grid gap-5"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(270px, 1fr))" }}
      >
        {PROJECTS.map((p, i) => (
          <Reveal key={i} d={i * 0.13}>
            <motion.div
              className="card h-full cursor-pointer"
              whileHover={{ borderColor: "#c9973a44", y: -6 }}
              onClick={() => openProject(p)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openProject(p);
                }
              }}
            >
              <div className="flex justify-between items-start mb-[18px]">
                <span
                  className="cond font-black leading-none select-none"
                  style={{ fontSize: "52px", color: "var(--color-ink-dimmer)" }}
                >
                  {p.n}
                </span>
                <span style={{ fontSize: "26px" }}>{p.emoji}</span>
              </div>
              <div
                className="w-7 h-[2px] mb-[14px]"
                style={{ backgroundColor: "var(--color-gold)" }}
              />
              <h3
                className="font-bold text-white mb-[10px]"
                style={{ fontSize: "20px" }}
              >
                {p.name}
              </h3>
              <p
                className="leading-[1.75] mb-5"
                style={{ fontSize: "15px", color: "var(--color-ink-muted)" }}
              >
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-[6px]">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <p
                className="uppercase mt-5"
                style={{
                  fontSize: "10px",
                  color: "var(--color-gold)",
                  letterSpacing: "var(--letter-spacing-wide6)",
                }}
              >
                view details
              </p>
            </motion.div>
          </Reveal>
        ))}
      </div>

      {activeProject && (
        <div
          className="fixed inset-0 z-[500] p-4 max-[560px]:p-2"
          onClick={() => setActiveProject(null)}
        >
          <div className="absolute inset-0 bg-black/75" />

          <motion.div
            className="relative z-10 h-full flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <motion.div
              className="card w-full max-w-[960px] max-h-[92vh] overflow-y-auto"
              style={{
                backgroundColor: "#111113",
                borderColor: "var(--color-gold-border)",
              }}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex justify-between items-start gap-4 mb-5">
                <div>
                  <p
                    className="uppercase mb-2"
                    style={{
                      fontSize: "11px",
                      color: "var(--color-gold)",
                      letterSpacing: "var(--letter-spacing-wide6)",
                    }}
                  >
                    Project Details
                  </p>
                  <h3
                    className="font-bold text-white"
                    style={{ fontSize: "clamp(22px, 4vw, 30px)" }}
                  >
                    {activeProject.emoji} {activeProject.name}
                  </h3>
                </div>

                <button
                  className="cursor-pointer border-none rounded-[2px] px-3 py-2"
                  style={{
                    backgroundColor: "#1c1c20",
                    color: "var(--color-ink-light)",
                  }}
                  onClick={() => setActiveProject(null)}
                >
                  Close
                </button>
              </div>

              <div className="grid grid-cols-[1.2fr_1fr] gap-6 max-[1024px]:grid-cols-1">
                <div>
                  <div
                    className="overflow-hidden rounded-[3px] border"
                    style={{ borderColor: "var(--color-stroke-dark)" }}
                  >
                    <img
                      src={activeProject.images[activeImage]}
                      alt={`${activeProject.name} preview ${activeImage + 1}`}
                      className="w-full h-[320px] max-[560px]:h-[220px] object-fill bg-[#0e0e10]"
                    />
                  </div>

                  {activeProject.images.length > 1 && (
                    <div className="flex gap-2 mt-3">
                      {activeProject.images.map((img, idx) => (
                        <button
                          key={img}
                          className="cursor-pointer border-none p-0"
                          onClick={() => setActiveImage(idx)}
                          style={{
                            opacity: activeImage === idx ? 1 : 0.55,
                            outline:
                              activeImage === idx
                                ? "1px solid var(--color-gold)"
                                : "1px solid var(--color-stroke-dark)",
                          }}
                        >
                          <img
                            src={img}
                            alt={`${activeProject.name} thumbnail ${idx + 1}`}
                            className="w-[92px] h-[62px] object-center bg-[#0e0e10]"
                          />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <p
                    className="leading-[1.8] mb-5"
                    style={{
                      fontSize: "15px",
                      color: "var(--color-ink-faint)",
                    }}
                  >
                    {activeProject.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {activeProject.tags.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="cond font-bold uppercase rounded-[2px]"
                      style={{
                        fontSize: "11px",
                        letterSpacing: "var(--letter-spacing-wide6)",
                        color: "var(--color-bg-darker)",
                        backgroundColor: "var(--color-gold)",
                        padding: "11px 18px",
                      }}
                    >
                      GitHub Repo
                    </a>
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="cond font-bold uppercase rounded-[2px]"
                      style={{
                        fontSize: "11px",
                        letterSpacing: "var(--letter-spacing-wide6)",
                        color: "var(--color-ink-light)",
                        border: "1px solid var(--color-stroke-faint)",
                        padding: "11px 18px",
                      }}
                    >
                      Live URL
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
