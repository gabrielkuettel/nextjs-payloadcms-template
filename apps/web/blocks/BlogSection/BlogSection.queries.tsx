import qs from 'qs'
import { Post, PaginatedDocs } from 'types'
import { rest } from '@/api/rest'

export async function getPosts({ limit = 3 }) {
  const collection = 'posts'
  const query = qs.stringify({
    depth: 2,
    limit
  })

  const posts = await rest<PaginatedDocs<Post>>(collection + '?' + query)
  return posts?.docs
}
