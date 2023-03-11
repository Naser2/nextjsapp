import Link from 'next/link'
import clsx from 'clsx'
import { ArrowLeftIcon, ArrowRight } from './icons/Arrows'
function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
      />
    </svg>
  )
}

const variantStyles = {
  primary:
    'bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-black dark:text-white dark:ring-1 dark:ring-inset dark:ring-blue-400/20 dark:hover:bg-black dark:hover:text-white dark:hover:ring-blue-300',
  secondary:
    ' bg-zinc-100 py-1 px-3 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300',
  filled:
    ' bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-emerald-500 dark:text-white dark:hover:bg-emerald-400',
  transparent:
    'inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition rounded-full py-1 px-3 text-zinc-700 ring-1 ring-inset ring-zinc-900/10 hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:ring-white/10 dark:hover:bg-white/5 dark:hover:text-white',
  outline:
    ' py-1 px-3 text-zinc-700 ring-1 ring-inset ring-zinc-900/10 hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:ring-white/10 dark:hover:bg-white/5 dark:hover:text-white',
  text: 'text-emerald-500 hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500',
}

export function Button({
  variant = 'primary',
  className,
  children,
  arrow,
  rounded,
  ...props
}) {
  let Component = props.href ? Link : 'button'

  className = clsx(
    rounded ?? 'rounded-full',
    'inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition',
    variantStyles[variant],
    className
  )

  let arrowIcon = (
    <ArrowIcon
      className={clsx(
        'mt-0.5 h-5 w-5',
        variant === 'text' && 'relative top-px',
        arrow === 'left' && '-ml-1 rotate-180',
        arrow === 'right' && '-mr-1'
      )}
    />
  )

  return (
    <Component className={className} {...props}>
      {arrow === 'left' && arrowIcon}
      {children}
      {arrow === 'right' && arrowIcon}
    </Component>
  )
}

export function ButtonRoundedMd({ href, className, ...props }) {
  className = clsx(
    'inline-flex justify-center rounded-3xl bg-slste-600 px-4 py-2 text-base font-semibold text-white hover:bg-black focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:text-white/70',
    className
  )

  return href ? (
    <Link href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}

export function CommomButtonMd({ href, className, ...props }) {
  // console.log('BTN PPROPS', props)
  return (
    <div
      id={`${props.text}` ?? 'action-btn'}
      className={clsx(className, 'px-2')}
    >
      <Link
        className={clsx(
          props.theme.bg ?? variantStyles.primary,
          props.theme.text ?? 'text-pink-600',
          'group inline-flex h-9 items-center whitespace-nowrap rounded-full px-3 text-sm font-semibold  focus:outline-none focus:ring-2 focus:ring-pink-600 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-600 dark:hover:text-white dark:focus:ring-slate-500'
        )}
        href="/docs/configuration"
      >
        {props.arrow == 'left' && (
          <svg
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
            className="mt-0.5 -ml-1 h-5 w-5 rotate-180"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
            ></path>
          </svg>
        )}
        {props.text}
        <span className="sr-only">
          {props.srText ? props.srText : 'a button'}
        </span>
        {props.arrow == 'right' && (
          <svg
            className="ml-3 overflow-visible text-pink-300 group-hover:text-pink-400 dark:text-slate-500 dark:group-hover:text-slate-400"
            width="3"
            height="6"
            viewBox="0 0 3 6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M0 0L3 3L0 6"></path>
          </svg>
        )}
      </Link>
    </div>
  )
}

export const ActionAbleButton = ({
  handleSubmit,
  showSendingBtn,
  btnText,
  fetchingBtnText,
}) => {
  return (
    <div className="mt-6 flex items-center justify-center">
      {!showSendingBtn && (
        <button
          type="button"
          className="inline-flex w-32 items-center rounded-md bg-slate-900 px-10 py-2 text-center text-sm font-semibold leading-6 text-white shadow hover:bg-black"
          disabled={showSendingBtn && true}
          onClick={() => handleSubmit(event)}
        >
          {btnText ?? 'Send'} <ArrowRight color="text-white" />
        </button>
      )}

      {/* isFetching &&  */}
      {showSendingBtn && (
        <button
          type="button"
          className="inline-flex items-center rounded-md bg-slate-700 px-4 py-2 text-sm font-semibold leading-6 text-white shadow hover:bg-slate-900"
          disabled={true}
        >
          <svg
            className="-ml-1 mr-3 h-5 w-5 animate-spin text-orange-400 motion-reduce:hidden"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          {fetchingBtnText ?? ' Sending...'}
          <ArrowRight color="text-white" />
        </button>
      )}
    </div>
  )
}
