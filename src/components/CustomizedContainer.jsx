import clsx from 'clsx'
import Head from 'next/head'
import { forwardRef } from 'react'
import { useRouter } from 'next/router'
import propTypes from 'prop-types'

// import { Container } from './Container'
import { ArrowLeftIcon } from '@/components/icons/Arrows.jsx'
import { ContainerNoPadding } from './Container'
import Link from 'next/link'

const GoBack = (previousPathname) => {
  return (
    <>
      <>
        {previousPathname && (
          <button
            type="button"
            onClick={() => router.back()}
            aria-label="Go back to articles"
            className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
          >
            <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
          </button>
        )}
      </>
    </>
  )
}

const PageHeader = ({
  children,
  meta,
  isRssFeed = false,
  previousPathname,
  ...props
}) => {
  let router = useRouter()

  if (isRssFeed) {
    return children
  }
  console.log('PAGE HEADER Props', props, 'TITLE ')
  return (
    <>
      {meta && (
        <>
          <title>{`${meta.title} - Spencer Sharp`}</title>
          <meta name="description" content={meta.description} />
        </>
      )}
      {title && (
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
        </Head>
      )}
      <GoBack previousPathname={previousPathname} />
    </>
  )
}
const SectionNote = ({ note }) => {
  return (
    <div id="section-note-wrapper">
      <Link href="#" className="inline-flex space-x-6">
        <span className="bg-wheat rounded-full px-3 py-1 text-sm font-semibold leading-6 text-black ring-1 ring-inset ring-orange-600/20">
          <h1 className="hero-title typography-body-bold">{note}</h1>
        </span>
        <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-700 dark:text-slate-400">
          <span>Just wrote a new blog</span>
          <svg
            className="h-5 w-5 text-gray-700 dark:text-slate-400"
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
      </Link>
    </div>
  )
}
// lg:px-20  xl:px-44
const SectionTitle = (props) => {
  const defaultSectionTitleColor = 'default-headline-color'
  return (
    <div className=" large-10 large-centered medium-12 pb-20">
      <figure
        className="hero-icon apple-news-icon image-icon-news-plus"
        role="presentation"
      ></figure>

      <h2
        className={clsx(
          props.titleColors ?? defaultSectionTitleColor,
          'hero-headline typography-section-headline'
        )}
      >
        {props.title ?? 'No Section title provided'}
      </h2>
    </div>
  )
}

// const SectionId = (sectionId) => { console.log("SECTION return <h2 id="about" className="text-base font-semibold leading-7 text-sky-500">{sectionId}</h2>}

const SectionName = ({ title }) => {
  // console.log('Section props', title)
  return (
    <h2
      id={title}
      className="py-4 text-base font-semibold leading-7 text-sky-500"
    >
      {title}
    </h2>
  )
}

const Band = ({ children, className, ...props }) => {
  let routeName = useRouter().pathname
  // console.log('Band Text ', props.text)
  return (
    <div
      className={clsx(
        className,
        props.bandcolor,
        'relative py-4 px-4  lg:px-20'
      )}
      {...props}
      // id={`${routeName + '-campaign-small-band'}`}
    >
      <button
        className="button-news button-grand"
        data-analytics-exit-link=""
        data-url="blogs://nasdesign.com/blogs?campaign_id=band_campaign"
        aria-label="A list of great blogs to read"
      >
        {props.text}
        <span className="display:none ">
          <span className="footnote footnote-supglyph">
            <Link href="#footnote-1" aria-label="Footnote * symbol">
              *
            </Link>
          </span>
        </span>
      </button>
    </div>
  )
}

const bgColorsStyles = {
  black: 'bg-black',

  default: 'bg-white',

  black2: 'black-2-bg',

  emerald:
    'bg-emerald-500 dark:text-emerald-400 bg-emerald-400/10 text-emerald-500 dark:text-emerald-400',

  sky: 'ring-sky-300 bg-sky-400/10 text-sky-500 dark:ring-sky-400/30 dark:bg-sky-400/10 dark:text-sky-400',

  amber:
    'ring-amber-300 bg-amber-400/10 text-amber-500 dark:ring-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400',

  rose: 'ring-rose-200 bg-rose-50 text-red-500 dark:ring-rose-500/20 dark:bg-rose-400/10 dark:text-rose-400',

  zinc: 'ring-zinc-200 bg-zinc-50 text-zinc-500 dark:ring-zinc-500/20 dark:bg-zinc-400/10 dark:text-zinc-400',

  wheat: 'bg-wheat dark:bg-black',

  red: 'bg-red-300',

  yellow: 'bg-yellow',

  green: 'bg-green',

  indigo: 'bg-indigo-600/40',

  blue: 'bg-blue-500',

  blue2: 'bg-blue-2',
}

