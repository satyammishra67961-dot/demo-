import { useId } from 'react'

const sizes = {
  sm: { mark: 26, word: 'text-[1.02rem] tracking-[0.36em]', tag: 'text-[0.46rem] tracking-[0.34em]' },
  md: { mark: 34, word: 'text-[1.35rem] tracking-[0.38em]', tag: 'text-[0.5rem] tracking-[0.36em]' },
  lg: { mark: 46, word: 'text-[2rem] tracking-[0.4em]', tag: 'text-[0.56rem] tracking-[0.38em]' },
}

export function VMark({ size = 34, className = '' }) {
  const id = useId().replace(/:/g, '')
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`velora-gold-${id}`} x1="8" y1="6" x2="38" y2="42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f0dfb8" />
          <stop offset="0.45" stopColor="#c9a96a" />
          <stop offset="0.78" stopColor="#a68143" />
          <stop offset="1" stopColor="#e7d3a8" />
        </linearGradient>
      </defs>
      <path
        d="M8.5 8.5h9.2L24 30.4 30.3 8.5h9.2L28.6 39.5h-9.2L8.5 8.5Z"
        fill={`url(#velora-gold-${id})`}
      />
      <path
        d="M16.2 8.5h4.1L24 23.9l3.7-15.4h4.1L24 32.1 16.2 8.5Z"
        fill="#0b0b0a"
        fillOpacity="0.62"
      />
      <path d="M6 42.5h36" stroke="#c9a96a" strokeWidth="0.8" strokeOpacity="0.5" />
      <path d="m24 44.2 1.4 1.3L24 46.8l-1.4-1.3L24 44.2Z" fill="#e7d3a8" />
    </svg>
  )
}

export default function Logo({ size = 'md', withTagline = false, className = '' }) {
  const s = sizes[size] ?? sizes.md
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <VMark size={s.mark} className="shrink-0" />
      <span className="flex flex-col">
        <span className={`font-display font-medium leading-none text-current ${s.word}`}>
          VELORA
        </span>
        {withTagline && (
          <span className={`mt-1.5 font-sans font-medium uppercase leading-none text-champagne ${s.tag}`}>
            Wear Your Identity
          </span>
        )}
      </span>
    </span>
  )
}
