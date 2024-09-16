'use client'

import { BsArrowDown } from "react-icons/bs";
import { useState, useEffect } from "react";

export default function ScrollDown() {

    let scrollVar = 1200;

    const handleScroll = () => {
        if(window.scrollY < 200) {
            scrollVar = 1200;
        }
        else if(window.scrollY > 1100 && window.scrollY < 2000) {
            scrollVar = 2400;
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    const isBrowser = () => typeof window !== 'undefined';

    const test = () => {
        if(!isBrowser) return;
        window.scrollTo(0, scrollVar);
    }

    return(<button className="flex items-center justify-center w-14 h-14 rounded-full bg-zinc-900 shadow-2xl" onClick={() => test()}><BsArrowDown/></button>);
}