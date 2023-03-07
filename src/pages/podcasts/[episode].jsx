import { useMemo } from 'react'
import Head from 'next/head'
import { parse } from 'rss-to-json'
import { PodcastsPageLayout } from '@/components/PodcastComponents/PodcastsPageLayout.jsx'
import { useAudioPlayer } from '@/components/PodcastComponents/AudioProvider'
import { Container } from '@/components/PodcastComponents/Container'
import { FormattedDate } from '@/components/PodcastComponents/FormattedDate'
import { PlayButton } from '@/components/PodcastComponents/player/PlayButton'
import { createClient } from 'next-sanity'
import sanityClient from '@sanity/client'
import getSanityFileUrl from '@/lib/getSanityFileUrl'
import { AudioProvider } from '@/components/PodcastComponents/AudioProvider'
import { useRouter } from 'next/router'
import getSanityItemById from '@/lib/getSanityItemById'
import Image from 'next/image'
import { ArrowLeftIcon } from '@/components/icons/Arrows'
// import EpisodeBG from '@/images/projectImages/lars_episode_bg.jpg'
import { useNextSanityImage } from 'next-sanity-image'
import ImageUrlBuilder from '@sanity/image-url'
import cleardot from '@/images/cleardot.gif'
import { Eyebrow } from '@/components/siteMdxComponents'
// import { client } from '../../sanityClient'
import { keys } from '../../../keys'

// import { useMemo } from 'react'
// import Head from 'next/head'
// import { parse } from 'rss-to-json'

