import { CollectionConfig } from 'payload/types'
import { slugField } from '../fields/slug'

const Tags: CollectionConfig = {
  slug: 'tags',
  admin: {
    useAsTitle: 'name'
  },
  access: {
    read: () => true
  },
  fields: [
    slugField('name'),
    {
      name: 'name',
      type: 'text'
    }
  ],
  timestamps: false
}

export default Tags
