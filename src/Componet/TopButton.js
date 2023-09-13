import React from 'react';
import { useEffect, useState } from 'react';
import { HiArrowSmallUp } from "react-icons/hi2";
const TopButton = () => {
    const [backToTopButton, setBackToTopButton] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 900) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUP = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    const boxShadow = {
        boxShadow: '0px 3px 8px 0px #080a0b',
    }
    return (
        <>
            {
                backToTopButton && (
                    <button className='fixed z-30 sm1:hidden md:block bottom-72 right-12 bg-green-900   rounded-md flex items-center justify-center w-12 h-12 transition duration-700 ease-in-out  rotate-180 hover:rotate-0' onClick={scrollUP}><HiArrowSmallUp className='animate-bounce rounded-full' color='#080a0b' size={20} style={boxShadow} /></button>
                )
            }
        </>
    );
};

export default TopButton;