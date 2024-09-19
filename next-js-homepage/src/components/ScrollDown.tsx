'use client'

import { BsArrowDown } from "react-icons/bs";
import { useState, useEffect } from "react";

export default function ScrollDown() {

    const isBrowser = () => typeof window !== 'undefined';

    const test = () => {
        if(!isBrowser) return;
        
    }

    return(<button className="flex items-center justify-center w-14 h-14 rounded-full bg-zinc-900 shadow-2xl" onClick={() => test()}><BsArrowDown/></button>);
}