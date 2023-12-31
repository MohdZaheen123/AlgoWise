// "use client";
// import SparklesCore from "@/components/SparklesCore";


// export default function page() {
//   return (
//     <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
//       <div className="w-full absolute inset-0 h-screen">
//         <SparklesCore
//           id="tsparticlesfullpage"
//           background="transparent"
//           minSize={0.6}
//           maxSize={1.4}
//           particleDensity={100}
//           className="w-full h-full"
//           particleColor="#FFFFFF"
//         />
//       </div>
//       <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
//        DSA prep comming Soon
//       </h1>
//       <p className="text-center text-white relative text-lgmy-10 z-20">Sit tight. i am working hard to bring this live</p>
//     </div>
//   );
// }

import { CommingSoon } from '@/components/CommingSoon'
import React from 'react'

export default function page() {
  return (
    <CommingSoon />
  )
}
