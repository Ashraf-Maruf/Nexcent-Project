import React from 'react';
import FooterLogo from '../../Assets/Footer-logo.png'
import { FaInstagram, FaTwitter, FaYoutube, FaFacebookF } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { HiOutlinePaperAirplane } from "react-icons/hi2";
const Footer = () => {
    return (
        <div class=" xm2:ps-4 px-10 py-[64px] bg-black-500">
            <div className=' max-w-[1110px] mx-auto'>
                <footer class=" flex justify-between md1:flex-wrap md1:gap-8 md2:flex-wrap lg:flex-wrap  text-white-900">
                    <div className=' text-start'>
                        <img src={FooterLogo} alt='Footer Logo' />
                        <p className=' mt-10 font-Inter font-normal text-[14px] leading-[30px] normal-case text-white-500'>Copyright © 2020 Nexcent ltd.<br />All rights reserved</p>
                        <div className=' flex gap-4 mt-10'>
                            <Link className=' bg-white-900 bg-opacity-10 flex items-center justify-center rounded-full w-[32px] h-[32px]'><FaInstagram color='#FFFFFF' size={20} /></Link>
                            <Link className=' bg-white-900 bg-opacity-10 flex items-center justify-center rounded-full w-[32px] h-[32px]'><FaTwitter color='#FFFFFF' size={20} /></Link>
                            <Link className=' bg-white-900 bg-opacity-10 flex items-center justify-center rounded-full w-[32px] h-[32px]'><FaYoutube color='#FFFFFF' size={20} /></Link>
                            <Link className=' bg-white-900 bg-opacity-10 flex items-center justify-center rounded-full w-[32px] h-[32px]'><FaFacebookF color='#FFFFFF' size={20} /></Link>
                        </div>
                    </div>
                    <div className='flex flex-col text-start gap-2 md1:flex-col md1:text-start md2:flex-col md2:text-start lg:flex-col lg:text-start'>
                        <header class=" font-Inter font-semibold text-[20px] leading-[28px] normal-case mb-6">Company</header>
                        <Link class="link link-hover text-[14px] font-Inter font-normal text-white-500 normal-case">About us</Link>
                        <Link class="link link-hover text-[14px] font-Inter font-normal text-white-500 normal-case">Blog</Link>
                        <Link class="link link-hover text-[14px] font-Inter font-normal text-white-500 normal-case">Contact us</Link>
                        <Link class="link link-hover text-[14px] font-Inter font-normal text-white-500 normal-case">Pricing</Link>
                        <Link class="link link-hover text-[14px] font-Inter font-normal text-white-500 normal-case">Testimonials</Link>
                    </div>
                    <div className='flex flex-col text-start gap-2 md1:flex-col md1:text-start md2:flex-col md2:text-start lg:flex-col lg:text-start'>
                        <header class=" font-Inter font-semibold text-[20px] leading-[28px] normal-case mb-6">Support</header>
                        <Link class="link link-hover text-[14px] font-Inter font-normal text-white-500 normal-case ">Help center</Link>
                        <Link class="link link-hover text-[14px] font-Inter font-normal text-white-500 normal-case">Terms of service</Link>
                        <Link class="link link-hover text-[14px] font-Inter font-normal text-white-500 normal-case">Legal</Link>
                        <Link class="link link-hover text-[14px] font-Inter font-normal text-white-500 normal-case">Privacy policy</Link>
                        <Link class="link link-hover text-[14px] font-Inter font-normal text-white-500 normal-case">Status</Link>
                    </div>
                    <div>
                        <form className='  flex flex-col text-start md2:mt-0 md2:text-start lg:mt-0 lg:text-start'>
                            <header class=" font-Inter font-semibold text-[20px] leading-[28px] normal-case mb-6">Stay up to data</header>
                            <fieldset class="form-control xm2:w-full w-80 mt-2">
                                <div className=' relative w-full'>
                                    <input type="text" placeholder="Your email address" class="input ps-3 pr-12 placeholder:text-[#D9DBE1] text-[#D9DBE1] bg-white-900 bg-opacity-20 input-bordered w-full max-w-2xl" />
                                    <Link className=' hover:text-green-900 transition duration-150 ease-in-out hover:rotate-[-40deg] absolute top-[10px] right-3 '><HiOutlinePaperAirplane size={25} /></Link>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </footer>
            </div >
        </div >
    );
};

export default Footer;