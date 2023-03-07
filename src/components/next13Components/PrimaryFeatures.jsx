import { Fragment, useEffect, useId, useRef, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useDebouncedCallback } from 'use-debounce'

import { AppScreen } from './AppScreen'
import { CircleBackground } from './CircleBackground'
import { Container } from './Container'
import { PhoneFrame } from './PhoneFrame'
import { TextMessageForm } from '@/components/TextMessageForm'
import { SuccessIcon } from '@/components/icons/SuccessIcon'
import {
  DiageoLogo,
  LaravelLogo,
  MirageLogo,
  ReversableLogo,
  StatamicLogo,
  StaticKitLogo,
  TransistorLogo,
  TupleLogo,
} from './StockLogos'
import dynamic from 'next/dynamic'
import Modal from '../Modal'
import { set } from 'react-hook-form'
import { ArrowRight } from '../icons/Arrows'

const MotionAppScreenHeader = motion(AppScreen.Header)
const MotionAppScreenBody = motion(AppScreen.Body)

const features = [
  {
    name: 'Send us Message to get a consultation',
    description:
      'For Project,  ...you get insider notifications And it’s  about 2 days for our team to get back to you.',
    icon: DeviceUserIcon,
    screen: SendMessageScreen,
  },
  {
    name: 'Works and Projects',
    description:
      'Mira Projects is a design, project and construction management consultancy. Our Boutique team has expertise in retail office and hopitality projects.',
    // icon: DeviceNotificationIcon,
    screen: WorkScreen,
  },
  {
    name: 'Services',
    description:
      'Services include a full range of ARCHITECTURE AND INTERIOR DESIGN process and can be customized epending on your need. Send us some details for a free consultation.',
    icon: DeviceTouchIcon,
    screen: ProjectConsultationServiceScreen,
  },
]

function DeviceUserIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z"
        fill="#A3A3A3"
      />
    </svg>
  )
}

function DeviceNotificationIcon(props) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
        fill="#A3A3A3"
      />
      <path
        d="M9 8a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H11a2 2 0 01-2-2V8z"
        fill="#737373"
      />
    </svg>
  )
}

function DeviceTouchIcon(props) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" {...props}>
      <defs>
        <linearGradient
          id={`${id}-gradient`}
          x1={14}
          y1={14.5}
          x2={7}
          y2={17}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#737373" />
          <stop offset={1} stopColor="#D4D4D4" stopOpacity={0} />
        </linearGradient>
      </defs>
      <circle cx={16} cy={16} r={16} fill="#A3A3A3" fillOpacity={0.2} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v13h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h4v2H9a4 4 0 01-4-4V4z"
        fill="#A3A3A3"
      />
      <path
        d="M7 22c0-4.694 3.5-8 8-8"
        stroke={`url(#${id}-gradient)`}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 20l.217-5.513a1.431 1.431 0 00-2.85-.226L17.5 21.5l-1.51-1.51a2.107 2.107 0 00-2.98 0 .024.024 0 00-.005.024l3.083 9.25A4 4 0 0019.883 32H25a4 4 0 004-4v-5a3 3 0 00-3-3h-5z"
        fill="#A3A3A3"
      />
    </svg>
  )
}

const headerAnimation = {
  initial: { opacity: 0, transition: { duration: 0.3 } },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const maxZIndex = 2147483647

const bodyVariantBackwards = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: 'blur(4px)',
  zIndex: 0,
  transition: { duration: 0.4 },
}

const bodyVariantForwards = (custom) => ({
  y: '100%',
  zIndex: maxZIndex - custom.changeCount,
  transition: { duration: 0.4 },
})

const bodyAnimation = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  variants: {
    initial: (custom) =>
      custom.isForwards ? bodyVariantForwards(custom) : bodyVariantBackwards,
    animate: (custom) => ({
      y: '0%',
      opacity: 1,
      scale: 1,
      zIndex: maxZIndex / 2 - custom.changeCount,
      filter: 'blur(0px)',
      transition: { duration: 0.4 },
    }),
    exit: (custom) =>
      custom.isForwards ? bodyVariantBackwards : bodyVariantForwards(custom),
  },
}

