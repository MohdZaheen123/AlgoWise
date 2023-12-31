'use client'

import LogoSlider from '@/components/LogoSlider'
import { motion } from 'framer-motion'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import Personalinfo from './Personalinfo'
import Decor from './Decor'

export default function Hero() {

  const logos = ["React", "Next.js", "Express", "JavaScript", "Mongodb", "DSA", "Node.js", "TypeScript", "Sql", "Docker"]



  return (

    <div className='min-h-screen flex flex-col justify-center items-center '>
      <Decor />
      <motion.h1
      
      animate={{opacity:1,y:0}} 
      initial={{opacity:0,y:5}}
      className='text-center text-white font-semibold text-4xl'>Dive in to the world of <span className='text-blue-600 '>coding</span> </motion.h1>

      <motion.img
      animate={{opacity:1,y:0}} 
      initial={{opacity:0,y:5}}
      transition={{delay:0.2}}
      src="herocode.png" className='h-14' alt="code" />
      <div className='w-'></div>
      < LogoSlider logos={logos} />
      <div className='text-white flex flex-col md:flex-row  md:justify-center  w-full md:mt-20'>
        <div className='hidden md:block mt-32 md:ml-28'>
          <Personalinfo />
        </div>
        <HoverCard>
          <HoverCardTrigger className='text-blue-500 mx-auto py-4 md:hidden'>@Mohd_Zaheen</HoverCardTrigger>
          <HoverCardContent>
          <Personalinfo />
          </HoverCardContent>
        </HoverCard>
        
        <motion.img       
      animate={{opacity:1,y:0}} 
      initial={{opacity:0,y:5}}
      transition={{delay:0.5}}
        className='h-[26rem] w-[90%] md:w-[60%] mx-auto md:h-[50rem] opacity-80 z-10' src="/code.png" alt="hero" />
      </div>

    </div>
  )
}








