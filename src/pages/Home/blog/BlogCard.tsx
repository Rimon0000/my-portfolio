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
        <div className="relative card card-compact bg-base-100 shadow-xl">
          <figure><img src={image} alt="Shoes" /></figure>
          <p className="absolute text-tiny top-3 right-3 z-50 bg-white rounded-lg p-1 font-semibold">{category}</p>
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p className=''>{truncatedDescription}</p>
            <hr />
            <div className="card-actions justify-between mt-2">
                   <div className="flex gap-3 items-center text-base font-semibold">
                    <FaCalendarAlt />
                    <p className=" text-slate-500">{moment(new Date(`${date}`)).format('DD MMMM YYYY')}</p>
                    </div>
                <button className="btn btn-sm btn-outline btn-primary">Details</button>
            </div>
          </div>
        </div>
    );
};

export default BlogCard;