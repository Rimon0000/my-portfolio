import React from 'react';
import { FaCloudDownloadAlt, FaUserAlt, FaUserGraduate } from 'react-icons/fa';
import about from "../../../assets/rimon-about.jpeg"

const About = () => {
    return (
        <div className='w-[90%] mx-auto'>
            <h2 className='flex gap-5 text-center text-4xl font-bold p-5 border-b-4 border-gray-500 justify-center mx-auto w-7/12' ><FaUserAlt></FaUserAlt> About <span className='text-blue-500'>Me</span></h2>
           <div className='lg:flex md:flex gap-5 mt-20'>
            <div className='lg:w-1/2 md:w-1/2' data-aos="fade-right" data-aos-duration="2000">
            <div className="avatar">
              <div className=" rounded-xl  px-5 mb-5">
                <img className='rounded-lg max-h-[500px]' src={about} />
              </div>
            </div>
            </div>

            <div className='lg:w-1/2 md:w-1/2 px-5 text-justify' data-aos="fade-left" data-aos-duration="2000">
                <h2 className='text-3xl font-bold'>I'm Rimon Ron</h2>
                <p className='font-bold m-1'>Mern Stack Developer</p>
                <p className='font-semibold lg:mr-20'>As a Junior MERN Developer, I have a solid foundation in building web applications using the MERN stack. 
                    With a focus on Javascript, React.js, MongoDB, Express.js, and Node.js, I have gained hands-on 
                    experience in developing responsive and interactive user interfaces. 
                    My skills include translating design mockups into high-quality code, 
                    implementing user authentication and authorization features, 
                    and troubleshooting and debugging to optimize performance.</p>
                <div className='flex items-center gap-3 mt-5'>
                    <img className='w-[45px] h-[45px]' src="https://i.ibb.co/X8NkhDT/icon.png" alt="" />
                    <h2 className='text-3xl font-semibold'>Education</h2>
                </div>
                <div className='flex items-center gap-3 mt-3'>
                     <FaUserGraduate className='w-[30px] h-[30px]'></FaUserGraduate>
                    <div>
                        <h3 className='text-lg font-semibold'>BSc in Computer Science & Engineering</h3>
                        <p>International Islamic University University(2018-2022)</p>
                    </div>
                </div>

                <div className='mt-5'>
                <a className="btn btn-outline rounded-3xl mr-3" href="https://drive.google.com/uc?id=1II0-6LZC0nkZdNBaCS6KgbHaKtEPVHPX&export=download"download>Resume
                <FaCloudDownloadAlt className='w-[20px] h-[20px]'></FaCloudDownloadAlt>
                </a>
                </div>
                
            </div>
           </div>
        </div>
    );
};

export default About;