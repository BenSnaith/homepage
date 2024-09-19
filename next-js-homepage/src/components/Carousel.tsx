'use client'

import CarouselCard from "./CarouselCard";
import testImgXl from '../../public/static/imgxl.jpg';
import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function Carousel() {
    const data = [
        <CarouselCard imageUrl={testImgXl} projectTitle="Homepage" projectDesc="This website, my personal portfolio, created in Next.JS." projectUrl="https://github.com/BenSnaith/homepage"/>,
        <CarouselCard imageUrl={testImgXl} projectTitle="Riu-Bot" projectDesc="A Discord Bot created to help other students learn DSA concepts." projectUrl="https://github.com/BenSnaith/riu-bot"/>,
        <CarouselCard imageUrl={testImgXl} projectTitle="Riusab's Time Travel" projectDesc="A Minecraft Mod created as a personal passion project and a way to develop my Java skills." projectUrl="https://github.com/BenSnaith/RTT"/>,
        <CarouselCard imageUrl={testImgXl} projectTitle="PHP Project Manager" projectDesc="A PHP Project which communcates with a MySQL Database in order to store projects and user credentials." projectUrl="https://github.com/BenSnaith/Portfolio-3"/>,
        <CarouselCard imageUrl={testImgXl} projectTitle="Github Profile" projectDesc="My github profile." projectUrl="https://github.com/BenSnaith"/>,
    ]
    const [currentIndex, setCurrentIndex] = useState(3);

    const currNext = () => {
        if(currentIndex != 4)
            setCurrentIndex(currentIndex + 1);
    }

    const currPrev = () => {
        if(currentIndex != 0)
            setCurrentIndex(currentIndex - 1);
    }

    return(
        <div id="carousel-body" className="flex flex-row justify-center items-center">
            <button onClick={() => currPrev()}><BsArrowLeft/></button>
                {data[currentIndex]}
            <button onClick={() => currNext()}><BsArrowRight/></button>
        </div>
    );
}