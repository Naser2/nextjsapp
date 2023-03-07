import Image from 'next/image'
import ImageSample from '@/images/projectImages/courses-uiux/uiux_long_2.png'
import ImageSample2 from '@/images/projectImages/courses-uiux/lindsay_people_wagner_uiux_long.png'
// import ImageUrlBuilder from '@sanity/image-url'
import uiux_shortImage_1 from '@/images/projectImages/courses-uiux/uiux_short_png.png'
// const builder = ImageUrlBuilder(client)
// console.log('IN CUSTOM IMAGE')
// function urlFor(imageSource) {
//   return builder.image(imageSource)
// }
export const LongImage = ({ image }) => {
  // console.log('LONGI-MAG-SANPLEE', ImageSample2)
  console.log('LONGI-MAGE', image)
  return (
    <div
      id="longImage"
      className="aspect-w-4 aspect-h-5 lg:aspect-w-3 lg:aspect-h-4 sm:overflow-hidden sm:rounded-lg"
    >
      <Image
        // src={urlFor(image).url()}
        // src={uiux_shortImage_1}
        src={image.src}
        srcSet={image}
        optimzed="true"
        alt={image.alt}
        width={400}
        height={600}
        className="aspect-h-20  aspect-w-34  lg:aspect-auto h-full w-full w-full bg-gray-50
          object-cover object-center group-hover:opacity-75 lg:absolute lg:inset-0"
      />
      {/* <Image
        src={image.src.src}
        alt={image.alt}
        height={image.src.height}
        width={image.src.width}
        className="h-full w-full object-cover object-center"
      /> */}
    </div>
  )
}

export const ShortImage = ({ image }) => {
  console.log('SHOR_-MAGE', image)
  return (
    <div
      id={image.id}
      className="aspect-w-4 aspect-h-5 lg:aspect-w-4 lg:aspect-h-3  sm:overflow-hidden sm:rounded-lg"
    >
      <Image
        src={image.src}
        // srcSet={image.image.src.imageblurDataURL}
        optimzed="true"
        alt={image.alt}
        width={400}
        height={600}
        className="aspect-h-20  aspect-w-34  lg:aspect-auto h-full w-full w-full bg-gray-50
          object-cover object-center group-hover:opacity-75 lg:absolute lg:inset-0"
      />
      {/* <Image
        src={image.src.src}
        alt={image.alt}
        height={image.src.height}
        width={image.src.width}
        className="h-full w-full object-cover object-center"
      /> */}
    </div>
  )
}
// export const ShortImage = ({ image }) => {
//   console.log('SHORT IMAGE', image)
//   return (
//     <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
//       <Image
//         src={image.src}
//         // srcSet={image.image.src.imageblurDataURL}
//         optimzed
//         alt="image of developer-singing"
//         width={400}
//         height={600}
//         className="aspect-h-20  aspect-w-34  lg:aspect-auto h-full w-full w-full bg-gray-50
//           object-cover object-center group-hover:opacity-75 lg:absolute lg:inset-0"
//       />
//       {/* <Image
//         src={image.src}
//         alt={image.alt}
//         // srcSet={image.src.imageblurDataURL}
//         width={400}
//         height={600}
//         className="aspect-h-20  aspect-w-34  lg:aspect-auto h-full w-full w-full bg-gray-50
//         object-cover object-center group-hover:opacity-75 lg:absolute lg:inset-0"
//         // className="h-full w-full object-cover object-center"
//       /> */}
//     </div>
//   )
// }
export const ImageMobileLong = ({ image }) => {
  return (
    <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg lg:hidden">
      {/* <img
        src={ImageSample}
        alt={image.alt}
        className="h-full w-full object-cover object-center"
      /> */}
    </div>
  )
}

export const ImageMobileShort = ({ image }) => {
  console.log('ImageMobileShort', image)
  return (
    <div className="aspect-w-3 aspect-h-2 overflow-hidden lg:hidden">
      <img
        src={image.src.src}
        alt={image.alt}
        optimzed="true"
        className="w-full object-cover object-center"
      />
    </div>
  )
}
