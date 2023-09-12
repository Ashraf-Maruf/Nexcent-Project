import React from 'react';
import CountUp from 'react-countup';
import Icon1 from '../../../Assets/Helping-Icon/Icon01.png'
import Icon2 from '../../../Assets/Helping-Icon/Icon02.png'
import Icon3 from '../../../Assets/Helping-Icon/Icon03.png'
import Icon4 from '../../../Assets/Helping-Icon/Icon04.png'
const HelpingSection = () => {
    return (
        <div className='hero  bg-white-500 py-16'>
            <div className=' max-w-[1152px] mx-auto lg:px-4'>
                <div className=' flex justify-between md1:flex-col md:items-start lg:gap-0 gap-20'>
                    <div class="">
                        <div className=' text-start' data-aos="zoom-in">
                            <h2 class=" font-Inter font-semibold text-indigo-500 md2:text-[25px] md2:leading-[36px] lg:text-[30px] lg:leading-[36px]  text-[36px] leading-[44px] normal-case">Helping a local <br /><span className=' text-green-900'>business reinvent itself</span></h2>
                            <p class="pt-2 text-[#18191F] font-Inter font-normal text-[18px] leading-[32px] normal-case">We reached here with our hard work and dedication</p>
                        </div>
                    </div>
                    <div className='max-w-[579px] mx-auto flex flex-wrap xm4:justify-start justify-end md:mt-10'>
                        <div className=' xm4:w-full w-[255px] flex items-center justify-end md:justify-start gap-6 pb-10'>
                            <div className=' bg-white-900 w-[60px] h-[60px] flex items-center justify-center rounded-full'>
                                <img src={Icon1} alt='img' />
                            </div>
                            <CountUp start={0} end={2245341} delay={2}>
                                {({ countUpRef }) => (
                                    <div>
                                        <span className='font-Inter font-bold text-indigo-500 text-[28px] leading-[36px]' ref={countUpRef} />
                                        <p className='font-Inter font-normal text-indigo-400 text-[16px] leading-[24px] capitalize'>Members</p>
                                    </div>
                                )}
                            </CountUp>
                        </div>
                        <div className='xm4:w-full w-[255px] flex items-center justify-end  gap-16 pb-10'>
                            <div className='bg-white-900 w-[60px] h-[60px] flex items-center justify-center rounded-full'>
                                <img className='text-right' src={Icon2} alt='img' />
                            </div>
                            <CountUp start={0} end={46328} delay={1}>
                                {({ countUpRef }) => (
                                    <div>
                                        <span className=' font-Inter font-bold text-indigo-500 text-[28px] leading-[36px]' ref={countUpRef} />
                                        <p className=' font-Inter font-normal text-indigo-400 text-[16px] leading-[24px] capitalize'>Clubs</p>
                                    </div>
                                )}
                            </CountUp>
                        </div>
                        <div className='xm4:w-full  w-[255px] flex items-center justify-end md:justify-start xm4:pb-10 gap-12'>
                            <div className='bg-white-900 w-[60px] h-[60px] flex items-center justify-center rounded-full'>
                                <img src={Icon3} alt='img' />
                            </div>
                            <CountUp start={0} end={828867} delay={2}>
                                {({ countUpRef }) => (
                                    <div>
                                        <span className=' font-Inter font-bold text-indigo-500 text-[28px] leading-[36px]' ref={countUpRef} />
                                        <p className='font-Inter font-normal text-indigo-400 text-[16px] leading-[24px] capitalize'>Event Bookings</p>
                                    </div>
                                )}
                            </CountUp>
                        </div>
                        <div className='xm4:w-full w-[255px] flex items-center justify-end gap-6'>
                            <div className='bg-white-900 w-[60px] h-[60px] flex items-center justify-center rounded-full'>
                                <img src={Icon4} alt='img' />
                            </div>
                            <CountUp start={0} end={1926436} delay={1}>
                                {({ countUpRef }) => (
                                    <div>
                                        <span className=' font-Inter font-bold text-indigo-500 text-[28px] leading-[36px]' ref={countUpRef} />
                                        <p className=' font-Inter font-normal text-indigo-400 text-[16px] leading-[24px] capitalize'>Payments</p>
                                    </div>
                                )}
                            </CountUp>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default HelpingSection;