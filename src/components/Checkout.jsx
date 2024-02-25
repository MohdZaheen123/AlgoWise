'use client'
import clsx from 'clsx';
import { useState } from 'react';
import { animate, motion } from 'framer-motion'
import Link from 'next/link';

export default function Checkout() {
  //  baseclass='absolute';
  //  newclass = clsx(baseclass,{
  //     'block' : clicked
  //  })
    const [clicked, setIsClicked] = useState(true);
  return (
    <motion.div
    
    whileInView={{ opacity:1}}
    initial={{ opacity:0 }}
    transition={{ duration:1,repeat:0}}
    className='absolute md:top-[210rem] z-30  h-32'>
    <motion.img
    animate={{ x:clicked?0:-105,rotate:clicked?20:0 }}
    initial={{ x:-100 }}
    transition={{ duration:1,repeat:0}}
    src="me.webp" className='h-52 md:h-64 relative top-[-10rem] md:top-[-15rem] left-[-3rem]' alt="" />
    <motion.svg
    animate={{ opacity:clicked?1:0 }}
    initial={{ opacity:1 }}
    transition={{ duration:0.5,repeat:0 }}
    className='relative md:left-20 left-14 md:top-[-25rem] top-[-18rem]' width="48" height="56" viewBox="0 0 95 95" fill="none" preserveAspectRatio="none"><path d="M0 0C0 0 24.8936 38.9937 47 58C57.5966 67.1106 73.8292 77.0249 84.1762 83C90.03 86.3804 94 95 94 95L94.5 36C94.5 36 88.5727 43.1045 81 41.4825C70.8874 39.3165 56.9488 35.8549 47 31.5C26.7586 22.6397 0 0 0 0Z" fill="white"></path>
    </motion.svg>
    <motion.div
     animate={{ opacity:clicked?1:0 }}
     initial={{ opacity:1 }}
     transition={{ duration:0.5,repeat:0 }}
    className={`bg-white h-48 md:w-80 w-72 rounded-3xl top-[-25rem] relative md:left-28 md:top-[-30rem] left-20 bottom-4 md:p-7 p-5`}>
     Hi friend😇 <br />
     Wishing you a happy day🎉🎉 <br />
     <span className='text-black bg-white font-semibold '>Do you mind checking out my github? <br /></span>
     <button onClick={()=>{setIsClicked(false)}} className='mt-3 text-red-700 text-lg'>No thanks</button>
     <Link onClick={()=>{setIsClicked(false)}} href='https://github.com/MohdZaheen123' target='_blank' className='bg-white ml-5 text-lg'>Sure!</Link>
    </motion.div>
   </motion.div>
  )
}


