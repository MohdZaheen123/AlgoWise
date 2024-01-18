'use client'

import { cn } from "@/lib/utils";
import { AlignJustify,X } from 'lucide-react';
import SideNav from '@/components/SideNav';
import { useState } from 'react';
import {MDXProvider} from '@mdx-js/react'
import { Toaster } from "@/components/ui/toaster"
export default function Layout({ children }) {


  const [showSideNav, setShowSideNav] = useState(false);
  return (
    <div className="flex min-h-screen  flex-row md:overflow-hidden relative h-full">
      <div className={cn(" flex-none w-56  hidden md:block absolute z-40 md:static bg-black h-full",
      showSideNav ? 'block' : 'hidden'
      )}>
        <div className="h-screen  overflow-scroll overflow-x-hidden" onClick={()=>{setShowSideNav(!showSideNav)}}>
        <SideNav />
        </div>
      </div>
      <button onClick={()=>{ setShowSideNav(!showSideNav)}} className='text-blue-600 dark:text-white   bg-black md:hidden fixed w-screen shadow-gray-800 py-5 shadow-md px-8 z-40 '>{showSideNav?<X/>:<AlignJustify />}</button>
      <div className="flex-grow md:overflow-y-auto h-screen  overflow-scroll">
        {children}
        </div>
        <Toaster />
    </div>
  );
}