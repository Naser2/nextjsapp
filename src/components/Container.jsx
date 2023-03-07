import { forwardRef } from 'react'
import clsx from 'clsx'

const OuterContainer = forwardRef(function OuterContainer(
  { className, children, ...props },
  ref
) {
  return (
    <div ref={ref} className={clsx(className)} {...props}>
      <div id="regular-container" className="regular-container">
        {children}
      </div>
    </div>
  )
})

const InnerContainer = forwardRef(function InnerContainer(
  { className, children, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx('relative px-10  sm:px-8 lg:px-6', className)}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-7xl">{children}</div>
    </div>
  )
})

export const Container = forwardRef(function Container(
  { children, ...props },
  ref
) {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  )
})

Container.Outer = OuterContainer
Container.Inner = InnerContainer

/////////////// Component-No-Padding
const OuterContainerNoPadding = forwardRef(function OuterContainer(
  { className, children, ...props },
  ref
) {
  return (
    <div ref={ref} className={clsx(className)} {...props}>
      <div className="">{children}</div>
    </div>
  )
})

const InnerContainerNoPadding = forwardRef(function InnerContainer(
  { className, children, ...props },
  ref
) {
  return (
    <div ref={ref} className={clsx('relative', className)} {...props}>
      <div className="w-full">{children}</div>
    </div>
  )
})

export const ContainerNoPadding = forwardRef(function Container(
  { children, ...props },
  ref
) {
  return (
    <OuterContainerNoPadding ref={ref} {...props}>
      <InnerContainerNoPadding>{children}</InnerContainerNoPadding>
    </OuterContainerNoPadding>
  )
})

ContainerNoPadding.Outer = OuterContainerNoPadding
ContainerNoPadding.Inner = InnerContainerNoPadding
