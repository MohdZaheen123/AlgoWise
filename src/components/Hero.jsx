'use client'

import LogoSlider from '@/components/LogoSlider'
import { motion } from 'framer-motion'
import SpotLight from './SpotLight';
import Personalinfo from './Personalinfo'

export default function Hero() {

  const logos = ["React", "Next.js", "Express", "JavaScript", "Mongodb", "DSA", "Node.js", "TypeScript", "Sql", "Docker"]



  return (

    <div className='min-h-screen  flex flex-col   items-center '>
      {/* <Decor /> */}
      <motion.h1
      
      animate={{opacity:1,y:0}} 
      initial={{opacity:0,y:5}}
      className='text-center text-white font-semibold text-4xl mt-14'>Dive in to the world of <span className='text-blue-600 '>coding</span> </motion.h1>

      <motion.img
      animate={{opacity:1,y:0}} 
      initial={{opacity:0,y:5}}
      transition={{delay:0.2}}
      src="herocode.png" className='h-14' alt="code" />
      < LogoSlider logos={logos} />
      <SpotLight
        className="-top-40 left-0 md:right-32 md:-top-0 hidden md:block	"
        fill="blue"
      />
      <div className='text-white flex flex-col md:flex-row items-center md:justify-center  w-full md:mt-20'>
      <img className=' mx-auto lg:w-[75%]  relative z-20 opacity-85' src="/keyboard.png"  alt="hero" />
        <div className='absolute mt-52 md:mt-0 md:pb-20  z-30'>
          <Personalinfo />
        </div>
        
      </div>

    </div>
  )
}








