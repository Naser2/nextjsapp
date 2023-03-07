import { Header } from '@/components/Header'
// import { Heading } from '@/components/siteMdxComponents'
// import { SectionCodeBlock as CodeBlockSection } from '@/components/indexComponents/SectionCodeBlock'
import { AboutSection } from '@/components/indexComponents/AboutSection'
// import { StayAmazing } from '@/components/indexComponents/StayAmazing'
import { LearnCodeSection } from '@/components/indexComponents/LearnCodeSection'
import { SectionProjects } from '@/components/indexComponents/SectionProjects'
import Resume from '@/components/indexComponents/SectionResumer'
import Newsletter from '@/components/NewsLetter'
import { HeroPattern } from '@/components/HeroPattern'
// import TestimoniesSection from '@/components/indexComponents/TestimoniesSection'
import SectionLandingHero from '@/components/indexComponents/SectionLandingHero'
import { PlayPauseIcon } from './podcasts/old_index'
import backgroundImage from '@/images/background-newsletter.jpg'

import SocialMediaaHandles, {
  Galery,
  Podcast,
  WorkStatus,
} from '@/components/Gallery'
import { useEffect, useMemo, useRef, useState } from 'react'
// import { LandingHeroTabs } from '@/components/indexComponents/LandingHeroTabs'
import { IntroSection } from '@/components/indexComponents/IntroSection'

import SuperchagedTechSection from '@/components/indexComponents/SuperchagedTechSection'
import SocialMediaGallery from '@/components/SocialMediaGallery'

import { createClient } from 'next-sanity'

import Head from 'next/head'

import { getBlogs } from '@/lib/getBlogs'
import blogsJson from './blogs/blogsJson'
import { BlogsSample } from './sampleBlogs'
import { CustomizedContainer } from '@/components/CustomizedContainer'
import {
  AudioProvider,
  useAudioPlayer,
} from '@/components/PodcastComponents/AudioProvider'
import { AudioPlayer } from '@/components/PodcastComponents/player/AudioPlayer'
import { intagramImgs } from '@/components/SocialMediaGallery'
// import episode from '../../public/ipanema_João_Gilberto_StanGetz.mp3'
import getSanityFileUrl from '@/lib/getSanityFileUrl'
import Link from 'next/link'
import Image from 'next/image'
import EpisodeBG from '@/images/projectImages/lars_episode_bg.jpg'
import { PlayButton } from '@/components/PodcastComponents/player/PlayButton'
// import channelBanner from '/channels4_banner.jpeg'
import { CallToAction } from '@/components/next13Components/CallToAction'
import { ProjectSection } from '@/components/indexComponents/HomePojectsSection'
import { keys } from 'keys'
const projectId = keys.PROJECT_ID
const dataSet = keys.DATA_SET
const name = keys.NAME
const title = keys.TITLE

