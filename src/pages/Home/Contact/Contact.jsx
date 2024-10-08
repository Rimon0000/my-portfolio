import React from "react";
import { FaMailBulk, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
  const handleContact = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const newContact = { name, email, message };

    //send data to the server
    fetch(
      "https://portfolio-server-livid-sigma.vercel.app/api/create-contact",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newContact),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        form.reset();
        if (data.success) {
          Swal.fire({
            title: "Success!",
            text: "Rimon will be in touch with you shortly!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div
      className="my-20 w-[90%] mx-auto  rounded-lg pb-5"
      id="contact"
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-easing="ease-out-cubic"
    >
      <h2 className="text-center text-4xl font-bold pt-5">Contact Me</h2>
      <p className="text-center font-semibold border-b-4 border-gray-500 w-1/2 mx-auto mt-4">
        Let's work together
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 px-10 mt-10">
        <div className="bg-base-200 py-5 px-8 rounded-lg border hover:border-blue-500 transition-all duration-300">
          <form onSubmit={handleContact}>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered bg-white text-black rounded-lg"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold mt-2">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered bg-white text-black rounded-lg"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold mt-2">Message</span>
              </label>
              <textarea
                name="message"
                className="textarea textarea-bordered h-24 bg-white text-black rounded-lg"
                placeholder="Write Your Message"
                required
              ></textarea>
            </div>
            <div className="pb-3 mt-5">
              <button className="btn btn-outline btn-primary rounded-3xl" type="submit">
                Contact
              </button>
            </div>
          </form>
        </div>

        <div>
          <h2 className="text-center text-2xl font-semibold m-5 p-5 border-b-2 border-gray-500 w-1/2 mx-auto">
            Contact Info
          </h2>
          <div className="font-semibold text-2xl text-center lg:ml-20">
          <div className="flex gap-3 pt-5 bg-base-200 py-5 px-8 rounded-lg border hover:border-blue-500 transition-all hover:animate-pulse hover:shadow-primary hover:shadow-md duration-300">
             <button className='border border-blue-500 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:text-white'>
             <FaMailBulk className='h-[35px] w-[35px] rounded-full p-2'></FaMailBulk></button>
            <p>rimonron.ad@gmail.com</p>
          </div>
          <div className="flex gap-3 my-4 text-center pt-5 bg-base-200 py-5 px-8 rounded-lg border hover:border-blue-500 transition-all hover:animate-pulse hover:shadow-primary hover:shadow-md duration-300">
            <button className='border border-blue-500 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:text-white'>
            <FaPhoneAlt className='h-[35px] w-[35px] rounded-full p-2'></FaPhoneAlt></button>
            <p>+880 1306-260913</p>
          </div>
          <div className="flex  gap-3 text-center pt-5 bg-base-200 py-5 px-8 rounded-lg border hover:border-blue-500 transition-all hover:animate-pulse hover:shadow-primary hover:shadow-md duration-300">
            <button className='border border-blue-500 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-blue-800 hover:text-white'>
            <FaMapMarkerAlt className='h-[35px] w-[35px] rounded-full p-2'></FaMapMarkerAlt></button>
            <p>Noakhali, Bangladesh</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
