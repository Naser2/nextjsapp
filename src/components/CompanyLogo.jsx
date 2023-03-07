import Link from 'next/link'

export const CompanyLogo = () => {
  return (
    <div className="company-logo my-4 flex lg:mr-0 lg:pt-16  xl:mr-64">
      <div className="company-logo-left">
        {/* <div className="header-line-one">
          <span className="the">The</span>{' '}
          <span className="codepen-logo"></span>
        </div> */}
        <div className="company-logo-line-two font-extrabold dark:text-white">
          <Link href="/">Nasdesign</Link>
        </div>
        <div className="header-line-three">
          <p id="slogan" className="-mt-1 pl-1 text-sm dark:text-white">
            Never stop being inspired
          </p>
        </div>
      </div>
    </div>
  )
}
