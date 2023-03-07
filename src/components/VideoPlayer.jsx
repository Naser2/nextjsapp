import { useRef, useEffect } from 'react'
import MuxPlayer from '@mux/mux-player-react';

// export default function VideoPlayer() {
//   const videoRef = useRef(null)

//   useEffect(() => {
//     if (videoRef && videoRef.current) {
//       videoRef.current.play()
//     }
//   }, [videoRef])

//   return <video controls ref={videoRef} style={{ width: '100%', maxWidth: '500px' }} />
// }

// export default function VideoPlayer({ shouldPlay }) {
//     const videoRef = useRef(null)
  
//     useEffect(() => {
//       if (shouldPlay && videoRef.current) {
//         videoRef.current.play()
//       }
//     })
  
//     return <video controls ref={videoRef} />
//   }



export default function VideoPlayer() {
      const videoRef = useRef(null)

  useEffect(() => {

    if (videoRef && videoRef.current) {
        console.log('ShouldPlay Video', videoRef.current)
    //   videoRef.current.play()
    }
  }, [videoRef])

    const PLAYBACK_ID= 'A4jUhm72hQqhclA7DIPA5ugqRjWMNBmOW19skl1Ikcs'
  return (
    <MuxPlayer ref={videoRef}
      streamType="on-demand"
      stream-type="on-demand"
      
        type= "audio"
        max_channels='2'
        max_channel_layout= "stereo"
        id= "Vt8psHPjopxKP01e4U7kyC4dnjL9raFtGQDW024d3HPTs"
        duration= '324.823946'
      
//   playback-id="A4jUhm72hQqhclA7DIPA5ugqRjWMNBmOW19skl1Ikcs"
//   metadata-video-title="Placeholder (optional)"
//   metadata-viewer-user-id="Placeholder (optional)"
//   primary-color="#FFFFFF"
//   secondary-color="#000000"
    //   
    
    />
  );
}