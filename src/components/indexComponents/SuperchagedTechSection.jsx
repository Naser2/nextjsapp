import { ArrowRight } from '../icons/Arrows'
import { HeroPattern } from '../HeroPattern'
import { Container } from '../Container'
import {
  FeaturesMobile,
  FeaturesDesktop,
} from '@/components/next13Components/PrimaryFeatures.jsx'
import { HalfPhone } from '../next13Components/HalfPhone'
import { SuperChagedCodeblock } from '@/components/codeblocks'
import { Intro } from '@/components/Intro'
import clsx from 'clsx'
export default function SuperchagedTechSection() {
  const introContent = {
    h1: 'Build for everyone.',
    h2: ['Every feature you need', 'to win', 'Try it for yourself'],
    tag: { text: 'Projects samples ', color: 'text-sky-400' },
    description:
      ' MiraProjects was built with React and Sanity with a modular aproach and a simplitisc design concept.',
  }

  return (
    <>
      <div className="dark:bg-wheat bg-white">
        <Container>
          <Intro content={introContent} />
        </Container>
        <div className="mt-16 md:hidden">
          <FeaturesMobile />
        </div>
        <Container className="mt-8 hidden md:mt-20 md:block xl:mt-20">
          <FeaturesDesktop />
        </Container>
        <div id="SM-supercharged-code" className="lg:hidden">
          <div className="sm:mt-24 md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-10 lg:mt-0 lg:w-screen">
            <div
              // className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 md:-mr-20 lg:-mr-36"
              aria-hidden="true"
            />
            <div className="shadow-lg md:rounded-3xl">
              <div className="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                {/* <div
                  className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                  aria-hidden="true"
                /> */}

                <div
                  id="SM-supercharged-code-inner"
                  className="SM-supercharged-code-inner   pl-4  pt-8 sm:pt-16 md:hidden  md:pr-0 lg:px-6 lg:pl-16"
                >
                  <SuperChagedCodeblock />
                </div>
              </div>
            </div>
            <h2 className="col-start-1 row-start-2 mt-10 mt-4 max-w-[36rem] px-4 px-2 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl sm:text-6xl xl:max-w-[43.5rem]">
              Broadcast yourself to the world
            </h2>
          </div>
        </div>
        <div
          id="Podcast-superchage"
          className="elative relative isolate  overflow-hidden bg-gradient-to-b from-indigo-100/20 lg:my-10 lg:my-24"
        >
          <div className="mx-2 grid grid-cols-1 gap-x-8 gap-y-8 sm:gap-x-6 md:grid-cols-2 md:grid-cols-2 lg:mx-24 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">
            <div className="px-0 lg:-mt-4">
              <div className="mx-auto  max-w-2xl  lg:mt-6">
                <div className="max-w-lg">
                  <HalfPhone />
                </div>
              </div>
            </div>
            <div className="sr-only sm:mt-4 md:not-sr-only md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:mt-0 lg:w-screen">
              <div
                className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50  "
                aria-hidden="true"
              />
              <div className="shadow-lg md:rounded-3xl">
                <div className="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
                  {/* <div
                    className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
                    aria-hidden="true"
                  /> */}
                  <h1 class="sm:text-6xlxl mt-6 bg-black px-12 pb-10 pt-4 text-6xl font-bold tracking-tight text-white">
                    Modular and Reusable code
                  </h1>
                  <div
                    id="LG-supercharged-code"
                    className="LG-superchaged-code relative px-6 pt-8 sm:pt-6 md:pl-16 md:pr-0"
                  >
                    <SuperChagedCodeblock />
                    <div className="flex gap-x-6 pt-4 pb-6 pr-2 lg:mt-4">
                      <a
                        href="#"
                        className="rounded-md bg-black px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                      >
                        Documentation
                      </a>
                      <a
                        href="#"
                        className="text-base font-semibold leading-7 text-gray-900"
                      >
                        View on GitHub <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* <h2 className="text-3xl font-medium tracking-tight text-slate-900 mt-10">
            Broadcast yourself to the world
          </h2> */}
            </div>
          </div>

          <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
        </div>
      </div>
      <HeroPattern />
    </>
  )
}

export const SuperChargedHalhPhone = ({ className }) => {
  const introContent = {
    h1: 'BrodcastBaby',
    h2: ['React Native', 'App'],
    tag: { text: 'Mobile', color: 'primary' },
    description:
      ' Broadcastbaby was built to help childtren co-wor and help eachothers imptove reading skills',
  }
  return (
    <div
      id="Podcast-superchage"
      className={clsx(
        className
          ? [
              className,
              'relative isolate  overflow-hidden bg-gradient-to-b from-indigo-100/20',
            ]
          : 'rrelative isolate  overflow-hidden bg-gradient-to-b from-indigo-100/20 lg:my-10 lg:my-24'
      )}
    >
      <Intro
        content={introContent}
        h1Class="text-indigo-400 dark:text-black"
        h20Class="text-indigo-400 dark:text-black"
        h21Class="text-indigo-400 dark:text-black"
        nameClass="text-indigo-700"
        descriptionClass="text-slate-200"
      />
      <div className="mx-2 grid grid-cols-1 gap-x-8 gap-y-8 sm:gap-x-6 md:grid-cols-2 md:grid-cols-2 lg:mx-24 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">
        <div className="px-0 lg:-mt-4">
          <div className="mx-auto  max-w-2xl  lg:mt-6">
            <div className="max-w-lg">
              <HalfPhone />
            </div>
          </div>
        </div>
        <div className="sr-only sm:mt-4 md:not-sr-only md:mx-auto md:max-w-2xl lg:mx-0 lg:mt-0 lg:mt-0 lg:w-screen">
          <div
            className="absolute inset-y-0 right-1/2 -z-10 -mr-10 w-[200%] skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50  "
            aria-hidden="true"
          />
          <div className="shadow-lg md:rounded-3xl">
            <div className="bg-indigo-500 [clip-path:inset(0)] md:[clip-path:inset(0_round_theme(borderRadius.3xl))]">
              {/* <div
            className="absolute -inset-y-px left-1/2 -z-10 ml-10 w-[200%] skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white md:ml-20 lg:ml-36"
            aria-hidden="true"
          /> */}
              <h1 class="sm:text-6xlxl mt-6 bg-black px-12 pb-10 pt-4 text-6xl font-bold tracking-tight text-white">
                Modular and Reusable code
              </h1>
              <div
                id="LG-supercharged-code"
                className="LG-superchaged-code relative px-6 pt-8 sm:pt-6 md:pl-16 md:pr-0"
              >
                <SuperChagedCodeblock />
                <div className="flex gap-x-6 pt-4 pb-6 pr-2 lg:mt-4">
                  <a
                    href="#"
                    className="rounded-md bg-black px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Documentation
                  </a>
                  <a
                    href="#"
                    className="text-base font-semibold leading-7 text-gray-900"
                  >
                    View on GitHub <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <h2 className="text-3xl font-medium tracking-tight text-slate-900 mt-10">
    Broadcast yourself to the world
  </h2> */}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
    </div>
  )
}
