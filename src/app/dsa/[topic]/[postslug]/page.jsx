

import { getPostBySlug } from "@/lib/markdown"


export default async function page({params}) {
    const postslug = params.postslug
    const post = await getPostBySlug('main',postslug) 
  return (
    <div>
        <div className="  min-h-screen max-w-none">
            <div className=" text-white  prose mx-auto py-20 ">{post.content}</div>
        </div>
    </div>
  )
}
