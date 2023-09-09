import { Block } from 'payload/types'

import { display } from '../fields/display'

export const HeaderSection: Block = {
  slug: 'headerSection',
  interfaceName: 'HeaderSectionBlock',
  fields: [
    display,
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
