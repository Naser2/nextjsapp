import clsx from 'clsx'
import css from 'styled-jsx/css'

export const Intro = ({
  content,
  h1Class,
  h20Class,
  h21Class,
  descriptionClass,
  name,
  nameClass,
  tag = '',
  href,
}) => {
  const { h1, h2, description } = content

  const IntroGrid =
    'flex-col md:lg:col-span-5 md:xl:col-span-6 flex md:flex-row'
  return (
    <div
      className={clsx(
        name && IntroGrid,
        'lg:max-w-8xl mx-auto  px-8 pt-10 lg:mx-0 xl:pt-40'
      )}
    >
      <div
        id="intro-name-mobile"
        className="mx-4 mt-4 max-w-3xl md:mt-0  lg:sr-only"
      >
        <h1
          className={clsx(
            nameClass,
            'col-start-1 row-start-2 -mx-4 mt-4 mt-4  max-w-[36rem] px-4 px-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:mx-0 sm:text-7xl sm:text-6xl md:pt-10 lg:col-span-7 lg:mt-0 xl:col-span-6  xl:max-w-[43.5rem] '
          )}
        >
          {name}
        </h1>
        {content.tag && (
          <p
            className={clsx(
              content.tag.color && content.tag.color,
              'eyebrow-red  mt-2 mb-4 hover:text-red-700 active:text-blue-500 dark:text-sky-500 dark:hover:text-indigo-400 md:mx-6 '
            )}
          >
            {content.tag.text && content.tag.text}
          </p>
        )}
      </div>
      <div id="intro-content-large-device" className="lg:pl-10 ">
        <h1
          className={clsx(
            h1Class,
            'col-start-1 row-start-2 mt-4 max-w-[36rem] px-4 px-2 text-4xl font-extrabold tracking-tight sm:text-7xl sm:text-6xl  xl:max-w-[43.5rem]'
          )}
        >
          {h1}
        </h1>
        <div className="max-w-3xl ">
          <h2
            className={clsx(
              h20Class
                ? [
                    h20Class,
                    'headline typography-headline px-4  text-3xl font-medium tracking-tight text-slate-100/80',
                  ]
                : 'headline typography-headline px-4  text-3xl font-medium tracking-tight text-slate-100/80 dark:text-slate-100 dark:text-white'
            )}
          >
            {h2[0] ?? defaultContent.h2[0]}

            {h2[1] && (
              <span className={clsx(h21Class, 'ml-1  text-white lg:ml-2 ')}>
                {h2[1] ?? ''}
              </span>
            )}

            <span className={clsx(h21Class, 'text-red-40 mr-1 lg:mr-2')}>
              .
            </span>
            {h2[2] ?? ' '}
          </h2>

          {/* {description && (
            <p
              className={clsx(
                descriptionClass,
                'mt-2 max-w-2xl px-4 py-2  text-lg'
              )}
            >
              {description}
            </p>
          )} */}
        </div>
      </div>
      <div
        id="intro-name"
        className="sr-only mx-4 mt-4 max-w-3xl md:mt-0 lg:not-sr-only"
      >
        <h1
          className={clsx(
            nameClass,
            'col-start-1 row-start-2 -mx-4 mt-4 mt-4  max-w-[36rem] px-4 px-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:mx-0 sm:text-7xl sm:text-6xl md:pt-10 lg:col-span-7 lg:mt-0 xl:col-span-6  xl:max-w-[43.5rem] '
          )}
        >
          {name}
        </h1>
        <p className="eyebrow-red  ml-4  mt-2 mb-4 hover:text-red-700 active:text-blue-500 dark:text-sky-500 dark:hover:text-indigo-400">
          {content.tag.text}
        </p>
        {description && (
          <p
            className={clsx(
              descriptionClass,
              'mt-2 max-w-2xl px-4 py-2  text-lg text-slate-600'
            )}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
const defaultContent = {
  h1: 'NO H1 TEXT PROVIDED',
  h2: ['NO H2 [0]', 'to win', 'Try it for yourself'],
  description:
    ' MiraProjects was built with React and Sanity with a modular aproach and a simplitisc design concept.',
}