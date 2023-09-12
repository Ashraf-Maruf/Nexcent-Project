import React from 'react';
import sideImg from '../../../Assets/Tim-Smith-Icon/Tim-Smith.png'
import Icon1 from '../../../Assets/Tim-Smith-Icon/Icon01.png'
import Icon2 from '../../../Assets/Tim-Smith-Icon/Icon02.png'
import Icon3 from '../../../Assets/Tim-Smith-Icon/Icon03.png'
import Icon4 from '../../../Assets/Tim-Smith-Icon/Icon04.png'
import Icon5 from '../../../Assets/Tim-Smith-Icon/Icon05.png'
import Icon6 from '../../../Assets/Tim-Smith-Icon/Icon06.png'
import { HiArrowLongRight } from "react-icons/hi2";
const TimSmithSection = () => {
    return (
        <div className='hero bg-white-500 py-[33px]'>
            <div className=' max-w-[1152px] mx-auto'>
                <div class="hero-content md:flex-col flex-row md1:gap-10 gap-20">
                    <img src={sideImg} class=" w-[326px] h-[326px] rounded-xl" alt='img' data-aos="zoom-out-right" />
                    <div className=' text-start' data-aos="zoom-out-left">
                        <p class="font-Inter font-medium text-[16px] leading-[24px] normal-case text-indigo-400">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                        <h4 className=' mt-[16px] font-Inter font-semibold text-green-900 text-[20px] leading-[28px] capitalize'>Tim Smith</h4>
                        <p className=' mt-2 text-[16px] font-Inter font-normal leading-[24px] text-indigo-400 normal-case'>British Dragon Boat Racing Association</p>
                        <div className=' flex items-center justify-between xm4:flex-col xm4:items-start md:flex-row md:items-center md1:flex-col md2:items-start md2:flex-col mt-8'>
                            <div className=' flex xm2:flex-wrap md1:gap-8 lg:gap-6 gap-10'>
                                <img src={Icon1} alt='Icon' />
                                <img src={Icon2} alt='Icon' />
                                <img src={Icon3} alt='Icon' />
                                <img src={Icon4} alt='Icon' />
                                <img src={Icon5} alt='Icon' />
                                <img src={Icon6} alt='Icon' />
                            </div>
                            <div>
                                <button className=' xm4:mt-4 md:mt-0 md1:mt-4 md2:mt-4 flex items-center font-Inter font-semibold text-[20px] text-green-900 leading-[28px] normal-case'>Meet all customers<span className=' ms-2'><HiArrowLongRight size={25} /></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimSmithSection;