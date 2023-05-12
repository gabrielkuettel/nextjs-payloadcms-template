import { Post } from 'types'

export const mapPosts = (posts: Post[]) => {
  return posts.map((post) => {
    const slug = post.slug || ''
    const title = post.title || ''
    const publishedDate = post.publishedDate || ''

    const excerpt =
      (post.content?.[0].children as { text: string }[])
        .map((child) => child.text)
        .join(' ') || ''

    const imageUrl =
      (process.env.NEXT_PUBLIC_CMS_URL || '') + post.image?.url || ''

    const primaryTag = {
      name: (post.tags && post.tags[0]?.name) || '',
      slug: (post.tags && post.tags[0]?.slug) || ''
    }

    const author = {
      name: post.author?.name || '',
      slug: post.author?.slug || '',
      imageUrl:
        (process.env.NEXT_PUBLIC_CMS_URL || '') + post.author?.avatar?.url || ''
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
