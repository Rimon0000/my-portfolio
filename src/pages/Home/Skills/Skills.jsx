import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => {
    return (
        <div>
            <h2 className='text-center text-4xl font-bold m-5 p-5 border-b-4 border-gray-500 w-1/2 mx-auto'>My Skills</h2>
            <div className='grid lg:grid-cols-2 gap-5 mt-5'>
                <div>
                    <h2 className='text-2xl'>HTML</h2>
                    <ProgressBar completed={90}></ProgressBar>  
                </div>
                <div>
                    <h2 className='text-2xl'>CSS</h2>
                    <ProgressBar completed={90}></ProgressBar>  
                </div> 
                <div>
                    <h2 className='text-2xl'>Tailwind CSS</h2>
                    <ProgressBar completed={80}></ProgressBar>  
                </div> 
                <div>
                    <h2 className='text-2xl'>Bootstrap</h2>
                    <ProgressBar completed={80}></ProgressBar>  
                </div> 
                <div>
                    <h2 className='text-2xl'>Javascript</h2>
                    <ProgressBar completed={75}></ProgressBar>  
                </div>
                <div>
                    <h2 className='text-2xl'>React</h2>
                    <ProgressBar completed={70}></ProgressBar>  
                </div>
                <div>
                    <h2 className='text-2xl'>Node Js</h2>
                    <ProgressBar completed={50}></ProgressBar>  
                </div>
                <div>
                    <h2 className='text-2xl'>Express Js</h2>
                    <ProgressBar completed={50}></ProgressBar>  
                </div>
                <div>
                    <h2 className='text-2xl'>MongoDB</h2>
                    <ProgressBar completed={55}></ProgressBar>  
                </div>
                <div>
                    <h2 className='text-2xl'>PHP</h2>
                    <ProgressBar completed={40}></ProgressBar>  
                </div>
                <div>
                    <h2 className='text-2xl'>Laravel</h2>
                    <ProgressBar completed={50}></ProgressBar>  
                </div>
                <div>
                    <h2 className='text-2xl'>MySQL</h2>
                    <ProgressBar completed={40}></ProgressBar>  
                </div> 
            </div>
        </div>
    );
};

export default Skills;