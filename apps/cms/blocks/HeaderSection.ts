import { Block } from 'payload/types'

import { padding } from '../fields/padding'

export const HeaderSection: Block = {
  slug: 'headerSection',
  fields: [
    padding,
    {
      name: 'title',
      label: 'Title',
      type: 'text'
    },
    {
      name: 'description',
      label: 'Description',
      type: 'text'
    }
  ]
}
