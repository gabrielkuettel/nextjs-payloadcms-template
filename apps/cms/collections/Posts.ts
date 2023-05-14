import { CollectionConfig } from 'payload/types'

import { publishedOnly } from '../access/publishedOnly'
import { slugField } from '../fields/slug'
import { image } from '../fields/image'

const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    defaultColumns: ['title', 'author', 'category', 'tags', 'status'],
    useAsTitle: 'title'
  },
  access: {
    read: publishedOnly
  },
  versions: {
    drafts: true
  },
  fields: [
    slugField('title'),
    {
      name: 'title',
      type: 'text'
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'users'
    },
    {
      name: 'publishedDate',
      type: 'date'
    },
    image,
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      hidden: true
    },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true
    },
    {
      name: 'content',
      type: 'richText'
    }
  ]
}

export default Posts
