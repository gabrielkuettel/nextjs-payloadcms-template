import { Container } from '@/components/Container'
import { HeaderSection } from '@/components/HeaderSection'

type PageProps = {
  params: { slug: string | string[] }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Page(props: PageProps) {
  return (
    <Container topPadding>
      <HeaderSection title={`About Us`} description={`About Us Page`} />
      <Container topPadding bottomPadding>
        About Us
      </Container>
    </Container>
  )
}
