import { Post, User, Media, Tag } from 'types'

import { mapPosts } from '@/utils/mapPosts'
import { checkRelation } from '@/utils/checkRelation'
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
          className="h-full w-full bg-cover bg-fixed bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${
              checkRelation<Media>(post.image)?.sizes?.feature?.url || ''
            })`
          }}
        />
        <div className="absolute bottom-8 z-10 flex w-full flex-col items-center text-white lg:bottom-16">
          <div>
            {post.author ? (
              <>
                <div className="hidden self-start sm:block">
                  <Author
                    avatarSrc={
                      checkRelation<Media>(
                        checkRelation<User>(post.author)?.avatar
                      )?.url || ''
                    }
                    avatarAlt={checkRelation<User>(post.author)?.name || ''}
                    name={checkRelation<User>(post.author)?.name || ''}
                    href={`/blog/authors/${
                      checkRelation<User>(post.author)?.slug
                    }`}
                    darkMode={true}
                    className="mb-4 sm:my-8"
                  />
                </div>
                <div className="sm:hidden">
                  <Author
                    avatarSrc={
                      checkRelation<Media>(
                        checkRelation<User>(post.author)?.avatar
                      )?.url || ''
                    }
                    avatarAlt={checkRelation<User>(post.author)?.name || ''}
                    name={checkRelation<User>(post.author)?.name || ''}
                    href={`/blog/authors/${
                      checkRelation<User>(post.author)?.slug
                    }`}
                    size="sm"
                    darkMode={true}
                    className="mb-4 sm:mt-8 sm:hidden"
                  />
                </div>
              </>
            ) : null}
            <h1 className="max-w-2xl text-3xl font-bold lg:text-5xl">
              {post.title}
            </h1>
          </div>
        </div>
      </div>
      <Container className="mt-4 sm:mt-8" bottomPadding topPadding={false}>
        <div className="flex flex-col items-center">
          <RichText content={post.content} className="mt-4 max-w-2xl sm:mt-8" />
          {post.tags?.length ? (
            <div className="mt-8 sm:mt-16">
              <Tags
                tags={post.tags.map((tag) => ({
                  name: checkRelation<Tag>(tag)?.name || '',
                  slug: checkRelation<Tag>(tag)?.slug || ''
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
        </div>
      </Container>
    </article>
  )
}