export default function Home({ blogs, music, episodes, className }) {
  console.log('MUSIC[0]', music)
  const sectAboutRef = useRef(null)
  const sectProjectRef = useRef(null)
  const blogsRef = useRef(null)
  const learnCode = useRef(null)
  const contactRef = useRef(null)
  const podcastRef = useRef(null)
  const socialsRef = useRef(null)
  const githubRef = useRef(null)
  const reversedBlogs = blogsJson.reverse()
  const { itemId, title, audio, published } = music[0]

  const [musicIsPlaying, setMusicIsPlaying] = useState(false)
  const [musicIsMutter, setMusicIsMutted] = useState(false)

  let playerRef = useRef(null)

  useEffect(() => {
    if (musicIsPlaying === true) {
      if (playerRef.current) {
        playerRef.current.play()
      }
    }
    if (musicIsPlaying === false) {
      if (playerRef.current) {
        playerRef.current.pause()
      }
    }
  }, [musicIsPlaying])

  const toggleMusicState = () => {
    setMusicIsPlaying(!musicIsPlaying)
  }

  let date = new Date(published)
  let audioData = useMemo(
    () => ({
      title: title,
      audio: {
        src: audio.src,
        type: audio.type,
      },
      link: `/podcasts/${itemId}`,
    }),
    [audio.type, title, audio.src, itemId]
  )
  let player = useAudioPlayer(audioData)

  console.log('audioPlayerData', player)
  const Play = () => {
    if (playerRef.current) {
      playerRef.current.play()
    } else {
      // Throw error
    }
  }
  const StopPlay = () => {
    if (playerRef.current) {
      playerRef.current.pause()
    } else {
      // Throw error
    }
  }
  const StopPlaying = () => {
    console.log('stopPlaying')
    if (playerRef.current) {
      console.log(' playerRef.current.pause()', playerRef.current)
      playerRef.current.pause()
    } else {
      // Throw error
    }
  }
  // console.log('PLAYINNNNG', musicIsPlaying)
  const lightGreenToBlueClass = 'bg-gradient-to-r from-cyan-500 to-blue-500'
  const skyToIndigo = 'bg-gradient-to-r from-sky-500 to-indigo-500'
  console.log('MUSIC IS PLAYING ', musicIsPlaying)
  const HomeMusicPlayer = () => {
    return (
      <>
        <div class="px-auto xl:items-left relative mt-4 flex flex items-center items-center items-center gap-4 gap-4 px-8 pt-4 lg:px-28 lg:pt-1"></div>
        <div className="px-auto xl:items-left relative flex items-center items-center gap-4 px-8 pt-0 lg:px-28 lg:pt-1">
          <button
            type="button"
            onClick={() => player.toggle()}
            className="-400 flex items-center  rounded-full rounded border border-black bg-slate-900  py-5 px-5 text-sm font-bold leading-6 text-white text-red-400 hover:text-red-500 active:text-blue-900 dark:rounded-full  
            dark:border-sky-500 dark:bg-sky-400 dark:px-5 dark:py-1 dark:text-white dark:hover:text-sky-600"
            aria-label={`${player.playing ? 'Pause' : 'Play'} episode`}
          >
            <PlayPauseIcon
              playing={
                player.playing
                //  &&
                // player.meta &&
                // player.meta.title === episode.title
              }
              className="h-6 w-6 fill-current dark:h-2.5 dark:w-2.5 "
            />
            {/* <span className="hidden dark:ml-3" aria-hidden="true">
              PLAY
            </span> */}
            <span
              className=" sr-only dark:not-sr-only dark:ml-3"
              aria-hidden="true"
            >
              PLAY
            </span>
            <div class="flex flex-col items-start"></div>
          </button>
          <span aria-hidden="true" class="text-sm font-bold text-slate-300">
            |
          </span>
          <span
            class="flex items-center text-sm  font-bold leading-6 text-black hover:text-red-700 active:text-blue-500 dark:text-sky-500 dark:hover:text-indigo-400 "
            aria-label="Show notes for episode 5: Bill Lumbergh"
            href="/podcasts/5"
          >
            Music makes everything better
          </span>
        </div>

        <time
          datetime="2022-02-24T00:00:00.000Z"
          class="relative  order-first -mt-6 flex items-center items-center gap-x-4 px-10 px-8 pb-4 text-sm font-medium italic leading-7 text-slate-500 dark:mt-0 lg:mx-4 lg:px-24 lg:pt-1 "
        >
          <h2
            id="episode-5-title"
            class="ml-24 text-lg font-bold text-slate-400 dark:ml-32 dark:text-slate-300/90 "
          >
            <a href="/5">Cool mix</a>
          </h2>{' '}
          Chill Mix{' '}
          <span aria-hidden="true" class="text-sm font-bold text-slate-300">
            |
          </span>{' '}
          17 mins
        </time>
      </>
    )
  }
  return (
    <>
      <div className="app-main relative mx-auto w-full ">
        {/* <AudioProvider> */}
        <Head>
          <title> NasDesign</title>
          <meta
            name="description"
            content="programing, blogs, coding, documentation"
          />
        </Head>
        <SectionLandingHero />
        <IntroSection />
        {/*    {music.map((tune) => {
          return (
            <div
              key={'sample.title'}
              // onMouseMove={'onMouseMove'}
              className="dark:bg-white/2.5 group relative flex flex flex-col overflow-hidden  rounded-lg  bg-white 
           shadow-lg transition-shadow hover:shadow-md hover:shadow-zinc-900/5 dark:hover:shadow-black/5 md:rounded-sm"
            >
              <div className="flex-shrink-0">
               <Image
                  href={'/'}
                  // width={100%}
                  // height={100}
                  src={tune.coverArt.asset.src}
                  alt="Model wearing plain black basic tee."
                  className="md:rounded-t-0 ytd-action-companion-ad-renderer style-scope ytd-action-companion-ad-renderer  no-transition h-48 w-full object-cover"
                />
              </div>

              <div className="flex flex-1 flex-col justify-between">
                <div id="blog-card-body" className="bg-white px-6 py-4">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={'sample.href'} className="hover:underline">
                        {'sample.name'}
                      </a>
                    </p>
                    <a href={'sample.href'} className="mt-2 block">
                      <p className="commom-blog-card-title-typography text-xl font-semibold text-gray-900 ">
                        {'sample.title'}
                      </p>
                    </a>
                  </div>
                </div>

                <div className="mt-0 flex items-center bg-gray-100 px-6 py-4">
                  <div className="flex-shrink-0">
                    <a href={'sample.author.href'}>
                      <span className="sr-only">{'sample.author.name'}</span>
                      {/* <Image
                    className="h-10 w-10 rounded-full md:rounded-sm"
                    src={'sample.author.image'}
                    alt="the author image"
                  />
                    </a>
                  </div>

                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a
                        href={'sample.author.href'}
                        className="hover:underline"
                      >
                        author Name
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        })} */}

        <HomeMusicPlayer />

        <SocialMediaaHandles />

        <Galery
          projectsRef={sectProjectRef}
          learnToCode={learnCode}
          aboutRef={sectAboutRef}
          blogsRef={blogsRef}
          podcastRef={podcastRef}
          socialsRef={socialsRef}
          githubRef={githubRef}
        />

        <div
          class={[
            skyToIndigo,
            'z-[100] hidden h-[40px] w-full flex-col items-center justify-center bg-gray-100 bg-gradient-to-r from-sky-500 to-indigo-500 py-2 text-base dark:bg-gray-700 sm:flex-row sm:py-0 md:text-lg lg:flex',
          ]}
        >
          <a
            class="SkipToContent_skipToContentLink__36RIn shared_primaryButton__LUnwD shared_button__RCiD_ shared_baseButton__eS1s3 shared_hairline2__TXZzE shared_resetButton__bYzwJ shared_box__yyOsu shared_borderRadius__c7hZ0 shared_focusOutlineOutside__cqmM7"
            href="/projects"
          >
            The journey
          </a>
        </div>
        <AboutSection ref={sectAboutRef} />

        <SuperchagedTechSection />
        <div className="pocast-mask mask-image: linear-gradient(to bottom, white, white, transparent);mx-auto xl:max-w-8xl max-w-7xl   sm:px-6 md:px-0">
          <Podcast />
        </div>

        <CustomizedContainer
          ref={blogsRef}
          id="blogs-list-section"
          page={false}
          header
          margin="noMargin"
          bgColor="indigo"
          band={true}
          bandcolor="main-bg-yellow"
          bandtext="Only writting about what passionates me"
          section={'blog-teaser'}
          sticky
          titleColors="text-white dark:text-red-100"
          title="Stay amazing. Keep reading &  Stay Cool"
          description="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
          sectionNameinnerStyle="smooth-indo-bg border border-indigo-700/10  p-4 lg:p-24 dark:subtle-indigo  dark:border-0"
        >
          <BlogsSample ref={blogsRef} />
        </CustomizedContainer>
        <div className="announcementBanner_root blue">
          <div className="blue SkipToContent_skipToContent__Rsvqx px-8 text-left lg:px-20">
            <a class="" href="/projects">
              Projects
            </a>
          </div>
        </div>
        <ProjectSection />

        {/* <SectionProjects ref={sectProjectRef} /> */}
        {/* <CallToAction /> */}
        <HeroPattern />
        <div className="announcementBanner_root bg-black">
          <div class="px-8 text-left lg:px-20">
            <a class="" href="/projects">
              Courses
            </a>
          </div>
        </div>
        <LearnCodeSection ref={learnCode} />

        <div
          class={[
            'bg-white',
            lightGreenToBlueClass,
            'z-[100] hidden h-[40px] w-full flex-col items-center justify-center bg-gray-100 bg-gradient-to-r from-sky-500 to-indigo-500 py-2 text-base dark:bg-gray-700 sm:flex-row sm:py-0 md:text-lg lg:flex',
          ]}
        >
          <div class="hidden sm:block">Keep in touch </div>
        </div>
        <div
          id="contact"
          className="relative block w-full bg-black pb-4 md:inline-flex  md:pt-[calc(theme(spacing.12)+12px)] md:pt-10 md:pb-10 "
        >
          <div className="contact-email md:w-3/5 lg:w-4/5 xl:w-3/4 ">
            <Newsletter ref={contactRef} />
          </div>
          <div
            id="contact-instagram"
            className="relative w-full items-center justify-center px-6 pb-4  md:w-2/5  md:px-0 lg:w-2/5 xl:w-1/4"
          >
            <SocialMediaGallery
              ref={socialsRef}
              galleryTitle="Instagram"
              galleryTitleUndeline="border-red-500"
              collection={intagramImgs}
              galleryMessage="Wanna connect on socila media for tech updates and everything else."
            />
          </div>
        </div>
      </div>
    </>
  )
}

// export async function getServerSideProps(context) {

//   const music = await client.fetch(`*[_type == "music"]`)

//   console.log('MUSIC ----= ', music)

//   return {
//     props: {
//       music: (await getBlogs()).map(({ component, ...meta }) => meta),
//     },
//   }
// }

export async function getStaticProps() {
  const projectId = keys.PROJECT_ID
  const dataSet = 'production'
  const name = keys.NAME
  const title = keys.TITLE
  const client = createClient({
    name: name,
    title: title,
    projectId: projectId,
    dataset: 'production',
  })

  const music = await client.fetch(`*[_type == "music"]`)

  let options = { projectId, dataSet }
  // const podcasts = await client.fetch(`*[_type == "episode"]`)
  console.log('SANITY-MUSIC   ----> ', music)
  // console.log('SANITYPODCAST  ----> ', podcasts)
  let organizedData = await getSanityFileUrl(music, options)

  return {
    props: {
      blogs: (await getBlogs()).map(({ component, ...meta }) => meta),
      music: organizedData,
    },
    revalidate: 10,
  }
}
