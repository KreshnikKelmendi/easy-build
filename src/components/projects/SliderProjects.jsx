import React, { useState, useEffect } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import image1 from "../assets/demo-1.png";
import image2 from "../assets/demo-2.png";
import image3 from "../assets/demo-3.png";

const slidesData = [
    {
        imgSrc: image1,
        imgAlt: "black chair and white table",
        title: "Minimal Interior",
        subtitle: "Renovation & Architecture"
    },
    {
        imgSrc: image2,
        imgAlt: "sitting area",
        title: "Minimal Interior",
        subtitle: "Renovation & Architecture"
    },
    {
        imgSrc: image3,
        imgAlt: "sitting area",
        title: "Minimal Interior",
        subtitle: "Renovation & Architecture"
    },
    {
        imgSrc: image1,
        imgAlt: "sitting area",
        title: "Minimal Interior",
        subtitle: "Renovation & Architecture"
    },
    {
        imgSrc: image3,
        imgAlt: "black chair and white table",
        title: "Catalog 2",
        subtitle: "Minimal Interior"
    },
    {
        imgSrc: image2,
        imgAlt: "sitting area",
        title: "Catalog 2",
        subtitle: "Minimal Interior"
    }
    
];

export default function SliderProjects() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = slidesData.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [totalSlides]);

    return (
        <div className="mx-auto z-50">
            <div className="flex items-center justify-center w-full h-full py-26 sm:py-8">
                {/* Carousel for desktop and large size devices */}
                <CarouselProvider
                    className="lg:block hidden"
                    naturalSlideWidth={100}
                    isIntrinsicHeight={true}
                    totalSlides={totalSlides}
                    visibleSlides={3}
                    step={1}
                    infinite={true}
                    currentSlide={currentIndex}
                    onChange={(index) => setCurrentIndex(index)}
                >
                    <div className="w-full relative flex items-center justify-center">
                        <div className="w-full h-full overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-4 md:gap-6 gap-14 transition ease-out duration-700">
                                    {slidesData.map((slide, index) => (
                                        <Slide index={index} key={index}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={slide.imgSrc} alt={slide.imgAlt} className="object-cover object-center w-[485px] h-[613px] rounded-[15px]" />
                                                <div className="absolute w-full h-full p-6">
                                                    <div className="flex flex-col h-full justify-end text-center pb-6 lg:text-[24px] font-custom font-normal text-white">
                                                        <p className="text-xl lg:text-[24px] font-custom font-normal leading-5 lg:leading-6">{slide.title}</p>
                                                        <p className="text-[20px] mt-[3px]">{slide.subtitle}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                    ))}
                                </div>
                            </Slider>
                        </div>
                    </div>
                </CarouselProvider>

                {/* Carousel for tablet and medium size devices */}
                <CarouselProvider
                    className="lg:hidden md:block hidden"
                    naturalSlideWidth={100}
                    isIntrinsicHeight={true}
                    totalSlides={totalSlides}
                    visibleSlides={2}
                    step={1}
                    infinite={true}
                    currentSlide={currentIndex}
                    onChange={(index) => setCurrentIndex(index)}
                >
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                            <Slider>
                                <div id="slider" className="h-full flex lg:gap-8 md:gap-6 gap-14 items-center justify-start transition ease-out duration-700">
                                    {slidesData.map((slide, index) => (
                                        <Slide index={index} key={index}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={slide.imgSrc} alt={slide.imgAlt} className="object-cover object-center w-full" />
                                                <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                                                    <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white">{slide.title}</h2>
                                                    <div className="flex h-full items-end pb-6">
                                                        <h3 className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white">{slide.subtitle}</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                    ))}
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>

                {/* Carousel for mobile and Small size Devices */}
                <CarouselProvider
                    className="block md:hidden"
                    naturalSlideWidth={100}
                    isIntrinsicHeight={true}
                    totalSlides={totalSlides}
                    visibleSlides={1}
                    step={1}
                    infinite={true}
                    currentSlide={currentIndex}
                    onChange={(index) => setCurrentIndex(index)}
                >
                    <div className="w-full relative flex items-center justify-center">
                        <ButtonBack role="button" aria-label="slide backward" className="absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer" id="prev">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 1L1 7L7 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonBack>
                        <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden py-10">
                            <Slider>
                                <div id="slider" className="h-full w-full flex lg:gap-8 items-center justify-start transition ease-out duration-700">
                                    {slidesData.map((slide, index) => (
                                        <Slide index={index} key={index}>
                                            <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                                                <img src={slide.imgSrc} alt={slide.imgAlt} className="object-cover object-center w-full h-96 rounded-[15px]" />
                                                <div className="absolute w-full h-full p-6">
                                                    <div className="flex flex-col h-full justify-end text-center pb-6 text-white">
                                                        <p className="text-xl lg:text-2xl font-semibold leading-5 lg:leading-6">{slide.title}</p>
                                                        <p className="text-[20px] mt-[3px]">{slide.subtitle}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slide>
                                    ))}
                                </div>
                            </Slider>
                        </div>
                        <ButtonNext role="button" aria-label="slide forward" className="absolute z-30 right-0 mr-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" id="next">
                            <svg width={8} height={14} viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L7 7L1 13" stroke="white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>
    );
}
