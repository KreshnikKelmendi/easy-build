import React, { useState, useEffect } from 'react';
import { projectsData } from '../projects/work';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = Math.ceil(projectsData.length / 3);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % projectsData.length;
        return newIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index * 3);
  };

  const getVisibleProjects = () => {
    const start = currentIndex;
    return projectsData.slice(start, start + 3);
  };

  return (
    <div className="relative w-full mt-8 px-[20px] sm:px-[30px] lg:px-[50px] xl:px-[70px] 2xl:px-[110px] z-50">
      {/* Dots Navigation */}
      <div className="flex justify-center mb-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`mx-2 w-2 h-2 sm:w-3 sm:h-3 rounded-full ${currentIndex / 3 === index ? 'bg-[#D9D9D966]' : 'bg-white'}`}
          />
        ))}
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${(currentIndex / 3) * 100}%)` }}
        >
          {projectsData.map((project, index) => {
            const isMiddle = (index % 3 === 1) && (index >= currentIndex) && (index < currentIndex + 3);
            return (
              <div key={project.id} className="p-2 flex-shrink-0 w-full sm:w-1/3">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className={`w-full object-cover rounded-[10px] sm:rounded-[15px] transition-height duration-500 ${isMiddle ? 'h-[200px] sm:h-[400px] lg:h-[500px]' : 'h-[150px] sm:h-[280px] lg:h-[343px]'}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
