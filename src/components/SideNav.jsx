// 'use client'
import { dsatopic } from '@/lib/dsatopics';
import { MousePointer2, Asterisk, Crown } from 'lucide-react';
import Link from 'next/link'
// import { useToast } from "@/components/ui/use-toast"


export default function SideNav(topic, subtopic) {
	// const { toast } = useToast()
	return (
		<aside className=" w-full  p-6 mt-20 md:mt-10 z-50 sm:w-80  rounded-xl text-white">
			<Link className='flex items-center mb-3 text-md text-red-500' href='/blogs'><MousePointer2 className='h-4' />Back</Link>
			<nav className="space-y-8 text-sm">
				{dsatopic.map((topic) => (
					<div className="space-y-2" key={topic.topic}>
						<Link href={topic.link} className="text-sm font-bold tracki  hover:text-blue-500 flex">{topic.topic}{topic.topic=='Leetcode Daily Problem'?<Crown className='h-5 w-5 text-yellow-400' />:""}</Link>
						{topic.subtopic&&<div className="flex flex-col space-y-1 ml-5">
							{topic.subtopic?.map((subtopic) => (
								<Link
								href={`${subtopic.link}`} key={subtopic.subtopic} className="flex flex-col space-y-1 hover:text-blue-500">
									{subtopic.subtopic}
								</Link>
							))}
						</div>}
					</div>
				))}
			</nav>
		</aside>
	);
}