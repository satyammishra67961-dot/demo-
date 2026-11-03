import { lazy, Suspense, useRef } from 'react'
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion'
import LuxeButton from '../components/LuxeButton'
import { VMark } from '../components/Logo'
import { ArrowDown, Sparkle } from '../components/Icons'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { assetUrl } from '../lib/assetUrl'

const HeroScene = lazy(() => import('../components/three/HeroScene'))

const ease = [0.22, 1, 0.36, 1]

const lineVariants = {
  hidden: { y: '112%', rotate: 2 },
  visible: (i) => ({
    y: 0,
    rotate: 0,
    transition: { duration: 1.05, delay: 0.12 + i * 0.1, ease },
  }),
}

const fadeVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease },
  }),
}

function RotatingStamp() {
  return (
    <div className="relative h-[102px] w-[102px]">
      <div className="absolute inset-0 rounded-full border border-champagne/25 bg-ink/45 backdrop-blur-md" />
      <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full animate-spin-slow">
        <defs>
          <path id="velora-stamp-path" d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0" />
        </defs>
        <text fill="#c9a96a" fontSize="7.4" letterSpacing="2.9" fontFamily="Manrope, sans-serif" fontWeight="600">
          <textPath href="#velora-stamp-path" startOffset="0%">
            VELORA · WEAR YOUR IDENTITY · SINCE THE FIRST STITCH ·
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center">
        <VMark size={28} />
      </span>
    </div>
  )
}

