const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

function Svg({ children, size = 20, className = '', viewBox = '0 0 24 24', ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      className={className}
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  )
}

export const ArrowUpRight = (p) => (
  <Svg {...p}>
    <path d="M7 17 17 7M8 7h9v9" {...base} />
  </Svg>
)

export const ArrowRight = (p) => (
  <Svg {...p}>
    <path d="M4 12h15M13 6l6 6-6 6" {...base} />
  </Svg>
)

export const ArrowLeft = (p) => (
  <Svg {...p}>
    <path d="M20 12H5M11 6l-6 6 6 6" {...base} />
  </Svg>
)

export const ArrowDown = (p) => (
  <Svg {...p}>
    <path d="M12 4v15M6 13l6 6 6-6" {...base} />
  </Svg>
)

export const ArrowUp = (p) => (
  <Svg {...p}>
    <path d="M12 20V5M6 11l6-6 6 6" {...base} />
  </Svg>
)

export const Menu = (p) => (
  <Svg {...p}>
    <path d="M4 8h16M4 16h16" {...base} />
  </Svg>
)

export const Close = (p) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6 6 18" {...base} />
  </Svg>
)

export const Plus = (p) => (
  <Svg {...p}>
    <path d="M12 5v14M5 12h14" {...base} />
  </Svg>
)

export const Minus = (p) => (
  <Svg {...p}>
    <path d="M5 12h14" {...base} />
  </Svg>
)

export const Phone = (p) => (
  <Svg {...p}>
    <path
      d="M5.5 3.5h3l1.5 4-2 1.4a14.5 14.5 0 0 0 6.1 6.1l1.4-2 4 1.5v3a2 2 0 0 1-2.2 2A17.5 17.5 0 0 1 3.5 5.7a2 2 0 0 1 2-2.2Z"
      {...base}
    />
  </Svg>
)

export const Mail = (p) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" {...base} />
    <path d="m4 7 8 6 8-6" {...base} />
  </Svg>
)

export const Pin = (p) => (
  <Svg {...p}>
    <path d="M20 10c0 5.4-8 11-8 11S4 15.4 4 10a8 8 0 1 1 16 0Z" {...base} />
    <circle cx="12" cy="10" r="2.6" {...base} />
  </Svg>
)

export const Clock = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" {...base} />
    <path d="M12 7.5V12l3 2" {...base} />
  </Svg>
)

