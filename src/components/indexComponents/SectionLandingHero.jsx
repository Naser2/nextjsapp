import NasPortrait from '@/images/nas_about.png'
import Image from 'next/image'
import Link from 'next/link'
// import Router, { useRouter } from 'next/router'
// import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
// import { Hero } from '@/components/commonComponents/Hero'
// import { Container } from '@/components/Container'
// import avatarImage from '@/images/avatar.jpg'
import avatarImage from '@/images/nasportrait.jpg'
// import styles from '@/styles/color.module.css'
import { useEffect, useRef } from 'react'
// import landingBackgroud from '@/images/website-backgroud-img.jpeg'
import backgroundGif from '@/images/vllo-3.gif'
// import { ArrowRight } from '@/components/icons/Arrows'
// import SocialMediaHandle from '@/components/SocialMediaHandle'

import Suitcase from '@/components/icons/Suitcase'
import { WorkStatus } from '../Gallery'

const profile = {
  name: 'Nasser Sanou ',
  email: 'nassersanou23@gmail.com',
  avatar: NasPortrait,
  backgroundImage: backgroundGif,
  // 'https://scontent-lga3-2.xx.fbcdn.net/v/t1.6435-9/103460202_10222797326939278_4182231552125807513_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=yyhnEM-Xt4AAX8tFQyV&tn=hear9D6lkk0isHjx&_nc_ht=scontent-lga3-2.xx&oh=00_AfDhi7703O1t9zH06pOL6CiyYNKcdjHMMWI9bqPoBGOcEQ&oe=6408D85C',
  // 'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  fields: [
    ['Phone', '(555) 123-4567'],
    ['Email', 'nassersanou23@gmail.com'],
    ['Title', 'Senior Front-End Developer'],
    ['Team', 'Product Development'],
    ['Location', 'San Francisco'],
    ['Sits', 'Oasis, 4th floor'],
    ['Salary', '$145,000'],
    ['Birthday', 'June 8, 1988'],
  ],
}

function clamp(number, a, b) {
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  return Math.min(Math.max(number, min), max)
}

function AvatarContainer({ className, ...props }) {
  return (
    <div
      className={clsx(
        className,
        'h-16 w-16 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10'
      )}
      {...props}
    />
  )
}

function Avatar({ large = false, className, ...props }) {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(
        className,
        'pointer-events-auto h-24  w-24 rounded-full ring-yellow-300 sm:h-32 sm:w-32'
      )}
      {...props}
    >
      <Image
        src={avatarImage}
        alt="Avatar Image"
        sizes={large ? '4rem' : '2.25rem'}
        className={clsx(
          'h-24 w-24  rounded-full bg-zinc-100  object-cover ring-4 ring-orange-400 dark:bg-zinc-800 sm:h-32 sm:w-32',
          large ? 'h-24 w-24  sm:h-32 sm:w-32 ' : 'h-9 w-9'
        )}
        priority
      />
    </Link>
  )
}

