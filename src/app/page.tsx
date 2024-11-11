import Link from "next/link";
import ProfilePicture from "@/components/ProfilePicture";
import ScrollTop from "@/components/ScrollTop";
import CarouselCard from "@/components/CarouselCard";
import testImg from '../../public/static/img.jpg';
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
      <div id="home" className="relative">

        <div id="top-card-div" className="flex flex-row justify-evenly items-center min-h-screen px-10 py-48">
          <div className="w-fit">
            <p className="lg:text-5xl md:text-4xl sm:text-3xl">I'm <Link href={""} className="hover:text-green-600 transition-colors duration-300">Ben Snaith.</Link></p>
            <p className="lg:text-5xl md:text-4xl sm:text-3xl mt-2">Computer Science.</p>
            <p className="lg:text-5xl md:text-4xl sm:text-3xl mt-2">2nd Year Student.</p>
            <p className="lg:text-5xl md:text-4xl sm:text-3xl mt-2">Birmingham, UK.</p>
          </div>
          <div className="w-fit">
            <ProfilePicture/>
          </div>
        </div>

        <div id="about-me" className="flex flex-col justify-evenly items-center min-h-screen px-10 py-32 text-xl text-center">
          <div id="hr-div-one" className="flex flex-row items-center justify-center">
            <hr className="px-32 min-w-96"/>
          </div>
          <div className="w-fit" id="about">
            <p>
            I'm Ben Snaith, I am a Second Year<br/>
            Computer Science student from Birmingham, UK.<br/>
            <br/>
            This site is created with the intention<br/>
            of displaying my projects while also serving<br/>
            as a project in itself to sharpen my Full-Stack<br/>
            and UI/UX skills.<br/>
            <br/>
            Please have a look around :)
            </p>
          </div>
          <div id="hr-div-one" className="flex flex-row items-center justify-center">
            <hr className="px-32 min-w-96"/>
          </div>
        </div>

        <div id="skills" className="flex flex-col justify-evenly items-center min-h-screen px-10 py-32 text-xl text-center">
          <div id="hr-div-one" className="flex flex-row items-center justify-center">
            <hr className="px-32 min-w-96"/>
          </div>

          <div className="grid grid-cols-3 gap-10">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
          </div>

          <div id="hr-div-one" className="flex flex-row items-center justify-center">
            <hr className="px-32 min-w-96"/>
          </div>
        </div>

        {/* <NavigationButtons/> */}
        <ScrollTop/>
      </div>
  );
}
