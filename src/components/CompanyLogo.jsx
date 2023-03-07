export const CompanyLogo = () => {
  return (
    <div className="company-logo lg:mr-0 lg:pt-16  xl:mr-64">
      <div className="company-logo-left">
        {/* <div className="header-line-one">
          <span className="the">The</span>{' '}
          <span className="codepen-logo"></span>
        </div> */}
        <div className="company-logo-line-two dark:company-logo-line-two font-extrabold">
          <a href="/">Nasdesign</a>
        </div>
        <div className="header-line-three">
          <p id="slogan" className="-mt-1 pl-1 text-sm dark:text-yellow-400">
            Never stop being inspired
          </p>
        </div>
      </div>
    </div>
  )
}
