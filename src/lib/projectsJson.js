import miras_work_main from '@/images/projectImages/miras_work_main.png'
import podcast_main from '@/images/projectImages/podacst_adobe_2.png'
import project3 from '@/images/projectImages/geo_location.png'
import project4 from '@/images/projectImages/coding_courses.png'
import oneway from '@/images/projectImages/oneway.png'
import blogdeskMob from '@/images/projectImages/blog_desktop_mobile_combo.png'
import blog_photolarge from '@/images/projectImages/blog_photo-large-1.png'
import blogLongRed from '@/images/projectImages/blogs_list/blogPage_main.jpeg'
import chef_0 from '@/images/projectImages/chef/chef_main.png'
import chef_1 from '@/images/projectImages/chef_1.png'
import chef_2 from '@/images/projectImages/chef/chef_3.png'
import eth_deployer from '@/images/projectImages/eth_deployer.png'
import eth_deployer_2 from '@/images/projectImages/Solidity_deployer.png'
import { Tag } from '@/components/Tag'

import podcastBabe1 from '@/images/projectImages/podcastBabe1.png'

import courses_site_2 from '@/images/projectImages/courses_site_2.png'

const projectsList = [
  {
    id: 1,
    category: 'React-Sanity',
    title: 'Mir Project',
    status_: 'most-liked',
    tech: ['react-native', 'mogoBD'],
    description:
      'You can finally stop procrastinating and record your first episode.',
    longDescription:
      'We’ve actually published four info products ourselves and this landing page is honestly better than the sites we designed for all of those.',
    theme: {
      bgcolor: 'bg-sky-100 bg-black',
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
        delivrables: { delivrablesStatus: 'bg-blue-500' },
        statment: 'inspired by News+ Apple News and more',
        deliveryTime: '2 Weeeks',
        technologies:
          'You awake in a new, mysterious land. Mist hangs low along the distant mountains. What does it mean?',
        scopes: [
          {
            label: 'User can',
            value: ['write', 'a blog'],
          },
          {
            label: 'User can',
            value: ['edit', 'delete', 'a blog'],
          },
          {
            label: 'User can',
            value: ['rate', 'comment'],
          },
          {
            label: 'User can',
            value: ['like', 'share', 'a blog'],
          },
        ],
        email: 'f•••@example.com',
        phone: '1•••••••••40',
        href: '#',
        status: 'Completed',
        pendingFeatures: 'User can like and comment on a blog',
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
    title: 'Blogon',
    tech: ['NextJs', 'MDX', 'Firebase'],
    theme: {
      bgcolor: 'bg-indigo-500',
      color: 'bg-red-100 dark:bg-white',
      textcolor: 'red dark:text-red-400',
    },

    description:
      'You can finally stop procrastinating and record your first episode',
    longDescription:
      'You’ve ordered your SM7B, boom arm, and a bunch of acoustic foam. With this template, you can finally stop procrastinating and record your first episode.',

    projectImage: {
      src: blogdeskMob,
      alt: 'Screenshot of Podcast app ',
      class: 'mt-10 aspect-[1216/640] sm:rounded-3xl md:mt-0',
    },
    images: [blogLongRed, blogdeskMob, blog_photolarge],
    projectDetails: [
      {
        delivrables: { delivrablesStatus: 'bg-blue-500' },
        statment: 'inspired by News+ Apple News and more',
        deliveryTime: '2 Weeeks',
        technologies:
          'You awake in a new, mysterious land. Mist hangs low along the distant mountains. What does it mean?',
        scopes: [
          {
            label: 'User can',
            value: ['write', 'a blog'],
          },
          {
            label: 'User can',
            value: ['edit', 'delete', 'a blog'],
          },
          {
            label: 'User can',
            value: ['rate', 'comment'],
          },
          {
            label: 'User can',
            value: ['like', 'share', 'a blog'],
          },
        ],
        email: 'f•••@example.com',
        phone: '1•••••••••40',
        href: '#',
        status: 'Completed',
        pendingFeatures: 'User can like and comment on a blog',
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
    category: 'Podcast',
    title: 'Talk It Out',
    tech: ['NextJs', 'Sanity'],
    theme: {
      bgcolor: 'bg-indigo-300',
      color: 'border-idigo-500',
      textcolor: 'text-indigo-600',
    },
    description: 'A great podcast for building conversion and engaging....',
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
        delivrables: [{ delivrablesStatus: 'bg-green-500' }],
        statment: 'inspired by News+ Apple News and more',
        deliveryTime: '2 Weeeks',
        technologies:
          'You awake in a new, mysterious land. Mist hangs low along the distant mountains. What does it mean?',
        scopes: [
          {
            label: 'User can',
            value: ['write', 'a blog'],
          },
          {
            label: 'User can',
            value: ['edit', 'delete', 'a blog'],
          },
          {
            label: 'User can',
            value: ['rate', 'comment'],
          },
          {
            label: 'User can',
            value: ['like', 'share', 'a blog'],
          },
        ],
        email: 'f•••@example.com',
        phone: '1•••••••••40',
        href: '#',
        status: 'Completed',
        pendingFeatures: 'User can like and comment on a blog',
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
    title: 'Oneway',
    theme: {
      bgcolor: 'bg-sky-500 dark:bg-black',
      color: 'border-blue-500',
      textcolor: 'main-blue',
    },
    description: 'A geo-location technology  for west Africa and beyond.',
    longDescription:
      ' You’ve ordered your SM7B, boom arm, and a bunch of acoustic foam. With this template, you can finally stop procrastinating and record your first episode.',
    projectImage: {
      src: oneway,
      alt: 'Screenshot of the Primer template',
      class: 'mt-10 aspect-[1216/640] sm:rounded-3xl md:mt-0',
    },
    images: [oneway],
    projectDetails: [
      {
        delivrables: { delivrablesStatus: 'bg-yellow-500' },
        statment: 'inspired by News+ Apple News and more',
        deliveryTime: '2 Weeeks',
        technologies:
          'You awake in a new, mysterious land. Mist hangs low along the distant mountains. What does it mean?',
        scopes: [
          {
            label: 'User can',
            value: ['write', 'a blog'],
          },
          {
            label: 'User can',
            value: ['edit', 'delete', 'a blog'],
          },
          {
            label: 'User can',
            value: ['rate', 'comment'],
          },
          {
            label: 'User can',
            value: ['like', 'share', 'a blog'],
          },
        ],

        email: 'f•••@example.com',
        phone: '1•••••••••40',
        href: '#',
        status: 'Completed',
        pendingFeatures: 'User can like and comment on a blog',
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
    category: 'Chef App',
    tech: ['VueJs', 'Firebase'],
    title: 'Chef Kenneth',
    theme: {
      bgcolor: 'bg-teal-100',
      color: 'border-idigo-500',
      textcolor: 'text-indigo-600',
    },
    description: 'A Vue Js app built for Chef Kenneth as a service app.',
    longDescription:
      ' You’ve ordered your SM7B, boom arm, and a bunch of acoustic foam. With this template, you can finally stop procrastinating and record your first episode.',
    projectImage: {
      src: chef_0,
      alt: 'Screenshot of Podcast app ',
      class: 'mt-10 aspect-[1216/640] sm:rounded-3xl md:mt-0',
    },
    imageAspectRatio: 'aspect-[641/640]',
    images: [chef_1, chef_2],
    projectDetails: [
      {
        delivrables: { delivrablesStatus: 'bg-green-500' },
        statment: 'inspired by News+ Apple News and more',
        deliveryTime: '2 Weeeks',
        technologies:
          'You awake in a new, mysterious land. Mist hangs low along the distant mountains. What does it mean?',
        scopes: [
          {
            label: 'User can',
            value: ['write', 'a blog'],
          },
          {
            label: 'User can',
            value: ['edit', 'delete', 'a blog'],
          },
          {
            label: 'User can',
            value: ['rate', 'comment'],
          },
          {
            label: 'User can',
            value: ['like', 'share', 'a blog'],
          },
        ],
        email: 'f•••@example.com',
        phone: '1•••••••••40',
        href: '#',
        status: 'Completed',
        pendingFeatures: 'User can like and comment on a blog',
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
    title: 'Ethereum Contract Deployer',
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
    projectDetails: [
      {
        delivrables: { delivrablesStatus: 'bg-blue-500' },
        statment: 'inspired by News+ Apple News and more',
        deliveryTime: '2 Weeeks',
        technologies:
          'You awake in a new, mysterious land. Mist hangs low along the distant mountains. What does it mean?',
        scopes: [
          {
            label: 'User can',
            value: ['write', 'a blog'],
          },
          {
            label: 'User can',
            value: ['edit', 'delete', 'a blog'],
          },
          {
            label: 'User can',
            value: ['rate', 'comment'],
          },
          {
            label: 'User can',
            value: ['like', 'share', 'a blog'],
          },
        ],
        email: 'f•••@example.com',
        phone: '1•••••••••40',
        href: '#',
        status: 'Completed',
        pendingFeatures: 'User can like and comment on a blog',
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
    category: 'Kid Learning App',
    tech: ['React-Native', 'Fire-Store'],
    title: 'BroadcastBaby',
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
    projectDetails: [
      {
        delivrables: { delivrablesStatus: 'bg-orange-500' },
        statment: 'inspired by News+ Apple News and more',
        deliveryTime: '2 Weeeks',
        technologies:
          'You awake in a new, mysterious land. Mist hangs low along the distant mountains. What does it mean?',
        scopes: [
          {
            label: 'User can',
            value: ['write', 'a blog'],
          },
          {
            label: 'User can',
            value: ['edit', 'delete', 'a blog'],
          },
          {
            label: 'User can',
            value: ['rate', 'comment'],
          },
          {
            label: 'User can',
            value: ['like', 'share', 'a blog'],
          },
        ],
        email: 'f•••@example.com',
        phone: '1•••••••••40',
        href: '#',
        status: 'Completed',
        pendingFeatures: 'User can like and comment on a blog',
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
    category: 'Courses',
    title: 'Development Courses',
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
    projectDetails: [
      {
        delivrables: { delivrablesStatus: 'bg-blue-500' },
        statment: 'inspired by News+ Apple News and more',
        deliveryTime: '2 Weeeks',
        technologies:
          'You awake in a new, mysterious land. Mist hangs low along the distant mountains. What does it mean?',
        scopes: [
          {
            label: 'User can',
            value: ['write', 'a blog'],
          },
          {
            label: 'User can',
            value: ['edit', 'delete', 'a blog'],
          },
          {
            label: 'User can',
            value: ['rate', 'comment'],
          },
          {
            label: 'User can',
            value: ['like', 'share', 'a blog'],
          },
        ],
        email: 'f•••@example.com',
        phone: '1•••••••••40',
        href: '#',
        status: 'Completed',
        pendingFeatures: 'User can like and comment on a blog',
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
]

export default projectsList
