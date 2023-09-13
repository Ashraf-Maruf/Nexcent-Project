import React from 'react';
import SpendingImg from '../../../Assets/Spending-img.png'
import AllButton from '../../../Componet/AllButton';
const SpendingSection = () => {
    return (
        <div className=' bg-white-900'>
            <div className="hero">
                <div className=' max-w-[1152px] mx-auto'>
                    <div className='hero-content md:flex-col flex-row gap-1'>
                        <img src={SpendingImg} className=" md:w-full w-[442px] h-[433px]" alt='Img' data-aos="fade-down-right" />
                        <div className=' text-start md:pb-10' data-aos="fade-left">
                            <h2 className=" font-Inter font-semibold  xm:text-[19px] xm:leading-[35px] xm1:text-[22px] xm1:leading-[35px] xm2:text-[22px] xm2:leading-[35px] xm3:text-[25px] xm3:leading-[35px] xm4:text-[30px] text-[36px] leading-[44px] text-indigo-500 normal-case">The unseen of spending three <br />years at Pixelgrade</h2>
                            <p className="py-6 font-Inter font-normal text-[14px] leading-[20px] text-indigo-400 normal-case">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                            <AllButton>Learn More</AllButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpendingSection;