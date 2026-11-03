import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { VMark } from './Logo'
import { useBodyLock } from '../hooks/useBodyLock'

const ease = [0.22, 1, 0.36, 1]

export default function Loader({ visible }) {
  const reduce = useReducedMotion()
  const [progress, setProgress] = useState(0)
  useBodyLock(visible)

  useEffect(() => {
    if (!visible) return undefined
    if (reduce) {
      setProgress(100)
      return undefined
    }

    const duration = 1550
    const start = performance.now()
    let frame

    const tick = (now) => {
      const value = Math.min(100, ((now - start) / duration) * 100)
      setProgress(value)
      if (value < 100) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [visible, reduce])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center overflow-hidden bg-ink"
          initial={{ opacity: 1 }}
          exit={{ y: '-100%' }}
          transition={{ duration: reduce ? 0.2 : 0.95, ease }}
          aria-label="VELORA is loading"
          role="status"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-70"
            style={{
              background:
                'radial-gradient(circle at 50% 42%, rgba(201,169,106,0.16), transparent 36%), radial-gradient(circle at 50% 70%, rgba(247,242,232,0.05), transparent 50%)',
            }}
          />
          <div className="loading-grain absolute inset-0 opacity-[0.05]" aria-hidden="true" />

          <motion.div
            className="relative flex flex-col items-center px-6 text-center"
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.45, ease }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.82, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, ease }}
              className="relative"
            >
              <span className="absolute inset-0 -m-7 rounded-full border border-champagne/20" />
              <motion.span
                aria-hidden="true"
                className="absolute inset-0 -m-10 rounded-full border border-dashed border-champagne/25"
                animate={reduce ? undefined : { rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              />
              <VMark size={76} />
            </motion.div>

            <div className="mt-9 overflow-hidden">
              <motion.p
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.25, ease }}
                className="font-display text-[2.1rem] font-medium leading-none tracking-[0.42em] text-ivory"
              >
                VELORA
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="mt-4 text-[0.52rem] font-medium uppercase tracking-[0.42em] text-champagne/80"
            >
              Wear Your Identity
            </motion.p>

            <div className="mt-12 flex w-52 items-center gap-4 sm:w-64">
              <div className="h-px flex-1 overflow-hidden bg-ivory/12">
                <motion.div
                  className="h-full origin-left bg-gradient-to-r from-champagne/40 via-champagne to-champagne-light"
                  style={{ scaleX: progress / 100 }}
                />
              </div>
              <span className="w-8 text-right font-sans text-[0.6rem] tabular-nums tracking-[0.16em] text-ivory/45">
                {String(Math.round(progress)).padStart(2, '0')}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
