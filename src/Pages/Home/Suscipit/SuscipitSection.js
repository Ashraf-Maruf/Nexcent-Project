import React from 'react';
import { HiArrowLongRight } from "react-icons/hi2";
const SuscipitSection = () => {
    return (
        <div className=' bg-white-500 py-8'>
            <div className=' max-w-[887px] mx-auto xm2:px-4'>
                <h1 className=' text-black-900 font-Inter font-semibold xm2:text-[30px] xm2:leading-[40px] xm3:text-[30px] xm3:leading-[40px] text-[64px] leading-[76px] normal-case'>Pellentesque suscipit fringilla libero eu.</h1>
                <div className=' flex justify-center'>
                    <button className=' mt-8 bg-green-900 text-[16px] font-Inter font-medium leading-[24px] py-4 px-6 flex justify-center items-center rounded-md text-white-900'>Get a Demo <span className=' ms-2'><HiArrowLongRight size={25} /></span></button>
                </div>
            </div>
        </div>
    );
};

export default SuscipitSection;