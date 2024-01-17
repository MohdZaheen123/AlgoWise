
import Image from 'next/image'
import TracingBeam from '@/components/TracingBeam'
import GenerateText from '@/components/GenerateText'
import CardHover from '@/components/CardHover';
import Link from 'next/link';



export const projects = [
  {
    title: "DSA Problems",
    description:
      "Boost your brain with a collection of DSA problems solved by me, with detailed explanation and approach.",
    link: "/dsa",
  },
  {
    title: "System Design",
    description:
      "Learn how to design scalable systems, prepare for system design interviews and ace them. ",
    link: "/design",
  },
  {
    title: "Web Development",
    description:
      "Explore the world of web development, learn about various technologies and frameworks.",
    link: "/webdev",
  },
  {
    title: "News",
    description:
      "Stay updated with latest news and trends in tech industry.",
    link: "/news ",
  }
];



const words =
  "Dive into the coding cosmos with Dev_Dose, where 0s and 1s collide to craft digital wonders. Unleash your inner coder, explore the magic of programming. Welcome to the heartbeat of code!";


export default function page() {
  return (
    <div className='h-[110rem] py-10 bg-black text-white  mx-auto md:w-screen'>
      <Link href='/' className='text-red-500 mx-10 text-lg font-semibold md:mx-32'>Home</Link>
      <h1 className='bg-gradient-to-r from-sky-600 to-pink-500 bg-clip-text text-transparent text-center text-3xl font-bold'>Explore Blogs</h1>
      <TracingBeam>
        <div className='min-h-screen  bg-black md:w-[65rem]'>
          <div className='flex flex-col w-[90%]'>
            <div className='pt-10 '>
              <GenerateText words={words} />
            </div>

            <Image src='/study.jpg' height={300} width={300} className='mx-auto mt-10' alt='' />
             <blockquote className='bg-purple-700 opacity-60 py-6 rounded-xl px-5 md:px-10 ml-14'>
                   Explore blogs related to various topics like DSA, web development, system design and many more.
                   stay updated with latest news and trends in tech industry.<span className='text-red-200'>Scroll Below </span>
             </blockquote>
            <div className="max-w-5xl mx-auto px-8">
              <CardHover items={projects} />
            </div>



            <p>Please provide your feedback and suggestions to me</p>

            <div className='flex flex-wrap justify-center  my-5 bg-gradient-to-r from-sky-600 to-pink-500 bg-clip-text text-transparent'>
              <div className='flex items-center md:flex-col '>
                <Image src='/plan.png' width={200} height={200} className='' alt='' />
                <p className='text-center font-bold text-lg '>Plan</p>
              </div>
              <div className='flex items-center md:flex-col  '>
                <Image src='/build.png' width={200} height={200} className='' alt='' />
                <p className='text-center font-bold text-lg'>Design</p>
              </div>
              <div className='flex items-center md:flex-col  '>
                <Image src='/design.png' width={200} height={200} className='' alt='' />
                <p className='text-center font-bold text-lg'>Build</p>
              </div>
            </div>

          </div>
        </div>
      </TracingBeam>
    </div>
  )
}
