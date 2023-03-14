import { forwardRef } from 'react'
import { CustomizedContainer } from '../CustomizedContainer'
import Image from 'next/image'
import nasSings from '@/images/nas_singing.jpeg'
import nas_portrait from '@/images/nas_portrait_long.jpeg'
import Link from 'next/link'
import clsx from 'clsx'
const AboutMe = forwardRef((props, ref) => {
  // console.log('ABOUT IMAGE', nasSings)
  const padding = 'px-4 sm:px-6'
  return (
    <section id="about-me" ref={ref} className="relative mt-10 mb-20 bg-black">
      <div className="relative">
        {/* <div className="h-full w-full sm:h-64 lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2 ">
          <img
            src={nas_portrait.src}
            alt=""
            className="aspect-h-0  md:rounded-b-xxl  lg:aspect-h-0 aspect-w-4 rounded-t-xl object-cover object-center lg:aspect-w-3"
          />
        </div> */}
        {/* <div
          aria-hidden="true"
          className="absolute hidden h-full w-1/2 bg-gray-100 lg:block"
        /> */}
        <div className="relative bg-gray-100 pb-20 md:hidden">
          <div class="pocast-mask mask-image: linear-gradient(to bottom, white, white, transparent);mx-auto xl:max-w-8xl max-w-7xl sm:px-6 md:px-0">
            <section
              id="about-me"
              class="max-h-xl md:mx-23 relative my-4 max-w-7xl pb-4 md:my-24 lg:mx-20 lg:py-0 lg:pb-12"
              aria-labelledby="gallery-heading"
            >
              <ul role="list" class="ml-0 block md:inline-flex xl:ml-64">
                <li id="iphone-video" class="podcast-details max-w-xl lg:pr-8">
                  <div class="xl:py-34 px-6 py-10 lg:px-0 lg:py-20 ">
                    <p class="eyebrow-red mt-2 mb-4">Podcast App</p>
                    <h2 class="headline typography-headline dark:text-slate-100">
                      Bulding a Podcast App
                      <br class="small text-sky-500" /> With React.
                    </h2>
                    <p class="typography-news-copy pt-4 dark:text-slate-300/50">
                      When you’re building a website for a company as ambitious
                      as NasDesign you ne was written in Go. Go is a wonderful
                      program...
                    </p>
                    <p class="read-time blue-3 mt-4">
                      Read more in projects section
                    </p>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
})

AboutMe.displayName = 'AboutMe'
export { AboutMe }
