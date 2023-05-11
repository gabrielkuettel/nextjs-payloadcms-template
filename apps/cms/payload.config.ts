import { buildConfig } from 'payload/config'
import path from 'path'
import Categories from './collections/Categories'
import Posts from './collections/Posts'
import Tags from './collections/Tags'
import Users from './collections/Users'
import Media from './collections/Media'

export default buildConfig({
  serverURL: process.env.CMS_PUBLIC_SERVER_URL || 'http://localhost:8000',
  ...(process.env.CMS_PUBLIC_SITE_URL
    ? {
        cors: [process.env.CMS_PUBLIC_SITE_URL].filter(Boolean),
        csrf: [process.env.CMS_PUBLIC_SITE_URL].filter(Boolean)
      }
    : {}),
  admin: {
    user: Users.slug
  },
  collections: [Categories, Posts, Tags, Users, Media],
  typescript: {
    outputFile: path.resolve(__dirname, '../../packages/types/payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql')
  }
})