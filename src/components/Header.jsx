import { forwardRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Router, useRouter } from 'next/router'
import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import {
  MobileNavigation,
  useIsInsideMobileNavigation,
} from '@/components/MobileNavigation'
import { useMobileNavigationStore } from '@/components/MobileNavigation'
import { ModeToggle } from '@/components/ModeToggle'
import { MobileSearch, Search } from '@/components/Search'
import { CompanyLogo } from './CompanyLogo'

function TopLevelNavItem({ href, children }) {
  return (
    <li>
      <Link
        href={href}
        className="text-sm font-semibold leading-6 text-slate-700 dark:text-slate-200"
      >
        {children}
      </Link>
    </li>
  )
}

export const Header = forwardRef(function Header({ className, ...props }, ref) {
  console.log('SPOTILIGHT_HEADER_PROPS', props.siteNavigation)
  const router = useRouter()
  const coursePath = ['/courses/dev']
  const isCoursePage = router.pathname.includes(coursePath)
  console.log('IS COURSES PATH?:', isCoursePage)
  const homeNavLglementsStyle =
    'fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:z-30 backdrop-blur-sm dark:backdrop-blur bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)]'
  const coursesNavLGlementsStyle =
    'fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80'

  let { isOpen: mobileNavIsOpen } = useMobileNavigationStore()
  let isInsideMobileNavigation = useIsInsideMobileNavigation()

  let { scrollY } = useScroll()
  let bgOpacityLight = useTransform(scrollY, [0, 72], [0.5, 0.9])
  let bgOpacityDark = useTransform(scrollY, [0, 72], [0.2, 0.8])

  return (
    <motion.div
      id="Spotlight-Header"
      ref={ref}
      className={clsx(
        className,
        !isCoursePage ? homeNavLglementsStyle : coursesNavLGlementsStyle,
        // lg:left-72 lg:z-30 lg:px-8 xl:left-80
        !isInsideMobileNavigation && 'backdrop-blur-sm dark:backdrop-blur',
        // lg:left-72 xl:left-80
        isInsideMobileNavigation
          ? 'bg-white dark:bg-zinc-900'
          : 'bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)]'
      )}
      style={{
        '--bg-opacity-light': bgOpacityLight,
        '--bg-opacity-dark': bgOpacityDark,
      }}
    >
      <div
        className={clsx(
          'absolute inset-x-0 top-full h-px transition',
          (isInsideMobileNavigation || !mobileNavIsOpen) &&
            'bg-zinc-900/7.5 dark:bg-white/7.5'
        )}
      />
      {/* {isCoursePage && <Search />} */}

      <div className="flex items-center gap-5  lg:hidden">
        <MobileNavigation {...props} />
        <Link href="/" aria-label="Home">
          <CompanyLogo />
        </Link>
      </div>
      {/* {!isCoursePage && 'float-right'} */}
      <div
        id="Spotlight-Header-NAV"
        className={clsx(
          'flex items-center gap-1 md:gap-6 lg:h-12  lg:gap-0 xl:gap-6 '
        )}
      >
        <nav className="hidden lg:block">
          <ul role="list" className="flex h-14 items-center gap-8">
            <CompanyLogo />
            <div id="searchbar" className="md:mx-0 lg:mx-0 ">
              <Search />
            </div>
            <span className="relative ml-auto flex  hidden items-center items-center gap-8 lg:flex">
              {props.siteNavigation.links.map((link) => {
                return (
                  <TopLevelNavItem key={link.title} href={link.href}>
                    {link.title}
                  </TopLevelNavItem>
                )
              })}
            </span>
          </ul>
        </nav>
        <div className="md:dark:bg-white/15 hidden md:block md:h-5 md:w-px md:bg-zinc-900/10" />
        <div className="flex gap-4">
          {/* {isCoursePage && <MobileSearch />} */}
          <ModeToggle />
        </div>
        <div id="" className="max-[1016px]:ml-0 ">
          <div className="hidden  min-[416px]:contents">
            <Button href="#">Sign in</Button>
          </div>
        </div>
      </div>
    </motion.div>
  )
})
