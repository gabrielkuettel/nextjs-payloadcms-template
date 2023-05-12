import React from 'react'
import serialize from './serialize'
import clsx from 'clsx'

export const RichText: React.FC<{ className?: string; content: any }> = ({
  className,
  content
}) => {
  if (!content) {
    return null
  }

  return (
    <div className={clsx('prose lg:prose-xl', className)}>
      {serialize(content)}
    </div>
  )
}

export default RichText
