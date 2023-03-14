const IntroSection = () => {
  return (
    <div className="px-auto xl:items-left relative items-center lg:px-20 lg:pt-10 lg:pb-4">
      <div id="intro-wrapper" className="ml-6 pt-4 md:ml-10">
        <div id="intro-text" className="intro ">
          <h1
            className="col-start-1 row-start-2 
          max-w-[36rem] px-2 text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-7xl sm:text-6xl md:mt-4 md:text-5xl xl:max-w-[43.5rem]"
          >
            Doing it for love.
          </h1>{' '}
          <h1 className="col-start-1 row-start-2 max-w-[36rem] px-2 text-4xl font-extrabold tracking-tight text-slate-900/90 dark:text-white sm:text-7xl sm:text-6xl md:mt-4 xl:max-w-[43.5rem]">
            Bringing art to tech.
          </h1>
        </div>

        {/* <div
          id="intro-description"
          className="main-intro-paragraph b-orange-500   flex flex-col border-l-orange-500  lg:pb-6"
        > */}
        <div
          id="introdescription"
          className="lg:pb- flex flex-col px-2 lg:justify-center lg:px-0 lg:pl-6 lg:text-left"
        >
          <div className="">
            <p className="mt-2 text-xl leading-8 tracking-tight text-slate-700 dark:text-slate-400">
              Anim aute magna aliqua non deserunt sunt. Love all these things
              and more.
            </p>
            <p className="sr-only mt-0 text-xl leading-8 tracking-tight text-slate-700 dark:text-slate-400 md:not-sr-only">
              Qui irure qui Anim aute id magna aliqua ...
            </p>
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col lg:pb-6"></div> */}
    </div>
  )
}

export { IntroSection }
