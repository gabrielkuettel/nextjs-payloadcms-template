import qs from 'qs'
import { MainMenu } from 'types'

import { rest } from '@/api/rest'

export async function getMainMenu() {
  const global = 'globals/main-menu'
  const query = qs.stringify({
    slug: 'menu',
    depth: 1
  })

  const menu = await rest<MainMenu>(global + '?' + query)

  return menu
}

export async function getPage() {
  const menu = await getMainMenu()

  if (!menu) {
    throw new Error('Post not found')
  }

  return menu
}
