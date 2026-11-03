import { useState } from 'react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import TiltCard from '../components/TiltCard'
import CollectionModal from '../components/CollectionModal'
import { TextLink } from '../components/LuxeButton'
import { ArrowUpRight, Plus } from '../components/Icons'
import { collections } from '../data/content'
import { assetUrl } from '../lib/assetUrl'

export default function Collections() {
  const [selected, setSelected] = useState(null)

  return (
    <section
      id="collections"
      className="relative overflow-hidden bg-ivory py-24 text-ink sm:py-28 lg:py-36"
      aria-labelledby="collections-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(ellipse 45% 40% at 88% 0%, rgba(201,169,106,0.14), transparent 62%), radial-gradient(ellipse 38% 32% at 4% 86%, rgba(201,169,106,0.09), transparent 65%)',
        }}
      />

      <div className="container-luxe relative">
        <div>
          <SectionHeading
            id="collections-heading"
            eyebrow="01 — The Collections"
            title="Dressed for every version of you."
            description="Four considered wardrobes, one signature point of view. Explore silhouettes designed to feel as good as they look — for every day, every celebration and every identity."
            action={<TextLink href="#gallery">Explore the gallery</TextLink>}
          />
        </div>

        <div className="mt-14 grid items-start gap-6 sm:gap-8 md:grid-cols-2 lg:mt-20 lg:gap-10">
          {collections.map((collection, index) => (
            <Reveal
              key={collection.id}
              delay={index * 0.07}
              y={34}
              className={index % 2 === 1 ? 'md:mt-20 lg:mt-28' : ''}
            >
              <TiltCard className="group border border-ink/10 bg-ink shadow-[0_30px_80px_-40px_rgba(11,11,10,0.45)]">
                <div className="relative overflow-hidden">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={assetUrl(collection.image)}
                      alt={collection.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-[1.6s] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.055]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-ink/10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-champagne/10 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                    <div className="absolute inset-x-0 top-0 flex items-start justify-between p-5 sm:p-7">
                      <span className="font-display text-2xl font-light text-ivory/45">
                        {collection.number}
                      </span>
                      <span className="border border-white/15 bg-ink/25 px-3 py-1.5 text-[0.48rem] font-semibold uppercase tracking-[0.24em] text-ivory/60 backdrop-blur-md">
                        {collection.items.length} Categories
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 lg:p-9">
                      <p className="text-[0.54rem] font-semibold uppercase tracking-[0.28em] text-champagne">
                        {collection.eyebrow}
                      </p>
                      <h3 className="mt-2 font-display text-[2.3rem] font-light leading-none tracking-[-0.02em] text-ivory sm:text-[2.9rem]">
                        {collection.title}
                      </h3>
                      <p className="mt-3 max-w-sm text-[0.82rem] font-light leading-[1.75] text-ivory/55">
                        {collection.description}
                      </p>

                      <button
                        type="button"
                        onClick={() => setSelected(collection)}
                        aria-haspopup="dialog"
                        className="mt-6 inline-flex items-center gap-3 border-b border-champagne/40 pb-2 text-[0.58rem] font-semibold uppercase tracking-[0.24em] text-ivory transition-colors duration-300 hover:border-champagne hover:text-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
                      >
                        Explore Collection
                        <ArrowUpRight
                          size={14}
                          className="text-champagne transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </button>
                    </div>

                    <span className="pointer-events-none absolute right-6 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-ink/20 text-champagne/60 opacity-0 backdrop-blur-md transition-all duration-500 group-hover:opacity-100">
                      <Plus size={16} />
                    </span>
                  </div>
                  <span className="pointer-events-none absolute inset-0 z-30 border border-white/10 transition-colors duration-500 group-hover:border-champagne/35" />
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal y={20} className="mt-14 flex flex-col items-start gap-5 border-t border-ink/10 pt-7 sm:flex-row sm:items-center sm:justify-between lg:mt-20">
          <p className="max-w-md text-[0.8rem] font-light leading-relaxed text-ink/50">
            Every collection is a starting point. Visit the VELORA store to discover the
            complete edit, touch the fabrics and find your fit.
          </p>
          <TextLink href="#store">Plan your visit</TextLink>
        </Reveal>
      </div>

      <CollectionModal collection={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
