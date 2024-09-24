import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next';
import video7 from "../assets/EASY_BUILD_1 (1).mp4";

const BannerAbout = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const textRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const splitHeading = new SplitType(headingRef.current, { types: 'words' });
      const splitText = new SplitType(textRef.current, { types: 'lines' });

      gsap.from(splitHeading.words, {
        opacity: 0,
        y: 90,
        stagger: 0.1,
        duration: 1,
        ease: 'power2.out',
      });

      gsap.from(splitText.lines, {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 1,
        ease: 'power2.out',
      });
    }
  }, [inView]);

  return (
    <div className='w-full relative flex flex-col lg:flex-row items-center bg-uberuns'>
      {/* Text Section */}
      <div className='lg:w-1/2 w-full px-5 lg:px-10 xl:px-20 py-5'>
        <div ref={ref} className='text-white'>
          <p
            className='font-custom1 text-[28px] lg:text-[45px] xl:text-[65px] mb-2 capitalize'
            ref={headingRef}
          >
            {t('aboutUs')}
          </p>
          <p
            className='lg:w-full text-[16px] lg:text-[18px] font-custom font-medium leading-[21.15px]'
            ref={textRef}
          >
            {t('secondBannerAbout')}
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className='lg:w-1/2 w-full lg:h-[80vh]'>
        <video
          className='w-full h-full object-cover'
          src={video7}
          playsInline
          autoPlay
          loop
          muted
          alt="Video description"
        />
      </div>
    </div>
  );
}

export default BannerAbout;
