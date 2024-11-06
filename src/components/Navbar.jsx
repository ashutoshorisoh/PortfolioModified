import React from 'react';

function Navbar({ scrollToProjects, scrollToContact }) {
  return (
    <div className="bg-black h-auto w-full flex flex-row lg:justify-end justify-center items-center text-white gap-5 p-5">
      <button 
        className="text-white"
        onClick={scrollToProjects}  // Scroll to Projects
      >
        Projects
      </button>
      <button 
        className="text-white"
        onClick={scrollToContact}  // Scroll to Contact Me
      >
        Contact Me
      </button>
    </div>
  );
}

export default Navbar;
