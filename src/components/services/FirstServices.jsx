import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import firstServiceImage from "../assets/factory1.jpg";
import moreContentImage1 from "../assets/step1-firstService.png"; 
import moreContentImage2 from "../assets/step2-firstService.png";
import moreContentImage3 from "../assets/step3-firstService.png";

const moreContentData = [
  {
    id: 1,
    image: moreContentImage1,
    titleKey: "planning", // Use translation keys instead of static titles
  },
  {
    id: 2,
    image: moreContentImage2,
    titleKey: "construction",
  },
  {
    id: 3,
    image: moreContentImage3,
    titleKey: "completion",
  },
];

const FirstServices = () => {
  const { t } = useTranslation(); // Get t function from useTranslation hook
  const [showMore, setShowMore] = useState(false);
  const { ref: hereRef, inView: hereInView } = useInView({ triggerOnce: true });
  const { ref: moreContentRef, inView: moreContentInView } = useInView({ triggerOnce: true });

  const handleToggle = () => {
    setShowMore(prevState => !prevState);
  };

  useEffect(() => {
    if (hereInView) {
      gsap.from(".animate-here", {
        x: 300,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
      });
    }
    if (moreContentInView) {
      gsap.from(".animate-more", {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power4.out",
      });
    }
  }, [hereInView, moreContentInView]);

  return (
    <>
      <div className='w-full flex flex-col lg:flex-row h-full p-2 gap-x-[10px] gap-y-[10px] lg:gap-y-0 overflow-hidden'>
        <div className='lg:w-1/2'>
          <div className='w-full'>
            <img src={firstServiceImage} className='w-full lg:h-[628px] object-cover rounded-[15px]' alt={t('wooden_frame_construction')} />
          </div>
        </div>
        <div className='lg:w-1/2 bg-[#DD4624] lg:h-[628px] rounded-[15px] flex flex-col w-full justify-center items-center overflow-hidden'>
          <div className='text-[#F3F4F4] 2xl:w-[628px] py-6 lg:py-0 px-5 lg:px-16 2xl:px-0 animate-here' ref={hereRef}>
            <p className='text-[32px] lg:text-[64px] font-custom1 lg:leading-[75.2px]'>
              {t('wooden_frame_construction')}
            </p>
            <p className='font-custom font-normal text-[18px] leading-[21.15px] pt-6'>
              {t('wooden_frame_construction_desc_1')}
            </p>
            <p className='font-custom font-normal text-[18px] leading-[21.15px] pt-4'>
              {t('wooden_frame_construction_desc_2')}
            </p>
            <button
              className='w-full lg:w-[200px] bg-[#191716] py-3 rounded-[8px] hover:bg-[#DD4624] hover:duration-500 mt-6'
              onClick={handleToggle}
            >
              {showMore ? t('view_less') : t('view_more')}
            </button>
          </div>
        </div>
      </div>

      <div className='w-full'>
        {showMore && (
          <>
            <div ref={moreContentRef} className='animate-more mt-6 px-2 lg:px-[60px] 2xl:px-[100px]'>
              <p className='font-custom font-normal text-[18px] leading-[21.15px] text-[#DD4624] uppercase'>
                {t('how_we_build')}
              </p>
              <div className='flex flex-col lg:flex-row justify-start items-start lg:items-center'>
                <p className='text-[32px] lg:text-[64px] font-custom font-semibold'>{t('step_by_step')}</p>
                <p className='w-full lg:w-[501px] h-[92px] font-custom text-[18px] leading-[22.7px] text-[#191716] mt-4 lg:ml-20'>
                  {t('step_by_step_desc')}
                </p>
              </div>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 overflow-x-auto pb-10'>
                {moreContentData.map(item => (
                  <div key={item.id} className='w-full flex-shrink-0'>
                    <img src={item.image} className='w-full lg:h-[447px] object-cover rounded-[15px]' alt={t(item.titleKey)} />
                    <p className='text-[20px] font-custom1 mt-1'>{t(item.titleKey)}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className='w-full flex justify-center mt-6'>
              <button
                className='w-full lg:w-[200px] bg-[#191716] text-white py-3 rounded-[8px] hover:bg-[#DD4624] hover:duration-500'
                onClick={handleToggle}
              >
                {t('view_less')}
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default FirstServices;
