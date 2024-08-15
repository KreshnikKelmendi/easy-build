import React from 'react';
import { useParams } from 'react-router-dom';
import { projectsData } from '../projects/work';
import Carousel from '../projects/Carousel';


const SinglePageOfProject = () => {
  const { id } = useParams();
  const project = projectsData?.find(proj => proj.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <div className='lg:h-[523px] px-5 lg:px-[50px] 2xl:px-[110px] flex flex-col lg:flex-row justify-center py-8 lg:py-0 lg:pt-24' style={{ backgroundColor: project.bgColor }}>
        <div className='lg:w-1/2 w-full'>
          <p className='text-[32px] lg:text-[85px] font-custom1 2xl:w-[676px] lg:leading-[99.7px]' style={{ color: project.textColor }}>{project.title}</p>
        </div>
        <div className='lg:w-1/2 w-full'>
          <p className='text-[#F3F4F4] 2xl:w-[651px] text-[18px] font-custom leading-[21.15px]'>{project.firstDescription}</p>
          <p className='text-[#F3F4F4] 2xl:w-[651px] text-[18px] font-custom leading-[21.15px] mt-6'>{project.secondDescription}</p>
        </div>
      </div>
      <div className='lg:mt-[-200px]'>
        <Carousel />
      </div>
    </div>
  );
};

export default SinglePageOfProject;
