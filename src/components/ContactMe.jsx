import React from 'react';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';

function ContactMe() {
  return (
    <div className="bg-black flex justify-center items-center h-screen w-screen">
      <div className="flex flex-col justify-between items-center p-5">
        {/* Title */}
        <h1 className="text-green-400 flex gap-5 font-bold text-5xl">
          <span className="text-white">Contact</span>
          <span className="text-red-400">Me</span>
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
