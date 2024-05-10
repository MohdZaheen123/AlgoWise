
import Link from "next/link";
export default function page() {


  return (
    <div className="h-screen bg-black flex justify-center items-center w-screen text-center">
      <div className="flex flex-col items-center justify-center  ">
        <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
          The road to freedom starts from here
        </p>
        {/* <TypewriterEffectSmooth words={words} /> */}
        <p className="text-3xl text-white ">Nothing up here explore other sections</p>
        <div className="flex items-center justify-center md:flex-row my-10">
          <Link href='/blogs' className="flex justify-center items-center w-40 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Back
          </Link>
          <Link href='/' className="w-28 h-10 flex justify-center items-center rounded-xl bg-white text-black border border-black  text-sm">
            Home
          </Link>
        </div>
      </div>
    </div>
  )
}
