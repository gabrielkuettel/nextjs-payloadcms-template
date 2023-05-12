export function formatMediaURL(path: string) {
  if (path.startsWith('http')) {
    return path
  } else {
    return `${process.env.NEXT_PUBLIC_CMS_URL}${path}`
  }
}
