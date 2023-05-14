import { MainMenu, Company } from 'types'

import { rest } from '@/api/rest'

export async function getCompanyInfo() {
  const global = 'globals/company'

  const companyInfo = await rest<Company>(global)

  return companyInfo
}

export async function getMainMenu() {
  const global = 'globals/main-menu'

  const menu = await rest<MainMenu>(global)

  return menu
}

export async function getPage() {
  const menuData = getMainMenu()
  const companyInfoData = getCompanyInfo()

  const [menu, companyInfo] = await Promise.all([menuData, companyInfoData])

  if (!menu || !companyInfo) {
    throw new Error('Globals not found')
  }

  return { menu, companyInfo }
}
