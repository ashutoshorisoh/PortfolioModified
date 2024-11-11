import React, { forwardRef } from 'react';
import { RiReactjsFill } from 'react-icons/ri';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaHtml5 } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { SiJavascript } from 'react-icons/si';
import { FaGithub } from "react-icons/fa";

const Home = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='min-h-screen p-10 w-full flex lg:flex-row flex-col gap-10 justify-center items-center text-center'>
      <div className='flex justify-center items-center shadow-2xl'>
        <img src="/assetts/newt.png" alt="Profile" className='lg:h-60 lg:w-auto h-52 object-contain rounded-2xl' />
      </div>
      <div className='lg:w-[50%] w-[80%] p-5 flex justify-center items-center text-center flex-col gap-6 bg-transparent text-white font-mono rounded-3xl'>
        <h1 className="text-4xl font-semibold">Hi, I am Ashutosh</h1>
        <p className='lg:text-xl text-sm text-center'>
          A dedicated frontend developer with solid knowledge in JavaScript, React.js, and Tailwind CSS, along with hands-on experience in building interactive user interfaces. Currently expanding into backend technologies to become a full-stack developer.
        </p>
        
      </div>
    </div>
  );
});

export default Home;
