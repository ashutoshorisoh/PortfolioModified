import React from 'react'
import { BiMoon } from 'react-icons/bi'

function Entire() {
  return (
    <div className='flex flex-col justify-center items-start  gap-5'>
        <div className='h-20 p-5 border border-transparent  flex shadow-md rounded-3xl justify-between items-center gap-20 border-black   mt-5 pl-40 pr-40 w-[80%] ml-[10%]'>
        <div className='rounded-full h-10 w-10 p-5  bg-black shadow-md '>
              <img src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg" className=' w-full h-full' alt="" />
         </div>
         
         <div className='flex gap-20 font-semibold'>
            <button>Introduction</button>
            <button>About</button>
            <button>Projects</button>
            <button>Mystack</button>
            <button>Blogs</button>
         </div>

         <div className=' flex font-semibold justify-center items-center gap-5 '>
            <button className='bg-black text-white rounded-full pt-2 pb-2 pl-5 pr-5 shadow-md shadow-slate-400'>Resume</button>
            <BiMoon className='text-2xl'></BiMoon>
         </div>
            
        </div>

        {/* Intro */}
        <div className='flex flex-row  text-black left-0 font-semibold text-6xl ml-40 mr-40 mt-5'>
           <div>
           <h1>Hello👋🏻, I'm <p>Ashutosh Thakur</p></h1>
           <h2 className='text-3xl mt-3 text-slate-600 font-thin text-balance'> A dedicated frontend developer with solid knowledge in JavaScript, React.js, and Tailwind CSS, along with hands-on experience in building interactive user interfaces. Currently expanding into backend technologies to become a full-stack developer.</h2>
           
            </div>

            <div className='h-[250px] w-[900px] rounded-3xl overflow-hidden bg-black shadow-xl border shadow-black'>
                <img src="https://i.pinimg.com/736x/c6/a3/3c/c6a33cc06a11df2bc1eeeca10e279861.jpg" alt="" className='object-contain' />

                

            </div> 
            
          

        </div>
    </div>
  )
}

export default Entire