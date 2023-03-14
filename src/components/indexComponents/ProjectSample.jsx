import Image from 'next/image'
import Link from 'next/link'
import podcastImage_old from '@/images/projectImages/podcast/podcastImage.jpeg'
import podcastImage from '@/images/projectImages/podcast/podcast_present_main.png'
import { Galery } from '../Gallery'
import { MediaGallery } from '../SocialMediaGallery'
import todiList from '@/images/projectImages/to_do_list.jpeg'
import { NextButton } from '../PageCommonPaginators'
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
        <h1 class="col-start-1 row-start-2 max-w-[36rem] px-4 px-2 text-4xl font-extrabold tracking-tight text-amber-200 sm:text-7xl sm:text-6xl md:mt-4  xl:max-w-[55.5rem]">
          Reactive Apps
        </h1>
        <span class="mt-12 inline-flex h-5  items-center rounded-full bg-sky-300 px-2 py-0.5 text-sm font-medium text-cyan-800">
          Active
        </span>
      </div>

      <div class="mt-4 rounded-md py-2 pb-4">
        <h2 class="headline typography-headline px-4 text-3xl font-medium tracking-tight text-slate-100/80 dark:text-slate-100 dark:text-white">
          That empower and and the enrich the world.
        </h2>
      </div>
      <p class="dark;text-slate-200 mt-2 mb-4 max-w-2xl px-4  py-2 text-lg text-slate-300">
        This app was built with React and Sanity with a modular aproach a
        resuable components.{' '}
        <a
          class="ml-4 rounded-md bg-slate-900/30 py-2 px-4 text-base font-semibold leading-7 text-gray-100 hover:text-sky-400"
          href="/projects#"
        >
          View on GitHub <span aria-hidden="true">→</span>
        </a>
      </p>
    </div>
  )
}

const SmallDeviveDescription = () => {
  return (
    <div id="todolist-text-SMALL" className="md:sr-only">
      <h1 class="col-start-1 row-start-2 max-w-[36rem] px-4 px-2 text-4xl font-extrabold tracking-tight text-amber-200 sm:text-7xl sm:text-6xl md:mt-4  xl:max-w-[43.5rem]">
        Reactive Apps
      </h1>
      <div class="mt-4 rounded-md py-2 pb-4">
        <h2 class="headline typography-headline px-4  text-3xl font-medium tracking-tight text-slate-100/80 dark:text-slate-100 dark:text-white">
          That empower and and the enrich the world.
        </h2>
      </div>
      <p class="dark;text-slate-200 mt-2 max-w-2xl px-4 py-2  text-lg text-slate-300">
        This app was built with React and Sanity with a modular aproach a
        resuable components.
      </p>
    </div>
  )
}
export const ProjectSample = () => {
  return (
    <div
      id="Projects-customized-container-children"
      class="container-children relative mx-auto w-full "
    >
      <div>
        <div class="lg:max-w-8xl mx-auto flex flex-col pt-10 md:flex-row md:lg:col-span-5 lg:mx-0 lg:px-8 md:xl:col-span-6 xl:pt-40 ">
          {/* <div
            id="intro-name-mobile"
            class="mx-4 mt-4 max-w-3xl md:mt-0 lg:sr-only"
          >
            <h1 class="col-start-1 row-start-2 -mx-4 mt-4 max-w-[36rem]  px-4 px-2 text-4xl font-extrabold tracking-tight text-white text-slate-900 sm:mx-0 sm:text-7xl sm:text-6xl md:pt-10 lg:col-span-7 lg:mt-0 xl:col-span-6  xl:max-w-[43.5rem] ">
              Miras Project
            </h1>
            <p class="eyebrow-red mt-2  mb-4 text-sky-400 hover:text-red-700 active:text-blue-500 dark:text-sky-500 dark:hover:text-indigo-400 md:mx-6 ">
              {' '}
              Podcast App / Web{' '}
            </p>
          </div> */}

          {/* <h1 className="absolute top-44 bg-black py-0 px-2 text-5xl font-bold text-slate-400">
            Episodes
            <h4 className="text-wheat dark:eyebrow-red absolute top-44 bg-black py-0 px-2 text-xl font-bold">
              By Nasser Sanou
            </h4>
          </h1>
          <h4 className="text-wheat dark:eyebrow-red top-34 absolute bg-black py-0 px-2 text-xl font-bold">
            By Bab M
          </h4>
          <h4 className="text-wheat dark:eyebrow-red top-34 absolute bg-black py-0 px-2 text-xl font-bold">
            Lars Godin
          </h4>
          <h4 className="text-wheat dark:eyebrow-red absolute top-24 bg-black py-0 px-2 text-xl font-bold shadow-md">
            Jenifer Sial
          </h4>
          <h4 className="text-wheat dark:eyebrow-red absolute top-14 bg-black py-0 px-2 text-xl font-bold shadow-md">
            Jenifer Sial
          </h4> */}
          <div id="project-smaple-left" class=" mt-0 max-w-3xl md:mx-4 md:mt-0">
            {/* <h1
              class="col-start-1 row-start-2 -mx-4 my-4 mt-0 max-w-[16rem] px-2  text-center text-4xl font-extrabold tracking-tight text-white text-slate-900 sm:mx-0 
            sm:text-5xl md:my-4  md:max-w-[36rem] md:pt-10 lg:col-span-7  lg:mt-0 xl:col-span-6 xl:max-w-[43.5rem] "
            >
              Projects
            </h1> */}
            <Image
              src={podcastImage}
              alt={'podcast-sample-Image'}
              className="rounded-t-xxl podcast-pb-color rounded-t-xl md:rounded-b-md md:pb-2"
            />
            <div
              id="image-desc-mobile"
              className="podcast-footer mx-2 bg-slate-800 px-2 pb-6 md:mx-0 md:pb-2"
            >
              <h1 class="col-start-1 row-start-2 max-w-[36rem] px-4 px-2 text-4xl font-extrabold tracking-tight text-amber-200 sm:text-7xl sm:text-6xl md:mt-4  xl:max-w-[43.5rem]">
                Build at last
              </h1>
              <p class="eyebrow-red mx-4  ml-4 mt-2 mb-4 hover:text-red-700 active:text-blue-500 dark:text-sky-500 dark:hover:text-indigo-400 ">
                Podcast App / Web{' '}
                <span className="ml-4">
                  <NextButton
                    text="See Page"
                    href="/podcasts"
                    customize="bg-transparent hover:bg-black"
                  />
                </span>
              </p>
              <p class="mt-2 max-w-2xl px-4 px-4 py-2  text-lg text-slate-200 text-slate-300/90">
                MiraProjects was built with React and Sanity with a modular
                aproach and a simplitisc design concept.
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
              <p class="mt-2 max-w-2xl px-4 px-4 py-2  text-lg text-slate-200 text-slate-300/90">
                Build solution that empower people.
              </p>
              <a
                class="pt-10 text-sky-500 dark:hover:text-sky-400 md:mx-4 "
                href="/showcase"
              >
                Desktop / mobile
                <span class="ml-2 rounded-full bg-sky-600 px-2 py-0.5 text-xs font-medium leading-5 text-sky-600 dark:text-sky-100">
                  react-native{' '}
                </span>
              </a>
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
  )
}
