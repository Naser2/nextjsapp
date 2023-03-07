import Link from 'next/link'

import { Container } from '@/components/Container'
import { useRouter } from 'next/router'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="dark:hover:text-blue400 text-xl text-white transition hover:text-blue-400 md:text-2xl"
    >
      {children}
    </Link>
  )
}

export default function BasicFooter() {
  const router = new useRouter()
  let isPodcastRoute = router.pathname.includes(['/podcast'])
  const isCourseMdxRoute = router.pathname.includes(['/courses/dev/'])
  router.pathname.includes()
  return (
    <footer
      id="site-footer"
      className={
        isPodcastRoute || isCourseMdxRoute
          ? 'hidden'
          : // ? 'z-1 site-footer relative sticky bottom-0 overflow-hidden bg-black pb-10'
            'overflow-hidden bg-black'
      }
    >
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40 ">
          <Container.Inner>
            <div className="flex flex-col justify-between gap-6 px-4 ">
              <div className="lg:grid-row-[auto_1fr] md:grid-row-1 md:grid-col-2 flex grid grid-cols-3 gap-6 gap-y-2 text-sm font-medium text-zinc-800 dark:text-zinc-200 lg:gap-y-12">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/blogs">Blogs</NavLink>
                <NavLink href="/podcasts">Podcasts</NavLink>
                <NavLink href="/courses">Courses</NavLink>
                <NavLink href="/uses">Contact</NavLink>
                <NavLink href="/speaking">speaking</NavLink>
                <NavLink href="/thankyou">Tank you</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                &copy; {new Date().getFullYear()} NasDesign. All rights
                reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}
