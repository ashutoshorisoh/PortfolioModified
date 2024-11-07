import React from 'react'
import { RiReactjsFill } from 'react-icons/ri'
import { RiTailwindCssFill } from 'react-icons/ri'
import { FaHtml5 } from 'react-icons/fa'
import { IoLogoCss3 } from 'react-icons/io'
import { SiJavascript } from 'react-icons/si'
import { FaGithub } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

function Home() {
  return (
    <div className='min-h-screen p-10 w-full flex flex-col  gap-10 justify-center items-center '>
      <div className='flex justify-center items-center shadow-2xl'>
        <img src="/assetts/newt.png" alt="Profile" className=' h-64 w-auto object-contain rounded-2xl' />
      </div>
      <div className='w-full  sm:w-[80%] p-5 flex justify-center items-center text-center flex-col gap-6 bg-orange-300 text-black font-mono rounded-3xl'>
        <h1 className="text-4xl font-bold">Hi, I am Ashutosh</h1>
        <p className='lg:text-base text-sm text-center font-semibold'>
        A dedicated frontend developer with solid knowledge in JavaScript, React.js, and Tailwind CSS, along with hands-on experience in building interactive user interfaces. Currently expanding into backend technologies to become a full-stack developer.</p>
        
        <div className='text-2xl flex flex-row gap-2'>
          <RiReactjsFill/>
          <RiTailwindCssFill/>
          <FaHtml5/>
          <IoLogoCss3 />
          <SiJavascript />
          <FaGithub />

        </div>


        <a
          href="/assetts/Ashutosh_Thakur_MERN_dev.pdf"
          download
          className="bg-blue-800 hover:bg-blue-200 hover:text-black text-white px-5 py-3 rounded-xl"
        >
          Download Resume
        </a>
      </div>
    </div>
  )
}

export default Home
