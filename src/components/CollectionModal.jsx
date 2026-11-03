import { useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import LuxeButton from './LuxeButton'
import { ArrowUpRight, Close } from './Icons'
import { useBodyLock } from '../hooks/useBodyLock'
import { useDialogFocus } from '../hooks/useDialogFocus'
import { VMark } from './Logo'
import { assetUrl } from '../lib/assetUrl'

const ease = [0.22, 1, 0.36, 1]

export default function CollectionModal({ collection, onClose }) {
  const panelRef = useRef(null)
  const open = Boolean(collection)
  useBodyLock(open)
  useDialogFocus(open, panelRef, onClose)

  return (
    <AnimatePresence>
      {collection && (
        <motion.div
          className="fixed inset-0 z-[150] flex items-start justify-center overflow-y-auto p-3 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`collection-title-${collection.id}`}
        >
          <div
            className="fixed inset-0 bg-ink/85 backdrop-blur-md"
            aria-hidden="true"
            onClick={onClose}
          />
          <motion.div
            ref={panelRef}
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.985 }}
            transition={{ duration: 0.5, ease }}
            className="relative my-4 w-full max-w-6xl overflow-hidden bg-ivory text-ink shadow-[0_40px_120px_-20px_rgba(0,0,0,0.75)] sm:my-0"
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center border border-ink/15 bg-ivory/85 text-ink backdrop-blur-md transition-colors hover:border-champagne hover:bg-ink hover:text-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne sm:right-5 sm:top-5"
              aria-label="Close collection"
            >
              <Close size={18} />
            </button>

            <div className="grid md:grid-cols-[0.92fr_1.08fr]">
              <div className="relative min-h-[280px] overflow-hidden md:min-h-[620px]">
                <img
                  src={assetUrl(collection.image)}
                  alt={collection.imageAlt}
                  className="absolute inset-0 h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-ink/25" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="flex items-end justify-between gap-4 border-t border-white/20 pt-5">
                    <div>
                      <p className="text-[0.5rem] font-semibold uppercase tracking-[0.3em] text-champagne">
                        VELORA Collection
                      </p>
                      <p className="mt-2 font-display text-2xl font-light italic text-ivory">
                        {collection.title}
                      </p>
                    </div>
                    <span className="font-display text-3xl font-light text-ivory/25">
                      {collection.number}
                    </span>
                  </div>
                </div>
                <VMark size={70} className="absolute left-5 top-5 opacity-80" />
              </div>

              <div className="px-5 py-8 sm:px-9 sm:py-11 lg:px-12">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-champagne" />
                  <span className="text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-ink/45">
                    {collection.eyebrow}
                  </span>
                </div>

                <h2
                  id={`collection-title-${collection.id}`}
                  className="mt-4 font-display text-[2.7rem] font-light leading-[0.95] tracking-[-0.025em] sm:text-[3.5rem]"
                >
                  {collection.title}
                </h2>

                <p className="mt-4 max-w-lg text-[0.88rem] font-light leading-[1.8] text-ink/60">
                  {collection.description}
                </p>

                <div className="mt-7">
                  <p className="text-[0.52rem] font-semibold uppercase tracking-[0.28em] text-ink/40">
                    Inside the edit
                  </p>
                  <ul className="mt-4 grid grid-cols-1 gap-x-7 sm:grid-cols-2">
                    {collection.items.map((item, index) => (
                      <li
                        key={item}
                        className="group flex items-center gap-3 border-b border-ink/10 py-3 text-[0.82rem] font-medium"
                      >
                        <span className="text-[0.55rem] tabular-nums tracking-[0.12em] text-champagne">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          {item}
                        </span>
                        <ArrowUpRight
                          size={13}
                          className="ml-auto text-ink/20 transition-colors group-hover:text-champagne"
                        />
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
                  {collection.gallery.map((image) => (
                    <div
                      key={image.src}
                      className="relative h-20 w-16 shrink-0 overflow-hidden bg-cream sm:h-24 sm:w-20"
                    >
                      <img
                        src={assetUrl(image.src)}
                        alt={image.alt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      <span className="pointer-events-none absolute inset-0 border border-ink/10" />
                    </div>
                  ))}
                  <div className="flex min-w-[120px] flex-1 items-center justify-center border border-dashed border-ink/15 px-4 text-center">
                    <p className="text-[0.52rem] font-semibold uppercase leading-relaxed tracking-[0.18em] text-ink/40">
                      Discover the full edit in store
                    </p>
                  </div>
                </div>

                <p className="mt-6 border-l border-champagne/60 pl-4 font-display text-[1.02rem] font-light italic leading-relaxed text-ink/55">
                  {collection.note}
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-5">
                  <LuxeButton href="#store" variant="dark" onClick={onClose}>
                    Visit Our Store
                  </LuxeButton>
                  <button
                    type="button"
                    onClick={onClose}
                    className="group inline-flex items-center gap-2 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-ink/50 transition-colors hover:text-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
                  >
                    Continue exploring
                    <ArrowUpRight size={13} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
