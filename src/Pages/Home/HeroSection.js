import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderData from './Slider/SliderSection';
import HeroImg from '../../Assets/Hero-img.png'
import './Slider/Slider.css'
import './Slider/SliderTheme.css'
import OurClientsSection from './OurClients/OurClientsSection';
import CommunitySection from './Community/CommunitySection';
import SpendingSection from './Spending/SpendingSection';
import HelpingSection from './Helping/HelpingSection';
import DesignSection from './Design/DesignSection';
import TimSmithSection from './TimSmith/TimSmithSection';
import MarketingSection from './Marketing/MarketingSection';
import SuscipitSection from './Suscipit/SuscipitSection';
import AllButton from '../../Componet/AllButton';
const HeroSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000

    };
    return (
        <div className=''>
            <div class="hero relative bg-white-500">
                <div className=' absolute z-20 top-0 w-full'>
                    <Navbar></Navbar>
                </div>
                <Slider {...settings}>
                    {sliderData.map((item) => (
                        <div className=' max-w-[1152px] md:h-auto lg:h-auto h-screen mx-auto xm2:px-4'>
                            <div className='hero-content  md:flex-col flex-row-reverse md1:gap-10 gap-20 xm4:mt-28 sm:mt-28 sm1:mt-28 md:mt-28 md:my-[80px] lg:mb-[80px] mt-[162px]'>
                                <img src={HeroImg} class=" w-full max-w-sm" alt='Img' />
                                <div className=' text-start'>
                                    <h1 class=" xm:text-[25px] xm1:text-[29px] md1:text-[30px] md1:leading-[40px] lg:text-[40px] lg:leading-[50px] text-[64px] leading-[76px] font-Inter normal-case font-semibold">{item.title} <br /><span className=' text-green-900'>{item.title1}</span></h1>
                                    <p class="py-6 text-indigo-400 normal-case font-Inter font-normal text-[16px] leading-[24px]">{item.para}</p>
                                    <AllButton>Register</AllButton>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <OurClientsSection></OurClientsSection>
            <CommunitySection></CommunitySection>
            <SpendingSection></SpendingSection>
            <HelpingSection></HelpingSection>
            <DesignSection></DesignSection>
            <TimSmithSection></TimSmithSection>
            <MarketingSection></MarketingSection>
            <SuscipitSection></SuscipitSection>
        </div>
    );
};

export default HeroSection;