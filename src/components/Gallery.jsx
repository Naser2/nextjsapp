import clsx from 'clsx'
import Link from 'next/link'
import Suitcase from './icons/Suitcase'
import { Properties } from './mdx'
import istaImg1 from '@/images/social/instagram-1.png'
import istaImg2 from '@/images/social/instagram-2.jpeg'
import istaImg3 from '@/images/social/instagram-3.jpeg'
import istaImg4 from '@/images/social/instagram-4.jpg'
import istaImg5 from '@/images/social/instagram-5.jpeg'
import istaImg6 from '@/images/social/instagram-6.avif'
import Image from 'next/image'
import phoneImage from '@/images/projectImages/phone/iphone_personalization__4300bh645z62_large_2x.jpeg'
import phoneVid from '@/images/projectImages/phone/iphone_video_cropd_gif.gif'
import { LandingHeroTabs } from './indexComponents/LandingHeroTabs'
import scrollToSection from '@/lib/scrollToSection'
// import { SocialMediaGalery } from './SocialMediaGalery'

export default function SocialMediaHandle({ className }) {
  return (
    <div
      id="social-media-handles"
      className=" px-auto xl:items-left lg:pt-1g:px-28 relative flex flex items-center items-center items-center items-center gap-4 gap-4 px-8 px-8 pt-0 lg:px-28 lg:pt-1"
    >
      <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className="h-6 w-6 flex-none"
        >
          <path
            d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
            fill="currentColor"
          ></path>
        </svg>
        <span className="ml-2">
          <ul role="list" className=" flex items-center space-x-6">
            <li>
              <Link
                href="#"
                className="flex h-6 w-6 items-center justify-center text-blue-400 hover:text-gray-500"
              >
                <span className="sr-only">Share on Facebook</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex h-6 w-6 items-center justify-center text-orange-600 hover:text-gray-500"
              >
                <span className="sr-only">Share on Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex h-6 w-6 items-center justify-center text-sky-400 hover:text-gray-500"
              >
                <span className="sr-only">Share on Twitter</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </Link>
            </li>
            <li className=" flex">
              <Link
                className="hover:main-blue dark:hover:main-blue group flex text-sm font-medium text-zinc-800 transition dark:text-zinc-200"
                href="https/linkedin.com/nassersanou"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 flex-none fill-blue-500 transition group-hover:fill-blue-500"
                >
                  <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                </svg>
              </Link>
            </li>
            <li className=" flex">
              <Link
                className="hover:main-blue dark:hover:main-blue group flex text-sm font-medium text-zinc-800 transition dark:text-zinc-200"
                href="https/linkedin.com/nassersanou"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6 flex-none fill-blue-500 transition group-hover:fill-blue-500"
                >
                  <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
                </svg>
              </Link>
            </li>
          </ul>
        </span>
      </p>
    </div>
  )
}

