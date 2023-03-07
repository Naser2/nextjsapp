import { useEffect, useMemo, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { parse } from 'rss-to-json'
import {
  AudioProvider,
  useAudioPlayer,
} from '@/components/PodcastComponents/AudioProvider'
import { Container } from '@/components/PodcastComponents/Container'
import { FormattedDate } from '@/components/PodcastComponents/FormattedDate'
import { PodcastsPageLayout } from '@/components/PodcastComponents/PodcastsPageLayout.jsx'
import Episode from './Episode'
import episode from 'sanity-backend/schemas/episode'
import clsx from 'clsx'
import { ContainerNoPadding } from '@/components/Container'
import { createClient } from 'next-sanity'
import getSanityFileUrl from '@/lib/getSanityFileUrl'
import EpisodeBG from '@/images/projectImages/lars_episode_bg.jpg'
import Image from 'next/image'
export function PlayPauseIcon({ playing, ...props }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 10 10" fill="none" {...props}>
      {playing ? (
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.496 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H2.68a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H1.496Zm5.82 0a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5H8.5a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5H7.316Z"
        />
      ) : (
        <path d="M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z" />
      )}
    </svg>
  )
}

function EpisodeEntry({
  episode,
  showEpisodePartial,
  togglePartial,
  toggledEpisode,
  className,
}) {
  let date = new Date(episode.published)
  let audioPlayerData = useMemo(
    () => ({
      id: episode.id,
      title: episode.title,
      audio: {
        src: episode.audio.src,
        type: episode.audio.type,
      },
      link: `/podcasts/${episode.id}`,
    }),
    [episode]
  )
  console.log('EPISODE_toggledEpisode:', toggledEpisode)
  let player = useAudioPlayer(audioPlayerData)

  const EpisodeTitle = () => {
    if (!showEpisodePartial) {
      return (
        <>
          <h2
            id={`episode-${episode.id}-title`}
            className="mt-2 text-lg  font-bold text-slate-900 lg:text-3xl"
          >
            <Link href={`/podcasts/${episode.id}`}>{episode.title}</Link>
          </h2>
          <FormattedDate
            date={date}
            className="order-first font-mono text-sm leading-7 text-slate-500"
          />
        </>
      )
    } else {
      return (
        <>
          {' '}
          <div className="text">HEllo </div>
          {/* <Image
            id="podcast_background"
            className="podcast_background object-cover"
            src={EpisodeBG}
            alt=""
            height={1050}
            sizes="(max-height: 324px) 20rem, (max-width: 1040px)"
            priority
          />
          <div className="sm:pb-30 bg-black pt-4 pb-4 lg:pt-10">
            <div id="PODCASTS-PAGE-TITLE" className="lg:px-8">
              <div className="lg:max-w-6xl">
                <div
                  id="PODCAST-LAYOUT-CHILDREN"
                  className="mx-auto px-4 px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0"
                >
                  <div className="btn-and-title flex px-2">
                    <button
                      id="play-btn-Glodal"
                      type="button"
                      className="group relative flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-slate-700 hover:bg-slate-900 focus:outline-none focus:ring focus:ring-slate-700 focus:ring-offset-4"
                      aria-label="Play"
                    >
                      <PlayPauseIcon
                        onClick={() => toggleMusicState()}
                        playing={musicIsPlaying}
                        className={['h-6 w-6 fill-white']}
                      />{' '}
                    </button>
                    <h1 className="md:ml-6text-lg ml-4 font-bold leading-7 text-slate-100 dark:text-white lg:text-5xl ">
                      <Link href={`/podcasts/episode/2`}>
                        Lars and Gang lashes back at Rupi Kaur after comments
                        she made.
                      </Link>
                      <h2 className="order-first font-mono text-sm leading-7 text-slate-500">
                        Dec-14-2023
                      </h2>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </>
        // <>
        //   <Image
        //     className="w-full object-cover"
        //     src={EpisodeBG}
        //     alt=""
        //     sizes="(min-width: 1024px) 20rem, (min-width: 640px) 16rem, 12rem"
        //     priority
        //   />
        //   <div className="sm:pb-30 pt-24 pb-12 lg:pt-40">
        //     <div id="PODCASTS-PAGE-TITLE" className="lg:px-8">
        //       <div className="lg:max-w-6xl">
        //         <div
        //           id="PODCAST-LAYOUT-CHILDREN"
        //           className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0"
        //         >
        //           <h1 className="text-lg font-bold leading-7 text-slate-900 dark:text-white lg:text-5xl ">
        //             <Link href={`/podcasts/${episode.id}`}>
        //               {episode.title}
        //             </Link>
        //           </h1>
        //           <FormattedDate
        //             date={date}
        //             className="order-first font-mono text-sm leading-7 text-slate-500"
        //           />
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </>
      )
    }
  }
  return (
    <article
      aria-labelledby={`episode-${episode.id}-title`}
      className={clsx(
        // showEpisodePartial ? 'sm:py:0 lg:-pt-10  xl:-pt-34' : 'py-10 sm:py-12'
        showEpisodePartial ? 'sm:py:0 lg:-pt-10  xl:-pt-34' : 'py-10 sm:py-12'
      )}
    >
      <ContainerNoPadding>
        {!showEpisodePartial && (
          <div
            id="episodes-index-partial"
            className="flex px-10 px-10 text-center text-center text-6xl text-6xl font-bold font-bold leading-7 leading-7 text-slate-900 text-slate-900 dark:text-white dark:text-white md:px-4 md:px-4 lg:max-w-4xl lg:max-w-4xl lg:justify-center"
          >
            <div className="flex flex-col items-start">
              <EpisodeTitle />
              <p className="mt-1 text-base leading-7 text-slate-700">
                {episode.description}
              </p>
              <div className="mt-4 flex  gap-4">
                <button
                  type="button"
                  onClick={() => player.toggle()}
                  className="flex items-center text-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
                  aria-label={`${player.playing ? 'Pause' : 'Play'} episode ${
                    episode.title
                  }`}
                >
                  <PlayPauseIcon
                    playing={player.playing}
                    className="h-2.5 w-2.5 fill-current"
                  />
                  <span className="ml-3" aria-hidden="true">
                    Listen
                  </span>
                </button>
                <span
                  aria-hidden="true"
                  className="text-sm font-bold text-slate-400"
                >
                  /
                </span>
                <button
                  onClick={() => togglePartial(true, episode.id)}
                  // onClick={() => togglePartial(true, episode.id)}
                  type="button"
                  className="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
                  aria-label={`Show notes for episode ${episode.title}`}
                >
                  Show notes
                </button>
                {/* <Link
                href={`/podcasts/${episode.id}`}
                className="flex items-center text-sm font-bold leading-6 text-pink-500 hover:text-pink-700 active:text-pink-900"
                aria-label={`Show notes for episode ${episode.title}`}
              >
                Show notes
              </Link> */}
              </div>
            </div>
          </div>
        )}
        {showEpisodePartial === true && toggledEpisode !== null && (
          <>
            {/* {showEpisodePartial && (
              <Container {...pageProps}>
                <h1 className="text-2xl font-bold leading-7 text-slate-900 dark:text-white ">
                  {episode.title}
                </h1>
              </Container>
            )} */}
            <div id="episode-partial">
              {/* <Image
                className="w-full object-contain"
                src={EpisodeBG}
                alt=""
                sizes="(min-width: 1024px) 20rem, (min-width: 640px) (max-height: 604px) 20rem, (min-width: 640px) 16rem, 12rem height:400px"
                priority
              /> */}
              {/* <h1 key={'ffffff'}>HELLO EPISODE</h1> */}
              <Episode
                episode={toggledEpisode.episode}
                id={`/podcasts/${episode.id}`}
                togglePartial={togglePartial}
                // toggledEpisode={toggledEpisode}
              />
            </div>
          </>
        )}
      </ContainerNoPadding>
    </article>
  )
}

