import Link from "next/link";
import Image from "next/image";
import ProfilePicture from "@/components/ProfilePicture";
import ScrollTop from "@/components/ScrollTop";

export default function Home() {
  return (
    <>
    <div id="entire-site-div">
      <div id="top-card-div" className="flex flex-row justify-evenly items-center min-h-fit px-32 py-48">
        <div className="w-fit">
          <p className="lg:text-5xl md:text-4xl sm:text-3xl">I'm <Link href={""} className="hover:text-green-600 transition-all ease-in-out">Ben Snaith.</Link></p>
          <p className="lg:text-5xl md:text-4xl sm:text-3xl mt-2">Computer Science.</p>
          <p className="lg:text-5xl md:text-4xl sm:text-3xl mt-2">2nd Year Student.</p>
          <p className="lg:text-5xl md:text-4xl sm:text-3xl mt-2">Birmingham, UK.</p>
        </div>
        <div className="w-fit">
          <ProfilePicture/>
        </div>
      </div>
      <div id="hr-div-one" className="flex flex-row items-center justify-center">
        <hr className="px-32 min-w-96"/>
      </div>
      <div id="skills-section" className="flex flex-col justify-center items-center">
        <h1 className="text-4xl my-16">Skills</h1>
        <ScrollTop />
        <div id="skills-grid" className="grid grid-cols-3 gap-x-48 gap-y-20 text-2xl text-center mb-12">
          <p>Next.JS</p>
          <p>Java</p>
          <p>C/C++</p>
          <p>SQL/RDB</p>
          <p>HTML/CSS</p>
          <p>Docker</p>
        </div>
      </div>
    </div>
    </>
  );
}
