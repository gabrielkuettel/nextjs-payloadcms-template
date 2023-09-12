import { Post, User, Media, Tag } from 'types'
import Link from 'next/link'
import Image from 'next/image'

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
  function renderSDGs() {
    return post.SDGs?.map((SDG) => {
      if (typeof SDG === 'string') {
        return null
      }

      return (
        <Link
          href={`/blog/sdg/${SDG.slug}`}
          key={SDG.slug}
          className="relative mr-2 mt-2 h-12 w-12 shadow-lg sm:h-20 sm:w-20"
        >
          <Image
            src={checkRelation<Media>(SDG.image)?.url || ''}
            alt={SDG.name}
            fill
            sizes="(max-width: 1024px) 48px, 80px"
          />
        </Link>
      )
    })
  }

  return (
    <article>
      <div className="relative h-96 shadow-xl md:h-[400px] lg:h-[500px]">
        <div className="from-primary-950 absolute h-full w-full bg-gradient-to-t to-transparent"></div>
        <div
          className="h-full w-full bg-cover bg-fixed bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${
              checkRelation<Media>(post.image)?.url || ''
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
      <Container
        className="mt-4 flex flex-col items-center sm:mt-8"
        bottomPadding
        topPadding={false}
      >
        {post.SDGs && post.SDGs.length ? (
          <div className="mt-8 max-w-2xl sm:mt-16">
            <h3 className="text-md font-bold uppercase">Related SDGs:</h3>
            <div className="flex flex-row flex-wrap">{renderSDGs()}</div>
          </div>
        ) : null}
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
      </Container>
    </article>
  )
}
