

import { Twitter, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';


export default function Footer() {

  return (
    <div className='mt-10 mb-10 md:mt-72'>
      <div className='text-white  flex-col flex items-center'>
        <p className='text-center text-lg font-semibold'>Follow My Socials</p>
        <span >@Mohamed Zaheen</span>
        <div className='flex pt-10 pb-4'>
          <Link className='mx-3' aria-label='Go to twitter account' target='_blank' href='https://twitter.com/TheMatrixT8888'><Twitter /></Link>
          <Link className='mx-3' aria-label='Go to github account' target='_blank' href='https://github.com/MohdZaheen123'><Github /></Link>
          <Link className='mx-3' aria-label='Go to linkedin account' target='_blank' href='https://www.linkedin.com/in/mohamed-zaheen-a9a169256/'><Linkedin /></Link>
        </div>

      </div>
    </div>
  )
}
