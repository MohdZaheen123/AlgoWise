"use client";
import SparklesCore from "@/components/SparklesCore";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import RadialGradient from "@/components/radial-gradient";
import { BorderBeam } from "@/components/border-beam";
import LogoSlider from '@/components/LogoSlider'

export default function HeroSection() {
  const logos = ["React", "Next.js", "Express", "JavaScript", "Mongodb", "DSA", "Node.js", "TypeScript", "Sql", "Docker"]
  return (
    <div className="h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={40}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className=" min-h-screen ">
      
    <div className="relative flex flex-col w-full items-center  rounded-lg bg-background p-20  md:shadow-xl">
        {/* <AnimatedBadge/> */}
        <div>
        <p className='text-gray-500 text-center font-semibold text-lg py-1 px-3 rounded-xl cursor-pointer'>✨ <span className='text-blue-600'>Algo</span>Wise is now live!!</p>
        <p className='text-center text-5xl text-blue-200 pt-1 font-semibold'>Learn Build Grow</p>
    </div>
      <div className="hidden md:block">
        <LogoSlider logos={logos} />
      </div>
      <div className="md:w-[80%] w-[25rem]  relative my-32 md:my-10 rounded-lg">
        <div className="absolute z-20 h-full w-full">
            <div className="md:w-[70%] mx-auto flex justify-center  items-center h-[100%] flex-col">

        <p className=" text-blue-200 text-center md:text-xl my-3 ">AlgoWise is a platform for interview prepration and learning web dev topics. stay updated with latest tech news. Let's crack it together.</p>
        <Link href='/blogs' className={buttonVariants({variant:"secondary" })}>Explore </Link>

            </div>

        </div>
        <img src="keyboard.webp" className="opacity-80 " alt="" />
        <BorderBeam size={600} duration={12} delay={9} />
      </div>
    </div>
    <RadialGradient />
    </div>

    </div>
  );
}