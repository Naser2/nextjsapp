import { forwardRef } from 'react'
import { CustomizedContainer } from '../CustomizedContainer'
import Image from 'next/image'
import nasSings from '@/images/nas_singing.jpeg'
const AboutSection = forwardRef((props, ref) => {
  // console.log('ABOUT IMAGE', nasSings)
  return (
    <section ref={ref} className="bg-black">
      <CustomizedContainer
        className="max-w-10xl overflow-hidden lg:px-4 lg:pt-4  lg:pt-0 lg:pb-20"
        section="About"
        bgColor="dark:bg-indigo-500"
        band
        bandcolor="bg-blue-2"
        note
        title={'Do it for love.'}
        margin="noMargin"
        variant="small"
        bandtext="Only writting about what passionates me"
      >
        <div
          id="sectio-title-text"
          className="mb-24  h-4 px-4  pt-8  text-3xl leading-7 lg:mb-10 lg:py-4  lg:py-8 lg:py-8"
        >
          <p id="slogan" class="-mt-1 pl-1 text-sm dark:text-yellow-400">
            section
          </p>
          <h2 class="font-semibold text-sky-500 lg:dark:bg-transparent">
            About
          </h2>
        </div>
        {/* <h2
          id="about"
          className="md: bg-black py-10 px-4 pl-10  text-3xl font-semibold  leading-7 text-sky-500 md:text-base  l"
        >
        
        </h2> */}
        <div
          id="about-section"
          className="group relative grid grid-cols-1 gap-x-0 gap-y-0 group-hover:opacity-100 sm:grid-cols-2 sm:gap-x-0 md:grid-cols-2 md:gap-y-8  lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-0"
        >
          <div
            id="about-section-left"
            className="group relative bg-black dark:bg-gray-800 "
          >
            <Image
              src={nasSings}
              optimzed
              alt="image of developer-singing"
              width={400}
              height={600}
              className="aspect-h-20  aspect-w-34  lg:aspect-auto h-full w-full w-full bg-gray-50 object-cover object-cover object-center group-hover:opacity-75 md:rounded-md lg:absolute lg:inset-0"
            />
            {/* <div className="flex items-end p-4 opacity-0 group-hover:opacity-100" aria-hidden="true">
               <a
                  href="#"
                  className="backdrop-blur backdrop-filter pointer-events-auto  rounded-lg bg-white text-slate-900 dark:bg-slate-900 bg-white bg-opacity-75 inline-flex justify-center rounded-lg bg-white text-slate-900 dark:bg-slate-900 py-3 px-4 text-sm font-semibold dark:text-white hover:bg-slate-700"
                >
                  Read more
                </a>
          
                </div> */}
          </div>
          <div
            id="about-section-right"
            className="relative bg-black  dark:bg-indigo-500 md:dark:bg-black"
          >
            {/* <div className="max-w-full">
            <p className="mt-4 mx-auto black-2-bg dark:bg-white px-6 py-4 text-2xl font-bold tracking-tight text-slate-100 dark:bg-gray-600 dark:text-slate-700 dark:text-slate-200">
              How this happenned ?
            </p>
          </div> */}
            <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-2 lg:pl-6 xl:pl-10">
              <div
                id="landing-about-text"
                className="rounded-md rounded-b px-8 px-6 pt-8 sm:pb-32 lg:col-span-7 lg:px-0  lg:pb-16 lg:pt-10 xl:col-span-5  "
              >
                <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  <h1 className="text-4xl font-bold tracking-tight text-slate-100 text-gray-900 dark:text-zinc-200 sm:mt-4 sm:text-6xl md:mb-2 ">
                    Artist{' '}
                    <span className="-py-20 ml-1 mt-4 border border-2 border-yellow-400/40 bg-black px-4 pb-1 text-4xl font-bold italic tracking-tight text-sky-500 dark:bg-indigo-200 dark:text-indigo-600  sm:text-6xl  md:hidden">
                      turned
                    </span>
                  </h1>
                  <span className="md:-py-10 dark:sky-400 lg:-pt-4 sr-only border-yellow-400/40 bg-slate-200 text-4xl font-bold italic tracking-tight sm:text-6xl md:not-sr-only md:border md:border-2 md:px-4 md:text-sky-500">
                    turned
                  </span>
                  <h1 className="-mt-4  mt-1 text-4xl font-bold tracking-tight text-slate-100 text-gray-900 dark:text-zinc-200 sm:mt-4 sm:text-6xl">
                    Software Engineer
                    <span className="mx-1 -my-2  font-bold  text-sky-400 dark:text-sky-400 ">
                      .
                    </span>
                  </h1>
                </p>
                <div className="lg:mt-20, mx-auto mb-6 max-w-2xl md:mb-20 lg:mx-0">
                  <p className="mt-6 text-lg leading-8 text-slate-300 dark:text-slate-200 lg:mb-20 ">
                    Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                    siuvre?
                  </p>
                </div>
                <div className="abolute ml-0 flex items-center pb-4 md:gap-x-6 lg:-ml-52 lg:gap-x-24 lg:gap-x-8">
                  <div
                    className="flex items-end p-4 opacity-0 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <a
                      href="/about"
                      className="pointer-events-auto inline-flex justify-center  rounded-lg rounded-lg bg-white bg-white bg-white bg-opacity-75 py-3 px-4 text-sm font-semibold text-slate-900 text-slate-900 backdrop-blur backdrop-filter hover:bg-slate-700 dark:bg-slate-900 dark:bg-slate-900 dark:text-white"
                    >
                      Read more
                    </a>
                  </div>
                  <a
                    href="/about"
                    className="text-base font-semibold leading-7 text-gray-900 text-white dark:text-white"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <div
                class="relative bg-indigo-800 py-4 px-4 md:hidden  lg:px-20"
                text="Only writting about what passionates me"
                bandcolor="main-bg-yellow"
              ></div>
              <div
                id="landing-about-main-image"
                className="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0"
              >
                <img
                  className="lg:aspect-auto aspect-[3/2] w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:h-full lg:rounded-md"
                  src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </CustomizedContainer>
      <div
        class="relative bg-indigo-600 py-4  px-4 text-white dark:bg-black lg:px-20"
        text="Only writting about what passionates me"
        bandcolor="main-bg-yellow"
      >
        <button
          className="button-news button-grand"
          data-analytics-exit-link=""
          data-url="blogs://nasdesign.com/blogs?campaign_id=band_campaign"
          aria-label="A list of great blogs to read"
        >
          Music and art has always been part of my life.{' '}
          <span class=" ">
            <span class="footnote footnote-supglyph">
              {' '}
              watch some of my music{' '}
              <a href="#footnote-1" aria-label="Footnote * symbol">
                *
              </a>
            </span>
          </span>
        </button>
      </div>
    </section>
  )
})

AboutSection.displayName = 'SectionAbout'
export { AboutSection }
