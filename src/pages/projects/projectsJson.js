import highLightProject from '@/lib/highlightProject'
import miras_work_main from '@/images/projectImages/miras_work_main.png'
import podcast_main from '@/images/projectImages/podacst_adobe_2.png'
import project3 from '@/images/projectImages/geo_location.png'
import project4 from '@/images/projectImages/coding_courses.png'
import oneway from '@/images/projectImages/oneway.png'
import blogdeskMob from '@/images/projectImages/blog_desktop_mobile_combo.png'
import blog_photolarge from '@/images/projectImages/blog_photo-large-1.png'
import chef_1 from '@/images/projectImages/chef_1.png'
import chef_2 from '@/images/projectImages/chef/chef_3.png'
import eth_deployer from '@/images/projectImages/eth_deployer.png'

import podcastBabe1 from '@/images/projectImages/podcastBabe1.png'

import courses_site_2 from '@/images/projectImages/courses_site_2.png'

const projectsList = [
  {
    id: 1,
    category: 'React-Sanity',
    name: 'Mir Project',
    description:
      'We’ve actually published four info products ourselves and this landing page is honestly better than the sites we designed for all of those.',
    theme: {
      bgcolor: 'bg-black',
      color: 'border-black',
      textcolor: 'text-black dark:text-yellow-400/70',
    },
    projectImage: {
      src: miras_work_main,
      alt: 'Screenshot of the Primer template',
      class: 'mt-10 aspect-[1216/640] sm:rounded-3xl md:mt-0',
    },
    images: [miras_work_main],
  },
  {
    id: 3,
    category: 'Blog App',
    name: 'Blogon',
    theme: {
      bgcolor: 'bg-indigo-500',
      color: 'border-idigo-500',
      textcolor: 'text-indigo-600',
    },

    description:
      ' You’ve ordered your SM7B, boom arm, and a bunch of acoustic foam. With this template, you can finally stop procrastinating and record your first episode.',
    projectImage: {
      src: blogdeskMob,
      alt: 'Screenshot of Podcast app ',
      class: 'mt-10 aspect-[1216/640] sm:rounded-3xl md:mt-0',
    },
    images: [blogdeskMob],
  },
  {
    id: 2,
    category: 'Podcast',
    name: 'Talk It Out',
    theme: {
      bgcolor: 'bg-indigo-500',
      color: 'border-idigo-500',
      textcolor: 'text-indigo-600',
    },
    description:
      ' You’ve ordered your SM7B, boom arm, and a bunch of acoustic foam. With this template, you can finally stop procrastinating and record your first episode.',
    projectImage: {
      src: podcast_main,
      alt: 'Screenshot of Podcast app ',
      class: 'mt-10 aspect-[1216/640] sm:rounded-3xl md:mt-0',
    },
    images: [podcast_main],
  },

  {
    id: 4,
    category: 'Geolocation',
    name: 'Oneway',
    theme: {
      bgcolor: 'bg-sky-500 dark:bg-black',
      color: 'border-blue-500',
      textcolor: 'main-blue',
    },
    description:
      ' A geo-location technology  for west Africa and beyond is enough to make you rip your hair out without worrying about the design. Let us help you keep a few strands',
    projectImage: {
      src: oneway,
      alt: 'Screenshot of the Primer template',
      class: 'mt-10 aspect-[1216/640] sm:rounded-3xl md:mt-0',
    },
    images: [oneway],
  },

  {
    id: 2,
    category: 'Chef App',
    name: 'Chef Kenneth',
    theme: {
      bgcolor: 'bg-indigo-500',
      color: 'border-idigo-500',
      textcolor: 'text-indigo-600',
    },
    description:
      ' You’ve ordered your SM7B, boom arm, and a bunch of acoustic foam. With this template, you can finally stop procrastinating and record your first episode.',
    projectImage: {
      src: chef_2,
      alt: 'Screenshot of Podcast app ',
      class: 'mt-10 aspect-[1216/640] sm:rounded-3xl md:mt-0',
    },
    imageAspectRatio: 'aspect-[641/640]',
    images: [chef_2],
  },
  {
    id: 2,
    category: 'Blockchain',
    name: 'Ethereum Contract Deployer',
    theme: {
      bgcolor: 'bg-indigo-500',
      color: 'border-idigo-500',
      textcolor: 'text-indigo-600',
    },
    description:
      ' You’ve ordered your SM7B, boom arm, and a bunch of acoustic foam. With this template, you can finally stop procrastinating and record your first episode.',
    projectImage: {
      src: eth_deployer,
      alt: 'Screenshot of Podcast app ',
      class: 'mt-10 aspect-[1216/640] sm:rounded-3xl md:mt-0',
    },
    images: [eth_deployer],
  },
  {
    id: 2,
    category: 'Kid Learning App',
    name: 'BroadcastBaby',
    theme: {
      bgcolor: 'bg-indigo-500',
      color: 'border-idigo-500',
      textcolor: 'text-indigo-600',
    },
    description:
      ' You’ve ordered your SM7B, boom arm, and a bunch of acoustic foam. With this template, you can finally stop procrastinating and record your first episode.',
    projectImage: {
      src: podcastBabe1,
      alt: 'Screenshot of Podcast app ',
      class: 'mt-10 aspect-[1216/640] sm:rounded-3xl md:mt-0',
    },
    images: [podcastBabe1],
  },
  {
    id: 4,
    category: 'Courses',
    name: 'Development Courses',
    theme: {
      bgcolor: 'bg-yellow-600',
      color: 'border-orange-500',
      textcolor: 'text-yellow-600',
    },
    description:
      ' I build a wevb-app to help people learn coding form anywhere. Let us help you keep a few strands',
    projectImage: {
      src: courses_site_2,
      alt: 'Screenshot of the Primer template',
      class: 'mt-10 aspect-[1216/640] sm:rounded-3xl md:mt-0',
    },
    images: [courses_site_2],
  },
]

export default projectsList
