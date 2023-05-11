'use client'

import * as React from 'react'

export const Button = () => {
  return (
    <button className="text-green-400" onClick={() => console.log('boop')}>
      Boop
    </button>
  )
}
