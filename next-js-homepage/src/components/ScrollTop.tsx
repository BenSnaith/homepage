'use client';

import clsx from "clsx";
import { BsArrowUp } from "react-icons/bs";
import { useState, useEffect } from "react";

export default function ScrollTop() {

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if(window.scrollY > 90) {
            setIsVisible(true);
        }
        else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const isBrowser = () => typeof window !== 'undefined';

    const toTop = () => {
        if(!isBrowser) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    console.log(window.scrollY);
    console.log(isVisible);

    return(
        <button className={clsx("fixed bottom-28 right-14", {'hidden' : isVisible === false})} onClick={() => toTop()}> <BsArrowUp /> </button>
    );
}