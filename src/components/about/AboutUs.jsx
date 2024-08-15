import React from 'react';
import about1 from "../assets/about1.png";
import CountNumbers from '../Home/CountNumbers'
import FactoryOperates from './FactoryOperates';

const AboutUs = () => {
  return (
    <>
    <div className='bg-[#DD4624] lg:h-[1511px] 2xl:h-[1611px] relative z-10'>
      <div className='flex flex-col lg:flex-row px-5 lg:px-[60px] py-16 2xl:px-[120px] lg:py-36'>
        <div className='w-full lg:w-1/2'>
          <img src={about1} alt='' className='w-full h-full object-cover rounded-[15px]' />
        </div>

        <div className='w-full lg:w-1/2 flex flex-col lg:justify-center mt-0 lg:mt-0 lg:pl-[50px] 2xl:pl-[100px] lg:py-5 2xl:py-0'>
          <p className='font-custom1 text-[32px] lg:text-[60px] 2xl:text-[64px] text-[#F3F3F3] lg:leading-[67px] 2xl:leading-[75.2px] mt-6'>
            Discover the future of construction with us
          </p>
          <p className='text-[18px] font-normal leading-[21.15px] text-[#F3F4F4] w-full 2xl:w-[667px] mt-6'>
            We are dedicated to revolutionizing the construction industry with our unique focus on lightweight building methods. 
            Our name reflects our mission: to simplify construction through innovative prefabrication techniques. 
            We are pioneers in using wood as the primary construction material, offering sustainable and eco-friendly solutions.
          </p>
          <p className='text-[18px] font-normal leading-[21.15px] text-[#F3F4F4] w-full 2xl:w-[667px] mt-4'>
            Our mission is to transform the construction industry by promoting sustainable and innovative practices. Through continuous 
            improvement of our technologies and services, we aim to deliver constructions that not only meet but exceed our clients' expectations.
          </p>
        </div>
      </div>
      <div className='flex justify-center items-center lg:mt-[-100px]'>
        <CountNumbers />
      </div>
    </div>
    <FactoryOperates />
    </>
  );
};

export default AboutUs;
