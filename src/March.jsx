import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


function March() {
  return (
    <div className=' h-screen w-full flex lg:flex-row flex-col'>

        <div 
        id="first"
        className='w-full lg:w-1/2 h-full  bg-red-950 flex flex-col gap-4 justify-center items-start
        p-10 text-white lg:sticky'
        >
            <h1
            className='lg:text-5xl text-3xl text-yellow-200 font-bold mb-[-10px]'
            >
                Ashutosh Thakur
            </h1>

            <p
            className='text-gray-400 text-xl lg:text-3xl mb-[-8px] italic'
            >
            I code to cope
            </p>

            <p
            className='whitespace-normal lg:text-xl text-lg text-slate-200'
            >
                Let's talk straight, I know frontend developement and automation testing
            </p>

            <ul
            className='flex flex-col mt-1-'
            >
                <li>
                    <button
                    className='text-lg font-thin '
                    >
                        -----About
                    </button>
                </li>

                  
                <li>
                    <button
                    className='text-lg font-thin '
                    >
                        -----Projects
                    </button>
                </li>

                <li>
                    <button
                    className='text-lg font-thin '
                    >
                        -----Tech Stack
                    </button>
                </li>

                <li>
                    <button
                    className='text-lg font-thin '
                    >
                        -----Resume
                    </button>
                </li>
            </ul>

            <div
            className="flex flex-row lg:mt-20 mt-2 gap-4"
            >
                <a 
                href="https://github.com/ashutoshorisoh"
                className='lg:text-3xl text-xl'
                >
                    <FaGithub/>
                </a>

                <a 
                href="https://www.linkedin.com/in/ashutosh-thakur-5a3b32254/"
                className='lg:text-3xl text-xl'
                >
                    <FaLinkedin/>
                </a>

                <a 
                href="https://x.com/ashutoshorisoh"
                className='lg:text-3xl text-xl'
                >
                    <FaXTwitter/>
                </a>

            
            </div>


        </div>

        <div
        id="second"
        className='w-full lg:w-1/2 lg:mt-0 mt-[-30px] bg-red-950 flex flex-col gap-4 justify-center items-start
        p-10 text-white lg:overflow-y-auto'
        >
            <div id="about">
                <h1
                className='lg:hidden text-lg mb-2 font-bold'
                >
                    ABOUT ME
                </h1>
                <p

                className='lg:text-2xl text-gray-400 '
                >
                  I have knowledge in frontend development and automation testing, working with technologies like <span className='text-white'>JavaScript, React.js, Next.js, Python</span>, and <span className='text-white'>Selenium WebDriver</span>.

                  I have built full-stack applications using <span className='text-white'>MongoDB, Express.js, and Firebase</span>, implementing authentication and API integration. My projects include a chat app, video-sharing platform, and note-sharing tool.

                  In testing, I have developed <span className='text-white'>automation frameworks</span> using <span className='text-white'>Selenium and PyTest</span>, applying <span className='text-white'>Page Object Model (POM)</span> and data-driven testing for better reliability.

                  I am looking for opportunities to apply my skills while continuing to learn and improve.
                </p>
            </div>

        </div>
        
    </div>
  )
}

export default March