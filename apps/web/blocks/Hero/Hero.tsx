import { Post, Page, Media } from 'types'
import { checkRelation } from '@/utilities/checkRelation'
import { Container } from '@/components/Container'
import { Hero as HeroComponent } from '@/components/Hero'

/** @todo generate and share this type */
type LinkField = {
  type?: 'reference' | 'custom'
  newTab?: boolean
  reference: {
    value: string | Page
    relationTo: 'pages'
  }
  url: string
  label: string
}

export type HeroProps = {
  blockName?: string
  blockType?: 'formBlock'
  title?: string
  description?: string
  featuredPost?: Post
  primaryAction?: LinkField
  secondaryAction?: LinkField
  horizontalPadding?: boolean
  bottomPadding?: boolean
  topPadding?: boolean
  fullWidth?: boolean
}

export function Hero({
  title = '',
  description = '',
  featuredPost,
  primaryAction,
  secondaryAction,
  horizontalPadding,
  bottomPadding,
  topPadding,
  fullWidth
}: HeroProps) {
  const featured = {
    title: featuredPost?.title || '',
    url: `/blog/posts/${featuredPost?.slug}` || '',
    imageUrl: checkRelation<Media>(featuredPost?.image)?.url || ''
  }

  const primary = {
    label: primaryAction?.label || '',
    url:
      primaryAction?.type === 'reference'
        ? checkRelation<Page>(primaryAction.reference.value)?.slug || ''
        : primaryAction?.url || '',
    external: primaryAction?.type === 'custom'
  }

  const secondary = {
    label: secondaryAction?.label || '',
    url:
      secondaryAction?.type === 'reference'
        ? checkRelation<Page>(secondaryAction.reference.value)?.slug || ''
        : secondaryAction?.url || '',
    external: secondaryAction?.type === 'custom'
  }

  return (
    <Container
      horizontalPadding={horizontalPadding}
      bottomPadding={bottomPadding}
      topPadding={topPadding}
      fullWidth={fullWidth}
    >
      <HeroComponent
        title={title}
        description={description}
        featuredPost={featured}
        primaryAction={primary}
        secondaryAction={secondary}
      />
    </Container>
  )
}
