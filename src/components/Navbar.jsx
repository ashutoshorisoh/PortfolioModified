import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-orange-200 font-mono lg:h-16 w-full flex flex-row lg:justify-end justify-center items-center text-black lg:text-2xl text-lg lg:pr-10 pr-0 lg:gap-5 gap-7 p-5 sticky top-0 z-10">
      {/* Navigation Links */}
      <Link to="/" className="text-black hover:text-gray-400 font-bold">
        Home
      </Link>
      <Link to="/about" className="text-black hover:text-gray-400 font-bold">
        About
      </Link>
      <Link to="/projects" className="text-black hover:text-gray-400 font-bold">
        Projects
      </Link>
      <Link to="/contact" className="text-black hover:text-gray-400 font-bold">
        Contact
      </Link>
    </div>
  );
}

export default Navbar;
