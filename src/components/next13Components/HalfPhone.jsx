import { Fragment, useEffect, useId, useRef, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useDebouncedCallback } from 'use-debounce'

import { PodcastAppScreen } from './PodcastAppScreen'
import { CircleBackground } from './CircleBackground'
import { Container } from './Container'
import { PhoneFrame } from './PhoneFrame'
import { TextMessageForm } from '@/components/TextMessageForm'
import { SuccessIcon } from '@/components/icons/SuccessIcon'
import bekind from '@/images/projectImages/podcast1.jpg'
import iamEnough from '@/images/projectImages/podcast2.png'
import courduroy from '@/images/projectImages/podcast3.jpg'
import bedtime from '@/images/projectImages/pocast4.png'
import rainbowFish from '@/images/projectImages/podcast5.png'
import book1 from '@/images/projectImages/book1.webp'
import book2 from '@/images/projectImages/book2.webp'
import book3 from '@/images/projectImages/book3.webp'
import book4 from '@/images/projectImages/book4.webp'
import book5 from '@/images/projectImages/book5.webp'
import book6 from '@/images/projectImages/book6.webp'

import {
  DiageoLogo,
  LaravelLogo,
  MirageLogo,
  ReversableLogo,
  StatamicLogo,
  StaticKitLogo,
  TransistorLogo,
  TupleLogo,
} from './ObjLogos'
import dynamic from 'next/dynamic'
import Modal from '../Modal'
import { set } from 'react-hook-form'
import { ArrowRight } from '../icons/Arrows'
import podcsatListBgImage from '@/images/projectImages/book-club-img1.jpeg'
import podcastUserProfileImg from '@/images/projectImages/child-portarait.png'
import Image from 'next/image'
import SocialMediaGallery from '@/components/SocialMediaGallery'
import { AudioListComponent } from '@/components/AudioListComponent'
import Link from 'next/link'
const MotionPodcastAppScreenHeader = motion(PodcastAppScreen.Header)
const MotionPodcastAppScreenBody = motion(PodcastAppScreen.Body)

const PROFILE_WIDTH = 90
// const scrollY= new Animated.Value(0)

const BookCollection = [
  {
    // ref: projectsRef,
    id: 1,
    name: 'Machined Pen',
    href: '#',
    source: book1,
    imageAlt:
      'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  {
    // ref: aboutRef,
    id: 2,
    name: 'About',
    href: '#',
    source: book2,
    imageAlt:
      'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  {
    // ref: projectsRef,
    id: 3,
    name: 'Projects',
    href: '#',
    source: book3,
    imageAlt:
      'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  {
    // ref:blogsRef,
    id: 4,
    name: 'Blogs',
    href: '#',
    source: book4,
    imageAlt:
      'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  {
    // ref: learnToCode,
    id: 5,
    name: 'Learn Code',
    href: '#',
    source: book5,
    imageAlt:
      'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  {
    // ref:socialsRef,
    id: 6,
    name: 'Social',
    href: '#',
    source: book6,
    imageAlt:
      'Black machined steel pen with hexagonal grip and small white logo at top.',
  },
  // More products...
]

