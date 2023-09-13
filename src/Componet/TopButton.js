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
    return (
        <>
            {
                backToTopButton && (
                    <button className='fixed bottom-32 right-12 bg-green-900   rounded-md flex items-center justify-center animate-bounce w-12 h-12' onClick={scrollUP}><HiArrowSmallUp color='#080a0b' size={25} /></button>
                )
            }
        </>
    );
};

export default TopButton;