export function WorkStatus({ ...props }) {
  const { position, date } = props
  return (
    <div className="mt-1 pt-1">
      <div className="flex items-start space-x-2">
        <div className="hidden md:flex ">
          {/* <Suitcase
          large={false}
          className="dark:secondary-gray-bg-color -mt-2 bg-white"
        /> */}
        </div>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="h-6 w-6 flex-none"
        >
          <path
            d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
            className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
          ></path>
          <path
            d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
            className="stroke-zinc-400 dark:stroke-zinc-500"
          ></path>
        </svg>
        <p className="-ml-10 text-sm font-medium text-gray-500">
          Works as
          <Link href="#" className="px-1 text-slate-100  dark:text-slate-100">
            {position}
          </Link>
          since <time dateTime="2020-08-25"> {date}</time>
        </p>
      </div>
    </div>
  )
}
const PodcastImage = () => {
  const podcastImg = [
    {
      id: 9,
      name: 'Podcast',
      href: '#',
      source: phoneVid,
      imageAlt: 'A podcast desgined for my daugther.',
    },
    // More products...
  ]
  const podcstAspectRatio = 'aspect-w-20 aspect-h-14'
  return (
    <div className="podcast-solo-img">
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 xl:gap-x-8"
      >
        {podcastImg.map((img) => {
          return (
            <li key={img.name} className="relative">
              <div
                className={clsx(
                  img.current
                    ? 'ring-2 ring-indigo-500 ring-offset-2'
                    : 'focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100',
                  `${podcstAspectRatio} group block w-full overflow-hidden rounded-lg bg-gray-100`
                )}
              >
                <Image
                  src={img.source}
                  alt=""
                  className={clsx(
                    img.current ? '' : 'group-hover:opacity-75',
                    'pointer-events-none object-cover'
                  )}
                />
                <button
                  onClick={() => scrollToSection(img.ref)}
                  type="button"
                  className="inset-0 bottom-0 block truncate px-8 pt-4 text-2xl font-bold tracking-tight text-transparent hover:text-yellow-400 dark:text-zinc-100 sm:text-4xl"
                >
                  <span className="">View {img.name}</span>
                </button>
              </div>
              {/* <p className="absolute text-transparent inset-0  bottom-0 px-8 pt-4block truncate text-2xl font-bold tracking-tight hover:text-yellow-400 dark:text-zinc-100 sm:text-4xl">
          {img.name}
        </p> */}
              <p className="pointer-events-none block text-sm font-medium text-gray-500">
                {img.description}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export const Galery = (
  {
    sectionRefs,
    projectsRef,
    aboutRef,
    blogsRef,
    learnToCode,
    podcastRef,
    socialsRef,
    githubRef,
  },
  props
) => {
  const intagramImgs = [
    {
      ref: projectsRef,
      id: 1,
      name: 'Machined',
      href: '#',
      source: istaImg1,
      imageAlt:
        'Black machined steel pen with hexagonal grip and small white logo at top.',
    },
    {
      ref: aboutRef,
      id: 2,
      name: 'About',
      href: '#',
      source: istaImg6,
      imageAlt:
        'Black machined steel pen with hexagonal grip and small white logo at top.',
    },
    {
      ref: projectsRef,
      id: 3,
      name: 'Projects',
      href: '#',
      source: istaImg3,
      imageAlt:
        'Black machined steel pen with hexagonal grip and small white logo at top.',
    },
    {
      ref: blogsRef,
      id: 4,
      name: 'Blogs',
      href: '#',
      source: istaImg4,
      imageAlt:
        'Black machined steel pen with hexagonal grip and small white logo at top.',
    },
    {
      ref: learnToCode,
      id: 5,
      name: 'Learn Code',
      href: '#',
      source: istaImg5,
      imageAlt:
        'Black machined steel pen with hexagonal grip and small white logo at top.',
    },
    {
      ref: socialsRef,
      id: 6,
      name: 'Social',
      href: '#',
      source: phoneImage,
      imageAlt:
        'Black machined steel pen with hexagonal grip and small white logo at top.',
    },
    // More products...
  ]

  // console.log('GaleryCUSTOMIZE BAN PROP', projectsRef)
  return (
    <>
      <section
        id="navigation-gallery"
        className="xl:mx-34 mt-8 lg:mx-20  lg:pb-12 "
        aria-labelledby="gallery-heading"
      >
        {/* <LandingHeroTabs {...props}/> */}
        {/* <div>
          <img
            className="h-32 w-full object-cover lg:h-48"
            src="https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1950&amp;q=80"
            alt=""
          />
        </div> */}
        <div className="max-w-10xl mx-3 lg:my-4 lg:mt-8  lg:pb-12 ">
          {/* <div
            className="wax-w-2xl absolute -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:left-1/2 md:ml-20 md:ml-36 lg:-inset-y-px"
            aria-hidden="true"
          ></div> */}
          {/* <div className="OTHE">OTHER CONTENT </div> */}
          <div role="list" className="inline">
            <ul
              role="list"
              className=" grid grid-cols-2 gap-x-4 gap-y-4 sm:gap-x-6 md:gap-y-8 md:gap-y-8 md:gap-x-4 xl:grid-cols-3  xl:gap-x-8"
            >
              {intagramImgs.map((img) => {
                return (
                  <li key={img.name} className="relative">
                    <div
                      className={clsx(
                        img.current
                          ? 'ring-2 ring-indigo-500 ring-offset-2'
                          : 'focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100',
                        'group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100'
                      )}
                    >
                      <Image
                        src={img.source}
                        alt=""
                        className={clsx(
                          img.current ? '' : 'group-hover:opacity-100',
                          'pointer-events-none object-cover'
                        )}
                      />
                      <button
                        onClick={() => scrollToSection(img.ref)}
                        type="button"
                        // className="block h-64 truncate  px-8 pt-4 text-xl font-bold tracking-tight text-white  opacity-10 hover:text-white hover:opacity-100  dark:text-black  sm:text-xl md:text-transparent"
                        className="md mt-16 -ml-6 block flex h-64 px-8 pt-4 text-sm  font-bold tracking-tight  text-white opacity-10 hover:text-white hover:opacity-100 dark:text-black sm:text-xl  md:-ml-0 md:-mt-0  md:truncate  md:text-xl md:text-transparent"
                      >
                        <span className="rounded-md bg-black px-4 py-1 dark:bg-white md:rounded-full">
                          View {img.name}
                        </span>
                      </button>
                    </div>
                    {/* <p className="absolute text-transparent inset-0  bottom-0 px-8 pt-4block truncate text-2xl font-bold tracking-tight hover:text-yellow-400 dark:text-zinc-100 sm:text-4xl">
                  {img.name}
                </p> */}
                    <p className="pointer-events-none block text-sm font-medium text-gray-500">
                      {img.description}
                    </p>
                  </li>
                )
              })}
            </ul>
            {/* <SocialMediaGalery/> */}
            {/* <PodcastImage/> */}
          </div>
        </div>
      </section>
    </>
  )
}

const podcast = [
  {
    id: 7,
    name: 'Podcast',
    href: '#',
    desctription:
      'I build this podcast app for my dauter to connect with friends and share stories',
  },
  {
    id: 7,
    name: 'Podcast',
    href: '#',
    source: phoneVid,
    imageAlt: 'A podcast desgined for my daugther.',
  },
  // More products...
]
export const Podcast = (props) => {
  return (
    <>
      <section
        id="podcast"
        className="max-h-xl md:mx-23
        relative my-4 max-w-7xl pb-4 md:my-24 lg:mx-20 lg:py-0 lg:pb-12"
        aria-labelledby="gallery-heading"
      >
        <ul role="list" className="ml-0 block md:inline-flex xl:ml-64">
          {podcast.map((obj) => {
            return !obj.source ? (
              <li
                id="iphone-video"
                className="podcast-details max-w-xl lg:pr-8"
              >
                <div className="xl:py-34 px-6 py-10  lg:px-0  lg:py-20  ">
                  <p className="eyebrow-red  mt-2 mb-4">Podcast App</p>
                  <h2 className="headline typography-headline dark:text-slate-100">
                    {' '}
                    Bulding a Podcast App
                    <br className="small text-sky-500" /> With React.
                  </h2>
                  <p className="typography-news-copy pt-4 dark:text-slate-300/50">
                    When you’re building a website for a company as ambitious as
                    NasDesign you ne was written in Go. Go is a wonderful
                    program...
                  </p>
                  <p className="read-time blue-3 mt-4">
                    Read more in projects section
                  </p>
                </div>
                {/* <p className=" px-8 pt-4block text-2xl font-bold tracking-tight hover:text-yellow-400 dark:text-zinc-100 sm:text-4xl">
               {obj.name}
                </p>
                <p className="px-8 pt-4block  text-2xl font-bold tracking-tight hover:text-yellow-400 dark:text-zinc-100 sm:text-4xl">
                  {obj.desctription}
                </p> */}
              </li>
            ) : (
              <li
                id="iphone-video"
                key={obj.name}
                className="relative bg-transparent"
              >
                <div
                  className={clsx(
                    'iphone-video overflow-hidden rounded-lg bg-transparent dark:bg-transparent'
                  )}
                >
                  <Image
                    src={obj.source}
                    alt=""
                    className={clsx(
                      'iphone-video pointer-events-none  object-cover md:mt-24'
                    )}
                  />
                </div>
              </li>
            )
          })}
        </ul>
      </section>
    </>
  )
}
