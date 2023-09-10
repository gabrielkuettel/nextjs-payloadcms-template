import { isRelationship } from './isRelationship'

export function checkRelation<Collection>(obj: any) {
  if (!isRelationship(obj)) {
    return null
  }

  return obj as Collection
}
