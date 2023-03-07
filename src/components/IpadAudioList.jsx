export const IpadAudioList = () => {
  return (
    <article className="flex items-start space-x-4 p-4 sm:space-x-6 sm:p-6 lg:space-x-4 lg:p-4 xl:space-x-6 xl:p-6">
      <img
        src="/_next/static/media/prognosis-negative.6897ae50.jpg"
        loading="lazy"
        decoding="async"
        alt=""
        width="60"
        height="88"
        className="flex-none rounded-md bg-slate-100"
      />
      <div className="relative min-w-0 flex-auto">
        <h2 className="truncate font-semibold text-slate-900 dark:text-slate-100 sm:pr-20">
          Prognosis Negative
        </h2>
        <dl className="mt-2 flex flex-wrap text-sm font-medium leading-6">
          <div className="absolute top-0 right-0 hidden items-center space-x-1 dark:text-slate-100 sm:flex">
            <dt className="text-sky-500">
              <span className="sr-only">Star rating</span>
              <svg width="16" height="20" fill="currentColor">
                <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z"></path>
              </svg>
            </dt>
            <dd>2.66</dd>
          </div>
          <div className="dark:text-slate-200">
            <dt className="sr-only">Rating</dt>
            <dd className="rounded px-1.5 ring-1 ring-slate-200 dark:ring-slate-600">
              PG-13
            </dd>
          </div>
          <div className="ml-2">
            <dt className="sr-only">Year</dt>
            <dd>2021</dd>
          </div>
          <div>
            <dt className="sr-only">Genre</dt>
            <dd className="flex items-center">
              <svg
                width="2"
                height="2"
                fill="currentColor"
                className="mx-2 text-slate-300"
                aria-hidden="true"
              >
                <circle cx="1" cy="1" r="1"></circle>
              </svg>
              Comedy
            </dd>
          </div>
          <div>
            <dt className="sr-only">Runtime</dt>
            <dd className="flex items-center">
              <svg
                width="2"
                height="2"
                fill="currentColor"
                className="mx-2 text-slate-300"
                aria-hidden="true"
              >
                <circle cx="1" cy="1" r="1"></circle>
              </svg>
              1h 46m
            </dd>
          </div>
          <div className="mt-2 w-full flex-none font-normal">
            <dt className="sr-only">Cast</dt>
            <dd className="text-slate-400">Simon Pegg, Zach Galifianakis</dd>
          </div>
        </dl>
      </div>
    </article>
  )
}
