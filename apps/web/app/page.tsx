import { Header } from 'ui'
import { User } from 'types'

import { Button } from '@/components/Button'
import { rest } from '@/api/rest'

export default async function Page() {
  const data = await rest<User>('users')

  return (
    <>
      <Header text={data?.docs[0].name || 'default'} />
      <Button />
    </>
  )
}
