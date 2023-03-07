import { ShortImage } from '@/components/CustomImages'
import { LongImage } from '@/components/CustomImages'
import { ImageMobileLong } from '@/components/CustomImages'
import { ImageMobileShort } from '@/components/CustomImages'
import uiux_shortImage_1 from '@/images/projectImages/courses-uiux/uiux_short_png.png'
import { Heading } from './Heading'

import { getFirstWord } from '@/lib/returnFirstWord'
import { cousrseCurriculumPage } from './cousrseCurriculumPage'
import { StarRating } from './StarRating'
import Link from 'next/link'
const uiUxImages = [
  {
    src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
    type: 'long',
    alt: 'Two each of gray, white, and black shirts laying flat.',
    id: 'longImage',
    className:
      'aspect-w-4 aspect-h-5 lg:aspect-w-3 lg:aspect-h-4 sm:overflow-hidden sm:rounded-lg',
  },
  {
    src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
    type: 'short',
    alt: 'Model wearing plain gray basic tee.',
    className: 'aspect-w-3 aspect-h-2 overflow-hidden rounded-lg',
    id: 'shortImage',
  },
  {
    src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
    type: 'short',
    alt: 'Model wearing plain black basic tee.',
    className: 'aspect-w-3 aspect-h-2 overflow-hidden rounded-lg',
    id: 'shortImage',
  },
  {
    src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
    type: 'long',
    alt: 'Two each of gray, white, and black shirts laying flat.',
    id: 'longImage',
    className:
      'aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block',
  },
]

const CourseChapter = ({ title }) => {
  console.log('TITLE:', title)
  return (
    <li className="text-gray-400">
      <span className="text-gray-600">{title}</span>
    </li>
  )
}

const UiuxImageGrid = ({ images }) => {
  console.log('UiuxImageGrid  IMAGE', images)
  console.log('LAST IMAGE', images[images.length - 1])
  // const UiUxImageGrid = (

  const lastImg = images.length - 1
  const mobileImg = images.length - 3
  return (
    <>
      <ImageMobileShort image={images[mobileImg]} />
      <div className="mx-auto mt-6 hidden max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
        {/* {images.map((image, i) => {
          return <LongImage key={i} image={image} main={true} />
        })} */}
        <LongImage image={images[0]} main={true} />
        <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
          {images.map((img) => {
            console.log('MAIN ITERATION- IMAGE', img)
            if (img.type === 'short') {
              return <ShortImage key={img.id} image={img} />
            }
          })}
        </div>
        <LongImage image={images[lastImg]} />
      </div>
    </>
  )
}

export function ThreeGridSection({ images }) {
  console.log('THERE GRID IMAGES', images)
  return <UiuxImageGrid images={images} />
}

export function TwoGridSection({ course }) {
  let { tag, itemKind, specifics, title, description, chapters } = course
  console.log('CHAPETERS', chapters)
  return (
    <>
      <div className="bg-white">
        <div className="pt-6">
          <nav aria-label="Breadcrumb">
            <ol
              role="list"
              className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
            >
              <li>
                <div className="flex items-center">
                  <Link
                    href="#"
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {tag}
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
                  <Link
                    href="#"
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {itemKind}
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
                  href="#"
                  aria-current="page"
                  className="font-medium text-gray-500 hover:text-gray-600"
                >
                  {specifics}
                </Link>
              </li>
            </ol>
          </nav>
          <UiuxImageGrid images={uiUxImages} />
          <section
            id="grd-main"
            className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24"
          >
            <div
              id="course-title"
              className="mx-auto mt-4 max-w-2xl sm:mx-4 lg:max-w-7xl lg:gap-x-8 lg:px-2"
            ></div>
          </section>
        </div>
      </div>
    </>
  )
}
