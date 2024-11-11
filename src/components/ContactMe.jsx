import React from 'react';
import { FaGithub, FaLinkedin, FaPhone, FaEnvelope } from 'react-icons/fa';

function ContactMe() {
  return (
    <div className="text-white p-4 sm:p-6 lg:p-8 bg-transparent  flex justify-center items-start  font-mono w-full h-screen">
      <div className="flex flex-col justify-center items-center">
        <h3 className="text-2xl font-semibold mb-5"></h3>

        {/* Centered Icons Section */}
        <div className="flex flex-wrap justify-center space-x-6 mb-6">
          <a href="https://www.linkedin.com/in/ashutosh-thakur-5a3b32254/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl sm:text-3xl hover:text-blue-400 mb-4">
            <FaLinkedin />
          </a>
          <a href="https://github.com/ashutoshorisoh" target="_blank" rel="noopener noreferrer" className="text-white text-2xl sm:text-3xl hover:text-gray-400 mb-4">
            <FaGithub />
          </a>
        </div>

        {/* Contact Information Section */}
        <div className="flex flex-col text-2xl sm:text-xl  justify-center">
          <div className="flex flex-col  justify-center space-y-4 sm:space-y-6 text-base sm:text-lg mb-6">
            <div className="flex items-center justify-center space-x-2">
              <FaPhone />
              <span>+91 8777073706</span>
            </div>
            <div className="flex items-center justify-center space-x-2 sm:space-x-4">
              <FaEnvelope />
              <span className="">thakurashutosh39920@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="mt-6 text-xl sm:text-lg text-center">
          <p>© 2024 Ashutosh Thakur</p>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
