import clsx from 'clsx'
// import { getStaticPaths } from '../podcasts/[episode]'
import getProjects from '@/lib/getProjects'
import { filterProps } from 'framer-motion'
import getProjectById from '@/lib/getProjectById'
import { slugify } from '@/lib/slugify'
import { ArrowLeftIcon, ArrowRight } from '@/components/icons/Arrows'
import { useRouter } from 'next/router'
const { default: Link } = require('next/link')
import { WebsiteUrl } from '@/components/WebsiteUrl'
import { MediaGallery } from '@/components/SocialMediaGallery'
import Image from 'next/image'
import { CustomTag } from '@/components/CustomTag'
import { NextButton } from '@/components/PageCommonPaginators'
import PageCommonPaginators from '@/components/PageCommonPaginators'
import { AuthorIconAndName } from '@/components/icons/Image'
// import devImage from '@/images/nas_portraitt.png'
const Project = function ({ project, previousPathname, ...props }) {
  const delivrables = {
    write: 'write',
    edit: 'edit',
    delete: 'delete',
    update: 'update',
    post: 'post',
    create: 'create',
    deploy: 'deploy',
    add: 'add',
    rate: 'rate',
    comment: 'comment',
    like: 'like',
    share: 'share',
  }

  const TablewithTags = ({ array }) => {
    console.log('ARRAY-->>>>>', array)
    // array.map((field) => {
    return (
      <dd className="mt-3 px-6" key={project.title}>
        {array.map((field) => {
          return (
            <div key={field.label} className="flex">
              <div className="text-sm text-gray-900" key={field.label}>
                <span
                  className="inlie-flex px-2 dark:text-slate-300"
                  key={field.value[0]}
                >
                  {delivrables[field.value[0].trim().toLowerCase()] !==
                  'undefined' ? (
                    <>
                      <span className="pr-2 text-sm text-slate-900 dark:text-gray-500">
                        {field.label}
                      </span>
                      <CustomTag variant="medium">{field.value[0]}</CustomTag>
                    </>
                  ) : (
                    <span className="pr-2 " key={field.value[0]}>
                      {field.value[0]}
                    </span>
                  )}
                </span>
                {delivrables[field.value[1].trim().toLowerCase()] !==
                undefined ? (
                  <span className="row" key={field.value[1]}>
                    <CustomTag variant="medium">{field.value[1]}</CustomTag>
                  </span>
                ) : (
                  <span className="px-0  text-slate-900 dark:text-gray-500">
                    {field.value[1]}
                  </span>
                )}
                {field.value[2] &&
                delivrables[field.value[2].trim().toLowerCase()] !==
                  undefined ? (
                  <span className="row px-2" key={field.value[2]}>
                    <CustomTag variant="medium">{field.value[2]}</CustomTag>
                  </span>
                ) : (
                  <span
                    className="px-2 text-slate-900 dark:text-gray-500"
                    key={field.value[2]}
                  >
                    {field.value[2]}
                  </span>
                )}
                {field.value[3] &&
                delivrables[field.value[3].trim().toLowerCase()] !==
                  undefined ? (
                  <span className="row px-2" key={field.value[3]}>
                    <CustomTag variant="medium">{field.value[3]}</CustomTag>
                  </span>
                ) : (
                  <span className="px-2" key={field.value[3]}>
                    {field.value[3]}
                  </span>
                )}
              </div>
            </div>
          )
        })}
      </dd>
    )
    // })/
  }
  let { projectDetails } = project
  console.log(
    'PREVIOUS  IN COMP',
    previousPathname,
    'props',
    props.previousPathname
  )
  let router = useRouter()
  const IntroGrid =
    'flex-col md:lg:col-span-5 md:gap-x-10 lg:gap-x-20 md:xl:col-span-6 flex md:flex-row'
  return (
    <section
      aria-labelledby="products-heading"
      className="md:py-26 mx-8  py-14 pt-5 lg:mx-32 "
    >
      <header class="lg:max-w-8xl pt-6 md:pt-10">
        <PageCommonPaginators
          href="/projects/talk-it-out"
          previousPathname={previousPathname}
          text={'Next project'}
        />
        <div
          id="project-header"
          className={clsx(
            project.projectDetails[0].statment && IntroGrid,
            'large-10 large-centered medium-12 pb-20'
          )}
        >
          <div
            id="header-main-info"
            className="sm:col-span-4 md:col-span-7 md:col-span-7 md:row-span-2 md:w-2/3"
          >
            <div
              class="justify-stretch lg:bg-wheat flex inline-flex space-y-0 space-x-2 
          py-2 pl-5 text-sm text-sm font-medium leading-6 text-gray-700 text-black hover:rounded-full hover:bg-black hover:px-3 
          hover:text-white dark:items-center dark:text-slate-400 sm:flex-row sm:space-y-0 sm:space-x-4 
          lg:rounded-full lg:px-3 lg:py-1 lg:font-semibold lg:leading-6  lg:ring-inset lg:dark:ring-1 lg:dark:ring-sky-600/20"
            >
              <span className="sr-only md:not-sr-only">
                Project {project.title}
              </span>
            </div>
            <h2
              class={clsx(
                'typography-section-headline text-4xl',
                project.theme
                  ? project.theme.textcolor
                  : 'text-slate-800 dark:text-slate-100'
              )}
            >
              {project.title}
            </h2>
            <h2
              class={clsx(
                'typography-section-headline text-4xl  text-slate-800 dark:text-slate-100'
              )}
            >
              whith {project.tech[0]}
            </h2>
            <div class="status-indicator max-w-100 flex rounded-md border border-slate-200 bg-transparent px-4 py-2">
              <small
                class="text-lg text-slate-900 dark:text-slate-400"
                // style={color: 'var(--geist-foreground)' font-size:"14px"}
              >
                Activity Monitor
              </small>
              <span class="relative mx-3 mt-2 flex h-3 w-3 ">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                <span class="relative inline-flex h-3 w-3 rounded-full bg-sky-500"></span>
              </span>
              <small
                class="geist-themed system-normal geist-ellipsis text-md blue_txt mt-1"
                type="system-normal"
              >
                All systems normal.
              </small>
            </div>
            <div
              id="status"
              className="max-w-100 dark:bg-sky-fade flex px-3 py-2  dark:mt-4 dark:rounded-md "
            >
              {/* dark:bg-sky-200/10 */}
              <p className="mr-2 min-w-0 flex-1 py-1" type="default">
                <div className="my-0.1 text-lg  text-slate-800 dark:font-medium dark:text-slate-300/80">
                  STATUS
                </div>
                <span className="text-slate-900 dark:text-slate-400">
                  Ready <span className="deployment-status ready"></span>
                </span>
              </p>
              <div className="flex-2 -mt-1" type="default">
                <div className="my-0.1 text-lg text-slate-800  dark:text-slate-400/80">
                  <span className="ml-4 text-xl text-slate-800  dark:font-medium dark:text-slate-300/80">
                    DEPLOYED
                  </span>
                </div>
                <span className="ml-4 dark:rounded-md dark:bg-slate-700 dark:px-2 dark:py-1 dark:text-slate-400">
                  14 months
                  <span className="dark:text-yellow-400/80"> (+2d ago)</span>
                </span>
              </div>
            </div>
          </div>
          <p
            id="project-satement"
            class="eyebrow-red ml-4 mt-2 mb-4 max-w-3xl hover:text-red-700  active:text-blue-500 dark:text-sky-500 dark:hover:text-indigo-400 md:mx-4 md:mt-0 md:w-1/3 lg:my-20"
          >
            <h1 class="mt-6 mb-4 text-slate-400 sm:col-span-7 sm:mt-0  md:row-end-1">
              Developers on main branch
            </h1>
            <div
              class="flex h-10 w-10 animate-bounce 
            items-center justify-center rounded-full bg-white p-2 shadow-lg
             ring-1 ring-slate-900/5 dark:bg-slate-800 dark:ring-slate-200/20"
            >
              <svg
                class="h-6 w-6 text-violet-500"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
            <div className="flex items-center gap-4  p-4 ">
              <img
                className=" hover:animate-ring h-12 w-12 rounded-full transition duration-150 ease-in-out"
                src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=80"
              />
              <div id="dev-on-development" className="flex-block">
                <div className="rounded-md bg-slate-100 px-2 py-0.5 text-sm font-medium text-slate-900 dark:bg-slate-600 dark:bg-slate-100 dark:text-slate-200">
                  Main dev
                </div>
                <strong className="rounded-md  text-sm font-medium text-slate-900 dark:text-slate-200">
                  Nasser Sanou
                </strong>
              </div>
            </div>
            {/* <AuthorIconAndName image={devImage} /> */}
            {project.projectDetails[0].statment}
          </p>
        </div>
      </header>
      <h2 id="products-heading" className="sr-only">
        Project Completed
      </h2>

      <div className="space-y-24">
        {products.map((product) => (
          <div
            key={project.id}
            className="grid grid-cols-1 text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-8"
          >
            <div className="sm:col-span-4 md:col-span-7 md:row-span-2 md:row-end-2">
              <div className="overflow-hidden rounded-lg bg-gray-50">
                <Image
                  src={project.images[0].src}
                  alt={project.images[0]}
                  height={project.images[0].height}
                  width={project.images[0].width}
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className=" mb-4 bg-sky-100/10  dark:bg-white sm:col-span-7 sm:mt-0 md:row-end-1 ">
              <div className=" dark:bg-white sm:col-span-12 md:col-span-7">
                <dl className="grid grid-cols-1 gap-y-2 border-b border-gray-200 py-4 dark:border-gray-800 sm:grid-cols-1 sm:gap-x-6 ">
                  <div>
                    <dt className="tech-max-w rounded-sm  bg-sky-300/20 px-2.5 py-0.5 text-2xl  font-medium text-gray-900">
                      DESCRIPTION
                    </dt>
                    <p className="py-2  px-4 text-xl  text-gray-700 dark:bg-transparent">
                      {project.description}
                    </p>
                  </div>
                </dl>
              </div>
              <div className=" dark:bg-white sm:col-span-12 md:col-span-7">
                <dl className="grid grid-cols-1 gap-y-2 border-b border-gray-200 py-4 dark:border-gray-800 sm:grid-cols-1 sm:gap-x-6 sm:py-3 ">
                  <div>
                    <dt className="tech-max-w bg-sky-slate/30  rounded-sm px-2.5 py-0.5 text-2xl  font-medium text-gray-900">
                      TECHNOLOGIES
                    </dt>
                    <ul className="inline-flex px-2 py-4">
                      {project.tech &&
                        project.tech.map((t) => {
                          return (
                            <p
                              key={t}
                              className="mr-4 rounded-sm bg-sky-100/50  px-4 py-1 text-sm text-gray-600 dark:bg-transparent dark:text-sky-600/90 "
                            >
                              {t}
                            </p>
                          )
                        })}
                    </ul>
                  </div>
                </dl>
              </div>
            </div>

            <div className="pb-20 dark:bg-white sm:col-span-12 md:col-span-7 ">
              <dl className="grid grid-cols-1 gap-y-2 border-b border-gray-200 py-4 dark:border-gray-800 sm:grid-cols-1 sm:gap-x-6 sm:py-1 md:py-4">
                <div>
                  <dt className="tech-max-w flex rounded-sm  px-2.5 py-0.5 text-2xl  font-medium text-gray-900">
                    DELIVERABLES{' '}
                    <span class="flex translate-x-5 flex-col items-center space-y-2">
                      <div
                        id="project-deliverables-status"
                        class={clsx(
                          project.projectDetails[0].delivrables
                            .delivrablesStatus
                            ? project.projectDetails[0].delivrables
                                .delivrablesStatus
                            : 'bg-blue-500',
                          '-mt-1  h-8  w-8 rounded-full border-4  border-white shadow-lg'
                        )}
                      ></div>
                      <div class="h-4 w-0.5 bg-slate-300"></div>
                    </span>
                  </dt>
                  <span className="">
                    {projectDetails.map((detail, i) => {
                      console.log('DELIVRABLES-SCOPES-->:', detail)
                      // return <h1 key={i}>Scope</h1>
                      return (
                        <TablewithTags
                          array={detail.scopes}
                          key={project.title}
                        />
                      )
                    })}
                  </span>
                </div>
              </dl>

              <div className="mt-6 px-4">
                <div className="opacity-1  z-30 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="z-30 h-1.5 rounded-full bg-gradient-to-r from-indigo-600  to-teal-300 to-teal-600 py-2 text-base dark:bg-gray-700 "
                    style={{
                      width: `calc((${project.step} * 2 + 1) / 8 * 100%)`,
                    }}
                  />
                </div>

                <div className="mt-6 grid grid-cols-4 text-sm text-gray-600 sm:grid md:font-medium">
                  <div className="text-indigo-600">Wireframed</div>
                  <div
                    className={clsx(
                      project.step > 0 ? 'text-indigo-400' : '',
                      'text-center'
                    )}
                  >
                    Developing
                  </div>
                  <div
                    className={clsx(
                      project.step > 1 ? 'text-sky-600' : '',
                      'text-center'
                    )}
                  >
                    Iterations
                  </div>

                  <div
                    className={clsx(
                      project.step == 5 ? 'text-teal-500' : '',
                      'text-right'
                    )}
                  >
                    Completed
                  </div>
                </div>
                {/* <MediaGallery
                  galleryTitle={'More Imges'}
                  collection={project.images.reverse()}
                /> */}
              </div>
            </div>
          </div>
        ))}
        <PageCommonPaginators
          href="/projects/talk-it-out"
          previousPathname={previousPathname}
          text={'Next project'}
        />

        {/* collection,
    galleryTitle,
    galleryTitleUndeline,
    galleryMessage = '', */}
      </div>
    </section>
  )
}

