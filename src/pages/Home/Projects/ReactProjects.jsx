import React from 'react';
import react1 from "../../../assets/projects ss/react1.png"
import react2 from "../../../assets/projects ss/react2.png"
import react3 from "../../../assets/projects ss/react3.png"
import react4 from "../../../assets/projects ss/react4.png"
import react5 from "../../../assets/projects ss/react5.png"
import react6 from "../../../assets/projects ss/react6.png"
import { FaExternalLinkAlt, FaGithub, FaLink } from 'react-icons/fa';

const ReactProjects = () => {
    return (
        <div className='grid lg:grid-cols-3 gap-10'>
            <div>
            <div className="card w-96 bg-base-100 shadow-xl h-[360px]">
              <figure><img src={react1} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">Summer Camp School</h2>
                <div className='flex justify-between'>
                  <div className='grid grid-cols-3 gap-5 text-3xl mt-4'>
                  <a className="tooltip tooltip-bottom" data-tip="Live Site" href="https://summer-camp-7d4d1.web.app/"><FaExternalLinkAlt></FaExternalLinkAlt></a>
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
            <div className="card w-96 bg-base-100 shadow-xl h-[360px]">
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
            <div className="card w-96 bg-base-100 shadow-xl h-[360px]">
              <figure><img src={react3} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">Chef Recipe Hunter</h2>
                <div className='flex justify-between'>
                  <div className='grid grid-cols-3 gap-5 text-3xl mt-4'>
                  <a className="tooltip tooltip-bottom" data-tip="Live Site" href="https://chef-recipe-hunter-clien-ee4d5.web.app/"><FaExternalLinkAlt></FaExternalLinkAlt></a>
                  <a className="tooltip tooltip-bottom" data-tip="Github Client" href="https://github.com/Rimon0000/chef-recipe-hunter-client"><FaGithub></FaGithub></a>
                  <a className="tooltip tooltip-bottom" data-tip="Github Server" href="https://github.com/Rimon0000/chef-recipe-hunter-server"><FaLink></FaLink></a>
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

            <div>
            <div className="card w-96 bg-base-100 shadow-xl h-[360px]">
              <figure><img src={react4} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">Career Hub</h2>
                <div className='flex justify-between'>
                  <div className='grid grid-cols-3 gap-5 text-3xl mt-4'>
                  <a className="tooltip tooltip-bottom" data-tip="Live Site" href="https://dapper-puffpuff-774bf6.netlify.app/"><FaExternalLinkAlt></FaExternalLinkAlt></a>
                  <a className="tooltip tooltip-bottom" data-tip="Github Client" href="https://github.com/Rimon0000/OpportunityHub"><FaGithub></FaGithub></a>
                  </div>
                  <div>
                  <button className="btn btn-secondary btn-outline" onClick={()=>window.my_modal_3.showModal()}>Details</button>
                  </div>
                </div>
              </div>
            </div>
            {/* Open the modal using ID.showModal() method */}
            <dialog id="my_modal_3" className="modal modal-bottom sm:modal-middle">
              <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Project Name: OpportunityHub</h3>
                <p className="py-4 font-semibold">Features: </p>
                  <li>A Features Job section: There are many Job's in this category.</li>
                  <li>View Job Details section: User can see Job details and apply the job.</li>
                  <li>Applied Job Section: After apply the job user can see his all applied job in this section</li>
                  <li>User can filter by remote or onsite job</li>
                <div className="modal-action">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </div>
              </form>
            </dialog>
            </div>

            <div>
            <div className="card w-96 bg-base-100 shadow-xl h-[360px]">
              <figure><img src={react5} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">Blog Site</h2>
                <div className='flex justify-between'>
                  <div className='grid grid-cols-3 gap-5 text-3xl mt-4'>
                  <a className="tooltip tooltip-bottom" data-tip="Live Site" href="https://aesthetic-chebakia-6bc018.netlify.app/"><FaExternalLinkAlt></FaExternalLinkAlt></a>
                  <a className="tooltip tooltip-bottom" data-tip="Github Client" href="https://github.com/Rimon0000/Knowledge-Cafe"><FaGithub></FaGithub></a>
                  </div>
                  <div>
                  <button className="btn btn-secondary btn-outline" onClick={()=>window.my_modal_4.showModal()}>Details</button>
                  </div>
                </div>
              </div>
            </div>
            {/* Open the modal using ID.showModal() method */}
            <dialog id="my_modal_4" className="modal modal-bottom sm:modal-middle">
              <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Project Name: Knowledge Cafe</h3>
                <p className="py-4 font-semibold">Features: </p>
                  <li>Blog section: There are many Blog's in this Section.</li>
                  <li>User can bookmarked his blog.</li>
                  <li>User can Mark as read blogs.</li>
                <div className="modal-action">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </div>
              </form>
            </dialog>
            </div>

            <div>
            <div className="card w-96 bg-base-100 shadow-xl h-[360px]">
              <figure><img src={react6} alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">Bistro Boss</h2>
                <div className='flex justify-between'>
                  <div className='grid grid-cols-3 gap-5 text-3xl mt-4'>
                  <a className="tooltip tooltip-bottom" data-tip="Live Site" href=""><FaExternalLinkAlt></FaExternalLinkAlt></a>
                  <a className="tooltip tooltip-bottom" data-tip="Github Client" href="https://github.com/Rimon0000/Bistro-boss-client"><FaGithub></FaGithub></a>
                  <a className="tooltip tooltip-bottom" data-tip="Github Server" href="https://github.com/Rimon0000/Bristo-boss-server"><FaLink></FaLink></a>
                  </div>
                  <div>
                  <button className="btn btn-secondary btn-outline" onClick={()=>window.my_modal_8.showModal()}>Details</button>
                  </div>
                </div>
              </div>
            </div>
            {/* Open the modal using ID.showModal() method */}
            <dialog id="my_modal_8" className="modal modal-bottom sm:modal-middle">
              <form method="dialog" className="modal-box">
                <h3 className="font-bold text-lg">Project Name: Bistro Boss</h3>
                <p className="py-4 font-semibold">Features: </p>
                  <li>Menu section: Where shows our recent menu.</li>
                  <li>Order Food section: Where shows our different categories food. user can order food in this section.</li>
                  <li>After add to cart food. the food item shows Add to Cart section. Where user can payment with card system.</li>
                  <li>Admin Dashboard: Admin can add food item in the food menu and manage the system.</li>
                  <li>User Dashboard: User can see his order item and if he wants to remove any order item, he can remove it.</li>

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