import Link from "next/link"
import { Code2, Mails, Brain, HardDriveUpload,ChevronsLeft,BarChart4 } from 'lucide-react';
import { buttonVariants } from "@/components/ui/button"
import Image from "next/image";

export default function page() {
  return (
    <div className="">

      <div className="text-white h-screen w-[90%]  mx-auto flex flex-col  justify-center ">




        <div className="mt-10 mb-10 md:mt-0 md:mb-0 flex justify-around  items-center">
          <div className="mt-10">
            <p>DSA problems solved</p>
            <p className="flex">Boost your brain <Brain className="text-red-500 mx-1" /></p>
            <Link href='/dsa' className={buttonVariants({ variant: "default" })}>Explore</Link>
          </div>



          <div className="mt-10">

            <p>System design, design</p>
            <p className="flex"> scalable systems.. <HardDriveUpload className="text-red-500 mx-1" /></p>
            <Link href='/design' className={buttonVariants({ variant: "default" })}>Explore</Link>
          </div>

        </div>


        <div className=" flex flex-col  justify-center items-center  ">
          <div className="flex items-center justify-around w-full">
          <Link href='/' className={buttonVariants({ variant: "ghost" })}><ChevronsLeft className="h-5 bg-transparent" />Home</Link>
          <p className="text-center my-8 md:text-lg font-semibold">Explore various blogs here... <br /><span className="flex"> DSA ,DEV, System Design<BarChart4 className="mx-3 "/></span></p>
          <div className="mr-24"></div>
          </div>
          {/* <img src="/blog.png" className="md:h-96 h-48 mx-auto" alt="" /> */}
          <Image width={750} height={80} src="/blog.png" className="mx-auto" alt="" />
        </div>


        <div className="flex-1 flex justify-around  items-center ">
          <div className="">
            <p>Stay ahead on the line</p>
            <p className="flex">with latest news! < Mails className="mx-2 text-red-500" /></p>
            <Link href='/news' className={buttonVariants({ variant: "default" })}>Explore</Link>

          </div>


          <div className="">

            <p>Hey come explore latest</p>
            <p className="flex "> web dev blogs <Code2 className="mx-2 text-red-500" /> </p>
            <Link href='/webdev' className={buttonVariants({ variant: "default" })}>Explore</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
