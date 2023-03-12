import Image from 'next/image'
import Link from 'next/link'
import companyLogo from '@/images/logos/site_logo.svg'
export const CompanyLogo = () => {
  return (
    <div className="company-logo mt-1 mb-2 flex lg:mr-0  xl:mr-14">
      <div className="company-logo-left inline-flex ">
        <Image
          alt="company logo"
          className="mr-2 mt-1 h-10 w-10"
          height="30"
          src={companyLogo}
          width="30"
        />
        <div id="logo-text" className="flex-block">
          <div className="company-logo-line-two font-extrabold dark:text-black">
            <Link href="/">Nasdesign</Link>
          </div>
          <div className="header-line-three">
            <p id="slogan" className="-mt-1 pl-1 text-sm dark:text-slate-800">
              Never stop being inspired
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
