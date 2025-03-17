import React from 'react';
import { FaGithub, FaLinkedin, FaReact } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiTailwindCssFill, RiNextjsFill } from 'react-icons/ri';
import { DiFirebase, DiMongodb } from 'react-icons/di';
import { SiExpress } from 'react-icons/si';

function Portfolio() {
  const projects = [
    { 
      name: "What-Text", 
      description: "A real-time chat app built with React.js, Tailwind CSS, and Firebase. Includes file-sharing functionality.", 
      link: "https://what-textapp.web.app/", 
      src: "/assetts/Screenshot 2024-11-06 162253.png", 
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

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/ashutoshorisoh", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/ashutosh-thakur-5a3b32254/", label: "LinkedIn" },
    { icon: <FaXTwitter />, url: "https://x.com/ashutoshorisoh", label: "Twitter" }
  ];

  return (
    <div className="min-h-screen w-full flex lg:flex-row flex-col overflow-x-hidden">
      {/* Left sidebar - fixed on large screens */}
      <div 
        id="sidebar"
        className="w-full lg:w-1/2 h-screen bg-red-950 flex flex-col gap-4 justify-center items-start
        p-10 text-white lg:sticky"
      >
        <h1 className="lg:text-5xl text-3xl text-yellow-200 font-bold mb-[-10px]">
          Ashutosh Thakur
        </h1>

        <p className="text-gray-400 text-xl lg:text-3xl mb-[-8px] italic">
          I code to cope
        </p>

        <p className="whitespace-normal lg:text-xl text-lg text-slate-200">
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

        <div className="flex flex-row lg:mt-20 mt-2 gap-4">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.url}
              className="lg:text-3xl text-xl hover:text-yellow-200 transition-colors"
              aria-label={social.label}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Main content area */}
      <div
        className="w-full lg:w-1/2 bg-red-950 flex flex-col gap-8 justify-start items-center
        p-10 text-white"
      >
        {/* About section */}
        <div id="about" className="w-full">
          <h2 className="lg:hidden text-lg mb-4 font-bold">
            ABOUT ME
          </h2>
          <p className="lg:text-2xl text-gray-400">
            I have knowledge in frontend development and automation testing, working with technologies like <span className="text-white">JavaScript, React.js, Next.js, Python</span>, and <span className="text-white">Selenium WebDriver</span>.

            I have built full-stack applications using <span className="text-white">MongoDB, Express.js, and Firebase</span>, implementing authentication and API integration. My projects include a chat app, video-sharing platform, and note-sharing tool.

            In testing, I have developed <span className="text-white">automation frameworks</span> using <span className="text-white">Selenium and PyTest</span>, applying <span className="text-white">Page Object Model (POM)</span> and data-driven testing for better reliability.

            I am looking for opportunities to apply my skills while continuing to learn and improve.
          </p>
        </div>

        {/* Projects section */}
        <div id="projects" className="w-full">
          <h2 className="text-lg mb-6 font-bold">PROJECTS</h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {projects.map((project) => (
              <div 
                key={project.name}
                className="flex flex-col text-start items-start lg:items-center justify-between p-4 rounded-md border border-zinc-700 w-full lg:w-80 h-[500px]" 
              >
                <div className="h-64 w-full overflow-hidden mb-2 rounded-md">
                  <img 
                    src={project.src} 
                    alt={`${project.name} preview`}
                    className="object-cover w-full h-full" 
                  />
                </div>
                
                <h3 className="font-bold bg-yellow-600 px-3 py-2 mt-2 rounded-sm shadow-sm shadow-slate-50 text-start mb-2">
                  {project.name}
                </h3>
    
                <p className="text-gray-300 flex-grow"> 
                  {project.description}
                </p>
    
                <div className="flex flex-row gap-8 justify-center items-center mb-4">
                  {project.techStack.map((icon, index) => (
                    <span 
                      key={index} 
                      className="text-3xl text-red-400"
                    >
                      {icon}
                    </span>
                  ))}
                </div>
    
                <div className="flex flex-row gap-2">
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-2 bg-white hover:bg-black hover:text-white text-black px-3 py-1 rounded-md transition-colors"
                  >
                    Live
                  </a>
    
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mb-2 bg-white hover:bg-black hover:text-white text-black px-3 py-1 rounded-md transition-colors"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Placeholder for Tech Stack section */}
        <div id="tech-stack" className="w-full">
          {/* Tech stack content can be added here */}
        </div>

        {/* Placeholder for Resume section */}
        <div id="resume" className="w-full">
          {/* Resume content can be added here */}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;