import { motion } from 'framer-motion'
import { Reveal } from '@/components/Reveal'
import { SkBar }  from '@/components/SkBar'
import { SKILLS_DATA, TECH } from '@/data'

function SubLabel({ label }: { label: string }) {
  return (
    <div
      className="flex items-center gap-4 font-bold uppercase mb-[30px]"
      style={{
        fontSize: 'var(--font-size-2xs)',
        letterSpacing: 'var(--letter-spacing-nav)',
        color: 'var(--color-ink-dimmer)',
      }}
    >
      {label}
      <div className="flex-1 h-px" style={{ backgroundColor: 'var(--color-stroke)' }} />
    </div>
  )
}

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="max-[860px]:px-6 max-[860px]:py-[72px]"
      style={{
        backgroundColor: 'var(--color-bg-2)',
        padding: '96px 64px',
      }}
    >
      <Reveal>
        <div className="sec-tag">Skills</div>
        <h2 className="sec-h">My <em>Expertise</em></h2>
      </Reveal>

      <div className="grid grid-cols-2 gap-16 max-[860px]:grid-cols-1 max-[860px]:gap-10">

        <div>
          <Reveal d={0.08}><SubLabel label="Proficiency Levels" /></Reveal>
          {SKILLS_DATA.map((s, i) => (
            <Reveal key={s.name} d={i * 0.06}>
              <SkBar name={s.name} pct={s.pct} d={i * 0.06} />
            </Reveal>
          ))}
        </div>

        <div>
          <Reveal d={0.1}>
            <SubLabel label="Technologies" />
            <div className="flex flex-wrap gap-[7px] mb-[52px]">
              {TECH.map((t, i) => (
                <motion.span
                  key={t}
                  className="tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.035, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </Reveal>

          <Reveal d={0.18}>
            <SubLabel label="Education" />
            <div className="card">
              <p
                className="font-bold uppercase mb-2"
                style={{ fontSize: 'var(--font-size-2xs)', color: 'var(--color-gold)', letterSpacing: 'var(--letter-spacing-wide5)' }}
              >
                Sept 2016 – July 2020
              </p>
              <h4 className="font-bold text-white mb-[5px]" style={{ fontSize: '15px' }}>
                B.E. Computer Science &amp; Engineering
              </h4>
              <p style={{ fontSize: '12px', color: 'var(--color-ink-body)' }}>
                IPS Academy — Institute of Engineering &amp; Science
              </p>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  )
}
