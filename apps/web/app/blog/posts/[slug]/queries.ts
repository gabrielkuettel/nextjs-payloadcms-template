import qs from 'qs'
import { Post, PaginatedDocs, Tag } from 'types'
import { checkRelation } from '@/utils/checkRelation'

import { rest } from '@/api/rest'

export async function getPost({ slug }: { slug: string }) {
  const collection = 'posts'
  const query = qs.stringify({
    where: {
      slug: {
        equals: slug
      }
    }
  })

  const postData = await rest<PaginatedDocs<Post>>(collection + '?' + query)
  const post = postData?.docs[0]

  return post
}

export async function getRelatedPosts({
  slug,
  tag
}: {
  slug: string
  tag: string
}) {
  const collection = 'posts'
  const query = qs.stringify({
    depth: 10,
    where: {
      and: [
        {
          'tags.slug': {
            contains: tag
          }
        },
        {
          slug: {
            not_equals: slug
          }
        }
      ]
    }
  })

  const postsData = await rest<PaginatedDocs<Post>>(collection + '?' + query)
  const posts = postsData?.docs

  return posts
}

export async function getPage({ slug }: { slug: string }) {
  const post = await getPost({ slug })

  if (!post) {
    throw new Error('Post not found')
  }

  const primaryTag = checkRelation<Tag>(post?.tags?.[0])?.slug || ''
  const relatedPosts = await getRelatedPosts({ slug, tag: primaryTag })

  return {
    post,
    primaryTag,
    relatedPosts
  }
}
