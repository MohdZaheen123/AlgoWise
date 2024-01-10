

import { Twitter, Github, Linkedin } from 'lucide-react';
import { Badge } from "@/components/ui/badge"
import Link from 'next/link';
import Checkout from './Checkout';


export default function Footer() {

  return (
    <div className='relative bottom-6 '>
      <div className='text-white p-16 flex-col flex items-center'>
        <p className='text-center text-lg font-semibold'>Follow My Socials</p>
        <Badge >@Mohamed Zaheen</Badge>
        <div className='flex pt-10 pb-4'>
          <Link className='mx-3' target='_blank' href='https://twitter.com/TheMatrixT8888'><Twitter /></Link>
          <Link className='mx-3' target='_blank' href='https://github.com/MohdZaheen123'><Github /></Link>
          <Link className='mx-3' target='_blank' href='https://www.linkedin.com/in/mohamed-zaheen-a9a169256/'><Linkedin /></Link>
        </div>

      </div>
    </div>
  )
}
