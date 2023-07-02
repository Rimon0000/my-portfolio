import React from 'react';
import { FaGithub, FaLinkedinIn, FaMailBulk } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-base-200 rounded-lg'>
            <div className="footer p-10">
               <div>
                <h2 className='font-semibold text-3xl'>Rimon Ron</h2>
                 <p className='font-semibold'>Your Reliable Developer</p>
               </div> 
               <div>
                 <span className="footer-title text-2xl">Social</span> 
                 <div className="grid grid-flow-col gap-5">
                <a href="https://github.com/Rimon0000"><FaGithub className='h-[43px] w-[43px] bg-slate-200 rounded-full p-1'></FaGithub></a>
                <a href="https://www.linkedin.com/in/rimon-uddin-79b858238/"><FaLinkedinIn className='h-[43px] w-[43px] bg-slate-200 rounded-full p-1'></FaLinkedinIn></a>
                <a href="mailTo:rimonron.ad@gmail.com"><FaMailBulk className='h-[43px] w-[43px] bg-slate-200 rounded-full p-1'></FaMailBulk></a>
                 </div>
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