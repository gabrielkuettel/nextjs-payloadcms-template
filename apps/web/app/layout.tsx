import '../styles/global.css'
import { Inter } from 'next/font/google'
import { Media, Page } from 'types'

import { checkRelation } from '@/utilities/checkRelation'
import { getPage } from './queries'
import { MainMenu } from '@/components/MainMenu'
import { Footer } from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter'
})

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const { menu, companyInfo } = await getPage()

  if (!menu || !menu.navItems) {
    throw new Error('No menu found')
  }

  /** @todo map this to mapMainMenu */
  const navigation = menu.navItems.map((item) => ({
    name: item.link.label,
    href:
      item.link.type === 'reference'
        ? checkRelation<Page>(item.link.reference.value)?.slug || ''
        : item.link.url || ''
  }))

  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <MainMenu
          companyLogoUrl={
            checkRelation<Media>(companyInfo?.logo)?.url || undefined
          }
          navigation={navigation}
        />
        {children}
        <Footer companyName={companyInfo?.name} navigation={navigation} />
      </body>
    </html>
  )
}
