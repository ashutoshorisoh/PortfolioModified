import { forwardRef } from 'react';
import React, { useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaDownload } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const MainPage = forwardRef((props, ref) => {
  const [title, setTitle] = useState("Frontend");
  const titles = ["Frontend", "Backend", "Full Stack"];
  const navigate = useNavigate();
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      index = (index + 1) % titles.length;
      setTitle(titles[index]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assetts/Ashutosh_Dev_CV.pdf";
    link.download = "Ashutosh_Dev_CV.pdf";
    link.click();
  };

  return (
    <div ref={ref} className="bg-black flex justify-center items-center h-screen w-screen">
      <div className="flex flex-col justify-between items-center p-5">
        <h1 className="text-green-400 font-bold text-5xl">
          <span className="text-white">Hey!, I'm </span> Ashutosh
          <span className="text-white">  a </span>
          <p className="text-red-400">
            {title} <span className="text-white">Developer</span>
          </p>
        </h1>
        <div className="flex flex-row pt-5 text-yellow-400 justify-center items-center gap-5 text-4xl">
          <FaReact />
          <RiTailwindCssFill />
          <FaHtml5 />
          <FaCss3Alt />
          <FaJs />
          <FaGithub />
        </div>
        <div
          onClick={handleDownload}
          className="text-yellow-900 hover:text-yellow-100 flex pt-5 pb-5 mt-10 pl-7 pr-7 justify-center items-center bg-white hover:bg-green-700 cursor-pointer"
        >
          <span>Resume</span>
          <FaDownload />
        </div>
        <div className="flex flex-row gap-5 mt-20">
          <button
            onClick={() => navigate("/about")}
            className="bg-black  border  border-white text-white hover:text-white px-5 py-2 rounded-md hover:bg-green-700 transition"
          >
            About Me
          </button>
          <button
            onClick={() => navigate("/projects")}
            className="bg-black  border  border-white text-white px-5 py-2 rounded-md hover:bg-green-700 hover:text-white transition"
          >
            Projects
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="bg-black text-white border  border-white px-5 py-2 rounded-md hover:bg-green-700 transition hover:text-white"
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
});

export default MainPage;
