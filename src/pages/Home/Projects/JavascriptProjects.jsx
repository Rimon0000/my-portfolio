import React from 'react';
import javascript1 from "../../../assets/projects ss/javascript1.png"
import javascript2 from "../../../assets/projects ss/javascript2.png"
import { FaExternalLinkAlt, FaGithub, FaLink } from 'react-icons/fa';


const JavascriptProjects = () => {
    return (
        <div className='grid lg:grid-cols-3 gap-10'>
            <div>
            <div className="card w-96 bg-base-100 shadow-xl h-[360px] mt-10">
              <figure><img src={javascript1} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">AI Universe Hub</h2>
                <div className='flex justify-between'>
                  <div className='grid grid-cols-3 gap-5 text-3xl mt-4'>
                  <a className="tooltip tooltip-bottom" data-tip="Live Site" href="https://bucolic-snickerdoodle-0d03ca.netlify.app/"><FaExternalLinkAlt></FaExternalLinkAlt></a>
                  <a className="tooltip tooltip-bottom" data-tip="Github Client" href="https://github.com/Rimon0000/AI-Universe-Hub"><FaGithub></FaGithub></a>
                  </div>
                  <div>
                  <button className="btn btn-secondary btn-outline" onClick={()=>window.my_modal_6.showModal()}>Details</button>
                  </div>
                </div>
              </div>
            </div>
            {/* Open the modal using ID.showModal() method */}
            <dialog id="my_modal_6" className="modal modal-bottom sm:modal-middle">
              <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Project Name: AI Universe Hub</h3>
                <p className="py-4 font-semibold">Features: </p>
                  <li>There are many AI technology Package's category.</li>
                  <li>User can see Package details like Features, Integrations and Accuracy</li>
                  <li>User can filtering Packages Sort by Date. </li>

                <div className="modal-action">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </div>
              </form>
            </dialog>
            </div>

            <div>
            <div className="card w-96 bg-base-100 shadow-xl h-[360px] mt-10">
              <figure><img src={javascript2} alt="Geometry Genius" /></figure>
              <div className="card-body">
                <h2 className="card-title">Geometry Genius</h2>
                <div className='flex justify-between'>
                  <div className='grid grid-cols-3 gap-5 text-3xl mt-4'>
                  <a className="tooltip tooltip-bottom" data-tip="Live Site" href="https://inquisitive-capybara-318ef5.netlify.app/"><FaExternalLinkAlt></FaExternalLinkAlt></a>
                  <a className="tooltip tooltip-bottom" data-tip="Github Client" href="https://github.com/Rimon0000/Geometry-Genius"><FaGithub></FaGithub></a>
                  </div>
                  <div>
                  <button className="btn btn-secondary btn-outline" onClick={()=>window.my_modal_7.showModal()}>Details</button>
                  </div>
                </div>
              </div>
            </div>
            {/* Open the modal using ID.showModal() method */}
            <dialog id="my_modal_7" className="modal modal-bottom sm:modal-middle">
              <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Project Name: Geometry Genius</h3>
                <p className="py-4 font-semibold">Features: </p>
                  <li>This is a Geometry related field calculation site .</li>
                  <li>User can calculate Triangle, Rectangle, Parallelogram, Rhombus, Pentagon, Ellipse</li>
                  <li>User can input Triangle and Rectangle value and others field has default value. </li>
                  <li>A area calculation section. After calculate the any field, the output shows in area calculation section.</li>

                <div className="modal-action">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </div>
              </form>
            </dialog>
            </div>
            
        </div>
    );
};

export default JavascriptProjects;