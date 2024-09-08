import React, { useState } from 'react';
import pic from '../../public/Portfolio.png'
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import {Link} from 'react-scroll'
function Navbar() {
    
    // Menu handle
    const [menu, setMenu]=useState(true);
   
    const NavItems= [
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Portfolio"
        },
        {
            id:4,
            text:"Experience"
        },
        {
            id:5,
            text:"Contact"
        }
    ]
    
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 shadow-md h-16 fixed top-0 left-0 right-0 z-50 bg-white'>
    <div className='flex justify-between h-16 items-center'>
        <div className='flex space-x-2'>
            <img src={pic} className='h-12 w-12 rounded-full' alt='' />
            <h1 className='font-semibold text-xl cursor-pointer'>Dayanand
            <p className='text-sm'>Web Developer</p>
            </h1> 
        </div>
        {/* Desktop Navbar */}
        <div>
            <ul className='hidden md:flex space-x-8 '>
              {NavItems.map(({id,text})=>(
               <li key={id} className='hover:scale-105 duration-200 cursor-pointer'>
                <Link to={text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass='active'>
                {text}
                </Link>
                </li>
              ))}
            </ul>
           <div onClick={()=>setMenu(!menu)} className='md:hidden'>
            {menu? <AiOutlineMenu size={24} /> :<IoMdClose size={24} />}
           </div> 
           
        </div>
    </div>
    {/* Mobile Navbar */}
    { !menu && (
      <div className='bg-white'>
      <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl '>
      {NavItems.map(({id,text})=>(
               <li key={id} className='hover:scale-105 duration-200  font-semibold cursor-pointer'> 
               <Link to={text}
               onClick={()=>setMenu(!menu)}
               smooth={true}
               duration={500}
               offset={-70}
               activeClass='active'>
               {text}
               </Link></li>
              ))}
              </ul>
      </div>
    )
    }
   
    
   </div>
   </>
  );
}

export default Navbar;
