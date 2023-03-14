import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { AnimatePresence, motion, useIsPresent } from 'framer-motion'

import { Button } from '@/components/Button'
import { useIsInsideMobileNavigation } from '@/components/MobileNavigation'
import { useSectionStore } from '@/components/SectionProvider'
import { Tag } from '@/components/Tag'
import { remToPx } from '@/lib/remToPx'
import { slugifyWithCounter } from '@sindresorhus/slugify'
import useWindowDimensions from './useWindowSize'
function useInitialValue(value, condition = true) {
  let initialValue = useRef(value).current
  return condition ? initialValue : value
}

function TopLevelNavItem({ href, children, hasPageLocalNav }) {
  return (
    <li id={'mobile-nav-' + `${children}`} className="">
      <Link
        href={href}
        className={
          hasPageLocalNav
            ? 'nav-el py-2 text-left text-xl text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
            : 'block py-6 text-left text-2xl text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
        }
      >
        {children}
      </Link>
    </li>
  )
}

function NavLink({ href, tag, active, isAnchorLink = false, children }) {
  console.log('SECTION.CURRENT-ACTIVE=' + active)
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={clsx(
        'flex justify-between gap-2 py-1 pr-3 text-sm transition',
        isAnchorLink ? 'pl-7' : 'pl-4',
        active
          ? 'active-section-group-title text-sky-900 dark:text-white'
          : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
      )}
    >
      <span className="truncate">{children}</span>
      {tag && (
        <Tag variant="small" color="sky">
          {tag}
        </Tag>
      )}
    </Link>
  )
}

function VisibleSectionHighlight({ group, pathname }) {
  console.log('USE_IS_INSIDE', 'FIRREred')
  let [chapters, visibleSections] = useInitialValue(
    [
      useSectionStore((s) => s.chapters),
      useSectionStore((s) => s.visibleSections),
    ],
    useIsInsideMobileNavigation()
  )

  let isPresent = useIsPresent()
  let firstVisibleSectionIndex = Math.max(
    0,
    [{ id: '_top' }, ...chapters].findIndex(
      (chapter) => chapter.id === visibleSections[0]
    )
  )
  let itemHeight = remToPx(2)
  let height = isPresent
    ? Math.max(1, visibleSections.length) * itemHeight
    : itemHeight
  let top =
    chapter.links.findIndex((link) => link.href === pathname) * itemHeight +
    firstVisibleSectionIndex * itemHeight

  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      className="bg-zinc-800/2.5 dark:bg-white/2.5 absolute inset-x-0 top-0 will-change-transform"
      style={{ borderRadius: 8, height, top }}
    />
  )
}

function ActivePageMarker({ chapter, pathname }) {
  let itemHeight = remToPx(2)
  let offset = remToPx(0.25)
  let activePageIndex = chapter.links.findIndex(
    (link) => link.href === pathname
  )
  let top = offset + activePageIndex * itemHeight

  return (
    <motion.div
      layout
      className="absolute left-2 h-6 w-px bg-emerald-500"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2 } }}
      exit={{ opacity: 0 }}
      style={{ top }}
    />
  )
}

