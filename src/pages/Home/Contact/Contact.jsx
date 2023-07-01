import React from 'react';
import {FaMailBulk, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import FadeIn from 'react-fade-in';

const Contact = () => {
    return (
        <FadeIn>
          
            <div className='my-10 bg-base-200 rounded-lg'>
            <h2 className='text-center text-4xl font-bold mt-5 pt-5'>Contact Me</h2>
            <p className='text-center font-semibold border-b-4 border-gray-500 w-1/2 mx-auto mt-4'>Let's work together</p>
            <div className='grid lg:grid-cols-2 gap-5'>
                <div>
                <form>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold">Name</span>
                  </label>
                  <input type="text" placeholder="Name" className="input input-bordered bg-white text-black rounded-lg" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold mt-2">Email</span>
                  </label>
                  <input type="text" placeholder="Email" className="input input-bordered bg-white text-black rounded-lg" />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-bold mt-2">Message</span>
                  </label>
                  <textarea className="textarea textarea-bordered h-24 bg-white text-black rounded-lg" placeholder="Write Your Message"></textarea>
                </div>
                <input className='btn btn-primary mt-3 text-white' type="submit" value="Send Message" />
                </form>

                </div>
                <div>
                    <h2 className='text-center text-2xl font-semibold m-5 p-5 border-b-2 border-gray-500 w-1/2 mx-auto'>Contact Info</h2>
                    <div className='flex items-center justify-center gap-3 text-center ml-10 pt-5 font-semibold text-2xl'>
                        <FaMailBulk></FaMailBulk>
                        <p>rimonron.ad@gmail.com</p>
                    </div>
                    <div className='flex items-center justify-center gap-3 text-center pt-5 font-semibold text-2xl'>
                        <FaPhoneAlt></FaPhoneAlt>
                        <p>+880 1306-260913</p>
                    </div>
                    <div className='flex items-center justify-center gap-3 text-center pt-5 font-semibold text-2xl'>
                        <FaMapMarkerAlt></FaMapMarkerAlt>
                        <p>Noakhali, Bangladesh</p>
                    </div>
                </div>
            </div>
        </div>
        </FadeIn>
    );
};

export default Contact;