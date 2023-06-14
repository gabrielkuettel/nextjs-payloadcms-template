import { Container } from '@/components/Container'
import { HeroSection } from '@/blocks/HeroSection'
import { ClientSection } from '@/blocks/ClientSection'
import { AboutUsSection } from '@/blocks/AboutUsSection'
import { CategorySection } from '@/blocks/CategorySection'
import { ImageGridSection } from '@/blocks/ImageGridSection'
import { FaqsSection } from '@/blocks/FaqsSection'
import { ContactSection } from '@/blocks/ContactSection'

type PageProps = {
  params: { slug: string | string[] }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Page(props: PageProps) {
  return (
    <>
      <Container
        fullWidth
        className="pt-16 sm:pt-8 lg:pt-20"
        horizontalPadding={false}
      >
        <HeroSection horizontalPadding={false}></HeroSection>
        <ClientSection horizontalPadding={false}></ClientSection>
        <AboutUsSection fullWidth horizontalPadding={false}></AboutUsSection>
      </Container>
      <Container
        fullWidth
        className="!bg-slate-50 pt-16 sm:pt-8 lg:pt-20"
        horizontalPadding={false}
      >
        <CategorySection horizontalPadding={false}></CategorySection>
        <ImageGridSection horizontalPadding={false}></ImageGridSection>
        <FaqsSection horizontalPadding={false}></FaqsSection>
        <ContactSection horizontalPadding={false}></ContactSection>
      </Container>
    </>
  )
}
