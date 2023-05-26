import { Post } from 'types'

export const mapPosts = (posts: Post[]) => {
  return posts?.map((post) => {
    const slug = post.slug || ''
    const title = post.title || ''
    const publishedDate = post.publishedDate || ''

    const excerpt =
      (post.content?.[0].children as { text: string }[])
        .map((child) => child.text)
        .join(' ') || ''

    const imageUrl = post.image?.url || ''

    const primaryTag = {
      name: (post.tags && post.tags[0]?.name) || '',
      slug: (post.tags && post.tags[0]?.slug) || ''
    }

    const author = {
      name: typeof post.author !== 'string' ? post.author?.name || '' : '',
      slug: typeof post.author !== 'string' ? post.author?.slug || '' : '',
      imageUrl:
        typeof post.author !== 'string' ? post.author?.avatar?.url || '' : ''
    }

    const SDGs = post.SDGs?.map((SDG) => {
      return {
        name: SDG.name || '',
        slug: SDG.slug || '',
        imageUrl: typeof SDG.image !== 'string' ? SDG.image?.url || '' : ''
      }
    })

    const video =
      post.video?.type === 'embed'
        ? post.video?.embed
        : typeof post.video?.upload !== 'string'
        ? post.video?.upload?.url
        : ''

    return {
      ...post,
      imageUrl,
      primaryTag,
      author,
      slug,
      title,
      publishedDate,
      excerpt,
      SDGs,
      video
    }
  })
}
