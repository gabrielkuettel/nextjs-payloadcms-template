import { notFound } from 'next/navigation'

import { getPage } from './queries'
import { getPageSlug } from '@/utilities/getPageSlug'
import { Blocks } from '@/blocks/Blocks'

type PageProps = {
  params: { slug: string | string[] }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Page(props: PageProps) {
  const slug = getPageSlug(props.params.slug)
  const pageData = getPage({ slug })

  const [page] = await Promise.all([pageData])

  if (!page) {
    notFound()
  }

  return (
    <main>
      <Blocks blocks={page.layout} />
    </main>
  )
}
