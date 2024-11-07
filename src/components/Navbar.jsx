import React from 'react';

function Navbar({ scrollToProjects, scrollToContact }) {
  return (
    <div className="bg-orange-200 font-mono lg:h-16 w-full flex flex-row lg:justify-end justify-center items-center text-black lg:text-xl text-lg  pr-10 gap-5 p-5 sticky top-0 z-10">
      <button 
        className="text-black hover:text-gray-400"
        onClick={scrollToProjects}  // Scroll to Projects
      >
        Projects
      </button>
      <button 
        className="text-black hover:text-gray-400"
        onClick={scrollToContact}  // Scroll to Contact Me
      >
        Contact Me
      </button>
    </div>
  );
}

export default Navbar;
