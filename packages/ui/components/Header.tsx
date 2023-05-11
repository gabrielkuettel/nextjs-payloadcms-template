import * as React from 'react'

export const Header = ({ text }: { text: string }) => {
  return <h1 className="text-2xl font-bold text-blue-400">{text}</h1>
}
