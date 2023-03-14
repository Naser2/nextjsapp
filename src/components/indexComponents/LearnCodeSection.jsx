import { forwardRef } from 'react'
import { CustomizedContainer } from '../CustomizedContainer'
import { LearnCodeMan } from '@/images/projectImages/LearnCodeMan'
import Link from 'next/link'
import lady_designer from '@/images/projectImages/courses-uiux/lindsay_people_wagner_uiux_long.png'
import uixu_img1 from '@/images/projectImages/courses-uiux/uiux_short_1.jpeg'
import uixu_img from '@/images/projectImages/courses-uiux/uiux_short_2.jpeg'
import uixu_img2 from '@/images/projectImages/courses-uiux/uiux_intro.jpeg'
import { ArrowRight } from '../icons/Arrows'

const LearnCodeSection = forwardRef((props, ref) => {
  console.log('LEARN TO CODE  REF', ref), ref
  return (
    <section
      ref={ref}
      id="learn-to-code"
      // className="my-32 mt-32 overflow-hidden bg-teal-400 lg:mx-64"
    >
      {/* <CustomizedContainer
          section="About"
          bgColor="teal"
          band={true}
          bandcolor="bg-blue-2"
          note
          title={'Do it for love.'}
          margin="margin20"
          variant="small"
          // bgColor="amber"
          // band
          bandcolor="bg-teal-400"
          bandtext="Only writting about what passionates me"
        > */}
      <div
        id="stay-amazing"
        className="relative  bg-sky-100/20 dark:bg-teal-600"
      >
        <div className="" href="/courses">
          <div
            id="sectio-title-text"
            className="h-4 px-4  py-10 text-3xl  leading-7 lg:mb-10 lg:px-28 lg:py-8 xl:px-24 "
          >
            <p id="slogan" className="-mt-1 pl-1 text-sm dark:text-yellow-400">
              section
            </p>
            <Link
              href="#"
              className="inline-block w-full rounded-md border border-transparent bg-gray-900 py-3 px-8 px-4 font-medium text-white hover:bg-gray-800 sm:w-auto xl:not-sr-only"
            >
              Learning site
            </Link>
            {/* <h2 className="font-semibold text-black dark:text-white lg:dark:bg-transparent">
              Coding Site
            </h2> */}
          </div>
          {/* <h1 className="modules-lib__mission-statement__headline glue-headline glue-headline--fluid-2">
                My mission is to <span className="blue">inspire</span> the
                world’s <span className="red">information</span> and make
                learning <span className="green">universally accessible</span>{' '}
                and <span className="yellow">free</span>.
              </h1> */}
          <div className="">
            <div
              aria-labelledby="sale-heading "
              className="relative mx-auto flex max-w-7xl flex-col items-center px-4 pt-10  text-center sm:px-6 lg:px-8 lg:pt-20 lg:pb-32 "
            >
              <div id="absolute-coding-man" className="absolute left-0">
                <LearnCodeMan />
              </div>

              <div className="absolute -top-20 right-0 hidden max-w-2xl lg:block  lg:max-w-none">
                <h2
                  id="sale-heading"
                  className="mx-4 max-w-[41rem] px-4 px-2 text-4xl font-bold font-extrabold tracking-tight 
                   tracking-tight text-gray-900 dark:text-white sm:text-5xl sm:text-7xl  sm:text-6xl md:mt-4 xl:max-w-[43.5rem]
                  "
                >
                  Empower yourself by learning
                </h2>
                {/* <p className="mx-auto mt-4 max-w-xl px-4 text-xl text-gray-600">
                  Over 1500 courses available. A collection of well put together
                  courses by reknown instructors.
                </p> */}
                <Link
                  href="#"
                  className="mt-6 inline-flex w-full rounded-md border border-black  py-3 px-8 font-medium text-black hover:text-sky-500 sm:w-auto"
                >
                  See more
                  <ArrowRight className={'pt-1 font-bold'} />
                </Link>
              </div>
            </div>
          </div>
          <div
            id="mobile-coding-statemnet-text"
            className="mx-4 my-4 mt-64 lg:my-8 lg:mx-0 lg:hidden"
          >
            <div className="sr-only pt-4 pt-10 text-gray-600 dark:text-white   lg:not-sr-only">
              Nasser Snaou
              <time
                dateTime="2022-11-21T00:00:00.000Z"
                className="pl-4 dark:text-gray-400"
              >
                November 21, 2022
              </time>
            </div>
            <div id="learn-to-code-body-mopbile-text" className="">
              <h2 className="headline typography-headline px-4 pt-10 dark:text-slate-100 lg:pt-0 ">
                Wanna learn to code?
                {/* <span className="pl-2 text-sky-600 ">Free</span> */}
              </h2>
              {/* <div className=" hero-headline typography-section-headline text-slate-900 text-gray-900 dark:text-white dark:text-white">
                Learn to Code
              </div> */}
              <div className="px-4 py-2 text-lg  font-bold dark:text-white md:py-4 lg:pt-2">
                A collection of well orginized and simplified courses to get you
                zéro to hero.
              </div>

              <Link
                className="my-4 mx-4 inline-flex justify-center rounded-lg bg-black px-8 py-3  text-sm font-semibold text-white hover:bg-slate-700 dark:bg-white dark:text-black"
                href="/courses"
              >
                <span>
                  Browse Courses Now
                  <span
                    aria-hidden="true"
                    className="hidden text-slate-400 sm:inline"
                  >
                    →
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* </CustomizedContainer> */}
      <section aria-labelledby="sale-heading" id="section-coding-course-photos">
        <div className="overflow-hidden border-b border-red-300 bg-white pt-32 dark:bg-teal-600 sm:pt-14  md:pb-32">
          <div className="bg-black">
            <div className=" max-w-10xl mx-auto ">
              <div className="relative mx-auto max-w-7xl px-4 pt-48 pb-16 sm:px-6 sm:pb-24 lg:px-8">
                <div className="px-8">
                  <h2
                    id="sale-heading"
                    className="text-4xl font-bold tracking-tight text-white md:text-5xl"
                  >
                    Find Something.
                    <br />
                    To learn.
                  </h2>
                  <div className="mt-6 text-base">
                    <Link href="/courses" className="font-semibold text-white">
                      See the site
                      <span aria-hidden="true"> &rarr;</span>
                    </Link>
                  </div>
                </div>

                <div id="course-example-wrapper" className="py- bg-white">
                  <div className="absolute -top-32 left-1/2 -translate-x-1/2 transform sm:top-6 sm:translate-x-0">
                    <div className="ml-24 flex min-w-max space-x-6 sm:ml-3 lg:space-x-8">
                      <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                        <div className="flex-shrink-0">
                          <img
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            src={lady_designer.src}
                            // src={uixu_img1.src}
                            alt=""
                          />
                        </div>

                        <div className="mt-6 flex-shrink-0 sm:mt-0">
                          <img
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            src={uixu_img2.src}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                        <div className="flex-shrink-0">
                          <img
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            // src={lady_designer.src}
                            src={uixu_img1.src}
                            // src={lady_designer.src}
                            // src={uixu_img2.src}
                            alt=""
                          />
                        </div>

                        <div className="mt-6 flex-shrink-0 sm:mt-0">
                          <img
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            // src={uixu_img.src}
                            // src="https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg"
                            src={uixu_img2.src}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                        <div className="flex-shrink-0">
                          <img
                            className="h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            src={uixu_img.src}
                            // src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg"
                            alt=""
                          />
                        </div>

                        <div className="mt-6 flex-shrink-0 sm:mt-0">
                          <img
                            className="z-1  h-64 w-64 rounded-lg object-cover md:h-72 md:w-72"
                            // src={lady_designer.src}
                            src="https://cdn.sanity.io/images/599r6htc/localized/4bdef980a683245a8e218ec905cae8cb0f230829-2120x1000.png?w=514&q=75&fit=max&auto=format&dpr=2"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
})
LearnCodeSection.displayName = 'LearnCodeSection'
export { LearnCodeSection }
