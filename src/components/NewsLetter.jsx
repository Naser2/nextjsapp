import MailIcon from '@/components/icons/MailIcon'
import { ButtonRoundedMd, CommomButtonMd } from './Button'
import React from 'react'
import imagePaperAirplane from '@/images/_images_paper-airplane.png'
// const Newsletter = React.forwardRef(() => {
//   return (
//     <form
//       action="/thank-you"
//       className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
//     >
//       <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
//         <MailIcon className="h-6 w-6 flex-none" />
//         <span className="ml-3">Stay up to date</span>
//       </h2>
//       <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
//         Get notified when I publish something new, and unsubscribe at any time.
//       </p>
//       <div className="mt-6 flex">
//         <input
//           type="email"
//           placeholder="Email address"
//           aria-label="Email address"
//           required
//           className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
//         />
//         <Button type="submit" className="ml-4 flex-none">
//           Join
//         </Button>
//       </div>
//     </form>
//   )
// })

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-newsletter.jpg'
import Image from 'next/image'

function ArrowRightIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" {...props}>
      <path
        d="m14 7 5 5-5 5M19 12H5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const Newsletter = React.forwardRef(() => {
  return (
    <section id="newsletter" aria-label="Newsletter">
      <Container className="">
        <div className="md:rounded-5xl relative overflow-hidden bg-black py-10 sm:px-6  md:mx-0 md:py-10 lg:my-10 xl:my-4 xl:my-20">
          {/* <Image
            className="absolute left-1/2 top-0 translate-x-[-10%] translate-y-[-45%] lg:translate-x-[-32%]"
            src={backgroundImage}
            alt=""
            width={919}
            height={1351}
            unoptimized
          /> */}
          {/* <span className="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative">
            <Image
              alt="Newsletter"
              src={imagePaperAirplane.src}
              width={40}
              height={40}
              decoding="async"
              data-nimg="responsive"
              className="paper-plane o ii hr jm"
              sizes={'100vw'}
            />
          </span> */}
          <div className="relative mx-auto grid max-w-2xl grid-cols-1 gap-x-4 gap-y-8 px-4 md:px-8  lg:gap-y-14 lg:px-0 xl:max-w-none xl:grid-cols-2">
            <div>
              <p className="font-display text-4xl font-medium tracking-tighter text-black text-white sm:text-5xl xl:pb-4">
                Stay up to date
              </p>
              <p className="sr-only mt-4 text-lg tracking-tight text-slate-200 text-black lg:not-sr-only ">
                Get updates on all of our events and be the first to get
                notified when tickets go on sale.
              </p>
            </div>
            <form>
              <h3 className="text-lg font-semibold tracking-tight text-slate-200 dark:text-slate-300">
                Sign up to my newsletter <span aria-hidden="true">&darr;</span>
              </h3>
              <div className="rounded-4xl  mt-5 flex items-center  px-2 py-2.5 shadow-xl shadow-blue-900/5 focus-within:ring-2 focus-within:ring-blue-900">
                <input
                  type="email"
                  placeholder="Email address"
                  aria-label="Email address"
                  required=""
                  className=" inline-flex min-w-0 flex-auto appearance-none  rounded-md border border-zinc-900/10 bg-white  px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-black focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
                />

                <CommomButtonMd
                  text="Sign up"
                  arrow="left"
                  theme={{
                    text: 'text-white',
                    bg: 'bg-white',
                    text: 'text-slate-800',
                  }}
                />
                {/* <ButtonRoundedMd type="submit">
                  <span className="sr-only sm:not-sr-only">Sign up today</span>
                  <span className="sm:hidden">
                    <ArrowRightIcon className="h-6 w-6" />
                  </span>
                </ButtonRoundedMd> */}
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  )
})

Newsletter.displayName = 'Newsletter'
export default Newsletter
