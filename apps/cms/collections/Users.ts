import { CollectionConfig } from 'payload/types'
import { slugField } from '../fields/slug'

const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email'
  },
  access: {
    read: () => true
  },
  fields: [
    // Email added by default
    {
      name: 'name',
      type: 'text',
      required: true
    },
    slugField('name'),
    {
      name: 'avatar',
      label: 'Avatar',
      type: 'upload',
      relationTo: 'media'
    }
  ]
}

export default Users
