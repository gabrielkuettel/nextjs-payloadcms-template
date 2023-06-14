'use client'
import { Container } from '@/components/Container'
import { Category as CategoryComponent } from '@/components/Category'

export type HeroProps = {
  horizontalPadding?: boolean
  bottomPadding?: boolean
  topPadding?: boolean
  fullWidth?: boolean
}

export const CategorySection = ({
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
      className="!bg-slate-50"
    >
      <CategoryComponent />
    </Container>
  )
}
