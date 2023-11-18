import React, { useState } from 'react'
import contactMap from '../../../assets/images/map.png'
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";

const ContactForm = () => {
  const [contactDetails, setContactDetails] = useState({
    username: "",
    email: "",
    message: "",
    phone: "",
    subject: ""
  });
  const inputHandler = (e) => {
    let { name, value } = e.target;
    setContactDetails({ ...contactDetails, [name]: value });
    // setErrorStatus(false);
  };
  const submitHandler = () => {
    alert("Pls wait...")
    // alert(JSON.stringify(contactDetails))
    setContactDetails({
      username: "",
      email: "",
      message: "",
      phone: "",
      subject: ""
    })

  }
  return (
    <div className='bg-white'>
      <div className='flex-1 h-full relative z-50 ' style={{
        backgroundImage: `linear-gradient(312deg, rgba(51, 185, 96, .125),rgba(51, 185, 96, .125)),url(${contactMap}`, backgroundPosition: 'top right',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
        <div className='max-w-fullWidth mx-auto flex-center p-2 sm:p-6'>
          <div className='flex-center flex-col md:flex-row gap-4 w-full'>
            <div className='w-full md:w-1/2 flex-1 bg-customGreen-50/20 rounded'>
              <div className="px-4 sm:px-10 py-12 space-y-4 flex justify-center items-start flex-col">
                <div className='space-y-1'>
                  <h4 className="font-semibold text-customGreen-full">Get In Touch</h4>
                  <p className='para'>We are here for you! How can we help?</p>
                  <p className="text-sm text-red-600 text-left w-full font-semibold">
                    Required *
                  </p>
                </div>

                <form className="py-2 space-y-4  relative w-full">
                  <input
                    className="border w-full"
                    type="text"
                    name="username"
                    placeholder="Enter your name*"
                    value={contactDetails.username}
                    onChange={inputHandler}
                    autoComplete='off'
                    autoFocus={true}
                  />
                  <div className="relative w-full">
                    <input
                      className="border w-full"
                      type="email"
                      name="email"
                      placeholder="Enter your email*"
                      value={contactDetails.email}
                      onChange={inputHandler}
                      autoComplete="off"
                    />
                  </div>
                  <div className="relative w-full">
                    <input
                      className="border w-full"
                      type="text"
                      name="phone"
                      placeholder="Phone*"
                      value={contactDetails.phone}
                      onChange={inputHandler}
                      autoComplete="off"
                    />
                  </div>
                  <div className="relative w-full">
                    <input
                      className="border w-full"
                      type="text"
                      name="subject"
                      placeholder="Subject*"
                      value={contactDetails.subject}
                      onChange={inputHandler}
                      autoComplete="off"
                    />
                  </div>
                  <div className="relative">
                    <textarea className='w-full h-24' type="text" name='message' placeholder='Go ahead, we are listening...' value={contactDetails.message}
                      onChange={inputHandler}>

                    </textarea>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      submitHandler();
                    }}
                    className="button button--action w-full p-2"
                  >
                    Let's Connect
                  </button>
                </form>
              </div>
            </div>
            <div className='w-full md:w-1/2 flex-1 p-6'>
              <div className='text-center sm:text-left font-[300]'>
                {/* <h1 className='uppercase text-6xl font-[600]'>A digital platform for</h1> */}
                {/* <h3 className='text-2xl sm:text-4xl font-[600]'>A digital platform</h3>
              <h3 className='text-2xl sm:text-4xl font-[600]'>for connecting healthcare </h3>
              <div className='my-6'>
                <p className='text-xl sm:text-2xl'>We connect medical professionals and enthusiasts to support the overarching healthcare cause.</p> */}
                {/* <p className='text-xl'>Tradition of <span className='text-green-600'>PAAN</span></p> */}
                {/* </div> */}
                {/* <p className='decoration-green-600 underline '>Now Delivered at your <span className='decoration-green-600 decoration-double underline'>Doorstep</span></p> */}
                {/* <button className='my-4 button button--action'>Explore</button> */}
                <div className="flex-1 py-6 px-0 sm:px-8">
                  <div className="py-4">
                    <h2 className="text-xl sm:text-4xl text-gray-900 mb-1 font-semibold">Reach out to us at:</h2>
                  </div>
                  <p className="text-xl">Our offices are open from Monday to Friday, 9:00am to 18:00pm IST (GMT+5:30). Do write to us via email or call us at following number to start the conversation.
                  </p>
                  <div className="my-4">
                    <Link to="mailto:HR@avgna.com">
                      <div className="inline-flex justify-start items-center pointer-events-none text-slate-600">
                        <MdIcons.MdEmail fontSize={22} className="mr-2 text-customGreen-900" />
                        <p className="sm:text-xl">random@medicverse.com</p>
                      </div>
                    </Link>
                    <div>
                      <Link to="tel:7878181130">
                        <div className="inline-flex justify-start pointer-events-none items-center my-4 text-gray-600">
                          <FaIcons.FaPhoneAlt fontSize={22} className="mr-2 text-customGreen-900" />
                          <p className="sm:text-xl">+(91)-7878-XXXX-XX</p>
                        </div>
                      </Link>
                    </div>
                    <div className="flex justify-start pointer-events-none items-start text-customGreen-full">
                      <FaIcons.FaMapSigns fontSize={22} className="mr-2 text-customGreen-900" />
                      <p className="sm:text-xl">
                       Address Info here
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm