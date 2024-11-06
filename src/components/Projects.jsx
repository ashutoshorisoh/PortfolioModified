import React, { useRef } from 'react';

function Projects() {
  const projectsRef = useRef(null);

  return (
    <div ref={projectsRef}>
      <div className="flex text-center justify-center bg-gray-300 text-black p-5 items-center">
        <h3 className="text-4xl font-semibold">My Projects</h3>
      </div>

      <div className="max-w-full mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 bg-blue-300 ">
        {/* Project 1 */}
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-full h-48 bg-gray-200">
            <img
              src="src/assets/Screenshot 2024-11-06 162319.png"
              alt="What-Text Project"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold">What-Text</h3>
            <p className="text-sm font-thin">(a chat app made using React.js, Tailwind CSS, Firebase)</p>
            <a
              href="https://what-textapp.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-center"
            >
              Live Link
            </a>
          </div>
        </article>

        {/* Project 2 */}
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-full h-48 bg-gray-200">
            <img
              src="src/assets/Screenshot 2024-11-06 162627.png"
              alt="Money-Gainer Project"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold">Money-Gainer</h3>
            <p className="text-sm font-thin">(a web-based mines gaming app made using React.js and Tailwind CSS)</p>
            <a
              href="https://money-gainer.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-center"
            >
              Live Link
            </a>
          </div>
        </article>

        {/* Project 3 */}
        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-full h-48 bg-gray-200">
            <img
              src="src/assets/Screenshot 2024-11-06 162711.png"
              alt="Media Player Project"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold">Media Player</h3>
            <p className="font-thin text-sm">(a simple video player app made using React.js and Tailwind CSS)</p>
            <a
              href="https://66e7e006bc17b4dce8f08c82--video-play-ok.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 text-center"
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
