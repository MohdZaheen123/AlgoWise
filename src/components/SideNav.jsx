

import { MousePointer2 } from 'lucide-react';
import Link from 'next/link'

export default function SideNav() {
  return (
    <aside className="w-full p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100 text-white">
        <p className='mt-10 mb-2'>Welcome to DSA prep</p>
        <Link className='flex items-center mb-8 text-md text-red-500' href='/blogs'><MousePointer2 className='h-4'/>Back</Link>
	<nav className="space-y-8 text-sm">
		<div className="space-y-2">
			<h2 className="text-sm font-semibold tracki uppercase dark:text-gray-400">Getting Started</h2>
			<div className="flex flex-col space-y-1">
				{/* <Link rel="noopener noreferrer" href="#">Installation</Link>
				<Link rel="noopener noreferrer" href="#">Plugins</Link>
				<Link rel="noopener noreferrer" href="#">Migrations</Link>
				<Link rel="noopener noreferrer" href="#">Appearance</Link>
				<Link rel="noopener noreferrer" href="#">Mamba UI</Link> */}
			</div>
		</div>
	</nav>
</aside>

  );
}






