import Image from 'next/image'
import Link from 'next/link'
import podcastImage_old from '@/images/projectImages/podcast/podcastImage.jpeg'
import podcastImage from '@/images/projectImages/podcast/podcast_present_main.png'

import todiList from '@/images/projectImages/to_do_list.jpeg'
import { NextButton } from '../PageCommonPaginators'
import { forwardRef } from 'react'
// const projectPresentationImages = [
//   { title: 'Project1', href: '/images/project', image: podcastImage_old },
//   { title: 'Project2', href: '/images/project', image: projectPresImg1 },
//   { title: 'Project3', href: '/images/project', image: projectPresImg1 },
//   { title: 'Project4', href: '/images/project', image: projectPresImg },
// ]
const LargeDeviveDescription = () => {
  return (
    <div id="todolist-text" className="sr-only md:not-sr-only">
      <div id="totolit" className="flex">
        <h1 class="mg:mt-0 col-start-1 row-start-2 mt-6 mb-10 max-w-[36rem] px-4 px-2 text-4xl font-extrabold tracking-tight text-black dark:text-amber-200 sm:text-7xl sm:text-6xl md:mb-0 md:mt-4  xl:max-w-[55.5rem]">
          Reactive Apps
        </h1>
        <span class="mt-12 inline-flex h-5 items-center  rounded-full bg-yellow-300 px-2 py-0.5 text-sm font-medium dark:bg-sky-300 dark:text-cyan-800">
          Active
        </span>
      </div>

      <div class="mt-4 rounded-md py-2 pb-2">
        <h2 class="headline typography-headline text-slate-10/80 px-4 text-3xl font-medium tracking-tight dark:text-slate-100 dark:text-white">
          That empower and and the enrich the world.
        </h2>
      </div>
      <p class="dark;text-slate-200 px-4text-slate-700 mt-2 mb-4 max-w-2xl py-2 px-4 text-lg dark:text-slate-300 ">
        This app was built with React and Sanity with a modular aproach a
        resuable components.{' '}
        <Link
          class="ml-2 rounded-md bg-slate-100  py-2 px-4 text-base font-bold font-semibold leading-7 text-black hover:text-sky-400 dark:bg-black dark:bg-slate-900/30 dark:text-gray-100 md:pt-2"
          href="/projects#"
        >
          View on GitHub <span aria-hidden="true">→</span>
        </Link>
      </p>
    </div>
  )
}

const SmallDeviveDescription = () => {
  return (
    <div id="todolist-text-SMALL" className="mb-12 px-4 md:sr-only ">
      <h1 class="dark: col-start-1 row-start-2 mt-6  max-w-[36rem]  px-4 px-2 text-5xl text-4xl font-extrabold tracking-tight text-amber-200  text-sky-400 sm:text-7xl sm:text-6xl md:mt-4  xl:max-w-[43.5rem]">
        Reactive Apps
      </h1>
      <div class="mt-0 rounded-md py-2 pb-4">
        <h2 class="px-4 text-4xl   font-bold tracking-tight text-slate-800 dark:text-slate-100 dark:text-white">
          That empower and and the enrich the world.
          <span className="my-4 pt-4 pl-6">
            <NextButton
              text="See Project"
              href="/projects"
              customize="bg-transparent  hover:bg-sky-600"
              textStyle="text-sky-500 text-xl dark:text-sky-500 "
            />
          </span>
        </h2>
      </div>
      {/* <p class="dark;text-slate-200 mt-0 max-w-2xl px-4 py-2  text-lg text-slate-300">
        This app was built with React and Sanity with a modular aproach a
        resuable components.
      </p> */}
    </div>
  )
}

