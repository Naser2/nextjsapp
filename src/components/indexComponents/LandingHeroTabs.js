import classNames from '@/lib/classNames'
import { useMemo, useRef, useState } from 'react'
import scrollToSection from '@/lib/scrollToSection'
import { AnimatePresence, motion, useIsPresent } from 'framer-motion'
import Link from 'next/link'

export function LandingHeroTabs({
  sectionRefs,
  projectsRef,
  aboutRef,
  blogsRef,
  learnToCode,
  podcastRef,
  socialsRef,
  githubRef,
}) {
  console.log(
    'ALL REFS-->',
    sectionRefs,
    'BOGS_REF',
    blogsRef,
    'WABOUT',
    aboutRef,
    'TABSSS PROPS',
    projectsRef,
    'LEARN',
    learnToCode
  )
  const initialState = {
    tabName: null,
    current: false,
  }
  const [currentTab, setCurrentTab] = useState(initialState)

  //   function scrollToSection(elementRef) {
  //     console.log('scrollToSection', elementRef)
  //     if (window) {
  //       window.scrollTo({
  //         top: elementRef.current.offsetTop,
  //         behavior: 'smooth',
  //       })
  //     }
  //   }
  const tab = useMemo(() => {
    const tabs = [
      { name: 'About', href: '#about', current: true, ref: aboutRef },
      {
        name: 'Projects',
        href: '#projects',
        current: false,
        ref: projectsRef,
      },
      { name: 'Blogs', href: '#blogs', current: false, ref: blogsRef },
      {
        name: 'Code',
        href: '#learn-to-code',
        current: false,
        ref: learnToCode,
      },
      {
        name: 'Podcast',
        href: '#podcast',
        current: false,
        ref: podcastRef,
      },
      {
        name: 'Social',
        href: '#social',
        current: false,
        ref: socialsRef,
      },
    ]
    const handleCurrentTab = (tabName, tab) => {
      console.log('New Tab', tab)
      setCurrentTab((prevState) => ({
        tabName: tabName,
        current: true,
      }))
      scrollToSection(tab.ref)
    }
    console.log('CURRENt', currentTab.ref)
    const selectedTabStyle = 'border-sky-500 main-blue dark:text-sky-500'
    // const elementref = useRef(0)
    return tabs.map((tab) => (
      <Link
        onClick={() => handleCurrentTab(tab.name, tab)}
        // onClick={() => tab.ref.current.scrollIntoView({ behavior: 'smooth' })}
        key={tab.name}
        behavior={'smooth'}
        // href={tab.href}
        className={classNames(
          currentTab.current === false && tab.name === 'About'
            ? ' bg-yellow-10 main-blue bg-opacity-30 text-sky-400 dark:text-red-400'
            : tab.name === currentTab.tabName && currentTab.current == true
            ? selectedTabStyle
            : 'border-b-2 border-transparent text-gray-900 hover:border-gray-300',
          'whitespace-nowrap border-b-2 px-2 py-4  text-sm font-medium hover:text-indigo-200 dark:text-slate-100 lg:px-6 lg:py-2 lg:text-xl'
        )}
        aria-current={tab.current ? 'page' : undefined}
        overflow-anchor={'false'}
      >
        {tab.name}
      </Link>
    ))
  }, [
    currentTab,
    projectsRef,
    aboutRef,
    blogsRef,
    learnToCode,
    podcastRef,
    socialsRef,
  ])

  return (
    <>
      <div className="mx-0 mt-4 mt-6 max-w-full pl-0 sm:mt-6 lg:mx-0 2xl:mt-10">
        <div className="border-l-2 border-orange-200 border-l-orange-400 px-2  lg:border-l-4 ">
          <nav
            className="mb-1 flex space-x-3 lg:space-x-8 lg:space-x-8 lg:py-4 lg:px-4"
            aria-label="Tabs"
          >
            {tab}
          </nav>
        </div>
      </div>
    </>
  )
}

{
  /* <motion.li key={link.href} layout="position" className="relative">
              <NavLink href={link.href} active={link.href === router.pathname}>
                {link.title}
              </NavLink>
              <AnimatePresence mode="popLayout" initial={false}>
                {link.href === router.pathname && sections.length > 0 && (
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
                  >
                    {sections.map((section) => (
                      <li key={section.id}>
                        <NavLink
                          href={`${link.href}#${section.id}`}
                          tag={section.tag}
                          isAnchorLink
                        >
                          {section.title}
                        </NavLink>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.li> */
}
