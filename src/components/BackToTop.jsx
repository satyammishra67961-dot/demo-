import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp } from './Icons'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#home"
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-5 z-[100] flex h-11 w-11 items-center justify-center rounded-full border border-champagne/40 bg-ink/80 text-champagne shadow-luxe backdrop-blur-xl transition-colors hover:border-champagne hover:bg-champagne hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne sm:bottom-7 sm:right-7"
          aria-label="Back to top"
        >
          <ArrowUp size={17} />
        </motion.a>
      )}
    </AnimatePresence>
  )
}
