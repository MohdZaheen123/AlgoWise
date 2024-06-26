
import { Inter,Sevillana,Silkscreen} from 'next/font/google'
import './globals.css'



const inter = Inter({ subsets: ['latin'] })
export const sevillana = Sevillana({ subsets: ['latin'], weight: '400'  })
export const silkscreen = Silkscreen({ subsets: ['latin'], weight: '400'  })
 const metadata = {
  title: 'Dev_Dose',
  description: 'A blog about programming and web development. Focused on React and Next.js. ',
  keywords: ['DSA','web development', 'programming', 'react', 'nextjs', 'javascript','Docker'], 
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="preload" as="image" href="/code.png"/>
        {/* <script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></script> */}
      </head>
      <body className={inter.className}>
      

        <div className='w-full h-full bg-black'>
        <div className='max-w-[110rem]  scroll-smooth mx-auto'>
          <div className='main'>
        {children}
          </div>
        </div>
        {/* <Script
          src=  "https://static-bundles.visme.co/forms/vismeforms-embed.js" 
        /> */}
        </div>
        </body>
    </html>
  )
}
