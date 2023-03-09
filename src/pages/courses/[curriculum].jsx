// import { useMemo } from 'react'
// import Head from 'next/head'
import { parse } from 'rss-to-json'
import Image from 'next/image'
import { useState, useMemo } from 'react'
// import { PodcastsPageLayout } from '@/components/PodcastComponents/PodcastsPageLayout.jsx'
// import { useAudioPlayer } from '@/components/PodcastComponents/AudioProvider'
import { Container } from '@/components/PodcastComponents/Container'
// import { FormattedDate } from '@/components/PodcastComponents/FormattedDate'
// import { PlayButton } from '@/components/PodcastComponents/player/PlayButton'
// import { createClient } from 'next-sanity'
import getCourses from '@/lib/getCourses'
// import getSanityItemById from '@/lib/getSanityItemById'
// import Image from 'next/image'
// import { ArrowLeftIcon } from '@/components/icons/Arrows'
// import EpisodeBG from '@/images/projectImages/lars_episode_bg.jpg'
// import { useNextSanityImage } from 'next-sanity-image'
// import ImageUrlBuilder from '@sanity/image-url'
// import cleardot from '@/images/cleardot.gif'
// import { Eyebrow } from '@/components/siteMdxComponents'
// import { client } from '../../sanityClient'
// import { useRouter } from 'next/router'
import { getCourseMeta } from '../../lib/courses-meta'

// import { useMemo } from 'react'
// import Head from 'next/head'
// import { parse } from 'rss-to-json'

// import { useAudioPlayer } from '@/components/AudioProvider'
// import { Container } from '@/components/Container'
// import { FormattedDate } from '@/components/FormattedDate'
// import { PlayButton } from '@/components/player/PlayButton'
// const router = useRouter()
import { ThreeGridSection } from '@/components/TwoGridSection'
import backgroundImage from '@/images/background.jpg'
import matter from 'gray-matter'
import { StarRating } from '@/components/StarRating'
import autoprefixer, { data } from 'autoprefixer'
import clsx from 'clsx'
import { ArrowDownExpand } from '@/components/icons/BellIcon'
import { StarRated } from '@/components/StarRated'
import Link from 'next/link'
const ExpandableItem = ({
  item,
  itemIdx,
  idx,
  theme,
  isExpanded,
  handleExpandedItem,
}) => {
  return (
    <li
      key={idx}
      scope="col"
      className={[
        isExpanded && itemIdx == idx
          ? `${theme.li} my-4`
          : 'text-sm  text-gray-400',
      ]}
    >
      <button type="button" className="group inline-flex">
        <span
          className={[
            isExpanded && itemIdx == idx
              ? `${theme.clicableListitem}`
              : 'text-gray-700  dark:text-slate-300',
          ]}
        >
          {item.title}
        </span>
        {!isExpanded && (
          <ArrowDownExpand
            shadow
            bg={'bg-slate-100'}
            handleExpandedItem={handleExpandedItem}
            cbVal={true}
            idx={idx}
          />
        )}
        {isExpanded && itemIdx == idx && (
          <ArrowDownExpand
            shadow
            bg="bg-white"
            cbVal={false}
            idx={null}
            handleExpandedItem={handleExpandedItem}
          />
        )}
        {isExpanded && itemIdx !== idx && (
          <ArrowDownExpand
            shadow
            bg={'bg-slate-100'}
            handleExpandedItem={handleExpandedItem}
            cbVal={true}
            idx={idx}
          />
        )}
      </button>
      {isExpanded && itemIdx === idx && (
        <p
          className={clsx(
            `mt-2 rounded-md dark:text-slate-300 ${theme.description} px-2 text-base leading-7 text-slate-700 dark:text-slate-900  lg:px-4  lg:line-clamp-4`
          )}
        >
          {item.description}
        </p>
      )}
    </li>
  )
}
const Item = ({ item, idx, theme }) => {
  return (
    <li key={idx} scope="col" className={[` text-sm  `]}>
      <p className="group inline-flex">
        <span className={['text-slate-600 dark:text-slate-300/70']}>
          {item}
        </span>
      </p>
    </li>
  )
}
const ListItem = ({ title, list, theme, type }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [itemIdx, setITemIdx] = useState(null)

  // let { topicsCovered, list } = list
  const handleExpandedItem = (boolean, idx) => {
    console.log('BOOLEAN', boolean, 'IDX', idx)
    setIsExpanded(boolean)
    setITemIdx(idx)
  }

  // const List = useMemo(() => {
  //   return topicsCovered.map((item, idx) => {
  //     return <Item key={idx} theme={theme} />
  //   })
  // }, [topicsCovered, theme])
  const ExpandableList = useMemo(() => {
    return list.map((item, idx) => {
      return (
        <ExpandableItem
          key={idx}
          item={item}
          itemIdx={itemIdx}
          idx={idx}
          theme={theme}
          isExpanded={isExpanded}
          handleExpandedItem={handleExpandedItem}
        />
      )
    })
  }, [isExpanded, list, itemIdx, theme])
  return (
    <div id="curriculum" className="mt-2 lg:mt-4">
      <h3 className="text-sm font-medium text-slate-900 dark:text-slate-200  md:text-2xl ">
        {title}
      </h3>

      <div className="mt-4">
        <ul role="list" className="list-disc pl-4 text-sm">
          {type === 'expandable' && ExpandableList}
          {/* {type === 'expandable' && { ExpandableList }} */}
          {type !== 'expandable' &&
            list.map((item, idx) => {
              return <Item key={idx} theme={theme} item={item} />
            })}
        </ul>
      </div>
    </div>
  )
}

