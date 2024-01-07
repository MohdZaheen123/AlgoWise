

import { getPostBySlug } from "@/lib/markdown"
import Link from "next/link"
import { ChevronsLeft } from 'lucide-react';

export default async function page({params}) {
    const postslug = params.postslug
    const post = await getPostBySlug('main',postslug) 
  return (
    <div className="w-[85%] mx-auto  mt-24 ">
       <Link href={`/dsa/`} className='flex text-white'><ChevronsLeft className='text-white ml-5'/>Back</Link>
        <div className="  min-h-screen max-w-none">
            <div className=" text-white  prose mx-auto py-20 ">{post.content}</div>
        </div>
    </div>
  )
}
