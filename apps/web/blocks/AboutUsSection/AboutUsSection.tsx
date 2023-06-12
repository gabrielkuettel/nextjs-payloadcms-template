'use client'
import { Container } from '@/components/Container'
import { AboutUs as AboutUsComponent } from '@/components/AboutUs'

export type AboutUsProps = {
  horizontalPadding?: boolean
  bottomPadding?: boolean
  topPadding?: boolean
  fullWidth?: boolean
}

export const AboutUsSection = ({
  horizontalPadding,
  bottomPadding,
  topPadding,
  fullWidth
}: AboutUsProps) => {
  return (
    <Container
      horizontalPadding={horizontalPadding}
      bottomPadding={bottomPadding}
      topPadding={topPadding}
      fullWidth={fullWidth}
    >
      <AboutUsComponent />
    </Container>
  )
}
