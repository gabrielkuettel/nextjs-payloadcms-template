import { Container } from '@/components/Container'
import { HeaderSection } from '@/components/HeaderSection'

type PageProps = {
  params: { slug: string | string[] }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Page(props: PageProps) {
  return (
    <Container topPadding>
      <HeaderSection title={`Portfolio`} description={`Portfolio Page`} />
      <Container topPadding bottomPadding>
        Portfolio
      </Container>
    </Container>
  )
}
