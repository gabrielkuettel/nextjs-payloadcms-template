import { Block } from 'payload/types'

export const HeaderSection: Block = {
  slug: 'headerSectionBlock',
  interfaceName: 'HeaderSectionBlock',
  fields: [
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
