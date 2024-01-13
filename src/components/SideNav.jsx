'use client'
import { dsatopic } from '@/lib/dsatopics';
import { MousePointer2, Asterisk } from 'lucide-react';
import Link from 'next/link'
import { useToast } from "@/components/ui/use-toast"


export default function SideNav(topic, subtopic) {
	const { toast } = useToast()
	return (
		<aside className="w-full p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100 text-white min-h-screen">
			<p className='mt-10 mb-2'>Welcome to DSA prep</p>
			<Link className='flex items-center mb-8 text-md text-red-500' href='/blogs'><MousePointer2 className='h-4' />Home</Link>
			<nav className="space-y-8 text-sm">

				{dsatopic.map((topic) => (
					<div className="space-y-2" key={topic.topic}>
						<Link onClick={() => {

							toast({
								title: 'Please Wait A While😇😇',
								description: 'Accessing database... Hold on this may take a few seconds to load🕖',
								
							})
						}} href={topic.link} className="text-sm font-semibold  uppercase dark:text-gray-400">{topic.topic}</Link>
						<div className="flex flex-col space-y-1">
							{topic.subtopic.map((subtopic) => (
								<Link
									onClick={() => {

										toast({
											title: 'Please Wait A While😇😇',
											description: 'Accessing database...This may take a few seconds to load',
										})
									}}

									href={`${subtopic.link}`} key={subtopic.subtopic} className="flex items-center">
									<Asterisk className='h-4 text-blue-500' />
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