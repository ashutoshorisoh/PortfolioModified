import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Projects() {
  const projectsRef = useRef(null);
  const navigate = useNavigate();

  return (
    <div ref={projectsRef} className="bg-black min-h-screen px-4 py-8 flex flex-col">
      {/* Navbar with sticky position */}
      <div className="sticky top-0 flex flex-row lg:justify-end justify-between  gap-5 p-10 bg-black z-10">
        <button
          onClick={() => navigate("/about")}
          className="bg-black  border  border-white text-white hover:text-white px-5 py-2 rounded-md hover:bg-yellow-700 transition"        >
          About Me
        </button>
        <button
          onClick={() => navigate("/")}
          className="bg-black border border-white text-white px-5 py-2 rounded-md hover:bg-yellow-700 hover:text-white transition"
        >
          Home
        </button>
        <button
          onClick={() => navigate("/contact")}
          className="bg-black text-white border border-white px-5 py-2 rounded-md hover:bg-yellow-700 transition hover:text-white"
        >
          Contact Me
        </button>
      </div>

      {/* Header */}
      <div className="text-center text-green-400 mb-8">
        <h3 className="lg:text-6xl text-4xl font-semibold">Projects</h3>
      </div>

      {/* Projects Grid */}
      <div className='flex flex-col justify-center items-center'>
      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
  {/* Project 1 */}
  <article className="bg-red-200 p-2 hover:bg-yellow-300 text-white rounded-lg shadow-md flex flex-col overflow-hidden">
    <div className="w-full h-48 border rounded-br-full rounded-bl-full bg-gray-900 overflow-hidden">
      <img
        src="/assetts/Screenshot 2024-11-06 162253.png"
        alt="What-Text Project"
        className="object-cover w-full h-full"
      />
    </div>
    <div className="p-6 flex flex-col gap-4 text-black">
      <h3 className="text-lg font-bold">What-Text</h3>
      <p className="text-sm text-green-900">
        A real-time chat app built with React.js, Tailwind CSS, and Firebase. Includes file-sharing functionality.
      </p>
      <a
        href="https://what-textapp.web.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-center transition"
      >
        Live Link
      </a>
    </div>
  </article>

  {/* Project 2 */}
  <article className="bg-red-200 p-2 hover:bg-yellow-300 text-white rounded-lg shadow-md flex flex-col overflow-hidden">
    <div className="w-full h-48 rounded-br-full rounded-bl-full bg-gray-900 overflow-hidden">
      <img
        src="/assetts/Screenshot 2024-11-06 162627.png"
        alt="Money-Gainer Project"
        className="object-contain w-full h-full"
      />
    </div>
    <div className="p-6 flex flex-col gap-4 text-black">
      <h3 className="text-lg font-bold">Money-Gainer</h3>
      <p className="text-sm text-green-900">
        A web-based mines gaming app built with React.js and Tailwind CSS.
      </p>
      <a
        href="https://money-gainer.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-center transition"
      >
        Live Link
      </a>
    </div>
  </article>

  {/* Project 3 */}
  <article className="bg-red-200 p-2 hover:bg-yellow-300 text-white rounded-lg shadow-md flex flex-col overflow-hidden">
    <div className="w-full rounded-br-full rounded-bl-full h-48 bg-gray-900 overflow-hidden">
      <img
        src="/assetts/Screenshot 2024-11-06 162711.png"
        alt="Media Player Project"
        className="object-contain w-full h-full"
      />
    </div>
    <div className="p-6 flex flex-col gap-4 text-black">
      <h3 className="text-lg font-bold">Media Player</h3>
      <p className="text-sm text-green-900">
        A simple video player app made with React.js and Tailwind CSS.
      </p>
      <a
        href="https://66e7e006bc17b4dce8f08c82--video-play-ok.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-center transition"
      >
        Live Link
      </a>
    </div>
  </article>

  {/* Project 4 */}
  <article className="bg-red-200 p-2 hover:bg-yellow-300 text-white rounded-lg shadow-md flex flex-col overflow-hidden">
    <div className="w-full h-48 rounded-br-full rounded-bl-full bg-gray-900 overflow-hidden">
      <img
        src="/assetts/Screenshot 2024-11-06 162627.png"
        alt="Money-Gainer Project"
        className="object-contain w-full h-full"
      />
    </div>
    <div className="p-6 flex flex-col gap-4 text-black">
      <h3 className="text-lg font-bold">Money-Gainer</h3>
      <p className="text-sm text-green-900">
        A web-based mines gaming app built with React.js and Tailwind CSS.
      </p>
      <a
        href="https://money-gainer.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-center transition"
      >
        Live Link
      </a>
    </div>
  </article>
</div>

      </div>
      

    </div>
  );
}

export default Projects;
