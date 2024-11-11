import React from 'react';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';

function ContactMe() {
  return (
    <div className=" text-black p-8 bg-orange-300 font-mono w-[100%]">
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-semibold mb-5"></h3>

        {/* Centered Icons Section */}
        <div className="flex space-x-8 mb-6">
          <a href="https://www.linkedin.com/in/ashutosh-thakur-5a3b32254/" target="_blank" rel="noopener noreferrer" className="text-blue-500 text-3xl hover:text-blue-400">
            <FaLinkedin />
          </a>
          <a href="https://github.com/ashutoshorisoh" target="_blank" rel="noopener noreferrer" className="text-gray-500 text-3xl hover:text-gray-400">
            <FaGithub />
          </a>
        </div>

        {/* Contact Information Section */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center space-x-6 text-lg sm:text-sm mb-6">
            <div className="flex items-center justify-center space-x-2">
              <FaPhone />
              <span>+91 8777073706</span>
            </div>
            <div className="flex items-center justify-center space-x-2 sm:space-x-0">
              <FaEnvelope />
              <span className='text-lg sm:text-sm'>thakurashutosh39920@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="mt-6 text-sm text-center">
          <p>© 2024 Ashutosh Thakur</p>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
