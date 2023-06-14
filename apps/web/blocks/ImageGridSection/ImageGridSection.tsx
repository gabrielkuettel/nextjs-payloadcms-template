'use client'
import { Container } from '@/components/Container'
import { ImageGrid as ImageGridComponent } from '@/components/ImageGrid'

export type ImageGridProps = {
  horizontalPadding?: boolean
  bottomPadding?: boolean
  topPadding?: boolean
  fullWidth?: boolean
}

export const ImageGridSection = ({
  horizontalPadding,
  bottomPadding,
  topPadding,
  fullWidth
}: ImageGridProps) => {
  return (
    <Container
      horizontalPadding={horizontalPadding}
      bottomPadding={bottomPadding}
      topPadding={topPadding}
      fullWidth={fullWidth}
      className="!bg-slate-50"
    >
      <ImageGridComponent />
    </Container>
  )
}
