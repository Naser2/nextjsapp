import Head from 'next/head'
import { useRouter } from 'next/router'
import { Card } from './Card'
import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import { formatDate } from '@/lib/formatDate'
import Image from 'next/image'
import Image1 from '@/images/blogsImages/resolution_keep.png'
import clsx from 'clsx'
function ArrowLeftIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArticleLayout({
  children,
  meta,
  isRssFeed = false,
  previousPathname,
}) {
  let router = useRouter()

  if (isRssFeed) {
    return children
  }
  const QuoteMarks = () => {
    return (
      <div
        className="quote-lottie Quote lg:w-100 -mt-32 -ml-10 md:-mt-10 md:h-64 md:w-64 lg:-mt-36 lg:h-64 
       "
      >
        <div
          data-w-id="2fc102ab-c0c4-c283-daae-c4f9e585e75d"
          data-is-ix2-target="1"
          data-animation-type="lottie"
          data-src="https://assets-global.website-files.com/5e4aa0b13e4de59727d00bda/5e50051ec2fdfd152edd947f_SVZQuote.json"
          data-loop="0"
          data-direction="1"
          data-autoplay="0"
          data-renderer="svg"
          data-default-duration="0.48333333333333334"
          data-duration="1.5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 237 309"
            width="237"
            height="309"
            preserveAspectRatio="xMidYMid meet"
            // style="/* width: 100%; *//* height: 100%; *//* transform: translate3d(0px, 0px, 0px); */"
          >
            <defs>
              <clipPath id="__lottie_element_192">
                <rect width="237" height="309" x="0" y="0"></rect>
              </clipPath>
            </defs>
            <g clip-path="url(#__lottie_element_192)">
              <g
                transform="matrix(-1,-0.00022203923435881734,0.00022203923435881734,-1,110.20185089111328,284.568603515625)"
                opacity="1"
                // style="display: block;"
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    fill="rgb(97,253,244)"
                    fill-opacity="1"
                    d=" M28.781600952148438,51.62379837036133 C28.781600952148438,51.62379837036133 0.5506290197372437,51.931400299072266 0.5506290197372437,51.931400299072266 C0.5506290197372437,51.931400299072266 0,0.560791015625 0,0.560791015625 C0,0.560791015625 51.370399475097656,0 51.370399475097656,0 C51.370399475097656,0 51.92070007324219,51.32809829711914 51.92070007324219,51.32809829711914 C51.92070007324219,51.32809829711914 51.92559814453125,51.32809829711914 51.92559814453125,51.32809829711914 C52.23210144042969,79.65989685058594 29.49090003967285,102.88400268554688 1.1059000492095947,103.26000213623047 C1.1059000492095947,103.26000213623047 0.8561099767684937,80.1720962524414 0.8561099767684937,80.1720962524414 C16.443599700927734,79.93509674072266 28.925500869750977,67.18409729003906 28.781600952148438,51.62379837036133z"
                  ></path>
                  <path
                    stroke-linecap="square"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="1"
                    stroke="rgb(0,0,0)"
                    stroke-opacity="0"
                    strokeWidth="0"
                    d=" M28.781600952148438,51.62379837036133 C28.781600952148438,51.62379837036133 0.5506290197372437,51.931400299072266 0.5506290197372437,51.931400299072266 C0.5506290197372437,51.931400299072266 0,0.560791015625 0,0.560791015625 C0,0.560791015625 51.370399475097656,0 51.370399475097656,0 C51.370399475097656,0 51.92070007324219,51.32809829711914 51.92070007324219,51.32809829711914 C51.92070007324219,51.32809829711914 51.92559814453125,51.32809829711914 51.92559814453125,51.32809829711914 C52.23210144042969,79.65989685058594 29.49090003967285,102.88400268554688 1.1059000492095947,103.26000213623047 C1.1059000492095947,103.26000213623047 0.8561099767684937,80.1720962524414 0.8561099767684937,80.1720962524414 C16.443599700927734,79.93509674072266 28.925500869750977,67.18409729003906 28.781600952148438,51.62379837036133z"
                  ></path>
                </g>
              </g>
              <g
                transform="matrix(-0.9999997615814209,0.0006624401430599391,-0.0006624401430599391,-0.9999997615814209,173.19078063964844,283.9022521972656)"
                opacity="1"
                // style="display: block;"-mt-4 prose
              >
                <g opacity="1" transform="matrix(1,0,0,1,0,0)">
                  <path
                    fill="rgb(255,213,38)"
                    fill-opacity="1"
                    d=" M51.37919998168945,51.331298828125 C51.37919998168945,79.66470336914062 28.38800048828125,102.64099884033203 0.0006453570094890893,102.70999908447266 C0.0006453570094890893,102.70999908447266 0.0006433380185626447,79.62100219726562 0.0006433380185626447,79.62100219726562 C15.589900016784668,79.55280303955078 28.2091007232666,66.9375 28.233400344848633,51.37630081176758 C28.233400344848633,51.37630081176758 0.0004882809880655259,51.378299713134766 0.0004882809880655259,51.378299713134766 C0.0004882809880655259,51.378299713134766 0.0056412601843476295,0.004788119811564684 0.0056412601843476295,0.004788119811564684 C0.0056412601843476295,0.004788119811564684 51.37910079956055,-0.00024414100334979594 51.37910079956055,-0.00024414100334979594 C51.37910079956055,-0.00024414100334979594 51.374000549316406,51.331298828125 51.374000549316406,51.331298828125 C51.374000549316406,51.331298828125 51.37919998168945,51.331298828125 51.37919998168945,51.331298828125z"
                  ></path>
                  <path
                    stroke-linecap="square"
                    stroke-linejoin="miter"
                    fill-opacity="0"
                    stroke-miterlimit="1"
                    stroke="rgb(0,0,0)"
                    stroke-opacity="0"
                    strokeWidth="0"
                    d=" M51.37919998168945,51.331298828125 C51.37919998168945,79.66470336914062 28.38800048828125,102.64099884033203 0.0006453570094890893,102.70999908447266 C0.0006453570094890893,102.70999908447266 0.0006433380185626447,79.62100219726562 0.0006433380185626447,79.62100219726562 C15.589900016784668,79.55280303955078 28.2091007232666,66.9375 28.233400344848633,51.37630081176758 C28.233400344848633,51.37630081176758 0.0004882809880655259,51.378299713134766 0.0004882809880655259,51.378299713134766 C0.0004882809880655259,51.378299713134766 0.0056412601843476295,0.004788119811564684 0.0056412601843476295,0.004788119811564684 C0.0056412601843476295,0.004788119811564684 51.37910079956055,-0.00024414100334979594 51.37910079956055,-0.00024414100334979594 C51.37910079956055,-0.00024414100334979594 51.374000549316406,51.331298828125 51.374000549316406,51.331298828125 C51.374000549316406,51.331298828125 51.37919998168945,51.331298828125 51.37919998168945,51.331298828125z"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div className="grain"></div>
      </div>
    )
  }
  const AuthorIconAndName = () => {
    return (
      <div className="mt-24 sm:mt-32 lg:mt-16">
        <div className="figma-1k1pkug">
          <a href="https://twitter.com/AliaFite" className="figma-clygmv ">
            <div className="figma-13icjhm border-lg author-icon-bg rounded-full rounded-full bg-orange-400 px-1 py-1">
              <Image
                alt="author-image"
                src={meta.author.image}
                className="figma-1jtmbgc  author-image-w-ring mx-4
                        "
              />
            </div>
            <div className="contributor ml-4  text-black  dark:text-white">
              {meta.author.name.split(' ')[0]}
              <div className="author--position figma-p7oszx">
                {meta.author.name.split(' ')[1]}
              </div>
            </div>
          </a>
          <div className="ml-12 text-sm text-slate-400">
            {meta.author.proffession ? meta.author.proffession : 'NasDesigns'}
          </div>
        </div>
      </div>
    )
  }
  console.log('ARTICLE-LAYOUTMETA-DATA', meta)
  console.log('ARTICLE-LAYOU-CHILDREN', children)
  return (
    <>
      <Head>
        <title>{`${meta.title} - NasDesign`}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <div
        className={clsx(
          'not-prose mt-12 grid grid-cols-1 gap-x-6 border-t border-zinc-900/5  dark:border-white/5 sm:grid-cols-1 md:gap-x-0 xl:grid-cols-2'
        )}
      >
        <Container
          className={clsx(
            meta.theme ? meta.theme.bg : 'bg-blue-2',
            'pt-10 md:pt-20'
          )}
        >
          <div className={clsx('blog-page-top ')}>
            <div className="  make 2 at large grid"></div>
            <div className="hero-top-content section-content">
              <span className="flex">
                {previousPathname && (
                  <div className="lg:ml-4 lg:py-2">
                    <button
                      type="button"
                      onClick={() => router.back()}
                      aria-label="Go back to articles"
                      className="xl:mt-34 lg:mt-34 group mt-20 flex h-10 w-10 items-center justify-center 
                             rounded-full bg-white shadow-md
                             shadow-zinc-600/5 ring-1 ring-zinc-600/5 transition dark:border dark:border-zinc-700/50 
                             dark:bg-black dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 
                             dark:hover:ring-white/20 lg:absolute lg:-left-1
                           lg:ml-8 lg:h-16 lg:w-16 xl:-top-4 xl:left-0"
                    >
                      <ArrowLeftIcon className="h-4 w-4  stroke-sky-600 transition group-hover:stroke-zinc-700 dark:stroke-white dark:stroke-zinc-100 dark:group-hover:stroke-zinc-400 lg:h-8 lg:w-8" />
                    </button>
                  </div>
                )}
                <span className="md: mt-20  ml-24 inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-700 md:hidden lg:-mt-0 lg:ml-64">
                  <span>Just wrote a new blog</span>
                  <svg
                    className="h-5 w-5 text-gray-700"
                    x-description="Heroicon name: mini/chevron-right"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </span>

              <header className="max-w-4xl lg:my-10 ">
                <div className="hidden lg:my-20 ">
                  <AuthorIconAndName />
                </div>
                <div className="large-10 large-centered medium-12">
                  <div
                    id="blog-page-tag"
                    class="mx-auto max-w-7xl sm:px-6 md:px-8"
                  >
                    <a
                      class={clsx(
                        meta.theme.tag ?? 'dark:yellow-bg',
                        'eyebrow blog_list_card_tag group mb-4 inline-flex h-6 items-center whitespace-nowrap rounded-xl bg-transparent px-3 text-sm font-semibold text-black shadow-sm shadow-slate-300 hover:bg-slate-600/90 hover:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:text-slate-900 dark:hover:bg-slate-900 dark:hover:text-white dark:focus:ring-slate-500'
                      )}
                      href={`/blogs/${meta.tag && meta.tag}`}
                    >
                      {meta.tag && meta.tag}
                      <span class="sr-only">blog tag</span>
                    </a>
                  </div>
                  {/* <h5 className="bg-white px-2 py-1 text-black">
                    {meta.tag && meta.tag}
                  </h5> */}
                  {/* <div id="subheader" className="article-subheader">
                    {meta.subtitle && meta.subtitle}
                  </div> */}
                  <h2 className="hero-headline typography-section-headline">
                    {meta.title} <br />
                  </h2>
                </div>
              </header>
            </div>
          </div>
          <span className=" sr-only  inline-flex items-center  space-x-2 pb-10 text-sm font-medium leading-6 text-gray-700 md:not-sr-only  md:pb-10 lg:-mt-0 lg:ml-64">
            <span>Just wrote a new blog</span>
            <svg
              className="h-5 w-5 text-gray-700"
              x-description="Heroicon name: mini/chevron-right"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </Container>

        <div
          id="lg-autorrin-details"
          className=" float-r sr-only block md:not-sr-only "
        >
          <div className="not-prose xl:grid-row-2 grid grid-cols-1 gap-x-6 border-t border-zinc-900/5 dark:border-white/5 sm:grid-cols-1">
            <div id="hero-top_right-column" className="">
              <Image
                alt="blog-author-image"
                // className="h-12 w-12 rounded-full"
                //  src={sample.author.image}
                src={meta.images ? meta.images[0] : Image1}
                className="blog-page-main-container  blog-hero-backgroundd w-full object-cover object-cover"
              />
            </div>
            {/* <AuthorIconAndName /> */}
          </div>
        </div>
      </div>
      <div className="col justifuy-cnter  my-4 gap-x-1 border-t  border-zinc-900/5 px-8 text-center dark:border-white/5 md:px-0 lg:flex lg:pb-10 ">
        <div id="blog-author-hero-top-desktop" className="lg:w-2/3">
          <div className="lg:flex  lg:px-4">
            <QuoteMarks />
            <p className="text-3xl font-bold text-black  dark:text-white md:text-4xl lg:-ml-6 lg:mt-10 ">
              {meta.quote ? meta.quote : 'No Quote provided'}
            </p>
          </div>
        </div>
        <div id="blog-author-hero-top-desktop" className="lg:w-1/3 lg:px-10 ">
          <AuthorIconAndName />
        </div>
      </div>
      <Container className="dark:bg-yellow-4 bg-black py-2 px-1">
        <p className="  text-white dark:text-black">
          Only writting about what passionates me
        </p>
      </Container>

      <Container className="lg:mt-18 pt-0">
        <div className="xl:relative" id="blog-page-content">
          <div className="mx-auto lg:max-w-7xl">
            <article
              className="hiden mt-4 grid grid-cols-1  border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:grid-cols-2"
              id="article-layout"
            >
              <div id="lg-autorrin-details" className="float-r block">
                {/* <h1 className="figma-7biwel">
                  How Magician uses Figma’s text&nbsp;review&nbsp;API
                </h1> */}
              </div>
              <Card className="md:col-span-3">
                <div className=" col-span-2 w-full max-w-sm lg:flex lg:max-w-full">
                  <div
                    classname="col-span-2  gap-8"
                    datetime="replace-the-p-tag"
                  >
                    <header className="flex flex-col lg:pr-8">
                      {/* <h1 className="story-card__name text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl lg:mt-6">
                        {meta.title}
                      </h1> */}
                    </header>
                    {meta.moto !== 'undefined' ? (
                      <p className="story-sub-short" dir="auto">
                        {meta.moto}
                      </p>
                    ) : (
                      ''
                    )}

                    <Image
                      className="resolutions-theme-background  we-artwork ember3 h-full w-full rounded object-cover sm:rounded-b-none lg:rounded "
                      src={meta.images ? meta.images[0] : Image1}
                      sizes="(min-width: 640px) 18rem, 11rem"
                      // alt="property.imageAlt"
                      // id="article-l ayout-image"

                      id={meta.slug}
                      alt={meta.slug}
                      width={100}
                      height={100}
                    />
                    {/* <time
                      datetime="2022-12-05T23:00:00.000Z"
                      className="figma-7kyli6 text-center dark:text-white"
                    >
                    {formatDate(meta.date)}
                    </time> */}
                    <div className="relative z-10 lg:ml-1">
                      <Card.Eyebrow
                        as="time"
                        dateTime={meta.date}
                        className="mt-1 hidden md:block"
                      >
                        {formatDate(meta.date)}
                      </Card.Eyebrow>
                    </div>
                    {/* lg:rounded-b-none lg:rounded-r */}
                  </div>
                  <div className="dark:bg-dark col-span-1 mb-20 flex flex-col justify-between leading-normal md:pl-8 lg:mt-8 lg:w-1/2">
                    <Prose className="-mt-4">{children} </Prose>
                  </div>
                </div>
              </Card>
            </article>
            <div
              id="mobile-likes-comments"
              className="mt-6 flex items-center lg:hidden"
            >
              {/* <div className="sr-only ">
                <h1 href="#">
                  <span className=" text-sm font-medium text-gray-900 dark:text-white">
                    {'Likes'}
                  </span>
                </h1>
                <h1 href="#">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {'Comments'}
                  </span>
                </h1>
              </div> */}
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  <a href="#">{'Likes'}</a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time datetime="2020-03-10">{'Comments'}</time>
                  <span aria-hidden="true">·</span>
                  <span>4 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
