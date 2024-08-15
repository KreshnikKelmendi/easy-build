import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import factory1 from "../assets/factory1.png";
import factory2 from "../assets/factory2.png";
import factory3 from "../assets/factory3.png";

const services = [
  {
    image: factory1,
    title: "Wooden Frame Construction",
    description: "Utilizing pre-built panels, we streamline the building process, reducing time and waste while ensuring high-quality structures.",
    link: '/services', 
  },
  {
    image: factory2,
    title: "Cross-Laminated Timber (CLT) Construction",
    description: "This method provides superior strength and durability, ideal for creating robust buildings with a natural aesthetic.",
    link: '/services', 
  },
  {
    image: factory3,
    title: "Large Wooden Beams Preparation",
    description: "Perfect for constructing large spans such as halls, gyms, and other expansive structures, our specially prepared beams offer unmatched versatility and support.",
    link: '/services', 
  },
];

const FactoryOperates = () => {
  return (
    <div className='px-5 lg:px-[60px] 2xl:px-[120px] z-40 lg:mt-[-550px] 2xl:mt-[-550px] relative pt-16'>
      <p className='font-custom1 text-[#191716] text-[32px] lg:text-[48px] lg:leading-[56.4px] font-semibold'>
        Our factory operates <br />
        with three core elements
      </p>
      <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {services.map((service, index) => (
           <Link to={service.link} onClick={() => window.scrollTo(0, 0)} className='block'>
              <div key={index} className='bg-[#191716] rounded-t-[15px] w-full rounded-b-[15px]'>
                <img src={service.image} alt={service.title} className='w-full h-[331px] object-cover rounded-t-[15px] rounded-b-[15px]' />
                <div className='text-white font-custom px-8 pt-12 h-[331px]'>
                
                    <p className='text-[26px] font-custom1 font-semibold text-[#DD4624]'>{service.title}</p>
            
                  <p className={`text-[16px] mt-2 text-[#F3F4F4] ${index === 1 ? 'pt-6 lg:pt-2' : 'pt-6 lg:pt-12'}`}>
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
        ))}
      </div>
    </div>
  );
};

export default FactoryOperates;