function NavigationGroup({ chapter, className }) {
  // If this is the mobile navigation then we always render the initial
  // state, so that the state does not change during the close animation.
  // The state will still update when we re-open (re-render) the navigation.
  console.log('NAVIGATION_GROUP: ' + chapter.links)

  let isInsideMobileNavigation = useIsInsideMobileNavigation()
  let [router, chapters] = useInitialValue(
    [useRouter(), useSectionStore((s) => s.chapters)],
    isInsideMobileNavigation
  )
  console.log(
    'GROUP-FIND:',
    chapter.links.findIndex(
      (link) => 'courses/dev' + link.href === router.pathname
    ) !== -1
  )
  console.log('Group_Nav -Section.length', chapters.length)
  let isActiveGroup =
    chapter.links.findIndex((link) => link.href === router.pathname) !== -1

  return (
    <li className={clsx('relative mt-6', className)}>
      <motion.h2
        id="chapter-title"
        layout="position"
        className="course-chapter-title dark:course-chapter-title font-semibold text-zinc-900"
      >
        {chapter.title}
      </motion.h2>
      <div className="relative mt-3 pl-2">
        <AnimatePresence initial={!isInsideMobileNavigation}>
          {isActiveGroup && (
            <VisibleSectionHighlight
              chapter={chapter}
              pathname={router.pathname}
            />
          )}
        </AnimatePresence>
        <motion.div
          layout
          className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"
        />
        <AnimatePresence initial={false}>
          {isActiveGroup && (
            <ActivePageMarker chapter={chapter} pathname={router.pathname} />
          )}
        </AnimatePresence>
        <ul
          role="list"
          className="flex items-center justify-center border-l border-transparent  "
        >
          {chapter.links.map((link) => {
            let prefixOrNot = link.href === '/' ? ' ' : link.href
            let currentRoute = router.pathname
            let properLink = `${currentRoute + prefixOrNot}`
            console.log(
              'PROPER-LINK',
              properLink,
              'ROUTER_PATHNAME:',
              router.pathname,
              'ACTIVE LINK',
              properLink === router.pathname
            )

            return (
              <motion.li
                key={properLink}
                layout="position"
                className="relative "
              >
                <NavLink
                  href={properLink}
                  active={properLink === router.pathname}
                >
                  {link.title}
                </NavLink>
                <AnimatePresence mode="popLayout" initial={false}>
                  {properLink === router.pathname && chapters.length > 0 && (
                    <motion.ul
                      role="list"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { delay: 0.1 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15 },
                      }}
                      className=""
                    >
                      {chapters &&
                        chapters.map((chapter) => (
                          <li key={chapter.id}>
                            <NavLink
                              href={`${properLink}#${chapter.id}`}
                              tag={chapter.tag}
                              isAnchorLink
                            >
                              {chapter.title}
                            </NavLink>
                          </li>
                        ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </li>
  )
}

export const courseNavigation = [
  //  ***1 if the route is anything else then courses, the Navigation should have Blogs and No chapters.
  // **** shoud also render Podcast routes and No groupe
  // theses Navigations should be simple.
  // A: example once on Blogs routes it should only display Go Back BTN and all previous options.
  //  Once on  Courses  then the all Nav is populated with the Courses  and links to the Chapters
  //  And Login/Logout Button. If logged in the User has a profile and and the Nav adds a link to it self about the user Profile and user [completed courses ]
  // Get all the courses from the mdx saved as JSON and return them as a Courses based on the route the user is on

  {
    title: 'Guides',
    links: [
      { title: 'Introduction', href: '/' },
      { title: 'Quickstart', href: '/quickstart' },
      // { title: 'SDKs', href: '/courses/dev/react/sdks' },
      // { title: 'Authentication', href: '/authentication' },
      // { title: 'Pagination', href: '/pagination' },
      // { title: 'Errors', href: '/errors' },
      // { title: 'Webhooks', href: '/webhooks' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { title: 'Contacts', href: '/courses/dev/react/contacts' },
      // { title: 'Conversations', href: '/conversations' },
      // { title: 'Messages', href: '/messages' },
      // { title: 'Groups', href: '/groups' },
      // { title: 'Attachments', href: '/courses/dev/react/attachments' },
    ],
  },
]

// const courses = await getCourseMeta()

export function Navigation(props) {
  const [hasPageLocalNav, setHasPageLocalNav] = useState(false)
  const router = new useRouter()

  function slugifly(element) {
    let title = element.title
    let slugify = slugifyWithCounter()
    let slugified = slugify(title)

    return slugified
  }

  const {
    siteNavigation,
    coursesRouteVavigation,
    blogsRouteVavigation,
    projectsRouteVavigation,
    course,
    courseChapters,
    courseTitle,
    sections,
  } = props

  console.log(
    'NAVIVATION-SITE-NAV',
    coursesRouteVavigation,
    blogsRouteVavigation,
    projectsRouteVavigation
  )
  // console.log('NAVIGATION-SECTION', coursesRouteVavigation)
  console.log('NAVIGATION-COURSE', sections)
  const coursePath = ['/courses/dev']
  const isCoursePage = router.pathname.includes(coursePath)
  // setNavigationState(navigation)
  // ROUTE-PATH: /courses/dev/uiux

  // const goBackToMainPage = router.pathname.split('#')[0]
  // console.log('SLUGIFY : ', slugify('Making your first API request'))
  const goBackToMainPage = router.pathname.split('/').slice(0, -1).join('/')
  const pageLocalNavigation = useMemo(() => {
    if (router.pathname === '/blogs') {
      setHasPageLocalNav(true)
      return blogsRouteVavigation
    }
    if (router.pathname === '/courses' && router.pathname.substr(1) !== '/') {
      setHasPageLocalNav(true)
      return coursesRouteVavigation
    }
    if (router.pathname === '/projects') {
      setHasPageLocalNav(true)
      return projectsRouteVavigation
    } else {
      setHasPageLocalNav(false)
    }
  }, [
    blogsRouteVavigation,
    coursesRouteVavigation,
    projectsRouteVavigation,
    router.pathname,
  ])
  // Usage

  const { width, height } = useWindowDimensions()

  console.log('WINDOW_SIZE', height)

  console.log('NAVVVVVVVVVVVVVVVVVV', pageLocalNavigation)
  // let pageLocalNavigation
  // if (router.pathname === '/blogs' && !router.pathname === '/blogs/') {
  //   return (pageLocalNavigation = blogsRouteVavigation)
  // }
  // if (router.pathname === '/courses' && !router.pathname === '/courses/dev/') {
  //   return (pageLocalNavigation = coursesRouteVavigation)
  // }
  // if (router.pathname === '/projects' && !router.pathname === '/projects/') {
  //   return (pageLocalNavigation = projectsRouteVavigation)
  // }
  console.log(
    'LOCAL_NAV_UNDEFINED',
    pageLocalNavigation !== undefined,
    pageLocalNavigation
  )
  return (
    <div>
      {isCoursePage && (
        <nav {...props}>
          <ul role="list" className="z-100 relative px-10">
            {/* <h1 href={router.pathnam + courseTitle}>{courseTitle}</h1> */}
            <TopLevelNavItem
              key={router.pathname}
              href={
                router.pathname.endsWith(`dev/${courseTitle}`)
                  ? router.pathname
                  : router.pathname
                      .split('#')[0]
                      .split('/')
                      .slice(0, -1)
                      .join('/')
              }
            >
              {courseTitle && courseTitle.toUpperCase()}
            </TopLevelNavItem>

            {courseChapters
              ? courseChapters[0].chapters.map((el, idx) => {
                  // console.log('CHAPTER:', el)
                  return (
                    <TopLevelNavItem
                      key={el.id}
                      href={
                        idx === 0
                          ? router.pathname
                          : router.pathname + '/' + slugifly(el)

                        // `${el.title.replace(' ', '-').toLowerCase()}`
                      }
                    >
                      {el.title}
                    </TopLevelNavItem>
                  )
                })
              : sections &&
                sections.map((el) => {
                  console.log('CHAPTER:', el)
                  return (
                    <TopLevelNavItem
                      key={el.id}
                      href={
                        router.pathname + '#' + slugifly(el)
                        // `${el.title.replace(' ', '-').toLowerCase()}`
                      }
                    >
                      {el.title}
                    </TopLevelNavItem>
                  )
                })}

            <li className="sticky bottom-0 z-10 mt-6 min-[416px]:hidden">
              <Button href="#" variant="filled" className="w-full py-4">
                Signnnn inn
              </Button>
            </li>
          </ul>
        </nav>
      )}
      {!isCoursePage && siteNavigation && (
        <nav {...props}>
          <ul role="list" className="">
            <div
              id="site-navigation"
              className={clsx(
                hasPageLocalNav ? 'bg-slate-100 px-10 py-5' : ' px-10 py-5'
              )}
              style={
                hasPageLocalNav ? { height: height / 3 } : { height: height }
              }
            >
              {siteNavigation.links.map((el, idx) => {
                console.log('CHAPTER:', el)
                return (
                  <TopLevelNavItem
                    key={el.title}
                    href={el.href.toLowerCase()}
                    hasPageLocalNav={hasPageLocalNav}
                  >
                    {el.title}
                  </TopLevelNavItem>
                )
              })}
            </div>
            {/* <h1 href={router.pathname}>{siteNavigation.title}</h1> */}
            {pageLocalNavigation !== undefined && (
              <div
                id="local-page-navigtion"
                className={clsx(
                  'nav-secondary',
                  hasPageLocalNav ??
                    'active nav-secondary active  mt-0.5 -mr-0.5 origin-top-right scale-100 transform divide-y divide-gray-100 overflow-y-auto scroll-smooth  bg-white  text-sm font-normal text-slate-900 opacity-100 shadow-md ring-1 ring-slate-900/5 focus:outline-none sm:-mr-3.5'
                )}
                style={{ height: height / 2.5 }}
              >
                <div className="relative">
                  <div className="sticky top-0 top-0 left-0 right-0">
                    Contacts
                  </div>
                </div>
                <span class="nav-secondary-title flex bg-slate-200/80 px-4 py-3 pr-2  tracking-tight text-black">
                  List of
                  <span className="pl-2">
                    {router.pathname.replace('/', '').charAt(0).toUpperCase() +
                      router.pathname
                        .replace('/', '')
                        .slice(1, router.pathname.length)}
                  </span>
                </span>
                {pageLocalNavigation.map((nav) => {
                  return (
                    <>
                      <Link
                        href={nav.link}
                        key={nav.link}
                        className={[
                          'nav-secondary-el flex py-1.5 py-1.5 px-3.5 hover:bg-sky-300',
                        ]}
                      >
                        {nav.refTitle.slice(0, 1) +
                          nav.refTitle
                            .toLowerCase()
                            .slice(1, nav.refTitle.length)}
                        {nav.status_ !== undefined && (
                          <div class="ml-2 rounded-full bg-sky-500 px-1.5 py-0 text-xs text-white sm:hidden">
                            {nav.status_}
                          </div>
                        )}
                      </Link>
                    </>
                  )
                })}
                {/* <a
                  class="nav-secondary-el flex py-1.5 py-1.5 px-3.5 hover:bg-sky-300"
                  href="/blogs/introducing-animaginary"
                >
                  Introducing animaginary
                </a>
                <a
                  class="nav-secondary-el flex py-1.5 py-1.5 px-3.5 hover:bg-sky-300"
                  href="/blogs/introducing-animaginary"
                >
                  Introducing animaginary
                </a>
                <a
                  class="nav-secondary-el flex py-1.5 py-1.5 px-3.5 hover:bg-sky-300"
                  href="/blogs/introducing-animaginary"
                >
                  Introducing animaginary
                </a>
                <a
                  class="nav-secondary-el flex py-1.5 py-1.5 px-3.5 hover:bg-sky-300"
                  href="/blogs/introducing-animaginary"
                >
                  Introducing animaginary
                </a>
                <a
                  class="nav-secondary-el flex py-1.5 py-1.5 px-3.5 hover:bg-sky-300"
                  href="/blogs/introducing-animaginary"
                >
                  Introducing animaginary
                </a>
                <a
                  class="nav-secondary-el flex py-1.5 py-1.5 px-3.5 hover:bg-sky-300"
                  href="/blogs/introducing-animaginary"
                >
                  Introducing animaginary
                </a>
                <a
                  class="nav-secondary-el flex py-1.5 py-1.5 px-3.5 hover:bg-sky-300"
                  href="/blogs/introducing-animaginary"
                >
                  Introducing animaginary
                </a>
                <a
                  class="nav-secondary-el flex py-1.5 py-1.5 px-3.5 hover:bg-sky-300"
                  href="/blogs/introducing-animaginary"
                >
                  Introducing animaginary
                </a>
                <a
                  class="nav-secondary-el flex py-1.5 py-1.5 px-3.5 hover:bg-sky-300"
                  href="/blogs/introducing-animaginary"
                >
                  Introducing animaginary
                </a>
                <a
                  class="nav-secondary-el flex py-1.5 py-1.5 px-3.5 hover:bg-sky-300"
                  href="/blogs/introducing-animaginary"
                >
                  Introducing animaginary
                </a>
                <a
                  class="nav-secondary-el flex py-1.5 py-1.5 px-3.5 hover:bg-sky-300"
                  href="/blogs/introducing-animaginary"
                >
                  Introducing animaginary
                </a>
                <a
                  class="nav-secondary-el flex py-1.5 py-1.5 px-3.5 hover:bg-sky-300"
                  href="/blogs/introducing-animaginary"
                >
                  Introducing animaginary
                </a>
                <a
                  class="nav-secondary-el flex py-1.5 py-1.5 px-3.5 hover:bg-sky-300"
                  href="/blogs/introducing-animaginary"
                >
                  Introducing animaginary
                </a>
                <a
                  class="nav-secondary-el flex py-1.5 py-1.5 px-3.5 hover:bg-sky-300"
                  href="/blogs/introducing-animaginary"
                >
                  Introducing animaginary
                </a>
                <a
                  class="nav-secondary-el flex py-1.5 py-1.5 px-3.5 hover:bg-sky-300"
                  href="/blogs/introducing-animaginary"
                >
                  Introducing animaginary
                </a>
                <a
                  class="nav-secondary-el flex py-1.5 py-1.5 px-3.5 hover:bg-sky-300"
                  href="/blogs/introducing-animaginary"
                >
                  Introducing animaginary
                </a>
                <a
                  class="nav-secondary-el flex py-1.5 py-1.5 px-3.5 hover:bg-sky-300"
                  href="/blogs/introducing-animaginary"
                >
                  Introducing animaginary
                </a>
                <a
                  class="nav-secondary-el flex py-1.5 py-1.5 px-3.5 hover:bg-sky-300"
                  href="/blogs/introducing-animaginary"
                >
                  Introducing animaginary
                </a>
                <a
                  class="nav-secondary-el flex py-1.5 py-1.5 px-3.5 hover:bg-sky-300"
                  href="/blogs/introducing-animaginary"
                >
                  Introducing animaginary
                </a>
                <a
                  class="nav-secondary-el flex py-1.5 py-1.5 px-3.5 hover:bg-sky-300"
                  href="/blogs/introducing-animaginary"
                >
                  Introducing animaginary
                </a>
                <a
                  class="nav-secondary-el flex py-1.5 py-1.5 px-3.5 hover:bg-sky-300"
                  href="/blogs/introducing-animaginary"
                >
                  Introducing animaginary
                </a>
                <a
                  class="nav-secondary-el flex py-1.5 py-1.5 px-3.5 hover:bg-sky-300"
                  href="/blogs/introducing-animaginary"
                >
                  Introducing animaginary
                </a>
                <a
                  class="nav-secondary-el flex py-1.5 py-1.5 px-3.5 hover:bg-sky-300"
                  href="/blogs/introducing-animaginary"
                >
                  Introducing animaginary
                </a>
                <a
                  class="nav-secondary-el flex py-1.5 py-1.5 px-3.5 hover:bg-sky-300"
                  href="/blogs/introducing-animaginary"
                >
                  Introducing animaginary
                </a>
                <a
                  class="nav-secondary-el flex py-1.5 py-1.5 px-3.5 hover:bg-sky-300"
                  href="/blogs/introducing-animaginary"
                >
                  Introducing animaginary
                </a> */}
              </div>
            )}

            <li className="bottom-0 z-10 mt-6 min-[416px]:hidden">
              <Button
                href="#"
                variant="filled"
                className="w-full  py-4"
                rounded="rounded-"
              >
                Sign iiin
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  )
}
