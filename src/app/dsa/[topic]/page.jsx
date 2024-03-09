// 'use client'


import Link from 'next/link'
import { FileCode2 } from 'lucide-react';
import { getAllPostsMeta } from '@/lib/markdown'
export const fetchCache = 'force-no-store'
export const dynamic = 'force-dynamic'
export const dynamicParams = true


// import { useSearchParams } from 'next/navigation'

export default async function page({ params, searchParams }) {
    const topic = params.topic
    const subtopic = searchParams.subtopic
    let posts = [];
    if (searchParams.subtopic == undefined) {
        posts = await getAllPostsMeta('main', topic,null)
    }
    else {
        posts = await getAllPostsMeta('main', null,subtopic)
    }


    if (posts[0] == undefined) {
        return (
            <div className=' flex-wrap flex flex-col  mt-20 w-full'>
                <div>
                    {/* <Link href={`/dsa/`} className='flex text-white'><ChevronsLeft className='text-white ml-5'/>Back</Link> */}
                    <h1 className='text-white mx-7 my-3 font-semibold text-2xl'>DSA - <span className='text-blue-600'>{topic}</span></h1>
                </div>
                <div className='flex flex-wrap justify-center w-full'>
                    <h1 className='text-white mx-7 my-3 font-semibold text-2xl'>No Posts Found</h1>
                </div>
            </div>
        )
    }

    return (
        
        <div className=' flex-wrap flex flex-col  mt-20 w-full'>
            <div>
                {/* <Link href={`/dsa/`} className='flex text-white'><ChevronsLeft className='text-white ml-5'/>Back</Link> */}
                <h1 className='text-white mx-7 my-3 font-semibold text-2xl'>DSA - <span className='text-blue-600'>{topic}</span></h1>
            </div>
            
            <div className='flex flex-wrap justify-center w-full'>
                {posts.map((post) => (
                    <Link href={{ pathname: `/dsa/${topic}/${post.slug}`, query: { page: `${topic}` } }} key={post.slug} className="w-[27rem]  group relative cursor-pointer overflow-hidden bg-black shadow-gray-800 px-6 pt-10 my-3 pb-7 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
                        <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-800 transition-all duration-300 group-hover:scale-[10]"></span>
                        <span className="relative z-10 mx-auto max-w-md">
                            <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">

                                <FileCode2 className='' />

                            </span>
                            <span
                                className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                                <span className='text-lg font-bold' >{post.title}</span> <br />
                                <span className=''>{post.description}</span>
                            </span>
                            <br />
                            <span className="pt-5 text-base font-semibold leading-7">

                                <span className="text-sky-500 transition-all duration-300 group-hover:text-white">Read the docs &rarr;
                                </span>

                            </span>
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    )
}



