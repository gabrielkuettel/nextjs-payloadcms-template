export function formatMediaURL(path: string | undefined | null) {
  if (!path) {
    return null
  }

  if (path.startsWith('http')) {
    return path
  } else {
    return `${process.env.NEXT_PUBLIC_CMS_URL}${path}`
  }
}
