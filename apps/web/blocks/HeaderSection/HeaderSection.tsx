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
  fullWidth?: boolean
}

export const HeaderSection: React.FC<HeaderSectionProps> = ({
  title,
  description,
  horizontalPadding,
  bottomPadding,
  topPadding,
  fullWidth
}) => {
  return (
    <Container
      horizontalPadding={horizontalPadding}
      bottomPadding={bottomPadding}
      topPadding={topPadding}
      fullWidth={fullWidth}
    >
      <HeaderSectionComponent title={title} description={description} />
    </Container>
  )
}
