import { Block } from 'payload/types'

export const BlogSection: Block = {
  slug: 'blogSection',
  fields: [
    {
      name: 'show',
      label: 'Number of Posts to Show',
      type: 'select',
      defaultValue: '3',
      options: [
        { label: '3', value: '3' },
        { label: '6', value: '6' },
        { label: '9', value: '9' }
      ]
    }
  ]
}
