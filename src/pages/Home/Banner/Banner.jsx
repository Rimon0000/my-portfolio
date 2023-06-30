import React from 'react';
import rimon from "../../../assets/rimon.jpeg"
import {FaGithub, FaLinkedinIn, FaMailBulk } from 'react-icons/fa';

const Banner = () => {
    return (
        <div className='flex justify-between gap-5 mt-5 pt-5'>
            <div className='w-1/2'>
                <h2 className='text-3xl font-semibold'>Hi everyone, I'm </h2>
                <h1 className='text-4xl font-semibold'>Rimon Ron</h1>
                <h3 className='text-3xl'>A passionate Software Engineer</h3>
                <p className='text-3xl'>having an experience of building Modern Web Applications with some cool Libraries and Frameworks.</p>

                <div className='flex gap-5 mt-5'>
                <a href="https://github.com/Rimon0000"><FaGithub className='h-[43px] w-[43px] bg-slate-200 rounded-full p-1'></FaGithub></a>
                <a href="https://www.linkedin.com/in/rimon-uddin-79b858238/"><FaLinkedinIn className='h-[43px] w-[43px] bg-slate-200 rounded-full p-1'></FaLinkedinIn></a>
                <a href="mailTo:rimonron.ad@gmail.com"><FaMailBulk className='h-[43px] w-[43px] bg-slate-200 rounded-full p-1'></FaMailBulk></a>
                </div>
                <div className='mt-5'>
                <a className="btn btn-outline btn-primary mr-3" href="https://drive.google.com/uc?id=1WEuRNXpFmOjjsQfMcUdUlXtl5jbkQWmv&export=download"download>Resume</a>
                <a className="btn btn-outline btn-primary mr-3" href="">Contact Me</a>
                </div>
            </div>
            <div className="avatar">
                <div className="w-full h-[400px] rounded-full">
                  <img className='mr-20' src={rimon} />
                </div>
            </div>
        </div>
    );
};

export default Banner;