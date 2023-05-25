import qs from 'qs'
import { Post, PaginatedDocs } from 'types'

import { rest } from '@/api/rest'

export async function getPostsBySDG({ slug }: { slug: string }) {
  const collection = 'posts'

  const query = qs.stringify({
    depth: 10,
    where: {
      and: [
        {
          'SDGs.slug': {
            contains: slug
          }
        }
      ]
    }
  })

  const postsData = await rest<PaginatedDocs<Post>>(collection + '?' + query)
  const posts = postsData?.docs

  return posts
}
