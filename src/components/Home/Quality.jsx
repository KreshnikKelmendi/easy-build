import React from 'react';
import { FaCheck } from 'react-icons/fa';

const Quality = () => {
  const items = [
    'Innovation and Quality',
    'Efficiency and Sustainability',
    'Highly professional Staff'
  ];

  return (
    <>
        <div className=''>
            <ul className='list-none text-[20px] font-custom'>
                {items.map((item, index) => (
                <li key={index} className='flex items-center mb-2 text-white gap-x-4 py-2'>
                    <FaCheck className='text-[#191716] bg-white rounded-full w-[20px] h-[20px] p-1' />
                    {item}
                </li>
                ))}
            </ul>
        </div>
    </>
  );
}

export default Quality;
