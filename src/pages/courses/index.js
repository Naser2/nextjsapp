import Head from 'next/head'
import { Router, useRouter } from 'next/router'

import { Layout } from '@/components/Layout'
// import * as mdxComponents from '@/components/mdx'
import { useMobileNavigationStore } from '@/components/MobileNavigation'
// import { getCourses } from '@/lib/getCourses'
import { Container } from '@/components/PodcastComponents/Container'

// const fs = require('fs').promises
import getCourses from '@/lib/getCourses'
import { CourseListCard } from '@/components/CourseListCard'
import { getDisplayName } from 'next/dist/shared/lib/utils'
import { Header } from '@/components/Header'
import { ContainerNoPadding } from '@/components/Container'

function onRouteChange() {
  useMobileNavigationStore.getState().close()
}

Router.events.on('hashChangeStart', onRouteChange)
Router.events.on('routeChangeComplete', onRouteChange)
Router.events.on('routeChangeError', onRouteChange)

function CoursesIndex({
  Component,
  pageProps,
  children,
  props,
  courses,
  // devCourses,
}) {
  //   let router = useRouter()
  //   courses.map((course) => {
  // console.log('COURSES_IN_FUNCTIONAL', courses)
  // console.log('COURSES_FLATTEN', courses.flatten())
  //   })

  console.log('COURSES In FUNC', courses)
  // var coursesFlat = [].concat(...courses)

  return (
    <>
      <div className="relative pt-0 pb-20 dark:bg-black sm:py-24 lg:pt-2 xl:pt-5 ">
        <div className="bg-wheat absolute inset-x-0 -top-48 -bottom-14 overflow-hidden">
          {/* <Image
                className="absolute top-0 left-0 translate-y-[-10%] translate-x-[-55%] -scale-x-100 sm:left-1/2 sm:translate-y-[-6%] sm:translate-x-[-98%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
                src={backgroundImage}
                alt=""
                width={918}
                height={1495}
                priority
         optimzed="true"
              /> */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
        </div>
        <ContainerNoPadding className="relative">
          <div className="mx-auto max-w-2xl px-10 pt-10 lg:max-w-4xl lg:px-12">
            <h1 className="course-title ">
              <span className="sr-only">A collections of - </span> Welcome to
              Courses.
            </h1>
            <h1 className="font-display pt-4 text-5xl font-bold tracking-tighter text-slate-800 sm:text-7xl">
              <span className="sr-only">A collections of - </span> Courses
              designed for your success.
            </h1>
            <div className="font-display mt-6 space-y-6 text-2xl tracking-tight text-slate-900">
              <p>
                The next generation will be savy in order to make their lives
                easier and always meet the market demand in this everchanging
                technology driven society. Choose from hundreds of free courses
                or pay to earn a Course or Specialization Certificate. Explore
                our catalog of online degrees, certificates,
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-y-6 gap-x-10 sm:mt-16 sm:gap-y-10 sm:gap-x-16 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left xl:px-10">
              {[
                ['Courses', courses.length],
                ['Grad Students ', '2,091'],
                ['Tests', '54'],
              ].map(([name, value]) => (
                <div key={name}>
                  <dt className="font-mono text-sm text-slate-600">{name}</dt>
                  <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-slate-700">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="mt-4 rounded-lg bg-orange-100/40 px-2 py-4 md:px-4 ">
              <div>
                <h1 className="font-mono text-sm text-slate-600">
                  Certificates
                </h1>
                <ul className="block md:flex">
                  {['Software Development', ' AWS', 'UI/XS'].map((val) => {
                    return (
                      <span
                        key={val}
                        className="mt-0.5 pr-2 text-2xl font-semibold tracking-tight text-slate-700"
                      >
                        {val}
                      </span>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </ContainerNoPadding>
      </div>
      <div className="relative bg-gray-50 px-6 pt-4 pb-20 lg:px-8 lg:pt-14 lg:pb-28 xl:px-32">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="font-display text-5xl font-bold tracking-tighter text-slate-700 sm:text-6xl">
              Available Courses
            </h2>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {courses.map((course) => (
              <CourseListCard key={course.title} course={course} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const courses = await getCourses()
  console.log('COURSES___>', courses)
  return {
    props: {
      courses: courses,
      revalidate: 60,
    },
  }
}

export default CoursesIndex
