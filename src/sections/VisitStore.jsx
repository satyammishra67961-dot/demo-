import Reveal, { TextReveal } from '../components/Reveal'
import LuxeButton from '../components/LuxeButton'
import { Check, Clock, Compass, External, Pin, Sparkle } from '../components/Icons'
import { site, mapHref, mapIsDemo } from '../config/site'

const expectations = [
  'Personal styling guidance',
  'Collection previews',
  'Fabric & fit experience',
]

export default function VisitStore() {
  const embedUrl = mapHref('mapEmbedUrl')
  const demo = mapIsDemo()

  return (
    <section
      id="store"
      className="relative overflow-hidden bg-ink py-24 text-ivory sm:py-28 lg:py-36"
      aria-labelledby="store-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 46% 48% at 100% 10%, rgba(201,169,106,0.12), transparent 64%), radial-gradient(ellipse 34% 36% at 0% 80%, rgba(201,169,106,0.07), transparent 70%)',
        }}
      />
      <div className="container-luxe relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-stretch lg:gap-16">
          <div className="flex flex-col justify-center lg:col-span-5">
            <Reveal y={16} className="flex items-center gap-4">
              <span className="h-px w-9 bg-champagne" />
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-champagne/80">
                06 — The Store
              </span>
            </Reveal>

            <TextReveal
              id="store-heading"
              as="h2"
              text="Come feel the fabric."
              delay={0.08}
              className="mt-5 font-display text-[clamp(2.75rem,5.4vw,5.2rem)] font-light leading-[0.95] tracking-[-0.025em] text-ivory"
            />

            <Reveal delay={0.2} y={18}>
              <p className="mt-6 max-w-md text-[0.94rem] font-light leading-[1.85] text-ivory/50">
                Step inside the VELORA world. Explore the collections up close, discover your fit
                and let our team help you find the piece that feels like you.
              </p>
            </Reveal>

            <Reveal delay={0.28} y={18} className="mt-8 space-y-4 border-y border-white/10 py-6">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-champagne/30 text-champagne">
                  <Pin size={16} />
                </span>
                <div>
                  <p className="text-[0.5rem] font-semibold uppercase tracking-[0.28em] text-champagne/70">
                    Store address
                  </p>
                  <p className="mt-1.5 font-display text-xl font-light leading-snug text-ivory/80 sm:text-2xl">
                    {site.address}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center border border-champagne/30 text-champagne">
                  <Clock size={16} />
                </span>
                <div>
                  <p className="text-[0.5rem] font-semibold uppercase tracking-[0.28em] text-champagne/70">
                    Business hours
                  </p>
                  <p className="mt-1.5 text-[0.9rem] font-light text-ivory/65">{site.businessHours}</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.34} y={18} className="mt-6 flex flex-wrap gap-x-5 gap-y-2.5">
              {expectations.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center gap-2 text-[0.62rem] font-medium uppercase tracking-[0.14em] text-ivory/40"
                >
                  <Check size={12} className="text-champagne" />
                  {item}
                </span>
              ))}
            </Reveal>

            <Reveal delay={0.42} y={18} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LuxeButton
                href={mapHref('mapDirectionsUrl')}
                target="_blank"
                rel="noopener noreferrer"
                variant="gold"
                icon={Compass}
              >
                Get Directions
              </LuxeButton>
              <LuxeButton
                href={mapHref('mapOpenUrl')}
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
                icon={External}
              >
                Open in Google Maps
              </LuxeButton>
            </Reveal>

            <Reveal delay={0.5} y={16} className="mt-6 flex items-center gap-2">
              <Sparkle size={13} className="text-champagne/70" />
              <p className="text-[0.56rem] font-medium uppercase tracking-[0.18em] text-ivory/30">
                {demo
                  ? 'Map preview shown — connect your store location in site config.'
                  : 'Your visit starts here.'}
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.18} y={30} className="lg:col-span-7">
            <div className="relative h-full min-h-[380px] overflow-hidden border border-white/12 bg-ink-soft sm:min-h-[480px]">
              <iframe
                title="VELORA store location on Google Maps"
                src={embedUrl}
                className="absolute inset-0 h-full w-full grayscale invert-[0.91] sepia-[0.12] contrast-[0.92]"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/65 via-transparent to-ink/25" />

              <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-4 sm:p-6">
                <span className="inline-flex items-center gap-2 border border-white/15 bg-ink/55 px-3 py-2 text-[0.46rem] font-semibold uppercase tracking-[0.24em] text-ivory/70 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-champagne shadow-gold-glow" />
                  VELORA Store
                </span>
                <span className="hidden border border-white/15 bg-ink/55 px-3 py-2 text-[0.46rem] font-semibold uppercase tracking-[0.24em] text-ivory/45 backdrop-blur-md sm:block">
                  {demo ? 'Map Preview' : 'Live Map'}
                </span>
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 sm:p-6">
                <div className="flex flex-col gap-4 border-t border-white/20 pt-5 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-[0.48rem] font-semibold uppercase tracking-[0.28em] text-champagne">
                      Find us at
                    </p>
                    <p className="mt-1.5 max-w-xs font-display text-lg font-light leading-snug text-ivory/85 sm:text-2xl">
                      {site.address}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-[0.46rem] font-semibold uppercase tracking-[0.22em] text-ivory/40">
                    <Clock size={12} />
                    {site.businessHours}
                  </div>
                </div>
              </div>

              <span className="pointer-events-none absolute inset-0 border border-white/10" />
              <span className="pointer-events-none absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2">
                <span className="absolute inset-0 animate-ping rounded-full border border-champagne/40" />
                <span className="absolute inset-0 rounded-full border border-champagne/60 bg-ink/40 backdrop-blur-sm" />
                <Pin size={22} className="absolute inset-0 m-auto text-champagne" />
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
