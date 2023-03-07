import Head from 'next/head'

import { Card } from '@/components/Card'
import Link from 'next/link'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { forwardRef } from 'react'
import { GridPattern } from '@/components/GridPattern'
import { ChatBubbleIcon } from '@/components/icons/ChatBubbleIcon'
import Image from 'next/image'
import Image1 from '@/images/courseIndexImages/awsImage.jpeg'
import resolutions from '@/images/blogsImages/resolution_keep.png'
import office from '@/images/blogsImages/office.png'
import work from '@/images/blogsImages/work_space.png'
import author from '@/images/nas_about.png'
import BlackNewYorkers from '@/images/blogsImages/black-New-yorkers.webp'
import { HeroPattern } from '@/components/HeroPattern'
import { Container } from '@/components/PodcastComponents/Container'

let BlogSamples = [
  {
    image: BlackNewYorkers,
    author: { name: 'Nasser Sanou', href: '/about', image: author },
    href: 'blogs/why-black-families-are-leaving',
    date: '2023-01-02',
    title:
      'Why Black Families Are Leaving New York, and What It Means for the City',
    description: 'Black children in particular are disappearing from the city.',
    longDescription:
      'Athenia Rodney is a product of the upward mobility New York City once promised Black Americans. She grew up in mostly Black neighborhoods in Brooklyn, graduated from public schools and attended a liberal arts college on a full scholarship. She went on to start her own event-planning business in the city. But as Mrs. Rodney’s own family grew, she found herself living in a cramped one-bedroom rental, where her three children shared a bunk bed in the living room. It was hard to get them into programs that exposed them to green spaces or swim classes. As she scrolled through friends’ social media posts showing off trampolines in spacious backyards in Georgia, the solution became clearer: Leave.',
    type: 'social',
    cta: 'read',
    image: Image1,
    imageDescription:
      'Athenia Rodney at her new home in Snellville, Ga., with her  three children...',
    icon: ChatBubbleIcon,
    themeColor: '-red-400',
    tag: {
      name: 'Article',
      color:
        'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-orange-100 text-orange-800',
    },
  },
  {
    author: { name: 'Nasser Sanou', href: '/about', image: author },
    href: 'blogs/introducing-animaginary',
    date: '2023-01-02',
    title: 'Introducing Animaginary: High performance web animations',
    description:
      'When you’re building a website for a company as ambitious as NasDesign you ne ...',
    type: 'tech',
    cta: 'Watch video',
    image: Image1,
    icon: ChatBubbleIcon,
    themeColor: '-pink-400',
    tag: {
      name: 'Article',
      color:
        'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-orange-100 text-orange-800',
    },
  },
  {
    author: { name: 'Nasser Sanou', href: '/about', image: author },
    href: 'blogs/resolutions-youll-keep',
    date: '2022-09-02',
    title:
      'Resolution made a list of ambitious resolutions, only to ditch them a few weeks later?',
    description:
      'They say that if you’re not embarassed by your first version, you’re doing it wrong. Well...',
    cta: 'Watch video',
    image: resolutions,
    icon: ChatBubbleIcon,
    themeColor: '-indigo-400',
    tag: {
      name: 'Video',
      color:
        'py-0.2 inline-flex items-center rounded-full bg-indigo-100 px-3 text-sm font-medium text-indigo-800',
    },
  },
  {
    author: { name: 'Nasser Sanou', href: '/about', image: author },
    href: 'blogs/rewriting-the-cosmos-kernel-in-rust',
    date: '2022-07-14',
    title: 'Rewriting the cosmOS kernel in Rust',
    description:
      'When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language, but it’s been a while....',
    type: 'tech',
    cta: 'Watch video',
    image: office,
    icon: ChatBubbleIcon,
    themeColor: '-teal-400',
    tag: {
      name: 'Inspirational',
      color:
        'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-teal-100 text-teal-800',
    },
  },
  {
    author: { name: 'Nasser Sanou', href: '/about', image: author },
    href: '#',
    event: 'music',
    date: '2022-09-02',
    title: 'Lessons learned from our first product recall',
    description:
      'They say that if you’re not embarassed by your first version, you’re doing it wrong. W...',
    type: 'life-promises',
    cta: 'Watch video',
    image: work,
    icon: ChatBubbleIcon,
    themeColor: '-teal-400',
    tag: {
      name: 'Tech',
      color:
        'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800',
    },
  },
]
function CardIcon({ icon: Icon }) {
  return (
    <div className="dark:bg-white/7.5 dark:ring-white/15 flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400">
      <Icon className="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400" />
    </div>
  )
}

