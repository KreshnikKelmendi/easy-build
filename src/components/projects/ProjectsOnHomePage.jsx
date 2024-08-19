import React from 'react';
import SliderProjects from './SliderProjects';
import { useTranslation } from 'react-i18next';

const ProjectsOnHomePage = () => {
  const { t } = useTranslation();

  return (
    <>
    <div className='lg:pl-[50px] 2xl:pl-[120px] px-5 lg:px-0 mt-[-450px] lg:mt-[-500px] 2xl:mt-[-400px] z-40 relative '>
      <p className='font-custom font-normal text-left text-[#F3F4F4] uppercase'>{t('Projects')}</p>
      <div className='flex flex-col lg:flex-row justify-between lg:items-center'>
        <p className='text-[32px] lg:text-[64px] font-custom1 text-left text-[#F3F4F4]'>{t('ourProject')}</p>

      <div className='flex flex-wrap gap-6 mt-4 font-custom lg:pr-[50px] 2xl:pr-[120px]'>
        <span className='font-custom text-lg lg:text-[20px] text-[#F3F4F4]'>All Works</span>
        <span className='font-custom text-lg lg:text-[20px] text-[#F3F4F4]'>Construction</span>
        <span className='font-custom text-lg lg:text-[20px] text-[#F3F4F4]'>Architecture</span>
        <span className='font-custom text-lg lg:text-[20px] text-[#F3F4F4]'>Building</span>
        <span className='font-custom text-lg lg:text-[20px] text-[#F3F4F4]'>Renovations</span>
        <span className='font-custom text-lg lg:text-[20px] text-[#F3F4F4]'>Interior</span>
      </div>
      </div>
      <SliderProjects />
    </div>
    </>
  );
};

export default ProjectsOnHomePage;
