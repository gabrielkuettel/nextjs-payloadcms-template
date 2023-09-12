import Link from 'next/link'
import Image from 'next/image'

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
  imageUrl: string
}

export function Hero({
  title,
  description,
  featuredPost,
  imageUrl,
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
    <div className="relative bg-white">
      <div className="mx-auto lg:grid lg:grid-cols-12 lg:gap-x-8">
        <div className="pb-24 pt-10 sm:pb-32 lg:col-span-7 lg:px-0 lg:pb-56 lg:pt-48 xl:col-span-6">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <div className="hidden sm:mt-32 sm:flex lg:mt-16">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                {featuredPost?.title}{' '}
                <Link
                  href={featuredPost?.url || ''}
                  className="text-primary-600 whitespace-nowrap font-semibold"
                >
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            <h1 className="mt-24 text-4xl font-bold tracking-tight text-gray-900 sm:mt-10 sm:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {description}
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              {renderPrimaryAction(primaryAction || { label: '', url: '' })}
              {renderSecondaryAction(secondaryAction || { label: '', url: '' })}
            </div>
          </div>
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
          <div className="relative aspect-[3/2] w-full lg:absolute lg:inset-0 lg:aspect-auto lg:h-full">
            <Image className="object-cover" src={imageUrl} fill alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
