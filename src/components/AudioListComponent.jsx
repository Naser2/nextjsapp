import clsx from 'clsx'
import Link from 'next/link'
import istaImg1 from '@/images/social/instagram-1.png'
import istaImg3 from '@/images/social/instagram-3.jpeg'
import istaImg4 from '@/images/social/instagram-4.jpg'
import istaImg5 from '@/images/social/instagram-5.jpeg'
import istaImg6 from '@/images/social/instagram-6.avif'
import Image from 'next/image'
import phoneImage from '@/images/projectImages/phone/iphone_personalization__4300bh645z62_large_2x.jpeg'

// import scrollToSection from '@/lib/scrollToSection'

export const AudioListComponent = ({
  audioCollection,
  audioCollectionTitle,
}, props) => {


//   console.log('AUDIO PROP', audioCollectionTitle
//   )
  return (
    <>
      <div
        className=" "
        aria-labelledby="gallery-heading"
      >
      <div
        role="list"
        className="rounded-t-xl dark:highlight-white/10">
          <div class="mb-2 py-1 pr-1 text-md border-b border-indigo-500">{audioCollectionTitle}</div>
        <ul
          role="list"
          className="grid grid-cols-3 gap-x-1 gap-y-1 "
        >
          {audioCollection.map((audioObj) => {
            // console.log('audioObj', audioObj)
            return (
              <li key={audioObj.name} className="relative">
                <div
                  className={clsx(
                    audioObj.current
                      ? 'ring-2 ring-indigo-500 ring-offset-2'
                      : 'focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100',
                    'aspect-w-14 aspect-h-14 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100  group block w-full overflow-hidden rounded-lg bg-gray-100'
                  )}
                >
                  <Image
                    src={audioObj.source}
                    alt=""
                    className={clsx(
                      audioObj.current ? '' : 'group-hover:opacity-75',
                      'pointer-events-none object-cover'
                    )}
                  />
            {/* {  audioObj.ref &&   <button onClick={()=>scrollToSection(audioObj.ref)}
                    type="button"
                    className="text-transparent inset-0  bottom-0 px-8 pt-4block truncate text-2xl font-bold tracking-tight hover:text-yellow-400 dark:text-zinc-100 sm:text-4xl"
                  >
                  </button>}  */}
                </div>
              </li>
            )
          })}
        </ul>
        </div>
      </div> 
    </>
  )
}


