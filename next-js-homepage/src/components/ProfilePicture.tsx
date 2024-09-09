'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import profilePicture from '../../public/static/riusab.webp';

export default function ProfilePicture() {
    const [width, setWidth] = useState(0);
    const updateWidth = () => {
        const nWidth = window.innerWidth;
        setWidth(nWidth);
    };
    useEffect(() => {
        window.addEventListener("resize", updateWidth);
        updateWidth();
    }, []);

    return(
        <Image
            src={profilePicture}
            alt="an image of me"
            width={(width < 1024) ? "200" : "300"}
            height={(width < 1024) ? "200" : "300"}
        />
    );
};