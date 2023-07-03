import React from 'react';
import { FaUserAlt } from 'react-icons/fa';
import about from "../../../assets/rimon-about.jpeg"

const About = () => {
    return (
        <div>
            <h2 className=' flex gap-5 text-center text-4xl font-bold mt-10 p-5 border-b-4 border-gray-500 w-1/2 mx-auto' style={{paddingLeft:"230px"}}><FaUserAlt></FaUserAlt> About <span className='text-blue-500'>Me</span></h2>
           <div className='lg:flex gap-5 mt-20'>
            <div className='w-1/2' data-aos="fade-right" data-aos-duration="2000">
            <div className="avatar w-10/12">
              <div className=" rounded-xl ml-20">
                <img src={about} />
              </div>
            </div>
            </div>
            <div className='w-1/2 mt-14' data-aos="fade-left" data-aos-duration="2000">
                <h2 className='text-3xl font-bold'>I'm Rimon Ron</h2>
                <p className='font-bold m-1'>Mern Stack Developer</p>
                <p className='font-semibold mr-20'>As a Junior MERN Developer, I have a solid foundation in building web applications using the MERN stack. 
                    With a focus on Javascript, React.js, MongoDB, Express.js, and Node.js, I have gained hands-on 
                    experience in developing responsive and interactive user interfaces. 
                    My skills include translating design mockups into high-quality code, 
                    implementing user authentication and authorization features, 
                and troubleshooting and debugging to optimize performance.</p>
                <p className='mt-4 font-bold'>Email: <span>rimonron.ad@gmail.com</span></p>
                <div className='mt-5'>
                <a className="btn btn-outline btn-primary mr-3" href="https://drive.google.com/uc?id=1WEuRNXpFmOjjsQfMcUdUlXtl5jbkQWmv&export=download"download>Resume</a>
                </div>
            </div>
           </div>

        </div>
    );
};

export default About;