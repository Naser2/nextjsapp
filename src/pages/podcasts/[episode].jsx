import { useMemo } from 'react'
import Head from 'next/head'
import { parse } from 'rss-to-json'
import { PodcastsPageLayout } from '@/components/PodcastComponents/PodcastsPageLayout.jsx'
import { useAudioPlayer } from '@/components/PodcastComponents/AudioProvider'
import { Container } from '@/components/PodcastComponents/Container'
import { FormattedDate } from '@/components/PodcastComponents/FormattedDate'
import { PlayButton } from '@/components/PodcastComponents/player/PlayButton'
import { createClient } from 'next-sanity'

import { useRouter } from 'next/router'
import getSanityItemById from '@/lib/getSanityItemById'
import Image from 'next/image'

import ImageUrlBuilder from '@sanity/image-url'
// import cleardot from '@/images/cleardot.gif'
import { Eyebrow } from '@/components/siteMdxComponents'

import KeysProvider from '@/lib/keys'
import Link from 'next/link'
import blogsJson from '../../lib/blogsJson'
const languages = ['en', 'fr', 'hn']
const { PROJECT_ID, TITLE, NAME, DATA_SET } = KeysProvider()

console.log('PROJECT_ID_KEYZ-[EPISODE]', PROJECT_ID, TITLE, NAME, DATA_SET)

