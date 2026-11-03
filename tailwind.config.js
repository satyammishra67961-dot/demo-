/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b0b0a',
        'ink-soft': '#141311',
        ivory: '#f7f2e8',
        cream: '#ede3d2',
        sand: '#d8c9b2',
        champagne: '#c9a96a',
        'champagne-light': '#e7d3a8',
        muted: '#8c8377',
        line: 'rgba(201,169,106,0.22)',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra': '0.42em',
      },
      opacity: {
        8: '0.08',
        12: '0.12',
        15: '0.15',
        35: '0.35',
        45: '0.45',
        55: '0.55',
        65: '0.65',
        85: '0.85',
        96: '0.96',
      },
      boxShadow: {
        luxe: '0 30px 80px -30px rgba(11,11,10,0.55)',
        'gold-glow': '0 0 60px -12px rgba(201,169,106,0.45)',
      },
      backgroundImage: {
        'gold-sheen': 'linear-gradient(115deg, transparent 20%, rgba(231,211,168,0.5) 45%, rgba(201,169,106,0.15) 55%, transparent 80%)',
      },
    },
  },
  plugins: [],
}
