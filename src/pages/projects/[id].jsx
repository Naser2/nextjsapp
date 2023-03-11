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
    console.log('ARRAY', array)
    // array.map((field) => {
    return (
      <dd className="mt-3 " key={project.title}>
        {array.map((field) => {
          return (
            <div key={field.label} className="flex">
              {/* <div className="pl-2 text-sm text-gray-500">{field.label}</div> */}
              <div className="text-sm text-gray-900" key={field.label}>
                <span
                  className="inlie-flex px-2 dark:text-slate-300"
                  key={field.value[0]}
                >
                  {delivrables[field.value[0].trim().toLowerCase()] !==
                  'undefined' ? (
                    <>
                      <span className="pr-2 text-sm text-gray-500">
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
                  <span className="px-0  dark:text-slate-300">
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
                    className="px-2 dark:text-slate-300"
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
                {/* <span className="px-2" key={field.value[3]}>
                  {field.value[-1]}
                </span> */}
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
      className="md:py-26 mx-8  py-14 lg:mx-32 "
    >
      <header class="lg:max-w-8xl">
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
            <div
              id="status"
              className="max-w-100 flex bg-sky-200/10 px-2 py-2  dark:mt-4 dark:rounded-md dark:bg-sky-200/10"
            >
              <p className="mr-2 min-w-0 flex-1" type="default">
                <div className="text-xl font-bold text-slate-800 dark:font-medium dark:text-slate-300/80">
                  STATUS
                </div>
                <span className="text-slate-900 dark:text-slate-400">
                  Ready <span className="deployment-status ready"></span>
                </span>
              </p>
              <div className="flex-2 min-w-0" type="default">
                <div className="text-xl font-bold text-slate-800  dark:text-slate-400/80">
                  <span className="ml-4 text-xl text-slate-800  dark:font-medium dark:text-slate-300/80">
                    DEPLOYED
                  </span>
                </div>
                <span className="ml-4 text-slate-400 dark:rounded-md dark:bg-slate-700 dark:px-2 dark:py-1">
                  14 months
                  <span className="dark:text-yellow-400/80"> (+2d ago)</span>
                </span>
              </div>
            </div>
            <span className="dark:black-2-bg  inline-flex bg-sky-200/10 px-2 pr-14 text-slate-900 dark:rounded-b dark:border-b  dark:border-red-300/30 dark:bg-transparent dark:py-2 dark:text-slate-200">
              <span className="mt-1 pr-2">
                <svg
                  data-testid="geist-icon"
                  fill="none"
                  height="16"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="16"
                  className="color: currentcolor"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M2 12h20"></path>
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"></path>
                </svg>
              </span>
              <span className="dark:text-sky-400 ">DOMAIN</span>
              <span id="url" className="ml-4 -mt-0.5">
                <WebsiteUrl
                  link={'nasdesign.vercel.app'}
                  href="https://nasdesign.vercel.app/blogs"
                />
              </span>
            </span>
          </div>
          <p
            id="project-satement"
            class="eyebrow-red ml-4 mt-2 mb-4 max-w-3xl hover:text-red-700  active:text-blue-500 dark:text-sky-500 dark:hover:text-indigo-400 md:mx-4 md:mt-0 md:w-1/3 lg:my-20"
          >
            <h1 class="mt-6 mb-4 italic sm:col-span-7 sm:mt-0  md:row-end-1">
              Inspired By
            </h1>
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
            <div className="mt-6 mb-4 sm:col-span-7 sm:mt-0 md:row-end-1">
              <h3 className="text-2xl font-medium text-gray-900 dark:text-white ">
                DESCRIPTION
              </h3>

              <p className="mt-2 flex  max-w-lg bg-sky-100/10 py-2 px-2 font-medium text-gray-800 dark:bg-transparent dark:text-slate-300">
                {project.description}
              </p>
              <h3 className="mt-6 mb-2 text-2xl font-medium text-gray-900 dark:text-white">
                TECHNOLOGIES
              </h3>
              <ul className="inline-flex">
                {project.tech &&
                  project.tech.map((t) => {
                    return (
                      <p
                        key={t}
                        className="mr-4 rounded-sm bg-sky-100/50  px-4 py-1 text-sm text-gray-600 dark:bg-transparent dark:text-sky-300/70  dark:text-slate-200 "
                      >
                        {t}
                      </p>
                    )
                  })}
              </ul>
            </div>
            <div className="sm:col-span-12 md:col-span-7">
              <dl className="grid grid-cols-1 gap-y-8 border-b border-gray-200 py-4 dark:border-gray-800 sm:grid-cols-1 sm:gap-x-6 sm:py-6 md:py-10">
                <div>
                  <dt className="text-2xl  font-medium text-gray-900 dark:text-white">
                    DELIVERABLES
                  </dt>

                  {projectDetails.map(({ scopes }, i) => {
                    return <TablewithTags array={scopes} key={project.title} />
                  })}
                </div>
                <div class="status-indicator_content__7XAr8">
                  <small
                    class="geist-text small"
                    // style={color: 'var(--geist-foreground)' font-size:"14px"}
                  >
                    Status:
                  </small>
                  <span
                    class="status-indicator_indicator__sOs1Y"
                    data-testid="footer/status/success"
                  ></span>
                  <small
                    class="geist-themed geist-success geist-ellipsis geist-text small w-500"
                    type="success"
                  >
                    All systems normal.
                  </small>
                </div>
                {/*<div>
                 <dt className="text-2xl font-medium text-gray-900 dark:text-white">
                    PENDING FEATURES
            
                  </dt>
                  <dd className="mt-3 space-y-3 text-gray-500">
                    <p>{project.email}</p>
                    <p>{project.phone}</p>
                    <div>
                      {projectDetails.map((i) => (
                        <li
                          key="pendingFeatures"
                          className="dark:text-slate-300"
                        >
                          {i.pendingFeatures}
                        </li>
                      ))}
                      <p
                        className="geist-text body-2"
                        title=""
                        type="secondary"
                      >
                        GitHub URL for&nbsp;&nbsp;
                        <Link
                          href="https://github.com/Naser2/nextjsapp/tree/main"
                          rel="noopener"
                          target="_blank"
                          class="link_link__LTNaQ filter-branch-entity-bar_entitySpan__AcHdW"
                        >
                          main
                        </Link>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Edit
                    </button>
                  </dd>
                </div> */}
              </dl>
              <p className="mt-6 font-medium text-gray-900 md:mt-10">
                {project.status} on{' '}
                <time dateTime={project.dateTime}>{project.date}</time>
              </p>
              <div className="mt-6">
                <div className="opacity-1  z-30 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="z-30 h-2 rounded-full bg-gradient-to-r from-indigo-600  to-teal-300 to-teal-600 py-2 text-base dark:bg-gray-700 "
                    style={{
                      width: `calc((${project.step} * 2 + 1) / 8 * 100%)`,
                    }}
                  />
                </div>

                <div className="mt-6 grid grid-cols-4 text-sm text-gray-600 sm:grid md:font-medium">
                  <div className="text-indigo-600">Order placed</div>
                  <div
                    className={clsx(
                      project.step > 0 ? 'text-indigo-400' : '',
                      'text-center'
                    )}
                  >
                    Processing
                  </div>
                  <div
                    className={clsx(
                      project.step > 1 ? 'text-sky-600' : '',
                      'text-center'
                    )}
                  >
                    Shipped
                  </div>

                  <div
                    className={clsx(
                      project.step == 5 ? 'text-teal-500' : '',
                      'text-right'
                    )}
                  >
                    Delivered
                  </div>
                </div>
                <MediaGallery
                  galleryTitle={'More Imges'}
                  collection={project.images.reverse()}
                />
              </div>
            </div>
          </div>
        ))}
        <PageCommonPaginators
          href="/projects/talk-it-out"
          previousPathname={previousPathname}
          text={'Next project'}
        />
        <NextButton text={'See next project'} href={'/projects/talk-it-out'} />

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
