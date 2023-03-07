import { ArrowRight } from '@/components/icons/Arrows'

export const SmallNavList = () => {
  return (
    <div className="flex items-start space-x-5 ">
      <div>
        <div>
          <nav className="hidden pl-4 sm:flex " aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4">
              <li>
                <div className="flex">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-400 hover:text-gray-200"
                  >
                    Jobs
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <ArrowRight />
                  <a
                    href="#"
                    className="ml-4 text-sm font-medium text-gray-400 hover:text-gray-200"
                  >
                    Engineering
                  </a>
                </div>
              </li>
              <li>
                <div className="flex items-center ">
                  <ArrowRight />
                  <a
                    href="#"
                    aria-current="page"
                    className="ml-4 text-sm font-medium text-gray-400 hover:text-gray-200"
                  >
                    Back End Developer
                  </a>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  )
}
