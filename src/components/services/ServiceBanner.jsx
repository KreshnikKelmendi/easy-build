import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';
import SplitType from 'split-type';
import service1 from '../assets/service-page-1.png';

const ServiceBanner = () => {
  const { ref: bannerRef, inView: bannerInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (bannerInView) {
      const splitTitle = new SplitType(titleRef.current, { types: 'words' });
      const splitText = new SplitType(textRef.current, { types: 'lines' });

      gsap.from(splitTitle.words, {
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
        '.service-image',
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
  }, [bannerInView]);

  return (
    <div
      ref={bannerRef}
      className='lg:h-[556px] bg-[#191716] px-4 lg:px-[50px] 2xl:px-[100px]'
    >
      <div className='flex flex-col lg:flex-row items-center'>
        <div className='lg:w-1/2 text-white'>
          <p
            ref={titleRef}
            className='text-[32px] lg:text-[85px] font-custom1'
          >
            Services
          </p>
          <p
            ref={textRef}
            className='lg:text-[18px] 2xl:w-[651px] leading-[21.15px] font-custom mt-4'
          >
            We specialize in lightweight construction solutions that redefine
            the building process. Our innovative approach focuses on prefabricated
            constructions, making use of advanced wood structures and ready-made
            elements.
          </p>
        </div>

        <div className='lg:w-1/2 2xl:mr-[130px]'>
          <img
            src={service1}
            alt=''
            className='w-full h-[424px] object-contain service-image'
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceBanner;
