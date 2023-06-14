'use client'
import { Container } from '@/components/Container'
import { Client as ClientComponent } from '@/components/Client'

const clients = [
  {
    imgUrl: '/images/nestle.png',
    alt: 'nestle'
  },
  {
    imgUrl: '/images/osprey.png',
    alt: 'osprey'
  },
  {
    imgUrl: '/images/cuboulder.png',
    alt: 'cuboulder'
  },
  {
    imgUrl: '/images/arcteryx.png',
    alt: 'arcteryx'
  },
  {
    imgUrl: '/images/harley-davidson.png',
    alt: 'harley-davidson'
  }
]

export type ClientSectionProps = {
  horizontalPadding?: boolean
  bottomPadding?: boolean
  topPadding?: boolean
  fullWidth?: boolean
}

export const ClientSection = ({
  horizontalPadding,
  bottomPadding,
  topPadding,
  fullWidth
}: ClientSectionProps) => {
  return (
    <Container
      horizontalPadding={horizontalPadding}
      bottomPadding={bottomPadding}
      topPadding={topPadding}
      fullWidth={fullWidth}
    >
      <ClientComponent clients={clients} />
    </Container>
  )
}
