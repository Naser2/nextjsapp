import { ArrowRight } from '@/components/icons/Arrows'
import Link from 'next/link'

export const SmallNavList = () => {
  return (
    <div className="flex items-start space-x-5 ">
      <div>
        <div>
          <nav className="hidden pl-4 sm:flex " aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
              <li>
                <div className="flex">
                  <Link
                    href="#"
                    className="text-sm font-medium text-gray-400 hover:text-gray-200"
                  >
                    Jobs
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ArrowRight />
                  <Link
                    href="#"
                    className="ml-4 text-sm font-medium text-gray-400 hover:text-gray-200"
                  >
                    Engineering
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center ">
                  <ArrowRight />
                  <Link
                    href="#"
                    aria-current="page"
                    className="ml-4 text-sm font-medium text-gray-400 hover:text-gray-200"
                  >
                    Back End Developer
                  </Link>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  )
}
