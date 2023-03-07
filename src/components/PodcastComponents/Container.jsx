import clsx from 'clsx'

export function Container({ className, innerClassName, children, ...props }) {
  console.log('CONTAINER ', className, innerClassName)
  return (
    <div
      id="LAYOUT-CONTAINER"
      className={clsx(['lg:px-8', className])}
      {...props}
    >
      <div className="lg:max-w-4xl ">
        <div
          id="LAYOUT- CONTAINER-CHILDREN"
          className={clsx(
            innerClassName,
            'mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0'
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
