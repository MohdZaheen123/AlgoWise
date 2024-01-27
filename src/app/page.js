

import React from 'react'
import Hero from '../components/Hero'
import Latestblog from '@/components/Latestblog'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Feature from '@/components/Feature'
export default function page() {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <Feature/>
      <Latestblog/>
      <Newsletter/>
      <Footer />
    </div>
  )
}