function SendMessageScreen({ custom, animated = false }) {
  const [openModal, setOpenModal] = useState(false)
  const message = {
    title: 'Message Sent',
    description: 'We revceived your message. We will get back to you shortly',
    icon: (
      <div id="message-icon">
        <SuccessIcon />
      </div>
    ),
  }

  const toggleModal = (val) => {
    console.log('SendMessageForm -handleModal', val)
    setOpenModal(val)
  }

  let SendMessageFormerror = false
  if (SendMessageFormerror) {
    /////*******////
  } else {
    /////*******////////
  }
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>Send us a message</AppScreen.Title>
        <AppScreen.Subtitle>
          Get a <span className="text-indigo-100">consultation</span> for your
          project
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>

      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <Modal open={openModal} toggleModal={toggleModal} message={message} />
        <div className="px-4 py-6">
          <div className="space-y-6">
            {[
              {
                label: 'Description',
                value: <TextMessageForm toggleModal={toggleModal} />,
              },
              // {[  {label: 'Description', value: (<TextMessageForm  setModalOpen={togleModal}/>)},
              // { label: 'Full name', value: 'Albert H. Wiggin' },
              // { label: 'Email address', value: 'awiggin@chase.com' },
            ].map((field) => (
              <div key={field.label}>
                <div className="pl-2 text-sm text-gray-500">{field.label}</div>
                <div className="mt-2 border-b border-gray-200 pb-2 text-sm text-gray-900">
                  {field.value}
                </div>
              </div>
            ))}
          </div>

          {/* <div className="mt-6 rounded-lg bg-black  py-2 px-3 text-center text-sm font-semibold text-white hover:bg-slate-700">
           <button onClick={()=> alert("Submited")}>Invite person</button> 
          </div> */}
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function WorkScreen({ custom, animated = false }) {
  const [open, setOpen] = useState(false)

  const closeModal = (val) => {
    console.log('handleModal', val)
    setOpen(val)
  }

  let projectFormError = false
  if (projectFormError) {
    /////*******////
  } else {
    /////*******////////
  }
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>Work</AppScreen.Title>
        <AppScreen.Subtitle>
          {' '}
          <span className="text-indigo-100">Designs</span> work by Mira Projects
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className="divide-y divide-gray-100">
          {[
            {
              name: 'Concept Design',
              price: 'Flagship Store',
              change: 'MARYSIA',
              color: '#F9322C',
              logo: LaravelLogo,
            },
            {
              name: 'Schematic Design',
              price: 'Alexander Wang',
              change: 'Shake Bar - TWEVL',
              color: '#2A5B94',
              logo: TransistorLogo,
            },
            {
              name: 'Design Development',
              price: 'HOBO',
              change: 'FLAGSHIP STORE ',
              number: '4 stores',
              color: '#2A5B94',
              logo: TransistorLogo,
            },
            {
              name: 'Project Management',
              price: 'Huf Worldwide',
              change: 'FLAGSHIP STORE',
              color: '#2A5B94',
              logo: TransistorLogo,
            },

            {
              name: 'Construction Management',
              price: 'AESOP',
              change: 'HQ OFFICE',
              color: '#0EA5E9',
              logo: StatamicLogo,
            },
            {
              name: 'Concept Design',
              price: 'Kiosk',
              change: 'ALKEMIST KITCHEN',
              color: '#F9322C',
              logo: LaravelLogo,
            },
            {
              name: 'Design Development',
              price: 'Alexander Wang',
              change: 'NORDSTROM SHOP-IN-SHOP',
              number: '4 stores',
              color: '#2A5B94',
              logo: TransistorLogo,
            },
          ].map((stock) => (
            <div key={stock.name} className="flex items-center gap-4 px-4 py-3">
              <div
                className="flex-none rounded-full"
                style={{ backgroundColor: stock.color }}
              >
                {/* <stock.logo className="h-10 w-10" /> */}
              </div>
              <div className="-mt-4 flex-auto text-sm  text-gray-900">
                {stock.name}
              </div>
              <div className="flex-none text-right">
                <div className="text-sm font-medium text-gray-900">
                  {stock.price}
                </div>
                <div
                  className={clsx(
                    'text-xs leading-5',
                    stock.change.startsWith('+')
                      ? 'text-cyan-500'
                      : 'text-gray-500'
                  )}
                >
                  {stock.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function ProjectConsultationServiceScreen({ custom, animated = false }) {
  const [open, setOpen] = useState(false)
  const [showSendingBtn, setShowSendingBtn] = useState(false)
  const message = {
    title: 'Success',
    description: 'Project details have been submitted. Thanks',
    icon: (
      <div id="message-icon">
        <SuccessIcon />
      </div>
    ),
  }
  const toggleModal = (val) => {
    console.log('handleModal', val)
    setOpen(val)
  }
  const handleProjectSubmit = () => {
    // event.preventDefault();
    // let timerId = setInterval(() => setTimeout(setShowSendingBtn(true), 2000), 5000);
    let timerId = setInterval(() => setShowSendingBtn(true), 1400)

    // after 5 seconds stop
    setTimeout(() => {
      console.log('Clearing Interval')
      clearInterval(timerId)
      setShowSendingBtn(false, toggleModal(true))
    }, 4000)
    // Clear Form
  }

  let projectFormError = false
  if (projectFormError) {
    /////*******////
  } else {
    /////*******////////
  }
  // console.log("ProjectConsultation ServiceScreen",  handleModal)

  return (
    <AppScreen id="App screen" className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>Project Requirements</AppScreen.Title>
        <AppScreen.Subtitle>
          <span className="text-indigo-100">Details</span> and description for
          the project <span className="text-indigo-100">Consultation</span>
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody
        id="MotionAppScreenBody"
        {...(animated ? { ...bodyAnimation, custom } : {})}
      >
        <div className="px-4 py-6">
          <div className="space-y-4">
            {[
              { label: 'Consultation for :', value: 'Desgin Development' },
              {
                label: 'Project Type :',
                value: (
                  <div className="flex">
                    SHOWROOM
                    {/* <span className="text-rose-200 py-1 px-1  bg-rose-400 rounded-full mr-2 shadow-md"></span> */}
                    {/* <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                      <path
                        d="M17 15V7H9M17 7 7 17"
                        stroke="text-indigo-400"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg> */}
                  </div>
                ),
              },
              // {
              //   label: 'Location (s) :',
              //   value: (
              //     <div className="flex">
              //       <span className="mr-2 rounded-md border bg-slate-100 px-2 py-0 text-slate-500">
              //         1
              //       </span>{' '}
              //       NEW YORK
              //       {/* <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
              //         <path
              //           d="M17 15V7H9M17 7 7 17"
              //           stroke="black"
              //           strokeWidth="2"
              //           strokeLinecap="round"
              //           strokeLinejoin="round"
              //         />
              //       </svg> */}
              //     </div>
              //   ),
              // },
              {
                label: 'Square Footage :',
                value: (
                  <div className="flex">
                    743 sqft
                    {/* <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                      <path
                        d="M17 15V7H9M17 7 7 17"
                        stroke="text-green-400"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg> */}
                  </div>
                ),
              },
              {
                label: 'Floor Plans :',
                value: (
                  <div className="flex">
                    <span className="rounded-md border bg-slate-100 px-2 py-0  text-slate-500">
                      4
                    </span>
                    <span className="-py-1  ml-2 rounded-md border border-indigo-300 bg-white px-2 text-slate-800">
                      Uploaded
                    </span>
                    {/* <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                      <path
                        d="M17 15V7H9M17 7 7 17"
                        stroke="bg-rose-400"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg> */}
                  </div>
                ),
              },

              {
                label: 'Estimated Budget',
                value: (
                  <div className="price-value">
                    <span className="price rounded-md bg-blue-100/40 px-2 py-1">
                      $34,428.00
                    </span>
                  </div>
                ),
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex justify-between border-b border-gray-100 pb-4"
              >
                <div className="text-sm text-gray-500">{item.label}</div>
                <div className="text-sm font-semibold text-gray-900">
                  {item.value}
                </div>
              </div>
            ))}
            <div className="flex items-center justify-center rounded-lg text-center">
              <div className="px-1">
                <Modal
                  open={open}
                  toggleModal={toggleModal}
                  message={message}
                />
              </div>

              {!showSendingBtn && (
                <button
                  onClick={() => handleProjectSubmit()}
                  className="max-w-64 flex items-center  justify-center rounded-lg bg-black py-2 px-4 text-center text-sm font-semibold text-white hover:bg-slate-700"
                  type="submit"
                >
                  Submit Requirements
                  <ArrowRight color="text-white" />
                </button>
              )}
              {showSendingBtn && (
                <button
                  type="button"
                  class=" max-w-64 flex items-center  justify-center rounded-md bg-slate-700 px-4 py-2 text-sm font-semibold leading-6 text-white shadow hover:bg-slate-900"
                  disabled=""
                >
                  <svg
                    class="-ml-1 mr-3 h-5 w-5 animate-spin text-white motion-reduce:hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      class="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      class="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                  <ArrowRight color="text-white" />
                </button>
              )}
            </div>
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export function FeaturesDesktop() {
  let [changeCount, setChangeCount] = useState(0)
  let [selectedIndex, setSelectedIndex] = useState(0)
  let prevIndex = usePrevious(selectedIndex)
  let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex

  let onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex)
      setChangeCount((changeCount) => changeCount + 1)
    },
    100,
    { leading: true }
  )
  const dynamicSpan = (selectedIndex, featureIndex) => {
    return (
      <>
        {selectedIndex === featureIndex ? (
          <span
            className={
              'py-0.05 -py-0 float-left mr-10 mr-4 inline-flex items-center  rounded-full bg-white px-3 px-2 text-sm text-black  dark:bg-white dark:text-slate-800'
            }
          >
            Viewing
          </span>
        ) : (
          <span className="dark:back-2-bg py-0.05 -py-0 mr-4 inline-flex  items-center rounded-full bg-black px-3 px-2 text-sm  dark:text-white lg:mx-10">
            View
          </span>
        )}
      </>
    )
  }

  return (
    <Tab.Group
      as="div"
      className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical
    >
      <Tab.List className="relative z-10 order-last col-span-6 space-y-6">
        {features.map((feature, featureIndex) => (
          <div
            key={feature.name}
            className="relative rounded-2xl transition-colors hover:bg-gray-800/30"
          >
            {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-gray-800"
                initial={{ borderRadius: 16 }}
              />
            )}
            <div className="relative z-10 px-8 pt-2 pb-8">
              {/* <feature.icon className="h-8 w-8" /> */}
              <h3 className="mt-6 text-lg font-semibold text-white">
                <Tab className="text-left [&:not(:focus-visible)]:focus:outline-none">
                  <span className="absolute inset-0 rounded-2xl" />
                  <span
                    className={
                      selectedIndex === featureIndex
                        ? 'dark:text-white'
                        : 'text-slate-800'
                    }
                  >
                    {feature.name}{' '}
                  </span>
                  {dynamicSpan(selectedIndex, featureIndex)}
                </Tab>
              </h3>
              <p className="mt-2 text-sm text-gray-500  ">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </Tab.List>
      <div className="relative col-span-6">
        {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <CircleBackground color="#13B5C8" className="animate-spin-slower" />
        </div> */}
        <PhoneFrame className="z-10 mx-auto w-full max-w-[366px]">
          <Tab.Panels as={Fragment}>
            <AnimatePresence
              initial={false}
              custom={{ isForwards, changeCount }}
            >
              {features.map((feature, featureIndex) =>
                selectedIndex === featureIndex ? (
                  <Tab.Panel
                    static
                    key={feature.name + changeCount}
                    className="col-start-1 row-start-1 flex focus:outline-offset-[32px] [&:not(:focus-visible)]:focus:outline-none"
                  >
                    <feature.screen
                      animated
                      custom={{ isForwards, changeCount }}
                    />
                  </Tab.Panel>
                ) : null
              )}
            </AnimatePresence>
          </Tab.Panels>
        </PhoneFrame>
      </div>
    </Tab.Group>
  )
}

export function FeaturesMobile() {
  // open, setModalOpen "Set open Modal", setModalOpen
  // console.log("Fired Close Modal", open,)
  let [activeIndex, setActiveIndex] = useState(0)
  let slideContainerRef = useRef()
  let slideRefs = useRef([])

  // const [open, setOpen] = useState(true)

  useEffect(() => {
    let observer = new window.IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            setActiveIndex(slideRefs.current.indexOf(entry.target))
            break
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      }
    )

    for (let slide of slideRefs.current) {
      if (slide) {
        observer.observe(slide)
      }
    }

    return () => {
      observer.disconnect()
    }
  }, [slideContainerRef, slideRefs])

  return (
    <>
      <div className="overflow-hidden py-10 pb-4 sm:py-32 lg:py-20 lg:pb-32 xl:pb-36">
        <div
          ref={slideContainerRef}
          className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
        >
          {features.map((feature, featureIndex) => (
            <div
              key={featureIndex}
              ref={(ref) => (slideRefs.current[featureIndex] = ref)}
              className="w-full flex-none snap-center px-4 sm:px-6"
            >
              <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6">
                {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <CircleBackground
                    color="#13B5C8"
                    className={
                      featureIndex % 2 === 1 ? 'rotate-180' : undefined
                    }
                  />
                </div> */}
                <PhoneFrame className="relative mx-auto w-full max-w-[366px]">
                  <feature.screen />
                  {/* <feature.screen /> */}
                </PhoneFrame>
                <div className=" lg:bg-indigo-custom halfPhone-paragraph absolute inset-x-0  bottom-0 w-full  bg-slate-100/25 p-6 py-6 backdrop-blur sm:p-10  md:bg-gray-200/95">
                  {/* <feature.icon className="h-8 w-8" /> */}
                  <h3 className="mt-0 text-sm font-semibold text-black sm:text-lg md:mt-6">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="-lg:mt-10   flex justify-center gap-3 overflow-hidden py-4 sm:py-32 md:mt-6 lg:mb-20">
        {features.map((_, featureIndex) => (
          <button
            type="button"
            key={featureIndex}
            className={clsx(
              'relative h-4 w-8 rounded-full',
              featureIndex === activeIndex ? 'main-bg-blue' : 'bg-gray-500'
            )}
            aria-label={`Go to slide ${featureIndex + 1}`}
            onClick={() => {
              slideRefs.current[featureIndex].scrollIntoView({
                block: 'nearest',
                inline: 'nearest',
              })
            }}
          >
            <span className="absolute -inset-x-1.5 -inset-y-3" />
          </button>
        ))}
      </div>
    </>
  )
}

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label="Features for investing all your money"
      className="bg-black py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 className="text-3xl font-medium tracking-tight text-white">
            Every feature you need to win. Try it for yourself.
          </h2>
          <p className="mt-2 text-lg text-gray-400">
            MiraProjects was built with React and Sanity with a modular aproach.
          </p>
        </div>
      </Container>
      <div className="mt-16 md:hidden">
        <FeaturesMobile />
      </div>
      <Container className="hidden md:mt-20 md:block">
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
