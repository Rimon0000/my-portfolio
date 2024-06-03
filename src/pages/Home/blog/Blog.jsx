import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const Blog = () => {
    const [data, setData] = useState([])
    useEffect(() =>{
      fetch("http://localhost:5000/api/blogs")
      .then(res => res.json())
      .then(data => setData(data))
    },[])

    return (
        <div className='w-[90%] mx-auto mt-20 px-10'>
            <h2 className='text-center text-4xl font-bold mt-10 p-5 border-b-4 border-gray-500 w-6/12 mx-auto'>My Blogs</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-10'>
              {
                data?.data?.map((item) => <BlogCard key={item._id} item={item}/>)
              }
            </div>

            
        </div>
    );
};

export default Blog;