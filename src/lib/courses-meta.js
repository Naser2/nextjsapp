import javascriptImage from '@/images/courseIndexImages/javacript_map_filter_course.webp'
import reactImage from '@/images/courseIndexImages/reactImage.png'
import awsImage from '@/images/courseIndexImages/awsImage.jpeg'
import customer_1 from '@/images/projectImages/customer_1.jpeg'
import uiux_longImage from '@/images/projectImages/courses-uiux/lindsay_people_wagner_uiux_long.png'
import uiux_shortImage_2 from '@/images/projectImages/courses-uiux/uiux_short_7.png'
import uiux_shortImage_1 from '@/images/projectImages/courses-uiux/uiux_short_png.png'
import uiux_longImage_2 from '@/images/projectImages/courses-uiux/uiux_long_2.png'

import Testimage from '@/images/resolution_large.jpeg'
import Testimage2 from '@/images/resolution_large.jpeg'

console.log('customer_1.src', customer_1, 'awsImage', awsImage)
export const coursesMeta = [
  {
    author: 'Nassser Sanou',
    courseSlug: 'UIUX',
    courseCategory: 'Design and Development',
    image: javascriptImage,
    topicsCovered: [
      'Shadow DOM',
      'Data types',
      'Object Oriented Programing',
      'Arrays and Object types',
      'Functional programming',
      'Data and Algorithms',
    ],
    imageLayout: 'grid3',
    images: [
      {
        src: uiux_longImage,
        type: 'long',
        alt: 'Two each of gray, white, and black shirts laying flat.',
        id: 'longImage-1',
        className:
          'aspect-w-4 aspect-h-5 lg:aspect-w-4 lg:aspect-h-4 sm:overflow-hidden sm:rounded-lg',
      },
      {
        src: uiux_shortImage_1,
        type: 'short',
        alt: 'uiux_shortImage_1',
        id: 'shortImage',
        className: 'aspect-w-3 aspect-h-2 overflow-hidden rounded-lg',
      },
      {
        src: uiux_shortImage_2,
        type: 'short',
        alt: 'uiuxShort11',
        id: 'shortImage-2',
        className: 'aspect-w-3 aspect-h-2 overflow-hidden rounded-lg',
      },
      {
        src: uiux_longImage_2,
        type: 'long',
        alt: 'last Testimage2',
        id: 'longImage-2',
        className:
          'aspect-w-4 aspect-h-5 lg:aspect-w-4 lg:aspect-h-4 sm:overflow-hidden sm:rounded-lg',
      },
    ],

    shortDescription:
      'In JavaScript and jQuery- Interactive Front-End Development, a fully illustrated guide to making your websites more interactive and your interfaces more interesting and intuitive.',
    longDscription:
      'In JavaScript and jQuery: Interactive Front-End Development, a fully illustrated guide to making your websites more interactive and your interfaces more interesting and intuitive. In the book, you will explore basic programming concepts that assume no prior knowledge of programming beyond an ability to create a web page using HTML & CSS.you will use core elements of the JavaScript language so you can learn how to write your own scripts from scratch, as well as jQuery, which will allow you to simplify the process of writing scripts this is introduced half-way through the book once you have a solid understanding of JavaScript.you will also learn to recreate techniques you have seen on other web sites such as sliders, content filters, form validation, Ajax content updates, and much more. Each chapter:Breaks subjects down into bite-sized chunks with a new topic on each page .Contains clear descriptions of syntax, each one demonstrated with illustrative code samplesUses diagrams and photography to explain complex concepts in a visual way By the end of the book, not only will you be able to use the thousands of scripts, JavaScript APIs, and jQuery plugins that are freely available on the web – and be able to customize them – you will also be able to create your own scripts from scratch.',
    ratings: { count: 237, learners: 645 },

    lastUpdated: 10 / 2022,
    language: 'en',
    quizes: 20,
    access: 'Free',
    theme: {
      hover: 'hover:bg-indigo-400',
      text: 'text-indigo-600',
      bg: 'bg-indigo-100 dark:bg-indigo-100',
      li: 'bg-indigo-200 py-2 px-2 text-indigo-500',
      clicableListitem:
        'bg-indigo-400/60 py-1 px-3 text-slate-600  shadow-sm dark:text-white rounded-sm ',
      span: 'rounded bg-indigo-100 text-gray-900 group-hover:bg-indigo-200',
      description: 'rounded-md bg-indigo-100/40',
      button:
        'mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium dark:text-white text-indigo-900 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
      link: 'text-indigo-600 dark:text-white',
    },
    reviews: {
      average: 4,
      reviewsCount: {
        average: 10,
        totalCount: 1624,
        counts: [
          { rating: 5, count: 1019 },
          { rating: 4, count: 162 },
          { rating: 3, count: 97 },
          { rating: 2, count: 199 },
          { rating: 1, count: 147 },
        ],
      },
      featured: [
        {
          id: 1,
          rating: 5,
          content: `<p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
            `,
          date: 'July 16, 2021',
          dateTime: '2021-07-16',
          author: 'Emily Selman',
          avatarSrc:
            'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
        },
        {
          id: 2,
          rating: 5,
          content: `
              <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
              `,
          date: 'July 12, 2021',
          dateTime: '2021-07-12',
          author: 'Hector Gibbons',
          avatarSrc:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
        },
      ],
    },
  },
  {
    author: 'Nassser Sanou',
    courseSlug: 'javascript-and-jquery',
    courseCategory: 'Software Development',
    image: javascriptImage,
    topicsCovered: [
      'Shadow DOM',
      'Data types',
      'Object Oriented Programing',
      'Arrays and Object types',
      'Functional programming',
      'Data and Algorithms',
    ],
    imageLayout: 'grid2',
    shortDescription:
      'In JavaScript and jQuery- Interactive Front-End Development, a fully illustrated guide to making your websites more interactive and your interfaces more interesting and intuitive.',
    longDscription:
      'In JavaScript and jQuery: Interactive Front-End Development, a fully illustrated guide to making your websites more interactive and your interfaces more interesting and intuitive. In the book, you will explore basic programming concepts that assume no prior knowledge of programming beyond an ability to create a web page using HTML & CSS.you will use core elements of the JavaScript language so you can learn how to write your own scripts from scratch, as well as jQuery, which will allow you to simplify the process of writing scripts this is introduced half-way through the book once you have a solid understanding of JavaScript.you will also learn to recreate techniques you have seen on other web sites such as sliders, content filters, form validation, Ajax content updates, and much more. Each chapter:Breaks subjects down into bite-sized chunks with a new topic on each page .Contains clear descriptions of syntax, each one demonstrated with illustrative code samplesUses diagrams and photography to explain complex concepts in a visual way By the end of the book, not only will you be able to use the thousands of scripts, JavaScript APIs, and jQuery plugins that are freely available on the web – and be able to customize them – you will also be able to create your own scripts from scratch.',
    ratings: { count: 237, learners: 645 },

    lastUpdated: 10 / 2022,
    language: 'en',
    quizes: 20,
    access: 'Free',
    theme: {
      hover: 'hover:bg-yellow-400',
      text: 'text-blue-600',
      bg: 'bg-yellow-400 dark:bg-yellow-100',
      li: 'bg-yellow-200 py-2 px-2 text-yellow-500',
      clicableListitem:
        'bg-yellow-400/60 py-1 px-3 text-slate-600  shadow-sm dark:text-white rounded-sm ',
      span: 'rounded bg-yellow-100 text-gray-900 group-hover:bg-yellow-200',
      description: 'rounded-md bg-yellow-100/40',
      button:
        'mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-yellow-600 py-3 px-8 text-base font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2',
      link: 'text-yellow-600 dark:text-white',
    },
    reviews: {
      average: 4,
      reviewsCount: {
        average: 10,
        totalCount: 1624,
        counts: [
          { rating: 5, count: 1019 },
          { rating: 4, count: 162 },
          { rating: 3, count: 97 },
          { rating: 2, count: 199 },
          { rating: 1, count: 147 },
        ],
      },
      featured: [
        {
          id: 1,
          rating: 5,
          content: `<p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
            `,
          date: 'July 16, 2021',
          dateTime: '2021-07-16',
          author: 'Emily Selman',
          avatarSrc:
            'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
        },
        {
          id: 2,
          rating: 5,
          content: `
              <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
              `,
          date: 'July 12, 2021',
          dateTime: '2021-07-12',
          author: 'Hector Gibbons',
          avatarSrc:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
        },
      ],
    },
  },
  {
    author: 'Nassser Sanou',
    courseSlug: 'aws-and-the-cloud',
    courseCategory: 'Cloud Architecture',
    topicsCovered: [
      'Cloud computing',
      'Create & clone  virtual machines',
      'Set Dns and maintain group policies',
      'Aws and the cloud',
    ],
    imageLayout: 'none',
    image: awsImage,
    shortDescription:
      'AWS and the Cloud Interactive Front-End Development, a fully illustrated guide to making your websites more interactive and your interfaces more interesting and intuitive.',
    longDscription:
      'In JavaScript and jQuery: Interactive Front-End Development, a fully illustrated guide to making your websites more interactive and your interfaces more interesting and intuitive. In the book, you will explore basic programming concepts that assume no prior knowledge of programming beyond an ability to create a web page using HTML & CSS.you will use core elements of the JavaScript language so you can learn how to write your own scripts from scratch, as well as jQuery, which will allow you to simplify the process of writing scripts this is introduced half-way through the book once you have a solid understanding of JavaScript.you will also learn to recreate techniques you have seen on other web sites such as sliders, content filters, form validation, Ajax content updates, and much more. Each chapter:Breaks subjects down into bite-sized chunks with a new topic on each page .Contains clear descriptions of syntax, each one demonstrated with illustrative code samplesUses diagrams and photography to explain complex concepts in a visual way By the end of the book, not only will you be able to use the thousands of scripts, JavaScript APIs, and jQuery plugins that are freely available on the web – and be able to customize them – you will also be able to create your own scripts from scratch.',
    ratings: { count: 237, learners: 645 },
    lastUpdated: '10/2022',
    language: 'en',
    quizes: '20',
    access: 'Free',

    theme: {
      hover: 'hover:bg-sky-600',
      text: 'text-sky-600',
      bg: 'bg-sky-400',
      li: 'bg-sky-200 py-2 px-2 text-sky-500',
      clicableListitem:
        'bg-sky-400/60 py-1 px-3 text-slate-600  shadow-sm dark:text-white rounded-sm ',
      span: 'rounded bg-sky-100 text-gray-900 group-hover:bg-sky-200',
      description: 'rounded-md bg-sky-100/40',
      button:
        'mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-sky-500 dark:bg-blue-600   py-3 px-8 text-base font-medium text-white hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2',
      link: 'text-sky-600 dark:text-white',
    },
    reviews: {
      average: 6.9,
      totalCount: 512,
      reviewsCount: {
        average: 4,
        totalCount: 712,
        counts: [
          { rating: 5, count: 1019 },
          { rating: 4, count: 162 },
          { rating: 3, count: 97 },
          { rating: 2, count: 199 },
          { rating: 1, count: 147 },
        ],
      },
      featured: [
        {
          id: 1,
          title: "Can't say enough good things",
          rating: 5,
          content: `
            <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
            <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
          `,
          author: 'Risako M',
          date: 'May 16, 2021',
          dateTime: '2021-01-06',
          avatarSrc:
            'https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
        },
        {
          id: 2,
          rating: 5,
          title: "Can't say enough good things",
          content: `<p>This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!</p>
            `,
          date: 'July 16, 2021',
          dateTime: '2021-07-16',
          author: 'Emily Selman',
          avatarSrc:
            'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
          // customer_1,
        },
        {
          id: 3,
          rating: 3,

          title: 'Very comfy and looks the part',
          content: `
              <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
              `,
          date: 'July 12, 2021',
          dateTime: '2021-07-12',
          author: 'Hector Gibbons',
          avatarSrc:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
        },
        {
          id: 4,
          rating: 3,
          title: 'The last shirts I may ever need',
          content: `
              <p>Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.</p>
              `,
          date: 'April 6, 2021',
          dateTime: '2021-07-12',
          author: 'Jackie H',
          avatarSrc:
            'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
        },
      ],
    },
  },
  {
    author: 'Nassser Sanou',
    courseSlug: 'react',
    courseCategory: 'Software Development',
    image: reactImage,
    topicsCovered: [
      'Shadow DOM',
      'The React Libraries',
      'Classes and Stateless Components',
      'Suspenses & error handling',
      'Data Fetching',
      'ServerSide rendering',
      'UseMemo and UseEffect',
      'Routing and Navigation',
      'User Authentication',
    ],
    imageLayout: 'none',
    shortDescription:
      'React: Interactive Front-End Development, a fully illustrated guide to making your websites more interactive and your interfaces more interesting and intuitive.',
    longDscription:
      'In JavaScript and jQuery: Interactive Front-End Development, a fully illustrated guide to making your websites more interactive and your interfaces more interesting and intuitive. In the book, you will explore basic programming concepts that assume no prior knowledge of programming beyond an ability to create a web page using HTML & CSS.you will use core elements of the JavaScript language so you can learn how to write your own scripts from scratch, as well as jQuery, which will allow you to simplify the process of writing scripts this is introduced half-way through the book once you have a solid understanding of JavaScript.you will also learn to recreate techniques you have seen on other web sites such as sliders, content filters, form validation, Ajax content updates, and much more. Each chapter:Breaks subjects down into bite-sized chunks with a new topic on each page .Contains clear descriptions of syntax, each one demonstrated with illustrative code samplesUses diagrams and photography to explain complex concepts in a visual way By the end of the book, not only will you be able to use the thousands of scripts, JavaScript APIs, and jQuery plugins that are freely available on the web – and be able to customize them – you will also be able to create your own scripts from scratch.',

    ratings: { count: 237, learners: 645 },
    lastUpdated: '10/2022',
    language: 'en',
    quizes: '20',
    access: 'Free',

    theme: {
      hover: 'hover:bg-blue-400',
      text: 'text-blue-600',
      bg: 'bg-blue-400',
      li: 'bg-sky-200 py-2 px-2 text-sky-500',
      clicableListitem:
        'bg-sky-400/60 py-1 px-3 text-slate-600  shadow-sm dark:text-white rounded-sm ',
      span: 'rounded bg-sky-100 text-gray-900 group-hover:bg-sky-200',
      description: 'rounded-md bg-sky-100/40',
      button:
        'mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-sky-600 py-3 px-8 text-base font-medium text-white hover:bg-sky-indigo-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2',
      link: 'text-sky-600 dark:text-white',
    },
    reviews: {
      href: '#',
      average: 8.5,
      totalCount: 317,
      reviewsCount: {
        average: 4,
        totalCount: 1624,
        counts: [
          { rating: 5, count: 1019 },
          { rating: 4, count: 162 },
          { rating: 3, count: 97 },
          { rating: 2, count: 199 },
          { rating: 1, count: 147 },
        ],
      },
      featured: [
        {
          id: 1,
          title: 'This is the best white t-shirt out there',
          rating: 5,
          content: `
            <p>I've searched my entire life for a t-shirt that reflects every color in the visible spectrum. Scientists said it couldn't be done, but when I look at this shirt, I see white light bouncing right back into my eyes. Incredible!</p>
          `,
          author: 'Mark Edwards',
          avatarSrc:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixqx=oilqXxSqey&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          id: 2,
          title: 'Adds the perfect variety to my wardrobe',
          rating: 4,
          content: `
            <p>I used to be one of those unbearable minimalists who only wore the same black v-necks every day. Now, I have expanded my wardrobe with three new crewneck options! Leaving off one star only because I wish the heather gray was more gray.</p>
          `,
          author: 'Blake Reid',
          avatarSrc:
            'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
        },
        {
          id: 3,
          title: 'All good things come in 6-Packs',
          rating: 5,
          content: `
            <p>Tasty beverages, strong abs that will never be seen due to aforementioned tasty beverages, and these Basic Tees!</p>
          `,
          author: 'Ben Russel',
          avatarSrc:
            'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      ],
    },
  },
]

export async function getCourseMeta(slug) {
  try {
    let courseData = coursesMeta
      .map(
        ({
          author,
          courseSlug,
          courseCategory,
          image,
          images,
          shortDescription,
          longDscription,
          ratings,
          lastUpdated,
          language,
          quizes,
          access,
          theme,
          imageLayout,
          topicsCovered,
          reviews,
        }) => ({
          author,
          courseSlug,
          image,
          images: images ? images : [],
          courseCategory,
          shortDescription,
          longDscription,
          ratings,
          lastUpdated,
          language,
          quizes,
          access,
          theme,
          imageLayout,
          topicsCovered,
          reviews,
        })
      )
      .find(({ courseSlug }) => courseSlug.toLowerCase() === slug)
    console.log('Course-META-2', courseData)

    return courseData
  } catch (e) {
    console.log('EROR IN GETTING COURSE META', e)
    return e
      ? new Error("Couldn't create the file", e)
      : { message: 'Problem here in meta.', e }
  }
  // let courseData = coursesMeta
  //   .map(
  //     ({
  //       author,
  //       courseSlug,
  //       courseCategory,
  //       image,
  //       shortDescription,
  //       longDscription,
  //       ratings,
  //       lastUpdated,
  //       language,
  //       quizes,
  //       access,
  //       theme,
  //       topicsCovered,
  //       reviews,
  //     }) => ({
  //       author,
  //       courseSlug,
  //       image,
  //       courseCategory,
  //       shortDescription,
  //       longDscription,
  //       ratings,
  //       lastUpdated,
  //       language,
  //       quizes,
  //       access,
  //       theme,
  //       topicsCovered,
  //       reviews,
  //     })
  //   )
  //   .find(({ courseSlug }) => courseSlug === slug)
  //   console.log('Course-META-2', courseMeta)
  //   let courseMeta = coursesMeta.map(({ courseSlug }) => {
  //     courseSlug, console.log('Course-META-2', courseSlug, 'Slug', slug)
  //   })
  //   let item = coursesMeta
  //     .map(({ courseSlug }) => ({ courseSlug }))
  //     .find(({ courseSlug }) => courseSlug === slug)
  //   console.log('Course-META-2', item)
  return courseData
}
// const getSanityItemById = async function (data, paramsId, options) {

//   console.log('ITEM --->', item)
//   return item
// }
