import React from 'react';
import rimon from "../../../assets/rimon.jpeg"
import {FaGithub, FaLinkedinIn, FaMailBulk } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter'
import {motion} from "framer-motion"
import "./Banner.css"



const intro ={
    hidden: {opacity: 0},
    visible: {opacity: 1, transition: {
        duration: 0.5,
        staggerChildren: 0.25,
        delayChildren: 1
    }},
}

const introChildren = {
    hidden: {opacity: 0, y: -300},
    visible: {opacity: 1, y: 0, transition: {
        duration: 1.3,
        type: "spring",
        bounce: 0.5
    }}
}

const image = {
    initial: {y: 0, rotate:360, transition: {duration: 10}},
    animate: {y: 20, transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        rotate: 0
    }}
}

const Banner = () => {

    return (
        <div className='lg:flex justify-between mt-5 pt-5 mb-28 w-[90%] px-10 mx-auto'>
            <motion.div className='my-5 lg:w-[50%] px-2 banner lg:pt-10 md:pt-10 sm:pt-1' variants={intro} initial="hidden" animate="visible">
                <motion.h2 variants={introChildren} className='text-6xl font-bold'>Hi, I am </motion.h2>
                <motion.h1 variants={introChildren} className='text-6xl font-bold my-5'>Rimon Uddin</motion.h1>
                <div className='flex gap-3 text-3xl'>
                <motion.h3 variants={introChildren} className='font-semibold'>A passionate</motion.h3>
                <motion.span variants={introChildren} style={{ color: 'blue', fontWeight: 'bold' }}>
                <Typewriter
                  words={['Tech Enthusiast', 'Software Engineer', 'MERN Stack Developer', 'Frontend Developer']}
                  loop={5}
                  cursor
                  cursorStyle='_'
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
                </motion.span>
                </div>

                <div className='flex gap-6 mt-10'>
                    <a href="https://github.com/Rimon0000"><button className='border border-primary rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white'>
                    <FaGithub className='h-[43px] w-[43px] rounded-full p-2'></FaGithub></button>
                    </a>

                    <a href="https://www.linkedin.com/in/rimon-uddin-79b858238/"><button className='border border-primary rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white'>
                    <FaLinkedinIn className='h-[43px] w-[43px] rounded-full p-2'></FaLinkedinIn></button>
                    </a>
                    <a href="mailTo:rimonron.ad@gmail.com"><button className='border border-primary rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white'>
                    <FaMailBulk className='h-[43px] w-[43px] rounded-full p-2'></FaMailBulk></button>
                    </a>
                </div>
            </motion.div>

            <motion.div variants={image} initial="initial" animate="animate" className="avatar lg:w-[40%] lg:pr-8 mt-4 mx-auto">
                <div className="w-full max-h-[400px] rounded-full">
                  <img src={rimon} />
                </div>
            </motion.div>
        </div>
    );
};

export default Banner;