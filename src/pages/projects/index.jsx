import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { SectionProjects } from '@/components/indexComponents/SectionProjects'
import SuperchagedTechSection, {
  SuperChargedHalhPhone,
} from '@/components/indexComponents/SuperchagedTechSection'
import clsx from 'clsx'

import projectJson from '../../lib/projectsJson'
import Image from 'next/image'
import Link from 'next/link'
function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Speaking - Spencer Sharp</title>
        <meta
          name="description"
          content="I’ve spoken at events all around the world and been interviewed for many podcasts."
        />
      </Head>

      <div
        // className="lg:px-34 lg:mt-26 xl:mt-22 mb-22 mt-14 flex items-center gap-4 border-b border-slate-800  py-4 px-8 sm:px-14 "
        className="lg:px-34 lg:mt-26 sm:px-14-24 mt-14 flex items-center gap-4 border-b  border-slate-800 py-4 px-8 lg:px-20 xl:px-40 "
      >
        <img
          className="h-12 w-12 rounded-full"
          src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
        />
        <strong className="text-sm font-medium text-slate-900 dark:text-slate-200">
          Nasser Sanou
        </strong>
      </div>
      <section id="modern-features">
        <div
          id="projects-broadcasct-baby"
          className="projects-broadcast bg-wheat"
        >
          <h1 className=" lg:Lmy-10 my-4 max-w-[36rem] justify-center px-2 text-center text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-7xl sm:text-6xl md:mt-4 xl:max-w-[43.5rem]">
            Projects Page
          </h1>
          <SuperChargedHalhPhone className="dark:bg-wheat mt-0 bg-transparent " />
        </div>
        <div id="project-list-wrapper" className="my-10 bg-sky-200/20">
          <ProjectsIndex projects={projectJson} />
        </div>

        <div className="relative mt-10 pt-10 xl:mt-2 xl:pt-0">
          <div className="absolute inset-x-0 top-0 top-0 hidden h-[37.5rem] bg-gradient-to-b from-[#0c1120] dark:block xl:top-8"></div>
          <div className="GridLockup_beams-0___8Vns absolute inset-x-0 top-0 top-0 bg-top bg-no-repeat xl:top-8"></div>
          <div className="bg-grid-slate-900/[0.04] dark:bg-grid-slate-100/[0.03] absolute inset-x-0 top-0 top-0 h-[37.5rem] bg-top [mask-image:linear-gradient(0deg,transparent,black)] dark:border-t dark:border-slate-100/5 dark:bg-[center_top_-1px] xl:top-8"></div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="flex flex-col lg:col-span-5 xl:col-span-6">
              <div className="xl:mt-18 flex text-4xl font-black lg:mt-10">
                <div className="grid w-full flex-none grid-cols-3 grid-rows-2 gap-8">
                  <div
                  //   style="transform:none"
                  >
                    <div className="pt-full relative overflow-hidden rounded-lg bg-white shadow-lg transition-[filter] duration-500">
                      <img
                        src="/_next/static/media/1.4985e539.jpg"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                        decoding="async"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div
                    className="col-start-3 col-end-4 row-start-2 row-end-3"
                    // style="transform:none"
                  >
                    <div className="pt-full relative overflow-hidden rounded-lg bg-white shadow-lg transition-[filter] duration-500">
                      <img
                        src="https://tailwindcss.com/_next/static/media/2.86c4c41e.jpg"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                        decoding="async"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div
                    className="origin-right"
                    //    style="transform:none"
                  >
                    <div className="pt-full relative overflow-hidden rounded-lg bg-white shadow-lg transition-[filter] duration-500">
                      <img
                        src="/_next/static/media/3.19759950.jpg"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                        decoding="async"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div
                  //   style="transform:none"
                  >
                    <div className="pt-full relative overflow-hidden rounded-lg bg-white shadow-lg transition-[filter] duration-500">
                      <img
                        src="/_next/static/media/4.a2ed7a78.jpg"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                        decoding="async"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <div
                    className="relative col-start-2 col-end-4 row-start-1 row-end-2 overflow-hidden rounded-lg bg-white shadow-lg transition-[filter] duration-500"
                    // style="opacity:1;transform:none"
                  >
                    <img
                      src="https://tailwindcss.com/_next/static/media/5.e8ff4aa4.jpg"
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                      decoding="async"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="-mx-4 mt-4 sm:mx-0 lg:col-span-7 lg:mt-0 xl:col-span-6">
              <div className="relative flex h-[31.625rem] max-h-[60vh] overflow-hidden bg-slate-800 shadow-xl dark:bg-slate-900/70 dark:ring-1 dark:ring-inset dark:ring-white/10 dark:backdrop-blur sm:max-h-[none] sm:rounded-xl lg:h-[34.6875rem] xl:h-[31.625rem]"></div>
            </div> */}
          </div>
        </div>
      </section>
      <div
        id="projects-page"
        className="lg:px-34 mb-32 px-4  lg:mb-64"
        // className="lg:px-34 mt-6 mb-32 px-4 sm:px-20   lg:mt-16 lg:mb-64 xl:mt-12 xl:px-32"
      >
        <SuperchagedTechSection />
        <SectionProjects className={'black-3-bg'} />
      </div>

      {/* <SimpleLayout
        title="I’ve spoken at events all around the world and been interviewed for many podcasts."
        intro="One of my favorite ways to share my ideas is live on stage, where there’s so much more communication bandwidth than there is in writing, and I love podcast interviews because they give me the opportunity to answer questions instead of just present my opinions."
      >
        <div className="space-y-20">
   A collection of well orginized and simplified courses to get you zéro to hero.
            <Appearance
              href="#"
              title="Programming your company operating system"
              description="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
              event="How They Work Radio, September 2021"
              cta="Listen to podcast"
            />
          </SpeakingSection>
        </div>
      </SimpleLayout> */}
    </>
  )
}

