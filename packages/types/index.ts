import type {
  Page as PayloadPage,
  Post as PayloadPost,
  User as PayloadUser,
  Category,
  Tag,
  Media,
  Sdg
} from './payload-types'

export * from './payload-types'

export { PayloadPage, PayloadPost, PayloadUser }

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

export interface User extends PayloadUser {
  avatar: Media
}

export interface Post extends PayloadPost {
  category?: Category
  author?: User
  tags?: Tag[]
  SDGs?: Sdg[]
  image: Media
}

export type Layout = PayloadPage['layout']

export interface Page extends PayloadPage {
  layout: Layout
}
