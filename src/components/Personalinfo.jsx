
'use client'
import Link from 'next/link'
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
export default function Personalinfo() {
  return (
    <div className='flex '>
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
