

import React from 'react'
import Hero from '../components/Hero'
import Latestblog from '@/components/Latestblog'
import BlogFeature from '@/components/BlogFeature'
import Newsletter from '@/components/Newsletter'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
export default function page() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <BlogFeature/>
      <Latestblog/>
      <Newsletter/>
      <Footer />
    </div>
  )
}
