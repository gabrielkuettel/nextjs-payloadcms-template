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
    slugField('name'),
    {
      name: 'name',
      type: 'text'
    }
    // {
    //   name: 'avatar',
    //   label: 'Avatar',
    //   type: 'upload',
    //   relationTo: 'media',
    //   required: true
    // }
  ]
}

export default Users
