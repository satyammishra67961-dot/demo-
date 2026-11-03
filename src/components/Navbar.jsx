import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Logo, { VMark } from './Logo'
import { ArrowUpRight, Close, Facebook, Instagram, Menu } from './Icons'
import { navLinks } from '../data/content'
import { site } from '../config/site'
import { useActiveSection } from '../hooks/useActiveSection'
import { useBodyLock } from '../hooks/useBodyLock'
import { useDialogFocus } from '../hooks/useDialogFocus'

const sectionIds = ['home', 'about', 'collections', 'gallery', 'store', 'contact']
const ease = [0.22, 1, 0.36, 1]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const panelRef = useRef(null)
  const active = useActiveSection(sectionIds)

  const close = useCallback(() => setOpen(false), [])
  useBodyLock(open)
  useDialogFocus(open, panelRef, close)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return undefined
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[100] transition-all duration-500 ${
          scrolled
            ? 'border-b border-white/[0.08] bg-ink/80 py-3 shadow-[0_16px_50px_-30px_rgba(0,0,0,0.9)] backdrop-blur-2xl'
            : 'border-b border-transparent bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
          <a
            href="#home"
            className="group relative z-10 text-ivory transition-colors hover:text-champagne-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-4 focus-visible:ring-offset-ink"
            aria-label="VELORA — home"
          >
            <Logo size={scrolled ? 'sm' : 'md'} withTagline={false} />
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex xl:gap-9">
            {navLinks.map((link) => {
              const isActive = active === link.href.slice(1)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`group relative py-2 text-[0.58rem] font-semibold uppercase tracking-[0.24em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-4 focus-visible:ring-offset-ink ${
                    isActive ? 'text-champagne' : 'text-ivory/65 hover:text-ivory'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-0.5 left-0 h-px bg-champagne transition-all duration-500 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#store"
              className="group hidden items-center gap-2 border border-champagne/35 px-5 py-3 text-[0.56rem] font-semibold uppercase tracking-[0.24em] text-champagne transition-colors duration-300 hover:border-champagne hover:bg-champagne hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-4 focus-visible:ring-offset-ink xl:inline-flex"
            >
              Plan Your Visit
              <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="flex h-11 w-11 items-center justify-center border border-white/15 text-ivory transition-colors hover:border-champagne hover:text-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-4 focus-visible:ring-offset-ink lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            ref={panelRef}
            className="fixed inset-0 z-[130] overflow-y-auto bg-ink text-ivory lg:hidden"
            initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.55, ease }}
            role="dialog"
            aria-modal="true"
            aria-label="VELORA navigation"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background:
                  'radial-gradient(circle at 82% 12%, rgba(201,169,106,0.14), transparent 30%), radial-gradient(circle at 12% 82%, rgba(201,169,106,0.08), transparent 34%)',
              }}
            />
            <VMark
              size={520}
              className="pointer-events-none absolute -bottom-24 -right-28 opacity-[0.035]"
            />

            <div className="relative mx-auto flex min-h-full max-w-3xl flex-col px-6 pb-10 pt-6 sm:px-10">
              <div className="flex items-center justify-between">
                <a href="#home" onClick={close} aria-label="VELORA — home" className="text-ivory">
                  <Logo size="sm" />
                </a>
                <button
                  type="button"
                  onClick={close}
                  className="flex h-11 w-11 items-center justify-center border border-white/15 text-ivory transition-colors hover:border-champagne hover:text-champagne focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne"
                  aria-label="Close menu"
                >
                  <Close size={20} />
                </button>
              </div>

              <nav aria-label="Mobile" className="mt-14 flex-1">
                <ul>
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, y: 26 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.55, delay: 0.14 + index * 0.055, ease }}
                      className="border-b border-white/[0.08]"
                    >
                      <a
                        href={link.href}
                        onClick={close}
                        className="group flex items-baseline gap-4 py-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne sm:py-5"
                      >
                        <span className="w-6 font-sans text-[0.55rem] tracking-[0.2em] text-champagne/60">
                          0{index + 1}
                        </span>
                        <span className="font-display text-[2.5rem] font-light leading-none tracking-[-0.02em] text-ivory transition-colors group-hover:text-champagne sm:text-[3.2rem]">
                          {link.label}
                        </span>
                        <ArrowUpRight
                          size={20}
                          className="ml-auto text-champagne/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-champagne"
                        />
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.55, duration: 0.5 }}
                className="mt-10 border-t border-white/[0.08] pt-6"
              >
                <p className="text-[0.55rem] font-semibold uppercase tracking-[0.3em] text-champagne/70">
                  {site.tagline}
                </p>
                <div className="mt-3 flex flex-wrap items-center justify-between gap-4 text-[0.72rem] text-ivory/45">
                  <span>{site.address}</span>
                  <div className="flex items-center gap-2">
                    <span className="flex h-9 w-9 items-center justify-center border border-white/10 text-ivory/60">
                      <Instagram size={15} />
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center border border-white/10 text-ivory/60">
                      <Facebook size={15} />
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
