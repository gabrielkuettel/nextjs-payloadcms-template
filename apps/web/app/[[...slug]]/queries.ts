import qs from 'qs'
import { Page } from 'types'
import { rest } from '@/api/rest'

export async function getPage({ slug }: { slug: string }) {
  const collection = 'pages'
  const query = qs.stringify({
    where: {
      slug: {
        equals: slug
      }
    }
  })

  const page = await rest<Page>(collection + '?' + query)
  return page?.docs[0]
}
