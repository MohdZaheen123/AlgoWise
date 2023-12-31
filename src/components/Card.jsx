import React from 'react'
import { motion } from 'framer-motion'
export default function Card() {
  return (
    <div className='relative'>
        <motion.div
        whileInView={{ scale:1}}
        initial={{ scale:0 }}
        transition={{ duration:0.5 }}
        className='bg-slate-900 text-white md:h-64 md:w-[30rem] h-44 w-72 left-7  rounded-md absolute md:left-10 md:top-10'>
          
          <img src="f3.png" className='h-full w-full' alt="" />
        </motion.div>
        <motion.div
         whileInView={{ scale:1}}
        initial={{ scale:0 }}
        transition={{ duration:0.5 }}
        
        className='bg-slate-900 text-white md:h-64 md:w-[30rem] h-44 w-72 left-7  rounded-md absolute md:left-[-33rem] top-[20rem]'>
          <img src="f2.png" className='h-full w-full' alt="" />
        </motion.div>
        <motion.div 
         whileInView={{ scale:1}}
        initial={{ scale:0 }}
        transition={{ duration:0.5 }}
        className='bg-slate-900 text-white md:h-64 md:w-[30rem] h-44 w-72 left-7  rounded-xl absolute md:left-10 top-[40rem]'>
          <img src="f1.png" className='h-full' alt="" />
        </motion.div>

    </div>
  )
}
