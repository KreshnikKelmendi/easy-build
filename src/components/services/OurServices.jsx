import React, { useRef, useState, useEffect } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { gsap } from 'gsap';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import service1 from "../assets/service1.png";
import service1Hover from "../assets/service1-full.jpg";
import service2 from "../assets/service2.png";
import service2Hover from "../assets/service2-full.png";
import service3 from "../assets/service3.png";
import service3Hover from "../assets/service3-full.png";

const services = [
  {
    image: service1,
    hoverImage: service1Hover,
    title: 'Wooden Frame Construction',
    link: '/services', // Add link to the service
  },
  {
    image: service2,
    hoverImage: service2Hover,
    title: 'Cross-Laminated Timber (CLT)',
    link: '/services', // Add link to the service
  },
  {
    image: service3,
    hoverImage: service3Hover,
    title: 'Modular Construction',
    link: '/services', // Add link to the service
  },
];

const OurServices = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const imageRefs = useRef([]);
  const serviceRefs = useRef([]);
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    gsap.to(imageRefs.current[index], {
      scale: 1.05,
      duration: 0.5,
      ease: 'power4.inOut',
    });
  };

  const handleMouseLeave = (index) => {
    setHoveredIndex(null);
    gsap.to(imageRefs.current[index], {
      scale: 1,
      duration: 0.8,
      ease: 'power4.inOut',
    });
  };

  useEffect(() => {
    if (inView) {
      gsap.fromTo(
        serviceRefs.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          stagger: 0.2,
        }
      );
    }
  }, [inView]);

  return (
    <div className='bg-[#F3F4F4] px-5 lg:px-[60px] 2xl:px-[120px] py-12 lg:py-24 rounded-[15px] h-auto relative'>
      <p className='text-[#DD4624] font-custom font-normal text-left'>SERVICES</p>
      <p className='text-[32px] lg:text-[64px] font-custom1 text-left'>Our Services</p>
      <p className='max-w-full lg:max-w-[451px] leading-[22.7px] text-[18px] text-[#191716] font-custom font-normal mt-4 mx-auto lg:mx-0 text-left'>
        We offer a range of services tailored to meet the diverse needs of our clients:
      </p>
      <div ref={inViewRef} className='grid grid-cols-1 lg:grid-cols-3 gap-y-12 lg:gap-x-12 mt-16'>
        {services?.map((service, index) => (
          <div
            key={index}
            ref={el => (serviceRefs.current[index] = el)}
            className='w-full'
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <img
              ref={el => (imageRefs.current[index] = el)}
              src={hoveredIndex === index ? service.hoverImage : service.image}
              alt={service.title}
              className='w-full h-60 lg:h-[489px] object-cover rounded-lg transition-all duration-500 ease-in-out'
            />
            <Link to={service.link} className='block' onClick={() => window.scrollTo(0, 0)}>
              <p className='text-[20px] 2xl:text-[25px] font-custom font-semibold mt-6 lg:mt-9 flex items-center justify-start hover:text-[#DD4624] hover:scale-110 hover:duration-500'>
                {service.title} <FaArrowRight className='ml-4 bg-[#DD4624] rounded-full text-white p-[5px]' />
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;
