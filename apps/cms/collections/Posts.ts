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
      name: 'video',
      type: 'group',
      fields: [
        {
          name: 'type',
          label: 'Video Type',
          type: 'radio',
          options: [
            {
              label: 'YouTube Video',
              value: 'embed'
            },
            {
              label: 'Upload Video',
              value: 'upload'
            }
          ],
          defaultValue: 'youtube',
          admin: {
            layout: 'horizontal',
            width: '50%'
          }
        },
        {
          name: 'embed',
          label: 'YouTube Video ID',
          type: 'text',
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'embed'
          }
        },
        {
          name: 'upload',
          label: 'Upload Video',
          type: 'upload',
          relationTo: 'media',
          filterOptions: {
            mimeType: { contains: 'video' }
          },
          admin: {
            condition: (_, siblingData) => siblingData?.type === 'upload'
          }
        }
      ]
    },
    // {
    //   name: 'category',
    //   type: 'relationship',
    //   relationTo: 'categories',
    //   hidden: true
    // },
    {
      name: 'tags',
      type: 'relationship',
      relationTo: 'tags',
      hasMany: true
    },
    {
      name: 'SDGs',
      label: 'Sustainable Development Goals',
      type: 'relationship',
      relationTo: 'sdg',
      hasMany: true
    },
    {
      name: 'content',
      type: 'richText'
    }
  ]
}

export default Posts