const ProjectSample = forwardRef((props, ref) => {
  console.log('PODCAST-REF', ref)
  return (
    <section id="Podcasts" ref={ref} className="">
      <div
        id="Podcasts"
        ref={ref}
        class="container-children relative mx-auto mb-20  w-full "
      >
        <div>
          <div class="lg:max-w-8xl mx-auto flex flex-col pt-10 md:flex-row md:lg:col-span-5 lg:mx-0 lg:px-8 md:xl:col-span-6 xl:pt-40 ">
            <div
              id="project-smaple-left"
              class="mt-0 max-w-3xl md:mx-4 md:mt-0"
            >
              <Image
                src={podcastImage}
                alt={'podcast-sample-Image'}
                className="rounded-t-xxl podcast-pb-color rounded-t-xl md:rounded-b-md md:pb-2"
              />
              <div
                id="image-desc-mobile"
                className="podcast-footer dark:podcast-footer pb-6  dark:bg-white md:mx-0 md:pb-2"
              >
                <h1 class="col-start-1 row-start-2 max-w-[36rem] px-4 px-2 text-4xl font-extrabold tracking-tight text-black dark:text-amber-200 sm:text-7xl sm:text-6xl md:mt-4  xl:max-w-[43.5rem]">
                  Build to last
                </h1>
                <p class="eyebrow mx-4 ml-4 mt-2 mb-4  text-3xl font-bold text-slate-900/70 hover:text-red-700 active:text-blue-500 dark:text-2xl dark:text-sky-500 dark:hover:text-indigo-400 ">
                  Podcast App / Web{' '}
                  <span className="ml-4">
                    <NextButton
                      text="See Page"
                      href="/podcasts"
                      textStyle="text-white"
                      customize="bg-black text-white dark:bg-transparent hover:bg-black"
                    />
                  </span>
                </p>
                <p class="mt-0 max-w-2xl px-4 px-4   text-lg text-slate-800/90 dark:text-slate-200">
                  This Podcast app is built with React and Sanity with a modular
                  aproach and a simplitisc design concept.
                </p>
                <div class="px-auto xl:items-left relative mt-10 mb-4 flex items-center items-center gap-1 bg-slate-100 py-2 px-4 dark:bg-transparent lg:pr-10 lg:pt-1">
                  <p class=" text-xl text-slate-800/90 dark:text-slate-200">
                    Episode:1
                  </p>
                  <button
                    type="button"
                    class="-400 ml-4 flex items-center rounded-full rounded border border-black bg-slate-900 py-3.5 pt-4 pl-5 pr-3 text-sm font-bold text-black text-white hover:text-red-500 active:text-blue-900 dark:rounded-full dark:border-sky-500 dark:bg-white dark:px-5 dark:py-1 dark:text-black dark:hover:text-sky-600 md:ml-0 md:ml-0 md:ml-10"
                    aria-label="Play episode"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 10 10"
                      fill="none"
                      class="h-5 w-5 fill-current pr-1.5 shadow-lg dark:h-2.5 dark:w-3 dark:pr-0 "
                    >
                      <path d="M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z"></path>
                    </svg>
                    <span
                      class=" sr-only dark:not-sr-only dark:ml-3"
                      aria-hidden="true"
                    >
                      PLAY
                    </span>
                    <div class="flex flex-col items-start"></div>
                  </button>
                  <span
                    aria-hidden="true"
                    class="text-sm font-bold text-slate-300"
                  >
                    |
                  </span>
                  <span
                    class="flex items-center text-sm font-bold leading-6 text-black hover:text-red-700 active:text-blue-500 dark:text-sky-100 dark:hover:text-indigo-400 "
                    aria-label="Show notes for episode 5: Bill Lumbergh"
                    href="/podcasts/5"
                  >
                    Lars amkes everithing clear about setting goals makes
                    everything better
                  </span>
                </div>
                <div class="px-auto xl:items-left relative mt-10 mb-4 flex items-center items-center gap-4 bg-slate-100 py-2 px-4 dark:bg-transparent lg:pr-10 lg:pt-1">
                  <p class=" text-xl text-slate-800/90 dark:text-slate-200">
                    Episode:2
                  </p>
                  <button
                    type="button"
                    class="-400 ml-4 flex items-center rounded-full rounded border border-black bg-slate-900 py-3.5 pt-4 pl-5 pr-3 text-sm font-bold text-black text-white hover:text-red-500 active:text-blue-900 dark:rounded-full dark:border-sky-500 dark:bg-white dark:px-5 dark:py-1 dark:text-black dark:hover:text-sky-600 md:ml-0 md:ml-0 md:ml-10"
                    aria-label="Play episode"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 10 10"
                      fill="none"
                      class="h-5 w-5 fill-current pr-1.5 shadow-lg dark:h-2.5 dark:w-3 dark:pr-0 "
                    >
                      <path d="M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z"></path>
                    </svg>
                    <span
                      class=" sr-only dark:not-sr-only dark:ml-3"
                      aria-hidden="true"
                    >
                      PLAY
                    </span>
                    <div class="flex flex-col items-start"></div>
                  </button>
                  <span
                    aria-hidden="true"
                    class="text-sm font-bold text-slate-300"
                  >
                    |
                  </span>
                  <span
                    class="flex items-center text-sm font-bold leading-6 text-black hover:text-red-700 active:text-blue-500 dark:text-sky-100 dark:hover:text-indigo-400 "
                    aria-label="Show notes for episode 5: Bill Lumbergh"
                    href="/podcasts/5"
                  >
                    Lars amkes everithing clear about setting goals makes
                    everything better
                  </span>
                </div>
                <p class="px-4 pb-4  text-xl text-slate-800/90 dark:text-slate-200">
                  Episode:2
                </p>
              </div>
            </div>
            <div id="project-smaple-right" class="md:pl-3  lg:pl-4 ">
              <LargeDeviveDescription />
              <Image
                src={todiList}
                alt="todo_list_app"
                className="rounded-t-xxl podcast-pb-color rounded-t-xl md:rounded-b-md md:pb-2"
              />
              <div id="podcast-moto" className="sr-only md:not-sr-only ">
                <p class="mt-2 max-w-2xl px-4 px-4 py-2  text-lg text-slate-600  dark:text-slate-200">
                  Build solution that empower people.
                </p>
                <Link
                  class="pt-10 text-lg text-sky-500  dark:text-sky-500 dark:hover:text-sky-400 md:mx-4 "
                  href="/showcase"
                >
                  Desktop / mobile
                  <span class="ml-2 rounded-full bg-sky-600 px-2 py-0.5 text-xs font-medium leading-5 text-white dark:text-sky-100">
                    react-native{' '}
                  </span>
                </Link>
                <div className="pointer-events-none relative z-10  my-4 flex justify-center">
                  <Link
                    className="pointer-events-auto inline-flex justify-center rounded-lg bg-black py-3 px-4 text-sm font-semibold text-white hover:bg-slate-700 dark:bg-white dark:text-black"
                    href="/projects/#podcast"
                  >
                    <span>
                      Show more<span className="sr-only">, Application UI</span>
                    </span>
                  </Link>
                </div>
              </div>
              <SmallDeviveDescription />
              {/* <MediaGallery
              collection={projectPresentationImages}
              galleryTitle={'More Images'}
            /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

ProjectSample.displayName = 'ProjectSample'

export default ProjectSample
