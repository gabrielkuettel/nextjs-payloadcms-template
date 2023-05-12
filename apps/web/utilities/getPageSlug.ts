export function getPageSlug(slug: string | string[], defaultPage = 'home') {
  if (Array.isArray(slug)) {
    return slug.join('/')
  }

  return Array.isArray(slug) ? slug.join('/') : slug || defaultPage
}
