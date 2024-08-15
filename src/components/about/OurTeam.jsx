import React from 'react';
import team1 from "../assets/ourteam1.png";

const OurTeam = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center px-5 lg:px-[60px] 2xl:px-[120px] mt-16 lg:mt-28">
      <div 
        className="bg-[#DD4624] w-full text-white p-8 z-10 lg:h-[463px] rounded-[15px] flex items-center lg:mr-[-20%]"
      >
        <div className='lg:pl-8'>
          <h2 className="text-[32px] lg:text-[64px] font-custom1 font-extrabold text-[#191716]">Our Team</h2>
          <div className='lg:w-[675px] text-[18px] text-[#F3F4F4] font-custom mt-6'>
            <p>Our team at EasyBuild is driven by a passion for innovation, constantly seeking new ways to improve and refine how structures are built.</p>
            <p className="mt-4">Through our commitment to advanced prefabrication techniques, we not only simplify the construction process but also elevate standards in quality and environmental responsibility.</p>
          </div>
        </div>
      </div>
      <div className='w-full'>
        <img 
          src={team1}
          alt="Team" 
          className="lg:w-[1067px] lg:h-[874px] object-cover rounded-[15px]"
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
};

export default OurTeam;
