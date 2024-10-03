import React from 'react';
import { FaExternalLinkAlt, FaGithub, FaLink } from 'react-icons/fa';


const ProjectCard = ({item}) => {
    const {_id, image, title, live, client,server, description, technology, features } = item
    const featuresArray = features.split('.').filter(feature => feature.trim() !== '');

    return (
        <div className=''>
          <div className="card bg-base-100 shadow-xl  border hover:border-blue-500 transition-all duration-300" data-aos="zoom-in-left" data-aos-duration="2000">
            <figure><img className='h-[200px]' src={image} alt="Image" /></figure>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p className='text-justify'>{description}</p>
              <hr />
              <div className='flex justify-between mt-4'>
                <div className='grid grid-cols-3 gap-5 text-3xl'>
                    <a className="tooltip tooltip-bottom" data-tip="Live Site" href={live} target="_blank">
                        <button className='border border-primary rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white'>
                        <FaExternalLinkAlt className='h-[40px] w-[40px] rounded-full p-2'></FaExternalLinkAlt></button>
                    </a>
                    <a className="tooltip tooltip-bottom" data-tip="Github Client" href={client} target="_blank">
                      <button className='border border-primary rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white'>
                      <FaGithub className='h-[40px] w-[40px] rounded-full p-2'></FaGithub></button>
                    </a>
                    <a className="tooltip tooltip-bottom" data-tip="Github Server" href={server} target="_blank">
                      <button className='border border-primary rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-white'>
                      <FaLink className='h-[40px] w-[40px] rounded-full p-2'></FaLink></button>
                    </a>
                </div>
                <div>
                <button className="btn btn-secondary btn-outline btn-sm rounded-3xl py-4 text-center place-content-center" onClick={()=>document.getElementById(_id).showModal()}>Details</button>
                </div>
              </div>
            </div>
          </div>
          {/* Open the modal using ID.showModal() method */}
          <dialog id={_id} className="modal modal-bottom sm:modal-middle">
            <form method="dialog" className="modal-box">
              <h3 className="font-bold text-lg">Project Name: {title}</h3>
              <p className="py-4 text-justify">{description}</p>
              {/* <p className="py-4 font-semibold">Technology: </p>
                <li>{technology}</li> */}
              <p className="py-4 font-semibold">features: </p>
              <div>
                {featuresArray.map((feature, index) => (
                  <li key={index}>{feature}.</li>
                ))}
              </div>
              <div className="modal-action">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </div>
            </form>
          </dialog>   
        </div>
        
    );
};

export default ProjectCard;