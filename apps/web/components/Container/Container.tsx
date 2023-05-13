import clsx from 'clsx'

type ContainerProps = {
  className?: string
  topPadding?: boolean
  bottomPadding?: boolean
  horizontalPadding?: boolean
  children: React.ReactNode
}

export function Container(props: ContainerProps) {
  const {
    className,
    topPadding = false,
    bottomPadding = false,
    horizontalPadding = false,
    children,
    ...rest
  } = props

  return (
    <div
      className={clsx(
        'mx-auto max-w-7xl bg-white',
        topPadding && 'pt-16 sm:pt-24 lg:pt-32',
        bottomPadding && 'pb-16 sm:pb-24 lg:pb-32',
        horizontalPadding && 'px-4 sm:px-6 lg:px-8',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  )
}
