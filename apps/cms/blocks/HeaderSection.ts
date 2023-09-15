import { Block } from 'payload/types'

export const HeaderSection: Block = {
  slug: 'headerSectionBlock',
  interfaceName: 'HeaderSectionBlock',
  labels: {
    singular: 'Header Section',
    plural: 'Header Sections'
  },
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
