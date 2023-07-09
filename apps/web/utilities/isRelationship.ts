export function isRelationship<Collection>(obj: any): obj is Collection {
  return obj && typeof obj !== 'string'
}
