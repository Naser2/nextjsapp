import Image from 'next/image'

export function cousrseCurriculumPage({ course }) {
  console.log('COURSE in COurse List Card', course)
  // let
  // console.log('COURSE CHAPTERS', course[0].chapters)
  // course.chapters.map((chapter) =>

  //   console.log('CHAPTER in Course List Card', chapter)
  // )
  let courseObj = course[0]
  return (
    <div>
      <div className="dark:text-zink-400 text-black">
        Yay Iterate me an diplay
        <div
          key={course.title}
          className="flex flex-col overflow-hidden rounded-lg shadow-lg"
        >
          <div className="flex-shrink-0">
            <Image
              className="h-48 w-full object-cover"
              src={courseObj.imageUrl}
              alt=""
            />
          </div>
          <div className="flex flex-1 flex-col justify-between bg-white p-6">
            <div className="flex-1">
              <p className="text-sm font-medium text-indigo-600">
                <a href={courseObj.category.href} className="hover:underline">
                  {courseObj.category.name}
                </a>
              </p>
              <a href={courseObj.href} className="mt-2 block">
                <p className="text-xl font-semibold text-gray-900">
                  {courseObj.title}
                </p>
                <p className="mt-3 text-base text-gray-500">
                  {courseObj.description}
                </p>
              </a>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <a href={courseObj.author.href}>
                  <span className="sr-only">{courseObj.author.name}</span>
                  <img
                    className="h-10 w-10 rounded-full"
                    src={courseObj.author.imageUrl}
                    alt=""
                  />
                </a>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900">
                  <a href={courseObj.author.href} className="hover:underline">
                    {courseObj.author.name}
                  </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                  <time dateTime={`courseObj.dateTime`}>{courseObj.date}</time>
                  <span aria-hidden="true">&middot;</span>
                  <span>{courseObj.readingTime} read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
