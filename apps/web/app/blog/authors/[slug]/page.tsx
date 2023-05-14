import { notFound } from 'next/navigation'

import { BlogSection } from '@/components/BlogSection'
import { getPostsByAuthor } from './queries'
import { Container } from '@/components/Container'
import { mapPosts } from '@/utilities/mapPosts'
import { HeaderSection } from '@/components/HeaderSection'

type PageProps = {
  params: { slug: string | string[] }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Page(props: PageProps) {
  const slug = Array.isArray(props.params.slug)
    ? props.params.slug[0]
    : props.params.slug
  const postsData = getPostsByAuthor({ slug })
  const [posts] = await Promise.all([postsData])

  if (!posts) {
    notFound()
  }

  return (
    <Container topPadding>
      <HeaderSection
        title={`Author: ${slug.replaceAll('-', ' ')}`}
        description={`More posts by ${slug.replaceAll('-', ' ')}`}
      />
      <Container topPadding bottomPadding>
        <BlogSection posts={mapPosts(posts)} />
      </Container>
    </Container>
  )
}