// import { useAudioPlayer } from '@/components/AudioProvider'
// import { Container } from '@/components/Container'
// import { FormattedDate } from '@/components/FormattedDate'
// import { PlayButton } from '@/components/player/PlayButton'
const projectId = keys.PROJECT_ID
const dataSet = keys.DATA_SET
const name = keys.NAME
const title = keys.TITLE
export default function Episode({ episode, components }, props) {
  console.log('PROPS EPISODE', components)

  console.log('CONTENT EZ:', episode.content)
  const contentText = episode.content[0].children.map((child) => {
    return child.text
    console.log('CHILD', child.text)
    // child.map((text) => {
    //   console.log('CHILD_TEXT', text)
    // })
  })
  const {
    Button,
    CodeGroup,
    Col,
    Heading,
    Note,
    Properties,
    Property,
    Row,
    a,
    code,
    h2,
    pre,
  } = components
  const client = createClient({
    name: name,
    title: title,
    projectId: projectId,
    dataset: 'production',
  })
  // const client = createClient({
  //   name: 'default',
  //   title: 'sanity-backend',
  //   projectId: PROJECT_ID,
  //   dataset: DATA_SET,
  // })
  // const client = createClient({
  //   name: 'default',
  //   title: 'sanity-backend',
  //   projectId: process.env.PROJECT_ID,
  //   dataset: process.env.DATA_SET,
  //   //   useCdn: true, // set to `true` to fetch from edge cache
  //   //   apiVersion: '2023-02-12', // use current date (YYYY-MM-DD) to target the latest API version
  //   //   // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
  // })

  console.log(
    ' PROPSSS->>>',
    CodeGroup,
    Col,
    Heading,
    Note,
    Properties,
    Property,
    Row,
    a,
    code,
    h2,
    pre
  )

  let imageSource = episode.coverArt.asset._ref

  const builder = ImageUrlBuilder(client)

  function urlFor(imageSource) {
    return builder.image(imageSource)
  }
  // const configuredSanityClient = sanityClient({
  //   projectId: process.env.PROJECT_ID,
  //   dataset: process.env.DATA_SET,
  //   useCdn: true,
  // })
  // const imageProps = useNextSanityImage(
  //   configuredSanityClient,
  //   episode.coverArt.src
  // )

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
          <div class="to-blue-500,z-[100]  h-[40px] w-full flex-col items-center  bg-gray-100 bg-gradient-to-r bg-gradient-to-r from-cyan-500 from-sky-500 to-indigo-500  text-base dark:bg-gray-700 sm:flex-row sm:py-0 md:text-lg lg:flex">
            <div class="inline flex">
              <button
                onClick={() => router.back()}
                id="play-btn-Glodal"
                type="button"
                class="group relative flex h-10 flex-shrink-0 items-center  justify-center bg-slate-900 py-2 px-2  hover:text-white focus:outline-none focus:ring lg:h-11 lg:w-24 "
                aria-label="go-back"
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  class="h-10 w-10 rotate-180  font-bold text-white  md:h-14 md:w-14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
                  ></path>
                </svg>
                Back
              </button>
            </div>
          </div>
          <>
            {/*   
            <div class="sm:pb-30 bg-black pt-4 pb-4 lg:pt-10">
              <div id="PODCASTS-PAGE-TITLE" class="lg:px-8">
                <div class="lg:max-w-6xl">
                  <div
                    id="PODCAST-LAYOUT-CHILDREN"
                    class="mx-auto px-4 px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0"
                  >
                    <div className="btn-and-title flex px-2">
                      <button
                        id="play-btn-Glodal"
                        type="button"
                        class="group relative flex h-20 w-20 flex-shrink-0 items-center justify-center rounded-full bg-slate-700 hover:bg-slate-900 focus:outline-none focus:ring focus:ring-slate-700 focus:ring-offset-4"
                        aria-label="Play"
                      >
                        Some BTN{' '}
                      </button>
                      <h1 class="md:ml-6text-lg ml-4 font-bold leading-7 text-slate-100 dark:text-white lg:text-5xl ">
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
            </div>*/}
          </>
          {/* <Image
            alt="episode-background-image"
            {...imageProps}
            style={{ width: '100%', height: 'auto' }} // layout="responsive" prior to Next 13.0.0
            sizes="(max-width: 800px) 100vw, 800px"
            placeholder="blur"
            blurDataURL={episode.coverArt.asset._ref}
          /> */}
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
          <div class="md:mt-84 lg:mt-74 xl:mt-94  xxl:mt-104 xxl:mt-1010 absolute top-0 ml-2 mt-40 flex  items-center gap-3 rounded-full bg-black lg:gap-6 xl:ml-6 ">
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
          <div class="to-blue-500,z-[100]  h-[40px] w-full flex-col items-center  bg-gray-100 bg-gradient-to-r bg-gradient-to-r from-cyan-500 from-sky-500 to-indigo-500  text-base dark:bg-gray-700 sm:flex-row sm:py-0 md:text-lg lg:flex"></div>
          <Container
            // className={
            //   'lg:border-t-0-16  border-t  border-slate-900 md:mt-10  md:border-t md:py-0 '
            // }
            className={'mt-10  md:mt-20  md:py-0 '}
          >
            <header className="flex-col">
              <div className="flex items-center gap-6  px-4 md:px-6 lg:px-8">
                {/* <PlayButton player={player} size="large" /> */}
                <div className="flex flex-col">
                  {/* <h1 className="mt-2 text-4xl font-bold text-slate-900 dark:text-slate-200">
                    Description
                  </h1>
                  <p className="mt-3 text-lg font-medium leading-8 dark:text-slate-300/90">
                    {episode.description}
                  </p> */}
                  <Heading level={1} id="sponsor">
                    Sponsors
                  </Heading>
                  <h1 className="mt-2 text-4xl font-bold text-slate-900 dark:text-slate-200">
                    Summary
                  </h1>
                  <p className="mt-3 text-lg font-medium leading-8 dark:text-slate-300/90">
                    {episode.description}
                  </p>
                  {/* <FormattedDate
                    date={date}
                    className="order-first font-mono text-sm leading-7 text-slate-500"
                  /> */}
                </div>
              </div>
              {/* <p className="ml-24 mt-3 text-lg font-medium leading-8 dark:text-slate-300/90">
                {episode.description}
              </p> */}
              <div class="not-prose  mx-8 mb-16 mt-6 flex gap-3">
                <Button href="/quickstart" arrow="right">
                  Read this
                </Button>
                <Button
                  className="px-4"
                  rounder="rounded-md "
                  href="/sdks"
                  variant="outline"
                  children="Translate this poadcast"
                />
              </div>

              {/* <Button href={'/'} variant="text" arrow="right">
                Speech to text
              </Button> */}
            </header>
            <hr className="my-12 border-gray-200" />

            <div class="prose-slate prose mt-14 [&>h2:nth-of-type(3n)]:before:bg-violet-200 [&>h2:nth-of-type(3n+2)]:before:bg-indigo-200 [&>h2]:mt-12 [&>h2]:flex [&>h2]:items-center [&>h2]:font-mono [&>h2]:text-sm [&>h2]:font-medium [&>h2]:leading-7 [&>h2]:text-slate-900 [&>h2]:before:mr-3 [&>h2]:before:h-3 [&>h2]:before:w-1.5 [&>h2]:before:rounded-r-full [&>h2]:before:bg-cyan-200 [&>ul]:mt-6 [&>ul]:list-['\2013\20'] [&>ul]:pl-5">
              <h2 id="topics">Topics</h2>
              <ul>
                <li>{episode.summary}</li>
              </ul>
              <h2 id="sponsors">Sponsors</h2>
              <ul>
                {episode.sponsors &&
                  episode.sponsors.map((sponsor) => (
                    <a href="#" key={sponsor}>
                      <li>
                        <Eyebrow
                          color={'text-indigo-400'}
                          tag="Sponsor"
                          label={sponsor}
                        />
                      </li>
                    </a>
                  ))}

                <li>
                  <a href="#">Real Corporation</a> — is has been a longtime
                  partner and is currently sponsoring our...
                </li>
              </ul>
              {episode.links.length >= 1 && <h2 id="links">Links</h2>}
              <ul>
                {episode.links &&
                  episode.links.map((link) => (
                    <li key={link.split('#')[0]}>
                      <a
                        class="inline-flex justify-center gap-0.5 overflow-hidden text-sm font-medium text-blue-500 transition hover:text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-500"
                        href={link.split('#')[1]}
                      >
                        {link.split('#')[0]}
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          aria-hidden="true"
                          class="relative top-px mt-0.5 -mr-1 h-5 w-5"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"
                          ></path>
                        </svg>
                      </a>
                    </li>
                  ))}
              </ul>
            </div>

            {/* <div
              id=":ys"
              class="ajR"
              role="button"
              tabindex="0"
              data-tooltip="Show trimmed content"
              aria-label="Show trimmed content"
              aria-expanded="false"
            >
              <Image
                className="cleardots"
                width={20}
                height={20}
                src={cleardot.src}
              />
            </div>
            <h2 id="topics" className="dark:text-yellow-300">
              Topics
            </h2> */}

            <Note>{episode.note}</Note>

            {/* <Heading level={1} id="sponsor">
              Sponsors
            </Heading> 

            {/* </div> */}
          </Container>
        </article>
      </PodcastsPageLayout>
    </>
  )
}

export async function getStaticProps({ params }) {
  const projectId = keys.PROJECT_ID
  const dataSet = keys.DATA_SET
  const name = keys.NAME
  const title = keys.TITLE
  console.log('PROJECT_ID', keys.PROJECT_ID)
  const client = createClient({
    name: name,
    title: title,
    projectId: projectId,
    dataset: 'production',
  })
  //   useCdn: true, // set to `true` to fetch from edge cache
  //   apiVersion: '2023-02-12', // use current date (YYYY-MM-DD) to target the latest API version
  //   // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
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
  // const client = createClient({
  //   name: 'default',
  //   title: 'sanity-backend',
  //   projectId: PROJECT_ID,
  //   dataset: DATA_SET,
  // })
  // const music = await client.fetch(`*[_type == "music"]`)
  // // let feed = await parse('https://their-side-feed.vercel.app/api/feed')
  // music.map(({ id }) => {
  //   console.log('ID_____>', id)
  // })
  // return {
  //   paths: music.map(({ id }) => ({
  //     params: {
  //       episode: id.toString(),
  //     },
  //   })),
  //   fallback: 'blocking',
  // }
}
