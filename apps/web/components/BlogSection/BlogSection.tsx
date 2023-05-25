import { PostCard } from '@/components/PostCard'

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
  SDGs?: { name: string; slug: string; imageUrl: string }[]
}

export type BlogSectionProps = {
  posts: Post[]
}

export const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
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
          SDGs={post.SDGs}
        />
      ))}
    </div>
  )
}
