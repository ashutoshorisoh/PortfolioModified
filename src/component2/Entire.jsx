import React, { useState } from "react";
import { BiMoon, BiMenu, BiX } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaScroll } from "react-icons/fa6";

function Entire() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const projects = [
    { name: "Project 1", description: "Description of Project 1" },
    { name: "Project 2", description: "Description of Project 2" },
    { name: "Project 3", description: "Description of Project 3" },
  ];

  const handleSwipe = (direction) => {
    if (direction === "left") {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    } else if (direction === "right") {
      setCurrentSlide(
        (prev) => (prev - 1 + projects.length) % projects.length
      );
    }
  };

  // Scroll to a section
  const scrollToSection = (section) => {
    document.getElementById(section).scrollIntoView({ behavior: "smooth" });
  };

  // Open/close Contact Me modal
  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <div className="flex flex-col justify-center lg:items-center items-start gap-5 p-4">
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
      <div id="projects" className="w-full flex flex-col items-center p-10">
        <h2 className="text-4xl font-bold mb-5">Projects</h2>
        <div className="relative w-full flex justify-center">
          <div
            className="w-full h-[300px] bg-gray-100 p-5 rounded-xl shadow-xl flex justify-center items-center cursor-pointer hover:scale-105 transition-all"
            onClick={() => handleSwipe("left")}
          >
            <h3 className="text-2xl">{projects[currentSlide].name}</h3>
            <p className="text-lg">{projects[currentSlide].description}</p>
          </div>
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
