import { motion } from 'framer-motion'
import { Reveal } from '@/components/Reveal'
import { CONTACT_INFO } from '@/data'

export function ContactSection() {
  return (
    <section
      id="contact"
      className="flex flex-col justify-center max-[860px]:px-6 max-[860px]:py-[72px]"
      style={{
        minHeight: '100vh',
        backgroundColor: 'var(--color-bg)',
        padding: '96px 64px',
      }}
    >
      <Reveal>
        <div className="sec-tag">Get In Touch</div>
        <h2 className="sec-h">Let's Work<br /><em>Together</em></h2>
      </Reveal>

      <div className="grid gap-[60px] max-[860px]:grid-cols-1 max-[860px]:gap-10" style={{ gridTemplateColumns: '1fr 1.15fr' }}>

        <div>
          <Reveal d={0.1}>
            <p className="leading-[1.85] mb-10" style={{ fontSize: '14px', color: 'var(--color-ink-body)' }}>
              I'm open to full-time roles and freelance projects. If you have an exciting
              challenge in mind, let's connect and build something impactful together.
            </p>
          </Reveal>

          {CONTACT_INFO.map(({ ico, l, v, h }, i) => (
            <Reveal key={l} d={0.14 + i * 0.08}>
              <div className="flex gap-4 items-start mb-[22px]">
                <div
                  className="flex items-center justify-center rounded-full shrink-0"
                  style={{
                    width: 38, height: 38,
                    border: '1px solid var(--color-stroke)',
                    color: 'var(--color-gold)',
                    fontSize: '15px',
                  }}
                >
                  {ico}
                </div>
                <div>
                  <p
                    className="font-bold uppercase mb-[3px]"
                    style={{ fontSize: 'var(--font-size-3xs)', letterSpacing: 'var(--letter-spacing-wide6)', color: 'var(--color-ink-muted)' }}
                  >{l}</p>
                  {h
                    ? <a href={h} className="transition-colors duration-200" style={{ fontSize: '13px', color: 'var(--color-ink-light)' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-gold)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-ink-light)')}
                      >{v}</a>
                    : <span style={{ fontSize: '13px', color: 'var(--color-ink-light)' }}>{v}</span>
                  }
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal d={0.4}>
            <div className="flex gap-[9px] mt-8">
              {[['in', 'LinkedIn'], ['gh', 'GitHub'], ['tw', 'Twitter']].map(([s, label]) => (
                <motion.div key={s} className="soc" title={label} whileHover={{ scale: 1.15 }}>
                  {s}
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal d={0.15} x={30} y={0}>
          <div className="card" style={{ padding: 40 }}>
            <p
              className="font-bold uppercase mb-7"
              style={{ fontSize: 'var(--font-size-2xs)', letterSpacing: 'var(--letter-spacing-wide8)', color: 'var(--color-gold)' }}
            >
              Send a Message
            </p>

            <div className="grid grid-cols-2 gap-[14px] mb-[14px]">
              <div>
                <label
                  className="font-bold uppercase block mb-2"
                  style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-ink-muted)', letterSpacing: 'var(--letter-spacing-wide5)' }}
                >Name</label>
                <input className="inp" type="text" placeholder="Your name" />
              </div>
              <div>
                <label
                  className="font-bold uppercase block mb-2"
                  style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-ink-muted)', letterSpacing: 'var(--letter-spacing-wide5)' }}
                >Email</label>
                <input className="inp" type="email" placeholder="hello@email.com" />
              </div>
            </div>

            <div className="mb-[14px]">
              <label
                className="font-bold uppercase block mb-2"
                style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-ink-muted)', letterSpacing: 'var(--letter-spacing-wide5)' }}
              >Subject</label>
              <input className="inp" type="text" placeholder="Project inquiry" />
            </div>

            <div className="mb-6">
              <label
                className="font-bold uppercase block mb-2"
                style={{ fontSize: 'var(--font-size-3xs)', color: 'var(--color-ink-muted)', letterSpacing: 'var(--letter-spacing-wide5)' }}
              >Message</label>
              <textarea className="inp" rows={5} placeholder="Tell me about your project..." />
            </div>

            <motion.button
              className="cond w-full font-bold uppercase rounded-[2px] cursor-pointer border-none"
              style={{
                fontSize: 'var(--font-size-2xs)',
                letterSpacing: 'var(--letter-spacing-wide8)',
                backgroundColor: 'var(--color-gold)',
                color: 'var(--color-bg-darker)',
                padding: '15px',
              }}
              whileHover={{ scale: 1.02, boxShadow: '0 0 28px #c9973a44' }}
              whileTap={{ scale: 0.97 }}
            >
              Send Message →
            </motion.button>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
