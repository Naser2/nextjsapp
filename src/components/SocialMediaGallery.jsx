import clsx from 'clsx'
import Link from 'next/link'
import istaImg1 from '@/images/social/instagram-1.png'
import istaImg3 from '@/images/social/instagram-3.jpeg'
import istaImg4 from '@/images/social/instagram-4.jpg'
import istaImg5 from '@/images/social/instagram-5.jpeg'
import istaImg6 from '@/images/social/instagram-6.avif'
import Image from 'next/image'
import phoneImage from '@/images/projectImages/phone/iphone_personalization__4300bh645z62_large_2x.jpeg'

import scrollToSection from '@/lib/scrollToSection'
export const intagramImgs = [
  {
    link: '/',
    id: 1,
    name: 'Intagram',
    hlink: '#',
    source: istaImg1,
    imageAlt:
      'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  {
    link: '/',
    id: 2,
    name: 'FB',
    hlink: '#',
    source: istaImg6,
    imageAlt:
      'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  {
    link: '/',
    id: 3,
    name: 'LinkedIn',
    hlink: '#',
    source: istaImg3,
    imageAlt:
      'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  {
    link: '/',
    id: 4,
    name: 'WhatsApp',
    hlink: '#',
    source: istaImg4,
    imageAlt:
      'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  {
    link: '/',
    id: 5,
    name: 'GitHub',
    hlink: '#',
    source: istaImg5,
    imageAlt:
      'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  {
    link: '/',
    id: 6,
    name: 'GitHubb',
    hlink: '#',
    source: phoneImage,
    imageAlt:
      'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  // More products...
]

// export const SSocialMediaGallery = (
//   {
//     sectionRefs,
//     projectsRef,
//     aboutRef,
//     blogsRef,
//     learnToCode,
//     podcastRef,
//     socialsRef,
//     collection,
//     galleryTitle,
//     //  props,
//     githubRef,
//   },
//   props
// ) => {
//   // console.log('Galery PROP', galleryTitle)
//   return (
//     <>
//       <section className=" " aria-labelledby="gallery-heading">
//         {/* <LandingHeroTabs {...props}/> */}
//         <div role="list" className="dark:highlight-white/10 rounded-t-xl">
//           {/* dark:border-indigo-500/20 */}
//           <div className="text-md mb-2 border-b border-indigo-500 py-1 pr-1">
//             {galleryTitle}
//           </div>
//           <ul role="list" className="grid grid-cols-3 gap-x-1 gap-y-1 ">
//             {collection.map((img) => {
//               return (
//                 <li key={img.name} className="relative">
//                   <div
//                     className={clsx(
//                       img.current
//                         ? 'ring-2 ring-indigo-500 ring-offset-2'
//                         : 'focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100',
//                       'group aspect-w-14 aspect-h-14 block w-full overflow-hidden  rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100'
//                     )}
//                   >
//                     <Image
//                       src={img.source}
//                       alt=""
//                       className={clsx(
//                         img.current ? '' : 'group-hover:opacity-75',
//                         'pointer-events-none object-cover'
//                       )}
//                     />
//                     {img.link && (
//                       <button
//                         onClick={() => scrollToSection(img.link)}
//                         type="button"
//                         className="pt-4block inset-0  bottom-0 truncate px-8 text-2xl font-bold tracking-tight text-transparent hover:text-yellow-400 dark:text-zinc-100 sm:text-4xl"
//                       ></button>
//                     )}
//                   </div>
//                 </li>
//               )
//             })}
//           </ul>
//         </div>
//       </section>
//     </>
//   )
// }

import MailIcon from '@/components/icons/MailIcon'
import { ButtonRoundedMd, CommomButtonMd } from './Button'
import React from 'react'
// const Newsletter = React.forwardRef(() => {
//   return (
//     <form
//       action="/thank-you"
//       className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
//     >
//       <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
//         <MailIcon className="h-6 w-6 flex-none" />
//         <span className="ml-3">Stay up to date</span>
//       </h2>
//       <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
//         Get notified when I publish something new, and unsubscribe at any time.
//       </p>
//       <div className="mt-6 flex">
//         <input
//           type="email"
//           placeholder="Email address"
//           aria-label="Email address"
//           required
//           className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
//         />
//         <Button type="submit" className="ml-4 flex-none">
//           Join
//         </Button>
//       </div>
//     </form>
//   )
// })

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-newsletter.jpg'

const SocialMediaGallery = React.forwardRef(
  ({
    socialsRef,
    collection,
    galleryTitle,
    galleryTitleUndeline,
    galleryMessage = '',
  }) => {
    if (!collection) {
      alert('SocialMediaGallery: Please PAss a Collection to render')
    }
    const borderTopGray =
      'dark:bg-tansparent -my-4 grid grid-cols-3 gap-x-1 gap-y-1 border-t border-gray-300 px-3 py-4'
    const galleryTitleStyle =
      'gallery-title underline-red text-md mb-4 flex border-b border-indigo-500 py-1 pr-1 font-bold dark:text-white'
    return (
      <section
        id={`social-media-gallery-${galleryTitle}`}
        aria-label="Newsletter"
        link={socialsRef}
        className={
          'dark:crisp-black max-w-lg rounded-sm bg-gray-100 md:mx-2 md:mt-1  md:rounded-lg lg:px-0'
        }
      >
        <Container className="mx-0 rounded-sm px-4  pt-2 sm:px-0 md:rounded-lg lg:mt-8 lg:px-6 lg:px-2 lg:pt-4 lg:pb-8">
          <div role="list" className="dark:highlight-white/10 rounded-t-xl">
            {/* dark:border-indigo-500/20 */}
            <div className={clsx(galleryTitleUndeline, galleryTitleStyle)}>
              {galleryTitle}
            </div>
            <ul
              role="list"
              className={[
                '-my-4 grid grid-cols-3 gap-x-4 gap-y-1 border-t border-gray-300 px-3 py-4',
              ]}
            >
              {collection.map((img) => {
                return (
                  <li key={img.name} className="relative">
                    <div
                      className={clsx(
                        img.current
                          ? 'ring-2 ring-indigo-500 ring-offset-2'
                          : 'focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100',
                        'group aspect-w-14 aspect-h-14 block w-full overflow-hidden  rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100'
                      )}
                    >
                      <Image
                        src={img.source ?? img}
                        alt=""
                        className={clsx(
                          img.current ? '' : 'group-hover:opacity-75',
                          'pointer-events-none object-cover'
                        )}
                      />
                      {img.link && (
                        <button
                          onClick={() => scrollToSection(img.link)}
                          type="button"
                          className="pt-4block inset-0  bottom-0 truncate px-8 text-2xl font-bold tracking-tight text-transparent hover:text-yellow-400 dark:text-zinc-100 sm:text-4xl"
                        ></button>
                      )}
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
          {galleryMessage && (
            <p className="sr-only tracking-tight text-black dark:text-slate-300 md:not-sr-only md:mt-4 md:px-4 md:pb-4 md:pb-0  md:text-lg xl:hidden">
              {galleryMessage}
            </p>
          )}
        </Container>
      </section>
    )
  }
)

SocialMediaGallery.displayName = 'SocialMediaGallery'

export default SocialMediaGallery

export const MediaGallery = ({
  socialsRef,
  collection,
  galleryTitle,
  galleryTitleUndeline,
  galleryMessage = '',
}) => {
  if (!collection) {
    alert('SocialMediaGallery: Please PAss a Collection to render')
  }
  const borderTopGray =
    'dark:bg-tansparent -my-4 grid grid-cols-3 gap-x-1 gap-y-1 border-t border-gray-300 px-3 py-4'
  const galleryTitleStyle =
    'gallery-title underline-red text-md mb-4 flex border-b border-indigo-500 py-1 pr-1 font-bold dark:text-white'
  return (
    <section
      id={`social-media-gallery-${galleryTitle}`}
      aria-label="Newsletter"
      link={socialsRef}
      className={
        'dark:crisp-black max-w-lg rounded-sm bg-gray-100 md:mx-2 md:mt-1  md:rounded-lg lg:px-0'
      }
    >
      <Container className="mx-0 rounded-sm px-4  pt-2 sm:px-0 md:rounded-lg lg:mt-8 lg:px-6 lg:px-2 lg:pt-4 lg:pb-8">
        <div role="list" className="dark:highlight-white/10 rounded-t-xl">
          {/* dark:border-indigo-500/20 */}
          <div className={clsx(galleryTitleUndeline, galleryTitleStyle)}>
            {galleryTitle}
          </div>
          <ul
            role="list"
            className={[
              '-my-4 grid grid-cols-3 gap-x-4 gap-y-1 border-t border-gray-300 px-3 py-4',
            ]}
          >
            {collection.map((img) => {
              return (
                <li key={img.name} className="relative">
                  <div
                    className={clsx(
                      img.current
                        ? 'ring-2 ring-indigo-500 ring-offset-2'
                        : 'focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100',
                      'group aspect-w-14 aspect-h-14 block w-full overflow-hidden  rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100'
                    )}
                  >
                    <Image
                      src={img.source ?? img}
                      alt={img}
                      width={img.width ?? 'auto'}
                      height={img.height ?? 'auto'}
                      className={clsx(
                        img.current ? '' : 'group-hover:opacity-75',
                        'pointer-events-none object-cover'
                      )}
                    />
                    {img.link && (
                      <button
                        onClick={() => scrollToSection(img.link)}
                        type="button"
                        className="pt-4block inset-0  bottom-0 truncate px-8 text-2xl font-bold tracking-tight text-transparent hover:text-yellow-400 dark:text-zinc-100 sm:text-4xl"
                      ></button>
                    )}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
        {galleryMessage && (
          <p className="sr-only tracking-tight text-black dark:text-slate-300 md:not-sr-only md:mt-4 md:px-4 md:pb-4 md:pb-0  md:text-lg xl:hidden">
            {galleryMessage}
          </p>
        )}
      </Container>
    </section>
  )
}
