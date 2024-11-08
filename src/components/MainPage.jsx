import { forwardRef } from 'react';
import React, { useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaDownload } from 'react-icons/fa';

const MainPage = forwardRef((props, ref) => {
  const [title, setTitle] = useState("Frontend"); // Initialize state inside the component
  const titles = ["Frontend", "Backend", "Full Stack"];
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % titles.length; // Cycle through the titles
      setTitle(titles[index]);
    }, 2000); // Change title every 2 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/assetts/Ashutosh_Thakur_MERN_dev.pdf';
    link.download = 'Ashutosh_Thakur_MERN_dev.pdf';
    link.click();
  };

  return (
    <div ref={ref} className="h-screen flex justify-center text-white items-center font-mono">
      <div className="text-center">
        <h1 className="lg:text-7xl text-4xl font-bold">Ashutosh Thakur</h1>
        <p className="lg:text-4xl text-xl mt-4">{title} Developer</p>
        <div className="flex justify-center lg:gap-8 gap-6 mt-6">
          <FaReact className="lg:text-5xl text-2xl text-orange-200" />
          <RiTailwindCssFill className="lg:text-5xl text-2xl text-orange-200" />
          <FaHtml5 className="lg:text-5xl text-2xl text-orange-200" />
          <FaCss3Alt className="lg:text-5xl text-2xl text-orange-200" />
          <FaJs className="lg:text-5xl text-2xl text-orange-200" />
          <FaGithub className="lg:text-5xl text-2xl text-orange-200" />
        </div>
        <div 
    className="mt-6 px-6 py-3 bg-orange-300 text-black hover:text-white lg:text-2xl text-lg font-semibold rounded-lg hover:bg-orange-900 transition-colors inline-flex items-center gap-2 cursor-pointer"
    onClick={handleDownload}  // Trigger download on div click
  >
    <span>Resume</span>
    <FaDownload className='text-lg' />
  </div>


      </div>
    </div>
  );
});

export default MainPage;
