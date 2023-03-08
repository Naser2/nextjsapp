import { useMemo } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { parse } from 'rss-to-json'

import { Container } from '@/components/PodcastComponents/Container'
import { FormattedDate } from '@/components/PodcastComponents/FormattedDate'
import {
  AudioProvider,
  useAudioPlayer,
} from '@/components/PodcastComponents/AudioProvider'

import {
  PodcastsPageLayout,
  TinyWaveFormIcon,
  SpotifyIcon,
  OvercastIcon,
  ApplePodcastIcon,
  RSSIcon,
} from '@/components/PodcastComponents/PodcastsPageLayout.jsx'
import { createClient } from 'next-sanity'
import getSanityFileUrl from '@/lib/getSanityFileUrl'
import KeysProvider from '@/lib/keys'

const { PROJECT_ID, TITLE, NAME, DATA_SET } = KeysProvider()
console.log('PROJECT_ID_KEYZ-EPISODES', PROJECT_ID, TITLE, NAME, DATA_SET)
// import { keys } from '@/lib/keys'
const projectId = PROJECT_ID
const dataSet = DATA_SET
const name = NAME
const title = TITLE
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

function EpisodeEntry({ episode }) {
  let date = new Date(episode.published)

  let audioPlayerData = useMemo(
    () => ({
      title: episode.title,
      audio: {
        src: episode.audio.src,
        type: episode.audio.type,
      },
      link: `/${episode.id}`,
    }),
    [episode]
  )
  let player = useAudioPlayer(audioPlayerData)

  return (
    <article
      aria-labelledby={`episode-${episode.id}-title`}
      className="py-10 sm:py-12"
    >
      <Container>
        <div className="flex flex-col items-start">
          <h2
            id={`episode-${episode.id}-title`}
            className="mt-2  text-lg font-bold text-slate-700 dark:text-slate-300/90"
          >
            <Link href={`/podcasts/${episode.id}`}>{episode.title}</Link>
          </h2>
          <FormattedDate
            date={date}
            className="order-first font-mono text-sm leading-7 text-slate-500"
          />
          <p className="mt-1 text-base leading-7 text-slate-700 dark:text-slate-300">
            {episode.description}
          </p>
          <div className="mt-4 flex items-center gap-4">
            <button
              type="button"
              onClick={() => player.toggle()}
              className="flex items-center rounded border border-red-400 px-4 py-1 text-sm font-bold leading-6 text-red-400   hover:text-red-500  active:text-blue-900 dark:rounded-full dark:border-sky-500 dark:bg-sky-400 dark:text-white dark:hover:text-sky-600"
              aria-label={`${
                player.playing && player.meta.title === episode.title
                  ? 'Pause'
                  : 'Play'
              } episode ${episode.title}`}
            >
              <PlayPauseIcon
                playing={
                  player.playing &&
                  player.meta &&
                  player.meta.title === episode.title
                }
                className="h-2.5 w-2.5 fill-current"
              />
              <span className="ml-3" aria-hidden="true">
                Listen
              </span>
            </button>
            <span
              aria-hidden="true"
              className="text-sm font-bold text-slate-300"
            >
              |
            </span>
            <Link
              href={`/podcasts/${episode.id}`}
              className="flex items-center text-sm font-bold leading-6 text-sky-500 hover:text-red-700 active:text-blue-500 dark:hover:text-indigo-400 "
              aria-label={`Show notes for episode ${episode.title}`}
            >
              Show notes
            </Link>
          </div>
        </div>
      </Container>
    </article>
  )
}

function PodacstIndex({ episodes }) {
  console.log('PodacstIndex-->', episodes)
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
      <div
        id="lg-available"
        className="to-blue-500,z-[100] hidden items-center  justify-center bg-gray-100 bg-gradient-to-r bg-gradient-to-r from-black from-sky-500 to-indigo-500  md:flex"
      >
        <ul
          role="list"
          className=" mt-0.5 flex h-[40px] gap-10   pl-4 text-4xl  text-base font-medium leading-7 leading-7 text-slate-100 text-slate-700 dark:text-slate-300 sm:gap-8  md:pl-6 md:text-left lg:gap-4 xl:pl-32 
   
   "
        >
          {[
            ['Spotify', SpotifyIcon],
            ['Apple Podcast', ApplePodcastIcon],
            ['Overcast', OvercastIcon],
            ['RSS Feed', RSSIcon],
          ].map(([label, Icon]) => (
            <li key={label} className="flex">
              <Link
                href="/"
                className="group flex items-center"
                aria-label={label}
              >
                <Icon className="h-8 w-8 fill-white group-hover:fill-yellow-400" />
                <span className="hidden hover:text-yellow-100 sm:ml-3 sm:block">
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="pb-12 sm:pb-4 lg:pt-0">
        <div
          id="episodes"
          className="mx-auto mx-auto bg-black px-4 sm:px-6 lg:px-0 "
        >
          <h1
            className="mx-auto px-4 py-10 text-4xl font-bold  leading-7
             text-slate-100 dark:text-slate-300 sm:px-6 sm:px-6 md:max-w-2xl
             md:max-w-2xl md:py-12 md:px-4 lg:px-0 lg:px-0 xl:pl-32 "
          >
            Episodes
          </h1>
        </div>

        <div
          className="black-2-bg flex h-[3px] w-full flex-col 
        items-center justify-center justify-center sm:flex-row sm:py-0 md:text-lg lg:flex"
        ></div>

        <div className="divide-slate-00 divide-y px-4 dark:divide-slate-700 sm:mt-4 lg:mt-0 lg:border-t lg:border-slate-100">
          {episodes.map((episode) => (
            <EpisodeEntry key={episode.id} episode={episode} />
          ))}
        </div>
      </div>
    </>
  )
}

export default function PodcastSiteWrapper({ Component, pageProps, episodes }) {
  console.log(
    'PROJECT_ID_KEYZ-PRODCAST_WRAPPEPR',
    PROJECT_ID,
    TITLE,
    NAME,
    DATA_SET
  )
  return (
    // <AudioProvider>
    <PodcastsPageLayout>
      <PodacstIndex episodes={episodes} />
      {/* <Component
          {...pageProps}
          episodes={episodes}
          components={PodacstIndex}
        /> */}
    </PodcastsPageLayout>
    // </AudioProvider>
  )
}
export async function getStaticProps() {
  const client = createClient({
    name: NAME,
    title: TITLE,
    projectId: PROJECT_ID,
    dataset: 'production',
  })

  // const music = await client.fetch(`*[_type == "music"]`)
  let options = { PROJECT_ID, DATA_SET }
  const podcasts = await client.fetch(`*[_type == "episode"]`)
  // console.log('SANITY-MUSIC   ----> ', music)
  console.log('SANITYPODCASTS  ----> ', podcasts)
  // let organizedData = await getSanityFileUrl(music, options)
  let cleanEpisodes = await getSanityFileUrl(podcasts, options)
  console.log('CLEAN-POD  ----= ', cleanEpisodes)
  return {
    props: {
      episodes: cleanEpisodes,
    },
    revalidate: 30,
  }
}
