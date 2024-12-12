import React, { useState, useEffect } from "react";
import { BiMoon, BiMenu, BiX } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaScroll } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { DiFirebase } from "react-icons/di";
import { BsForwardFill } from "react-icons/bs";
import { FaBackward } from "react-icons/fa";
import { FaForward } from "react-icons/fa";

function Entire() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1)
  const [prevIndex, setPrevIndex] = useState(0)
  const [modalOpen, setModalOpen] = useState(false);

  const projects = [
    { 
      name: "What-Text", 
      description: "A real-time chat app built with React.js, Tailwind CSS, and Firebase. Includes file-sharing functionality.", 
      link: "https://what-textapp.web.app/", 
      src:"/assetts/Screenshot 2024-11-06 162253.png", 
      techStack: [<FaReact />, <RiTailwindCssFill />, <DiFirebase />]
    },
    { 
      name: "VibeHub", 
      description: "Building a full-stack project that features tutorial sharing, similar to YouTube, but with additional features like chatting, community, and more.", 
      link: "https://ekminuteaap.netlify.app/", 
      src:"/assetts/ekmi.jpeg", 
      techStack: [<FaReact />, <SiExpress />, <DiMongodb />, <RiTailwindCssFill />]
    },
    { 
      name: "MoneyGainer", 
      description: "A web-based mines gaming app built with React.js and Tailwind CSS.", 
      link: "https://money-gainer.vercel.app/", 
      src:"/assetts/Screenshot 2024-11-06 162627.png", 
      techStack: [<FaReact />, <RiTailwindCssFill />, ]
    },
    { 
      name: "Media-Player", 
      description: "A simple video player app made with React.js and Tailwind CSS.", 
      link:"https://66e7e006bc17b4dce8f08c82--video-play-ok.netlify.app/", 
      src:"/assetts/Screenshot 2024-11-06 162711.png", 
      techStack: [<FaReact />, <RiTailwindCssFill />]
    },
  ];
  

  const handleNext =()=>{
    if(currentIndex<projects.length-1){
      setCurrentIndex((prev)=>prev+1)
    }
    else if(currentIndex==projects.length-1){
      setCurrentIndex(0)
    }
  }

  const handlePrev =()=>{
    if(currentIndex==0){
      setCurrentIndex(projects.length-1)
    } else{
      setCurrentIndex((prev)=>prev-1)
    }
  }

  useEffect(()=>{
    if(currentIndex==0){
      setPrevIndex(projects.length-1)
      setNextIndex(1)
    } else if(currentIndex==projects.length-1){
      setNextIndex(0)
      setPrevIndex(currentIndex-1)
    }
    else{
      setPrevIndex(currentIndex-1)
      setNextIndex(currentIndex+1)
    }
  }, [currentIndex])

  

  // Scroll to a section
  const scrollToSection = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  // Open/close Contact Me modal
  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <div className="flex flex-col justify-center lg:items-center items-start h-full gap-5 p-4">
      {/* Top Section */}

      <div className="flex flex-row items-center sticky top-0 bg-white  justify-between lg:p-5 p-2 shadow-md rounded-3xl border border-transparent w-full md:w-[80%] md:mx-auto">
        {/* Profile Image */}
        <div className="flex-shrink-0 lg:h-16 h-10 lg:w-16 w-10 rounded-full overflow-hidden bg-black shadow-xl">
          <img
            src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg"
            alt="Profile"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Navigation Links, Mode Icon and Hamburger */}
        <div className="flex items-center gap-5">
          {/* Navigation Links for large screen */}
          <div className="hidden lg:flex items-center justify-center gap-5">
            <button className="text-lg hover:text-yellow-600" onClick={() => scrollToSection("intro")}>Introduction</button>
            <button className="text-lg hover:text-yellow-600" onClick={() => scrollToSection("about")}>About</button>
            <button className="text-lg hover:text-yellow-600" onClick={() => scrollToSection("projects")}>Projects</button>
            <button className="text-lg hover:text-yellow-600" onClick={() => scrollToSection("mystack")}>Mystack</button>
            <button className="text-lg hover:text-yellow-600" onClick={() => scrollToSection("blogs")}>Blogs</button>
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
        } absolute top-6 mt-14 right-0 w-[93%] bg-slate-200 rounded-b-xl mr-4 flex-col items-center gap-6 p-4 shadow-lg lg:hidden`}
      >
        <button className="text-md font-medium border hover:bg-yellow-600 hover:text-white pt-1 pb-1 border-transparent border-dotted pl-10 pr-10 rounded-xl" onClick={() => scrollToSection("intro")}>
          Introduction
        </button>
        <button className="text-md font-medium border hover:bg-yellow-600 hover:text-white pt-1 pb-1 border-transparent border-dotted pl-10 pr-10 rounded-xl" onClick={() => scrollToSection("about")}>
          About
        </button>
        <button className="text-md font-medium border hover:bg-yellow-600 hover:text-white pt-1 pb-1 border-transparent border-dotted pl-10 pr-10 rounded-xl" onClick={() => scrollToSection("projects")}>
          Projects
        </button>
        <button className="text-md font-medium border hover:bg-yellow-600 hover:text-white pt-1 pb-1 border-transparent border-dotted pl-10 pr-10 rounded-xl" onClick={() => scrollToSection("mystack")}>
          Mystack
        </button>
        <button className="text-md font-medium border hover:bg-yellow-600 hover:text-white pt-1 pb-1 border-transparent border-dotted pl-10 pr-10 rounded-xl" onClick={() => scrollToSection("blogs")}>
          Blogs
        </button>
      </div>

      {/* Intro Section */}
      <div id="intro" className="flex flex-col-reverse lg:flex-row justify-between items-center gap-5 text-black lg:ml-40 lg:mr-3 overflow-hidden pb-20">
        {/* Intro Text */}
        <div className="font-bold text-center lg:text-left">
          <h1 className="text-4xl sm:text-xl lg:text-6xl">
            Hello👋🏻, I'm <p className="text-yellow-400">Ashutosh Thakur</p>
          </h1>
          <h2 className="text-lg sm:text-lg lg:text-3xl mt-3 text-slate-600 font-thin leading-relaxed">
            A dedicated frontend developer with solid knowledge in JavaScript,
            React.js, and Tailwind CSS, along with hands-on experience in
            building interactive user interfaces. Currently expanding into
            backend technologies to become a full-stack developer.
          </h2>

          {/* Buttons */}
          <div className="mt-10 text-lg flex flex-wrap justify-center lg:justify-start gap-5">
            <button className="bg-yellow-600 text-white px-10 py-2 shadow-md rounded-lg" onClick={toggleModal}>
              Contact Me
            </button>
            <button className="bg-gray-200 text-black px-10 py-2 shadow-md rounded-lg" onClick={() => scrollToSection("projects")}>
              View Projects
            </button>
          </div>

          {/* Social Media */}
          <div className="mt-10 text-3xl lg:text-5xl flex justify-center lg:justify-start gap-5">
            <FaLinkedinIn />
            <FaGithub />
            <FaXTwitter />
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 lg:h-[35%] h-[40%] lg:w-[35%] w-[34%] rounded-3xl overflow-hidden overflow-y-hidden flex justify-center shadow-xl border lg:mr-36">
          <img
            src="https://i.pinimg.com/736x/c6/a3/3c/c6a33cc06a11df2bc1eeeca10e279861.jpg"
            alt="Background"
            className="h-[70%] w-[100%] object-contain"
          />
        </div>
      </div>

      {/* Projects Section */}
      <div className="flex justify-between items-center gap-4 w-full h-[600px]" id="projects">
  {/* Previous Project Box */}
  <div className="lg:flex justify-center items-center h-[80%] w-1/4 bg-slate-800 opacity-50 relative hidden md:flex">
    <img
      src={projects[prevIndex].src}
      alt={projects[prevIndex].name}
      className="h-full w-full object-cover absolute top-0 left-0 opacity-50 rounded-lg"
    />
    <div className="z-10 text-white">{projects[prevIndex].name}</div>
  </div>

  {/* Current Project Box (Largest) */}
  <div className="flex flex-col justify-between items-center h-[80%] w-full md:w-[50%] bg-yellow-300 rounded-xl shadow-xl relative">
    {/* Prev Button */}
    <button
      onClick={handlePrev}
      className="absolute top-1/2 left-1 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-600"
    >
      <FaBackward/>
    </button>

    {/* Project Content */}
    <div className="flex flex-col justify-between items-center h-full w-full overflow-hidden border border-black bg-white rounded-lg">
      {/* Image */}
      <img
        src={projects[currentIndex].src}
        alt={projects[currentIndex].name}
        className="h-[45%] w-full object-cover rounded-t-lg"
      />
      {/* Title, Description, Tech Stack, Live Link */}
      <div className="flex flex-col justify-center items-center w-full h-[55%] bg-yellow-300  pb-5 pt-5 pl-6 pr-6">
        <h1 className="font-bold text-2xl text-center">{projects[currentIndex].name}</h1>
        <p className="text-lg mt-2 ml-10 mr-10 text-left">{projects[currentIndex].description}</p>
        <div className="flex gap-6">
          <span className="font-medium flex text-4xl mt-5 gap-5 text-black">{projects[currentIndex].techStack}</span>
        </div>
        <a
          href={projects[currentIndex].link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 mt-2 mb-2"
        >
          Live Link
        </a>
      </div>
    </div>

    {/* Next Button */}
    <button
      onClick={handleNext}
      className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-gray-700 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-600"
    >
      <FaForward/>
    </button>
  </div>

  {/* Next Project Box */}
  <div className="lg:flex justify-center items-center h-[80%] w-1/4 bg-slate-500 opacity-50 relative hidden md:flex">
    <img
      src={projects[nextIndex].src}
      alt={projects[nextIndex].name}
      className="h-full w-full object-cover absolute top-0 left-0 opacity-50 rounded-lg"
    />
    <div className="z-10 text-white">{projects[nextIndex].name}</div>
  </div>
</div>





      {/* Modal for Contact Me */}
      {modalOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center"
          onClick={toggleModal}
        >
          <div
            className="bg-white p-10 rounded-lg max-w-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-3xl font-bold mb-5">Contact Me</h2>
            <form>
              <input
                type="text"
                className="border p-3 w-full mb-5"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="border p-3 w-full mb-5"
                placeholder="Your Email"
              />
              <textarea
                className="border p-3 w-full mb-5"
                rows="5"
                placeholder="Your Message"
              />
              <button type="submit" className="bg-yellow-600 text-white px-6 py-3 rounded-lg">
                Send Message
              </button>
            </form>
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-2xl text-gray-500"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Entire;
