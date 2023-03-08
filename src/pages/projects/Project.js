const { default: Link } = require('next/link')

const Project = function ({}) {
  return (
    <section aria-labelledby="products-heading" className="mx-8 mt-8 lg:mx-32">
      <h2 id="products-heading" className="sr-only">
        Products purchased
      </h2>

      <div className="space-y-24 ">
        {products.map((product) => (
          <div
            key={product.id}
            className="grid grid-cols-1 text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-8"
          >
            <div className="sm:col-span-4 md:col-span-5 md:row-span-2 md:row-end-2">
              <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-50">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="mt-6 sm:col-span-7 sm:mt-0 md:row-end-1">
              <h3 className="text-lg font-medium text-gray-900">
                <Link href={product.href}>{product.name}</Link>
              </h3>
              <p className="mt-1 font-medium text-gray-900">{product.price}</p>
              <p className="mt-3 text-gray-500">{product.description}</p>
            </div>
            <div className="sm:col-span-12 md:col-span-7">
              <dl className="grid grid-cols-1 gap-y-8 border-b border-gray-200 py-8 sm:grid-cols-2 sm:gap-x-6 sm:py-6 md:py-10">
                <div>
                  <dt className="font-medium text-gray-900">
                    Delivery address
                  </dt>
                  <dd className="mt-3 text-gray-500">
                    <span className="block">{product.address[0]}</span>
                    <span className="block">{product.address[1]}</span>
                    <span className="block">{product.address[2]}</span>
                  </dd>
                </div>
                <div>
                  <dt className="font-medium text-gray-900">
                    Shipping updates
                  </dt>
                  <dd className="mt-3 space-y-3 text-gray-500">
                    <p>{product.email}</p>
                    <p>{product.phone}</p>
                    <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Edit
                    </button>
                  </dd>
                </div>
              </dl>
              <p className="mt-6 font-medium text-gray-900 md:mt-10">
                {product.status} on{' '}
                <time dateTime={product.dateTime}>{product.date}</time>
              </p>
              <div className="mt-6">
                <div className="overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-2 rounded-full bg-indigo-600"
                    style={{
                      width: `calc((${product.step} * 2 + 1) / 8 * 100%)`,
                    }}
                  />
                </div>
                <div className="mt-6 hidden grid-cols-4 font-medium text-gray-600 sm:grid">
                  <div className="text-indigo-600">Order placed</div>
                  <div
                    className={clsx(
                      product.step > 0 ? 'text-indigo-600' : '',
                      'text-center'
                    )}
                  >
                    Processing
                  </div>
                  <div
                    className={clsx(
                      product.step > 1 ? 'text-indigo-600' : '',
                      'text-center'
                    )}
                  >
                    Shipped
                  </div>
                  <div
                    className={clsx(
                      product.step > 2 ? 'text-indigo-600' : '',
                      'text-right'
                    )}
                  >
                    Delivered
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const products = [
  {
    id: 1,
    name: 'Distant Mountains Artwork Tee',
    price: '$36.00',
    description:
      'You awake in a new, mysterious land. Mist hangs low along the distant mountains. What does it mean?',
    address: ['Floyd Miles', '7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
    email: 'f•••@example.com',
    phone: '1•••••••••40',
    href: '#',
    status: 'Completed',
    step: 5,
    date: 'March 24, 2021',
    dateTime: '2021-03-24',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/confirmation-page-04-product-01.jpg',
    imageAlt:
      'Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade.',
  },
  // More products...
]

export default Project
