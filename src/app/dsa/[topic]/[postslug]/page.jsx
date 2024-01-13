

import { getPostBySlug } from "@/lib/markdown"
import Link from "next/link"
import { ChevronsLeft } from 'lucide-react';
import Footer from "@/components/Footer";
import { Quotecard } from "@/components/Quotecard";
import Game from "@/components/Game";


export default async function page({params}) {
    const postslug = params.postslug
    const topic = params.topic
    const post = await getPostBySlug('main',postslug) 
   
    
  return (
    <div className="w-[85%] md:w-[95%] mx-auto  mt-24 ">
       
       <Link href={`/dsa/${topic}`} className='flex text-white'><ChevronsLeft className='text-white ml-5'/>Back</Link>
        <div className="  min-h-screen max-w-none flex">
            <div className=" text-white mx-5  prose py-20 ">{post.content}
            <Footer />
            </div>
            <div className="text-white hidden  border-l-2 w-80 mx-3 pt-32 h-[100rem] xl:flex flex-col justify-between">
              <div>
              <p className="text-center text-lg font-semibold">Coding quote of the day :)</p>
                <Quotecard />
              </div>
             
            <Game />
            
            </div>
        </div>
    </div>
  )
}




