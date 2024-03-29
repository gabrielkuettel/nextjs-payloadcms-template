export * from './payload-types'

// node_modules/payload/dist/mongoose/types.d.ts
export type PaginatedDocs<T = any> = {
  docs: T[]
  totalDocs: number
  limit: number
  totalPages: number
  page?: number | undefined
  pagingCounter: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage?: number | null | undefined
  nextPage?: number | null | undefined
}
