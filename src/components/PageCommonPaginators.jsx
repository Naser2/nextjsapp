import Link from 'next/link'
import { ArrowLeftIcon } from './icons/Arrows'
import { useRouter } from 'next/router'
import clsx from 'clsx'

export const NextButton = ({ text, href, customize, textStyle }) => {
  return (
    <Link
      href={href}
      class={clsx(
        customize
          ? [
              customize,
              'justify-stretch flex flex flex inline-flex space-y-0 space-x-2 py-2 px-8 text-lg font-medium leading-6 leading-6 hover:rounded-full hover:bg-black hover:px-3 hover:text-white dark:items-center  sm:flex-row sm:space-y-0 sm:space-x-4 lg:rounded-full lg:px-4 lg:py-1.5 lg:font-semibold lg:leading-6 lg:ring-1 lg:ring-inset lg:ring-sky-600/20 ',
            ]
          : 'lg:bg-wheat flex flex justify-center px-4 py-0.5 text-center text-sm text-gray-700 text-black dark:bg-black dark:text-slate-400 '
      )}
    >
      <span
        className={clsx(
          textStyle
            ? [textStyle]
            : 'md:negative-btn-mr hover:text-white dark:text-white dark:text-black dark:hover:text-sky-100'
        )}
      >
        {text}
      </span>
      <svg
        class={clsx(
          textStyle
            ? [textStyle, 'h-5 w-5 py-0.5 pl-1']
            : ' h-5 w-5 py-0.5 pl-1 text-gray-700 dark:text-slate-400'
        )}
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
            className="group h-10 w-10 items-center justify-center rounded-full bg-slate-400/20  shadow-zinc-600/5 ring-1 ring-zinc-600/5 transition transition
                       transition duration-150 duration-150 ease-in-out ease-in-out 
                       hover:bg-slate-300 dark:border-zinc-700/50 dark:bg-black dark:ring-0 dark:ring-white/10
                       dark:hover:border-zinc-700 dark:hover:ring-white/20 md:justify-center md:bg-white md:p-3 md:shadow-md lg:absolute"
          >
            <ArrowLeftIcon className="h-4 w-4 stroke-black text-sky-600 transition group-hover:stroke-zinc-700 dark:stroke-white dark:stroke-zinc-100 dark:group-hover:stroke-zinc-400 lg:h-8 lg:w-8" />
          </Link>
        </div>
      )}
      {previousPathname && (
        <div className="flex" id="has-previous-path">
          <button
            type="button"
            onClick={() => router.back()}
            aria-label="Go back to projects"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100/80 p-2 shadow-lg shadow-zinc-600/5 ring-1 
            ring-zinc-600/5 ring-slate-900/5 ease-in-out hover:animate-bounce dark:bg-slate-900/90  dark:ring-slate-200/20 dark:hover:border-zinc-700 dark:hover:bg-black dark:hover:ring-white/20 lg:rounded-full lg:dark:bg-black
                      "
          >
            <ArrowLeftIcon
              large
              className="h-6 w-6 stroke-sky-500 py-0.5 px-0.5 transition group-hover:stroke-zinc-700 dark:stroke-sky-500 dark:group-hover:stroke-white  lg:h-8 lg:w-8 lg:py-1 lg:px-1"
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
      className="my-6 flex grid max-w-4xl grid-cols-[1fr,auto]  items-center md:mr-10 md:max-w-4xl lg:mt-10 lg:mb-20"
    >
      <GoBack previousPathname={previousPath} />
      <NextButton text={text} href={href} />
    </div>
  )
}

export default PageCommonPaginators
