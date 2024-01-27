
'use client'
import { sevillana } from '../app/layout'
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion'
import Link from 'next/link'
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
export default function Personalinfo() {
  return (
    <div className='flex '>
    {/* <motion.div 
    
    animate={{opacity:1,y:0}} 
      initial={{opacity:0,y:5}}
      transition={{delay:0.5}}className='text-xs flex flex-col justify-start' >
          <span className={`${sevillana.className} text-2xl text-indigo-300 mb-5 animate-pulse`}><img src="cmd.svg" className='h-5 inline mx-2' alt="" />Start Execution....</span>
          <span className={` text-xl text-indigo-300 mb-2`}><img src="person.svg" className='inline h-5 mx-3' alt="person image" />Mohamed Zaheen</span>
          <span className={` text-xl text-indigo-300 mb-2`}><img src="code.svg" className='inline h-5 mx-2' alt="person image" />Web dev Blogs,  DSA Prep</span>
          <span className={` text-xl text-indigo-300 mb-2`}><img src="mail.svg" className='inline h-4 mx-3' alt="person image" /><Link href='https://www.linkedin.com/in/mohamed-zaheen-a9a169256/' target='_blank'>LinkedIn</Link></span>
          <span className={` text-xl text-indigo-300 hidden md:block `}><img src="excl.svg" className='inline h-4 mx-3' alt="person image" />{`"allow yourself to be a beginner,`}</span>
          <p className={`  text-xl text-indigo-300 ml-6 hidden md:block`}>{` And see the magic happen"  `}</p>

        </motion.div> */}
        <div className='text-center '>
          <p className='text-blue-700 font-bold text-4xl mb-5'>Always at your command</p>
          <p className='text-stone-300'>Explore various blogs related to DSA and web dev</p>
          <p className='text-stone-300'>learn to build scalable systems </p>
          <p className='text-stone-300'>Stay updated with latest news in tech industry</p>
          <Link href='/blogs' className={cn(buttonVariants({variant:'secondary'}),'mt-5')}>Explore</Link>
        </div>

    </div>
  )
}
