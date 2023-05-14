import { notFound } from 'next/navigation'

import { getPageSlug } from '@/utilities/getPageSlug'
import { getPage } from './queries'
import { Post } from '@/components/Post'

type PageProps = {
  params: { slug: string | string[] }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Page(props: PageProps) {
  const slug = getPageSlug(props.params.slug)
  const [postData] = await Promise.all([getPage({ slug })])

  if (!postData) {
    notFound()
  }

  return (
    <article>
      <Post
        post={postData.post}
        primaryTag={postData.primaryTag}
        relatedPosts={postData.relatedPosts}
      />
    </article>
  )
}
