import React from 'react';
import wood1 from "../assets/image (10) (1).png";
import wood2 from "../assets/image (9) (1).png";
import wood3 from "../assets/image (7) (1).png";
import wood4 from "../assets/image (6) (1).png";
import wood5 from "../assets/image (5) (1).png";
import wood6 from "../assets/image (4) (1).png";
import wood7 from "../assets/image (3) (1).png";
import { useTranslation } from 'react-i18next';

const woodsData = [
  { id: 1, titleKey: 'wood_kvh', imageUrl: wood1 },
  { id: 2, titleKey: 'wood_clt', imageUrl: wood2 },
  { id: 3, titleKey: 'wood_laminated_beams', imageUrl: wood3 },
  { id: 4, titleKey: 'wood_rockwool', imageUrl: wood4 },
  { id: 5, titleKey: 'wood_fiber_wood', imageUrl: wood5 },
  { id: 6, titleKey: 'wood_osb', imageUrl: wood6 },
  { id: 7, titleKey: 'wood_plywood', imageUrl: wood7 },
];

const Woods = () => {
  const { t } = useTranslation();

  return (
    <div className='mt-6 lg:mt-20 flex flex-col items-center lg:text-left mx-auto px-5 lg:px-0'>
      <div className='flex flex-col mb-10'>
        <p className='font-custom text-[#191716] text-justify lg:text-center tracking-tighter lg:tracking-normal text-[32px] lg:text-[48px] font-semibold '>
          {t('materials_that_we_use')}
        </p>
        <p className='lg:w-[548px] w-full text-justify lg:text-center tracking-tighter lg:tracking-normal font-custom lg:text-[20px] leading-[23.5px] mt-2'>
          {t('second_materials_that_we_use')}
        </p>
      </div>

      <div className='grid lg:gap-10 gap-6 grid-cols-3 lg:grid-cols-7 w-full lg:px-16 2xl:px-36 justify-center items-center mt-6 lg:mt-16'>
        {woodsData.map((wood) => (
          <div key={wood.id} className='flex flex-col justify-center items-center'>
            <img src={wood.imageUrl} alt={t(wood.titleKey)} className='w-28 h-auto lg:w-40 lg:h-auto 2xl:w-[190px] 2xl:h-[188px] object-cover rounded-full' />
            <p className='mt-4 text-center font-custom font-normal text-[24px] w-[140px] lg:w-[150px] 2xl:w-[160px] whitespace-nowrap overflow-hidden text-ellipsis'>
              {t(wood.titleKey)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Woods;
