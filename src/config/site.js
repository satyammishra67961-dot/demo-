/*
 * VELORA — editable brand information
 * ------------------------------------------------------------
 * Replace the bracketed placeholders below with the real details.
 * Anything still wrapped in [ ] is treated as "not connected yet",
 * so the interface shows a helpful notice instead of a broken link.
 */
export const site = {
  name: 'VELORA',
  tagline: 'Wear Your Identity.',
  description:
    'VELORA is a premium fashion house celebrating confident, modern style for men, women, kids and traditional occasions.',

  // Contact
  phone: '[PHONE NUMBER]',
  whatsapp: '[WHATSAPP NUMBER]',
  whatsappMessage:
    'Hello VELORA, I would like to know more about your collections and store visit.',
  email: '[EMAIL ADDRESS]',
  address: '[STORE ADDRESS]',
  businessHours: '[BUSINESS HOURS]',

  // Social
  instagram: '[INSTAGRAM URL]',
  facebook: '[FACEBOOK URL]',

  // Google reviews — add the genuine profile links when available.
  googleReviewsUrl: '[GOOGLE REVIEWS URL]',
  googleWriteReviewUrl: '[GOOGLE WRITE REVIEW URL]',

  // Google Maps — paste the full URLs from Google Maps.
  mapEmbedUrl: '[GOOGLE MAPS EMBED URL]',
  mapDirectionsUrl: '[GOOGLE MAPS DIRECTIONS URL]',
  mapOpenUrl: '[GOOGLE MAPS DIRECTIONS URL]',
}

export const MAP_PREVIEW_QUERY = 'Fashion Street, Mumbai, India'

export const mapLinks = {
  embed: `https://www.google.com/maps?q=${encodeURIComponent(MAP_PREVIEW_QUERY)}&output=embed`,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MAP_PREVIEW_QUERY)}`,
  open: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_PREVIEW_QUERY)}`,
}

export function isPlaceholder(value) {
  if (!value) return true
  const text = String(value).trim()
  return text.startsWith('[') || text.includes('YOUR_') || text === '#'
}

export function telHref(value) {
  if (isPlaceholder(value)) return null
  return `tel:${String(value).replace(/[^\d+]/g, '')}`
}

export function mailHref(value) {
  if (isPlaceholder(value)) return null
  return `mailto:${String(value).trim()}`
}

export function whatsappHref(value, message) {
  if (isPlaceholder(value)) return null
  const digits = String(value).replace(/\D/g, '')
  if (!digits) return null
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
}

export function mapHref(key) {
  const configured = site[key]
  return isPlaceholder(configured) ? mapLinks[key === 'mapEmbedUrl' ? 'embed' : key === 'mapOpenUrl' ? 'open' : 'directions'] : configured
}

export function mapIsDemo() {
  return isPlaceholder(site.mapEmbedUrl)
}