export default function Hero({ ready }) {
  const sectionRef = useRef(null)
  const reduce = useReducedMotion()
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 55, damping: 18, mass: 0.7 })
  const springY = useSpring(mouseY, { stiffness: 55, damping: 18, mass: 0.7 })

  const rotateY = useTransform(springX, [-0.5, 0.5], [-6.5, 6.5])
  const rotateX = useTransform(springY, [-0.5, 0.5], [4.5, -4.5])
  const imageX = useTransform(springX, [-0.5, 0.5], [-12, 12])
  const imageY = useTransform(springY, [-0.5, 0.5], [-10, 10])
  const badgeX = useTransform(springX, [-0.5, 0.5], [16, -16])
  const badgeY = useTransform(springY, [-0.5, 0.5], [12, -12])
  const smallX = useTransform(springX, [-0.5, 0.5], [-24, 24])
  const smallY = useTransform(springY, [-0.5, 0.5], [-16, 16])

  const onPointerMove = (event) => {
    if (reduce || !sectionRef.current || event.pointerType !== 'mouse') return
    const rect = sectionRef.current.getBoundingClientRect()
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  const resetParallax = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <section
      id="home"
      ref={sectionRef}
      onPointerMove={onPointerMove}
      onPointerLeave={resetParallax}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink text-ivory"
      aria-labelledby="hero-title"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 52% 62% at 72% 38%, rgba(201,169,106,0.16), transparent 62%), radial-gradient(ellipse 44% 55% at 12% 88%, rgba(201,169,106,0.07), transparent 65%), linear-gradient(180deg, #0b0b0a 0%, #0d0c0b 55%, #0b0b0a 100%)',
        }}
      />
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
        <span className="absolute left-[52%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.055] to-transparent" />
        <span className="absolute left-8 top-0 h-full w-px bg-white/[0.035]" />
        <span className="absolute right-8 top-0 h-full w-px bg-white/[0.035]" />
        <span className="absolute left-8 top-1/3 h-px w-16 bg-champagne/20" />
        <span className="absolute right-8 top-2/3 h-px w-16 bg-champagne/20" />
      </div>

      {ready && isDesktop && (
        <div
          className="pointer-events-none absolute right-0 top-0 hidden h-full w-[60%] opacity-90 lg:block"
          aria-hidden="true"
        >
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        </div>
      )}

      <div className="container-luxe relative z-10 grid w-full grid-cols-1 items-center gap-14 pb-20 pt-32 sm:pt-36 lg:min-h-[100svh] lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-28">
        <div className="lg:col-span-6 xl:col-span-6">
          <motion.div
            initial={reduce ? false : 'hidden'}
            animate={ready ? 'visible' : 'hidden'}
            variants={fadeVariants}
            custom={0.1}
            className="flex items-center gap-3.5"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-champagne shadow-gold-glow" />
            <p className="text-[0.58rem] font-semibold uppercase tracking-[0.32em] text-champagne/90">
              The House of VELORA
            </p>
            <span className="h-px w-9 bg-champagne/35" />
            <p className="hidden text-[0.54rem] font-medium uppercase tracking-[0.28em] text-ivory/35 sm:block">
              New Season Edit
            </p>
          </motion.div>

          <h1
            id="hero-title"
            aria-label="Style that speaks."
            className="mt-7 font-display text-[clamp(4.1rem,12vw,9.3rem)] font-light uppercase leading-[0.79] tracking-[-0.045em] text-ivory sm:mt-9"
          >
            {['STYLE', 'THAT'].map((word, index) => (
              <span key={word} aria-hidden="true" className="block overflow-hidden pb-[0.045em]">
                <motion.span
                  className="block"
                  initial={reduce ? false : 'hidden'}
                  animate={ready ? 'visible' : 'hidden'}
                  variants={lineVariants}
                  custom={index}
                >
                  {word}
                </motion.span>
              </span>
            ))}
            <span aria-hidden="true" className="block overflow-hidden pb-[0.04em]">
              <motion.span
                className="block italic text-champagne"
                initial={reduce ? false : 'hidden'}
                animate={ready ? 'visible' : 'hidden'}
                variants={lineVariants}
                custom={2}
              >
                SPEAKS.
              </motion.span>
            </span>
          </h1>

          <motion.div
            initial={reduce ? false : 'hidden'}
            animate={ready ? 'visible' : 'hidden'}
            variants={fadeVariants}
            custom={0.5}
            className="mt-8 max-w-md border-l border-champagne/35 pl-5 sm:mt-10"
          >
            <p className="text-[0.92rem] font-light leading-[1.85] text-ivory/60 sm:text-[0.97rem]">
              Discover fashion that defines your personality. Explore timeless styles,
              modern trends and everyday elegance.
            </p>
          </motion.div>

          <motion.div
            initial={reduce ? false : 'hidden'}
            animate={ready ? 'visible' : 'hidden'}
            variants={fadeVariants}
            custom={0.62}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <LuxeButton href="#collections" variant="gold">
              Explore Collections
            </LuxeButton>
            <LuxeButton href="#store" variant="light" icon={ArrowDown}>
              Visit Our Store
            </LuxeButton>
          </motion.div>

          <motion.div
            initial={reduce ? false : 'hidden'}
            animate={ready ? 'visible' : 'hidden'}
            variants={fadeVariants}
            custom={0.78}
            className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 text-[0.52rem] font-semibold uppercase tracking-[0.28em] text-ivory/35 sm:mt-16"
          >
            <span>Menswear</span>
            <span className="h-1 w-1 rounded-full bg-champagne/50" />
            <span>Womenswear</span>
            <span className="h-1 w-1 rounded-full bg-champagne/50" />
            <span>Kids</span>
            <span className="h-1 w-1 rounded-full bg-champagne/50" />
            <span>Traditional</span>
          </motion.div>
        </div>

        <div className="relative lg:col-span-6 xl:col-span-6">
          <div className="relative mx-auto max-w-[500px] [perspective:1400px] lg:ml-auto lg:mr-0 xl:max-w-[520px]">
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.94, y: 30 }}
              animate={ready ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 1.2, delay: 0.32, ease }}
              style={
                reduce
                  ? undefined
                  : {
                      rotateX,
                      rotateY,
                      x: imageX,
                      y: imageY,
                      transformStyle: 'preserve-3d',
                    }
              }
              className="relative"
            >
              <div
                aria-hidden="true"
                className="absolute -inset-4 rounded-t-[999px] border border-champagne/15 sm:-inset-5"
              />
              <div className="relative overflow-hidden rounded-t-[999px] border border-white/10 bg-ink-soft p-1.5 shadow-luxe">
                <div className="relative overflow-hidden rounded-t-[999px]">
                  <img
                    src={assetUrl('/images/hero.webp')}
                    alt="VELORA editorial fashion portrait in a sculpted neutral look"
                    width="1400"
                    height="2100"
                    fetchPriority="high"
                    className="aspect-[4/5] w-full object-cover object-[50%_22%] transition-transform duration-[1.6s] ease-out sm:aspect-[4/4.7]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/10" />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 sm:p-6">
                    <div className="flex items-end justify-between gap-4 border-t border-white/15 pt-4">
                      <div>
                        <p className="text-[0.5rem] font-semibold uppercase tracking-[0.3em] text-champagne">
                          The Signature Look
                        </p>
                        <p className="mt-1.5 font-display text-xl font-light italic text-ivory sm:text-2xl">
                          Wear Your Identity.
                        </p>
                      </div>
                      <span className="hidden text-right text-[0.5rem] font-medium uppercase leading-relaxed tracking-[0.2em] text-ivory/45 sm:block">
                        Editorial
                        <br />
                        No. 01
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                style={reduce ? undefined : { x: badgeX, y: badgeY, z: 55 }}
                className="absolute -left-3 top-[16%] z-20 sm:-left-8 lg:-left-6"
              >
                <div className="animate-float-slow">
                  <RotatingStamp />
                </div>
              </motion.div>

              <motion.div
                style={reduce ? undefined : { x: smallX, y: smallY, z: 40 }}
                className="absolute -bottom-8 -left-3 z-20 hidden w-[132px] sm:block lg:-left-10"
              >
                <div className="animate-float-slower border border-champagne/25 bg-ink/70 p-1.5 shadow-luxe backdrop-blur-md">
                  <img
                    src={assetUrl('/images/hero-secondary.webp')}
                    alt="VELORA seasonal fashion look"
                    width="1200"
                    height="1800"
                    className="aspect-[3/4] w-full object-cover object-[50%_20%]"
                  />
                  <p className="px-1 pb-0.5 pt-2 text-center text-[0.42rem] font-semibold uppercase tracking-[0.26em] text-champagne/80">
                    New Season
                  </p>
                </div>
              </motion.div>

              <motion.div
                style={reduce ? undefined : { x: badgeX, y: smallY }}
                className="absolute -right-2 top-[12%] z-20 hidden items-center gap-2 border border-white/15 bg-ink/55 px-3 py-2 backdrop-blur-md sm:flex lg:-right-5"
              >
                <Sparkle size={13} className="text-champagne" />
                <span className="text-[0.46rem] font-semibold uppercase tracking-[0.24em] text-ivory/70">
                  Curated In Store
                </span>
              </motion.div>
            </motion.div>

            <div className="pointer-events-none absolute -left-10 top-1/2 hidden -translate-y-1/2 xl:block">
              <span className="vertical-text text-[0.46rem] font-semibold uppercase tracking-[0.4em] text-ivory/25">
                Style that speaks · VELORA
              </span>
            </div>
          </div>
        </div>
      </div>

      <motion.a
        href="#collections"
        initial={reduce ? false : { opacity: 0 }}
        animate={ready ? { opacity: 1 } : {}}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-3 text-ivory/40 transition-colors hover:text-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne md:flex"
        aria-label="Scroll to collections"
      >
        <span className="text-[0.46rem] font-semibold uppercase tracking-[0.34em]">Scroll to explore</span>
        <span className="relative h-10 w-px overflow-hidden bg-white/10">
          <motion.span
            className="absolute inset-x-0 top-0 h-4 bg-champagne"
            animate={reduce ? undefined : { y: [-18, 44] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
      </motion.a>
    </section>
  )
}