export function PodacstIndex({ episodes, ...pageProps }) {
  const [showEpisodePartial, setShowEpisodePartial] = useState([
    { viewEpisode: false },
    { id: null },
  ])

  const [seletedEpisode, setSeletedEpisode] = useState(null)

  console.log('Episodes INDEX', episodes)
  const togglePartial = function (val, id) {
    console.log('SENDT--ID', val, id)
    setShowEpisodePartial({ viewEpisode: val, id })
    console.log('togglePartial---ID', showEpisodePartial)
  }
  const toggledEpisode = useEffect(() => {
    let currentlyViewedEpisode = episodes
      .map(({ id, title, published, description, audio }) => ({
        id: id,
        itemId: id.toString(),
        title: `${id}: ${title}`,
        published: published || 'unspecified',
        description: description || 'No description available',
        audio: audio,
      }))
      .find(({ itemId }) => itemId === showEpisodePartial.id)
    console.log('EPISODE_ID FIND ', currentlyViewedEpisode)
    // return currentlyViewedEpisode
    setSeletedEpisode(currentlyViewedEpisode)

    // console.log('Sate_Toggled_ID', showEpisodePartial.id)
    // episodes.map((episode) => {
    //   // console.log(
    //   //   'EPISODE_ID',
    //   //   episode.id === showEpisodePartial.id ? episode : 'Not FOUND'
    //   // )
    //   if (episode.id === showEpisodePartial.id) {
    //     console.log('XXXXToggled_Episode', episode)
    //   }

    //   if (episode.id === showEpisodePartial.id) {
    //     setSeletedEpisode({ episode })
    //   }
    // })
  }, [episodes, showEpisodePartial])
  console.log('Toggled_Episode', toggledEpisode)
  return (
    <>
      <Head>
        <title>
          Their Side - Conversations with the most tragically misunderstood
          people of our time
        </title>
        <meta
          name="description"
          content="Conversations with the most tragically misunderstood people of our time."
        />
      </Head>
      {/* <div className="sm:pb-30 px-10 pt-24 pb-12 lg:pt-10 "> */}
      <div className="">
        {!showEpisodePartial && (
          <div className="sm:pb-30 flex justify-center justify-center px-10 px-10 pt-24 pb-12 text-center text-center text-6xl text-6xl font-bold font-bold leading-7 leading-7 text-slate-900 text-slate-900 dark:text-white dark:text-white md:px-4 md:px-4 lg:max-w-4xl lg:max-w-4xl lg:pt-40">
            <Container {...pageProps}>
              <h1 className="px-10 text-6xl font-bold leading-7 text-slate-900  dark:text-white">
                Podcasts
              </h1>
            </Container>
          </div>
        )}
        <div className="place-content-center divide-y divide-slate-100 sm:mt-4 lg:mt-8 lg:w-full lg:border-t lg:border-slate-100">
          {episodes.map((episode) => {
            console.log(
              'FEED EPISODE: ' + episode.id,
              'TITLE: ' + episode.title,
              'ITEM-ID',
              episode.itemId
            )
            return (
              <EpisodeEntry
                key={episode.id}
                episode={episode}
                showEpisodePartial={showEpisodePartial.viewEpisode}
                togglePartial={togglePartial}
                toggledEpisode={seletedEpisode}
                {...pageProps}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default function PodcastSiteWrapper({ Component, pageProps, episodes }) {
  return (
    <AudioProvider>
      <PodcastsPageLayout episodes={episodes}>
        <PodacstIndex episodes={episodes} {...pageProps} />
        {/* <Component { ...pageProps} episodes={episodes}/> */}
      </PodcastsPageLayout>
    </AudioProvider>
  )
}

export async function getStaticProps() {
  const music = await client.fetch(`*[_type == "music"]`)
  let options = { PROJECT_ID, DATA_SET }
  const podcasts = await client.fetch(`*[_type == "episode"]`)
  console.log('SANITY-MUSIC   ----> ', music)
  console.log('SANITYPODCAST  ----> ', podcasts)
  let organizedData = await getSanityFileUrl(music, options)
  let cleanEpisodes = await getSanityFileUrl(podcasts, options)
  console.log('CLEAN-POD  ----= ', cleanEpisodes)
  return {
    props: {
      episodes: cleanEpisodes,
    },
    revalidate: 10,
  }
}
