import { getlatestdsa } from "@/lib/markdown"
import { FileCode2 } from "lucide-react"
import Link from "next/link"

export default async function Latestblog() {
  const posts = [
    {title:'Tree-Introduction',description:'An intro guide to trees',link:'dsa/trees/1-post?page=trees'},
    {title:'Tree-Problem-1',description:'Basic problem related to trees',link:'dsa/trees/2-post?page=trees'},
    {title:'Tree-Problem-1',description:'Basic problem related to trees',link:'dsa/trees/2-post?page=trees'}
  ]
  return (

    <div className='mt-20 flex flex-col justify-center'>
        <p className='pt-10  text-center text-lg md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-pink-500 pb-5'>Explore New DSA Blogs</p>
    <div className='md:h-screen text-white flex justify-center '>
        <div className='flex-1 items-center hidden lg:flex'>

           <video src="framer-motion-ball.webm" autoPlay playsInline loop muted className='h-96 mx-auto'></video>
        </div>
        <div className='w-2 md:h-[28rem] h-96 hidden lg:block border-l ml-5 self-center'></div>
        <div className='flex-1 w-[50%] mx-auto'>
             <div className="flex flex-col  justify-center items-center mt-12 mb-10 md:mt-32">
                {
                   posts.map((post,i) => (
                    <Link href={`${post.link}`} key={i} className="w-[90%] md:w-[27rem]  group relative cursor-pointer overflow-hidden bg-black px-6 pt-10 my-3 pb-3 ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm rounded-lg sm:px-10 border ">
                        <h1 className="text-blue-500">{post.title}</h1>
                        <p>{post.description}</p>
                    </Link>
                ))
                }
             </div>
        </div>
    </div>
    </div>
  )
}
