import { useEffect, useRef, useState } from 'react'
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from 'framer-motion'
import Reveal, { TextReveal } from '../components/Reveal'
import { TextLink } from '../components/LuxeButton'
import { VMark } from '../components/Logo'
import { Diamond, Quote } from '../components/Icons'
import { stats } from '../data/content'
import { assetUrl } from '../lib/assetUrl'

function Counter({ value }) {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const inView = useInView(ref, { once: true, amount: 0.7 })
  const [display, setDisplay] = useState(reduce ? value : 0)

  useEffect(() => {
    if (!inView) return undefined
    if (reduce) {
      setDisplay(value)
      return undefined
    }

    let frame
    const start = performance.now()
    const duration = 1500
    const tick = (now) => {
      const progress = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.round(value * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, value, reduce])

  return (
    <span ref={ref} className="tabular-nums">
      {String(display).padStart(2, '0')}
    </span>
  )
}

export default function About() {
  const imageRef = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], [34, -34])
  const smallY = useTransform(scrollYProgress, [0, 1], [18, -22])

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-cream py-24 text-ink sm:py-28 lg:py-36"
      aria-labelledby="about-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            'radial-gradient(ellipse 42% 48% at 4% 4%, rgba(201,169,106,0.16), transparent 64%), radial-gradient(ellipse 42% 38% at 100% 88%, rgba(201,169,106,0.12), transparent 66%)',
        }}
      />
      <div className="container-luxe relative">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10 xl:gap-16">
          <div ref={imageRef} className="relative lg:col-span-5">
            <motion.div
              style={reduce ? undefined : { y: imageY }}
              className="relative mx-auto max-w-[520px] lg:mx-0"
            >
              <div className="absolute -left-3 -top-3 h-full w-full border border-champagne/45 sm:-left-5 sm:-top-5" />
              <div className="relative overflow-hidden border border-ink/10 bg-ink shadow-[0_35px_90px_-40px_rgba(11,11,10,0.45)]">
                <img
                  src={assetUrl('/images/about.webp')}
                  alt="VELORA editorial fashion story"
                  className="aspect-[4/5] w-full object-cover object-[50%_30%]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-7">
                  <div>
                    <p className="text-[0.48rem] font-semibold uppercase tracking-[0.3em] text-champagne">
                      Maison VELORA
                    </p>
                    <p className="mt-1.5 font-display text-xl font-light italic text-ivory">
                      The art of being yourself.
                    </p>
                  </div>
                  <VMark size={42} className="opacity-80" />
                </div>
              </div>
            </motion.div>

            <motion.div
              style={reduce ? undefined : { y: smallY }}
              className="absolute -bottom-8 right-1 w-[42%] max-w-[210px] border border-white/20 bg-ink p-1.5 shadow-luxe sm:-right-5 sm:bottom-8"
            >
              <img
                src={assetUrl('/images/hero-secondary.webp')}
                alt="Detail of a VELORA seasonal look"
                className="aspect-[3/4] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="flex items-center justify-between px-1 pb-0.5 pt-2">
                <span className="text-[0.4rem] font-semibold uppercase tracking-[0.24em] text-champagne/80">
                  The Edit
                </span>
                <Diamond size={11} className="text-champagne/60" />
              </div>
            </motion.div>

            <div className="absolute -left-4 top-[14%] hidden -rotate-90 origin-left lg:block">
              <span className="text-[0.46rem] font-semibold uppercase tracking-[0.4em] text-ink/30">
                Wear Your Identity · VELORA
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-6 xl:pl-12">
            <Reveal y={16} className="flex items-center gap-4">
              <span className="h-px w-9 bg-champagne" />
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-ink/50">
                03 — Maison VELORA
              </span>
            </Reveal>

            <TextReveal
              id="about-heading"
              as="h2"
              text="Fashion Beyond Trends."
              delay={0.08}
              className="mt-5 font-display text-[clamp(2.75rem,5.4vw,5.3rem)] font-light leading-[0.96] tracking-[-0.025em] text-ink"
            />

            <Reveal delay={0.2} y={18}>
              <p className="mt-6 max-w-2xl text-[0.98rem] font-light leading-[1.9] text-ink/65">
                At VELORA, we believe fashion is more than clothing. It is a reflection of
                confidence, personality and individuality. Explore collections designed to make
                every moment stylish.
              </p>
            </Reveal>

            <Reveal delay={0.28} y={18}>
              <p className="mt-4 max-w-2xl text-[0.9rem] font-light leading-[1.9] text-ink/45">
                Our edit brings together modern silhouettes, traditional craft and everyday
                essentials under one point of view — considered, confident and always personal.
              </p>
            </Reveal>

            <Reveal delay={0.36} y={18} className="mt-8 flex flex-wrap items-center gap-7">
              <TextLink href="#collections">Discover our collections</TextLink>
              <TextLink href="#store">Visit the store</TextLink>
            </Reveal>

            <Reveal delay={0.42} y={18} className="mt-9 border-l border-champagne/50 pl-5">
              <Quote size={22} className="text-champagne/70" />
              <p className="mt-2 max-w-lg font-display text-xl font-light italic leading-relaxed text-ink/65 sm:text-2xl">
                “Style is personal. We simply help you say it.”
              </p>
              <p className="mt-2 text-[0.5rem] font-semibold uppercase tracking-[0.3em] text-ink/40">
                The VELORA Atelier
              </p>
            </Reveal>
          </div>
        </div>

        <Reveal
          y={24}
          delay={0.1}
          className="mt-20 border-y border-ink/10 py-8 sm:mt-24 sm:py-10"
        >
          <div className="grid grid-cols-2 gap-y-9 sm:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`px-2 text-center sm:px-6 ${
                  index !== 0 ? 'sm:border-l sm:border-ink/10' : ''
                }`}
              >
                <p className="font-display text-[2.8rem] font-light leading-none tracking-[-0.03em] text-ink sm:text-[3.6rem]">
                  <Counter value={stat.value} />
                  <span className="text-champagne">{stat.suffix}</span>
                </p>
                <p className="mt-3 text-[0.5rem] font-semibold uppercase tracking-[0.26em] text-ink/45">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
