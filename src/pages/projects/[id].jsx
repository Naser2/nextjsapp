import clsx from 'clsx'
// import { getStaticPaths } from '../podcasts/[episode]'
import getProjects from '@/lib/getProjects'
import { filterProps } from 'framer-motion'
import getProjectById from '@/lib/getProjectById'
import { slugify } from '@/lib/slugify'
import { ArrowLeftIcon } from '@/components/icons/Arrows'
import { useRouter } from 'next/router'
const { default: Link } = require('next/link')

const Project = function ({ project, previousPathname, ...props }) {
  console.log(
    'PREVIOUS  IN COMP',
    previousPathname,
    'props',
    props.previousPathname
  )
  let router = useRouter()

  return (
    <section
      aria-labelledby="products-heading"
      className="mx-8 py-24  md:py-36 lg:mx-32 "
    >
      <header class="max-w-4xl">
        <div id="section-note-wrapper">
          <Link class="inline-flex space-x-6" href="/projects#">
            {!previousPathname && (
              <div className="lg:ml-4 lg:py-2">
                <Link
                  type="link"
                  href={'/projects/'}
                  aria-label="No-previous-pathname-go-to-project"
                  className="xl:mt-34 lg:mt-34 group flex h-10 w-10 items-center justify-center 
                             rounded-full bg-white shadow-md
                             shadow-zinc-600/5 ring-1 ring-zinc-600/5 transition dark:border dark:border-zinc-700/50 
                             dark:bg-black dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 
                             dark:hover:ring-white/20 lg:absolute lg:-left-1
                           lg:ml-8 lg:h-16 lg:w-16 xl:-top-4 xl:left-0"
                >
                  <ArrowLeftIcon className="h-4 w-4  stroke-sky-600 transition group-hover:stroke-zinc-500 dark:stroke-sky-400 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400 lg:h-8 lg:w-8" />
                </Link>
              </div>
            )}
            {previousPathname && (
              <div className="lg:ml-4 lg:py-2">
                <button
                  type="button"
                  onClick={() => router.back()}
                  aria-label="Go back to projects"
                  className="xl:mt-34 lg:mt-34 group mt-10 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-600/5 ring-1 ring-zinc-600/5 transition dark:border dark:border-zinc-700/50 dark:bg-black dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-1 lg:ml-8 lg:ml-8 lg:h-16 lg:h-16  lg:w-16
                           lg:w-16 xl:top-20 xl:left-0  xl:left-0"
                >
                  <ArrowLeftIcon
                    large
                    className="h-4 w-4 stroke-sky-500 text-sky-600  transition group-hover:stroke-zinc-700 dark:stroke-white dark:stroke-zinc-100 dark:group-hover:stroke-zinc-400 lg:h-8 lg:w-8"
                  />
                </button>
              </div>
            )}
            {/* <span class="bg-wheat rounded-full px-3 py-1 text-sm font-semibold leading-6 text-black ring-1 ring-inset ring-orange-600/20">
              <h1 class="hero-title typography-body-bold  ">project-page</h1>
            </span> */}
            <span class="inline-flex items-center space-x-2 pl-10 text-sm font-medium leading-6 text-gray-700 dark:text-slate-400 md:ml-0">
              <span>See next project</span>
              <svg
                class="h-5 w-5 text-gray-700 dark:text-slate-400"
                x-description="Heroicon name: mini/chevron-right"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </Link>
        </div>
        <div class=" large-10 large-centered medium-12 pb-20">
          <figure
            class="hero-icon apple-news-icon image-icon-news-plus"
            role="presentation"
          ></figure>
          <h2 class="hero-headline typography-section-headline text-slate-800 dark:text-slate-100">
            {project.name}
          </h2>
        </div>
      </header>
      <h2 id="products-heading" className="sr-only">
        Project Completed
      </h2>

      <div className="space-y-24 ">
        {products.map((product) => (
          <div
            key={project.id}
            className="grid grid-cols-1 text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-8"
          >
            <div className="sm:col-span-4 md:col-span-5 md:row-span-2 md:row-end-2">
              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-50">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="mt-6 sm:col-span-7 sm:mt-0 md:row-end-1">
              <h3 className="text-lg font-medium text-gray-900">
                <Link href={slugify(project.name)}> Project Description</Link>
              </h3>
              <ul>
                {project.tech &&
                  project.tech.map((t) => {
                    return (
                      <p key={t} className="mt-1 font-medium text-gray-900">
                        {t}
                      </p>
                    )
                  })}
              </ul>

              <p className="mt-3 text-gray-500">{project.description}</p>
            </div>
            <div className="sm:col-span-12 md:col-span-7">
              <dl className="grid grid-cols-1 gap-y-8 border-b border-gray-200 py-8 sm:grid-cols-2 sm:gap-x-6 sm:py-6 md:py-10">
                <div>
                  <dt className="font-medium text-gray-900">Delivery scope</dt>
                  <dd className="mt-3 text-gray-500">
                    <span className="block">{product.address[0]}</span>
                    <span className="block">{product.address[1]}</span>
                    <span className="block">{product.address[2]}</span>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">
                    Shipping updates
                  </dt>
                  <dd className="mt-3 space-y-3 text-gray-500">
                    <p>{product.email}</p>
                    <p>{product.phone}</p>
                    <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Edit
                    </button>
                  </dd>
                </div>
              </dl>
              <p className="mt-6 font-medium text-gray-900 md:mt-10">
                {product.status} on{' '}
                <time dateTime={product.dateTime}>{product.date}</time>
              </p>
              <div className="mt-6">
                <div className="opacity-1  z-30 overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="z-30 h-2 rounded-full bg-gradient-to-r from-indigo-600  to-teal-300 to-teal-600 py-2 text-base dark:bg-gray-700 "
                    style={{
                      width: `calc((${product.step} * 2 + 1) / 8 * 100%)`,
                    }}
                  />
                </div>
                {/* <div class="relative overflow-auto rounded-xl p-8">
                <div class="flex justify-center -space-x-3 font-mono text-sm font-bold leading-6 text-white">
                    <div
                      className="z-40 h-2 rounded-full bg-indigo-600"
                      style={{
                        width: `calc((${product.step} * 2 + 1) / 8 * 100%)`,
                      }}
                    />
                   <div
                      className="opacity-2 absolute -top-10 z-30 h-2 rounded-full bg-black"
                      style={{
                        width: `calc((${product.step} * 2 + 1) / 8 * 100%)`,
                      }}
                    />
                    <div class="z-40 flex h-16 w-16 items-center justify-center rounded-full bg-pink-500 shadow-lg ring-2 ring-white dark:ring-slate-900">
                      05
                    </div>
                    <div class="z-30 flex h-16 w-16 items-center justify-center rounded-full bg-pink-500 shadow-lg ring-2 ring-white dark:ring-slate-900">
                      04
                    </div>
                    <div class="z-20 flex h-16 w-16 items-center justify-center rounded-full bg-pink-500 shadow-lg ring-2 ring-white dark:ring-slate-900">
                      03
                    </div>
                    <div class="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-pink-500 shadow-lg ring-2 ring-white dark:ring-slate-900">
                      02
                    </div>
                    <div class="z-0 flex h-16 w-16 items-center justify-center rounded-full bg-pink-500 shadow-lg ring-2 ring-white dark:ring-slate-900">
                      01
                    </div> 
                  </div>
                </div>*/}
                {/* <div className="relative overflow-hidden rounded-full bg-teal-200">
                  <div
                    className="opacity-2 absolute -top-10 z-40 h-2 rounded-full bg-teal-500"
                    style={{
                      width: `calc((${product.step} * 2 + 1) / 8 * 104%)`,
                    }}
                  /> 
                </div> */}
                <div className="mt-6 grid grid-cols-4 text-sm text-gray-600 sm:grid md:font-medium">
                  <div className="text-indigo-600">Order placed</div>
                  <div
                    className={clsx(
                      product.step > 0 ? 'text-indigo-400' : '',
                      'text-center'
                    )}
                  >
                    Processing
                  </div>
                  <div
                    className={clsx(
                      product.step > 1 ? 'text-sky-600' : '',
                      'text-center'
                    )}
                  >
                    Shipped
                  </div>

                  <div
                    className={clsx(
                      product.step == 5 ? 'text-teal-500' : '',
                      'text-right'
                    )}
                  >
                    Delivered
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
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
    paths: projects.map(({ name }) => ({
      params: {
        id: name.toString(),
      },
    })),
    fallback: 'blocking',
  }
}
export default Project
