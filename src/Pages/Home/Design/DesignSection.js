import React from 'react';
import Icon from '../../../Assets/design-img.png'
import AllButton from '../../../Componet/AllButton';
const DesignSection = () => {
    return (
        <div className='hero bg-white-900 py-[48px]'>
            <div className=' max-w-[1152px] mx-auto'>
                <div className="hero-content md:flex-col flex-row md1:gap-20 gap-48">
                    <img src={Icon} className=" w-full lg:w-[441px] h-[433px]" alt='img' data-aos="zoom-in-down" />
                    <div className=' text-start' data-aos="zoom-in-left">
                        <h2 className=" font-Inter font-semibold xm:text-[19px] xm:leading-[35px] xm1:text-[22px] xm1:leading-[35px] xm2:text-[22px] xm2:leading-[35px] xm3:text-[25px] xm3:leading-[35px] xm4:text-[30px] text-[36px] leading-[44px] text-indigo-500 normal-case">How to design your site footer like we did</h2>
                        <p className=" pt-4 font-Inter font-normal text-[14px] leading-[20px] normal-case text-indigo-400">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                        <div className=' mt-8'>
                            <AllButton>Learn More</AllButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DesignSection;