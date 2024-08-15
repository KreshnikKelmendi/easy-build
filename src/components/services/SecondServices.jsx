import React, { useState } from 'react';
import firstServiceImage from "../assets/mainImage-secondService.png";
import moreContentImage1 from "../assets/step1-firstService.png";
import moreContentImage2 from "../assets/step2-firstService.png";
import moreContentImage3 from "../assets/step3-firstService.png";

const moreContentData = [
  {
    id: 1,
    image: moreContentImage1,
    title: "1. Planning",
  },
  {
    id: 2,
    image: moreContentImage2,
    title: "2. Construction",
  },
  {
    id: 3,
    image: moreContentImage3,
    title: "3. Completion",
  },
];

const SecondServices = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(prevState => !prevState);
  };

  return (
    <>
      <div className='w-full flex flex-col-reverse lg:flex-row h-full p-2 gap-x-[10px] gap-y-[10px] lg:gap-y-0'>
        <div className='lg:w-1/2 bg-[#191716] lg:h-[628px] rounded-[15px] flex flex-col w-full justify-center items-center'>
          <div className='2xl:w-[628px] py-6 lg:py-0 px-5 lg:px-16 2xl:px-0'>
            <p className='text-[32px] lg:text-[64px] font-custom1 lg:leading-[75.2px] text-[#DD4624]'>
                Cross-Laminated Timber (CLT) Construction
            </p>
            <p className='font-custom font-normal text-[18px] leading-[21.15px] pt-6 text-[#F3F4F4]'>
                For projects requiring extra strength and durability, our CLT solutions are ideal. CLT is particularly suited for multi-story buildings, 
                offering a sustainable alternative to traditional materials like steel and concrete.
            </p>
            <p className='font-custom font-normal text-[18px] leading-[21.15px] pt-4 text-[#F3F4F4]'>
                CLT construction is highly versatile, enabling architects to explore creative designs while maintaining the robustness required for high-performance buildings.
            </p>
            <button
              className='w-full lg:w-[200px] bg-[#DD4624] py-3 rounded-[8px] hover:bg-[#DD4624] hover:duration-500 mt-6 text-[#F3F4F5]'
              onClick={handleToggle}
            >
              {showMore ? 'View Less' : 'View More'}
            </button>
          </div>
        </div>
        <div className='lg:w-1/2'>
          <div className='w-full'>
            <img src={firstServiceImage} className='w-full lg:h-[628px] object-cover rounded-[15px]' alt='Service' />
          </div>
        </div>
      </div>
      <div className='w-full'>
        {showMore && (
          <div className='mt-6 px-2 lg:px-[60px] 2xl:px-[100px]'>
            <p className='font-custom font-normal text-[18px] leading-[21.15px] text-[#DD4624] uppercase'>
              How we build
            </p>
            <div className='flex flex-col lg:flex-row justify-start items-start lg:items-center'>
              <p className='text-[32px] lg:text-[64px] font-custom font-semibold'>Step by Step</p>
              <p className='w-full lg:w-[501px] h-[92px] font-custom text-[18px] leading-[22.7px] text-[#191716] mt-4 lg:ml-20'>
                We know building a home can be one of the most important decisions you make. To best understand the full picture of working with Unity, read through the process “step by step”.
              </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 overflow-x-auto pb-6'>
              {moreContentData.map(item => (
                <div key={item.id} className='w-full flex-shrink-0'>
                  <img src={item.image} className='w-full lg:h-[447px] object-cover rounded-[15px]' alt={item.title} />
                  <p className='text-[20px] font-custom1 mt-1'>{item.title}</p>
                </div>
              ))}
            </div>
            <div className='flex justify-center mt-6'>
              <button
                className='w-full lg:w-[200px] bg-[#DD4624] py-3 rounded-[8px] hover:bg-[#DD4624] hover:duration-500 text-[#F3F4F5]'
                onClick={handleToggle}
              >
                View Less
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SecondServices;
