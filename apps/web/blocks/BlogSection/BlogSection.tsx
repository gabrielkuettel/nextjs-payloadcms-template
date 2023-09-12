import { BlogSectionBlock } from 'types'

import { getPosts } from './BlogSection.queries'
import { mapPosts } from '@/utils/mapPosts'
import { BlogSection as BlogSectionComponent } from '@/components/BlogSection'
import { Container } from '@/components/Container'

export type BlogSectionProps = BlogSectionBlock

export async function BlogSection({ show = '3' }: BlogSectionProps) {
  const posts = await getPosts({ limit: Number(show) })

  return (
    <Container>
      <BlogSectionComponent posts={mapPosts(posts || [])} />
    </Container>
  )
}
