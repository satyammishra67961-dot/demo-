import { useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import RotatingShowcase from '../components/RotatingShowcase'
import Lightbox from '../components/Lightbox'
import { TextLink } from '../components/LuxeButton'
import { Plus } from '../components/Icons'
import { moods, rotateLooks } from '../data/content'
import { assetUrl } from '../lib/assetUrl'

const ease = [0.22, 1, 0.36, 1]

export default function Featured() {
  const [activeId, setActiveId] = useState(moods[0].id)
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const tabRefs = useRef([])

  const activeMood = moods.find((mood) => mood.id === activeId) ?? moods[0]

  const selectTab = (id) => {
    setActiveId(id)
    setLightboxIndex(null)
  }

  const onTabKeyDown = (event, index) => {
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
    event.preventDefault()
    const direction = event.key === 'ArrowRight' ? 1 : -1
    const nextIndex = (index + direction + moods.length) % moods.length
    selectTab(moods[nextIndex].id)
    tabRefs.current[nextIndex]?.focus()
  }

  return (
    <section
      id="gallery"
      className="relative overflow-hidden bg-ink py-24 text-ivory sm:py-28 lg:py-36"
      aria-labelledby="gallery-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 44% at 50% 0%, rgba(201,169,106,0.09), transparent 66%), radial-gradient(ellipse 34% 36% at 92% 68%, rgba(201,169,106,0.07), transparent 70%)',
        }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-2 top-14 hidden font-display text-[9rem] font-light uppercase leading-none tracking-[-0.03em] text-white/[0.018] xl:block"
      >
        EDIT
      </span>

      <div className="container-luxe relative">
        <SectionHeading
          id="gallery-heading"
          eyebrow="02 — The Editorial"
          title="A study in modern style."
          description="A rotating showcase of silhouettes, textures and moods. Browse the editorial gallery for a closer look at the VELORA point of view — then come experience the fabrics in person."
          tone="light"
          action={<TextLink href="#store" invert>Visit the store</TextLink>}
        />

        <Reveal y={30} delay={0.1}>
          <RotatingShowcase looks={rotateLooks} />
        </Reveal>

        <div className="mt-16 lg:mt-24">
          <div className="flex flex-col gap-6 border-b border-white/10 pb-0 sm:flex-row sm:items-end sm:justify-between">
            <Reveal y={16}>
              <p className="text-[0.52rem] font-semibold uppercase tracking-[0.3em] text-champagne/80">
                Featured Collection
              </p>
              <p className="mt-2 font-display text-2xl font-light italic text-ivory/80 sm:text-3xl">
                {activeMood.caption}
              </p>
            </Reveal>

            <div
              className="-mx-1 flex gap-1 overflow-x-auto pb-0 hide-scrollbar sm:mx-0 sm:gap-2"
              role="tablist"
              aria-label="Featured collection moods"
            >
              {moods.map((mood, index) => {
                const selected = mood.id === activeId
                return (
                  <button
                    key={mood.id}
                    ref={(node) => {
                      tabRefs.current[index] = node
                    }}
                    type="button"
                    role="tab"
                    id={`mood-tab-${mood.id}`}
                    aria-selected={selected}
                    aria-controls={`mood-panel-${mood.id}`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => selectTab(mood.id)}
                    onKeyDown={(event) => onTabKeyDown(event, index)}
                    className={`relative shrink-0 px-3 pb-4 pt-2 text-[0.55rem] font-semibold uppercase tracking-[0.22em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne sm:px-4 ${
                      selected ? 'text-champagne' : 'text-ivory/40 hover:text-ivory/75'
                    }`}
                  >
                    {mood.label}
                    <span
                      className={`absolute inset-x-1 bottom-0 h-px bg-champagne transition-transform duration-500 ${
                        selected ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />
                  </button>
                )
              })}
            </div>
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeMood.id}
              id={`mood-panel-${activeMood.id}`}
              role="tabpanel"
              aria-labelledby={`mood-tab-${activeMood.id}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease }}
              className="mt-7"
            >
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-[repeat(2,262px)] lg:gap-5">
                {activeMood.images.map((image, index) => (
                  <motion.button
                    key={image.src}
                    type="button"
                    onClick={() => setLightboxIndex(index)}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: index * 0.07, ease }}
                    className={`group relative h-full overflow-hidden border border-white/[0.08] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne ${
                      index === 0
                        ? 'sm:col-span-2 lg:col-span-7 lg:row-span-2'
                        : 'lg:col-span-5'
                    }`}
                    aria-label={`Open ${image.title} in gallery`}
                  >
                    <div
                      className={`relative overflow-hidden ${
                        index === 0 ? 'aspect-[4/5] sm:aspect-[16/11] lg:aspect-auto lg:h-full' : 'aspect-[4/3] lg:aspect-auto lg:h-full'
                      }`}
                    >
                      <img
                        src={assetUrl(image.src)}
                        alt={image.alt}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-[1.5s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.055]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/10 to-transparent" />
                      <div className="absolute inset-0 bg-champagne/0 transition-colors duration-700 group-hover:bg-champagne/[0.045]" />

                      <span className="absolute left-4 top-4 text-[0.52rem] font-semibold tabular-nums tracking-[0.24em] text-ivory/55 sm:left-5 sm:top-5">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-ink/20 text-ivory/70 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100 sm:right-5 sm:top-5">
                        <Plus size={14} />
                      </span>

                      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                        <div className="flex items-end justify-between gap-4">
                          <div>
                            <p className="text-[0.48rem] font-semibold uppercase tracking-[0.28em] text-champagne">
                              {image.tag}
                            </p>
                            <p
                              className={`mt-1.5 font-display font-light leading-tight text-ivory ${
                                index === 0 ? 'text-[1.75rem] sm:text-[2.2rem]' : 'text-[1.45rem] sm:text-[1.65rem]'
                              }`}
                            >
                              {image.title}
                            </p>
                          </div>
                          <span className="hidden shrink-0 pb-1 text-[0.46rem] font-semibold uppercase tracking-[0.22em] text-ivory/35 transition-colors group-hover:text-champagne sm:block">
                            View look
                          </span>
                        </div>
                      </div>
                      <span className="pointer-events-none absolute inset-0 z-20 border border-white/10 transition-colors duration-500 group-hover:border-champagne/35" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          <Reveal y={16} className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-lg text-[0.78rem] font-light leading-relaxed text-ivory/40">
              An editorial showcase of style, not a catalogue. Discover the full collection and
              personal styling advice at the VELORA store.
            </p>
            <TextLink href="#store" invert>Find your look in store</TextLink>
          </Reveal>
        </div>
      </div>

      <Lightbox
        items={activeMood.images}
        index={lightboxIndex}
        onIndexChange={setLightboxIndex}
        onClose={() => setLightboxIndex(null)}
      />
    </section>
  )
}
