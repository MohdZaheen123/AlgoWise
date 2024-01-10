'use client'
import { motion } from "framer-motion";
import { LampContainer } from "@/components/Lamp";

export default function page() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className=" bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Please Select <br /> The Topic From The Sidebar
      </motion.h1>
    </LampContainer>
  );
}




// import { getAllPostsMeta } from "@/lib/markdown"


// export default async function page({params}) {
//   const topic = params.topic
//  const post = await getAllPostsMeta('main',topic)
// //  console.log(post)
//   return (
//     <div>
//       {post.map((post) => (
        
//         <div className="bg-blue-800" key={post.slug}>
//           <h1 className="my-5">{post.author}</h1>
//           {/* <p>{post.description}</p> */}
//         </div>
//       ))}
//     </div>
//   )
// }



