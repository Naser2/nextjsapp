import clsx from 'clsx'
import Image from 'next/image'

export const ImageGridNoHeight = (images, label, className) => {
  return (
    <>
      <section className="mt-8 w-full pb-16 " aria-labelledby="gallery-heading">
        <div className="social-media-company">
          <h3 className={clsx(className)}>{label}</h3>
        </div>

        <ul
          role="list"
          className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8"
        >
          {images.map((img) => {
            return (
              <>
                <div
                  className="aspect-w-10 aspect-h-7 group block w-full overflow-hidden rounded-lg bg-gray-100 ring-2 ring-indigo-500 ring-offset-2"
                  x-state:on="Current"
                  x-state:off="Default"
                  x-state-description='Current: "ring-2 ring-offset-2 ring-indigo-500", Default: "focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500"'
                >
                  <img
                    src="https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=512&amp;q=80"
                    alt=""
                    className=" pointer-events-none object-cover"
                    x-state:on="Current"
                    x-state:off="Default"
                    x-state-description='Current: "", Default: "group-hover:opacity-75"'
                  />
                  <button
                    type="button"
                    className="absolute inset-0 focus:outline-none"
                  >
                    <span className="sr-only">View details for IMG_4985.HEIC</span>
                  </button>
                </div>
                <li key={img.name} className="relative">
                  <div
                    className={clsx(
                      img.current
                        ? 'ring-2 ring-indigo-500 ring-offset-2'
                        : 'focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100',
                      'aspect-w-10 aspect-h-7 group block w-full overflow-hidden rounded-lg bg-gray-100 ring-2 ring-indigo-500 ring-offset-2'
                    )}
                  >
                    <Image
                      src={img.source}
                      alt=""
                      className={clsx(
                        img.current ? '' : 'group-hover:opacity-75',
                        ' pointer-events-none object-cover'
                      )}
                    />
                    <button
                      type="button"
                      className="absolute inset-0 focus:outline-none"
                    >
                      <span className="sr-only">
                        View details for {img.name}
                      </span>
                    </button>
                  </div>
                  <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                    {img.name}
                  </p>
                  <p className="pointer-events-none block text-sm font-medium text-gray-500">
                    {img.size}
                  </p>
                </li>
              </>
            )
          })}
        </ul>
      </section>
    </>
  )
}
