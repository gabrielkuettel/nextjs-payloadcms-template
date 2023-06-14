'use client'
import { Container } from '@/components/Container'
import { HeroSection as HeroComponent } from '@/components/HeroSection'

export type HeroProps = {
  horizontalPadding?: boolean
  bottomPadding?: boolean
  topPadding?: boolean
  fullWidth?: boolean
}

export const HeroSection = ({
  horizontalPadding,
  bottomPadding,
  topPadding,
  fullWidth
}: HeroProps) => {
  return (
    <Container
      horizontalPadding={horizontalPadding}
      bottomPadding={bottomPadding}
      topPadding={topPadding}
      fullWidth={fullWidth}
    >
      <HeroComponent />
    </Container>
  )
}