const ProjectsIndex = function (projects) {
  return (
    <>
      {projectJson.map((project) => {
        return (
          <div
            key={project.id}
            className="project-list relative  my-8 mt-20 grid  grid-cols-1 gap-x-4 gap-y-4 pb-2 sm:gap-x-6 md:gap-y-8 md:gap-y-8 md:gap-x-4 lg:my-20 lg:grid-cols-2 xl:gap-x-8"
          >
            <div className=" lg:mt-12lg:block sm:mx-6 lg:hidden">
              <Image
                className={clsx(
                  project.imageAspectRatio,
                  ' rounded-md' ??
                    'mt-2 aspect-[1216/640] sm:rounded-3xl md:mt-0 '
                )}
                key={project.id}
                src={project.images[0]}
                alt={project.projectImage.alt}
                sizes="100vw"
              />
            </div>

            <div
              id="project-content-text"
              className="relative flex h-[35.625rem] max-h-[42vh] overflow-hidden bg-slate-800 px-8 shadow-xl dark:bg-slate-900/70 dark:ring-1 dark:ring-inset dark:ring-white/10 dark:backdrop-blur sm:max-h-[none] sm:rounded-xl lg:mx-6 lg:h-[51.625rem] lg:h-[34.6875rem] lg:max-h-[60vh] xl:h-[31.625rem]"
            >
              <div className="-mx-4 mt-2 sm:mx-0 lg:col-span-7 lg:mt-0 xl:col-span-6">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                  <h2 className="mt-8 font-semibold text-indigo-500 dark:text-indigo-400">
                    {project.category}
                  </h2>
                  <p className="mt-4 text-3xl font-extrabold tracking-tight text-slate-100 dark:text-slate-50 sm:text-4xl ">
                    {project.name}
                  </p>
                  <div className="mt-2 max-w-3xl space-y-6 text-slate-200 lg:hidden">
                    <p>{project.description}</p>
                    <div className="md hidden py-4 sm:mx-6 lg:flex">
                      <Image
                        className={clsx(
                          project.imageAspectRatio,
                          ' rounded-md' ??
                            'mt-2 aspect-[1216/640] sm:rounded-3xl md:mt-0 lg:mt-12'
                        )}
                        key={project.id}
                        src={project.images[0]}
                        alt={project.projectImage.alt}
                        sizes="100vw"
                      />
                    </div>
                    {/* <p>
                      We've got first-class CSS grid support, composable
                      transforms and gradients powered by CSS variables, support
                      for modern state selectors like{' '}
                      <code className="font-mono font-medium text-slate-900 dark:text-slate-200 ">
                        :focus-visible
                      </code>
                      , and tons more.
                    </p> */}
                  </div>

                  <Link
                    className="group mt-8 inline-flex h-9 items-center whitespace-nowrap rounded-full bg-indigo-500 px-3 text-sm font-semibold text-indigo-100 hover:bg-indigo-200 hover:text-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500"
                    href="/docs/grid-template-columns"
                  >
                    More details
                    <span className="sr-only">Visit the projects page</span>
                    <svg
                      className="ml-3 overflow-visible text-indigo-300 group-hover:text-indigo-400 dark:text-white dark:group-hover:text-slate-400"
                      width="3"
                      height="6"
                      viewBox="0 0 3 6"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M0 0L3 3L0 6"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
  {
    /* <div className="mt-10">
          <div className="-mx-4 flex overflow-auto sm:mx-0">
            <ul
              className="grid-template-columns:repeat(3, minmax(6rem, 1fr)) inline-grid flex-none gap-x-2 px-4 sm:px-0 xl:gap-x-6"
              // style="grid-template-columns:repeat(3, minmax(6rem, 1fr))"
            >
              <li>
                <button
                  type="button"
                  className="group flex w-full flex-col items-center text-sm font-semibold text-indigo-600 dark:text-indigo-400"
                >
                  <svg
                    width="48"
                    height="48"
                    fill="none"
                    aria-hidden="true"
                    className="mb-6 text-indigo-500 dark:text-indigo-400"
                  >
                    <path
                      d="M5 13a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-6ZM5 29a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-6ZM19 29a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-6ZM33 29a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-6ZM19 13a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H22a3 3 0 0 1-3-3v-6Z"
                      fill="currentColor"
                      fill-opacity=".1"
                      stroke="currentColor"
                      stroke-width="2"
                    ></path>
                  </svg>
                  CSS Grid
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="group flex w-full flex-col items-center text-sm font-semibold "
                >
                  <svg
                    width="48"
                    height="48"
                    fill="none"
                    aria-hidden="true"
                    className="mb-6 text-slate-300 group-hover:text-slate-400 dark:text-slate-600 dark:group-hover:text-slate-500"
                  >
                    <path
                      d="M5.632 11.725a3 3 0 0 1 2.554-3.388l3.96-.557a3 3 0 0 1 3.389 2.554l.835 5.941a3 3 0 0 1-2.553 3.388l-3.961.557a3 3 0 0 1-3.389-2.553l-.835-5.942ZM1 29a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3v-6ZM20 34a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-6ZM36.728 27.026a3 3 0 0 1 3.558-2.31l3.913.831a3 3 0 0 1 2.31 3.558l-1.247 5.87a3 3 0 0 1-3.558 2.31l-3.913-.832a3 3 0 0 1-2.31-3.558l1.247-5.869ZM22.236 9.17a3 3 0 0 1 3.202-2.783l17.956 1.255a3 3 0 0 1 2.784 3.202l-.419 5.986a3 3 0 0 1-3.202 2.783l-17.956-1.255a3 3 0 0 1-2.784-3.202l.419-5.986Z"
                      fill="currentColor"
                      fill-opacity="0"
                      stroke="currentColor"
                      stroke-width="2"
                    ></path>
                  </svg>
                  Transforms
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="group flex w-full flex-col items-center text-sm font-semibold "
                >
                  <svg
                    width="48"
                    height="48"
                    fill="none"
                    aria-hidden="true"
                    className="mb-6 text-slate-300 group-hover:text-slate-400 dark:text-slate-600 dark:group-hover:text-slate-500"
                  >
                    <path
                      d="M31 30c0-7.18-5.82-13-13-13m-5.009 1C8.298 19.961 5 24.596 5 30c0 7.18 5.82 13 13 13 5.404 0 10.039-3.298 12-7.991"
                      stroke="currentColor"
                      stroke-width="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <circle
                      cx="30"
                      cy="18"
                      r="13"
                      fill="currentColor"
                      fill-opacity="0"
                      stroke="currentColor"
                      stroke-width="2"
                    ></circle>
                    <path
                      d="m26 30 4-4M21 27l6-6M18 22l4-4"
                      stroke="currentColor"
                      stroke-width="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  Filters
                </button>
              </li>
            </ul>
          </div>
        </div> */
  }
}
