import { Block } from 'payload/types'
import link from '../fields/link'
import { image } from '../fields/image'

export const Hero: Block = {
  slug: 'hero',
  interfaceName: 'HeroBlock',
  fields: [
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
    image,
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
