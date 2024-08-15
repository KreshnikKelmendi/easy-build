import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Spin } from 'antd';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [loading, setLoading] = useState(false);
  const { t, i18n } = useTranslation();
  const [isFixed, setFixed] = useState(false);

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY && isFixed) {
        // Scrolling down and header is fixed
        setFixed(false);
      } else if (currentScrollY <= prevScrollY && !isFixed) {
        // Scrolling up and header is not fixed
        setFixed(true);
      }

      prevScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFixed]);

  const handleNav = () => {
    setNav(!nav);
    window.scrollTo(0, 0);
};

  const changeLanguage = (lng) => {
    setLoading(true);
    setTimeout(() => {
      i18n.changeLanguage(lng).finally(() => setLoading(false));
    }, 1000); 
  };

  return (
    <div className={`w-full top-0 z-50 flex justify-center items-center h-24 lg:h-[127px] mx-auto px-5 text-[#F3F4F4] bg-[#191716] ${
      isFixed ? 'sticky top-0 left-0 right-0 w-full z-50 flex justify-center items-center h-24 lg:h-[127px] mx-auto px-5 text-[#F3F4F4] bg-[#191716]' : ''
    }`}>
      {/* Logo and navigation for large devices */}
      <div className='hidden lg:flex justify-center items-center space-x-2'>
        {/* Left-side navigation links */}
        <ul className='flex items-center lg:space-x-[70px] 2xl:space-x-[160px] text-[18px] uppercase font-custom font-light'>
          <NavLink to="/" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })} className='cursor-pointer duration-300 hover:text-[#DD4624]'>
            {t('Home')}
          </NavLink>
          <NavLink to="/about-easybuild" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })} className='cursor-pointer duration-300 hover:text-[#DD4624]'>
            {t('About')}
          </NavLink>
          <NavLink to="/services" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })} className='cursor-pointer duration-300 hover:text-[#DD4624]'>
            {t('Services')}
          </NavLink>
          <Link to="/" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
          <svg width="154" height="44" viewBox="0 0 154 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_56_327)">
              <path d="M45.451 25.0759V37.9315L39.583 43.4962H0V34.1198H35.896L45.451 25.0759Z" fill="#DD4726"/>
              <path d="M42.1363 16.1219L31.2216 26.4363H0V17.0599H27.5312L42.1363 3.25964V16.1219Z" fill="#DD4726"/>
              <path d="M33.6452 0H0V9.37644H23.7245L33.6452 0Z" fill="#DD4726"/>
              <path d="M117.941 6.95501V5.27862H104.712V8.77442H119.796L121.472 10.7734V17.6586C120.757 18.3371 120.365 18.693 119.653 19.3716H102.751L101.145 17.4457V14.1262H104.712V15.8026H117.941V12.3068H102.748L101.142 10.4142V3.42263C101.853 2.74409 102.249 2.38819 102.96 1.70966H119.793L121.469 3.70868V6.95501H117.938H117.941Z" fill="white"/>
              <path d="M95.9022 19.3682L94.1268 16.042H83.4215L81.6495 19.3682L77.517 19.3516L87.2881 1.69965H90.36L99.9582 19.3682H95.9088H95.9022ZM88.8041 6.017L85.1071 12.9188H92.4412L88.8041 6.017Z" fill="white"/>
              <path d="M150.193 2.22854V4.31736H149.558V2.22854H148.78V1.70966H150.961V2.22854H150.193ZM153.405 4.31736C153.405 4.1444 153.428 2.39152 153.428 2.39152L152.87 4.31736H152.281L151.746 2.36824C151.746 2.36824 151.786 4.10449 151.786 4.31736H151.191V1.70966H152.045L152.604 3.58561L153.146 1.70966H154V4.31736H153.405Z" fill="white"/>
              <path d="M143.863 1.7063H139.445L133.261 9.08705L127.081 1.7063H122.662L131.496 12.2502V19.3582H135.04V12.2402L143.863 1.7063Z" fill="white"/>
              <path d="M57.3564 1.7063V1.70962V19.3682H75.1332V15.7926H60.9105V12.3201H75.1332V8.7511H60.9105V5.27859H75.1332V1.70962V1.7063H57.3564Z" fill="white"/>
              <path d="M108.439 41.7766V24.1479H112.003V38.2275H125.265V41.7766H108.439Z" fill="white"/>
              <path d="M106.059 24.1479H102.492V41.7732H106.059V24.1479Z" fill="white"/>
              <path d="M96.5438 24.1479V38.2275H84.0233V24.1479H80.4559V39.8407C81.2605 40.6024 81.7093 41.0315 82.5139 41.7965H98.0532C98.8544 41.0315 100.111 39.8407 100.111 39.8407V24.1479H96.5438Z" fill="white"/>
              <path d="M78.0755 32.1008H76.2204L77.0848 31.1827V26.0771L75.2562 24.1346L57.3531 24.1479V41.8065L75.2729 41.7965L78.0722 38.8229V32.1008H78.0755ZM73.9231 38.2276H60.9138V34.6586H74.9371V37.1399L73.9231 38.2276ZM60.9138 31.0896V27.7235H73.9463V29.9354L73.9297 29.9554L72.8559 31.0929H60.9138V31.0896Z" fill="white"/>
              <path d="M145.565 24.1446L127.646 24.1346V41.8131L145.565 41.8032L148.78 38.4138V27.5339L145.565 24.1446ZM145.625 36.7474L144.219 38.2276H131.2V27.7136H144.209L145.622 29.2037V36.7474H145.625Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_56_327">
                <rect width="154" height="43.4962" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          </Link>

          <NavLink to="/projects" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })} className='cursor-pointer duration-300 hover:text-[#DD4624]'>
            {t('Projects')}
          </NavLink>
          <NavLink to="/contact" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })} className='cursor-pointer duration-300 hover:text-[#DD4624]'>
            {t('Contact')}
          </NavLink>
          <p className='cursor-pointer duration-300'>
            <ul className='flex gap-x-[3px]'>
              <li
                onClick={() => changeLanguage('de')}
                className={i18n.language === 'de' ? 'text-[#DD4726]' : 'hover:text-[#DD4726]'}
              >
                DE
              </li> /
              <li
                onClick={() => changeLanguage('en')}
                className={i18n.language === 'en' ? 'text-[#DD4726]' : 'hover:text-[#DD4726]'}
              >
                EN
              </li> /
              <li
                onClick={() => changeLanguage('al')}
                className={i18n.language === 'al' ? 'text-[#DD4726]' : 'hover:text-[#DD4726]'}
              >
                AL
              </li>
            </ul>
          </p>
        </ul>
      </div>

      {/* Logo and navigation for mobile devices */}
      <div className='flex lg:hidden justify-between items-center w-full'>
        <Link to="/" onClick={() => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })}>
        <svg width="154" height="44" viewBox="0 0 154 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_56_327)">
              <path d="M45.451 25.0759V37.9315L39.583 43.4962H0V34.1198H35.896L45.451 25.0759Z" fill="#DD4726"/>
              <path d="M42.1363 16.1219L31.2216 26.4363H0V17.0599H27.5312L42.1363 3.25964V16.1219Z" fill="#DD4726"/>
              <path d="M33.6452 0H0V9.37644H23.7245L33.6452 0Z" fill="#DD4726"/>
              <path d="M117.941 6.95501V5.27862H104.712V8.77442H119.796L121.472 10.7734V17.6586C120.757 18.3371 120.365 18.693 119.653 19.3716H102.751L101.145 17.4457V14.1262H104.712V15.8026H117.941V12.3068H102.748L101.142 10.4142V3.42263C101.853 2.74409 102.249 2.38819 102.96 1.70966H119.793L121.469 3.70868V6.95501H117.938H117.941Z" fill="white"/>
              <path d="M95.9022 19.3682L94.1268 16.042H83.4215L81.6495 19.3682L77.517 19.3516L87.2881 1.69965H90.36L99.9582 19.3682H95.9088H95.9022ZM88.8041 6.017L85.1071 12.9188H92.4412L88.8041 6.017Z" fill="white"/>
              <path d="M150.193 2.22854V4.31736H149.558V2.22854H148.78V1.70966H150.961V2.22854H150.193ZM153.405 4.31736C153.405 4.1444 153.428 2.39152 153.428 2.39152L152.87 4.31736H152.281L151.746 2.36824C151.746 2.36824 151.786 4.10449 151.786 4.31736H151.191V1.70966H152.045L152.604 3.58561L153.146 1.70966H154V4.31736H153.405Z" fill="white"/>
              <path d="M143.863 1.7063H139.445L133.261 9.08705L127.081 1.7063H122.662L131.496 12.2502V19.3582H135.04V12.2402L143.863 1.7063Z" fill="white"/>
              <path d="M57.3564 1.7063V1.70962V19.3682H75.1332V15.7926H60.9105V12.3201H75.1332V8.7511H60.9105V5.27859H75.1332V1.70962V1.7063H57.3564Z" fill="white"/>
              <path d="M108.439 41.7766V24.1479H112.003V38.2275H125.265V41.7766H108.439Z" fill="white"/>
              <path d="M106.059 24.1479H102.492V41.7732H106.059V24.1479Z" fill="white"/>
              <path d="M96.5438 24.1479V38.2275H84.0233V24.1479H80.4559V39.8407C81.2605 40.6024 81.7093 41.0315 82.5139 41.7965H98.0532C98.8544 41.0315 100.111 39.8407 100.111 39.8407V24.1479H96.5438Z" fill="white"/>
              <path d="M78.0755 32.1008H76.2204L77.0848 31.1827V26.0771L75.2562 24.1346L57.3531 24.1479V41.8065L75.2729 41.7965L78.0722 38.8229V32.1008H78.0755ZM73.9231 38.2276H60.9138V34.6586H74.9371V37.1399L73.9231 38.2276ZM60.9138 31.0896V27.7235H73.9463V29.9354L73.9297 29.9554L72.8559 31.0929H60.9138V31.0896Z" fill="white"/>
              <path d="M145.565 24.1446L127.646 24.1346V41.8131L145.565 41.8032L148.78 38.4138V27.5339L145.565 24.1446ZM145.625 36.7474L144.219 38.2276H131.2V27.7136H144.209L145.622 29.2037V36.7474H145.625Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_56_327">
                <rect width="154" height="43.4962" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </Link>
        <div onClick={handleNav}>
          {nav ? <AiOutlineClose size={30} color='#F3F4F4' /> : <AiOutlineMenu size={30} color='#F3F4F4' />}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <ul className={
        nav
          ? 'fixed lg:hidden font-custom1 text-5xl left-0 top-0 w-full h-full bg-[#191716] mt-3 z-50'
          : ' w-[100%] fixed top-0 bottom-0 left-[-100%]'
        }>
        {/* Mobile Logo and Close Icon */}
        <div className='flex justify-between items-center mx-4 my-2'>
        <svg width="154" height="44" viewBox="0 0 154 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_56_327)">
              <path d="M45.451 25.0759V37.9315L39.583 43.4962H0V34.1198H35.896L45.451 25.0759Z" fill="#DD4726"/>
              <path d="M42.1363 16.1219L31.2216 26.4363H0V17.0599H27.5312L42.1363 3.25964V16.1219Z" fill="#DD4726"/>
              <path d="M33.6452 0H0V9.37644H23.7245L33.6452 0Z" fill="#DD4726"/>
              <path d="M117.941 6.95501V5.27862H104.712V8.77442H119.796L121.472 10.7734V17.6586C120.757 18.3371 120.365 18.693 119.653 19.3716H102.751L101.145 17.4457V14.1262H104.712V15.8026H117.941V12.3068H102.748L101.142 10.4142V3.42263C101.853 2.74409 102.249 2.38819 102.96 1.70966H119.793L121.469 3.70868V6.95501H117.938H117.941Z" fill="white"/>
              <path d="M95.9022 19.3682L94.1268 16.042H83.4215L81.6495 19.3682L77.517 19.3516L87.2881 1.69965H90.36L99.9582 19.3682H95.9088H95.9022ZM88.8041 6.017L85.1071 12.9188H92.4412L88.8041 6.017Z" fill="white"/>
              <path d="M150.193 2.22854V4.31736H149.558V2.22854H148.78V1.70966H150.961V2.22854H150.193ZM153.405 4.31736C153.405 4.1444 153.428 2.39152 153.428 2.39152L152.87 4.31736H152.281L151.746 2.36824C151.746 2.36824 151.786 4.10449 151.786 4.31736H151.191V1.70966H152.045L152.604 3.58561L153.146 1.70966H154V4.31736H153.405Z" fill="white"/>
              <path d="M143.863 1.7063H139.445L133.261 9.08705L127.081 1.7063H122.662L131.496 12.2502V19.3582H135.04V12.2402L143.863 1.7063Z" fill="white"/>
              <path d="M57.3564 1.7063V1.70962V19.3682H75.1332V15.7926H60.9105V12.3201H75.1332V8.7511H60.9105V5.27859H75.1332V1.70962V1.7063H57.3564Z" fill="white"/>
              <path d="M108.439 41.7766V24.1479H112.003V38.2275H125.265V41.7766H108.439Z" fill="white"/>
              <path d="M106.059 24.1479H102.492V41.7732H106.059V24.1479Z" fill="white"/>
              <path d="M96.5438 24.1479V38.2275H84.0233V24.1479H80.4559V39.8407C81.2605 40.6024 81.7093 41.0315 82.5139 41.7965H98.0532C98.8544 41.0315 100.111 39.8407 100.111 39.8407V24.1479H96.5438Z" fill="white"/>
              <path d="M78.0755 32.1008H76.2204L77.0848 31.1827V26.0771L75.2562 24.1346L57.3531 24.1479V41.8065L75.2729 41.7965L78.0722 38.8229V32.1008H78.0755ZM73.9231 38.2276H60.9138V34.6586H74.9371V37.1399L73.9231 38.2276ZM60.9138 31.0896V27.7235H73.9463V29.9354L73.9297 29.9554L72.8559 31.0929H60.9138V31.0896Z" fill="white"/>
              <path d="M145.565 24.1446L127.646 24.1346V41.8131L145.565 41.8032L148.78 38.4138V27.5339L145.565 24.1446ZM145.625 36.7474L144.219 38.2276H131.2V27.7136H144.209L145.622 29.2037V36.7474H145.625Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_56_327">
                <rect width="154" height="43.4962" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          <AiOutlineClose color='#F3F4F4' size={30} onClick={handleNav} className='cursor-pointer' />
        </div>
        
        {/* Mobile Navigation Items */}
        <div className='flex flex-col h-screen justify-center items-center mt-[-65px] text-[#F3F4F4] uppercase'>
          <Link onClick={handleNav} to="/" className='p-4 text-center hover:text-black cursor-pointer border-gray-600'>
            {t('Home')}
          </Link>
          <Link onClick={handleNav} to="/about-easybuild" className='p-4 text-center hover:text-black cursor-pointer border-gray-600'>
            {t('About')}
          </Link>
          <Link onClick={handleNav} to="/services" className='p-4 text-center hover:text-black cursor-pointer border-gray-600'>
            {t('Services')}
          </Link>
          <Link onClick={handleNav} to="/projects" className='p-4 text-center hover:text-black cursor-pointer border-gray-600'>
            {t('Projects')}
          </Link>
          <Link onClick={handleNav} to="/contact" className='p-4 text-center hover:text-black cursor-pointer border-gray-600'>
            {t('Contact')}
          </Link>
          <p className='cursor-pointer duration-300 text-[16px] mt-16'>
            <ul className='flex gap-x-[10px] justify-end'>
              <li
                onClick={() => changeLanguage('de')}
                className={i18n.language === 'de' ? 'text-[#DD4726]' : 'hover:text-[#DD4726]'}
              >
                DE
              </li> /
              <li
                onClick={() => changeLanguage('en')}
                className={i18n.language === 'en' ? 'text-[#DD4726]' : 'hover:text-[#DD4726]'}
              >
                EN
              </li> /
              <li
                onClick={() => changeLanguage('al')}
                className={i18n.language === 'al' ? 'text-[#DD4726]' : 'hover:text-[#DD4726]'}
              >
                AL
              </li>
            </ul>
          </p>
        </div>
      </ul>
      

      {/* Loading Spinner */}
      {loading && (
        <div className="loading-overlay">
          <Spin size="large" />
        </div>
      )}
    </div>
  );
};

export default Navbar;
