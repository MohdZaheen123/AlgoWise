/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Zr4ByUmYqFf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="min-h-screen mt-32">
    <div key="1" className="bg-black text-white py-16 px-8">
      <h2 className="text-4xl font-bold leading-tight text-center">
        Under the hood ⚡️<br />
        <span className="text-sky-500">Discover blog features...</span>  
      </h2>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 xl:w-[65%] mx-auto">
        <Card className="bg-gray-800 border-0 max-w-xs   hover:bg-sky-900 transition-all ease-in">
          <CardContent>
            <UserIcon className="text-gray-400 mt-4" />
            <h3 className="mt-4 text-lg font-semibold text-white">Interview Prep.</h3>
            <p className="mt-2 text-gray-400">Follow along with me to prepare for technical interview</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-0 max-w-xs  hover:bg-sky-900 transition-all ease-in">
          <CardContent>
            <BlocksIcon className="text-gray-400 mt-4" />
            <h3 className="mt-4 text-lg font-semibold text-white">Blogs.</h3>
            <p className="mt-2 text-gray-400">Beginner friendly blogs so that everyone can follow along </p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-0 max-w-xs  hover:bg-sky-900 transition-all ease-in">
          <CardContent>
            <LayoutIcon className="text-gray-400 mt-4" />
            <h3 className="mt-4 text-lg font-semibold text-white">Web dev.</h3>
            <p className="mt-2 text-gray-400">Learn about interesting web dev topics such as MERN and Next.js.</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-0 max-w-xs  hover:bg-sky-900 transition-all ease-in">
          <CardContent>
            <TowerControlIcon className="text-gray-400 mt-4" />
            <h3 className="mt-4 text-lg font-semibold text-white">DSA.</h3>
            <p className="mt-2 text-gray-400">Weekly DSA solved problems will be published</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-0 max-w-xs  hover:bg-sky-900 transition-all ease-in">
          <CardContent>
            <ImageIcon className="text-gray-400 mt-4" />
            <h3 className="mt-4 text-lg font-semibold text-white">News.</h3>
            <p className="mt-2 text-gray-400">Stay ahead on the line with latest news in tech industry.</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-0 max-w-xs  hover:bg-sky-900 transition-all ease-in">
          <CardContent>
            <CombineIcon className="text-gray-400 mt-4" />
            <h3 className="mt-4 text-lg font-semibold text-white">Collaboration.</h3>
            <p className="mt-2 text-gray-400">Let's learn and grow together as a community.</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-0 max-w-xs  hover:bg-sky-900 transition-all ease-in">
          <CardContent className="max-w-xs">
            <MergeIcon className="text-gray-400 mt-4" />
            <h3 className="mt-4 text-lg font-semibold text-white">Github.</h3>
            <p className="mt-2 text-gray-400">Please do support me on github, you can find my project code there!.</p>
          </CardContent>
        </Card>
        <Card className="bg-gray-800 border-0 max-w-xs  hover:bg-sky-900 transition-all ease-in">
          <CardContent>
            <InfoIcon className="text-gray-400 mt-4" />
            <h3 className="mt-4 text-lg font-semibold text-white">Feedback.</h3>
            <p className="mt-2 text-gray-400">Please do give me feedback to improve this blog through twitter.</p>
          </CardContent>
        </Card>
      </div>
    </div>
    </div>
  )
}

function BlocksIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
    </svg>
  )
}


function CloudLightningIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973" />
      <path d="m13 12-3 5h4l-3 5" />
    </svg>
  )
}


function CombineIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="8" height="8" x="2" y="2" rx="2" />
      <path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2" />
      <path d="M10 18H5c-1.7 0-3-1.3-3-3v-1" />
      <polyline points="7 21 10 18 7 15" />
      <rect width="8" height="8" x="14" y="14" rx="2" />
    </svg>
  )
}


function ImageIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  )
}


function InfoIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function LayoutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <line x1="3" x2="21" y1="9" y2="9" />
      <line x1="9" x2="9" y1="21" y2="9" />
    </svg>
  )
}


function MergeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 6 4-4 4 4" />
      <path d="M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22" />
      <path d="m20 22-5-5" />
    </svg>
  )
}


function TowerControlIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z" />
      <path d="M8 13v9" />
      <path d="M16 22v-9" />
      <path d="m9 6 1 7" />
      <path d="m15 6-1 7" />
      <path d="M12 6V2" />
      <path d="M13 2h-2" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
