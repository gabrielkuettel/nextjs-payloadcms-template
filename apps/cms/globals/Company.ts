import { GlobalConfig } from 'payload/types'

export const Company: GlobalConfig = {
  slug: 'company',
  access: {
    read: () => true
  },
  fields: [
    {
      name: 'name',
      label: 'Company Name',
      type: 'text'
    },
    {
      name: 'logo',
      label: 'Compangy Logo',
      type: 'upload',
      relationTo: 'media',
      filterOptions: {
        mimeType: { contains: 'image' }
      }
    }
  ]
}
