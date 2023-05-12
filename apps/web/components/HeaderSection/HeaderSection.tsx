import React from 'react'
import clsx from 'clsx'

type SectionHeadingProps = {
  title: string
  description: string
  centered?: boolean
  className?: string
}

export function HeaderSection({
  title,
  description,
  className,
  centered = false
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        'max-w-2xl',
        centered && 'mx-auto text-center',
        className
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight text-green-400 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-2 text-lg leading-8 text-neutral-600">{description}</p>
    </div>
  )
}
