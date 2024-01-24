

import { getPostBySlug } from "@/lib/markdown"
import Link from "next/link"
import { ChevronsLeft } from 'lucide-react';
import Footer from "@/components/Footer";
import { Quotecard } from "@/components/Quotecard";
import Game from "@/components/Game";
import Blogrender from "@/components/Blogrender";


export default async function page({params}) {
    const postslug = params.postslug
    const topic = params.topic
    const post = await getPostBySlug('main',postslug) 
    
    
  return (
    <div className="w-full mx-auto  md:w-[95%]  mt-24 ">
       
       <Link href={`/dsa/${topic}`} className='flex text-white'><ChevronsLeft className='text-white ml-5'/>Back</Link>
        <div className="  min-h-screen max-w-none flex">
            <div className="w-[94%] mx-auto text-white  py-5 ">
              
              {/* {post.content} */}
              <Blogrender post={post} />
            <Footer />
            </div>
            <div className="w-96 hidden 2xl:flex justify-center h-screen items-center absolute right-0 ">
            <div className="text-white  border-l-2  mx-3 xl:block flex-col ">
               <div className=" ml-5">
                {post.meta.contents &&<h3 className="font-semibold antialiased underline underline-offset-4 text-red-500">Table of contents</h3>}
              {post.meta.contents && post.meta.contents.map((item,index) => (
                <Link href={`#${index+1}`} key={index}><p className="text-md mt-3 hover:text-blue-600">{index+1}.{" "}{item}</p></Link>
              ))}
               </div>
              {/* <div>
              <p className="text-center text-lg font-semibold">Coding quote of the day :)</p>


                <Quotecard />
              </div> */}
             
            <Game />
            
            </div>
            </div>
        </div>
    </div>
  )
}




