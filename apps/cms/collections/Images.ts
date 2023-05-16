import type { CollectionConfig, Field } from 'payload/types'

const alt: Field = {
  name: 'alt',
  label: 'Alt Text',
  type: 'text',
  required: true
}

export const Images: CollectionConfig = {
  slug: 'images',
  access: {
    read: (): boolean => true // Everyone can read Media
  },
  upload: true,
  fields: [alt]
}

export default Images
