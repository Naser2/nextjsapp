import { Container } from '../Container'
import {
  FeaturesMobile,
  FeaturesDesktop,
} from '@/components/next13Components/PrimaryFeatures.jsx'

import { forwardRef } from 'react'
import { CustomizedContainer } from '../CustomizedContainer'
import Image from 'next/image'
import nasSings from '@/images/nas_singing.jpeg'
import { Intro } from '../Intro'
import { SectionProjects } from './SectionProjects'

const ProjectSection = forwardRef((props, ref) => {
  const introContent = {
    h1: 'Build for everyone.',
    h2: ['Every feature you need', 'to win', 'Try it for yourself'],
    tag: { text: ' Podcast App / Web ', color: 'text-sky-400' },
    description:
      ' MiraProjects was built with React and Sanity with a modular aproach and a simplitisc design concept.',
  }
  return (
    <section ref={ref} className="bg-black">
      <CustomizedContainer
        className="max-w-10xl overflow-hidden lg:px-4 lg:pt-4  lg:pt-0 lg:pb-20"
        section="Projects"
        id="Projects"
        bgColor="dark:bg-indigo-500"
        band
        bandcolor="bg-blue-2"
        note
        title={'Do it for love.'}
        margin="noMargin"
        variant="small"
        bandtext="Only writting about what passionates me"
      >
        <Intro
          content={introContent}
          h1Class="text-amber-200"
          h21Class="text-amber-200"
          descriptionClass="text-slate-200"
          // tag= { text: "Collection",  color:"text-sky-400"}
          name="Miras Project"
          nameClass="text-white"
        />
        <a
          class="md:-pt-10  mx-12 pt-10  text-sky-500 dark:hover:text-sky-400 md:mx-6 md:ml-20"
          href="/showcase"
        >
          Desktop / mobile
          <span class="ml-2 rounded-full bg-sky-600 px-2 py-0.5 text-xs font-medium leading-5 text-sky-600 dark:text-sky-100">
            react-native{' '}
          </span>
        </a>
        <div className="mt-16 md:hidden">
          <FeaturesMobile />
        </div>
        <Container className="mt-8 hidden md:mt-20 md:block xl:mt-20">
          <FeaturesDesktop header />
        </Container>
      </CustomizedContainer>
      <SectionProjects />
    </section>
  )
})

ProjectSection.displayName = 'SectionAbout'
export { ProjectSection }
