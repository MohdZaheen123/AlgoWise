

import { alkatra, sevillana } from '../app/layout'

import { motion } from 'framer-motion'
import Link from 'next/link'
export default function Personalinfo() {
  return (
    <motion.div 
    
    animate={{opacity:1,y:0}} 
      initial={{opacity:0,y:5}}
      transition={{delay:0.5}}className='text-xs flex flex-col justify-start' >
          <span className={`${sevillana.className} text-2xl text-indigo-300 mb-5 animate-pulse`}><img src="cmd.svg" className='h-5 inline mx-2' alt="" />Start Execution....</span>
          <span className={`${alkatra.className} text-xl text-indigo-300 mb-2`}><img src="person.svg" className='inline h-5 mx-3' alt="person image" />Mohamed Zaheen</span>
          <span className={`${alkatra.className} text-xl text-indigo-300 mb-2`}><img src="code.svg" className='inline h-5 mx-2' alt="person image" />Web dev Blogs,  DSA Prep</span>
          <span className={`${alkatra.className} text-xl text-indigo-300 mb-2`}><img src="mail.svg" className='inline h-4 mx-3' alt="person image" /><Link href='https://www.linkedin.com/in/mohamed-zaheen-a9a169256/' target='_blank'>LinkedIn</Link></span>
          <span className={`${alkatra.className} text-xl text-indigo-300 hidden md:block `}><img src="excl.svg" className='inline h-4 mx-3' alt="person image" />{`"allow yourself to be a beginner,`}</span>
          <p className={`${alkatra.className}  text-xl text-indigo-300 ml-6 hidden md:block`}>{` And see the magic happen"  `}</p>

        </motion.div>
  )
}
