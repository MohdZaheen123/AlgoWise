
import Link from 'next/link'

export default function page() {
    return (
      <div className='bg-black w-screen'>
        <div className="min-h-screen h-fit bg-black text-white flex flex-col pb-10 pt-10 justify-center items-center w-[60%] mx-auto">

            <h1 className="text-2xl font-semibold font-serif">Welcome to <span className='text-blue-600'>Dev_Dose!</span></h1>
            <img src="/about.gif" className="h-80" alt="illustration" />
            <div className="">
                <p className="font-serif font-semibold text-xl py-2 underline underline-offset-4">About</p>
                <p className="text-lg pt-3">Dev_Dose is a revolutionary online platform designed exclusively for the students</p>
                <p className="text-lg">Learn system design and DSA in a simple way possible. explore tech news and other web dev related topics here. I would like to make this a community to learn share and grow together </p>

                <p className="font-serif font-semibold text-xl py-2 underline underline-offset-4">Hey Developers!!</p>
                <p className="text-lg pt-3">Join us at Dev_Dose today, let's build together, and shape the future. Explore my project in <Link className='text-blue-600' href='https://github.com/MohdZaheen123/Dev_Dose' target='_blank'>Github</Link>, Dont forget to share your feedback with me at <Link className='text-blue-600' href='https://twitter.com/TheMatrixT8888' target='_blank'>Twitter</Link>. Happy coding!</p>
            </div>

        </div>
      </div>
    )
}