import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { TextLink } from '../components/LuxeButton'
import { iconMap, Sparkle } from '../components/Icons'
import { features } from '../data/content'

const spans = [
  'lg:col-span-3',
  'lg:col-span-3',
  'lg:col-span-2',
  'lg:col-span-2',
  'lg:col-span-2',
]

export default function WhyVelora() {
  return (
    <section
      id="why"
      className="relative overflow-hidden bg-ink py-24 text-ivory sm:py-28 lg:py-36"
      aria-labelledby="why-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 48% 50% at 96% 6%, rgba(201,169,106,0.11), transparent 64%), radial-gradient(ellipse 32% 40% at 2% 92%, rgba(201,169,106,0.07), transparent 70%)',
        }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -left-6 top-20 hidden font-display text-[10rem] font-light uppercase leading-none tracking-[-0.04em] text-white/[0.016] xl:block"
      >
        WHY
      </span>

      <div className="container-luxe relative">
        <SectionHeading
          id="why-heading"
          eyebrow="04 — Why VELORA"
          title="Considered in every detail."
          description="Five reasons the VELORA experience feels different — from the first glance to the final fitting."
          tone="light"
          action={<TextLink href="#contact" invert>Talk to our team</TextLink>}
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-6 lg:gap-5">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] ?? Sparkle
            return (
              <Reveal
                key={feature.number}
                delay={index * 0.06}
                y={26}
                className={`${spans[index]} h-full`}
              >
                <article className="group relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden border border-white/10 bg-white/[0.025] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-champagne/35 hover:bg-white/[0.045] sm:p-7">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    style={{
                      background:
                        'radial-gradient(ellipse 70% 60% at 100% 0%, rgba(201,169,106,0.1), transparent 62%)',
                    }}
                  />

                  <div className="relative flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center border border-champagne/25 text-champagne transition-colors duration-500 group-hover:border-champagne group-hover:bg-champagne group-hover:text-ink">
                      <Icon size={20} />
                    </span>
                    <span className="font-display text-xl font-light text-ivory/20 transition-colors duration-500 group-hover:text-champagne/50">
                      {feature.number}
                    </span>
                  </div>

                  <div className="relative mt-9">
                    <h3 className="font-display text-[1.65rem] font-light leading-tight text-ivory sm:text-[1.8rem]">
                      {feature.title}
                    </h3>
                    <p className="mt-2.5 max-w-xs text-[0.8rem] font-light leading-[1.75] text-ivory/45">
                      {feature.text}
                    </p>
                    <span className="mt-5 block h-px w-full origin-left scale-x-0 bg-gradient-to-r from-champagne/70 to-transparent transition-transform duration-700 group-hover:scale-x-100" />
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>

        <Reveal y={18} className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
          <p className="max-w-xl font-display text-xl font-light italic leading-relaxed text-ivory/55 sm:text-2xl">
            “The best style is the one that still feels like you.”
          </p>
          <TextLink href="#collections" invert>Explore the collections</TextLink>
        </Reveal>
      </div>
    </section>
  )
}
