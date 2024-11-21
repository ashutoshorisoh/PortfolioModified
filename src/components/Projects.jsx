import React, { useRef } from 'react';

function Projects() {
  const projectsRef = useRef(null);

  return (
    <div ref={projectsRef} className="bg-black min-h-screen flex flex-col justify-center items-center font-bold px-4 py-8">
      {/* Header */}
      <div className="text-center text-green-400 mb-8">
        <h3 className="lg:text-6xl text-4xl font-semibold">Projects</h3>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 */}
        <article className="bg-gray-800 hover:bg-yellow-800 text-white rounded-lg shadow-md flex flex-col overflow-hidden">
          <div className="w-full h-48 bg-gray-900 overflow-hidden">
            <img
              src="/assetts/Screenshot 2024-11-06 162253.png"
              alt="What-Text Project"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6 flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-red-400">What-Text</h3>
            <p className="text-sm text-gray-300">
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
        <article className="bg-gray-800 hover:bg-yellow-800 text-white rounded-lg shadow-md flex flex-col overflow-hidden">
          <div className="w-full h-48 bg-gray-900 overflow-hidden">
            <img
              src="/assetts/Screenshot 2024-11-06 162627.png"
              alt="Money-Gainer Project"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6 flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-red-400">Money-Gainer</h3>
            <p className="text-sm text-gray-300">
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
        <article className="bg-gray-800 hover:bg-yellow-800 text-white rounded-lg shadow-md flex flex-col overflow-hidden">
          <div className="w-full h-48 bg-gray-900 overflow-hidden">
            <img
              src="/assetts/Screenshot 2024-11-06 162711.png"
              alt="Media Player Project"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-6 flex flex-col gap-4">
            <h3 className="text-lg font-semibold text-red-400">Media Player</h3>
            <p className="text-sm text-gray-300">
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
        
      </div>
    </div>
  );
}

export default Projects;
