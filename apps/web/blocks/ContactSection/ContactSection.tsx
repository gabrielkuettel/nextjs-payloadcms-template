'use client'
import { Container } from '@/components/Container'
import { Contact as ContactComponent } from '@/components/Contact'

export type ContactSectionProps = {
  horizontalPadding?: boolean
  bottomPadding?: boolean
  topPadding?: boolean
  fullWidth?: boolean
}

export const ContactSection = ({
  horizontalPadding,
  bottomPadding,
  topPadding,
  fullWidth
}: ContactSectionProps) => {
  return (
    <Container
      horizontalPadding={horizontalPadding}
      bottomPadding={bottomPadding}
      topPadding={topPadding}
      fullWidth={fullWidth}
      className="!bg-slate-50"
    >
      <ContactComponent />
    </Container>
  )
}
