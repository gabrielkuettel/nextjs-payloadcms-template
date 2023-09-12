import { HeaderSectionBlock } from 'types'
import { Container } from '@/components/Container'
import { HeaderSection as HeaderSectionComponent } from '@/components/HeaderSection'

export type HeaderSectionProps = HeaderSectionBlock

export const HeaderSection: React.FC<HeaderSectionProps> = ({
  title,
  description
}) => {
  return (
    <Container>
      <HeaderSectionComponent
        title={title || ''}
        description={description || ''}
      />
    </Container>
  )
}
