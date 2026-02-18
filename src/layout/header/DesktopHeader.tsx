import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Profile from '@/assets/images/pk.logo.png'
import { BsArrowUpRight } from 'react-icons/bs'

const DesktopHeader = () => {
  return (
     <div className=" border-b border-gray-600 py-5 px-5 ">
    <div className="container mx-auto flex justify-between">
      <div className="flex gap-2 items-center">
        <Image src={Profile} className="w-[60px] h-[60px] bg-gray-200 border rounded-full" alt="profile" priority={true} />
        <div>
          <h6 className="text-sm font-semibold text-white">Pooja Kardam</h6>

          <p className="text-xs text-gray-300 flex items-center gap-2 mt-1 ">
            <span className="w-[5px] h-[5px] bg-blue-400 rounded-full flex justify-center items-center animate-ping"></span>
            Open for work
          </p>
        </div>
      </div>
      <ul className="flex items-center gap-[4rem]">
        <li>
          <Link href="" className='text-gray-300'>Home</Link>
        </li>

        <li>
          <Link href="" className='text-gray-300'>Projects</Link>
        </li>

        <li>
          <Link href="" className='text-gray-300'>About</Link>
        </li>
      </ul>
     <a 
  href="/poojakardam-resume.pdf" 
  target="_blank"
  rel="noopener noreferrer"
>
  <button 
    type="button"
    className="bg-gray-200 py-1 px-10 rounded-md text-gray-900 font-semibold flex items-center gap-2 hover:bg-gray-300 transition duration-300"
  >
    <BsArrowUpRight /> Resume
  </button>
</a>

    </div>
  </div>
  )
}

export default DesktopHeader
