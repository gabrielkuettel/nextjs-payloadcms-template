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
  const [postPage] = await Promise.all([getPage({ slug })])

  console.log(postPage)

  if (!postPage) {
    notFound()
  }

  return (
    <article>
      <Post
        post={postPage.post}
        primaryTag={postPage.primaryTag}
        relatedPosts={postPage.relatedPosts}
      />
    </article>
  )
}
