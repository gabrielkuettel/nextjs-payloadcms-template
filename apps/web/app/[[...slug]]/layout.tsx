import '@/styles/global.css'
import 'ui/styles.css'

import { Container } from '@/components/Container'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Container>{children}</Container>
      </body>
    </html>
  )
}
