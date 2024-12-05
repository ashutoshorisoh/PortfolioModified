import React, { useState } from "react";
import { BiMoon, BiMenu, BiX } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

function Entire() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col justify-center lg:items-center items-start gap-5 p-4">
      {/* Top Section */}
      <div className="flex flex-row items-center justify-between p-5 shadow-md rounded-3xl border border-transparent w-full md:w-[80%] md:mx-auto">
        {/* Profile Image */}
        <div className="flex-shrink-0 h-16 w-16 rounded-full overflow-hidden bg-black shadow-xl">
          <img
            src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg"
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Navigation Links, Mode Icon and Hamburger */}
        <div className="flex items-center gap-5">
          {/* Navigation Links for large screen */}
          <div className="hidden lg:flex items-center gap-5">
            <button className="text-lg">Introduction</button>
            <button className="text-lg">About</button>
            <button className="text-lg">Projects</button>
            <button className="text-lg">Mystack</button>
            <button className="text-lg">Blogs</button>
          </div>

          {/* Mode Icon and Hamburger (for small and medium screens) */}
          <div className="flex items-center gap-5">
          <button className="bg-black text-white rounded-full px-5 py-2 lg:block hidden shadow-md">
          Resume
        </button>
            <BiMoon className="text-2xl" />
            <button
              className="block lg:hidden text-3xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <BiX /> : <BiMenu />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Links (for small screens) */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } absolute top-12 mt-14 right-0 w-[94%]  bg-white rounded-b-xl mr-4 flex-col items-center gap-6 p-4 shadow-lg lg:hidden`}
      >
        <button className="text-xl font-medium">Introduction</button>
        <button className="text-xl font-medium">About</button>
        <button className="text-xl font-medium">Projects</button>
        <button className="text-xl font-medium">Mystack</button>
        <button className="text-xl font-medium">Blogs</button>
      </div>

      {/* Resume Button (hidden on small and medium screens) */}
      

      {/* Intro Section */}
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-5 text-black lg:ml-36 overflow-hidden pb-20">
        {/* Intro Text */}
        <div className="font-bold text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl">
            Hello👋🏻, I'm <span className="text-yellow-400">Ashutosh Thakur</span>
          </h1>
          <h2 className="text-lg sm:text-xl lg:text-3xl mt-3 text-slate-600 font-thin leading-relaxed">
            A dedicated frontend developer with solid knowledge in JavaScript,
            React.js, and Tailwind CSS, along with hands-on experience in
            building interactive user interfaces. Currently expanding into
            backend technologies to become a full-stack developer.
          </h2>

          {/* Buttons */}
          <div className="mt-10 text-lg flex flex-wrap justify-center lg:justify-start gap-5">
            <button className="bg-yellow-600 text-white px-10 py-2 shadow-md rounded-lg">
              Contact Me
            </button>
            <button className="bg-gray-200 text-black px-10 py-2 shadow-md rounded-lg">
              View Projects
            </button>
          </div>

          {/* Social Media */}
          <div className="mt-5 text-3xl lg:text-5xl flex justify-center lg:justify-start gap-5">
            <FaLinkedinIn />
            <FaGithub />
            <FaXTwitter />
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 w-full lg:w-[35%] rounded-3xl overflow-hidden flex justify-center shadow-xl border lg:mr-36">
          <img
            src="https://i.pinimg.com/736x/c6/a3/3c/c6a33cc06a11df2bc1eeeca10e279861.jpg"
            alt="Background"
            className="h-[70%] w-[100%] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Entire;
