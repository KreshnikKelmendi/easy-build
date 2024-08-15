import React from 'react';
import { Link } from 'react-router-dom';
import { projectsData } from './work';

const Projects = () => {
  return (
    <div>
      {projectsData?.map((project, index) => (
        <div
          key={project.id}
          className={`w-full flex flex-col lg:flex-row justify-center items-center px-5 lg:px-[50px] 2xl:px-[110px] lg:h-[584px] py-12 lg:py-0`}
          style={{ backgroundColor: project.bgColor }}
        >
          {index % 2 === 0 ? (
            <>
              <div className='w-full lg:w-1/2 order-1 lg:order-none'>
                <img src={project.imgSrc} alt={project.title} className='2xl:w-[711px] lg:h-[450px] rounded-[15px] object-cover' />
              </div>
              <div className='w-full lg:w-1/2 order-2 lg:order-none' style={{ color: project.textColor }}>
                <p className='font-custom1 text-[32px] lg:text-[64px] py-5 lg:py-0 lg:w-[498px] w-full lg:leading-[75.2px]'>{project.title}</p>
                <Link to={`/projects/${project.id}`} onClick={() => window.scrollTo({ top: 0, left: 0 })}>
                    <button
                    className='w-full lg:w-[200px] py-3 rounded-[8px] hover:duration-500 font-custom lg:mt-16'
                    style={{ backgroundColor: project.buttonColor, color: project.txtButtonColor }}
                    >
                    Read More
                    </button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className='w-full lg:w-1/2 order-2 lg:order-none flex flex-col lg:justify-center lg:items-center' style={{ color: project.textColor, height: '100%' }}>
                <p className='font-custom1 text-[32px] lg:text-[64px] w-full lg:w-[498px] lg:leading-[75.2px] py-5 lg:py-0'>{project.title}</p>
                <div className='w-full lg:w-[498px]'>
                  <button
                    className='w-full lg:w-[200px] py-3 rounded-[8px] hover:duration-500 font-custom lg:mt-16'
                    style={{ backgroundColor: project.buttonColor, color: project.txtButtonColor }}
                  >
                    Read More
                  </button>
                </div>
              </div>
              <div className='w-full lg:w-1/2 order-1 lg:order-none'>
                <img src={project.imgSrc} alt={project.title} className='2xl:w-[711px] lg:h-[450px] rounded-[15px] object-cover' />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Projects;