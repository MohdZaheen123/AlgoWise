
import { dsatopic } from '@/lib/dsatopics';
import { MousePointer2,Asterisk } from 'lucide-react';
import Link from 'next/link'

export default function SideNav(topic,subtopic) {
  return (
    <aside className="w-full p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100 text-white">
        <p className='mt-10 mb-2'>Welcome to DSA prep</p>
        <Link className='flex items-center mb-8 text-md text-red-500' href='/blogs'><MousePointer2 className='h-4'/>Back</Link>
	<nav className="space-y-8 text-sm">

		{dsatopic.map((topic) => (
			<div className="space-y-2" key={topic.topic}>
				<Link href={topic.link} className="text-sm font-semibold  uppercase dark:text-gray-400">{topic.topic}</Link>
				<div className="flex flex-col space-y-1">
					{topic.subtopic.map((subtopic) => (
						<Link href={`/dsa/${topic.topic}/${subtopic.subtopic}`} key={subtopic.subtopic} className="flex items-center">
							<Asterisk className='h-4 text-blue-500'/>
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