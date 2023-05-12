import type { PaginatedDocs } from 'types'

export const rest = async <T>(
  endpoint: string,
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE' = 'GET',
  body?: any,
  options?: Omit<RequestInit, 'method'>
): Promise<PaginatedDocs<T> | null> => {
  const url = `${process.env.NEXT_PUBLIC_CMS_URL}/api/${endpoint}`

  try {
    const res = await fetch(url, {
      method,
      ...(method === 'POST' ? { body: JSON.stringify(body) } : {}),
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers
      },
      next: {
        revalidate: 10
      },
      ...options
    })

    const data = await res.json()

    if (res.ok) {
      return data
    }

    return null
  } catch (e: unknown) {
    throw new Error(e as string)
  }
}
