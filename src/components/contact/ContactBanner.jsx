import React from "react";
import { Link, useLocation } from "react-router-dom";

const ContactBanner = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  if (isContactPage) {
    return null; // Return null to hide the component
  }

  return (
    <section className="flex items-center justify-center mt-20 lg:mt-32">
      <div className="lg:px-[50px] 2xl:px-[119px] w-full text-center lg:text-left">
        <div className="relative z-10 overflow-hidden rounded-[15px] bg-[#DD4624] lg:h-[208px] flex items-center py-12 lg:py-0">
          <div className="flex flex-col lg:flex-row items-center w-full lg:px-20">
            <div className="w-full px-4 lg:w-1/2 flex justify-center lg:justify-start">
              <span className="block mb-4 font-semibold text-white font-custom1 text-[32px] leading-[37.6px]">
                Ready to get started? <br />
                Talk to us today
              </span>
            </div>
            <div className="w-full px-4 lg:w-1/2 flex justify-center lg:justify-end">
              <Link
                to="/contact"
                onClick={() => window.scrollTo({ top: 0, left: 0 })}
                className="inline-flex py-3 my-1 text-[18px] font-medium transition bg-[#191716] text-[#F3F4F4] rounded-[8px] w-[200px] text-center h-[51px] justify-center items-center hover:bg-shadow-1 text-primary px-7 hover:bg-white hover:text-[#191716] font-custom"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactBanner;
