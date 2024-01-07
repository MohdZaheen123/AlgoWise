
// import fs from 'fs'
// import path from 'path'
import axios from 'axios';
import { compileMDX } from 'next-mdx-remote/rsc'



// const rootDirectory = path.join(process.cwd(), 'src', 'content')
let config = {
    headers: {
      Accept: 'application/vnd.github+json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
      'X-GitHub-Api-Version': '2022-11-28'
    },
  }

// export const getPostBySlug = async (topic,slug) => {
//     const realSlug = slug.replace(/\.mdx$/, '')
//     const filePath = path.join(rootDirectory,`dsa`, `${realSlug}.mdx`)
//     const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
//     const { frontmatter, content } = await compileMDX({
//         source: fileContent,
//         options: {
//             parseFrontmatter: true,
//                     // mdxOptions: {
//                     //     rehypePlugins: [
//                     //         rehypeHighlight,
//                     //         rehypeSlug,
//                     //         [rehypeAutolinkHeadings, {
//                     //             behavior: 'wrap'
//                     //         }],
//                     //     ],
//                     // },
//         }
//     })
//     return { meta: { ...frontmatter, slug:realSlug }, content }
// }       


// export const getAllPostsMeta = async (topic) => {
//     const filePath = path.join(rootDirectory,`${topic}`)
//     const posts =[]
//     const files = fs.readdirSync(filePath)
//     for (const file of files) {
//         const { meta } = await getPostBySlug(topic,file)
//         posts.push(meta)
//       }
    
//       return posts
// }




export const getPostBySlug = async (branch,fileName) => {
    


    const realSlug = fileName.replace(/\.mdx$/, '')
    const res = await axios.get(`https://raw.githubusercontent.com/MohdZaheen123/Blogs/${branch}/${realSlug}.mdx`,config)
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
       

export const getAllPostsMeta = async (branch,topic) => {

    const res = await fetch(`https://api.github.com/repos/MohdZaheen123/Blogs/git/trees/${branch}?recursive=1`,config,{ next: { revalidate: 10 } })
    const repoFiletree = await res.json()

 console.log(repoFiletree)
    const filesArray = repoFiletree.tree.map(obj => obj.path).filter(path => path.endsWith('.mdx'))

    
    const posts = []
    
    for (const file of filesArray) {
        const post = await getPostBySlug(branch,file)
        if (post && post.meta.topic === topic) {
            const { meta } = post
            posts.push(meta)
        }
    }

    return posts
}