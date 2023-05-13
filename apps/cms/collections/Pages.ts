import { CollectionConfig } from 'payload/types'
import { publishedOnly } from '../access/publishedOnly'
import { BlogSection } from '../blocks/BlogSection'
import { HeaderSection } from '../blocks/HeaderSection'
import { Hero } from '../blocks/Hero'
import { slugField } from '../fields/slug'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'slug', 'updatedAt']
  },
  versions: {
    drafts: true
  },
  access: {
    read: publishedOnly
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true
    },
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Content',
          fields: [
            {
              name: 'layout',
              type: 'blocks',
              required: true,
              blocks: [Hero, HeaderSection, BlogSection]
            }
          ]
        }
      ]
    },
    slugField()
  ]
}
