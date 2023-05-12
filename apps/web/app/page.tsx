import { Header } from 'ui'

import { Button } from '@/components/Button'
import { rest } from '@/cms/rest'

export default async function Page() {
  const data = await rest('users', undefined, { next: { revalidate: 0 } })

  return (
    <>
      <pre>{JSON.stringify(data)}</pre>
      <Header text="Web" />
      <Button />
    </>
  )
}
