

import fs from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'

const rootDirectory = path.join(process.cwd(), 'src', 'content')

export const getPostBySlug = async (topic,slug) => {
    const realSlug = slug.replace(/\.mdx$/, '')
    const filePath = path.join(rootDirectory,`${topic}`, `${realSlug}.mdx`)
    const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' })
    const { frontmatter, content } = await compileMDX({
        source: fileContent,
        options: { parseFrontmatter: true }
    })
    return { meta: { ...frontmatter, slug:realSlug }, content }
}       


export const getAllPostsMeta = async (topic) => {
    const filePath = path.join(rootDirectory,`${topic}`)
    const posts =[]
    const files = fs.readdirSync(filePath)
    for (const file of files) {
        const { meta } = await getPostBySlug(topic,file)
        posts.push(meta)
      }
    
      return posts
}