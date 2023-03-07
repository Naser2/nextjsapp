import { useMemo } from 'react'
import Head from 'next/head'
import { parse } from 'rss-to-json'

import { useAudioPlayer } from '@/components/PodcastComponents/AudioProvider'
import { Container } from '@/components/PodcastComponents/Container'
import { FormattedDate } from '@/components/PodcastComponents/FormattedDate'
import {
  CloseButton,
  PlayButton,
} from '@/components/PodcastComponents/player/PlayButton'
import EpisodeBG from '@/images/projectImages/lars_episode_bg.jpg'
import getSanityItemById from '@/lib/getSanityItemById'
import { ContainerNoPadding } from '@/components/Container'
import Image from 'next/image'
import { Note } from '@/components/mdx'
const PROJECT_ID = 'veji4lu7'
const DATA_SET = 'production'
export default function Episode({ episode, togglePartial }) {
  console.log('EPISODE IN EISODE _PARTIAL', episode)
  let episodeDetails = episode
  let date = new Date(episodeDetails.published)

  let audioPlayerData = useMemo(
    () => ({
      title: episodeDetails.title,
      audio: {
        src: episodeDetails.audio.src,
        type: episodeDetails.audio.type,
      },
      link: `/podcasts/${episodeDetails.itemId}`,
    }),
    [episodeDetails]
  )
  console.log('DATA SENT to AUDIOPLAYER', audioPlayerData)
  let player = useAudioPlayer(audioPlayerData)
  console.log('player-->', player)

  return (
    <>
      <Head>
        <title>{`${episodeDetails.title} - Their Side`}</title>
        <meta name="description" content={episodeDetails.description} />
      </Head>

      {/* <article className="py-16 lg:py-10"> */}
      <article className="py-0 lg:py-0">
        {/* <CloseButton
          togglePartial={togglePartial}
          size={'medium'}
          className={'h-2.5 w-2.5 fill-current'}
          color={'text-white'}
        /> */}

        <ContainerNoPadding
          className="lg:px-0"
          innerClassName="helloo innerClassName"
        >
          <header
            id="podcast-header"
            className="black-2-bg justify-center px-1 py-10 lg:mt-6 lg:px-8 lg:px-20"
          >
            <div class=" flex justify-start text-white lg:mt-6">
              <div class="-mt-10 px-4 text-white lg:mt-6 ">
                <button
                  id="Episode-go-back-btn"
                  onClick={() => togglePartial(false, null)}
                  type="button"
                  aria-label="Go back to podcasts"
                  className="group float-left mb-8 flex h-10 w-10 items-center justify-center 
                      rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 
                      transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 
                      dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:-left-5 
                      lg:-ml-10 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
                >
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    class="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"
                  >
                    <path
                      d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
                      strokeWidth="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </button>
              </div>
              <>
                {/* <Image
                  id="podcast_background"
                  className="podcast_background object-cover"
                  src={EpisodeBG}
                  alt=""
                  sizes="(max-height: 324px) 20rem, (max-width: 1040px)"
                  priority
                /> */}
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
                            <PlayButton
                              id="podcasts/PODCAST-PLAY_BUTTON"
                              player={player}
                              size="large"
                            />
                          </button>
                          <h1 class="ml-4 text-lg font-bold leading-7 text-slate-100 dark:text-white md:ml-6 lg:text-5xl ">
                            <p className="lg:text-1xl ml-24 mt-3  font-medium leading-8 text-slate-300">
                              {episode.description}
                            </p>
                            <h2 className="order-first font-mono text-sm leading-7 text-slate-500">
                              <FormattedDate
                                date={date}
                                className="order-first font-mono text-sm leading-7 text-slate-400"
                              />
                            </h2>
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            </div>
          </header>

          <hr className="my-0 border-gray-200" />
          {/* <div
                className="prose-slate prose mt-14 [&>h2:nth-of-type(3n)]:before:bg-violet-200 [&>h2:nth-of-type(3n2)]:before:bg-indigo-200 [&>h2]:mt-12 [&>h2]:flex [&>h2]:items-center [&>h2]:font-mono [&>h2]:text-sm [&>h2]:font-medium [&>h2]:leading-7 [&>h2]:text-slate-900 [&>h2]:before:mr-3 [&>h2]:before:h-3 [&>h2]:before:w-1.5 [&>h2]:before:rounded-r-full [&>h2]:before:bg-cyan-200 [&>ul]:mt-6 [&>ul]:list-['\2013\20'] [&>ul]:pl-5"
                dangerouslySetInnerHTML={{ __html: episode.content }}
              /> */}
          <div
            className="prose-slate prose mx-auto mt-14 px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-8 lg:px-0
          [&>h2:nth-of-type(3n)]:before:bg-violet-200 [&>h2:nth-of-type(3n2)]:before:bg-indigo-200 
          [&>h2]:mt-12 [&>h2]:flex [&>h2]:items-center [&>h2]:font-mono [&>h2]:text-sm [&>h2]:font-medium 
          [&>h2]:leading-7 [&>h2]:text-slate-900 [&>h2]:before:mr-3 [&>h2]:before:h-3 [&>h2]:before:w-1.5
           [&>h2]:before:rounded-r-full [&>h2]:before:bg-cyan-200 [&>ul]:mt-6 [&>ul]:list-['\2013\20'] [&>ul]:pl-5"
          >
            <h2 id="topics" className="dark:text-yellow-300">
              Topics
            </h2>
            <ul>
              <li className=" dark:text-slate-300/80">
                Quibusdam saepe veritatis unde ea omnis repudiandae neque unde
                sapiente
              </li>
              <li>Praesentium velit ratione</li>
              <li>Deserunt ullam sit perspiciatis</li>
              <li>Omnis occaecati tempore numquam delectus iste iste odio</li>
              <li>
                Est qui consequuntur quis quia quod ipsum consectetur ad aperiam
              </li>
              <li>
                Voluptate laborum cum dignissimos esse debitis incidunt tempore
              </li>
            </ul>
            <Note>Hello World</Note>
            <h2 id="sponsors">Sponsors</h2>
            <ul>
              <li>
                <a href="#">Initech</a> — Pioneers of the TPS report, Initech is
                actively looking for job-seekers with people skills who can work
                with customers to gather specifications and deliver them to the
                software people.
              </li>
              <li>
                <a href="#">Globex Corporation</a> — Just a friendly and
                innocent high-tech company, with a casual work environment and
                an office without walls. Anything you’ve heard about a “doomsday
                device” is pure conjecture and not based in fact.
              </li>
            </ul>
            <h2 id="links">Links</h2>
            <ul>
              <li>
                <a href="#">Quis laboriosam</a> molestiae tempore necessitatibus
              </li>
              <li>
                <a href="#">Sit autem</a> neque minima itaque sit commodi
              </li>
              <li>
                Eos ratione <a href="#">blanditiis</a>
              </li>
              <li>
                Eius a <a href="#">qui quasi</a>
              </li>
              <li>
                Laborum laudantium sunt <a href="#">mollitia aliquam</a>{' '}
                corporis
              </li>
            </ul>
          </div>
        </ContainerNoPadding>
      </article>
    </>
  )
}
