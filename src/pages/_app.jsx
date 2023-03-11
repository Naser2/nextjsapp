import Head from 'next/head'
import { Router, useRouter } from 'next/router'
// import { MDXProvider } from '@mdx-js/react'
import { useRef, useEffect, useState, useMemo } from 'react'
import { MainSiteLayout } from '@/components/MainSiteLayout'
import * as siteMdxComponents from '@/components/siteMdxComponents'
// import { useMobileNavigationStore } from '@/components/MobileNavigation'
import { MDXProvider } from '@mdx-js/react'
import '@/styles/tailwind.css'
import 'focus-visible'
import { Header } from '@/components/Header'
import { AudioProvider } from '@/components/PodcastComponents/AudioProvider'
import BasicFooter from '@/components/BasicFooter'
import { slugify } from '@/lib/slugify'
function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

// function onRouteChange() {
//   useMobileNavigationStore.getState().close()
// }

// Router.events.on('hashChangeStart', onRouteChange)
// Router.events.on('routeChangeComplete', onRouteChange)
// Router.events.on('routeChangeError', onRouteChange)
// console.log('CUSTOM_COMPONENTS', siteMdxComponents)
export default function App({ Component, pageProps, children }) {
  const [sumitData, setSubmitData] = useState({})
  const handleSubmit = () => {
    alert('Please enter Data for App to Submiet ')
  }
  let router = useRouter()
  let previousPathname = usePrevious(router.pathname)
  const siteNavigation = {
    title: 'My Site',
    links: [
      { title: 'Home', href: '/' },
      { title: 'About', href: '/about' },
      { title: 'Blogs', href: '/blogs' },
      { title: 'Courses', href: '/courses' },
      { title: 'Projects', href: '/projects' },
      { title: 'Podcasts', href: '/podcasts' },
      // { title: 'Music', href: '/music' },
    ],
  }
  const coursesRouteVavigation = useMemo(() => {
    if (pageProps.courses) {
      return pageProps.courses.map(({ title, courseSlug }) => {
        const refTitle = title.split('-').join(' ').toUpperCase()
        const link = `/courses/${courseSlug}`
        return [{ refTitle: refTitle, link: link }]
      })
    } else {
      console.log('NO COURSES_NAVIGATION ')
    }
  }, [pageProps.courses])
  const blogsRouteVavigation = useMemo(() => {
    if (pageProps.blogs) {
      return pageProps.blogs.map(({ slug }) => {
        const refTitle = slug.split('-').join(' ').toUpperCase()
        const link = `/blogs/${slug}`

        return { refTitle: refTitle, link: link }
      })
    } else {
      console.log('NO BLOGS_NAVIGATION ')
    }
  }, [pageProps.blogs])
  const projectsRouteVavigation = useMemo(() => {
    if (pageProps.projects) {
      return pageProps.projects.map(({ title }) => {
        const refTitle = title.split('-').join(' ').toUpperCase()
        const link = `/projects/${slugify(title)}`

        return { refTitle: refTitle, link: link }
      })
    } else {
      console.log('NO PROJECTS_NAVIGATION ')
    }
  }, [pageProps.projects])
  return (
    <>
      <AudioProvider>
        <Head>
          {router.pathname === '/' ? (
            <title>Protocol API Reference</title>
          ) : (
            <title>{`${pageProps.title} - Protocol API Reference`}</title>
          )}
          <meta name="description" content={pageProps.description} />
        </Head>

        <MainSiteLayout
          siteNavigation={siteNavigation}
          blogsRouteVavigation={blogsRouteVavigation}
          coursesRouteVavigation={coursesRouteVavigation}
          projectsRouteVavigation={projectsRouteVavigation}
          previousPathname={previousPathname}
          {...pageProps}
          components={siteMdxComponents}
          handleSubmit={handleSubmit}
          pageProps={pageProps}
        >
          {/* <main
            {...pageProps}
            previousPathname={previousPathname}
            {...pageProps}
            components={siteMdxComponents}
          >
            {children}
          </main> */}
          <Component
            previousPathname={previousPathname}
            {...pageProps}
            components={siteMdxComponents}
          />
        </MainSiteLayout>
      </AudioProvider>
      <BasicFooter />
    </>
  )
}
