import React from 'react'
import about1 from "../assets/about1.png"
import ProjectsOnHomePage from '../projects/ProjectsOnHomePage'
import Woods from '../woods/Woods'
import ServicesStepByStep from '../services/ServicesStepByStep'
import { Link } from 'react-router-dom'

const AboutUsOnHomePage = () => {
  return (
    <>
        <div className=' bg-[#DD4624] h-[1400px] lg:h-[1336px] rounded-[15px] relative z-10'>
            <div className='flex flex-col lg:flex-row px-5 lg:px-[60px] py-16 2xl:px-[120px] lg:py-36'>
                <div className='w-full lg:w-1/2'>
                <img src={about1} alt='' className='w-full h-full object-cover  rounded-[15px]' />
                </div>

                <div className='w-full lg:w-1/2 flex flex-col lg:justify-center mt-12 lg:mt-0 lg:pl-[50px] 2xl:pl-[100px] lg:py-5 2xl:py-0'>
                <p className='text-[#F3F4F4] text-[18px] font-custom font-normal'>ABOUT US</p>
                <p className='font-custom1 text-[32px] lg:text-[60px] 2xl:text-[64px] text-[#F3F3F3] lg:leading-[67px] 2xl:leading-[75.2px] mt-6'>Discover the future of construction with us </p>
                <p className='text-[18px] font-normal leading-[21.15px] text-[#F3F4F4] w-full 2xl:w-[667px] mt-6'>We are dedicated to revolutionizing the construction industry with our unique focus on lightweight building methods. Our name reflects our mission: to simplify construction through innovative prefabrication techniques. </p>
                <p className='text-[18px] font-normal leading-[21.15px] text-[#F3F4F4] w-full 2xl:w-[667px] mt-4'>We use wood as the primary construction material, offering sustainable and eco-friendly solutions.</p>
                <Link to="/about-easybuild" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
                  <button className='w-full lg:w-[200px] bg-[#191716] py-3 rounded-[8px] hover:bg-white hover:text-black hover:duration-500 text-[#F3F4F4] font-custom mt-6'>Read More</button>
                </Link>
                </div>
            </div>
       
        </div>
  
    </>
  )
}

export default AboutUsOnHomePage