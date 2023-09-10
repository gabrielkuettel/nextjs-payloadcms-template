import { Post, User, Media, Tag } from 'types'
import { checkRelation } from './checkRelation'

export const mapPosts = (posts: Post[]) => {
  return posts?.map((post) => {
    const slug = post.slug || ''
    const title = post.title || ''
    const publishedDate = post.publishedDate || ''

    const excerpt =
      (post.content?.[0].children as { text: string }[])
        .map((child) => child.text)
        .join(' ') || ''

    const imageUrl = checkRelation<Media>(post.image)?.url || ''

    const primaryTag = {
      name: checkRelation<Tag>(post.tags?.[0])?.name || '',
      slug: checkRelation<Tag>(post.tags?.[0])?.slug || ''
    }

    const author = {
      name: checkRelation<User>(post.author)?.name || '',
      slug: checkRelation<User>(post.author)?.slug || '',
      imageUrl:
        checkRelation<Media>(checkRelation<User>(post.author)?.avatar)?.url ||
        ''
    }

    return {
      ...post,
      imageUrl,
      primaryTag,
      author,
      slug,
      title,
      publishedDate,
      excerpt
    }
  })
}
