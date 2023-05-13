import { Field } from 'payload/types'

export const padding: Field = {
  type: 'row',
  fields: [
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
