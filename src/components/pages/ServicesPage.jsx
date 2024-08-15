import React from 'react'
import ServiceBanner from '../services/ServiceBanner'
import FirstServices from '../services/FirstServices'
import SecondServices from '../services/SecondServices'
import ThirdServices from '../services/ThirdServices'

const ServicesPage = () => {
  return (
    <>
      <ServiceBanner />
      <FirstServices />
      <SecondServices />
      <ThirdServices />
    </>
  )
}

export default ServicesPage