export const Instagram = (p) => (
  <Svg {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" {...base} />
    <circle cx="12" cy="12" r="4" {...base} />
    <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
  </Svg>
)

export const Facebook = (p) => (
  <Svg {...p}>
    <path
      d="M14.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.2-1.5 1.5-1.5h1.5V5a20 20 0 0 0-2.2-.1c-2.2 0-3.7 1.3-3.7 3.8V11H9v3h2.6v7"
      {...base}
    />
  </Svg>
)

export const WhatsApp = (p) => (
  <Svg {...p}>
    <path
      d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.5L3.5 20.5l1.4-4.3a8.5 8.5 0 1 1 15.6-4.6Z"
      {...base}
    />
    <path
      d="M8.8 7.8c.3 0 .6.1.8.7l.6 1.5c.1.3 0 .6-.2.8l-.7.7c.7 1.4 1.8 2.4 3.2 3.1l.7-.8c.2-.2.5-.3.8-.2l1.5.7c.5.2.7.5.7.8 0 1-.8 1.9-2 2-3.4.2-7.3-3.6-7.5-7 0-1.2.8-2.2 1.8-2.2Z"
      {...base}
    />
  </Svg>
)

export const Google = ({ size = 20, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    className={className}
    aria-hidden="true"
    focusable="false"
  >
    <path
      fill="#FFC107"
      d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z"
    />
    <path
      fill="#FF3D00"
      d="m6.3 14.7 6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.9 1.2 8 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.2-8l-6.6 5C9.5 39.6 16.2 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.5l6.2 5.2C41 35.9 44 30.5 44 24c0-1.3-.1-2.4-.4-3.5z"
    />
  </svg>
)

export const Star = ({ size = 18, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path
      d="m12 3.6 2.5 5.2 5.7.8-4.1 4 1 5.7-5.1-2.7-5.1 2.7 1-5.7-4.1-4 5.7-.8Z"
      fill="currentColor"
    />
  </svg>
)

export const Quote = (p) => (
  <Svg {...p}>
    <path
      d="M9.5 6C6.9 7.4 5.5 9.7 5.5 12.7V18h5v-5.5H7.9c.2-1.8 1-3 2.6-3.8L9.5 6Zm9 0c-2.6 1.4-4 3.7-4 6.7V18h5v-5.5h-2.6c.2-1.8 1-3 2.6-3.8L18.5 6Z"
      fill="currentColor"
      stroke="none"
    />
  </Svg>
)

export const Sparkle = (p) => (
  <Svg {...p}>
    <path d="M12 3c.7 5 2.2 6.5 7 7-4.8.5-6.3 2-7 7-.7-5-2.2-6.5-7-7 4.8-.5 6.3-2 7-7Z" {...base} />
    <path d="M19 16c.3 2 .9 2.6 2.6 2.9-1.7.3-2.3.9-2.6 2.9-.3-2-.9-2.6-2.6-2.9 1.7-.3 2.3-.9 2.6-2.9Z" {...base} />
  </Svg>
)

export const Scissors = (p) => (
  <Svg {...p}>
    <circle cx="6" cy="6.5" r="2.5" {...base} />
    <circle cx="6" cy="17.5" r="2.5" {...base} />
    <path d="m8.2 8.2 11.3 8.3M8.2 15.8 19.5 7.5" {...base} />
  </Svg>
)

export const Diamond = (p) => (
  <Svg {...p}>
    <path d="m12 3 8 7-8 11L4 10Z" {...base} />
    <path d="M4 10h16M9 10l3-7 3 7-3 11Z" {...base} />
  </Svg>
)

export const Heart = (p) => (
  <Svg {...p}>
    <path
      d="M20.5 8.8c0 5-8.5 10.2-8.5 10.2S3.5 13.8 3.5 8.8A4.6 4.6 0 0 1 12 6.3a4.6 4.6 0 0 1 8.5 2.5Z"
      {...base}
    />
  </Svg>
)

export const People = (p) => (
  <Svg {...p}>
    <circle cx="9" cy="8" r="3" {...base} />
    <path d="M3.5 20c.4-3.4 2.6-5.3 5.5-5.3s5.1 1.9 5.5 5.3" {...base} />
    <circle cx="17" cy="9.5" r="2.3" {...base} />
    <path d="M15.6 14.8c2.7-.3 4.6 1.4 4.9 4.3" {...base} />
  </Svg>
)

export const Check = (p) => (
  <Svg {...p}>
    <path d="m5 12.5 4.5 4.5L19 7" {...base} />
  </Svg>
)

export const ChevronDown = (p) => (
  <Svg {...p}>
    <path d="m6 9 6 6 6-6" {...base} />
  </Svg>
)

export const External = (p) => (
  <Svg {...p}>
    <path d="M14 4h6v6M20 4l-8.5 8.5M18 14v4.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 4 18.5v-11A1.5 1.5 0 0 1 5.5 6H10" {...base} />
  </Svg>
)

export const Compass = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="8.5" {...base} />
    <path d="m15.5 8.5-2 5-5 2 2-5Z" {...base} />
  </Svg>
)

export const Play = (p) => (
  <Svg {...p}>
    <path d="M8 5.5v13l11-6.5-11-6.5Z" {...base} />
  </Svg>
)

export const Pause = (p) => (
  <Svg {...p}>
    <path d="M9 5v14M15 5v14" {...base} />
  </Svg>
)

export const iconMap = {
  sparkle: Sparkle,
  scissors: Scissors,
  diamond: Diamond,
  heart: Heart,
  people: People,
}
