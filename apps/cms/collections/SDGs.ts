import { CollectionConfig } from 'payload/types'
import { slugField } from '../fields/slug'
import { image } from '../fields/image'

const SDGs: CollectionConfig = {
  slug: 'sdg',
  labels: {
    singular: 'SDG',
    plural: 'SDGs'
  },
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
      type: 'text',
      required: true
    },
    image
  ],
  timestamps: false
}

export default SDGs
