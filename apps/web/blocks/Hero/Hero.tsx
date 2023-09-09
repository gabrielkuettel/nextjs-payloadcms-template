import { Post, Page, Media, HeroBlock } from 'types'
import { checkRelation } from '@/utilities/checkRelation'
import { Container } from '@/components/Container'
import { Hero as HeroComponent } from '@/components/Hero'

export type HeroProps = HeroBlock

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
    title: checkRelation<Post>(featuredPost)?.title || '',
    url: `/blog/posts/${checkRelation<Post>(featuredPost)?.slug || ''}`,
    imageUrl:
      checkRelation<Media>(checkRelation<Post>(featuredPost)?.image)?.url || ''
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
