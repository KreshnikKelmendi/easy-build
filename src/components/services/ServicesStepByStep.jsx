import React from 'react'
import step1 from "../assets/step1.png"
import step2 from "../assets/step2.png"
import step3 from "../assets/step3.png"
import { useTranslation } from 'react-i18next'

const ServicesStepByStep = () => {
    const { t } = useTranslation();

  return (
    <div className='w-full lg:px-[50px] 2xl:px-[110px] mt-16 lg:mt-32 px-5'>
        <div className='w-full flex flex-col lg:flex-row lg:justify-between'>
            <div className='flex flex-col justify-center'>
                <p className='text-[#DD4624] text-[18px]'>{t('services')}</p>
                <p className='text-[32px] lg:text-[64px] font-custom1'>{t('step_by_step')}</p>
                <div className='lg:w-[601px] w-full text-[16px] lg:text-[18px] font-custom lg:text-left tracking-tight lg:tracking-normal leading-[22.7px] font-normal text-[#191716]'>
                    <p>{t('step_by_step_description')}</p>
                    {/* <p className='mt-6'>From residential homes to commercial buildings and large-scale facilities, our projects showcase the versatility and efficiency of lightweight construction.</p> */}
                </div>
            </div>

            <div className='lg:hidden flex overflow-x-scroll mt-6'>
                <div className='flex flex-nowrap'>
                    <img src={step1} alt="" className='w-[292px] h-[447px] object-cover rounded-[15px] mr-4' />
                    <img src={step2} alt="" className='w-[292px] h-[447px] object-cover rounded-[15px] mr-4' />
                    <img src={step3} alt="" className='w-[292px] h-[447px] object-cover rounded-[15px]' />
                </div>
            </div>

            <div className='hidden lg:grid lg:grid-cols-3 gap-4 mt-6 lg:mt-0'>
                <img src={step1} alt="" className='w-full h-96 lg:w-[292px] lg:h-[447px] object-cover rounded-[15px]' />
                <img src={step2} alt="" className='w-full h-96 lg:w-[292px] lg:h-[447px] object-cover rounded-[15px]' />
                <img src={step3} alt="" className='w-full h-96 lg:w-[292px] lg:h-[447px] object-cover rounded-[15px]' />
            </div>
        </div>
    </div>
  )
}

export default ServicesStepByStep
