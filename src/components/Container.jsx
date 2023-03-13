import { forwardRef } from 'react'
import clsx from 'clsx'
import classNames from '@/lib/classNames'

export const textcontainer =
  'mx-12  md:mx-14 lg:mx-24 xl:mx-32 xl:max-w-[43.5rem]'

export const TriangleDownSideUp = ({ classNames }) => {
  console.log('Triangle Classnmae', classNames)
  return (
    <div
      id="triangle"
      className={clsx(
        classNames ? classNames : ' bg-white',
        'absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50'
      )}
      aria-hidden="true"
    />
  )
}
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
  { className, innerContainerClass, children, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx(
        innerContainerClass ?? 'relative px-10  sm:px-8 lg:px-6',

        className
      )}
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
      <InnerContainer innerContainerClass={props.innerContainerClass}>
        {children}
      </InnerContainer>
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
