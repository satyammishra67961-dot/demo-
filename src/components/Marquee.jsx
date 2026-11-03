import { marqueeWords } from '../data/content'

export default function Marquee() {
  const items = [...marqueeWords, ...marqueeWords]

  return (
    <div className="relative overflow-hidden border-y border-champagne/15 bg-ink-soft py-4 sm:py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-ink-soft to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-ink-soft to-transparent" />
      <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
        {items.map((word, index) => (
          <div key={`${word}-${index}`} className="flex shrink-0 items-center">
            <span
              className={`px-6 font-display text-[0.95rem] uppercase tracking-[0.3em] sm:px-9 sm:text-[1.05rem] ${
                index % 3 === 0 ? 'text-champagne/85' : 'text-ivory/35'
              }`}
            >
              {word}
            </span>
            <span className="h-1 w-1 rotate-45 bg-champagne/50" aria-hidden="true" />
          </div>
        ))}
      </div>
      <span className="sr-only">VELORA — Wear Your Identity</span>
    </div>
  )
}
