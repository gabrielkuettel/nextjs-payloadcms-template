export const USER = `
  id
  email
  firstName
  lastName
`

export const gql = async (query: any): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/graphql`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    })

    const { data, errors } = await res.json()

    if (errors) {
      throw new Error(errors[0].message)
    }

    if (res.ok && data) {
      return data
    }
  } catch (e: unknown) {
    throw new Error(e as string)
  }
}