export default function Episode(
  { episode, components, language = 'en', clientKeys },
  props
) {
  console.log('CLIENT-KEYYS', clientKeys)

  console.log('CONTENT EZ:', episode.content)
  // const contentText = episode.content[0].children.map((child) => {
  //   return child.text
  //   console.log('CHILD', child.text)
  // child.map((text) => {
  //   console.log('CHILD_TEXT', text)
  // })
  // })
  const { PROJECT_ID, TITLE, NAME, DATA_SET } = KeysProvider()
  console.log('PROJECT_ID_EPISODE_COMPONENT', PROJECT_ID, TITLE, NAME, DATA_SET)
  // const projectId = PROJECT_ID
  // const dataSet = 'production'
  // const name = NAME
  // const title = TITLE

  const client = createClient(clientKeys)
  // const {
  //   Button,
  //   CodeGroup,
  //   Col,
  //   Heading,
  //   Note,
  //   Properties,
  //   Property,
  //   Row,
  //   a,
  //   code,
  //   h2,
  //   pre,
  // } = components

  // console.log(
  //   ' PROPSSS->>>',
  //   CodeGroup,
  //   Col,
  //   Heading,
  //   Note,
  //   Properties,
  //   Property,
  //   Row,
  //   a,
  //   code,
  //   h2,
  //   pre
  // )

  function voiceToText() {
    console.log('AI Text')
  }
  let imageSource = episode.coverArt.asset._ref

  const builder = ImageUrlBuilder(client)

  function urlFor(imageSource) {
    return builder.image(episode.coverArt.asset._ref)
  }

  console.log('[Episde].jsx', episode)
  const router = useRouter()
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
  console.log('DATA SENT to AUDIOPLAYER', audioPlayerData)
  let player = useAudioPlayer(audioPlayerData)
  console.log('player-->', player)
  return (
    <>
      <PodcastsPageLayout className="hidden">
        <Head>
          <title>{`${episode.title} - Their Side`}</title>
          <meta name="description" content={episode.description} />
        </Head>
        <article className="lg:border-t-0-16  mt-14 border-t border-b  border-slate-500 md:border-t md:py-0 ">
          <div className="to-blue-500,z-[100]  h-[40px] w-full flex-col items-center  bg-gray-100 bg-gradient-to-r bg-gradient-to-r from-cyan-500 from-sky-500 to-indigo-500  text-base dark:bg-gray-700 sm:flex-row sm:py-0 md:text-lg lg:flex">
            <button
              onClick={() => router.back()}
              id="podcast-go-back"
              type="button"
              className="w-23 group absolute top-0  flex h-10 flex-shrink-0  items-center justify-center bg-slate-900 py-2 px-2 hover:text-white focus:outline-none focus:ring lg:h-11 lg:w-24 "
              aria-label="go-back"
            >
              <svg
                viewBox="0 0 20 20"
                fill="none"
                aria-hidden="true"
                className="h-10 w-10 rotate-180  font-bold text-white  md:h-14 md:w-14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
                ></path>
              </svg>
              Back
            </button>
          </div>

          <Image
            id={`podcast-${episode.id}-image-background`}
            className="podcast_background object-cover"
            src={urlFor(episode.coverArt).url()}
            alt={`${episode.title}-image-background`}
            width={1000}
            height={1050}
            sizes="(max-height: 324px) 20rem, (max-width: 1040px)"
            priority
          />
          <div className="md:mt-84 lg:mt-74 xl:mt-94  xxl:mt-104 xxl:mt-1010 absolute top-0 ml-2 mt-40 flex  items-center gap-3 rounded-full bg-black lg:gap-6 xl:ml-6 ">
            <PlayButton player={player} size="small" className={'text-black'} />
            <div id="episode-info" className="block  py-0 pr-4 lg:pr-4">
              <h1 className=" px-4  font-bold text-slate-100 dark:text-slate-200 md:text-3xl xl:text-2xl">
                {episode.title}
              </h1>
              <FormattedDate
                date={date}
                className="order-first -mt-4 px-8 font-mono text-sm leading-7 text-slate-500 "
              />
            </div>
          </div>
          <div className="to-blue-500,z-[100]  h-[40px] w-full flex-col items-center  bg-gray-100 bg-gradient-to-r bg-gradient-to-r from-cyan-500 from-sky-500 to-indigo-500  text-base dark:bg-gray-700 sm:flex-row sm:py-0 md:text-lg lg:flex"></div>
          <Container className={'mt-10  md:mt-20  md:py-0 '}>
            <header className="flex-col">
              <div className="flex items-center gap-6  px-4 md:px-6 lg:px-8">
                <div className="flex flex-col">
                  {/* <Heading level={1} id="sponsor">
                    Sponsors
                  </Heading> */}
                  <h1 className="mt-2 text-4xl font-bold text-slate-900 dark:text-slate-200">
                    Summary
                  </h1>
                  <p className="mt-3 text-lg font-medium leading-8 dark:text-slate-300/90">
                    {episode.description}
                  </p>
                </div>
              </div>
              <div className="not-prose  mx-8 mb-16 mt-6 flex gap-3">
                {/* <Button onClick={() => voiceToText(true)} arrow="right">
                  Read this
                </Button>
                <Button
                  className="px-4"
                  rounder="rounded-md"
                  href={`${languages[language]}/${episode.id}`}
                  variant="outline"
                >
                  Translate this poadcast
                </Button> */}
              </div>
            </header>
            <hr className="my-12 border-gray-200" />

            <div className="prose-slate prose mt-14 [&>h2:nth-of-type(3n)]:before:bg-violet-200 [&>h2:nth-of-type(3n+2)]:before:bg-indigo-200 [&>h2]:mt-12 [&>h2]:flex [&>h2]:items-center [&>h2]:font-mono [&>h2]:text-sm [&>h2]:font-medium [&>h2]:leading-7 [&>h2]:text-slate-900 [&>h2]:before:mr-3 [&>h2]:before:h-3 [&>h2]:before:w-1.5 [&>h2]:before:rounded-r-full [&>h2]:before:bg-cyan-200 [&>ul]:mt-6 [&>ul]:list-['\2013\20'] [&>ul]:pl-5">
              <h2 id="topics">Topics</h2>
              <ul>
                <li>{episode.summary}</li>
              </ul>
              <h2 id="sponsors">Sponsors</h2>
              <ul>
                {episode.sponsors &&
                  episode.sponsors.map((sponsor) => (
                    <Link href={episode.id} key={sponsor}>
                      <li>
                        <Eyebrow
                          color={'text-indigo-400'}
                          tag="Sponsor"
                          label={sponsor}
                        />
                      </li>
                    </Link>
                  ))}

                <li>
                  <Link href="#">Real Corporation</Link> — is has been a
                  longtime partner and is currently sponsoring our...
                </li>
              </ul>
              {episode.links.length >= 2 ? (
                <h2 id="links">Links</h2>
              ) : (
                <h2 id="links">Link</h2>
              )}
              <ul>
                {episode.links && episode.links.length >= 2 ? (
                  episode.links.map((link) => (
                    <li key={link.split('#')[0]}>
                      <Link
                        className="inline-flex justify-center gap-0.5 overflow-hidden text-sm font-medium text-blue-500 transition hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500"
                        href={link.split('#')[1]}
                      >
                        {link.split('#')[0]}
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          aria-hidden="true"
                          className="relative top-px mt-0.5 -mr-1 h-5 w-5"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
                          ></path>
                        </svg>
                      </Link>
                    </li>
                  ))
                ) : episode.links.length >= 1 ? (
                  <h2
                    className="dark:text-slate-300-400 inline-flex  justify-center  overflow-hidden text-sm  font-medium  text-blue-500"
                    id="links"
                  >
                    {episode.links[0]}
                  </h2>
                ) : (
                  <h2
                    className="justify-center  overflow-hidden text-sm font-medium text-blue-500  dark:text-emerald-400 dark:hover:text-emerald-500"
                    id="links"
                  >
                    No links for this episode
                  </h2>
                )}
              </ul>
            </div>
            {/* <Note>{episode.note}</Note> */}
          </Container>
        </article>
      </PodcastsPageLayout>
    </>
  )
}

export async function getStaticProps({ params }) {
  const projectId = PROJECT_ID
  const dataSet = 'production'
  const name = NAME
  const title = TITLE
  const client = createClient({
    name: name,
    title: title,
    projectId: projectId,
    dataset: 'production',
  })

  // const clientKeys = { name, PROJECT_ID, title, dataSet }
  let options = { projectId, dataSet }
  const episodes = await client.fetch(`*[_type == "episode"]`)

  console.log('EPISODES', episodes)
  console.log('PARAMS', params.episode)
  let paramsId = params.episode
  let episode = await getSanityItemById(episodes, paramsId, options)

  console.log('EPISODE', episode)

  return {
    props: {
      episode,
      clientKeys: { name, projectId, title, dataSet },
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  let feed = await parse('https://their-side-feed.vercel.app/api/feed')

  return {
    paths: feed.items.map(({ id }) => ({
      params: {
        episode: id.toString(),
      },
    })),
    fallback: 'blocking',
  }
}
