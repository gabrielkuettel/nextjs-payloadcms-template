import { isRelation } from './isRelation'

export function checkRelation<Collection>(obj: any) {
  if (!isRelation(obj)) {
    return null
  }

  return obj as Collection
}
