import Reveal, { TextReveal } from '../components/Reveal'
import LuxeButton from '../components/LuxeButton'
import { Check, Google, Quote } from '../components/Icons'
import { site, isPlaceholder } from '../config/site'
import { useToast } from '../context/ToastContext'

const connectionStates = [
  {
    title: 'Google Business Profile',
    text: 'Connect the store’s official profile.',
  },
  {
    title: 'Verified ratings',
    text: 'Live stars appear only from genuine data.',
  },
  {
    title: 'Real customer words',
    text: 'No testimonials are written or invented.',
  },
]

export default function Reviews() {
  const { notify } = useToast()
  const readConnected = !isPlaceholder(site.googleReviewsUrl)
  const writeConnected = !isPlaceholder(site.googleWriteReviewUrl)

  const handleRead = () => {
    if (!readConnected) {
      notify('Live Google reviews are not connected yet. Add your Google review link in src/config/site.js.')
      return
    }
    window.open(site.googleReviewsUrl, '_blank', 'noopener,noreferrer')
  }

  const handleWrite = () => {
    if (!writeConnected) {
      notify('Google review link is not connected yet. Add it in src/config/site.js to enable reviews.')
      return
    }
    window.open(site.googleWriteReviewUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-ivory py-24 text-ink sm:py-28 lg:py-36"
      aria-labelledby="reviews-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            'radial-gradient(ellipse 48% 46% at 100% 0%, rgba(201,169,106,0.17), transparent 64%), radial-gradient(ellipse 38% 36% at 0% 100%, rgba(201,169,106,0.09), transparent 68%)',
        }}
      />
      <Quote
        size={220}
        className="pointer-events-none absolute -bottom-10 right-2 text-champagne/[0.08] sm:right-10 lg:right-20"
      />

      <div className="container-luxe relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal y={16} className="flex items-center gap-4">
              <span className="h-px w-9 bg-champagne" />
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-ink/50">
                05 — Google Reviews
              </span>
            </Reveal>

            <TextReveal
              id="reviews-heading"
              as="h2"
              text="Google Reviews."
              delay={0.08}
              className="mt-5 font-display text-[clamp(2.75rem,5.4vw,5.1rem)] font-light leading-[0.96] tracking-[-0.025em] text-ink"
            />

            <Reveal delay={0.2} y={18}>
              <p className="mt-6 max-w-md text-[0.94rem] font-light leading-[1.85] text-ink/60">
                Our Google Business Profile is the home of our latest customer words. Connect it
                once to display live ratings and genuine reviews — never a made-up testimonial.
              </p>
            </Reveal>

            <Reveal delay={0.3} y={18} className="mt-8 flex items-center gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/10 bg-white/60 shadow-sm">
                <Google size={23} />
              </span>
              <div>
                <p className="text-[0.55rem] font-semibold uppercase tracking-[0.24em] text-ink/40">
                  Powered by Google
                </p>
                <p className="mt-1 text-[0.76rem] font-light text-ink/55">
                  Live rating displayed only when connected to verified data.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.38} y={18} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <LuxeButton as="button" variant="dark" onClick={handleRead}>
                Read Our Google Reviews
              </LuxeButton>
              <LuxeButton as="button" variant="outline" onClick={handleWrite}>
                Write a Google Review
              </LuxeButton>
            </Reveal>
          </div>

          <Reveal delay={0.16} y={28} className="lg:col-span-7">
            <div className="relative overflow-hidden border border-ink/10 bg-white/45 p-6 shadow-[0_30px_80px_-45px_rgba(11,11,10,0.35)] backdrop-blur-sm sm:p-9 lg:p-11">
              <span className="pointer-events-none absolute -right-14 -top-14 h-44 w-44 rounded-full bg-champagne/15 blur-3xl" />
              <span className="pointer-events-none absolute inset-0 border border-white/50" />

              <div className="relative flex items-start justify-between gap-5">
                <div className="flex items-center gap-4">
                  <Google size={38} />
                  <div>
                    <p className="font-display text-2xl font-light leading-none text-ink">
                      Google Reviews
                    </p>
                    <p className="mt-1.5 text-[0.5rem] font-semibold uppercase tracking-[0.26em] text-ink/35">
                      Verified customer feedback
                    </p>
                  </div>
                </div>
                <span className="shrink-0 border border-champagne/40 bg-champagne/10 px-3 py-1.5 text-[0.44rem] font-semibold uppercase tracking-[0.22em] text-ink/55">
                  Integration Ready
                </span>
              </div>

              <div className="relative mt-8 border-y border-ink/10 py-7">
                <p className="max-w-md font-display text-[1.7rem] font-light leading-[1.3] text-ink/75 sm:text-[2rem]">
                  Verified words from real customers will live here.
                </p>
                <p className="mt-3 max-w-md text-[0.8rem] font-light leading-[1.8] text-ink/45">
                  Ratings and testimonials are intentionally left blank until the official Google
                  Business Profile is connected. No reviews, names or star counts are invented.
                </p>
              </div>

              <div className="relative mt-7 grid gap-5 sm:grid-cols-3">
                {connectionStates.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-champagne/40 text-champagne">
                      <Check size={11} />
                    </span>
                    <div>
                      <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink/65">
                        {item.title}
                      </p>
                      <p className="mt-1 text-[0.72rem] font-light leading-relaxed text-ink/40">
                        {item.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="relative mt-7 text-[0.56rem] font-medium uppercase tracking-[0.18em] text-ink/30">
                To connect: update the review links in <span className="text-ink/55">src/config/site.js</span>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
