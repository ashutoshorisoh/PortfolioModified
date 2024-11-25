import React, { forwardRef } from 'react'; 
import { RiReactjsFill } from 'react-icons/ri';
import { RiTailwindCssFill } from 'react-icons/ri';
import { FaHtml5 } from 'react-icons/fa';
import { IoLogoCss3 } from 'react-icons/io';
import { SiJavascript } from 'react-icons/si';
import { FaGithub } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Home = forwardRef((props, ref) => {
  const navigate = useNavigate();
  
  return (
    <div ref={ref} className="bg-black min-h-screen px-4 py-8 flex flex-col">
      {/* Navbar with sticky position */}
      <div className="sticky top-0 flex flex-row lg:justify-end justify-center gap-5 p-4 sm:p-6 lg:p-10 bg-black z-10">
        <button
          onClick={() => navigate("/projects")}
          className="bg-black border border-white text-white hover:text-white px-4 sm:px-5 py-2 rounded-md hover:bg-yellow-700 transition"
        >
          Projects
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-black border border-white text-white px-4 sm:px-5 py-2 rounded-md hover:bg-yellow-700 hover:text-white transition"
        >
          Home
        </button>
        <button
          onClick={() => navigate("/contact")}
          className="bg-black text-white border border-white px-4 sm:px-5 py-2 rounded-md hover:bg-yellow-700 transition hover:text-white"
        >
          Contact Me
        </button>
      </div>

      {/* Header */}
      <div className="text-center text-green-400 mb-8">
        <h3 className="lg:text-6xl text-4xl font-semibold"></h3>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-10 justify-center items-center text-center p-5 sm:p-8 lg:p-10">
        {/* Text Section */}
        <div className="lg:w-[50%] w-[90%] sm:w-[80%] p-5 flex flex-col gap-6 justify-start items-start text-center text-white rounded-3xl bg-transparent">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold">
            about<span className="text-red-400">Me</span>
          </h1>
          <p className="lg:text-3xl sm:text-2xl text-xl text-left text-yellow-400">
            A dedicated frontend developer with solid knowledge in JavaScript, React.js, and Tailwind CSS, along with hands-on experience in building interactive user interfaces. Currently expanding into backend technologies to become a full-stack developer.
          </p>

          {/* Icons Section (You can add icons here later) */}
        </div>
      </div>
    </div>
  );
});

export default Home;
