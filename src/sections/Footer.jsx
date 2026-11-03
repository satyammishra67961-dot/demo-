import Logo from '../components/Logo'
import {
  ArrowUp,
  Facebook,
  Instagram,
  Mail,
  Phone,
  Pin,
  Clock,
  External,
  ArrowUpRight,
} from '../components/Icons'
import { collections, navLinks } from '../data/content'
import { site, isPlaceholder, mapHref } from '../config/site'
import { useToast } from '../context/ToastContext'

export default function Footer() {
  const { notify } = useToast()
  const year = new Date().getFullYear()

  const openSocial = (url) => {
    if (!isPlaceholder(url)) {
      window.open(url, '_blank', 'noopener,noreferrer')
      return
    }
    notify('This social profile is not connected yet. Add the link in src/config/site.js.')
  }

  const directions = mapHref('mapDirectionsUrl')

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.08] bg-[#080807] text-ivory">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 42% 42% at 50% 0%, rgba(201,169,106,0.09), transparent 64%)',
        }}
      />

      <div className="pointer-events-none relative overflow-hidden border-b border-white/[0.06]">
        <p className="select-none whitespace-nowrap py-3 text-center font-display text-[clamp(4.2rem,15vw,13rem)] font-light uppercase leading-none tracking-[0.16em] text-white/[0.035]">
          VELORA
        </p>
      </div>

      <div className="container-luxe relative">
        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8 lg:py-20">
          <div className="sm:col-span-2 lg:col-span-4">
            <a
              href="#home"
              className="inline-block text-ivory transition-colors hover:text-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
              aria-label="VELORA — home"
            >
              <Logo size="lg" withTagline />
            </a>
            <p className="mt-6 max-w-sm text-[0.82rem] font-light leading-[1.85] text-ivory/40">
              A premium fashion house celebrating confidence, personality and individuality.
              Explore collections designed to make every moment stylish.
            </p>
            <div className="mt-7 flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => openSocial(site.instagram)}
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-ivory/50 transition-colors hover:border-champagne hover:bg-champagne hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
                aria-label="VELORA on Instagram"
              >
                <Instagram size={16} />
              </button>
              <button
                type="button"
                onClick={() => openSocial(site.facebook)}
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-ivory/50 transition-colors hover:border-champagne hover:bg-champagne hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
                aria-label="VELORA on Facebook"
              >
                <Facebook size={16} />
              </button>
              <a
                href={directions}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-ivory/50 transition-colors hover:border-champagne hover:bg-champagne hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
                aria-label="Get directions to VELORA"
              >
                <Pin size={16} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 lg:pl-4">
            <h3 className="text-[0.52rem] font-semibold uppercase tracking-[0.28em] text-champagne/80">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-[0.76rem] font-light text-ivory/45 transition-colors hover:text-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
                  >
                    {link.label}
                    <ArrowUpRight size={10} className="opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[0.52rem] font-semibold uppercase tracking-[0.28em] text-champagne/80">
              Collections
            </h3>
            <ul className="mt-5 space-y-3">
              {collections.map((collection) => (
                <li key={collection.id}>
                  <a
                    href="#collections"
                    className="group flex items-center justify-between gap-3 border-b border-white/[0.06] pb-2 text-[0.76rem] font-light text-ivory/45 transition-colors hover:text-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
                  >
                    <span>{collection.title}</span>
                    <span className="font-display text-xs text-ivory/20">{collection.number}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[0.52rem] font-semibold uppercase tracking-[0.28em] text-champagne/80">
              Visit & contact
            </h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <Pin size={15} className="mt-0.5 shrink-0 text-champagne/70" />
                <span className="text-[0.76rem] font-light leading-relaxed text-ivory/45">
                  {site.address}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} className="mt-0.5 shrink-0 text-champagne/70" />
                <span className="text-[0.76rem] font-light leading-relaxed text-ivory/45">
                  {site.phone}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="mt-0.5 shrink-0 text-champagne/70" />
                <span className="break-all text-[0.76rem] font-light leading-relaxed text-ivory/45">
                  {site.email}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="mt-0.5 shrink-0 text-champagne/70" />
                <span className="text-[0.76rem] font-light leading-relaxed text-ivory/45">
                  {site.businessHours}
                </span>
              </li>
            </ul>

            <a
              href={directions}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 inline-flex items-center gap-2 border border-champagne/25 px-4 py-2.5 text-[0.52rem] font-semibold uppercase tracking-[0.2em] text-champagne transition-colors hover:border-champagne hover:bg-champagne hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
            >
              Google Maps directions
              <External size={12} />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/[0.08] py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[0.58rem] font-light tracking-[0.1em] text-ivory/30">
            © {year} VELORA. All rights reserved.
          </p>
          <p className="text-[0.5rem] font-semibold uppercase tracking-[0.24em] text-champagne/55">
            Wear Your Identity.
          </p>
          <div className="flex items-center gap-5">
            <p className="text-[0.5rem] font-medium uppercase tracking-[0.18em] text-ivory/20">
              A style showcase · No online checkout
            </p>
            <a
              href="#home"
              className="flex h-9 w-9 items-center justify-center border border-white/10 text-ivory/45 transition-colors hover:border-champagne hover:text-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
