'use client'

import { useEffect,useState } from "react";
import {silkscreen} from '../app/layout'

export default function Quote() {

    
    const [quote, setQuote] = useState()
    const [author, setAuthor] = useState()

    const datafetch = async () => {
        const res = await fetch('https://api.api-ninjas.com/v1/quotes?category=computers',{
            method: 'GET',
                headers: { 'X-Api-Key': "qJsjXZ9AAvRAP+tWed/ZUw==nhM1ZU4EcDf4mAK0"},
            contentType: 'application/json',
            },{ next: { revalidate: 1000 } })
            let data = await res.json()
            data=data[0];
            setQuote(data.quote)
            setAuthor(data.author)
    }

    useEffect( ()=>{
              datafetch()
    },[])


  return (
    <div className="w-[95%] mx-auto ">
        <div className={`${silkscreen.className} bg-slate-900 rounded-md p-4 text-white`}>" {quote} " 
        <p className={`${silkscreen.className} bg-slate-900  rounded-md  text-white`}>&#8627; {author}</p>
        
        </div>
    </div>
  ) 
}
