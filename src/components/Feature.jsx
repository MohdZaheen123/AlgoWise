import Link from "next/link";
import { buttonVariants } from "./ui/button";



export default function Component() {
  return (
    <div className=" lg:mt-5 ">
    <div className="min-h-screen shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.3)] flex flex-col mx-auto lg:w-[75%]">
      <p className="bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-pink-500 text-center text-3xl font-bold pt-10">Explore And Learn Devs!!</p>
            <div className="w-[95%]  mx-auto flex flex-col lg:flex-row  justify-center items-center pt-10">
                <div className=" md:mx-10  lg:static  text-center py-3 ">
                    <h2 className=" text-center text-lg md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-pink-500 pb-5">
                        Get Started With Webdev
                    </h2>
                    <p className="text-gray-400 text-sm md:text-lg mb-3">Dive deep into new web dev topics. Build modern UI interface using next.js and shadcn UI.</p>
                    <Link href='/webdev' className={buttonVariants({ variant: "outline" })}>Explore Web</Link>
                </div>
                <video src="default.webm" autoPlay loop muted className=" w-[95%] lg:w-[47%] rounded-xl border border-blue-900 mt-3"></video>
            </div>


            <div className="w-[95%] mx-auto flex flex-col-reverse lg:flex-row  justify-center items-center mt-20 pt-10">
               
               {/* <video src="default.mp4" autoPlay loop muted className="w-[50%] rounded-xl "></video> */}
               <img src="keyboard.webp" className="w-[95%]  lg:w-[63%] rounded-lg border mt-5 border-blue-900" alt="" />
               <div className=" md:mx-10  lg:static  text-center w-[70%] ">
                    <h2 className=" text-center text-lg md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-pink-500 pb-5">
                        DSA Deep Dive
                    </h2>
                    <p className="text-gray-400 text-sm md:text-lg mb-3">Practice dsa concepts and questions, along with weekly questions update</p>
                    <Link href='/dsa' className={buttonVariants({ variant: "outline" })}>Explore DSA</Link>
                </div>
            </div>


            <div className="flex flex-col justify-center items-center   mt-20 pt-10">
               
               {/* <video src="default.mp4" autoPlay loop muted className="w-[50%] rounded-xl "></video> */}
               <div className=" md:mx-10  lg:static  text-center w-[70%] ">
                    <h2 className=" text-center text-lg md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-pink-500 pb-5">
                        Tech News
                    </h2>
                    <p className="text-gray-400 text-sm md:text-lg mb-3">Stay updated with latest technical news in the industry</p>
                    <Link href='/news' className={buttonVariants({ variant: "outline" })}>Explore News</Link>
                </div>
               <video src="world.webm" autoPlay loop muted className=" w-[90%] rounded-xl mt-5"></video>
            </div>
        </div>
    </div>
  )
}

