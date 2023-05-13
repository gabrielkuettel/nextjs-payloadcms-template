import { getPosts } from './BlogSection.queries'
import { mapPosts } from '@/utilities/mapPosts'
import { BlogSection as BlogSectionComponent } from '@/components/BlogSection'
import { Container } from '@/components/Container'

export type BlogSectionProps = {
  blockName?: string
  blockType?: 'formBlock'
  show?: '3' | '6' | '9' | undefined
  horizontalPadding?: boolean
  bottomPadding?: boolean
  topPadding?: boolean
}

export async function BlogSection({
  show = '3',
  horizontalPadding,
  bottomPadding,
  topPadding
}: BlogSectionProps) {
  const posts = await getPosts({ limit: Number(show) })

  if (!posts || !posts.length) {
    return null
  }

  return (
    <Container
      horizontalPadding={horizontalPadding}
      bottomPadding={bottomPadding}
      topPadding={topPadding}
    >
      <BlogSectionComponent posts={mapPosts(posts)} />
    </Container>
  )
}
