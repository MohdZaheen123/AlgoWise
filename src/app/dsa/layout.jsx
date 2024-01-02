'use client'
import { useState } from 'react';
import { cn } from "@/lib/utils";
import { AlignJustify,X } from 'lucide-react';
import SideNav from '@/components/SideNav';
 
export default function Layout({ children }) {

  const [showSideNav, setShowSideNav] = useState(false);
  return (
    <div className="flex  h-screen  flex-row md:overflow-hidden">
      <div className={cn(" flex-none md:w-60 hidden md:block",
      showSideNav ? 'block' : 'hidden'
      
      )}>
        <SideNav />
      </div>
      <button onClick={()=>{ setShowSideNav(!showSideNav)}} className='text-white w-10 h-10 bg-black md:hidden absolute top-5 left-7 z-30'>{showSideNav?<X/>:<AlignJustify />}</button>
      <div className="flex-grow md:overflow-y-auto ">{children}</div>
    </div>
  );
}