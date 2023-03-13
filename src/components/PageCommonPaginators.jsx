import Link from 'next/link'
import { ArrowLeftIcon } from './icons/Arrows'
import { useRouter } from 'next/router'

export const NextButton = ({ text, href }) => {
  return (
    <Link
      href={href}
      class="justify-stretch lg:bg-wheat flex inline-flex space-y-0 space-x-2 py-2 pl-5 text-sm text-sm font-medium leading-6 text-gray-700 text-black hover:rounded-full hover:bg-black hover:px-3 hover:text-white dark:items-center dark:bg-black dark:text-slate-400 sm:flex-row sm:space-y-0 sm:space-x-4 lg:rounded-full lg:px-3 lg:py-1 lg:font-semibold lg:leading-6 lg:ring-1 lg:ring-inset lg:ring-sky-600/20"
    >
      <span>{text}</span>
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
    </Link>
  )
}

const GoBack = ({ previousPathname }) => {
  let router = useRouter()

  return (
    <>
      {!previousPathname && (
        <div className="max-w-10xl mt-2 lg:ml-4">
          <Link
            type="link"
            href={'/projects/'}
            aria-label="No-previous-pathname-go-to-project"
            className="group h-10 w-10 items-center justify-center
                       shadow-zinc-600/5 ring-1 ring-zinc-600/5 transition hover:bg-slate-300 
                       dark:border-zinc-700/50 dark:bg-black dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700
                       dark:hover:ring-white/20 md:justify-center md:rounded-full md:bg-white md:p-3 md:shadow-md lg:absolute"
          >
            <ArrowLeftIcon className="h-4 w-4 stroke-black text-sky-600 transition group-hover:stroke-zinc-700 dark:stroke-white dark:stroke-zinc-100 dark:group-hover:stroke-zinc-400 lg:h-8 lg:w-8" />
          </Link>
        </div>
      )}
      {previousPathname && (
        <div className="flex">
          <button
            type="button"
            onClick={() => router.back()}
            aria-label="Go back to projects"
            className="group h-10 w-10 items-center justify-center
                      justify-center bg-transparent p-3 shadow-md 
                      shadow-zinc-600/5 ring-1 ring-zinc-600/5 transition dark:border  dark:border-zinc-700/50
                      dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:rounded-full lg:dark:bg-black"
          >
            <ArrowLeftIcon
              large
              className="h-4 w-4 stroke-black  transition group-hover:stroke-zinc-700 dark:stroke-white dark:stroke-zinc-100 dark:group-hover:stroke-zinc-400 lg:h-8 lg:w-8"
            />
          </button>
        </div>
      )}
    </>
  )
}

const PageCommonPaginators = ({ text, href, previousPathname }) => {
  let router = useRouter()
  let previousPath = previousPathname ?? 'router.previousPathname'
  console.log('COOMPAGE PROPS:', text, href, ' useRouter().pathname')
  return (
    <div
      id="section-top-item-and-go-back"
      className="my-6 grid max-w-4xl grid-cols-[1fr,auto]  items-center md:mr-10 md:max-w-4xl lg:mt-10 lg:mb-20"
    >
      <GoBack previousPathname={previousPath} />
      <NextButton text={text} href={href} />
    </div>
  )
}

export default PageCommonPaginators