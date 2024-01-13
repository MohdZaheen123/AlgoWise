'use client'

import React, { useEffect } from 'react';
import { useAnimation } from 'framer-motion';

import { motion, useScroll } from "framer-motion";
import { useRef } from 'react';
import Card from './Card';




export default function BlogFeature() {
  return (
    <div className='h-screen flex w-full mx-auto mt-20 md:mt-60 '>
      
      <div className=' flex justify-end md:flex-1  border-r-indigo-300 border-r-2'>
        <img src="code.svg" className='relative left-14  h-8' alt="" />
        <div onClick={()=>{}} className='h-3 w-3 bg-blue-700 rounded-full relative left-8 top-[5rem]'></div>
        <div onClick={()=>{}} className='h-3 w-3 bg-blue-700 rounded-full relative left-5 top-[20rem]'></div>
        <div onClick={()=>{}} className='h-3 w-3 bg-blue-700 rounded-full relative left-1.5 top-[40rem]'></div>
           
           <Card />

         </div>
      <div className='flex-1'> </div>
    </div>
  ) 
}



