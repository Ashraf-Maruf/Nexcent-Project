import React from 'react';
import Img1 from '../../../Assets/marketing01.png'
import Img2 from '../../../Assets/marketing02.png'
import Img3 from '../../../Assets/marketing03.png'
import { HiArrowLongRight } from "react-icons/hi2";
const MarketingSection = () => {
    const marketingData = [
        {
            id: 1,
            img: Img1,
            title: "Creating Streamlined Safeguarding Processes with OneRen",
            Readmore: "Readmore"
        },
        {
            id: 2,
            img: Img2,
            title: "What are your safeguarding responsibilities and how can you manage them?",
            Readmore: "Readmore",
        },
        {
            id: 3,
            img: Img3,
            title: "Revamping the Membership Model with Triathlon Australia",
            Readmore: "Readmore"
        }
    ]
    const boxShadow = {
        boxShadow: '0px 8px 16px 0px rgba(171, 190, 209, 40%)',
    }
    return (
        <div className=' bg-white-900 pt-[48px] mb-[160px] md1:mb-[100px]'>
            <div className='  max-w-[1152px] mx-auto md1:px-4 lg1:px-4'>
                <div className=' max-w-[628px] mx-auto pb-10'>
                    <h2 className=' font-Inter font-semibold text-[36px] leading-[44px] text-indigo-500 normal-case'>Caring is the new marketing</h2>
                    <p className=' mt-2 font-Inter font-normal text-[16px] leading-[24px] text-indigo-400 normal-case'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
                </div>
                <div className=' grid grid-cols-3 sm1:grid-cols-1 md1:grid-cols-2  gap-6'>
                    {
                        marketingData.map(marketing => <div className=" md1:mb-24 md2:mb-24" key={marketing.id}>
                            <div className=' relative'>
                                <img className=' w-full h-[286px]' src={marketing.img} alt="Shoes" />
                                <div className=' absolute xm2:left-4 xm3:left-5 md1:left-5 md2:left-4 top-48 xm2:px-4 md2:p-4 xm4:px-12 xm4:py-6 sm1:px-28 p-5 rounded-lg lg:left-4 lg:w-[90%] lg:h-[65%]  md2:h-[65%] sm1:left-6  left-6 w-[317px] h-[176px] bg-white-500 ' style={boxShadow} data-aos="fade-up-left">
                                    <h4 className=' font-Inter font-semibold xm2:text-[17px] md2:text-[18px]  lg:text-[18px] text-[20px] leading-[28px] text-indigo-500 normal-case'>{marketing.title}</h4>
                                    <div className=' flex justify-center'>
                                        <button className=' mt-4 flex items-center text-green-900 font-Inter font-semibold text-[20px] leading-[28px] normal-case'>{marketing.Readmore}<span className=' ms-2'><HiArrowLongRight size={25} /></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default MarketingSection;