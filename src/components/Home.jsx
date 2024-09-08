import React from 'react';
import pic from '../../public/portfolio.png'
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";

function Home() {
  return (
   <>
   <div name="Home" 
   className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 '>
    <div className='flex flex-col md:flex-row '>
    <div className='md:w-1/2 md:mt-24 mt-12 space-y-4 order-2 md:order-1 z-10'>
    <span className='text-xl'>Welcome In My Feed</span>
   <div className='flex space-x-1 text-2xl md:text-4xl'>
   <h1>Hello, I'm a </h1>
   {/* <span className='text-red-700 font-bold'> Developer</span> */}
   <ReactTyped
          className='text-red-700 font-bold'
          strings={["Developer","Programmer","Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
   </div>
   <br />
    <p className='text-justify mb-6'> 
    I'm skilled in front-end and back-end technologies, 
    I create dynamic, responsive websites and applications.
     Proficient in HTML, CSS, JavaScript, and frameworks like React and Node.js,
      I specialize in delivering user-centric, efficient digital solutions.
    </p>
   {/* Social Media icon  */}
 <div className='flex flex-col md:flex-row  justify-between'>
 <div className='space-y-2 text-center mb-4'>
        <h1 className='font-bold'>Available on</h1>
        <ul className='flex space-x-4 items-center justify-center'>
            <li>
               <a href='https://www.instagram.com/dayanand_.01/'
               target='_blank'>
               <FaInstagram className='text-3xl cursor-pointer' />
               </a>
                
            </li>
            <li>
            <a href='https://www.github.com/dayanand7031/'
               target='_blank'>
                <FaGithub className='text-3xl cursor-pointer'/>
                </a>
            </li>
            <li>
               <a href='https://www.linkedin.com/in/daya-nand-66b517224/'
               target='_blank'>
                 <FaLinkedin className='text-3xl cursor-pointer'/>
               </a>
               
            </li>
            <li>
                <a href='https://web.telegram.org/a/'
                target='_blank'> <FaTelegram className='text-3xl cursor-pointer'/></a>
               
            </li>
        </ul>
    </div>
    <div className='space-y-2 text-center'>
    <h1 className='font-bold'>Currently Working on</h1>
    <div className='flex space-x-4 items-center justify-center'>
    <SiMongodb  className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]' />
    <SiExpress  className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
    <RiReactjsLine className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
    <FaNodeJs  className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>

    </div>
    </div>
 </div>
    
   
    </div>
    <div className='md:w-1/2 md:ml-48 md:mt-16 mt-10 order-1 z-10 '>
    <img src={pic} className='md:rounded-full md:w-[470px] md:h-[470px] h-[300px] w-[300px] rounded-full ' alt='' />
    </div>
    </div>
    
   </div>

   <hr />
   </>
  );
}

export default Home;
