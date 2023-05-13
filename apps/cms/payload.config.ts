import { buildConfig } from 'payload/config'
import path from 'path'

import { Pages } from './collections/Pages'
import Categories from './collections/Categories'
import Posts from './collections/Posts'
import Tags from './collections/Tags'
import Users from './collections/Users'
import Media from './collections/Media'
import { MainMenu } from './globals/MainMenu'

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  ...(process.env.PAYLOAD_PUBLIC_SITE_URL
    ? {
        cors: [process.env.PAYLOAD_PUBLIC_SITE_URL].filter(Boolean),
        csrf: [process.env.PAYLOAD_PUBLIC_SITE_URL].filter(Boolean)
      }
    : {}),
  admin: {
    user: Users.slug
  },
  collections: [Pages, Categories, Posts, Tags, Users, Media],
  globals: [MainMenu],
  typescript: {
    outputFile: path.resolve(__dirname, '../../packages/types/payload-types.ts')
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql')
  }
})
