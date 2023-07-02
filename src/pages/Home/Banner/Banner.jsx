import React from 'react';
import rimon from "../../../assets/rimon.jpeg"
import {FaGithub, FaLinkedinIn, FaMailBulk } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter'

const Banner = () => {

    return (
        <div className='lg:flex justify-between gap-5 mt-5 pt-5'>
            <div>
                <h2 className='text-4xl font-semibold text-blue-500	'>Hi everyone, I'm </h2>
                <h1 className='text-4xl font-semibold mt-2'>Rimon Ron</h1>
                <div className='flex gap-3 text-4xl mt-2'>
                <h3 className='font-semibold'>A passionate</h3>
                <span style={{ color: 'blue', fontWeight: 'bold' }}>
                <Typewriter
                  words={['Software Engineer', 'MERN Stack Developer', 'Frontend Developer']}
                  loop={5}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
                </span>
                </div>
                <p className='text-3xl font-semibold mt-2'>having an experience of building Modern Web Applications with some cool Libraries and Frameworks.</p>

                <div className='flex gap-6 mt-5'>
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