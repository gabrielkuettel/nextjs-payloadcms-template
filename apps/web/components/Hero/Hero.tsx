import Link from 'next/link'
import Image from 'next/image'

import { formatMediaURL } from '@/utilities/formaMediaURL'

type HeroProps = {
  featuredPost?: {
    title: string
    url: string
    imageUrl: string
  }
  primaryAction?: {
    label: string
    url: string
    external?: boolean
  }
  secondaryAction?: {
    label: string
    url: string
    external?: boolean
  }
  title: string
  description: string
}

export function Hero({
  title,
  description,
  featuredPost,
  primaryAction,
  secondaryAction
}: HeroProps) {
  const renderPrimaryAction = ({
    label,
    url,
    external
  }: {
    label: string
    url: string
    external?: boolean
  }) => {
    if (external) {
      return (
        <a
          href={url}
          className="bg-primary-600 hover:bg-primary-500 focus-visible:outline-primary-600 rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          {label}
        </a>
      )
    }

    return (
      <Link
        href={url}
        className="bg-primary-600 hover:bg-primary-500 focus-visible:outline-primary-600 rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      >
        {label}
      </Link>
    )
  }

  const renderSecondaryAction = ({
    label,
    url,
    external
  }: {
    label: string
    url: string
    external?: boolean
  }) => {
    if (external) {
      return (
        <a href={url} className="text-sm font-semibold leading-6 text-gray-900">
          {label}
        </a>
      )
    }

    return (
      <Link
        href={url}
        className="text-sm font-semibold leading-6 text-gray-900"
      >
        {label}
      </Link>
    )
  }

  return (
    <div className="relative">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
          <svg
            className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="0,0 90,0 50,100 0,100" />
          </svg>
          <div className="relative lg:pr-0">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              {featuredPost && (
                <div className="hidden sm:mb-10 sm:flex">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    <span className="border-r-[1px] pr-2 font-medium">
                      Featured
                    </span>
                    <span className="mx-2">{featuredPost.title}</span>
                    <a
                      href={featuredPost.url}
                      className="text-primary-600 whitespace-nowrap font-semibold"
                    >
                      <span className="absolute inset-0" aria-hidden="true" />
                      Read more <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              )}
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                {title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {description}
              </p>
              {(primaryAction || secondaryAction) && (
                <div className="mt-10 flex items-center gap-x-6">
                  {primaryAction && renderPrimaryAction(primaryAction)}
                  {secondaryAction && renderSecondaryAction(secondaryAction)}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {featuredPost && (
        <div className="mt-24 bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:m-0 lg:w-1/2">
          <div className="relative aspect-[3/2] lg:aspect-auto lg:h-full lg:w-full">
            <Image
              className="object-cover"
              src={formatMediaURL(featuredPost.imageUrl) || ''}
              alt=""
              fill
            />
          </div>
        </div>
      )}
    </div>
  )
}
