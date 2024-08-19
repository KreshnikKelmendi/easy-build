import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';
import { useInView } from 'react-intersection-observer';
import firstImage from '../assets/aboutBannerImage.png';
import { useTranslation } from 'react-i18next';

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

      gsap.fromTo(
        '.banner-image',
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: 0.5,
          ease: 'power2.out',
        }
      );
    }
  }, [inView]);

  return (
    <div className='w-full relative' >
      <div className='w-full'>
        <img src={firstImage} alt='' className='w-full h-[556px] object-cover' />
        <div ref={ref} className='absolute top-1/2 transform -translate-y-1/2 text-white px-5 lg:px-[50px] 2xl:px-[120px]'>
          <p
            className='font-custom1 text-[32px] lg:text-[85px] mb-2 capitalize'
            ref={headingRef}
          >
            {t('aboutUs')}
          </p>
          <p
            className='lg:w-[651px] text-[18px] font-custom font-medium leading-[21.15px]'
            ref={textRef}
          >
            {t('secondBannerAbout')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default BannerAbout;