const products = [
  {
    id: 1,
    name: 'Distant Mountains Artwork Tee',
    price: '$36.00',
    description:
      'You awake in a new, mysterious land. Mist hangs low along the distant mountains. What does it mean?',
    address: ['Floyd Miles', '7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
    email: 'f•••@example.com',
    phone: '1•••••••••40',
    href: '#',
    status: 'Completed',
    step: 3,
    date: 'March 24, 2021',
    dateTime: '2021-03-24',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/confirmation-page-04-product-01.jpg',
    imageAlt:
      'Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade.',
  },
  // More products...
]

export async function getStaticProps({ params }) {
  console.log('params: ', params.id)
  let projectId = params.id
  let projects = await getProjects()
  // let p = projects
  //   .map(
  //     ({
  //       name,
  //       description,
  //       longDescription,
  //       projectImage,
  //       images,
  //       projectDetails,
  //     }) => ({
  //       name,
  //       description,
  //       longDescription,
  //       projectImage,
  //       images,
  //       projectDetails,
  //     })
  //   )
  //   .find(({ name }) => slugify(name) === params.id)

  return {
    props: {
      project: await getProjectById(projects, projectId),
    },
  }
}
export async function getStaticPaths() {
  let projects = await getProjects()
  console.log('Projects: ' + projects)
  // let feed = await parse('https://their-side-feed.vercel.app/api/feed')

  return {
    paths: projects.map(({ title }) => ({
      params: {
        id: title.toString(),
      },
    })),
    fallback: 'blocking',
  }
}
export default Project
