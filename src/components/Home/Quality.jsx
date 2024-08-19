import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaCheck } from 'react-icons/fa';

const Quality = () => {
  const { t } = useTranslation();
  
  const items = [
    t('quality.innovation_and_quality'),
    t('quality.efficiency_and_sustainability'),
    t('quality.highly_professional_staff')
  ];

  return (
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
  );
}

export default Quality;
