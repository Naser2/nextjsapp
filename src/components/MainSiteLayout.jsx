import Link from 'next/link'
import { motion } from 'framer-motion'
import { Router, useRouter } from 'next/router'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Logo } from '@/components/Logo'
import { Navigation } from '@/components/Navigation'
import { Prose } from '@/components/Prose'
import { SectionProvider } from '@/components/SectionProvider'
import { useEffect } from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

// import { AudioProvider } from '@/components/AudioProvider'
// import { MDXProvider } from '@mdx-js/react'
// export default function CoursesLayout({ children, sections = [], props }) {
//   console.log('SECTIONS-Courses-Layout', sections)
//   console.log('Courses-Layout-PROPS', props)
//   return (
//     <>
//       <h1 className="text-4xl text-black dark:text-white">HELLO COURSE</h1>{' '}
//       <SectionProvider sections={sections}>
//         <div className="lg:px-10" id="courses-layout">
//           <motion.header
//             layoutScroll
//             className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex"
//           >
//             <div className="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pt-4 lg:pb-8 lg:dark:border-white/10 xl:w-80">
//               <div className="hidden lg:flex">
//                 <Link href="/" aria-label="Home">
//                   <Logo className="h-6" />
//                 </Link>
//               </div>
//               <Header />
//               <Navigation className="hidden lg:mt-10 lg:block" />
//             </div>
//           </motion.header>
//           <div className="relative px-4 pt-14 sm:px-6 lg:px-8">
//             <main className="text-align-center py-16">
//               <Prose as="article">{children}</Prose>
//             </main>
//             <Footer />
//           </div>
//         </div>
//       </SectionProvider>
//     </>
//   )
// }
export function MainSiteLayout({
  siteNavigation,
  blogsRouteVavigation,
  coursesRouteVavigation,
  projectsRouteVavigation,
  sections = [],
  navigation,
  previousPathname,
  handleSubmit,
  pageProps,
  children,

  ...props
}) {
  const [navigationState, setNavigationState] = useState([])

  const router = useRouter()
  console.log('MAINSITE Mainsite', navigation)
  console.log('PAGE_PROPS', pageProps, 'HANDLE_SUB', handleSubmit)
  // console.log('MAINSITE-SITE_NAV_PROPS ', siteNavigation)

  // console.log('MAINSITE Sections', sections)
  // console.log('MAINSITE NAVIGATion', navigation)
  // const courses = getCourses()
  // console.log('MAIN_SITE_LAYOUT -Courses-:', courses)

  //Get COURSES and Make links to Pass to Navigation Here
  //   console.log('MAIN_SITE-Layout', sections)
  //   console.log('MAIN-SITE-LAYOUT-PROPS', props)
  const [layoutType, setLayoutType] = useState('BasicLayout')

  useMemo(() => {
    if (navigation !== []) {
      setNavigationState(navigation)
    } else {
      console.log(
        'Mainsite--NAVIGATION is empty [add a default navigation state]'
      )
      // setCurrentTime(null)
    }
  }, [navigation])

  // const coursesRouteVavigation = useMemo(() => {
  //   if (pageProps.courses !== undefined) {
  //     return pageProps.courses.map(({ title, courseSlug }) => {
  //       const courseTitle = title.split('-').join(' ').toUpperCase()
  //       const courseLink = `/courses/${courseSlug}`
  //       // console.log(
  //       //   'COURSE-TOP_NAVIGATION in MAin Site',
  //       //   courseTitle,
  //       //   courseLink
  //       // )
  //       return [{ courseTitle: courseTitle, courseLink: courseLink }]
  //     })
  //   } else {
  //     console.log('NO COURSES_NAVIGATION ')
  //   }
  // }, [pageProps.courses])
  // const courseTitle =
  //   navigation && navigation.length > []
  //     ? navigation[0].title
  //     : 'No Course Title'
  //COURSES-LAYOUT
  // if (pageProps.courses) {
  //   const coursesRouteVavigation = pageProps.courses.map(
  //     ({ title, courseSlug }) => {
  //       const courseTitle = title.split('-').join(' ').toUpperCase()
  //       const courseLink = `/courses/${courseSlug}`
  //       // console.log(
  //       //   'COURSE-TOP_NAVIGATION in MAin Site',
  //       //   courseTitle,
  //       //   courseLink
  //       // )
  //       return [{ courseTitle: courseTitle, courseLink: courseLink }]
  //     }
  //   )
  //   return coursesRouteVavigation
  // }

  const courseTitle = router.pathname.split('/')[3]

  console.log('ROUTER PATH', router.pathname)
  function CoursesLayout() {
    console.log('SECTIONS-Courses-Layout', sections)
    console.log('Courses-Layout-PROPS', props)
    return (
      <>
        {/* <MDXProvider components={siteMdxComponents}> */}
        {/* <SectionProvider sections={sections}> */}
        <div className="courses-sidebar lg:ml-72 xl:ml-80" id="courses-layout">
          <motion.header
            layoutScroll
            className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex"
          >
            <div className="courses-sidebar-bg dark:courses-sidebar-bg relative contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pt-4 lg:pb-8 lg:dark:border-white/10 xl:w-80">
              <div className="hidden lg:flex">
                <Link href="/" aria-label="Home">
                  <Logo className="h-6" />
                </Link>
              </div>

              <Navigation
                siteNavigation={siteNavigation}
                blogsRouteVavigation={blogsRouteVavigation}
                coursesRouteVavigation={coursesRouteVavigation}
                projectsRouteVavigation={projectsRouteVavigation}
                courseTitle={courseTitle ?? 'loading-course-title'}
                sections={sections}
                course={navigation}
                courseChapters={navigationState}
                previousPathname={previousPathname ?? 'No-previous-pathname'}
                className="hidden lg:mt-10 lg:block"
              />
            </div>
          </motion.header>
          <div className="lg:pt-46 xl:px-46 xl:px-26 relative h-full min-h-screen px-16  pt-12 pt-20 md:px-6 lg:px-36 lg:pt-36">
            <div id="course-site-prose" className="text-align-center ">
              <Prose as="article">{children}</Prose>
            </div>
            <Footer
              course={navigation}
              siteNavigation={siteNavigation}
              blogsRouteVavigation={blogsRouteVavigation}
              coursesRouteVavigation={coursesRouteVavigation}
              projectsRouteVavigation={projectsRouteVavigation}
              courseChapters={navigationState}
              previousPathname={previousPathname ?? 'No-previous-pathname'}
            />
          </div>
        </div>
        {/* </SectionProvider> */}
      </>
    )
  }
  //BASIC-LAYOUT
  const BasicLayout = ({ previousPathname, rops }) => {
    return (
      <div
        previousPathname={previousPathname}
        siteNavigation={siteNavigation}
        blogsRouteVavigation={blogsRouteVavigation}
        coursesRouteVavigation={coursesRouteVavigation}
        projectsRouteVavigation={projectsRouteVavigation}
        pageProps={pageProps}
        handleSubmit={handleSubmit}
        {...props}
      >
        {children}
      </div>
    )
  }

  const isCoursesRoute = useMemo(
    () => router.pathname.includes(['courses/dev']),
    [router]
  )

  console.log('ROUTER', isCoursesRoute)

  // useEffect(() => {
  //   if (isCoursesRoute) {
  //     console.log('ROUTER SHOULD RENdER COURSES_LAYOUT')
  //     setLayoutType('CoursesLayout')
  //   } else {
  //     console.log('ROUTER SHOULD RENdER BASIC_LAYOUT')
  //     setLayoutType('BasicLayout')
  //   }

  //   Layout()
  //   const subscription = props.source.subscribe();
  //   return () => {
  //     subscription.unsubscribe();
  //   };
  // }, [isCoursesRoute, router])
  return (
    <>
      <Header
        siteNavigation={siteNavigation}
        blogsRouteVavigation={blogsRouteVavigation}
        coursesRouteVavigation={coursesRouteVavigation}
        projectsRouteVavigation={projectsRouteVavigation}
        courseTitle={courseTitle}
        sections={sections}
        // chapters={navigationState}
        // coursesRouteVavigation={coursesRouteVavigation}
        course={navigation}
        courseChapters={navigationState}
        previousPathname={previousPathname}
        pageProps={pageProps}
        handleSubmit={handleSubmit}
      />
      {/* <h1 className="text-5xl text-black dark:text-white">{layoutType}</h1> */}
      {layoutType === 'BasicLayout' && <BasicLayout />}
      {layoutType === 'CoursesLayout' && (
        <CoursesLayout
          // coursesRouteVavigation={coursesRouteVavigation}
          sections={sections}
          previousPathname={previousPathname}
          {...props}
          pageProps={pageProps}
          handleSubmit={handleSubmit}
          {...children}
        />
      )}
    </>
  )
}
