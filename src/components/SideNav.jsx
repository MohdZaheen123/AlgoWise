'use client'
import { dsatopic } from '@/lib/dsatopics';
import { MousePointer2, Asterisk } from 'lucide-react';
import Link from 'next/link'
import { useToast } from "@/components/ui/use-toast"


export default function SideNav(topic, subtopic) {
	const { toast } = useToast()
	return (
		// <aside className=" md:overflow-scroll  z-50 p-6 sm:w-60 bg-black  dark:text-gray-100 text-white min-h-screen">
		// 	<p className='mt-10 mb-2'>Welcome to DSA prep</p>
		// 	<Link className='flex items-center mb-8 text-md text-red-500' href='/blogs'><MousePointer2 className='h-4' />Back</Link>
		// 	<nav className="space-y-8 text-sm">

		// 		{dsatopic.map((topic) => (
		// 			<div className="space-y-2" key={topic.topic}>
		// 				<Link onClick={() => {

		// 					toast({
		// 						title: 'Please Wait A While😇😇',
		// 						description: 'Accessing database... Hold on this may take a few seconds to load🕖',

		// 					})
		// 				}} 
		//href={topic.link} className="text-sm font-semibold  uppercase dark:text-gray-400">{topic.topic}</Link>
		// 				<div className="flex flex-col space-y-1">
		// 					{topic.subtopic.map((subtopic) => (
		// 						<Link
		// 							onClick={() => {

		// 								toast({
		// 									title: 'Please Wait A While😇😇',
		// 									description: 'Accessing database...This may take a few seconds to load',
		// 								})
		// 							}}

		// 							href={`${subtopic.link}`} key={subtopic.subtopic} className="flex items-center">
		// 							<Asterisk className='h-4 text-blue-500' />
		// 							{subtopic.subtopic}
		// 						</Link>
		// 					))}
		// 				</div>
		// 			</div>
		// 		))}
		// 	</nav>
		// </aside>
		<aside className=" w-full  p-6 mt-20 md:mt-10 z-50 sm:w-80 dark:bg-gray-900 text-white">
			<Link className='flex items-center mb-3 text-md text-red-500' href='/blogs'><MousePointer2 className='h-4' />Back</Link>
			<nav className="space-y-8 text-sm">
				{dsatopic.map((topic) => (
					<div className="space-y-2" key={topic.topic}>
						<Link
							onClick={() => {

								toast({
									title: 'Please Wait A While😇😇',
									description: 'Accessing database... Hold on this may take a few seconds to load🕖',

								})
							}}

							href={topic.link} className="text-sm font-semibold tracki uppercase hover:text-blue-500">{topic.topic}</Link>
						<div className="flex flex-col space-y-1 ml-5">
							{topic.subtopic.map((subtopic) => (
								<Link
								onClick={() => {

									toast({
										title: 'Please Wait A While😇😇',
										description: 'Accessing database... Hold on this may take a few seconds to load🕖',
	
									})
								}}
								href={`${subtopic.link}`} key={subtopic.subtopic} className="flex flex-col space-y-1 hover:text-blue-500">
									{subtopic.subtopic}
								</Link>
							))}
						</div>
					</div>
				))}
			</nav>
		</aside>
	);
}