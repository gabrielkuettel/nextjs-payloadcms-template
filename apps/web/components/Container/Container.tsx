import clsx from 'clsx'

type ContainerProps<T extends React.ElementType> = {
  as?: T
  className?: string
  topPadding?: boolean
  bottomPadding?: boolean
  horizontalPadding?: boolean
  fullWidth?: boolean
  children: React.ReactNode
}

export function Container<T extends React.ElementType = 'div'>({
  as,
  className,
  topPadding = true,
  bottomPadding = true,
  horizontalPadding = true,
  fullWidth = false,
  children,
  ...rest
}: Omit<React.ComponentPropsWithoutRef<T>, keyof ContainerProps<T>> &
  ContainerProps<T>) {
  let Component = as ?? 'div'

  return (
    <Component
      className={clsx(
        'mx-auto',
        fullWidth === false ? 'max-w-7xl' : '',
        horizontalPadding && 'px-6 lg:px-8',
        topPadding && 'pt-16 sm:pt-12 lg:pt-16',
        bottomPadding && 'pb-16 sm:pb-12 lg:pb-16',
        className,
        { ...rest }
      )}
    >
      <div className="mx-auto max-w-2xl lg:max-w-none">{children}</div>
    </Component>
  )
}
