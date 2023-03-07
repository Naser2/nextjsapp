import { Container } from '@/components/Container'

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="bg-wheat mt-0 sm:mt-0">
      {/* <div className="hero-top ">
        <div className="hero-top  make 2 at large grid"></div>
        <div className="hero-top-content section-content">
          <header className="max-w-4xl">
            <div className="mt-24 sm:mt-32 lg:mt-16">
              <a href="#" className="inline-flex space-x-6">
                <span className="bg-wheat rounded-full px-3 py-1 text-sm font-semibold leading-6 text-black ring-1 ring-inset ring-orange-600/20">
                  <h1 className="hero-title typography-body-bold">
                    Nase&nbsp;Design
                  </h1>
                </span>
                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-700">
                  <span>Just wrote a new blog</span>
                  <svg
                    className="h-5 w-5 text-gray-700"
                    x-description="Heroicon name: mini/chevron-right"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </a>
            </div>
            <div className="large-10 large-centered medium-12">
              <figure
                className="hero-icon apple-news-icon image-icon-news-plus"
                role="presentation"
              ></figure>

              <h2 className="hero-headline typography-section-headline">
                Hundreds of blogs <br /> and leading articles.
                <br /> One Blog at a time.
              </h2>
              <button
                className="button-news button-grand button-trial-download"
                data-analytics-exit-link=""
                data-url="applenewss://apple.news/subscription?itscg=10000&amp;itsct=nws-00-nws_ovp-try_hro-apl-lch-190325&amp;campaign_id=AN_Marcom_Hero"
                aria-label="Try Apple News+ free for 1 month"
                data-analytics-title="free trial-apple news plus"
                data-analytics-click="prop3:free trial-apple news plus"
                data-rid-relay='{"285":"itsct"}'
              >
                Only writting about what passionates me
                <span className="display:none">
                  <span className="footnote footnote-supglyph">
                    <a href="#footnote-1" aria-label="Footnote * symbol">
                      *
                    </a>
                  </span>
                </span>
              </button>
            </div> */}
      {/* <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          {intro}
        </p> */}
      {/* </header>
        </div>
      </div> */}

      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  )
}
