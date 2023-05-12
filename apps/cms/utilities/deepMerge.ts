/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item: unknown): boolean {
  return !!item && typeof item === 'object' && !Array.isArray(item)
}
/**
 * Deep merge two objects.
 * @param target
 * @param source
 */
export default function deepMerge<
  T extends { [key: string]: any },
  R extends { [key: string]: any }
>(target: T, source: R): T {
  const output = { ...target }
  if (isObject(target) && isObject(source)) {
    Object.keys(source).forEach((key) => {
      if (isObject(source[key])) {
        if (!(key in target)) {
          Object.assign(output, { [key]: source[key] })
        } else {
          output[key as keyof T] = deepMerge(target[key], source[key])
        }
      } else {
        Object.assign(output, { [key]: source[key] })
      }
    })
  }

  return output
}