const CoursePageContentNav = ({ tags, specifics, courseCategory, theme }) => {
  return (
    <nav
      aria-label="Breadcrumb"
      className={`${theme && theme.bg} -pt-4  bg-slate-custom border-b`}
    >
      <ol
        role="list"
        className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <li>
          <div className="flex items-center">
            <Link href="#" className="mr-2 text-sm font-medium text-gray-900">
              {'tag'}
            </Link>
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="h-5 w-4 text-gray-300"
            >
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>

        <li>
          <div className="flex items-center">
            <Link href="#" className="mr-2 text-sm font-medium text-gray-900">
              {courseCategory}
            </Link>
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="h-5 w-4 text-gray-300"
            >
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>

        <li className="text-sm">
          <Link
            href="#curriculum"
            aria-current="page"
            className="font-medium text-gray-500 hover:text-gray-600"
          >
            {'specifics'}
          </Link>
        </li>
      </ol>
    </nav>
  )
}
export default function Curriculum({ course, components }, props) {
  const [rating, setRating] = useState(2)
  console.log('CURRICULLUM COURSE', course.data)
  // console.log('COURSE-SULG', course.courseSlug)
  // console.log(
  //   'COURSE-PATH-/courses/${course.courseSlug}',
  //   `/courses/${course.courseSlug}`
  // )

  let { tags, specifics, title, description, chapters } = course
  let {
    imageLayout,
    courseSlug,
    courseCategory,
    image,
    author,
    topicsCovered,
    shortDescription,
    longDscription,
    ratings,
    lastUpdated,
    language,
    quizes,
    access,
    theme,
    reviews,
  } = course.data
  // console.log('REVIEWS COUNT :', reviews.reviewsCount)
  // const contentText = episode.content[0].children.map((child) => {
  //   return child.text
  //   console.log('CHILD', child.text)
  // child.map((text) => {
  //   console.log('CHILD_TEXT', text)
  // })
  // })
  const {
    Button,
    CodeGroup,
    Col,
    Heading,
    Note,
    Properties,
    Property,
    Row,
    a,
    code,
    h2,
    pre,
  } = components
  const onCourseRating = (index) => {
    setRating(index)
    // return console.log('You havent taken  this class', JSON.stringify(index))
  }

  // console.log(
  //   ' PROPSSS->>>',
  //   CodeGroup,
  //   Col,
  //   Heading,
  //   Note,
  //   Properties,
  //   Property,
  //   Row,
  //   a,
  //   code,
  //   h2,
  //   pre
  // )

  console.log('COURSE-->', course)
  return (
    <div className="darKtext-white mb-10 bg-white dark:bg-black">
      <>
        <div className="relative">
          <div className="mt-6 dark:pt-0 lg:dark:pt-16">
            <div
              id="regular-image-style"
              className="mx-auto mt-0 max-w-2xl sm:px-0 lg:max-w-7xl "
            >
              <div className="mt-1.2  md:mt-0.5">
                {imageLayout === 'grid3' ? (
                  <>
                    <div className="aspect-w-7 aspect-h-4 overflow-hidden bg-gray-50">
                      <ThreeGridSection
                        course={course}
                        images={course.data.images}
                      />
                    </div>
                    <CoursePageContentNav
                      theme={theme}
                      tags={tags}
                      specifics={specifics}
                      courseCategory={courseCategory}
                    />
                  </>
                ) : (
                  <>
                    <div className="mt-14 overflow-hidden bg-gray-50">
                      <Image
                        src={image}
                        alt="Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade."
                        // className="object-cover object-center"

                        className="h-48 w-full object-cover object-cover"
                      />
                    </div>
                    <CoursePageContentNav
                      theme={theme}
                      tags={tags}
                      specifics={specifics}
                      courseCategory={courseCategory}
                    />
                  </>
                )}{' '}
              </div>
            </div>

            <div
              id="grid-main"
              className="mx-auto max-w-2xl px-8  pt-6 pb-6  sm:px-6 md:pb-16 lg:grid
               lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-10 lg:pt-16"
            >
              <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-4 xl:pr-8">
                <h1 className="typography-headline  text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-6xl">
                  {title}
                </h1>
                <h3 className="my-4 text-lg font-medium  text-gray-900  dark:text-slate-200 ">
                  <Link href="#">
                    Officially crafted course in collabortion with brave
                    Mountains and nas design
                  </Link>
                </h3>
                <div className="font-display my-6 mb-4 space-y-6 text-lg tracking-tight text-slate-700  dark:text-slate-300">
                  <p>{shortDescription}</p>
                </div>
                <div
                  id="grid-info"
                  className="lg:col-span-2 lg:col-start-1 lg:border-gray-200 lg:py-10 lg:pt-6 lg:pb-2"
                >
                  <div>
                    <h3 className="sr-only">Description</h3>

                    <div className="space-y-6">
                      <p className="text-base text-gray-900">{description}</p>
                    </div>
                  </div>

                  <div
                    id="breakdown"
                    className="block w-full lg:flex lg:gap-x-4"
                  >
                    <div className="w-1/4 lg:w-1/2">
                      <ListItem
                        type="non-expandable"
                        title={"What you'll learn"}
                        list={topicsCovered}
                        theme={theme}
                      />
                    </div>
                    <div className="lg:w-3/4  ">
                      <ListItem
                        type="expandable"
                        title={'Curriculum'}
                        list={chapters[0].slice(0, 5)}
                        theme={theme}
                      />
                      <h4
                        className={`${theme.text}  dark:${theme.text} text-base text-gray-900`}
                      >
                        ( {chapters[0].length - chapters[0].slice(0, 5).length}{' '}
                        more chapters)
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="first-gid"
                className="mt-10 pt-10 dark:border-t dark:border-slate-800 dark:text-slate-300 md:mt-0 md:pt-0  lg:pt-10 "
              >
                <h2 className="sr-only">Course information</h2>
                <p className="relative text-3xl tracking-tight text-gray-900">
                  <span
                    className={`${theme.bg} "mt-4 bg-sky-200 px-2   lg:py-2`}
                  >
                    {access}
                  </span>
                  <span
                    className={` border border-${theme.text} absolute bottom-1  ml-2 inline-flex rounded-full bg-white px-2 text-xs font-semibold leading-5 text-slate-800 lg:ml-4`}
                  >
                    New
                  </span>
                </p>
                <div className="mt-2  lg:mt-6">
                  <h3 className="sr-only">Reviews</h3>
                  <div
                    id="lg-reviews dark:text-slate-300"
                    className="flex items-center"
                  >
                    <StarRating
                      count={7}
                      rating={rating}
                      onRating={onCourseRating}
                    />

                    <p className="sr-only">4 out of 5 stars</p>
                  </div>
                  <p className="mt-1  dark:text-slate-300">
                    (46 ratings) <span>123 students</span>
                  </p>
                </div>
                <div
                  id="course-data"
                  className="mt-4 dark:text-slate-300 lg:mt-6"
                >
                  <legend className="dark:text-slate-300">
                    Created by{' '}
                    <span className={`${theme.text} font-bold`}>{author}</span>
                  </legend>
                  <p className="relative z-10 mt-2 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
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
                    Last updated
                    <span className="ml-2 text-slate-600  dark:text-slate-400">
                      {' '}
                      {lastUpdated}
                    </span>
                  </p>
                  <p className="relative z-10 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
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
                    Language
                    <span className="ml-2 font-medium text-slate-600  dark:text-slate-400 ">
                      {/* {language.ToUppercase()} */}
                      {language.charAt(0).toUpperCase() + language.slice(1)}
                    </span>
                  </p>
                </div>

                <form className="flex-shrink-1 max-w-64 mt-10  overflow-hidden">
                  <div>
                    <h3 className="border-b border-t  py-2 text-lg font-medium text-gray-900 dark:border-slate-800  dark:text-slate-300">
                      Overview
                    </h3>
                    <dl className="mt-4 grid grid-cols-2 gap-y-4 gap-x-1  sm:mt-6 sm:gap-y-4 sm:gap-x-3 sm:text-center md:gap-x-10 lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
                      {[
                        ['Chapters', chapters[0].length],
                        ['Hours', '191 hrs'],
                        ['Tests', '24'],
                        ['Location', 'Remote'],
                      ].map(([name, value]) => (
                        <div key={name}>
                          <dt className="font-mono text-sm text-slate-600 dark:text-slate-300">
                            {name}
                          </dt>
                          <dd
                            className={`${theme.text} mt-0.5 text-2xl font-semibold tracking-tight`}
                          >
                            {value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <Link
                    type="button"
                    href={`/courses/${course.courseSlug}`}
                    className={[
                      theme.button
                        ? [theme.button, theme.hover]
                        : `mt-10 flex w-full items-center justify-center rounded-md border border-transparent  
                        py-3 px-8 text-base font-medium text-white 
                        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-white dark:text-black `,
                    ]}
                  >
                    Start {course.courseSlug}
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          id="course-curriculum-description"
          className={`${
            theme.bg ?? ' bg-sky-200'
          } max-w-10xl mx-auto px-8 pt-6 pb-16 sm:px-6  lg:px-0 lg:px-28 lg:py-32 lg:pt-10 lg:pt-16 `}
        >
          <h2
            className={`${
              theme.text ?? 'text-gray-900'
            } text-sm text-xl font-medium`}
          >
            Description
          </h2>

          <div className="mt-4 space-y-6">
            <div className="text-sm text-gray-600">
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">{longDscription}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      {/* REVIEWS */}
      <div className="mx-auto max-w-2xl px-4 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16">
        <div className="lg:col-span-2 lg:mb-4 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1
            className={`${theme.text} text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl`}
          >
            Course Reviews
          </h1>
        </div>

        {/* <!-- Options --> */}
        <div
          id="review-right-column"
          className="mt-4 overflow-hidden lg:row-span-3 lg:mr-8 lg:mt-0"
        >
          <p className="ml-2 text-sm text-gray-900 dark:text-slate-400">
            Based on
            <span className="mx-1 text-sm text-gray-900 dark:text-slate-500">
              {reviews.totalCount ?? reviews.reviewsCount.totalCount}
            </span>
            reviews
          </p>

          <div className="mt-3 flex items-center">
            <div>
              <div className="flex items-center">
                <StarRated
                  count={10}
                  rating={reviews.average}
                  key={rating}
                  className={
                    (reviews.average > rating
                      ? 'text-yellow-400'
                      : 'text-gray-300',
                    'h-2 w-2 flex-shrink-0 ')
                  }
                  aria-hidden="true"
                />
              </div>
              <p className="sr-only">{reviews.average} out of 5 stars</p>
            </div>
            <p className="ml-2 text-sm text-gray-900">
              Based on {reviews.totalCount} reviews
            </p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Review data</h3>

            <dl className="space-y-3">
              {reviews.reviewsCount.counts.map((count) => (
                <div key={count.rating} className="flex items-center text-sm">
                  <dt className="flex flex-1 items-center">
                    <p className="w-3 font-medium text-gray-900">
                      {count.rating}
                      <span className="sr-only"> star reviews</span>
                    </p>
                    <div
                      aria-hidden="true"
                      className="ml-1 flex flex-1 items-center"
                    >
                      <StarRated
                        rating={count.rating}
                        className={
                          count.count > 0
                            ? 'text-yellow-400'
                            : 'text-gray-300 dark:text-slate-200'
                        }
                        // 'h-5 w-5 flex-shrink-0 dark:text-slate-200'
                        aria-hidden="true"
                      />

                      <div className="relative ml-3 flex-1">
                        <div className="h-3 rounded-full border border-gray-200 bg-gray-100 dark:text-slate-200" />
                        {count.count > 0 ? (
                          <div
                            className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400"
                            style={{
                              width: `calc(${count.count} / ${reviews.totalCount} * 100%)`,
                            }}
                          />
                        ) : null}
                      </div>
                    </div>
                  </dt>
                  <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                    {Math.round((count.count / reviews.totalCount) * 100)}%
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10">
            <h3 className="text-lg font-medium text-gray-900 dark:text-slate-200">
              Share your thoughts
            </h3>
            <p className="mt-1 text-sm text-gray-600  dark:text-slate-400">
              If you’ve used this product, share your thoughts with other
              customers
            </p>

            <Link
              href="#"
              className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white py-2 px-8 text-sm font-medium text-gray-900 hover:bg-gray-50 dark:text-white sm:w-auto lg:w-full"
            >
              Write a review
            </Link>
          </div>
          {/* <!-- Reviews --> */}
          <div className="mt-6">
            <h3 className="sr-only">Students reviews</h3>
            <div className="flex items-center">
              <div className="flex items-center"></div>
              <p className="sr-only">4 out of 5 stars</p>
            </div>
          </div>
        </div>

        {/* <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8"> */}
        {/* <!-- Description and details --> */}

        {/* <section aria-labelledby="shipping-heading" className="mt-10">
            <h2 id="shipping-heading" className="text-sm font-medium text-gray-900">
              Details
            </h2>

            <div className="mt-4 space-y-6">
              <p className="text-sm text-gray-600">
                The 6-Pack includes two black, two white, and two heather gray
                Basic Tees. Sign up for our subscription service and be the
                first to get new, exciting colors, like our upcoming "Charcoal
                Gray" limited release.
              </p>
            </div>
          </section> */}
        {/* </div> */}

        <div className="lg_mt-4 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8 ">
          {/* <!-- Reviews --> */}
          <section
            aria-labelledby="reviews-heading"
            className="border-t border-gray-200 pt-10 lg:pt-10"
          >
            <div className="space-y-10">
              {reviews.featured.map((review) => (
                <div key={review.id} className="flex flex-col sm:flex-row">
                  <div className="order-2 mt-6 sm:mt-0 sm:ml-16">
                    <h3 className="text-sm font-medium text-gray-900">
                      {review.title}
                    </h3>
                    <p className="sr-only">{review.rating} out of 5 stars</p>

                    <div
                      className="mt-3 space-y-6 text-sm text-gray-600 dark:text-slate-300 "
                      dangerouslySetInnerHTML={{ __html: review.content }}
                    />
                  </div>

                  <div className="order-1 flex items-center sm:flex-col sm:items-start">
                    <Image
                      href={review.author}
                      src={review.avatarSrc}
                      height={12}
                      width={12}
                      alt="Model wearing plain black basic tee."
                      className="md:rounded-t-0 h-12 w-12 rounded-full"
                    />
                    {/* <Image
                      src={
                        review.avatarSrc.src
                          ? review.avatarSrc.src
                          : review.avatarSrc
                      }
                      alt={`${review.author}.`}
                      className="h-12 w-12 rounded-full"
                      height={20}
                      width={20}
                    /> */}

                    <div className="ml-4 sm:ml-0 sm:mt-4">
                      <p className="text-sm font-medium text-gray-900 dark:text-white ">
                        {review.author}
                      </p>
                      <div className="mt-2 flex items-center">
                        <>
                          <StarRated
                            key={rating}
                            count={5}
                            rating={review.rating}
                            onRating={onCourseRating}
                            className={
                              (review.rating > 5
                                ? 'text-gray-900'
                                : 'text-gray-200',
                              'h-5 w-5 flex-shrink-0')
                            }
                            aria-hidden="true"
                          />
                        </>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* <div className="flex flex-col sm:flex-row">
                <div className="order-2 mt-6 sm:mt-0 sm:ml-16">
                  <h3 className="text-sm font-medium text-gray-900">
                    This is the best white t-shirt out there
                  </h3>
                  <p className="sr-only">5 out of 5 stars</p>

                  <div className="mt-3 space-y-6 text-sm text-gray-600">
                    <p>
                      I've searched my entire life for a t-shirt that reflects
                      every color in the visible spectrum. Scientists said it
                      couldn't be done, but when I look at this shirt, I see
                      white light bouncing right back into my eyes. Incredible!
                    </p>
                  </div>
                </div>

                <div className="order-1 flex items-center sm:flex-col sm:items-start">
                  <img
                    src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&amp;ixqx=oilqXxSqey&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80"
                    alt="Mark Edwards."
                    className="h-12 w-12 rounded-full"
                  />

                  <div className="ml-4 sm:ml-0 sm:mt-4">
                    <p className="text-sm font-medium text-gray-900">
                      Mark Edwards
                    </p>
                    <div className="mt-2 flex items-center"></div>
                  </div>
                </div>
              </div> */}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const courses = await getCourses()

  // let paramsSplit = params.curriculum.split('&')[1]
  let paramsSplit
  console.log('PARAMS-IN-CURRICULUM', params.curriculum)
  if (process.env.NODE_ENV !== 'production') {
    paramsSplit = params.curriculum.split('&')[1]
  } else {
    paramsSplit = params.curriculum.split('&')[1]
  }
  // console.log(
  //   'PARAMS-params.curriculum.split(' & ')[1]??',
  //   params.curriculum.split('/')
  // )
  console.log('PARAMS_SPLIT', paramsSplit)
  const slittedSlugToMatchPaths = (courseSlug) => {
    // console.log('slittedSlugToMatchPaths', courseSlug.split('/')[1])
    console.log(
      'STATIC_PROPS_SPLITTED-SlugToMatchPaths',
      courseSlug.split('/')[1]
    )
    return courseSlug.split('/')[1]
  }
  const courseData = await getCourseMeta(paramsSplit)
  console.log('STATIC_PROPS_COURSE_DATA', courseData)
  // console.log('courseMeta- -->', courseData)
  // try {
  //   let course = await courses
  //     .map(
  //       ({
  //         chapters,
  //         meta,
  //         numberOfChapters,
  //         title,
  //         courseSlug,
  //         shortDescription,
  //       }) => ({
  //         chapters,
  //         meta,
  //         numberOfChapters,
  //         title,
  //         courseSlug,
  //         shortDescription,
  //         data: courseData,
  //         pathithizedSlug: slittedSlugToMatchPaths(courseSlug),
  //       })
  //     )
  //     .find(({ pathithizedSlug }) => pathithizedSlug === paramsSplit)
  //   console.log('TRY CATCH course', course)
  // } catch (e) {
  //   course = new Error("Couldn't create the file", e)
  //   console.log('EROR IN GETTING COURSE META', e)
  //   return course
  //     ? new Error("Couldn't create the file", e)
  //     : { message: 'Problem here in meta.', e }
  // }

  // const { content } = matter(course.meta)
  // console.log('content', typeof content)
  // const courseStripped = course.meta
  //   .replace(/^\s+|\s+$/gm, '')
  //   .split('\n')
  //   .slice(0, content.length + 1)
  //   .join(' ')
  // console.log('COMPILED TO STRING', String(await compile(courseStripped)))

  // console.log('METTTTT', courseStripped.courseCategory)
  // const code = await compile(courseStripped, {
  //   outputFormat: 'program',
  //   development: false,
  // })

  // const { meta, content } = matter(course.mdxContent)
  // console.log('COURSE___MDX', 'Meta', meta, 'CONTENT', content)
  // const code = 'export {number} from "./data.js"\n\n# hi'
  // const baseUrl = 'https://a.full/url' // Typically `import.meta.url`

  // console.log('STRING COMP', String(await compile(code, { baseUrl })))

  return {
    props: {
      course: await courses
        .map(
          ({
            chapters,
            meta,
            numberOfChapters,
            title,
            courseSlug,
            shortDescription,
          }) => ({
            chapters,
            meta,
            numberOfChapters,
            title,
            courseSlug,
            shortDescription,
            data: courseData,
            pathithizedSlug: slittedSlugToMatchPaths(courseSlug),
          })
        )
        .find(({ pathithizedSlug }) => pathithizedSlug === paramsSplit),
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  const courses = await getCourses()

  return {
    paths: courses.map(({ courseSlug }) => ({
      params: {
        curriculum: courseSlug.toString(),
      },
    })),
    fallback: 'blocking',
  }
}