// props.profileStyle,
// props.profileImage,
// props.profileSrc
const features = [
  {
    name: 'List of Books in our club',
    description: 'I love using words to..',
    // icon: DeviceNotificationIcon,
    screen: PodcastLisScreen,
  },
  {
    name: 'Keeping track of my reading books',
    description: ' I read 176 books this year',
    icon: DeviceUserIcon,
    screen: PodcastUserProfileScreen,
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

function PodcastUserProfileScreen({ custom, animated = false }) {
  // const [openModal, setOpenModal] = useState(false)
  // const message = {title: 'Message Sent', description: 'We revceived your message. We will get back to you shortly', icon:<div id="message-icon"><SuccessIcon/></div> }

  // const toggleModal = (val) => {
  //     console.log("SendMessageForm -handleModal", val)
  //     setOpenModal(val)
  //   }

  // function profileTranslateX() {
  //   let positionRef = useRef()
  //   let rafRef = useRef()

  //   useEffect(() => {
  //     return () => {
  //       window.scrollY.interpolate({
  //         inputRange: [-1, 0, 150, 151],
  //         outputRange: [0, 0, -PROFILE_WIDTH / 8, -PROFILE_WIDTH / 8],
  //       })
  //     }
  //   }, [])

  //   return {
  //     positionRef,
  //     profileTranslateX(callback) {
  //       let initialTop = positionRef.current.getBoundingClientRect().top

  //       callback()

  //       rafRef.current = window.requestAnimationFrame(() => {
  //         let newTop = positionRef.current.getBoundingClientRect().top
  //         window.scrollBy(0, newTop - initialTop)
  //       })
  //     },
  //   }
  // }
  // console.log("Podcast IMG -", podcsatListBgImage)
  return (
    <PodcastAppScreen className="w-full">
      <MotionPodcastAppScreenHeader {...(animated ? headerAnimation : {})}>
        <PodcastAppScreen.BackgroundImage imageSrc={podcsatListBgImage.src} />

        {/* <PodcastAppScreen.Subtitle>
          Get a <span className="text-indigo-100">consultation</span> for your project
        </PodcastAppScreen.Subtitle> */}
        {/* <PodcastAppScreen.ProfileImage /> */}
        <div className="mt-2 flex lg:mt-0">
          <div className="max-w-6xl  lg:px-8">
            <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-2 sm:space-x-5 ">
              <div className="flex">
                <div className="top-[var(--avatar-top,theme(spacing.3))] flex w-full items-center space-x-2 ">
                  <div className="pointer-events-auto relative h-24  w-24 rounded-full ring-indigo-300 sm:h-32 sm:w-32">
                    <Image
                      alt="Avatar Image"
                      src={podcastUserProfileImg}
                      className="h-16 h-24  w-16 w-24  rounded-full bg-zinc-100 object-cover ring-4 ring-orange-400 dark:bg-zinc-800 sm:h-32 sm:h-32  sm:w-32 sm:w-32 "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          id="podcast-user-profile-detail"
          className="max-w-64 my-1 ml-1 lg:-ml-4 lg:pb-0"
        >
          <div className="max-w-2l my-0 ml-4 lg:ml-6">
            <div className="mt-0 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
              <div className="min-w-0 flex-1 sm:hidden md:block">
                <div className="flex text-gray-500 sm:mr-6 md:mt-0 ">
                  <h1 className="truncate pr-1 text-2xl font-bold text-white text-gray-900 dark:text-slate-100">
                    Cynthia Jakson{' '}
                  </h1>
                  <svg
                    className="mr-1.5 mt-2 h-5 w-5 flex-shrink-0 text-blue-400"
                    x-description="Heroicon name: mini/check-circle"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex  border-gray-100">
              <span className="pr-2 text-slate-400">Read</span>{' '}
              <span className="text-sm font-semibold text-slate-300">
                167 Books
              </span>{' '}
            </div>

            <div className="flex  border-gray-100 pb-2">
              <span className="pr-2 text-slate-400">Released</span>{' '}
              <span className="text-sm font-semibold text-slate-300">
                84 podcasts
              </span>{' '}
            </div>
          </div>
        </div>
      </MotionPodcastAppScreenHeader>

      <MotionPodcastAppScreenBody
        {...(animated ? { ...bodyAnimation, custom } : {})}
        className="mt-0  px-1"
      >
        {/* <Modal open={openModal} toggleModal={toggleModal} message={message}/> */}
        <div className="relative grid h-64 grid-cols-2 gap-x-1 gap-y-1 py-2  px-1 group-hover:opacity-100">
          <div className="books-galery">
            <AudioListComponent
              audioCollectionTitle={'My Podcasts'}
              audioCollection={BookCollection}
            />
          </div>
          <div className="space-y-6 bg-white  px-2">
            <SocialMediaGallery
              galleryTitle={'Book Collection'}
              collection={BookCollection}
            />

            {/* {[ 
            //  {label: 'Description', value: (<TextMessageForm toggleModal={toggleModal}/>)},
            // {[  {label: 'Description', value: (<TextMessageForm  setModalOpen={togleModal}/>)},
              { label: 'Read', value: '167 Books' },
              { label: 'Released', value: '84 podcasts' },
            ].map((field) => (   
         
              <div key={field.label}   className="flex justify-between border-b border-gray-100 pb-4">
                         <div className="flex justify-between border-b border-gray-100 pb-4">
                          <div className="text-sm text-white">Released</div><div className="text-sm font-semibold text-white">84 podcasts</div>
                          </div>
                <div className="text-sm text-gray-500">{field.label}</div>

                <div className="text-sm font-semibold text-gray-900">{field.value}</div>
              </div>
  
            ))} */}
          </div>

          {/* <div className="mt-6 rounded-lg bg-black  py-2 px-3 text-center text-sm font-semibold text-white hover:bg-slate-700">
           <button onClick={()=> alert("Submited")}>Invite person</button> 
          </div> */}
        </div>
      </MotionPodcastAppScreenBody>
    </PodcastAppScreen>
  )
}

function PodcastLisScreen({ custom, animated = false }) {
  const [open, setOpen] = useState(false)

  // console.log("PODCAST IMG:" , iamEnough)
  const closeModal = (val) => {
    // console.log("handleModal", val)
    setOpen(val)
  }

  let projectFormError = false
  if (projectFormError) {
    /////*******////
  } else {
    /////*******////////
  }
  return (
    <PodcastAppScreen className="w-full">
      <MotionPodcastAppScreenHeader {...(animated ? headerAnimation : {})}>
        <PodcastAppScreen.BackgroundImage imageSrc={podcsatListBgImage.src} />
        <PodcastAppScreen.Title>List of Podcasts </PodcastAppScreen.Title>
        {/* <PodcastAppScreen.Subtitle> A collections of books and pod</PodcastAppScreen.Subtitle> */}
      </MotionPodcastAppScreenHeader>
      <MotionPodcastAppScreenBody
        {...(animated ? { ...bodyAnimation, custom } : {})}
      >
        <div className="divide-y divide-gray-100">
          {[
            {
              name: 'Be Kind (Ep 1)',
              time: '4 mis',
              change: 'Cynthia',
              color: '#2A5B94',
              podcastImage: bekind,
            },
            {
              name: 'I Am Enough ',
              time: '1h 56m',
              change: 'Anabelle',
              color: '#2A5B94',
              podcastImage: iamEnough,
            },
            {
              name: 'Courduroy',
              time: ' 12 mins',
              change: 'jannette',
              number: '4 stores',
              color: '#2A5B94',
              podcastImage: courduroy,
            },
            {
              name: 'Bed Time(Ep 1)',
              time: '5 mins',
              change: '14 mins',
              color: '#2A5B94',
              podcastImage: bedtime,
            },
            {
              name: 'Rainbow Fish Board Book, The',
              time: '23 mins',
              change: '12 mins',
              color: '#F9322C',
              podcastImage: rainbowFish,
            },

            // {
            //   name: 'Corduroy Management',
            //   time: 'AESOP',
            //   change: 'HQ OFFICE',
            //   color: '#0EA5E9',
            //   podcastImage: StatamicLogo,
            // },
          ].map((podcastepisode) => (
            <div
              key={podcastepisode.name}
              className="flex items-center gap-3 py-3 px-4 md:gap-4 lg:px-5"
            >
              <div
                className="flex-none "
                style={{ backgroundColor: podcastepisode.color }}
              >
                <Image
                  src={podcastepisode.podcastImage.src}
                  width={10}
                  height={10}
                  className="h-10 w-10 flex-none"
                  alt="podcast-img"
                />
              </div>
              <div className="flex-auto text-sm font-medium text-gray-900">
                {podcastepisode.name}
                <div className="text-xs leading-5 text-gray-500">
                  {podcastepisode.time}
                </div>
              </div>{' '}
              <div className="flex-none text-right">
                <div className={clsx('text-xs leading-5 text-slate-500')}>
                  <span className=" pr-2">by</span>
                  {podcastepisode.change}
                </div>
              </div>
              <div className="podcast-column transform-origin: 50% 50% 0px; border-radius: 2.02703% / 3.93443% ">
                <button
                  type="button"
                  className="black-2-bg rounded-full px-1.5 py-1.5 shadow-xl sm:block xl:block"
                  aria-label="Next"
                >
                  <svg
                    fill="#ffff"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 pl-0.5 md:h-6 md:w-6 md:px-0.5"
                    data-play-icon="true"
                  >
                    <path
                      d="M19 12C19 12.3557 18.8111 12.6846 18.5039 12.8638L6.50387 19.8638C6.19458 20.0442 5.81243 20.0455 5.50194 19.8671C5.19145 19.6888 5 19.3581 5 19L5 5C5 4.64193 5.19145 4.3112 5.50194 4.13286C5.81243 3.95452 6.19458 3.9558 6.50387 4.13622L18.5039 11.1362C18.8111 11.3154 19 11.6443 19 12Z"
                      className="fill"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </MotionPodcastAppScreenBody>
    </PodcastAppScreen>
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
    <PodcastAppScreen id="App screen" className="w-full">
      <MotionPodcastAppScreenHeader {...(animated ? headerAnimation : {})}>
        <PodcastAppScreen.Title>Project Requirements</PodcastAppScreen.Title>
        <PodcastAppScreen.Subtitle>
          <span className="text-indigo-100">Details</span> and description for
          the project <span className="text-indigo-100">Consultation</span>
        </PodcastAppScreen.Subtitle>
      </MotionPodcastAppScreenHeader>
      <MotionPodcastAppScreenBody
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
              {
                label: 'Location (s) :',
                value: (
                  <div className="flex">
                    <span className="mr-2 rounded-md border bg-slate-100 px-2 py-0 text-slate-500">
                      1
                    </span>{' '}
                    NEW YORK
                    {/* <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                      <path
                        d="M17 15V7H9M17 7 7 17"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg> */}
                  </div>
                ),
              },
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
                  <div className="time-value">
                    <span className="time rounded-md bg-blue-100/40 px-2 py-1">
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
                  className=" max-w-64 flex items-center  justify-center rounded-md bg-slate-700 px-4 py-2 text-sm font-semibold leading-6 text-white shadow hover:bg-slate-900"
                  disabled=""
                >
                  <svg
                    className="-ml-1 mr-3 h-5 w-5 animate-spin text-white motion-reduce:hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
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
      </MotionPodcastAppScreenBody>
    </PodcastAppScreen>
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
      className="grid h-64 grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical
    >
      {/* <Tab.List className="relative z-10 order-last col-span-6 space-y-6">
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
     
              <h3 className="mt-6 text-lg font-semibold text-white">
                <Tab className="text-left [&:not(:focus-visible)]:focus:outline-none">
                  <span className="absolute inset-0 rounded-2xl" />
                  <span className={selectedIndex === featureIndex ? "dark:text-white": "text-slate-800"}>{feature.name} </span>
                {dynamicSpan(selectedIndex, featureIndex)}
                </Tab>
              </h3>
              <p className="mt-2 text-sm text-gray-500  ">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </Tab.List> */}
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
      <div
        ref={slideContainerRef}
        className="mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
      >
        {features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            ref={(ref) => (slideRefs.current[featureIndex] = ref)}
            className="w-full flex-none snap-center  sm:px-10"
          >
            <div className="relative transform overflow-hidden rounded-2xl bg-transparent px-5 py-6 lg:bg-black">
              {/* <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <CircleBackground
                  color="#13B5C8"
                  className={featureIndex % 2 === 1 ? 'rotate-180' : undefined}
                />
              </div> */}
              <PhoneFrame className="relative mx-auto w-full max-w-[366px]">
                <feature.screen />
                {/* <feature.screen /> */}
              </PhoneFrame>

              <div className="lg:bg-indigo-custom half-phone-blur-bg halfPhone-paragraph absolute w-full  bg-transparent py-6 backdrop-blur ">
                <div className="mx-0 mt-0 justify-center px-4 sm:mt-8 lg:my-2 lg:px-4">
                  <Link href="#" className="inline-flex space-x-2 lg:space-x-6">
                    <span className="black-2-bg inline-flex items-center space-x-2 rounded-lg py-1 px-4 text-sm font-medium leading-6 text-gray-100 lg:rounded-full">
                      Profile
                    </span>
                    <span className="black-2-bg inline-flex items-center rounded-lg py-2 px-4 text-sm font-medium leading-6 text-gray-100 lg:rounded-full">
                      <span className="pr-3">Episodes</span>
                      <ArrowRight
                        color="text-indigo-500"
                        className="-mr-2 items-center justify-center rounded-full bg-white p-1 "
                        aria-hidden="true"
                      />
                    </span>
                    <span className="black-2-bg inline-flex items-center space-x-2 rounded-lg py-1 px-4 text-sm font-medium leading-6 text-gray-100 lg:rounded-full">
                      <span>Reviews</span>
                    </span>
                  </Link>
                  <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                    {feature.name}
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-slate-200">
                    {feature.description} ...
                    <span className="lg:pl-26 inline-flex items-center bg-transparent py-2 px-4 pl-2 text-sm font-bold leading-6 text-gray-100">
                      <span className="pr-3">See more</span>
                      <ArrowRight color="text-indigo-500" aria-hidden="true" />
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-0 flex justify-center gap-3">
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

export function HalfPhone() {
  return (
    <section
      id="podcast-app"
      aria-label="A great podcast app app in react-native"
      className="bg-transparent
       py-4 sm:py-4"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
          <h2 className="sr-only text-3xl font-medium tracking-tight text-white dark:text-slate-800 lg:-mt-10 ">
            Broadcast yourself to the world
          </h2>
        </div>
      </Container>
      <div id="half-phone" className="mt-54 ">
        <FeaturesMobile />
      </div>
    </section>
  )
}
