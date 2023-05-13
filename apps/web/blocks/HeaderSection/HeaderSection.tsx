import { Container } from '@/components/Container'
import { HeaderSection as HeaderSectionComponent } from '@/components/HeaderSection'

export type HeaderSectionProps = {
  blockType: string
  blockName?: string
  title: string
  description: string
  horizontalPadding?: boolean
  bottomPadding?: boolean
  topPadding?: boolean
}

export const HeaderSection: React.FC<HeaderSectionProps> = ({
  title,
  description,
  horizontalPadding,
  bottomPadding,
  topPadding
}) => {
  return (
    <Container
      horizontalPadding={horizontalPadding}
      bottomPadding={bottomPadding}
      topPadding={topPadding}
    >
      <HeaderSectionComponent title={title} description={description} />
    </Container>
  )
}
