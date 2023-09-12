import { PostCard } from '@/components/PostCard'
import { HeaderSection } from '@/components/HeaderSection'

type Post = {
  id: string
  slug: string
  title: string
  imageUrl: string
  publishedDate: string
  excerpt: string
  author: {
    name: string
    slug: string
    imageUrl: string
  }
  primaryTag: {
    name: string
    slug: string
  }
}

export type BlogSectionProps = {
  posts: Post[] | undefined
}

export const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
  if (!posts || !posts.length) {
    return (
      <div>
        <HeaderSection
          title="Sorry, no posts found"
          description="Check back later for updates."
        />
      </div>
    )
  }

  return (
    <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          slug={post.slug}
          title={post.title}
          imageUrl={post.imageUrl}
          primaryTag={post.primaryTag}
          author={post.author}
          publishedDate={post.publishedDate}
          excerpt={post.excerpt}
        />
      ))}
    </div>
  )
}
