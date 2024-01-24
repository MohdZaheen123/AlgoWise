'use client'
import { MDXRemote } from 'next-mdx-remote'
export default function Blogrender(props) {
    const post = props.post 
    
  return (
    <div>
        <div className=" md:w-[100%]  text-white  prose py-20  ">
        <MDXRemote {...post.html} />
          </div>
    </div>
  )
}
