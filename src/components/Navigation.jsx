import { useRef, useState } from 'react'
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

function useInitialValue(value, condition = true) {
  let initialValue = useRef(value).current
  return condition ? initialValue : value
}

function TopLevelNavItem({ href, children }) {
  return (
    <li id={'mobile-nav-' + `${children}`} className="">
      <Link
        href={href}
        className="block py-6 text-left text-2xl text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
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
  const router = new useRouter()
  // console.log('ROUTE-PATH: ' + router.pathname)
  function slugifly(element) {
    // console.log('ELEMENT_TITLE', element.title)
    let title = element.title
    let slugify = slugifyWithCounter()
    let slugified = slugify(title)
    // console.log('SLUGIFY', slugified)

    //  `${element.title.replace(' ', '-').toLowerCase()}`
    return slugified
  }

  const { siteNavigation, course, courseChapters, courseTitle, sections } =
    props
  console.log('NAVIVATION-SITE-NAV', siteNavigation)
  console.log('NAVIGATION-SECTION', course)
  console.log('NAVIGATION-COURSE', sections)
  const coursePath = ['/courses/dev']
  const isCoursePage = router.pathname.includes(coursePath)
  // setNavigationState(navigation)
  // ROUTE-PATH: /courses/dev/uiux

  // const goBackToMainPage = router.pathname.split('#')[0]
  // console.log('SLUGIFY : ', slugify('Making your first API request'))
  const goBackToMainPage = router.pathname.split('/').slice(0, -1).join('/')
  return (
    <div>
      {isCoursePage && (
        <nav {...props}>
          <ul role="list" className="z-100  px-10">
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
                Sign inn
              </Button>
            </li>
          </ul>
        </nav>
      )}
      {!isCoursePage && siteNavigation && (
        <nav {...props}>
          <ul role="list" className="px-10">
            {/* <h1 href={router.pathname}>{siteNavigation.title}</h1> */}
            {siteNavigation.links.map((el, idx) => {
              console.log('CHAPTER:', el)
              return (
                <TopLevelNavItem key={el.title} href={el.href.toLowerCase()}>
                  {el.title}
                </TopLevelNavItem>
              )
            })}
            <li className="sticky bottom-0 z-10 mt-6 min-[416px]:hidden">
              <Button
                href="#"
                variant="filled"
                className="w-full  py-4"
                rounded="rounded-"
              >
                Sign in
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  )
}
