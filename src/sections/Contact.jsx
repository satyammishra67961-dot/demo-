import Reveal, { TextReveal } from '../components/Reveal'
import LuxeButton from '../components/LuxeButton'
import { VMark } from '../components/Logo'
import {
  ArrowUpRight,
  Clock,
  Facebook,
  Instagram,
  Mail,
  Phone,
  Pin,
  WhatsApp,
} from '../components/Icons'
import { site, isPlaceholder, mailHref, telHref, whatsappHref } from '../config/site'
import { useToast } from '../context/ToastContext'

export default function Contact() {
  const { notify } = useToast()

  const callLink = telHref(site.phone)
  const mailLink = mailHref(site.email)
  const chatLink = whatsappHref(site.whatsapp, site.whatsappMessage)
  const instagramReady = !isPlaceholder(site.instagram)
  const facebookReady = !isPlaceholder(site.facebook)

  const call = () => {
    if (callLink) window.location.href = callLink
    else notify('Add your phone number in src/config/site.js to enable calling.')
  }

  const mail = () => {
    if (mailLink) window.location.href = mailLink
    else notify('Add your email address in src/config/site.js to enable email.')
  }

  const chat = () => {
    if (chatLink) window.open(chatLink, '_blank', 'noopener,noreferrer')
    else notify('Add your WhatsApp number in src/config/site.js to open a conversation.')
  }

  const openSocial = (url) => {
    if (!isPlaceholder(url)) {
      window.open(url, '_blank', 'noopener,noreferrer')
      return
    }
    notify('This social profile is not connected yet. Add the link in src/config/site.js.')
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-cream py-24 text-ink sm:py-28 lg:py-36"
      aria-labelledby="contact-heading"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            'radial-gradient(ellipse 46% 44% at 0% 0%, rgba(201,169,106,0.17), transparent 64%), radial-gradient(ellipse 38% 38% at 100% 100%, rgba(201,169,106,0.12), transparent 68%)',
        }}
      />
      <div className="container-luxe relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal y={16} className="flex items-center gap-4">
              <span className="h-px w-9 bg-champagne" />
              <span className="text-[0.6rem] font-semibold uppercase tracking-[0.32em] text-ink/50">
                07 — Contact
              </span>
            </Reveal>

            <TextReveal
              id="contact-heading"
              as="h2"
              text="Let's talk style."
              delay={0.08}
              className="mt-5 font-display text-[clamp(2.85rem,5.6vw,5.3rem)] font-light leading-[0.95] tracking-[-0.025em] text-ink"
            />

            <Reveal delay={0.2} y={18}>
              <p className="mt-6 max-w-md text-[0.94rem] font-light leading-[1.85] text-ink/60">
                Questions about a collection, a fit or a visit? Reach out — our team would love to
                help you find your next signature piece.
              </p>
            </Reveal>

            <Reveal delay={0.3} y={22} className="mt-9">
              <div className="relative overflow-hidden bg-ink p-6 text-ivory shadow-luxe sm:p-8">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-champagne/15 blur-3xl"
                />
                <VMark size={300} className="pointer-events-none absolute -bottom-24 -right-20 opacity-[0.035]" />
                <div className="relative">
                  <span className="flex h-11 w-11 items-center justify-center border border-champagne/35 text-champagne">
                    <WhatsApp size={21} />
                  </span>
                  <p className="mt-6 text-[0.5rem] font-semibold uppercase tracking-[0.3em] text-champagne/75">
                    Prefer a conversation?
                  </p>
                  <h3 className="mt-2 font-display text-[2rem] font-light leading-tight text-ivory sm:text-[2.4rem]">
                    Let's talk on WhatsApp.
                  </h3>
                  <p className="mt-3 max-w-sm text-[0.8rem] font-light leading-[1.8] text-ivory/45">
                    Ask about the latest edit, store timings or styling guidance. Your message goes
                    directly to the store.
                  </p>
                  <LuxeButton
                    as="button"
                    variant="gold"
                    icon={WhatsApp}
                    className="mt-6"
                    onClick={chat}
                  >
                    Message the Store
                  </LuxeButton>
                </div>
                <span className="pointer-events-none absolute inset-0 border border-white/10" />
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <Reveal delay={0.08} y={22}>
                <button
                  type="button"
                  onClick={call}
                  className="group relative flex h-full min-h-[158px] w-full flex-col justify-between border border-ink/10 bg-white/40 p-6 text-left transition-all duration-500 hover:-translate-y-0.5 hover:border-champagne/50 hover:bg-white/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-10 w-10 items-center justify-center border border-ink/10 text-champagne">
                      <Phone size={18} />
                    </span>
                    <ArrowUpRight size={16} className="text-ink/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-champagne" />
                  </div>
                  <div className="mt-6">
                    <p className="text-[0.5rem] font-semibold uppercase tracking-[0.26em] text-ink/40">
                      Call the store
                    </p>
                    <p className="mt-2 break-words text-[0.86rem] font-medium text-ink/80">
                      {site.phone}
                    </p>
                  </div>
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-champagne transition-all duration-500 group-hover:w-full" />
                </button>
              </Reveal>

              <Reveal delay={0.14} y={22}>
                <button
                  type="button"
                  onClick={mail}
                  className="group relative flex h-full min-h-[158px] w-full flex-col justify-between border border-ink/10 bg-white/40 p-6 text-left transition-all duration-500 hover:-translate-y-0.5 hover:border-champagne/50 hover:bg-white/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-10 w-10 items-center justify-center border border-ink/10 text-champagne">
                      <Mail size={18} />
                    </span>
                    <ArrowUpRight size={16} className="text-ink/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-champagne" />
                  </div>
                  <div className="mt-6">
                    <p className="text-[0.5rem] font-semibold uppercase tracking-[0.26em] text-ink/40">
                      Write to us
                    </p>
                    <p className="mt-2 break-words text-[0.86rem] font-medium text-ink/80">
                      {site.email}
                    </p>
                  </div>
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-champagne transition-all duration-500 group-hover:w-full" />
                </button>
              </Reveal>

              <Reveal delay={0.2} y={22}>
                <a
                  href="#store"
                  className="group relative flex h-full min-h-[158px] flex-col justify-between border border-ink/10 bg-white/40 p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-champagne/50 hover:bg-white/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-10 w-10 items-center justify-center border border-ink/10 text-champagne">
                      <Pin size={18} />
                    </span>
                    <ArrowUpRight size={16} className="text-ink/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-champagne" />
                  </div>
                  <div className="mt-6">
                    <p className="text-[0.5rem] font-semibold uppercase tracking-[0.26em] text-ink/40">
                      Visit the store
                    </p>
                    <p className="mt-2 break-words text-[0.86rem] font-medium text-ink/80">
                      {site.address}
                    </p>
                  </div>
                  <span className="absolute bottom-0 left-0 h-px w-0 bg-champagne transition-all duration-500 group-hover:w-full" />
                </a>
              </Reveal>

              <Reveal delay={0.26} y={22}>
                <div className="relative flex h-full min-h-[158px] flex-col justify-between border border-ink/10 bg-white/40 p-6">
                  <div className="flex items-start justify-between">
                    <span className="flex h-10 w-10 items-center justify-center border border-ink/10 text-champagne">
                      <Clock size={18} />
                    </span>
                    <span className="text-[0.44rem] font-semibold uppercase tracking-[0.2em] text-ink/25">
                      Store hours
                    </span>
                  </div>
                  <div className="mt-6">
                    <p className="text-[0.5rem] font-semibold uppercase tracking-[0.26em] text-ink/40">
                      Business hours
                    </p>
                    <p className="mt-2 break-words text-[0.86rem] font-medium text-ink/80">
                      {site.businessHours}
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.32} y={22} className="sm:col-span-2">
                <div className="flex flex-col gap-5 border border-ink/10 bg-white/40 p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-[0.5rem] font-semibold uppercase tracking-[0.26em] text-ink/40">
                      Follow the house
                    </p>
                    <p className="mt-2 font-display text-xl font-light italic text-ink/70">
                      Style notes, new edits and store stories.
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => openSocial(site.instagram)}
                      className="group flex h-11 w-11 items-center justify-center border border-ink/10 text-ink/55 transition-colors hover:border-champagne hover:bg-ink hover:text-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
                      aria-label={instagramReady ? 'Open VELORA on Instagram' : 'Instagram link not connected'}
                    >
                      <Instagram size={17} />
                    </button>
                    <button
                      type="button"
                      onClick={() => openSocial(site.facebook)}
                      className="group flex h-11 w-11 items-center justify-center border border-ink/10 text-ink/55 transition-colors hover:border-champagne hover:bg-ink hover:text-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
                      aria-label={facebookReady ? 'Open VELORA on Facebook' : 'Facebook link not connected'}
                    >
                      <Facebook size={17} />
                    </button>
                  </div>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.38} y={16} className="mt-6 flex flex-wrap items-center justify-between gap-4">
              <p className="text-[0.56rem] font-medium uppercase tracking-[0.18em] text-ink/30">
                Messages are answered during store hours.
              </p>
              <a
                href="#store"
                className="group inline-flex items-center gap-2 text-[0.58rem] font-semibold uppercase tracking-[0.22em] text-ink/55 transition-colors hover:text-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
              >
                Find the store
                <ArrowUpRight size={13} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
