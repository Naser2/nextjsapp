import Head from 'next/head'
import { Router, useRouter } from 'next/router'
// import { MDXProvider } from '@mdx-js/react'
import { useRef, useEffect } from 'react'
import { MainSiteLayout } from '@/components/MainSiteLayout'
import * as siteMdxComponents from '@/components/siteMdxComponents'
// import { useMobileNavigationStore } from '@/components/MobileNavigation'
import { MDXProvider } from '@mdx-js/react'
import '@/styles/tailwind.css'
import 'focus-visible'
import { Header } from '@/components/Header'
import { AudioProvider } from '@/components/PodcastComponents/AudioProvider'
import BasicFooter from '@/components/BasicFooter'

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
          previousPathname={previousPathname}
          {...pageProps}
          components={siteMdxComponents}
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
