import { CollectionConfig } from 'payload/types'

const Categories: CollectionConfig = {
  slug: 'categories',

  admin: {
    useAsTitle: 'name',
    hidden: true
  },
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'name',
      type: 'text'
    }
  ],
  timestamps: false
}

export default Categories
