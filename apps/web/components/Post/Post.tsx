import { Post } from 'types'

import { mapPosts } from '@/utilities/mapPosts'
import { Container } from '@/components/Container'
import { Author } from '@/components/Author'
import { RichText } from '@/components/RichText'
import { Tags } from '@/components/Tags'
import { HeaderSection } from '@/components/HeaderSection'
import { BlogSection } from '@/components/BlogSection'

export function Post({
  post,
  primaryTag,
  relatedPosts
}: {
  post: Post
  primaryTag: string
  relatedPosts?: Post[]
}) {
  return (
    <article>
      <div className="relative h-96 shadow-xl md:h-[400px] lg:h-[500px]">
        <div className="from-primary-950 absolute h-full w-full bg-gradient-to-t to-transparent"></div>
        <div
          className="h-full w-full bg-fixed bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${post.image.url || ''})`
          }}
        />
        <Container className="z-10">
          <div className="absolute bottom-8 z-10 text-white lg:bottom-16">
            {post.author ? (
              <>
                <div className="hidden sm:block">
                  <Author
                    avatarSrc={post.author?.avatar.url || ''}
                    avatarAlt={post.author?.name || ''}
                    name={post.author?.name || ''}
                    href={`/blog/authors/${post.author?.slug}`}
                    darkMode={true}
                    className="mb-4 sm:my-8"
                  />
                </div>
                <div className="sm:hidden">
                  <Author
                    avatarSrc={post.author?.avatar.url || ''}
                    avatarAlt={post.author?.name || ''}
                    name={post.author?.name || ''}
                    href={`/blog/authors/${post.author?.slug}`}
                    size="sm"
                    darkMode={true}
                    className="mb-4 sm:mt-8 sm:hidden"
                  />
                </div>
              </>
            ) : null}
            <h1 className="pr-6 text-3xl font-bold lg:pr-12 lg:text-5xl">
              {post.title}
            </h1>
          </div>
        </Container>
      </div>
      <Container className="mt-4 sm:mt-8" bottomPadding>
        <RichText content={post.content} className="mt-8 max-w-2xl sm:mt-16" />
        {post.tags?.length ? (
          <div className="mt-8 sm:mt-16">
            <Tags
              tags={post.tags.map((tag) => ({
                name: tag.name || '',
                slug: tag.slug || ''
              }))}
              className="text-sm no-underline"
            />
          </div>
        ) : null}
        {relatedPosts && relatedPosts.length && primaryTag ? (
          <div className="mt-16 sm:mt-32">
            <HeaderSection
              title="Keep Reading"
              description={`More posts related to '${primaryTag}'`}
              className="mb-8"
            />
            <BlogSection posts={mapPosts(relatedPosts)} />
          </div>
        ) : null}
      </Container>
    </article>
  )
}
