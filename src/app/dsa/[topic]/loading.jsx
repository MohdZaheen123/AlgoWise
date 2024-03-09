import Image from "next/image"

export default function loading() {
  return (
    <div>  
        <div className='flex flex-col justify-center items-center h-screen'>
            {/* <div className='animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500'></div> */}
            <Image src='/loading.gif' width={100} height={100} alt="loading image"></Image>
            <p className="text-white mt-10 animate-pulse text-lg">Please wait a little bit, we are fetching the blogs from the database ....</p>
            
        </div>
    </div>
  )
}