function ResourceIcon({ icon: Icon }) {
  return (
    <div className="ring- dark:bg-white/7.5 dark:ring-white/15 flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:group-hover:bg-emerald-300/10 dark:group-hover:ring-emerald-400">
      <Icon className="h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-emerald-300/10 dark:group-hover:stroke-emerald-400" />
    </div>
  )
}

function BlogPattern({ mouseX, mouseY, ...gridProps }) {
  let maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`
  let style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="dark:fill-white/1 dark:stroke-white/2.5 absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5"
          {...gridProps}
        />
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#D7EDEA] to-[#F4FBDF] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#303428]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="dark:fill-white/2.5 absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:stroke-white/10"
          {...gridProps}
        />
      </motion.div>
    </div>
  )
}
function MobileBlog({ sample }) {
  return (
    <article
      className="person-preview CommunityPersonPreview_twoColumn__Qwbfa relative  mx-4 my-2 flex rounded-md bg-white "
      data-focused="false"
    >
      <div className="CommunityPersonPreview_info__DL5Hv most_read_blog_mobile_content relative mt-0 ">
        <h3 className="CommunityPersonPreview_name__RPUqp shared_fg1__gLzCo shared_header6__Hr7DT shared_header__9ehtA lg:not-truncate truncate">
          {sample.title}
        </h3>
        {/* <h3 className="CommunityPersonPreview_name__RPUqp shared_fg1__gLzCo shared_header6__Hr7DT shared_header__9ehtA hidden overflow-hidden lg:flex">
          {sample.title}
        </h3> */}
        <p className="CommunityPersonPreview_headline__snZaD shared_text3__svfyZ shared_fg2__lqk6z -mt-2 truncate ">
          {sample.description}
        </p>
        <div>
          <div className="CommunityPersonPreview_location__cdE2S">
            {/* <svg
              data-sanity-icon="pin"
              width="1em"
              height="1em"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5 10.5C6.5 7 9 4.5 12.5 4.5C16 4.5 18.5 7 18.5 10.5C18.5 14 15.5 17.5 12.5 20.5C9.5 17.5 6.5 14 6.5 10.5Z"
                stroke="currentColor"
                strokeWidth="1.2"
              ></path>
              <path
                d="M14 10.5C14 11.3284 13.3284 12 12.5 12C11.6716 12 11 11.3284 11 10.5C11 9.67157 11.6716 9 12.5 9C13.3284 9 14 9.67157 14 10.5Z"
                stroke="currentColor"
                strokeWidth="1.2"
              ></path>
            </svg> */}
            <span className="visually-hidden mb-2 -mt-2 ">{sample.date}</span>{' '}
            {sample.readingTime}
          </div>
        </div>
      </div>
      <div className="CommunityPersonPreview_photoWrapper__LN7Ly">
        <div
          className="CommunityPersonPreview_photo__ztqTs Image_root__GJXWR  rounded-lg"
          data-has-aspect="true"
          className="--aspect-ratio:1; --source-width:1200px;"
        >
          <picture>
            <Image
              src={`${sample.image.src}?rect=160,53,691,691&amp;w=320&amp;h=320&amp;fit=crop&amp;auto=format`}
              alt="Auth's photo"
              loading="lazy"
              width="320"
              height="320"
              sizes="96px"
              className="Image_img__m9RSC  most_read_blog_mobile_image  border-l object-cover"
            />
          </picture>
          <noscript></noscript>
        </div>
      </div>
      <a
        className="CommunityPersonPreview_link__vTot1 sr-only"
        href="/exchange/community/kmelve"
      >
        <span className="visually-hidden">Visit author's profile</span>{' '}
      </a>
    </article>
  )
}
function Blog({ sample }) {
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function onMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  // console.log('BLOG', sample)

  return (
    <div
      key={sample.title}
      onMouseMove={onMouseMove}
      className="dark:bg-white/2.5 group relative flex flex flex-col overflow-hidden  rounded-lg  bg-white  shadow-lg transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:hover:shadow-black/5 md:rounded-sm"
    >
      <div className="flex-shrink-0">
        <BlogPattern {...sample.pattern} mouseX={mouseX} mouseY={mouseY} />
        <Image
          href={sample.href}
          src={sample.image}
          alt="Model wearing plain black basic tee."
          className="md:rounded-t-0 h-48 w-full  object-cover"
        />
        {/* <img className="h-48 w-full object-cover" src={sample.image} alt="" /> */}
        <a
          href="#"
          className="inline-block border-t border-yellow-300 bg-slate-700 py-1"
        >
          <span
            className={[
              sample.tag
                ? `py-0.2 inline-flex items-center rounded-full  px-3 text-sm font-medium text${sample.themeColor} } mr-2`
                : '',
            ]}
          >
            {sample.tag ? sample.tag.name : 'Blog'}
          </span>
        </a>
      </div>
      {/* <a href="#" className="black-2-bg inline-block py-4">
      <span
            className={[
              sample.tag
                ? `py-0.2 inline-flex items-center rounded-full  px-3 text-sm font-medium text${sample.themeColor} bg${sample.themeColor} mr-2`
                : '',
            ]}
          >
            {sample.tag ? sample.tag.name : 'Blog'}
          </span>
        <span
          className={[
            sample.tag
              ? `py-0.2 inline-flex items-center rounded-full  px-3 text-sm font-medium text${sample.themeColor} bg${sample.themeColor} mr-2`
              : '',
          ]}
        >
          {sample.tag ? sample.tag.name : 'Blog'}
        </span>
        <span
          className={
            sample.tag
              ? sample.tag.color
              : 'py-0.2 inline-flex items-center rounded-full bg-indigo-100 px-3 text-sm text-sm font-medium font-medium text-indigo-600 text-indigo-800'
          }
        >
          {sample.tag ? sample.tag.name : 'Blog'}
        </span>
      </a> */}
      <div className="flex flex-1 flex-col justify-between">
        <div id="blog-card-body" className="bg-white px-6 py-4">
          {' '}
          <div className="flex-1">
            <p className="text-sm font-medium text-indigo-600">
              <a href={sample.href} className="hover:underline">
                {sample.name}
              </a>
            </p>
            <a href={sample.href} className="mt-2 block">
              <p className="commom-blog-card-title-typography text-xl font-semibold text-gray-900 ">
                {sample.title}
              </p>
              {/* <p className="mt-3 text-base text-gray-500">
                {sample.description}
              </p> */}
            </a>
          </div>
        </div>

        <div className="mt-0 flex items-center bg-gray-100 px-6 py-4">
          <div className="flex-shrink-0">
            <a href={sample.author.href}>
              <span className="sr-only">{sample.author.name}</span>
              <Image
                className="h-10 w-10 rounded-full md:rounded-sm"
                src={sample.author.image}
                alt="the author image"
              />
            </a>
          </div>
          {/* <div className="flex-shrink-0">
      <a href={sample.author.href}>
        <span className="sr-only">{sample.author.name}</span>
        <img className="h-10 w-10 rounded-full" src={sample.author.image} alt="" />
      </a>
    </div> */}

          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
              <a href={sample.author.href} className="hover:underline">
                {sample.author.name}
              </a>
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={sample.dateTime}>{sample.date}</time>
              <span aria-hidden="true">&middot;</span>
              <span>{sample.readingTime} read</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MainBlog() {
  let blogSample = BlogSamples[0]
  return (
    <div className="not-prose grid grid-cols-1 gap-4 border-t  border-zinc-900/5 bg-black dark:border-white/5  dark:bg-white sm:grid-cols-2 lg:mt-4 lg:pt-10 xl:grid-cols-2">
      <div className="main-blog-left px-0 lg:px-4 ">
        <a className="" href="/blog/behind-the-feature-find-and-replace/">
          <div className="">
            <img
              src="https://cdn.sanity.io/images/599r6htc/localized/4bdef980a683245a8e218ec905cae8cb0f230829-2120x1000.png?rect=0,1,2120,998&amp;w=514&amp;h=242&amp;q=75&amp;fit=max&amp;auto=format"
              srcSet="https://cdn.sanity.io/images/599r6htc/localized/4bdef980a683245a8e218ec905cae8cb0f230829-2120x1000.png?w=514&amp;q=75&amp;fit=max&amp;auto=format&amp;dpr=0.5 257w,https://cdn.sanity.io/images/599r6htc/localized/4bdef980a683245a8e218ec905cae8cb0f230829-2120x1000.png?w=514&amp;q=75&amp;fit=max&amp;auto=format&amp;dpr=0.75 386w,https://cdn.sanity.io/images/599r6htc/localized/4bdef980a683245a8e218ec905cae8cb0f230829-2120x1000.png?w=514&amp;q=75&amp;fit=max&amp;auto=format 514w,https://cdn.sanity.io/images/599r6htc/localized/4bdef980a683245a8e218ec905cae8cb0f230829-2120x1000.png?w=514&amp;q=75&amp;fit=max&amp;auto=format&amp;dpr=1.5 771w,https://cdn.sanity.io/images/599r6htc/localized/4bdef980a683245a8e218ec905cae8cb0f230829-2120x1000.png?w=514&amp;q=75&amp;fit=max&amp;auto=format&amp;dpr=2 1028w"
              loading="lazy"
              alt=""
              sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 514px"
            />
            <figcaption className="hidden px-2 font-medium text-gray-400 dark:text-gray-200 dark:text-gray-500/60 md:text-sm">
              {blogSample.imageDescription}
            </figcaption>
          </div>
          <div className=" mt-6 px-8 text-gray-900  text-zinc-600 dark:text-zinc-200">
            <div className="authoring-deails dark:text-geay-200 grid-cols-2 gap-2 ">
              <span className="authorIcon mr-2 ">
                <img
                  className="figma-1jtmbgc mx-4 "
                  src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnasportrait.7b07bff1.jpg&amp;w=2048&amp;q=75"
                  width="985"
                  height="1516"
                  loading="lazy"
                />
              </span>
              <span className="author-nname pl-1 dark:text-gray-500/70">
                {blogSample.author.name} |
                <time
                  dateTime="2022-10-06T00:00:00.000Z"
                  className="author-proffesion pl-2 font-medium  text-slate-300  dark:text-gray-700"
                >
                  October 6, 2022
                </time>
              </span>
            </div>

            <div className="lg:main-blog-title sr-only px-4  pl-14 font-medium text-slate-300 dark:text-slate-600  md:not-sr-only  lg:pt-0 ">
              Behind the feature: find and&nbsp;replace
            </div>
            <div className="sr-only  truncate pl-14 font-medium text-slate-300  dark:text-gray-700  md:not-sr-only">
              {blogSample.description}
            </div>
          </div>
        </a>
      </div>
      <div className="main-blog-right -mt-2 px-4 text-gray-900 text-zinc-600 dark:text-zinc-200 md:py-8  lg:px-4 xl:-mt-8">
        <div className="">
          <div className="dark:text-300 px-4  text-slate-400">
            {blogSample.author.name}
            <time
              dateTime="2022-10-06T00:00:00.000Z"
              className="pl-2 text-red-500"
            >
              The New York Times
            </time>
          </div>
          <div className="headline typography-headline px-4  pb-4 text-white dark:text-gray-900">
            {blogSample.title}
          </div>
          <div className="px-4 pb-20 font-medium  text-slate-300 dark:text-gray-700 md:pb-0">
            {blogSample.longDescription}
          </div>
        </div>
      </div>
    </div>
  )
}

const BlogsSample = forwardRef((props, ref) => {
  // console.log('ARTICLE REF: ' + ref)
  return (
    <section ref={ref} className="bg-slate overflow-hidden bg-black ">
      {/* <HeroPattern/> */}
      <div className="my-0 md:my-4 xl:max-w-none">
        <div className="max-w-10xl xl:px-34 md:px-10 ">
          {' '}
          <div className="l">
            <h2 className="pb-10  pt-4 text-4xl font-semibold leading-7 text-sky-500 lg:py-8">
              Blogs
            </h2>
            {/* <p className="my-4 px-4 headline typography-headline mt-4 text-3xl font-extrabold tracking-[-0.04em] text-black sm:text-5xl sm:leading-[3.5rem]text-4xl text-white dark:text-gray-900 glue-mod-spacer-3-top font-semi-bold tracking-tight sm:text-5xl">
            Things I write about
          </p> */}
          </div>
          <MainBlog />
          <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 px-4 pt-10 dark:border-white/5 sm:grid-cols-2 md:px-0 xl:grid-cols-3 ">
            {BlogSamples.slice(1, -1).map((sample) => (
              <Blog key={sample.href} sample={sample} />
            ))}
          </div>
          <p
            className="font-display underline-red-500  my-4 border-b border-red-500 border-indigo-500 text-center text-3xl  font-medium  tracking-tighter text-slate-700
          text-black  dark:text-slate-800 sm:text-5xl xl:pb-4"
          >
            Most read
          </p>
          <div className="mobile-most-read grid grid-cols-1 gap-2  dark:border-white/5 sm:grid-cols-2 md:px-0 xl:grid-cols-3 ">
            {' '}
            {BlogSamples.slice(0, -1).map((sample) => (
              <MobileBlog key={sample.href} sample={sample} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
})

// export async function getStaticProps() {
//   return {
//     props: {
//       articles: (await getAllBlogs()).map(({ component, ...meta }) => meta),
//     },
//   }
// }
BlogsSample.displayName = BlogsSample
export { BlogsSample }
