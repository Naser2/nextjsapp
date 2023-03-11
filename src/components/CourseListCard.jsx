import Image from 'next/image'

import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import Link from 'next/link'
import logoGo from '@/images/logos/go.svg'
import logoNode from '@/images/logos/node.svg'
import logoPhp from '@/images/logos/php.svg'
import logoPython from '@/images/logos/python.svg'
import logoRuby from '@/images/logos/ruby.svg'
import javascriptImage from '@/images/courseIndexImages/javacript_map_filter_course.webp'
import reactImage from '@/images/courseIndexImages/reactImage.png'
import awsImage from '@/images/courseIndexImages/awsImage.jpeg'
import authorPlaceHolderImage from '@/images/courseIndexImages/course_avatar.jpeg'
import uiux from '@/images/projectImages/courses-uiux/uiux_short_7.png'
//

const courseListCardImages = [
  {
    alt: 'uiux',
    href: '#',
    title: 'UIUX',
    description:
      'A dynamic, open source programming language with a focus on simplicity and productivity.',
    logo: uiux,
  },
  {
    alt: 'a PHP course image',
    href: '#',
    title: 'PHP',
    logo: logoPhp,
  },
  {
    alt: 'A AWS course image',
    href: '#',
    title: 'Aws-and-the-cloud',
    logo: awsImage,
  },
  {
    alt: 'A Ruby course image',
    href: '#',
    title: 'Ruby',
    description:
      'A dynamic, open source programming language with a focus on simplicity and productivity.',
    logo: logoRuby,
  },
  {
    alt: 'A Javascrip course image',
    href: '#',
    title: 'Javascript-and-jquery',
    logo: javascriptImage,
  },
  {
    alt: 'A React course image',
    href: '#',
    title: 'React',
    logo: reactImage,
  },
  {
    alt: 'A Python course image',
    href: '#',
    title: 'Python',
    description:
      'Python is a programming language that lets you work quickly and integrate systems more effectively.',
    logo: logoPython,
  },
  {
    alt: 'a Go course image',
    href: '#',
    title: 'Go',
    description:
      'An open-source programming language supported by Google with built-in concurrency.',
    logo: logoGo,
  },
  {
    alt: 'a PHP course image',
    href: '#',
    title: 'PHP',
    description:
      'A popular general-purpose scripting language that is especially suited to web development.',
    logo: logoPhp,
  },
]

export function CourseListCardImages() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="official-libraries">
        Official libraries
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-x-6 gap-y-10 border-t border-zinc-900/5 pt-10 dark:border-white/5 sm:grid-cols-2 xl:max-w-none xl:grid-cols-3">
        {libraries.map((library) => (
          <div key={library.title} className="flex flex-row-reverse gap-6">
            <div className="flex-auto">
              <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
                {library.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {library.description}
              </p>
              <p className="mt-4">
                <Button href={library.href} variant="text" arrow="right">
                  Read more
                </Button>
              </p>
            </div>
            <Image
              src={library.image}
              alt={li}
              className="h-12 w-12"
              optimizedoptimzed="true"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export function CourseListCard({ course }) {
  console.log('COURSE in COurse List Card', course)
  // let
  // console.log('COURSE CHAPTERS', course[0].chapters)
  // course.chapters.map((chapter) =>

  //   console.log('CHAPTER in Course List Card', chapter)
  // )

  return (
    <div className="dark:text-zink-400 relative text-black">
      <Link
        href={`courses/${course.courseSlug.slice(
          course.courseSlug.indexOf('v/') + 2
        )}`}
      >
        <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        {/* <span className="relative z-10"> {course.title}</span> */}

        {/* <Link
        href={`courses/curriculum&${course.courseSlug.slice(
          course.courseSlug.indexOf('v/') + 2
        )}`}
      > */}
        <div
          key={course.title}
          className="flex flex-col overflow-hidden rounded-lg shadow-lg"
        >
          <div className="flex-shrink-0">
            {courseListCardImages.map((obj) => {
              if (course.title.toLowerCase() === obj.title.toLowerCase()) {
                // console.log('IMAGE MATCHES', obj)
                return (
                  <Image
                    // href={course.courseSlug}
                    src={obj.logo}
                    alt={obj.alt}
                    key={obj.title}
                    className="h-48 w-full object-cover"
                    optimized="true"
                  />
                )
              }
            })}
            <p className="text-medium rounded-sm bg-yellow-100 px-4 py-2 font-medium font-medium "></p>
            <p className="text-medium relative rounded-sm bg-yellow-100 py-0 px-4 font-medium font-medium text-slate-900 ">
              <span
                className="absolute -top-4 -ml-4  h-8 bg-sky-200 px-3 "
                href={`courses/${course.courseSlug.slice(
                  course.courseSlug.indexOf('v/') + 2
                )}`}
              >
                {/* {course.title} */}
                {`courses/${course.courseSlug.slice(
                  course.courseSlug.indexOf('v/') + 2
                )}`}
              </span>
            </p>
            <p className="text-medium rounded-sm bg-yellow-100 px-4  py-2 font-medium font-medium text-yellow-600 "></p>
          </div>
          {/* //   course.courseSlug.indexOf('dev'),
                  //   '/'
                  // )}${course.courseSlug.slice(
                  //   -course.courseSlug.indexOf('/dev') + 2
                  // )}/curriculum`} */}
          <div className="flex flex-1 flex-col justify-between bg-white p-6">
            <div className="flex-1">
              {/* <Link href={course.href} className="mt-2 block"> */}
              <p className="text-xl font-semibold text-gray-900">
                {course.title.split('-').join(' ')}
              </p>
              <p className="mt-3 text-base text-gray-500">
                {course.shortDescription}
              </p>
              {/* </Link> */}
            </div>
            <div className="mt-6 flex items-center">
              {!course.author ? (
                <div className="flex-shrink-0">
                  {/* <Link href={'#'}> */}
                  <span className="sr-only">{'NasDesign'}</span>
                  <Image
                    className="h-10 w-10 rounded-full"
                    src={authorPlaceHolderImage}
                    alt="The course author image placeholder"
                  />
                  {/* </Link> */}
                </div>
              ) : (
                <div className="flex-shrink-0">
                  {/* <Link href={course.author.href}> */}
                  <span className="sr-only">{course.author.title}</span>
                  <Image
                    className="h-10 w-10 rounded-full"
                    src={authorPlaceHolderImage}
                    alt="The course author image placeholder"
                  />
                  {/* </Link> */}
                </div>
              )}

              <div className="ml-3">
                {!course.author ? (
                  <p className="text-sm font-medium text-gray-900">
                    {/* <Link href={'#'} className="hover:underline">
                      {'NasDesign'}
                    <Link> */}
                  </p>
                ) : (
                  <p className="text-sm font-medium text-gray-900">
                    {/* <Link href={course.author.href} className="hover:underline">
                      {course.author.title}
                    </Link> */}
                  </p>
                )}
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime={course.dateTime}>{course.date}</time>
                  <span aria-hidden="true">&middot;</span>
                  <span>{course.readingTime} read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
      {/* </Link> */}
    </div>
  )
}
