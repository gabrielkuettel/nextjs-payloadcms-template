'use client'
import { Container } from '@/components/Container'
import { Faqs as FaqsComponent } from '@/components/Faqs'

export type FaqsProps = {
  horizontalPadding?: boolean
  bottomPadding?: boolean
  topPadding?: boolean
  fullWidth?: boolean
}

export const FaqsSection = ({
  horizontalPadding,
  bottomPadding,
  topPadding,
  fullWidth
}: FaqsProps) => {
  return (
    <Container
      horizontalPadding={horizontalPadding}
      bottomPadding={bottomPadding}
      topPadding={topPadding}
      fullWidth={fullWidth}
      className="mt-8 rounded-xl sm:mt-12"
    >
      <FaqsComponent />
    </Container>
  )
}
