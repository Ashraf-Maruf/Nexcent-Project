import React, { useState } from 'react';
import Logo from '../../Assets/Logo.png'
import { Link } from 'react-router-dom';
import { HiBars3CenterLeft, HiOutlineXMark } from "react-icons/hi2";
import './Navbar.css'
const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [fix, setFix] = useState(false);
    const setFixed = () => {
        if (window.scrollY >= 300) {
            setFix(true)
        } else {
            setFix(false)
        }
    }
    window.addEventListener("scroll", setFixed)
    return (
        <div className={` border-b-green-900 border-b-[1px] w-full top-[-1px] z-20 ${fix ? 'navbar1 fixed' : 'navbar1'}`}>
            <div className=' max-w-[1215px] mx-auto px-4'>
                <div className=' h-[84px] flex justify-between items-center'>
                    <div>
                        <img src={Logo} alt='Logo' />
                    </div>
                    <ul className=' flex lg:gap-8 gap-12 md2:hidden '>
                        <li><Link className=' hover:font-bold transition duration-700 ease-in-out  text-[#18191F] text-[16px] leading-[24px] font-Inter font-normal'>Home</Link></li>
                        <li><Link className='hover:font-bold transition duration-700 ease-in-out text-[#18191F] text-[16px] leading-[24px] font-Inter font-normal'>Service</Link></li>
                        <li><Link className='hover:font-bold transition duration-700 ease-in-out text-[#18191F] text-[16px] leading-[24px] font-Inter font-normal'>Feature</Link></li>
                        <li><Link className='hover:font-bold transition duration-700 ease-in-out text-[#18191F] text-[16px] leading-[24px] font-Inter font-normal'>Product</Link></li>
                        <li><Link className='hover:font-bold transition duration-700 ease-in-out text-[#18191F] text-[16px] leading-[24px] font-Inter font-normal'>Testimonial</Link></li>
                        <li><Link className='hover:font-bold transition duration-700 ease-in-out text-[#18191F] text-[16px] leading-[24px] font-Inter font-normal'>FAQ</Link></li>
                    </ul>

                    <div className=' hidden md2:block items-end justify-end text-white text-5xl' onClick={() => setOpen(!open)}>
                        {
                            open ? <HiOutlineXMark color='#4CAF4F' /> : <HiBars3CenterLeft color='#4CAF4F' />
                        }
                    </div>
                    <ul className={` bg-[#4CAF4F] p-10 flex z-30 flex-col gap-8 xm:w-64 xm1:w-64 xm2:w-72 w-80 h-[550px] fixed ${open ? 'top-[83px] translate-x-[-5%] transition duration-700 ease-in-out' : 'top-[-9999px]'}`}>
                        <li><Link className='text-black-900 text-[20px] leading-[24px] font-Inter font-bold'>Home</Link></li>
                        <li><Link className='text-black-900 text-[20px] leading-[24px] font-Inter font-bold'>Service</Link></li>
                        <li><Link className='text-black-900 text-[20px] leading-[24px] font-Inter font-bold'>Feature</Link></li>
                        <li><Link className='text-black-900 text-[20px] leading-[24px] font-Inter font-bold'>Product</Link></li>
                        <li><Link className='text-black-900 text-[20px] leading-[24px] font-Inter font-bold'>Testimonial</Link></li>
                        <li><Link className='text-black-900 text-[20px] leading-[24px] font-Inter font-bold'>FAQ</Link></li>
                        <div className=' flex flex-col xm2:px-4 px-10 gap-4'>
                            <button class="btn border-transparent bg-white-900 text-black-900 rounded-md h-[40px] bg-transparent transition duration-700 ease-in-out px-6 font-Inter font-bold text-[20px] leading-[20px]">Login</button>
                            <button class="btn bg-white-900 text-black-900  px-6 h-[40px] font-Inter font-bold text-[20px] leading-[20px]">Sign up</button>
                        </div>
                    </ul>
                    <div className=' md2:hidden flex gap-4 items-center'>
                        <button class="btn  border-transparent text-green-900  hover:font-bold rounded-md h-[40px] bg-transparent hover:bg-green-900 transition duration-700 ease-in-out hover:text-white-900 px-6 font-Inter font-medium text-[14px] leading-[20px]">Login</button>
                        <button class="btn bg-green-900 hover:bg-green-900 hover:font-bold px-6 h-[40px] text-white-900 font-Inter font-medium text-[14px] leading-[20px]">Sign up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;