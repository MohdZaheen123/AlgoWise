
// import fs from 'fs'
// import path from 'path'
import axios from 'axios';
import { compileMDX } from 'next-mdx-remote/rsc'
import { unstable_noStore as noStore } from 'next/cache';



// const rootDirectory = path.join(process.cwd(), 'src', 'content')
let config = {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28'
    },
  }



export const getPostBySlug = async (branch,fileName) => {
    
    noStore();

    const realSlug = fileName.replace(/\.mdx$/, '')
    const res = await axios.get(`https://raw.githubusercontent.com/MohdZaheen123/Dev-Blogs/${branch}/${realSlug}.mdx`,config)
    // if (!res.ok) return undefined
   const rawMDX = res.data

    if (rawMDX === '404: Not Found') return undefined

    const { frontmatter, content } = await compileMDX({
        source: rawMDX,
        options: {
            parseFrontmatter: true,
        }
    })



    
    return { meta: { ...frontmatter, slug:realSlug }, content }

}
        

export const getAllPostsMeta = async (branch,topic,subtopic) => {
    noStore();
    // const res = await fetch(`https://api.github.com/repos/MohdZaheen123/Blogs/git/trees/${branch}?recursive=1`,config,{ next: { revalidate: 10 } })
    // const repoFiletree = await res.json()
    const repoFiletree = await axios.get(`https://api.github.com/repos/MohdZaheen123/Dev-Blogs/git/trees/${branch}?recursive=1`,config)
    const filesArray = repoFiletree.data.tree.map(obj => obj.path).filter(path => path.endsWith('.mdx'))

    
    const posts = []
    
    for (const file of filesArray) {
        const post = await getPostBySlug(branch,file)
        
        if(topic!=null){
            if (post && post.meta.topic === topic) {
                const { meta } = post
                posts.push(meta)
            }
        }
        else{
            if (post && post.meta.subtopic.includes(subtopic)) {
                const { meta } = post
                posts.push(meta)
            }
        }
    }
    posts.sort((a, b) => a.id - b.id);
    posts.reverse()


    return posts
}   	