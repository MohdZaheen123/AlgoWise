'use client'
import { MDXRemote } from 'next-mdx-remote'
export default function Blogrender(props) {
    const post = props.post 
  return (
    <div>
        <div className=" text-white mx-5  prose py-20 ">
        <MDXRemote {...post.html} />
          </div>
    </div>
  )
}
