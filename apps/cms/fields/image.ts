import { Field } from 'payload/types'

export const image: Field = {
  name: 'image',
  label: 'Image',
  type: 'upload',
  relationTo: 'media'
}
