import { forwardRef } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import childPortrait from '@/images/projectImages/child-portarait.png'

function Logo(props) {
  return <h1 className="text-white">Podcast</h1>
}

function MenuIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 6h14M5 18h14M5 12h14"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function UserIcon(props) {
  return (
    <Image
      src={childPortrait}
      alt="children-image"
      width={12}
      height={12}
      className="activeUserIcon lmd:h-9 h-6 w-6 rounded-full md:mr-2 md:w-6"
    />
  )
}

export function PodcastAppScreen({ children, className, ...props }) {
  return (
    <div className={clsx('flex flex-col', className)} {...props}>
      <div className="flex justify-between px-4 pt-1">
        <MenuIcon className="h-6 w-6 flex-none" />
        <Logo className="h-6 flex-none" />
        <UserIcon className="-mt-2 h-8 w-8 flex-none" />
      </div>
      {children}
    </div>
  )
}

PodcastAppScreen.Header = forwardRef(function PodcastAppScreenHeader(
  { children },
  ref
) {
  return (
    <div ref={ref} className="mt-6 px-4 text-white">
      {children}
    </div>
  )
})

PodcastAppScreen.Title = forwardRef(function PodcastAppScreenTitle(
  { children },
  ref
) {
  return (
    <div ref={ref} className="my-3 text-2xl text-white ">
      {children}
    </div>
  )
})

PodcastAppScreen.BackgroundImage = forwardRef(function PodcastAppScreenTitle(
  { imageSrc },
  ref
) {
  return (
    <Image
      ref={ref}
      src={imageSrc}
      alt="children-image"
      width={300}
      height={200}
      className=" mr-2"
    />
  )
})
PodcastAppScreen.ProfileImage = forwardRef(function PodcastAppScreen(
  { props },
  ref
) {
  return (
    <div
      style={[
        props.profileStyle,
        {
          transform: [
            { translateY: profileTranslateY },
            { translateX: profileTranslateX },
            { scale: profileScale },
          ],
        },
      ]}
    >
      <Image
        resizeMode="cover"
        alt="profileImage"
        style={props.profileImage}
        source={
          props.profilesrc

          // {
          //   uri: 'https://images.unsplash.com/photo-1474871256005-cbf50b902421?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=d5305b7c2c275cbd9a170df03281f9c6',
          // }
        }
      />
    </div>
  )
})

PodcastAppScreen.Subtitle = forwardRef(function PodcastAppScreenSubtitle(
  { children },
  ref
) {
  return (
    <div ref={ref} className="pt-2 text-sm text-gray-500">
      {children}
    </div>
  )
})

PodcastAppScreen.Body = forwardRef(function PodcastAppScreenBody(
  { children, className },
  ref
) {
  return (
    <div ref={ref} className={clsx('flex-auto bg-white', className)}>
      {children}
    </div>
  )
})
