
import Link from 'next/link'
export default function Navbar() {
  return (
    <nav className='h-16  flex items-center text-white
    '>
      <div className={`mx-auto  flex justify-between lg:justify-around px-5 lg:w-[98%] w-[100%]`}>
            <Link href='/'><p className={` text-2xl font-bold`}><span className='text-blue-500'>Algo</span>Wise</p></Link>
            <div className='flex text-base font-semibold m-1'>
                   <Link href='/about' className='mr-4'><p>About</p></Link>
                    <Link href='/blogs'><p>Blogs</p></Link>
            </div>
      </div>
    </nav>
    
  )
}
    