import React from 'react'

function Home() {
  return (
    <div className='h-auto p-10 w-full flex flex-col sm:flex-row gap-5 justify-center items-center bg-blue-300'>
      <div className='flex justify-center items-center shadow-2xl'>
        <img src="src/assets/newt.png" alt="Profile" className='h-40 w-44 object-contain' />
      </div>
      <div className='w-full sm:w-[80%] p-5 flex justify-center items-center text-center flex-col gap-5'>
        <h1 className="text-4xl font-bold">Hi, I am Ashutosh</h1>
        <p className='text-base text-center font-semibold'>
        A dedicated frontend developer with solid knowledge in JavaScript, React.js, and Tailwind CSS, along with hands-on experience in building interactive user interfaces. Currently expanding into backend technologies to become a more versatile full-stack developer.        </p>
        <a
          href="/assetts/Ashutosh_Thakur_MERN_dev.pdf"
          download
          className="bg-blue-800 text-white px-5 py-3 rounded-xl"
        >
          Download Resume
        </a>
      </div>
    </div>
  )
}

export default Home
