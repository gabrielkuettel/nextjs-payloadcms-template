import React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'

type AuthorProps = {
  avatarSrc: string
  avatarAlt: string
  href: string
  name: string
  description?: string
  className?: string
  size?: 'sm' | 'lg'
  darkMode?: boolean
}

export function Author({
  avatarSrc,
  avatarAlt,
  href,
  name,
  description,
  className,
  size = 'lg',
  darkMode = false
}: AuthorProps) {
  return (
    <Link
      href={href}
      className={clsx('group block flex-shrink-0 no-underline', className)}
    >
      <div className="flex items-center">
        <div>
          <Image
            className={clsx(
              darkMode ? 'ring-1 ring-neutral-100' : '',
              size === 'sm' ? ' h-9 w-9' : ' h-16 w-16',
              'inline-block rounded-full object-cover'
            )}
            width={64}
            height={64}
            src={
              'https://nextjs-payloadcms-template-68ef096.payloadcms.app' +
              avatarSrc
            }
            alt={avatarAlt}
          />
        </div>
        <div className="ml-3">
          <p
            className={clsx(
              size === 'sm' ? 'text-xs' : 'text-md',
              darkMode
                ? 'text-neutral-100 group-hover:text-neutral-200'
                : 'text-neutral-600 group-hover:text-neutral-800',
              'font-medium'
            )}
          >
            {name}
          </p>
          {description && (
            <p
              className={clsx(
                size === 'sm' ? 'text-xs' : 'text-md',
                darkMode
                  ? 'text-neutral-200 group-hover:text-neutral-300'
                  : 'text-neutral-700 group-hover:text-neutral-900',
                'font-medium'
              )}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </Link>
  )
}
