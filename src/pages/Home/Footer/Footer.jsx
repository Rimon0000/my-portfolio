import React from 'react';
import { FaGithub, FaLinkedinIn, FaMailBulk } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {

  const navOptions = (
    <>
      <li>
        <Link className="font-semibold" to='/'>Home</Link>
      </li>
      <li>
      <Link onClick={() => handleMenuItemClick('skills')} className="font-semibold" to='#Skills'>Skills</Link>
      </li>
      <li>
        <Link onClick={() => handleMenuItemClick('projects')} className="font-semibold" to='#Projects'>Projects</Link>
      </li>
      <li>
        <Link onClick={() => handleMenuItemClick('blog')} className="font-semibold" to='#Blog'>Blog</Link>
      </li>
      <li>
        <Link onClick={() => handleMenuItemClick('contact')} className="font-semibold" to='#Contact'>Contact</Link>
      </li>
    </>
  );  

  
    return (
        <div className='bg-black bg-opacity-80 lg:text-white'>
            <div className="footer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between p-10">
               <div>
                <h2 className='font-semibold text-3xl'>Rimon Ron</h2>
                 <p className='font-semibold'>Your Reliable Developer</p>
               </div> 

               <div>
                 <span className="footer-title text-2xl">Social</span> 
                 <div className="grid grid-flow-col gap-5">
                <a href="https://github.com/Rimon0000"><FaGithub className='h-[43px] w-[43px] bg-slate-600 rounded-full p-1'></FaGithub></a>
                <a href="https://www.linkedin.com/in/rimon-uddin-79b858238/"><FaLinkedinIn className='h-[43px] w-[43px] bg-slate-600 rounded-full p-1'></FaLinkedinIn></a>
                <a href="mailTo:rimonron.ad@gmail.com"><FaMailBulk className='h-[43px] w-[43px] bg-slate-600 rounded-full p-1'></FaMailBulk></a>
                 </div>
               </div>

               <div>
                 <ul>
                   <li>{navOptions}</li>
                 </ul>
               </div>
            </div>

            <div className="text-center p-4 ">
               <div>
                 <p className='font-semibold'>Copyright © 2023 - All right reserved by Rimon Ron</p>
               </div>
            </div>
            
        </div>
    );
};

export default Footer;