const baseUrl = import.meta.env.BASE_URL

export function assetUrl(path) {
  if (!path) return path
  if (/^(?:[a-z]+:)?\/\//i.test(path) || path.startsWith('data:') || path.startsWith('#')) {
    return path
  }
  return `${baseUrl}${String(path).replace(/^\/+/, '')}`
}
