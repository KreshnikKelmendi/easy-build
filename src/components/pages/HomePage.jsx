import React from 'react'
import Banner from '../Home/Banner'
import CountNumbers from '../Home/CountNumbers'
import Quality from '../Home/Quality'
import OurServices from '../services/OurServices'
import AboutUsOnHomePage from '../about/AboutUsOnHomePage'
import ProjectsOnHomePage from '../projects/ProjectsOnHomePage'
import Woods from '../woods/Woods'
import ServicesStepByStep from '../services/ServicesStepByStep'

const HomePage = () => {
  return (
    <>
      <Banner />
      {/* <Quality /> */}
      <div className='flex flex-col-reverse'>
      <CountNumbers />
      <div className='bg-[#191716] relative flex w-full lg:w-[541px] 2xl:w-[541px] lg:h-[260px] p-6 lg:hidden justify-center items-center lg:right-[60px] 2xl:right-[100px] lg:bottom-[-60px] 2xl:bottom-[-125px] z-40'>
          <Quality />
        </div>
        </div>
      <OurServices />
      <AboutUsOnHomePage />
      <ProjectsOnHomePage />
      <Woods />
      <ServicesStepByStep />
    </>
  )
}

export default HomePage