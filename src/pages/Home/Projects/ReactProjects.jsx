import React from 'react';
import react1 from "../../../assets/projects ss/react1.png"
import react2 from "../../../assets/projects ss/react2.png"
import react3 from "../../../assets/projects ss/react3.png"
import { FaExternalLinkAlt, FaGithub, FaLink } from 'react-icons/fa';

const ReactProjects = () => {
    return (
        <div className='grid lg:grid-cols-3'>
            <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure><img src={react1} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">Summer Camp School</h2>
                <div className='flex justify-between'>
                  <div className='grid grid-cols-3 gap-5 text-3xl mt-4'>
                  <a className="tooltip tooltip-bottom" data-tip="Live Site" href=""><FaExternalLinkAlt></FaExternalLinkAlt></a>
                  <a className="tooltip tooltip-bottom" data-tip="Github Client" href="https://github.com/Rimon0000/summer-camp-client"><FaGithub></FaGithub></a>
                  <a className="tooltip tooltip-bottom" data-tip="Github Server" href="https://github.com/Rimon0000/summer-camp-server"><FaLink></FaLink></a>
                  </div>
                  <div>
                  <button className="btn btn-secondary btn-outline" onClick={()=>window.my_modal_5.showModal()}>Details</button>
                  </div>
                </div>
              </div>
            </div>
            {/* Open the modal using ID.showModal() method */}
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
              <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Project Name: Real Champions</h3>
                <p className="py-4 font-semibold">Features: </p>
                  <li>Classes section. There are many types of Classes in this category.</li>
                  <li>Instructors Section. This category we see our top instructors.</li>
                  <li>Student Dashboard: sections are My Selected Classes, My Enrolled Classes, Payment, payment history page</li>
                  <li>Admin Dashboard: sections are Manage Classes, Manage Users.</li>
                  <li>Instructors Dashboard: sections are Add a Class, My classes.</li>

                <div className="modal-action">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </div>
              </form>
            </dialog>
            </div>

            <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure><img src={react2} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">Toy Store</h2>
                <div className='flex justify-between'>
                  <div className='grid grid-cols-3 gap-5 text-3xl mt-4'>
                  <a className="tooltip tooltip-bottom" data-tip="Live Site" href="https://toy-client-808e8.web.app/"><FaExternalLinkAlt></FaExternalLinkAlt></a>
                  <a className="tooltip tooltip-bottom" data-tip="Github Client" href="https://github.com/Rimon0000/toy-store-client"><FaGithub></FaGithub></a>
                  <a className="tooltip tooltip-bottom" data-tip="Github Server" href="https://github.com/Rimon0000/tiy-store-server"><FaLink></FaLink></a>
                  </div>
                  <div>
                  <button className="btn btn-secondary btn-outline" onClick={()=>window.my_modal_1.showModal()}>Details</button>
                  </div>
                </div>
              </div>
            </div>
            {/* Open the modal using ID.showModal() method */}
            <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle">
              <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Project Name: Heros Town</h3>
                <p className="py-4 font-semibold">Features: </p>
                  <li>Different types of toys categories.</li>
                  <li>Add Toy Section: Seller can add his toy but seller first register or login first .</li>
                  <li>My Toys section: Where Seller can see his toys, also seller can modify his toys details</li>
                  <li>All Toys section: Here shows all seller Toys</li>
                <div className="modal-action">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </div>
              </form>
            </dialog>
            </div>

            <div>
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure><img src={react3} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">Chef Recipe Hunter</h2>
                <div className='flex justify-between'>
                  <div className='grid grid-cols-3 gap-5 text-3xl mt-4'>
                  <a className="tooltip tooltip-bottom" data-tip="Live Site" href="https://chef-recipe-hunter-clien-ee4d5.web.app/"><FaExternalLinkAlt></FaExternalLinkAlt></a>
                  <a className="tooltip tooltip-bottom" data-tip="Github Client" href="https://github.com/Rimon0000/chef-recipe-hunter-server"><FaGithub></FaGithub></a>
                  <a className="tooltip tooltip-bottom" data-tip="Github Server" href="https://github.com/Rimon0000/tiy-store-server"><FaLink></FaLink></a>
                  </div>
                  <div>
                  <button className="btn btn-secondary btn-outline" onClick={()=>window.my_modal_2.showModal()}>Details</button>
                  </div>
                </div>
              </div>
            </div>
            {/* Open the modal using ID.showModal() method */}
            <dialog id="my_modal_2" className="modal modal-bottom sm:modal-middle">
              <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Project Name: Cookiteer</h3>
                <p className="py-4 font-semibold">Features: </p>
                  <li>A Chef section: There are many types of Chef's in this category.</li>
                  <li>View Recipe section: View recife have a banner and three recife card.</li>
                  <li>User authentication system.</li>
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

export default ReactProjects;