

export default function Callout({children}) {
    return (
      <div className='h-24 rounded-xl w-full bg-purple-300 font-bold text-md my-5 flex'>
        <div className="h-full w-2  bg-purple-700 mr-3"></div>
        {children}
        </div>
    )
  }
  