const margins = {
  noMargin: 'w-full mx-0',
  hero: 'hero_top px-4 sm:mt-0',
  margin20: 'w-full lg:px-20',
  margin32: 'w-full px-6 lg:py-20 lg:px-32',
}

const valueColorMap = {
  black: 'bg-black',
  black2: 'black2',
  Emerald: 'emerald',
  sky: 'ring-sky-300 bg-sky-400/10 text-sky-500 dark:ring-sky-400/30 dark:bg-sky-400/10 dark:text-sky-400',
  amber: 'amber',
  indigo: 'indigo',
  rose: 'bgRose',
  red: 'red',
  yellow: 'yellow',
  bgreen: 'green',
  blue: 'blue',
  blue2: 'blue2',
  wheat: 'wheat',
  default: 'default',
}
const valueMarginMap = {
  noMargin: 'noMargin',
  hero: 'hero',
  margin20: 'margin20',
  margin32: 'margin32',
}

const OuterContainer = forwardRef(function OuterContainer(
  {
    id,
    header,
    page,
    section,
    title,
    titleColors,
    band,
    note,
    link,
    tag,
    children,
    sticky,
    sectionNameinnerStyle,
    bandtext,

    bgColor = valueColorMap[children.toLowerCase()] ?? 'default',
    margin = valueMarginMap[children.toLowerCase()] ?? 'noMargin',
    bandcolor = valueColorMap[children] ?? 'black2-bg',
    className,
    ...props
  },
  ref
) {
  //  const {title} =  title ?? "No Title"

  // console.log("CUSTOMIZE BAND", band,  props.bgColor , bgColorsStyles[bgColor], "ID" + id, header, page,section, title, titleColors, band, note, bandcolor,link, tag)
  // console.log('HEADR ' + header)
  return (
    <div
      {...props}
      ref={ref}
      className={clsx(
        className,
        'overflow-hidden',
        sticky ? 'sticky' : 'relative',
        'SF Pro Display',
        'SF Pro Icons',
        'Helvetica Neue',
        'Helvetica',
        'Arial',
        'sans-serif',
        'mb-28',
        bgColorsStyles[bgColor],
        margins[margin]
      )}
      id={`${id + '-customized-container-outer-container'}`}
    >
      {/* <div className="top px-20">{ page && <PageHeader  title={title} {...props} />}</div> */}
      {header && (
        <>
          {/* <SectionId sectionId={section}/> */}
          <div className="hero-top">
            <div
              className={clsx(
                sectionNameinnerStyle
                  ? [
                      sectionNameinnerStyle,
                      'justify-content-center justify-center px-8 lg:px-52 xl:px-64',
                    ]
                  : 'section-content px-8 '
              )}
            >
              {section && <SectionName title={section} />}
              <header className="max-w-4xl">
                {note && <SectionNote note={id} link={link} />}
                {title && (
                  <SectionTitle title={title} titleColors={titleColors}>
                    {children}
                  </SectionTitle>
                )}
              </header>
            </div>
          </div>
          {band && <Band text={bandtext} bandcolor={bandcolor} />}
        </>
      )}
      {/* lg:max-w-5xl lg:max-w-7xl */}
      <div
        id={`${id + '-customized-container-children'}`}
        className="container-children relative mx-auto  w-full "
      >
        {children}
      </div>
    </div>
  )
})

export const CustomizedContainer = forwardRef(function CustomizedContainer(
  { className, children, ...props },
  ref
) {
  return (
    <OuterContainer ref={ref} {...props}>
      <div>{children}</div>
    </OuterContainer>
  )
})

CustomizedContainer.Outer = OuterContainer

CustomizedContainer.propTypes = {
  id: propTypes.string,
  header: propTypes.bool,
  title: propTypes.string,
  section: propTypes.bool,
  titleColor: propTypes.string,
  bgColor: propTypes.string,
  band: propTypes.bool,
  bandColor: propTypes.string,
  bandtext: propTypes.string,
  note: propTypes.bool,
  margin: propTypes.string,
  sticky: propTypes.bool,
  sectionNameinnerStyle: propTypes.string,
  bandtext: propTypes.string,
}

CustomizedContainer.defaultProps = {
  band: false,
  note: false,
  section: false,
  sticky: false,
  sectionNameinnerStyle: false,
}
