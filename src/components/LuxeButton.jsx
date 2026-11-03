import { motion } from 'framer-motion'
import { ArrowUpRight } from './Icons'

const variants = {
  gold: 'border-champagne bg-champagne text-ink hover:bg-champagne-light hover:border-champagne-light',
  outline:
    'border-ink/20 bg-transparent text-ink hover:border-champagne hover:text-champagne',
  light:
    'border-ivory/25 bg-transparent text-ivory hover:border-ivory hover:bg-ivory hover:text-ink',
  dark: 'border-ink bg-ink text-ivory hover:border-ink-soft hover:bg-ink-soft',
  ghost: 'border-transparent bg-transparent text-current hover:text-champagne',
}

export default function LuxeButton({
  as = 'a',
  href,
  children,
  variant = 'gold',
  icon = ArrowUpRight,
  className = '',
  onClick,
  type,
  ...props
}) {
  const MotionTag = as === 'button' ? motion.button : motion.a
  const Icon = icon

  return (
    <MotionTag
      href={as === 'a' ? href : undefined}
      type={as === 'button' ? type ?? 'button' : undefined}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.985 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative inline-flex items-center justify-center gap-3 overflow-hidden border px-6 py-4 text-[0.63rem] font-semibold uppercase tracking-[0.25em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:px-7 ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {Icon && (
        <Icon
          size={15}
          className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      )}
      <span
        aria-hidden="true"
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
      />
    </MotionTag>
  )
}

export function TextLink({ href, children, onClick, className = '', invert = false }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`group inline-flex items-center gap-2 text-[0.63rem] font-semibold uppercase tracking-[0.22em] transition-colors ${
        invert ? 'text-ivory/70 hover:text-champagne' : 'text-ink/65 hover:text-champagne'
      } ${className}`}
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-champagne transition-transform duration-500 group-hover:scale-x-100" />
      </span>
      <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
    </a>
  )
}
