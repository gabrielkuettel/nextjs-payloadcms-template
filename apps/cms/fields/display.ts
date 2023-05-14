import { Field } from 'payload/types'

export const display: Field = {
  type: 'row',
  fields: [
    {
      name: 'fullWidth',
      type: 'checkbox',
      label: 'Full Width',
      defaultValue: false
    },
    {
      name: 'horizontalPadding',
      type: 'checkbox',
      label: 'Horizontal Padding',
      defaultValue: false
    },
    {
      name: 'topPadding',
      type: 'checkbox',
      label: 'Top Padding',
      defaultValue: false
    },
    {
      name: 'bottomPadding',
      type: 'checkbox',
      label: 'Bottom Padding',
      defaultValue: false
    }
  ]
}
