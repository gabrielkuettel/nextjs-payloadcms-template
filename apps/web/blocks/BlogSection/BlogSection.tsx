import { getPosts } from './BlogSection.queries'
import { mapPosts } from '@/utilities/mapPosts'
import { BlogSection as BlogSectionComponent } from '@/components/BlogSection'

export type BlogSectionProps = {
  blockName?: string
  blockType?: 'formBlock'
  show?: '3' | '6' | '9' | undefined
}

export async function BlogSection({ show }: { show: number }) {
  const posts = await getPosts({ limit: show })

  if (!posts || !posts.length) {
    return null
  }

  return <BlogSectionComponent posts={mapPosts(posts)} />
}
