import React from 'react';
import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiTailwindCssFill, RiNextjsFill } from 'react-icons/ri';
import { DiFirebase, DiMongodb } from 'react-icons/di';
import { SiExpress } from 'react-icons/si';
import { IoLogoJavascript } from "react-icons/io";
import { DiHtml5 } from 'react-icons/di';
import { DiCss3 } from 'react-icons/di';
import { FaPython } from "react-icons/fa";
import { SiSelenium } from "react-icons/si";



function Portfolio() {
  const projects = [
    { 
      name: "What-Text", 
      description: "A real-time chat app built with React.js, Tailwind CSS, and Firebase. Includes file-sharing functionality.", 
      link: "https://what-textapp.web.app/", 
      src: "/assetts/whatext.png", 
      techStack: [<FaReact key="react" />, <RiTailwindCssFill key="tailwind" />, <DiFirebase key="firebase" />],
      github: "https://github.com/ashutoshorisoh/what-text-firebase"
    },
    { 
      name: "VibeHub", 
      description: "Building a full-stack project that features tutorial sharing, similar to YouTube, but with additional features like chatting, community, and more.", 
      link: "https://ekminuteaap.netlify.app/", 
      src: "/assetts/ekmi.jpeg", 
      techStack: [<FaReact key="react" />, <SiExpress key="express" />, <DiMongodb key="mongodb" />, <RiTailwindCssFill key="tailwind" />],
      github: "https://github.com/ashutoshorisoh/1Minute-Frontend"
    },
    { 
      name: "notesBaaton", 
      description: "A simple notes sharing platform which doesnt require login.", 
      link: "https://notesbaaton.vercel.app/", 
      src: "/assetts/notes.png", 
      techStack: [<RiNextjsFill key="nextjs" />, <RiTailwindCssFill key="tailwind" />, <FaReact key="react" />, <DiMongodb key="mongodb" />],
      github: "https://github.com/ashutoshorisoh/shareNote"
    },
    {
      name: "Task Tracker", 
      description: "A Task Tracker application using ReactJS and Redux that allows users to manage their daily tasks efficiently.", 
      link: "https://task-trackdaily.vercel.app/", 
      src: "/assetts/tasktracker.png", 
      techStack: [<RiNextjsFill key="nextjs" />, <RiTailwindCssFill key="tailwind" />, <FaReact key="react" />, <DiMongodb key="mongodb" />],
      github: "https://github.com/ashutoshorisoh/task_tracker"
    },
    { 
      name: "MoneyGainer", 
      description: "A web-based mines gaming app built with React.js and Tailwind CSS.", 
      link: "https://money-gainer.vercel.app/", 
      src: "/assetts/Screenshot 2024-11-06 162627.png", 
      techStack: [<FaReact key="react" />, <RiTailwindCssFill key="tailwind" />],
      github: "https://github.com/ashutoshorisoh/money-gainer"
    },
    { 
      name: "Media-Player", 
      description: "A simple video player app made with React.js and Tailwind CSS.", 
      link: "https://66e7e006bc17b4dce8f08c82--video-play-ok.netlify.app/", 
      src: "/assetts/Screenshot 2024-11-06 162711.png", 
      techStack: [<FaReact key="react" />, <RiTailwindCssFill key="tailwind" />],
      github: "https://github.com/ashutoshorisoh/vidPlayer"
    },
  ];

  const navItems = [
    { name: "About", target: "#about" },
    { name: "Projects", target: "#projects" },
    { name: "Tech Stack", target: "#tech-stack" },
    { name: "Resume", target: "#resume" }
  ];

  const mobnavItems = [
    { name: "About", target: "#about-mobile" },
    { name: "Projects", target: "#projects-mobile" },
    { name: "Tech Stack", target: "#tech-stack-mobile" },
    { name: "Resume", target: "#resume-mobile" }
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/ashutoshorisoh", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/ashutosh-thakur-5a3b32254/", label: "LinkedIn" },
    { icon: <FaXTwitter />, url: "https://x.com/ashutoshorisoh", label: "Twitter" }
  ];

  return (
    <div className="min-h-screen w-full bg-slate-900 overflow-x-hidden">
      {/* Desktop Layout */}
      <div className="hidden lg:flex lg:flex-row">
        {/* Left sidebar - fixed on large screens */}
        <div 
          id="sidebar"
          className="w-1/2 h-screen flex flex-col gap-4 justify-center items-start
          p-10 text-white "
        >
          <h1 className="text-5xl text-yellow-200 font-bold mb-[-10px]">
            Ashutosh Thakur
          </h1>

          <p className="text-gray-400 text-3xl mb-[-8px] italic">
            I code to cope
          </p>

          <p className="whitespace-normal text-xl text-slate-200">
            Let's talk straight, I know frontend development and automation testing
          </p>

          <ul className="flex flex-col mt-1">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.target}
                  className="text-lg font-thin block hover:text-yellow-200 transition-colors"
                >
                  -----{item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-row mt-20 gap-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                className="text-3xl hover:text-yellow-200 transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Main content area - scrollable and properly positioned */}
        <div
          className="w-1/2 flex flex-col gap-8 justify-start items-center
          p-10 text-white ml-1/2"
        >
          {/* About section */}
          <div id="about" className="w-full mb-12">
            <p className="text-2xl text-gray-400">
              I have knowledge in frontend development and automation testing, working with technologies like <span className="text-white">JavaScript, React.js, Next.js, Python</span>, and <span className="text-white">Selenium WebDriver</span>.

              I have built full-stack applications using <span className="text-white">MongoDB, Express.js, and Firebase</span>, implementing authentication and API integration. My projects include a chat app, video-sharing platform, and note-sharing tool.

              In testing, I have developed <span className="text-white">automation frameworks</span> using <span className="text-white">Selenium and PyTest</span>, applying <span className="text-white">Page Object Model (POM)</span> and data-driven testing for better reliability.

              I am looking for opportunities to apply my skills while continuing to learn and improve.
            </p>
          </div>

          {/* Projects section */}
          <h2 id="projects" className='text-3xl font-bold mb-8'>MY PROJECTS</h2>
          {projects.map((project, index) => (
            <div 
              key={index}
              className="flex flex-col lg:flex-row gap-6 w-full max-w-5xl mx-auto p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700 hover:border-orange-500 transition-all duration-300 mb-8"
            >
              {/* Project Image */}
              <div className="w-full lg:w-2/5">
                <div className="aspect-square rounded-lg overflow-hidden shadow-md transition-transform  duration-300">
                  <img
                    src={project.src}
                    alt={`${project.name} preview`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Project Details */}
              <div className="w-full lg:w-3/5 flex flex-col justify-between">
                <div>
                  {/* Project Title */}
                  <h3 className="inline-block font-bold text-2xl lg:text-3xl bg-zinc-700/80 px-4 py-2 rounded-lg text-white shadow-md mb-4">
                    {project.name}
                  </h3>
                  
                  {/* Project Description */}
                  <p className="text-lg lg:text-xl text-slate-200 font-light leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm uppercase tracking-wider text-slate-400 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-slate-700/60 text-orange-500 px-3 py-1 rounded-full text-sm lg:text-base shadow-sm border border-slate-600 hover:bg-slate-600 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a 
                    href={project.link}
                    className="flex items-center justify-center gap-2 bg-orange-800 hover:bg-orange-500 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-md"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <span>Live Demo</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a 
                    href={project.github}
                    className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-md"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <span>GitHub</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Placeholder for Tech Stack section */}
          <div id="tech-stack" className="w-full mb-12">
            <h2 className='text-3xl font-bold mb-8'>TECH STACK</h2>
            
            <div
            className='flex gap-3 text-5xl justify-center items-center text-orange-700'
            >
             <FaReact/>
             <RiNextjsFill/>
             <SiExpress/>
             <DiMongodb/>
             <DiFirebase/>
             <IoLogoJavascript />
             <DiHtml5/>
             <DiCss3/>

             <RiTailwindCssFill/>
             <FaGithub/>

            </div>
            


          </div>

          {/* Placeholder for Resume section */}
          <div id="resume" className="w-full mb-12">
            <h2 className='text-3xl font-bold mb-8'>RESUME</h2>
            
            <iframe 
               src="assetts/AshutoshThakurResume.pdf" 
               width="100%" 
               height="930px">
            </iframe>



          </div>
        </div>
      </div>

      {/* Mobile Layout - Unchanged */}
      <div className="flex flex-col lg:hidden">
        {/* Sidebar for mobile */}
        <div 
          id="sidebar-mobile"
          className="w-full flex flex-col gap-4 justify-center items-start
          p-10 text-white"
        >
          <h1 className="text-3xl text-yellow-200 font-bold mb-[-10px]">
            Ashutosh Thakur
          </h1>

          <p className="text-gray-400 text-xl mb-[-8px] italic">
            I code to cope
          </p>

          <p className="whitespace-normal text-lg text-slate-200">
            Let's talk straight, I know frontend development and automation testing
          </p>

          <ul className="flex flex-col mt-1">
            {mobnavItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.target}
                  className="text-lg font-thin block hover:text-yellow-200 transition-colors"
                >
                  -----{item.name}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex flex-row mt-2 gap-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.url}
                className="text-xl hover:text-yellow-200 transition-colors"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile content */}
        <div
          className="w-full flex flex-col gap-8 justify-start items-center
          p-10 text-white"
        >
          {/* About section */}
          <div id="about-mobile" className="w-full">
            <h2 className="text-lg mb-4 font-bold">
              ABOUT ME
            </h2>
            <p className="text-gray-400">
              I have knowledge in frontend development and automation testing, working with technologies like <span className="text-white">JavaScript, React.js, Next.js, Python</span>, and <span className="text-white">Selenium WebDriver</span>.

              I have built full-stack applications using <span className="text-white">MongoDB, Express.js, and Firebase</span>, implementing authentication and API integration. My projects include a chat app, video-sharing platform, and note-sharing tool.

              In testing, I have developed <span className="text-white">automation frameworks</span> using <span className="text-white">Selenium and PyTest</span>, applying <span className="text-white">Page Object Model (POM)</span> and data-driven testing for better reliability.

              I am looking for opportunities to apply my skills while continuing to learn and improve.
            </p>
          </div>

          {/* Projects section for mobile */}
          <h2 className='text-3xl font-bold' id="projects-mobile">MY PROJECTS</h2>
          {projects.map((project, index) => (
            <div 
              key={index}
              className="flex flex-col gap-6 w-full max-w-5xl mx-auto p-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-700 hover:border-orange-500 transition-all duration-300 mb-8"
            >
              {/* Project Image */}
              <div className="w-full">
                <div className="aspect-square rounded-lg overflow-hidden shadow-md transition-transform hover:scale-105 duration-300">
                  <img
                    src={project.src}
                    alt={`${project.name} preview`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Project Details */}
              <div className="w-full flex flex-col justify-between">
                <div>
                  {/* Project Title */}
                  <h3 className="inline-block font-bold text-xl bg-zinc-700/80 px-4 py-2 rounded-lg text-white shadow-md mb-4">
                    {project.name}
                  </h3>
                  
                  {/* Project Description */}
                  <p className="text-lg text-slate-200 font-light leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm uppercase tracking-wider text-slate-400 mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-slate-700/60 text-orange-400 px-3 py-1 rounded-full text-sm shadow-sm border border-slate-600 hover:bg-slate-600 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex gap-4">
                  <a 
                    href={project.link}
                    className="flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-md"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <span>Live Demo</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <a 
                    href={project.github}
                    className="flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 px-4 py-2 rounded-lg font-medium transition-all duration-200 shadow-md"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <span>GitHub</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* Mobile placeholders for other sections */}
          <div id="tech-stack-mobile" className="w-full mb-6">
            <h2 className='text-3xl font-bold mb-8'>TECH STACK</h2>
            
            <div
            className='grid grid-rows-2 grid-cols-4 gap-3 text-7xl justify-center items-center text-orange-700'
            >
             <FaReact/>
             <RiNextjsFill/>
             <SiExpress/>
             <DiMongodb/>
             <DiFirebase/>
             <IoLogoJavascript />
             <DiHtml5/>
             <DiCss3/>

             <RiTailwindCssFill/>
             <FaGithub/>
             <FaPython/>
             <SiSelenium/>

            </div>


          </div>

          <div id="resume-mobile" className="w-full mb-12">
            <h2 className='text-3xl font-bold mb-8'>RESUME</h2>
            
            <iframe 
               src="assetts/AshutoshThakurResume.pdf" 
               width="100%" 
               height="597px">
            </iframe>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;