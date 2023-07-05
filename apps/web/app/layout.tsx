import '../styles/global.css'
import { Inter } from 'next/font/google'

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

  /** @todo map this to mapMainMenu */
  const navigation = menu.navItems.map((item) => ({
    name: item.link.label,
    href:
      item.link.type === 'reference'
        ? typeof item.link.reference.value !== 'string'
          ? item.link.reference.value.slug || ''
          : ''
        : item.link.url || ''
  }))

  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <MainMenu
          companyLogoUrl={
            (typeof companyInfo?.logo !== 'string' && companyInfo?.logo?.url) ||
            undefined
          }
          navigation={navigation}
        />
        {children}
        <Footer companyName={companyInfo?.name} navigation={navigation} />
      </body>
    </html>
  )
}
