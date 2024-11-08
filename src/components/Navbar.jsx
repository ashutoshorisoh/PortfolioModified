import React from 'react';

function Navbar({ scrollToHome, scrollToProjects, scrollToContact, scrollToMain }) {
  return (
    <div className="bg-orange-200 font-mono lg:h-16 w-full flex flex-row lg:justify-end justify-center items-center text-black lg:text-xl text-base lg:pr-10 pr-0 gap-5 p-5 sticky top-0 z-10">
      <button 
        className="text-black hover:text-gray-400"
        onClick={scrollToMain} // Scroll to Main Page
      >
        Home
      </button>
      <button 
        className="text-black hover:text-gray-400"
        onClick={scrollToHome} // Scroll to About Me
      >
        About Me
      </button>
      <button 
        className="text-black hover:text-gray-400"
        onClick={scrollToProjects} // Scroll to Projects
      >
        Projects
      </button>
      
      <button 
        className="text-black hover:text-gray-400"
        onClick={scrollToContact} // Scroll to Contact Me
      >
        Contact Me
      </button>
    </div>
  );
}

export default Navbar;
