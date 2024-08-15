import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row justify-center items-center lg:h-[607px] lg:mb-16 bg-[#191716] text-[#F3F4F4] px-5 lg:px-[50px] 2xl:px-[110px]'>
      <div className='lg:w-1/2 flex flex-col justify-center h-full'>
        <p className='text-[32px] lg:text-[85px] font-custom1'>Get in touch</p>
        <p className='2xl:w-[619px] mb-8 text-[18px] font-custom leading-[21.15px] lg:pr-16 2xl:pr-0'>
          We specialize in lightweight construction solutions that redefine the building process. Our innovative approach focuses on prefabricated constructions, making use of advanced wood structures and ready-made elements.
        </p>
        <ul className='space-y-8 text-[15px] font-custom font-normal lg:mt-14'>
          <li className='flex gap-10 py-4'>
            <a href='/' className='hover:text-gray-400'>
              <FaFacebookF size={37} color="#F3F4F4" />
            </a>
            <a href='/' className='hover:text-gray-400'>
              <FaInstagram size={37} color="#F3F4F4" />
            </a>
            <a href='/' className='hover:text-gray-400'>
              <FaTwitter size={37} color="#F3F4F4" />
            </a>
          </li>
        </ul>
      </div>
      <div className='lg:w-1/2 bg-[#F3F4F4] w-full rounded-[15px] h-[570px] flex flex-col justify-center items-center mt-8 lg:mt-0'>
        <form className='space-y-16 text-[#191716] w-full px-5 lg:px-10 font-custom'>
          <div className='relative'>
            <input
              type="text"
              id="name"
              name="name"
              className='peer block w-full bg-[#F3F4F4] border-b-[3px] border-[#191716] py-2 px-3 placeholder-transparent focus:border-transparent focus:outline-none'
              required
              placeholder='Your Name'
            />
            <label
              htmlFor="name"
              className='absolute top-2 mt-[-6px] text-[#191716] duration-300 transform -translate-y-4 scale-75 origin-top-left peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[20px]'
            >
              Your Name
            </label>
          </div>
          <div className='relative'>
            <input
              type="email"
              id="email"
              name="email"
              className='peer block w-full bg-[#F3F4F4] border-b-[3px] border-[#191716] py-2 px-3 placeholder-transparent focus:border-transparent focus:outline-none'
              required
              placeholder='Your Email'
            />
            <label
              htmlFor="email"
              className='absolute top-0 left-0 mt-[-6px] text-[#191716] duration-300 transform -translate-y-4 scale-75 origin-top-left peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[20px]'
            >
              Your Email
            </label>
          </div>
          <div className='relative'>
            <input
              id="message"
              name="message"
              className='peer block w-full bg-[#F3F4F4] border-b-[3px] border-[#191716] py-2 px-3 placeholder-transparent focus:border-transparent focus:outline-none'
              required
              placeholder='Your Message'
            />
            <label
              htmlFor="message"
              className='absolute top-2 text-[#191716] mt-[-6px] duration-300 transform -translate-y-4 scale-75 origin-top-left peer-placeholder-shown:top-1/2 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:text-base peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-[20px]'
            >
              Your Message
            </label>
          </div>
          <button
            className='w-full lg:w-[200px] py-3 rounded-[8px] bg-[#DD4624] hover:duration-500 mt-16 text-[18px] text-[#F3F4F4] font-custom'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
