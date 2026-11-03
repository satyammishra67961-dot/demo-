import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Close } from './Icons'
import { VMark } from './Logo'
import { useBodyLock } from '../hooks/useBodyLock'
import { useDialogFocus } from '../hooks/useDialogFocus'
import { assetUrl } from '../lib/assetUrl'

const ease = [0.22, 1, 0.36, 1]

export default function Lightbox({ items, index, onIndexChange, onClose }) {
  const panelRef = useRef(null)
  const open = index !== null && index >= 0
  useBodyLock(open)
  useDialogFocus(open, panelRef, onClose)

  const current = open ? items[index] : null

  const go = (direction) => {
    if (!open) return
    const next = (index + direction + items.length) % items.length
    onIndexChange(next)
  }

  useEffect(() => {
    if (!open) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault()
        onIndexChange((index + 1) % items.length)
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        onIndexChange((index - 1 + items.length) % items.length)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, index, items.length, onIndexChange])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[160]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          role="dialog"
          aria-modal="true"
          aria-label={`${current.title} — gallery view`}
        >
          <div className="absolute inset-0 bg-ink/96 backdrop-blur-xl" onClick={onClose} aria-hidden="true" />

          <div ref={panelRef} className="relative z-10 flex h-full flex-col">
            <div className="flex items-center justify-between border-b border-white/[0.08] px-4 py-4 sm:px-7">
              <div className="flex items-center gap-3">
                <VMark size={28} />
                <span className="font-display text-sm tracking-[0.32em] text-ivory/80">VELORA</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[0.55rem] font-medium tracking-[0.22em] text-ivory/40">
                  {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex h-10 w-10 items-center justify-center border border-white/15 text-ivory/70 transition-colors hover:border-champagne hover:text-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
                  aria-label="Close gallery"
                >
                  <Close size={18} />
                </button>
              </div>
            </div>

            <div className="relative flex flex-1 items-center justify-center overflow-hidden px-3 py-4 sm:px-16 sm:py-6">
              <button
                type="button"
                onClick={() => go(-1)}
                className="absolute left-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/15 bg-ink/60 text-ivory/70 backdrop-blur-md transition-colors hover:border-champagne hover:text-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne sm:left-6 sm:h-12 sm:w-12"
                aria-label="Previous image"
              >
                <ArrowLeft size={18} />
              </button>

              <AnimatePresence mode="wait" initial={false}>
                <motion.figure
                  key={`${current.src}-${index}`}
                  initial={{ opacity: 0, scale: 0.975, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.985, y: -8 }}
                  transition={{ duration: 0.4, ease }}
                  className="flex max-h-full max-w-5xl flex-col items-center"
                >
                  <div className="relative overflow-hidden border border-white/10 bg-ink-soft">
                    <img
                      src={assetUrl(current.src)}
                      alt={current.alt}
                      className="max-h-[58vh] w-auto max-w-full object-contain sm:max-h-[65vh]"
                    />
                    <span className="pointer-events-none absolute inset-0 border border-white/10" />
                  </div>
                  <figcaption className="mt-4 flex w-full max-w-2xl items-end justify-between gap-5 border-t border-white/10 pt-4">
                    <div>
                      <p className="text-[0.48rem] font-semibold uppercase tracking-[0.3em] text-champagne">
                        {current.tag}
                      </p>
                      <p className="mt-1.5 font-display text-xl font-light italic text-ivory sm:text-2xl">
                        {current.title}
                      </p>
                    </div>
                    <span className="pb-1 text-[0.48rem] font-medium uppercase tracking-[0.22em] text-ivory/30">
                      Use ← → to browse
                    </span>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>

              <button
                type="button"
                onClick={() => go(1)}
                className="absolute right-2 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/15 bg-ink/60 text-ivory/70 backdrop-blur-md transition-colors hover:border-champagne hover:text-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne sm:right-6 sm:h-12 sm:w-12"
                aria-label="Next image"
              >
                <ArrowRight size={18} />
              </button>
            </div>

            <div className="border-t border-white/[0.08] px-4 py-4 sm:px-7">
              <div className="mx-auto flex max-w-3xl items-center justify-center gap-2.5">
                {items.map((item, itemIndex) => (
                  <button
                    key={item.src}
                    type="button"
                    onClick={() => onIndexChange(itemIndex)}
                    className={`relative h-12 w-10 overflow-hidden border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne sm:h-14 sm:w-12 ${
                      itemIndex === index
                        ? 'border-champagne opacity-100'
                        : 'border-white/10 opacity-40 hover:opacity-80'
                    }`}
                    aria-label={`View ${item.title}`}
                    aria-current={itemIndex === index ? 'true' : undefined}
                  >
                    <img src={assetUrl(item.src)} alt="" className="h-full w-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
