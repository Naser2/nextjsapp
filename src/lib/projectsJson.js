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
import eth_deployer_2 from '@/images/projectImages/Solidity_deployer.png'

import podcastBabe1 from '@/images/projectImages/podcastBabe1.png'

import courses_site_2 from '@/images/projectImages/courses_site_2.png'

const projectsList = [
  {
    id: 1,
    category: 'React-Sanity',
    name: 'Mir Project',
    tech: ['react-native', 'mogoBD'],
    description:
      'You can finally stop procrastinating and record your first episode.',
    longDescription:
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
    projectDetails: [
      {
        price: '$36.00',
        technologies:
          'You awake in a new, mysterious land. Mist hangs low along the distant mountains. What does it mean?',
        delivery: ['Floyd Miles', '7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
        email: 'f•••@example.com',
        phone: '1•••••••••40',
        href: '#',
        status: 'Completed',
        step: 5,
        date: 'March 24, 2021',
        dateTime: '2021-03-24',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/confirmation-page-04-product-01.jpg',
        imageAlt:
          'Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade.',
      },
      // More products...
    ],
  },

  {
    id: 3,
    category: 'Blog App',
    name: 'Blogon',
    tech: ['NextJs', 'mdx'],
    theme: {
      bgcolor: 'bg-indigo-500',
      color: 'border-idigo-500',
      textcolor: 'text-indigo-600',
    },

    description:
      'Su You’ve ordered your SM7B, boom arm, and a bunch of acoustic foam.',
    longDescription:
      'You’ve ordered your SM7B, boom arm, and a bunch of acoustic foam. With this template, you can finally stop procrastinating and record your first episode.',

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
    tech: ['NextJs', 'Sanity'],
    theme: {
      bgcolor: 'bg-indigo-500',
      color: 'border-idigo-500',
      textcolor: 'text-indigo-600',
    },
    description:
      'coustic foam. With this template, you can finally stop procrastinating and record your first episode.',
    longDescription:
      ' You’ve ordered your SM7B, boom arm, and a bunch of acoustic foam. With this template, you can finally stop procrastinating and record your first episode.',
    projectImage: {
      src: podcast_main,
      alt: 'Screenshot of Podcast app ',
      class: 'mt-10 aspect-[1216/640] sm:rounded-3xl md:mt-0',
    },
    images: [podcast_main],
    projectDetails: [
      {
        price: '$36.00',
        technologies:
          'You awake in a new, mysterious land. Mist hangs low along the distant mountains. What does it mean?',
        delivery: ['Floyd Miles', '7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
        email: 'f•••@example.com',
        phone: '1•••••••••40',
        href: '#',
        status: 'Completed',
        step: 5,
        date: 'March 24, 2021',
        dateTime: '2021-03-24',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/confirmation-page-04-product-01.jpg',
        imageAlt:
          'Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade.',
      },
      // More products...
    ],
  },

  {
    id: 4,
    category: 'Geolocation',
    tech: ['React /React-native', 'mongodb'],
    name: 'Oneway',
    theme: {
      bgcolor: 'bg-sky-500 dark:bg-black',
      color: 'border-blue-500',
      textcolor: 'main-blue',
    },
    description:
      'A geo-location technology  for west Africa and beyond is enough to make you rip your hair out withs',
    longDescription:
      ' You’ve ordered your SM7B, boom arm, and a bunch of acoustic foam. With this template, you can finally stop procrastinating and record your first episode.',
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
    tech: ['VueJs', 'Firebase'],
    name: 'Chef Kenneth',
    theme: {
      bgcolor: 'bg-indigo-500',
      color: 'border-idigo-500',
      textcolor: 'text-indigo-600',
    },
    description:
      'Su You’ve ordered your SM7B, boom arm, and a bunch of acoustic foam. With',
    longDescription:
      ' You’ve ordered your SM7B, boom arm, and a bunch of acoustic foam. With this template, you can finally stop procrastinating and record your first episode.',
    projectImage: {
      src: chef_2,
      alt: 'Screenshot of Podcast app ',
      class: 'mt-10 aspect-[1216/640] sm:rounded-3xl md:mt-0',
    },
    imageAspectRatio: 'aspect-[641/640]',
    images: [chef_2],
    projectDetails: [
      {
        price: '$36.00',
        technologies:
          'You awake in a new, mysterious land. Mist hangs low along the distant mountains. What does it mean?',
        delivery: ['Floyd Miles', '7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'],
        email: 'f•••@example.com',
        phone: '1•••••••••40',
        href: '#',
        status: 'Completed',
        step: 5,
        date: 'March 24, 2021',
        dateTime: '2021-03-24',
        imageSrc:
          'https://tailwindui.com/img/ecommerce-images/confirmation-page-04-product-01.jpg',
        imageAlt:
          'Off-white t-shirt with circular dot illustration on the front of mountain ridges that fade.',
      },
      // More products...
    ],
  },
  {
    id: 2,
    category: 'Blockchain',
    name: 'Ethereum Contract Deployer',
    tech: ['Solidity'],
    theme: {
      bgcolor: 'bg-indigo-500',
      color: 'border-idigo-500',
      textcolor: 'text-indigo-600',
    },
    description:
      'You’ve ordered your SM7B, boom arm, and a bunch of acoustd your first episode.',
    longDescription:
      'You’ve ordered your SM7B, boom arm, and a bunch of acoustic foam. With this template, you can finally stop procrastinating and record your first episode.',
    projectImage: {
      src: eth_deployer_2,
      alt: 'Screenshot of Podcast app ',
      class: 'mt-10 aspect-[1216/640] sm:rounded-3xl md:mt-0',
    },
    images: [eth_deployer_2],
  },

  {
    id: 2,
    category: 'Kid Learning App',
    tech: ['React-Native', 'Fire-Store'],
    name: 'BroadcastBaby',
    theme: {
      bgcolor: 'bg-indigo-500',
      color: 'border-idigo-500',
      textcolor: 'text-indigo-600',
    },
    description:
      'You’ve ordered your SM7B, boom arm, and a bunch of acoustic foam.',
    longDescription:
      'You’ve ordered your SM7B, boom arm, and a bunch of acoustic foam. With this template, you can finally stop procrastinating and record your first episode.',

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
    tech: ['NextJs', 'mdx'],
    theme: {
      bgcolor: 'bg-yellow-600',
      color: 'border-orange-500',
      textcolor: 'text-yellow-600',
    },
    description: 'stop procrastinating and record your first episode.',
    longDescription:
      "You’ve ordered your SM7B, boom arm, and a bunch of acoustic foam. With this,ouhveueqqeouhuoho'uh j/ilhj",
    projectImage: {
      src: courses_site_2,
      alt: 'Screenshot of the Primer template',
      class: 'mt-10 aspect-[1216/640] sm:rounded-3xl md:mt-0',
    },
    images: [courses_site_2],
  },
]

export default projectsList
