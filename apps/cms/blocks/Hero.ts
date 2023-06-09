import { Block } from 'payload/types'
import link from '../fields/link'

import { display } from '../fields/display'

export const Hero: Block = {
  slug: 'hero',
  fields: [
    display,
    {
      name: 'featuredPost',
      label: 'Featured Post',
      type: 'relationship',
      relationTo: 'posts',
      hasMany: false
    },
    {
      name: 'title',
      label: 'Title',
      type: 'text'
    },
    {
      name: 'description',
      label: 'Description',
      type: 'text'
    },
    link({
      appearances: false,
      overrides: { name: 'primaryAction', label: 'Primary Action' }
    }),
    link({
      appearances: false,
      overrides: { name: 'secondaryAction', label: 'Secondary Action' }
    })
  ]
}
