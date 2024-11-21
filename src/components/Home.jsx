import React, { forwardRef } from 'react';
import { RiReactjsFill } from 'react-icons/ri';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaHtml5 } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { SiJavascript } from 'react-icons/si';
import { FaGithub } from "react-icons/fa";

const Home = forwardRef((props, ref) => {
  return (
    <div ref={ref} className='bg-black flex justify-center items-center h-screen w-screen'>
      <div className='flex flex-col gap-10 justify-center items-center text-center p-10'>
        {/* Text Section */}
        <div className='lg:w-[50%] w-[90%] p-5 flex flex-col gap-6 justify-center items-center text-center text-white rounded-3xl bg-transparent'>
          <h1 className="text-green-400 text-4xl font-bold">
            About Me
          </h1>
          <p className='lg:text-4xl text-2xl text-left'>
            A dedicated frontend developer with solid knowledge in JavaScript, React.js, and Tailwind CSS, along with hands-on experience in building interactive user interfaces. Currently expanding into backend technologies to become a full-stack developer.
          </p>

          {/* Icons Section */}
          
        </div>
      </div>
    </div>
  );
});

export default Home;
