

import OrbitingCircles from "@/components/orbiting-circles";
import { File,Code2,Newspaper,Globe } from "lucide-react";
import Link from "next/link";

export default function Feature() {
  return (
    <div className="md:mt-80 mt-12 relative z-50 ">
      <p className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-pink-500 text-center text-3xl font-bold py-10">Explore And Learn Devs!!</p>
    <div className="flex justify-center items-center text-white  flex-col-reverse lg:flex-row">
      
    <div className="relative z-50 flex h-[500px] w-full max-w-[50rem] items-center  justify-center overflow-hidden  bg-background md:shadow-xl">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Explore
      </span>

      {/* Inner Circles */}
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent "
        duration={20}
        delay={20}
        radius={80}
      >
        {/* <Icons.whatsapp /> */}
        <Link className="flex flex-col" href='/design'>
        <File className="text-blue-500 "/>
        <span className="text-sm ">
        System design
        </span>
        </Link>
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[30px] w-[30px] border-none bg-transparent"
        duration={20}
        delay={10}
        radius={80}
      >
        <Link className="flex flex-col" href='/dsa'>
        <Code2 className="text-blue-500 "/>
        <span className="text-sm">
        DSA
        </span>
        </Link>
      </OrbitingCircles>

      {/* Outer Circles (reverse) */}
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        reverse
        radius={190}
        duration={20}
      >
        <Link className="flex flex-col" href='/news'>
        <Newspaper className="text-blue-500 "/>
        <span className="text-sm">
        Tech news
        </span>
        </Link>
      </OrbitingCircles>
      <OrbitingCircles
        className="h-[50px] w-[50px] border-none bg-transparent"
        reverse
        radius={190}
        duration={20}
        delay={20}
      >
        <Link className="flex flex-col" href='/webdev'>
        <Globe className="text-blue-500 "/>
        <span className="text-sm">
        Web dev
        </span>
        </Link>
      </OrbitingCircles>
    </div>

    
    <div className=" w-full h-full px-10 lg:border-l">
    

    {/* <p className="text-gray-400 text-sm md:text-lg ">Dive deep into new web dev topics. Build modern UI interface using next.js and shadcn UI.</p>
    <p className="text-gray-400 text-sm md:text-lg ">Practice dsa concepts and questions, along with weekly questions update</p>
    <p className="text-gray-400 text-sm md:text-lg">Stay updated with latest technical news in the industry</p> */}
    <div className="flex items-center">
      <ul>
    <li className="list-disc">Deep dive into different concepts of dsa and practice questions, along with weekly question update.</li>
    <li className="pt-5 list-disc">Learn modern web dev technologies and build eye catching UI</li>
    <li className="pt-5 list-disc">Build scalable systems by learning system design and stay updated with latest tech news!!</li>
      </ul>
     <img src="computer.svg" className="h-56 hidden md:block" alt="" />
    </div>
    </div>
    </div>

    </div>
  );
}





