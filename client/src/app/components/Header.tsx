"use client"

import Link from 'next/link'
import React from 'react'
import { useSearchParams } from 'next/navigation'
import { BiSearchAlt } from "react-icons/bi";

const Header = () => {
  const searchParam = useSearchParams()
  const genre = searchParam.get("genre")
  return (
    <div className=' mt-5 flex items-center justify-between'>
      <img src="logo.png" alt="JoinMe"  className='border-yellow-500 rounded-full  border-8 ml-10 mt-7 select-none bg-black w-40 h-20'  />
      
      <input type="text" className='h-14 rounded-full mr-20 w-full max-w-4xl border border-black outline-lime-500 px-10 select-none' placeholder='Filter' /> 
          
      <div className='space-x-8 font-bold mr-14 text-green-300 text-lg transition ease-in-out '>
        <Link href="/" className={` select-none ${!genre ? "underline underline-offset-8 decoration-4 decoration-yellow-600 rounded-sm":""}`}>Home</Link>
        <Link href="/?genre=about" className={`select-none ${genre && genre === "about" && "underline underline-offset-8 decoration-4 decoration-yellow-600 rounded-sm "}`}>About Me</Link>
        <Link href="/?genre=join" className={`select-none ${genre && genre === "join" && "underline underline-offset-8 decoration-4 decoration-yellow-600 rounded-sm "}`}>Join Me</Link>
      </div>
    </div>
  )
}

export default Header
