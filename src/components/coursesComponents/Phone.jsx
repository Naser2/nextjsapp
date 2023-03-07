import phone from '@/images/projectImages/phone/iphone_hardware_large_2x.png'
import phoneVid from '@/images/projectImages/phone/iphone_video_ezgif.gif'
import clsx from 'clsx'
import ReactPlayer from 'react-player'
const { default: Image } = require("next/image")



export  function Video(props) {
  return (
    <ReactPlayer className="absolute h-full w-full object-cover"
      playing={true}
      // muted={true}
      url={props.videoSource}
    />
  )
}


export const PhoneHardware = (children) => {
    return ( <Image
    src={phone}
    alt=""
    className={clsx(
       ' mix-blend-mutiply relative ring-2 ring-indigo-500 ring-offset-2 focus-within:ring-2 focus-within:ring-indigo-500',
        'focus-within:ring-offset-2 focus-within:ring-offset-gray-100  group block w-2/5 overflow-hidden rounded-lg bg-gray-100'
    )}
  />)
}
const PhoneAnimation = () => {
    return  <Image
    src={phoneVid}
    alt="phone_video"
    className={clsx(
       'group-hover:opacity-75 pointer-events-none object-cover'
    )}
  />
}

// export const Phone = () => {
//     return (<div className="phone-wrwper">
//          <PhoneHardware />
//     </div>
   
  
//   )
// }
// export const Phone = () => {
//     // <div class="flex h-1/4 w-1/3 justify-center -space-x-64 bg-blend-multiply">
//     return ( 
//     <div class="flex relative h-1/4 w-1/4">
//             <Image src={phone}
//                 alt=""
//             // width={604}
//             // height={700}
//             className={clsx(
//                 "h-full w-full"
//             )}
//         />
   
//          <Image    
//         src={phoneVid.src} 
//              fill
//                 alt=""
//                 // width={264}
//                 // height={200}
//             className="bg-cover h-1/4 w-1/4 pl-8 pt-14 pr-10 pb-10"/>
             
//   </div>
//   )}
   
 {/* <Video videoSource={phoneVid}/> */}
 {/* <ReactPlayer url={phoneVid.src}  className={clsx( 'absolute top-0 group-hover:opacity-75 pointer-events-none object-cover')} /> */}
    
