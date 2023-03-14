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
import Link from 'next/link'

const ProjectSection = forwardRef((props, ref) => {
  const introContent = {
    h1: 'Build for everyone.',
    h2: ['Every feature you need', 'to win', 'Try it for yourself'],
    tag: { text: ' Podcast App / Web ', color: 'text-sky-400' },
    description:
      ' MiraProjects was built with React and Sanity with a modular aproach and a simplitisc design concept.',
  }
  return (
    <section className="bg-black">
      <CustomizedContainer
        ref={ref}
        className="max-w-10xl overflow-hidden  lg:px-4 lg:pt-0"
        section="Projects"
        mb="mb-10"
        id="projects"
        bgColor="dark:bg-indigo-500"
        band
        bandcolor="bg-blue-2"
        note
        title={'Do it for love.'}
        margin="noMargin"
        variant="small"
        bandtext="Only writting about what passionates me"
      >
        <SectionProjects />
      </CustomizedContainer>
    </section>
  )
})

ProjectSection.displayName = 'SectionAbout'
export default ProjectSection
