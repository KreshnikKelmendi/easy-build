import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import SplitType from 'split-type';
import { gsap } from 'gsap';
import image1 from "../assets/image 1.png";
import Quality from './Quality';
import { Link } from 'react-router-dom';

const Banner = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const titleRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const splitText = new SplitType(titleRef.current);

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.fromTo(
        splitText.chars,
        { opacity: 0, y: '+=50', skewY: 10 },
        { opacity: 1, y: 0, skewY: 0, stagger: 0.05, duration: 0.8 }
      );
    }
  }, [inView]);

  return (
    <div className='relative w-full h-[70vh] lg:h-[800px]'>
      <img src={image1} alt='' className='w-full h-full object-cover' />
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#772613] to-[#000000] opacity-50'></div>
      <div className='absolute top-0 left-0 w-full h-full flex items-center text-white lg:px-[50px] 2xl:px-[100px]'>
        <div ref={ref}>
          <h1 ref={titleRef} className='text-4xl lg:text-[85px] font-bold lg:w-[1061px] lg:leading-[99.87px] px-5'>
            Where Innovation <br /> Meets Simplicity
          </h1>
          <p className='lg:w-[651px] w-full lg:text-justify text-[18px] mt-8 leading-[21.15px] px-5'>
            We specialize in lightweight construction solutions that redefine the building process. Our innovative approach focuses on prefabricated constructions, making use of advanced wood structures and ready-made elements.
          </p>
          <div className='flex flex-col lg:flex-row gap-y-4 mt-10 gap-x-4 px-5'>
            <Link to="/projects" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
              <button className='w-full lg:w-[200px] bg-[#191716] py-3 rounded-[8px] hover:bg-[#DD4624] hover:duration-500'>View Projects</button>
            </Link>
            <Link to="/contact" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
              <button className='px-8 w-full lg:w-[200px] bg-[#DD4624] py-3 rounded-[8px] hover:bg-[#191716] hover:duration-500'>Contact Us</button>
            </Link>
          </div>
        </div>
        <div className='bg-[#191716] hidden w-full lg:w-[541px] 2xl:w-[541px] lg:h-[260px] p-6 rounded-[15px] lg:flex justify-center items-center absolute lg:right-[60px] 2xl:right-[100px] lg:bottom-[-60px] 2xl:bottom-[-125px] z-40'>
          <Quality />
        </div>
      </div>
    </div>
  );
}

export default Banner;
