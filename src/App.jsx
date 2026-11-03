import { useEffect, useState } from 'react'
import { ToastProvider } from './context/ToastContext'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import Marquee from './components/Marquee'
import Hero from './sections/Hero'
import Collections from './sections/Collections'
import Featured from './sections/Featured'
import About from './sections/About'
import WhyVelora from './sections/WhyVelora'
import Reviews from './sections/Reviews'
import VisitStore from './sections/VisitStore'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import { assetUrl } from './lib/assetUrl'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
    window.scrollTo(0, 0)

    let alive = true
    let timer
    let raf
    const started = performance.now()
    const hero = new Image()
    hero.src = assetUrl('/images/hero.webp')

    const finish = () => {
      if (!alive) return
      setLoading(false)
      window.setTimeout(() => {
        if (alive) setReady(true)
      }, 180)
    }

    const check = () => {
      if (!alive) return
      const elapsed = performance.now() - started
      const imageReady = hero.complete && hero.naturalWidth > 0

      if ((imageReady && elapsed > 1550) || elapsed > 3600) {
        finish()
        return
      }
      timer = window.setTimeout(check, 110)
    }

    raf = window.requestAnimationFrame(check)

    return () => {
      alive = false
      window.cancelAnimationFrame(raf)
      window.clearTimeout(timer)
    }
  }, [])

  return (
    <ToastProvider>
      <Loader visible={loading} />
      <div className="grain-overlay" aria-hidden="true" />
      <ScrollProgress />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[300] focus:border focus:border-champagne focus:bg-ink focus:px-5 focus:py-3 focus:text-[0.65rem] focus:font-semibold focus:uppercase focus:tracking-[0.22em] focus:text-champagne"
      >
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <Hero ready={ready} />
        <Marquee />
        <Collections />
        <Featured />
        <About />
        <WhyVelora />
        <Reviews />
        <VisitStore />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </ToastProvider>
  )
}
