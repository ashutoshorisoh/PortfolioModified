import React from 'react';

function Navbar({ scrollToHome, scrollToProjects, scrollToContact, scrollToMain }) {
  return (
    <div className="bg-orange-200 font-mono lg:h-16 w-full flex flex-row lg:justify-end justify-between items-center text-black lg:text-xl text-sm  lg:pr-10 pr-0 lg:gap-5 gap-5 p-5 sticky top-0 z-10">
      <button 
        className="text-black hover:text-gray-400 font-bold"
        onClick={scrollToMain} // Scroll to Main Page
      >
        Home
      </button>
      <button 
        className="text-black hover:text-gray-400 font-bold"
        onClick={scrollToHome} // Scroll to About Me
      >
        About
      </button>
      <button 
        className="text-black hover:text-gray-400 font-bold"
        onClick={scrollToProjects} // Scroll to Projects
      >
        Projects
      </button>
      
      <button 
        className="text-black hover:text-gray-400 font-bold"
        onClick={scrollToContact} // Scroll to Contact Me
      >
        Contact
      </button>
    </div>
  );
}

export default Navbar;
