import { Block } from 'payload/types'

import { padding } from '../fields/padding'

export const BlogSection: Block = {
  slug: 'blogSection',
  fields: [
    padding,
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
