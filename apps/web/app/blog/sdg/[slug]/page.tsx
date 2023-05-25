import { notFound } from 'next/navigation'

import { BlogSection } from '@/components/BlogSection'
import { getPostsBySDG } from './queries'
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
  const postsData = getPostsBySDG({ slug })
  const [posts] = await Promise.all([postsData])

  if (!posts) {
    notFound()
  }

  return (
    <Container topPadding>
      <HeaderSection
        title={`SDG: ${slug.replaceAll('-', ' ')}`}
        description={`Keeping reading about ${slug.replaceAll('-', ' ')}`}
      />
      <Container topPadding bottomPadding>
        <BlogSection posts={mapPosts(posts)} />
      </Container>
    </Container>
  )
}
