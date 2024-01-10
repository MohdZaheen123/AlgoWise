

import { getPostBySlug } from "@/lib/markdown"
import Link from "next/link"
import { ChevronsLeft } from 'lucide-react';
import Footer from "@/components/Footer";

export default async function page({params}) {
    const postslug = params.postslug
    const topic = params.topic
    const post = await getPostBySlug('main',postslug) 
  return (
    <div className="w-[85%] mx-auto  mt-24 ">
       <Link href={`/dsa/${topic}`} className='flex text-white'><ChevronsLeft className='text-white ml-5'/>Back</Link>
        <div className="  min-h-screen max-w-none flex">
            <div className=" text-white  prose mx-auto py-20 ">{post.content}
            <Footer />
            </div>
            {/* <div className="text-white border w-80 mx-3 h-[100rem]">lore</div> */}
        </div>
    </div>
  )
}
