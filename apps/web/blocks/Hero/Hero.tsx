import { Post, Page, Media, HeroBlock } from 'types'
import { checkRelation } from '@/utils/checkRelation'
import { Container } from '@/components/Container'
import { Hero as HeroComponent } from '@/components/Hero'

export type HeroProps = HeroBlock

export function Hero({
  title = '',
  description = '',
  featuredPost,
  image,
  primaryAction,
  secondaryAction
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

  const imageUrl = checkRelation<Media>(image)?.url || ''

  return (
    <Container topPadding={false}>
      <HeroComponent
        title={title}
        description={description}
        imageUrl={imageUrl}
        featuredPost={featured}
        primaryAction={primary}
        secondaryAction={secondary}
      />
    </Container>
  )
}
