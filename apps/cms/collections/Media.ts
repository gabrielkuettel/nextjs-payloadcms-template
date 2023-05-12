import type { CollectionConfig, Field } from 'payload/types'

const alt: Field = {
  name: 'alt',
  label: 'Alt Text',
  type: 'text',
  required: true
}

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: (): boolean => true // Everyone can read Media
  },
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    adminThumbnail: 'card',
    imageSizes: [
      {
        name: 'card',
        width: 640,
        height: 480
      },
      {
        name: 'feature',
        width: 1024,
        height: 576
      }
    ]
  },
  fields: [alt]
}

export default Media
