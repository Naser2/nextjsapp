export const progressBar = () => {
  return (
    <>
      <span data-view-component="true" className="Progress width-100">
        <span
          style={{ backgroundColor: '#3178c6', width: ' 82.3%' }}
          itemprop="keywords"
          aria-label="TypeScript 82.3"
          data-view-component="true"
          class="Progress-item color-bg-success-emphasis git-blue-bg"
        ></span>
        <span
          style={{ backgroundColor: '#89e051', width: '10.1%' }}
          itemprop="keywords"
          aria-label="Shell 10.1"
          data-view-component="true"
          class="Progress-item color-bg-success-emphasis"
        ></span>
        <span
          style={{ backgroundColor: '#f1e05', width: '4.4%' }}
          itemprop="keywords"
          aria-label="JavaScript 4.4"
          data-view-component="true"
          class="Progress-item color-bg-success-emphasis git-yellow-bg"
        ></span>
        <span
          style={{ backgroundColor: '#563d7c', width: '3.2%' }}
          itemprop="keywords"
          aria-label="CSS 3.2"
          data-view-component="true"
          class="Progress-item color-bg-success-emphasis"
        ></span>
      </span>
      <ul class="list-style-none">
        <li class="d-inline">
          <a
            class="d-inline-flex flex-items-center Link--secondary text-small mr-3 flex-nowrap no-underline"
            href="/planetscale/beam/search?l=typescript"
            data-ga-click="Repository, language stats search click, location:repo overview"
          >
            <svg
              // style="color:#3178c6;"
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="octicon octicon-dot-fill mr-2"
            >
              <path d="M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"></path>
            </svg>
            <span class="color-fg-default text-bold mr-1">TypeScript</span>
            <span>82.3%</span>
          </a>
        </li>
        <li class="d-inline">
          <a
            class="d-inline-flex flex-items-center Link--secondary text-small mr-3 flex-nowrap no-underline"
            href="/planetscale/beam/search?l=shell"
            data-ga-click="Repository, language stats search click, location:repo overview"
          >
            <svg
              // style="color:#89e051;"
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="octicon octicon-dot-fill mr-2"
            >
              <path d="M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"></path>
            </svg>
            <span class="color-fg-default text-bold mr-1">Shell</span>
            <span>10.1%</span>
          </a>
        </li>
        <li class="d-inline">
          <a
            class="d-inline-flex flex-items-center Link--secondary text-small mr-3 flex-nowrap no-underline"
            href="/planetscale/beam/search?l=javascript"
            data-ga-click="Repository, language stats search click, location:repo overview"
          >
            <svg
              // style="color:#f1e05a;"
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="octicon octicon-dot-fill mr-2"
            >
              <path d="M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"></path>
            </svg>
            <span class="color-fg-default text-bold mr-1">JavaScript</span>
            <span>4.4%</span>
          </a>
        </li>
        <li class="d-inline">
          <a
            class="d-inline-flex flex-items-center Link--secondary text-small mr-3 flex-nowrap no-underline"
            href="/planetscale/beam/search?l=css"
            data-ga-click="Repository, language stats search click, location:repo overview"
          >
            <svg
              // style="color:#563d7c;"
              aria-hidden="true"
              height="16"
              viewBox="0 0 16 16"
              version="1.1"
              width="16"
              data-view-component="true"
              class="octicon octicon-dot-fill mr-2"
            >
              <path d="M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"></path>
            </svg>
            <span class="color-fg-default text-bold mr-1">CSS</span>
            <span>3.2%</span>
          </a>
        </li>
      </ul>
    </>
  )
}
