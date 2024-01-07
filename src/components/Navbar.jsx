import { dotGothic16 } from '../app/layout'
import Link from 'next/link'
export default function Navbar() {
  return (
    <nav className='h-20  md:mb-10 flex items-center text-white
    '>
      <div className={`mx-auto  flex justify-around w-[95%] `}>
            
            <Link href='/'><p className={` text-2xl font-bold`}><span className='text-blue-500'>Dev_</span>Dose</p></Link>
            <div className='flex text-base font-semibold m-1'>
                   <Link href='/about' className='mr-4'><p>About</p></Link>
                    <Link href='/blogs'><p>Blogs</p></Link>
            </div>
      </div>
      

    </nav>
    
  )
}
    