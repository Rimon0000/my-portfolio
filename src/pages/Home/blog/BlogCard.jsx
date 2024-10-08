import React from 'react';
import moment from "moment";
import { FaCalendarAlt } from "react-icons/fa";


const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };

const BlogCard = ({item}) => {
    const {_id, image, title, category, date, description} = item;
    const truncatedDescription = truncateText(description, 300);

    return (
        <div className="relative card card-compact bg-base-100 shadow-2xl border hover:border-blue-500 transition-all duration-300" data-aos="zoom-in-left" data-aos-duration="2000">
          <figure><img src={image} alt="Shoes" /></figure>
          <p className="absolute text-tiny top-3 right-3 z-50 bg-white rounded-lg p-1 font-semibold">{category}</p>
          <div className="card-body">
            <h2 className="card-title font-mono text-xl">{title}</h2>
            <p className='text-justify'>{truncatedDescription}</p>
            <hr />
            <div className="card-actions justify-between items-center mt-2">
                   <div className="flex gap-3 items-center text-base font-semibold">
                   <button className='border border-blue-500 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:text-white'>
                   <FaCalendarAlt className='h-[35px] w-[35px] rounded-full p-2'></FaCalendarAlt></button>
                    <p className=" text-slate-500">{moment(new Date(`${date}`)).format('DD MMMM YYYY')}</p>
                    </div>
                <button className="btn btn-sm btn-outline btn-primary rounded-3xl" onClick={()=>document.getElementById(_id).showModal()}>Read More</button>
            </div>
          </div>

          {/* Open the modal using ID.showModal() method */}
          <dialog id={_id} className="modal modal-bottom sm:modal-middle">
            <form method="dialog" className="modal-box">
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="py-4 text-justify font-light text-base">{description}</p>
              <div className="modal-action">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </div>
            </form>
          </dialog>
        </div>
    );
};

export default BlogCard;