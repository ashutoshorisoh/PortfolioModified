import React from 'react';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function ContactMe() {
  const navigate = useNavigate(); // For navigation

  return (
    <div className="bg-black flex flex-col h-screen w-screen">
      {/* Navbar with navigation buttons */}
      <div className="sticky top-0 flex flex-row lg:justify-end justify-between gap-5 p-10 mt-10 bg-black z-10">
        <button
          onClick={() => navigate("/projects")}
          className="bg-black border border-white text-white hover:text-white px-5 py-2 rounded-md hover:bg-yellow-700 transition"
        >
          Projects
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-black border border-white text-white px-5 py-2 rounded-md hover:bg-yellow-700 hover:text-white transition"
        >
          Home
        </button>
        <button
          onClick={() => navigate("/about")}
          className="bg-black text-white border border-white px-5 py-2 rounded-md hover:bg-yellow-700 transition hover:text-white"
        >
          About Me
        </button>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between items-center p-5 mt-20">
        {/* Title */}
        <h1 className="text-white text-4xl font-bold">
            about<span className='text-red-400'>Me</span>
          </h1>
 
        {/* Icons Section */}
        <div className="flex flex-wrap justify-center space-x-6 mb-6 mt-10">
          <a
            href="https://www.linkedin.com/in/ashutosh-thakur-5a3b32254/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl sm:text-3xl hover:text-blue-400 mb-4"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/ashutoshorisoh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl sm:text-3xl hover:text-gray-400 mb-4"
          >
            <FaGithub />
          </a>
        </div>

        {/* Contact Information Section */}
        <div className="flex flex-col text-2xl sm:text-xl justify-center text-white">
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6 text-base sm:text-lg mb-6">
            <div className="flex items-center justify-center space-x-2">
              <FaPhone />
              <span>+91 8777073706</span>
            </div>
            <div className="flex items-center justify-center space-x-2 sm:space-x-4">
              <FaEnvelope />
              <span>thakurashutosh39920@gmail.com</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-[-6] text-sm sm:text-lg text-center text-white">
          <p>© 2024 Ashutosh Thakur</p>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