export default function SectionLandingHero() {
  //   let isHomePage = useRouter().pathname === '/'

  let headerRef = useRef()
  let avatarRef = useRef()
  let isInitial = useRef(true)

  useEffect(() => {
    let downDelay = avatarRef.current?.offsetTop ?? 0
    let upDelay = 64

    function setProperty(property, value) {
      document.documentElement.style.setProperty(property, value)
    }

    function removeProperty(property) {
      document.documentElement.style.removeProperty(property)
    }

    function updateHeaderStyles() {
      let { top, height } = headerRef.current.getBoundingClientRect()
      let scrollY = clamp(
        window.scrollY,
        0,
        document.body.scrollHeight - window.innerHeight
      )

      if (isInitial.current) {
        setProperty('--header-position', 'sticky')
      }

      setProperty('--content-offset', `${downDelay}px`)

      if (isInitial.current || scrollY < downDelay) {
        setProperty('--header-height', `${downDelay + height}px`)
        setProperty('--header-mb', `${-downDelay}px`)
      } else if (top + height < -upDelay) {
        let offset = Math.max(height, scrollY - upDelay)
        setProperty('--header-height', `${offset}px`)
        setProperty('--header-mb', `${height - offset}px`)
      } else if (top === 0) {
        setProperty('--header-height', `${scrollY + height}px`)
        setProperty('--header-mb', `${-scrollY}px`)
      }

      if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
        setProperty('--header-inner-position', 'fixed')
        removeProperty('--header-top')
        removeProperty('--avatar-top')
      } else {
        removeProperty('--header-inner-position')
        setProperty('--header-top', '0px')
        setProperty('--avatar-top', '0px')
      }
    }

    function updateAvatarStyles() {
      //   if (!isHomePage) {
      //     return
      //   }

      let fromScale = 1
      let toScale = 36 / 64
      let fromX = 0
      let toX = 2 / 16

      let scrollY = downDelay - window.scrollY

      let scale = (scrollY * (fromScale - toScale)) / downDelay + toScale
      scale = clamp(scale, fromScale, toScale)

      let x = (scrollY * (fromX - toX)) / downDelay + toX
      x = clamp(x, fromX, toX)

      setProperty()
      // '--avatar-image-transform',
      // `translate3d(${x}rem, 0, 0) scale(${scale})`

      let borderScale = 1 / (toScale / scale)
      let borderX = (-toX + x) * borderScale
      let borderTransform = `translate3d(${borderX}rem, 0, 0) scale(${borderScale})`

      setProperty('--avatar-border-transform', 'nothin')
      setProperty('--avatar-border-opacity', 'nothingggg')
    }

    function updateStyles() {
      //   updateHeaderStyles()
      updateAvatarStyles()
      isInitial.current = false
    }

    updateStyles()
    window.addEventListener('scroll', updateStyles, { passive: true })
    window.addEventListener('resize', updateStyles)

    return () => {
      window.removeEventListener('scroll', updateStyles, { passive: true })
      window.removeEventListener('resize', updateStyles)
    }
  }, [])

  return (
    <>
      {/* <CustomizedContainer note title={"Do it for love."}  margin="noMargin" variant="small" color="black2"/>  */}
      <div className="relative mt-14">
        <div className="black-2-bg sr-only flex max-w-full md:not-sr-only">
          {/* <h1 className="doitfor-love px-6x mx-auto  truncate py-4 text-center text-2xl font-bold text-gray-400 dark:text-slate-100 lg:px-6">
            Do it for love
          </h1> */}
        </div>
        <div id="landing-hero-background lg:h-74">
          {/* <div className="indigo-band">
            <div
              class="relative bg-indigo-800 py-0.5 px-4 lg:px-20"
              text="Only writting about what passionates me"
              bandcolor="main-bg-yellow"
            ></div>
          </div> */}
          <Image
            key="landing-hero-background"
            className="landing-video-container landing-hero-background w-full object-cover"
            src={profile.backgroundImage}
            alt="landing-hero-background"
          />
          {/* <div className="black-band">
            <div
              class="relative bg-indigo-800 py-0.5 px-4 lg:px-20"
              text="Only writting about what passionates me"
              bandcolor="main-bg-yellow"
            ></div>
          </div> */}
          <div className="black-band">
            <div
              class="relative bg-orange-400 py-0.5 px-4 lg:px-20"
              text="Only writting about what passionates me"
              bandcolor="main-bg-yellow"
            ></div>
          </div>
        </div>
        <div className="black-2-bg mt-0 flex  lg:mt-0">
          <div className="ml-4 ml-4 max-w-6xl lg:ml-20 lg:px-8">
            <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-2 sm:space-x-5 ">
              <div className="flex">
                <div
                  className="top-[var(--avatar-top,theme(spacing.3))] flex w-full items-center space-x-2 "
                  style={{ position: 'var(--header-inner-position)' }}
                >
                  <div className="relative  ">
                    <Avatar
                      large
                      //   className="block h-16 w-16 origin-left"
                      style={
                        {
                          // transform: 'var(--avatar-image-transform)',
                        }
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="landing-hero-profile-detail"
            className="max-w-64 my-1 ml-1 lg:-ml-4 lg:pb-3"
          >
            <div className="max-w-2l my-0 ml-4 lg:ml-6">
              <div className="mt-0 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                <div className="mt-4 min-w-0  flex-1 sm:hidden md:block">
                  <div className="flex text-gray-500 sm:mr-6 md:mt-0 ">
                    <h1 className="truncate pr-1  text-2xl font-bold text-white text-gray-900 dark:text-slate-100">
                      {profile.name}
                    </h1>
                    <svg
                      className="mr-1.5 mt-2 h-5 w-5 flex-shrink-0 text-blue-400"
                      x-description="Heroicon name: mini/check-circle"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div id="work-detail-LG" className="-ml-2 hidden sm:flex ">
                <WorkStatus position={'Front End Developer'} date={'2018'} />
              </div>
            </div>
          </div>
        </div>
        <div
          id="work-detail-MOBILE"
          className="black-2-bg -mt-1 mb-4 -ml-2 flex justify-center pt-2 pb-4 md:sr-only"
        >
          <WorkStatus position={'Front End Developer'} date={'2018'} />
        </div>
      </div>

      <div
        id="landing-profile-details"
        className="md:flex md:items-center md:justify-between md:space-x-5"
      >
        {/* <div className="flex items-start space-x-5">
          <div className="flex-shrink-0">
            <Image
              alt="image of work"
              src={profile.avatar}
              key="image of work"
            />
          </div>
        </div> */}
      </div>
    </>
  )
}
