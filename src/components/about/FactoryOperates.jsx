import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import useTranslation hook
import factory1 from "../assets/factory1.jpg";
import factory2 from "../assets/factory2.png";
import factory3 from "../assets/factory3.png";

const services = [
  {
    image: factory1,
    titleKey: "title_wooden_frame_construction",
    descriptionKey: "wooden_frame_construction_desc",
    link: '/services',
  },
  {
    image: factory2,
    titleKey: "title_cross_laminated_timber",
    descriptionKey: "clt_construction_desc",
    link: '/services',
  },
  {
    image: factory3,
    titleKey: "title_modular_construction",
    descriptionKey: "large_wooden_beams_preparation_desc",
    link: '/services',
  },
];

const FactoryOperates = () => {
  const { t } = useTranslation(); // Get t function

  return (
    <div className='px-5 lg:px-[60px] 2xl:px-[120px] z-40 lg:mt-[-550px] 2xl:mt-[-550px] relative pt-16'>
      <p className='font-custom1 text-[#191716] text-[32px] lg:text-[48px] lg:leading-[56.4px] font-semibold'>
        {t('our_factory_operates')} <br />
        {t('three_core_elements')}
      </p>
      <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {services.map((service, index) => (
          <Link to={service.link} key={index} onClick={() => window.scrollTo(0, 0)} className='block'>
            <div className='bg-[#191716] rounded-t-[15px] w-full rounded-b-[15px]'>
              <img src={service.image} alt={t(service.titleKey)} className='w-full h-[331px] object-cover rounded-t-[15px] rounded-b-[15px]' />
              <div className='text-white font-custom px-8 pt-12 h-[331px]'>
                <p className='text-[26px] font-custom1 font-semibold text-[#DD4624]'>{t(service.titleKey)}</p>
                <p className={`text-[16px] mt-2 text-[#F3F4F4] ${index === 1 ? 'pt-6 lg:pt-2' : 'pt-6 lg:pt-12'}`}>
                  {t(service.descriptionKey)}
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
