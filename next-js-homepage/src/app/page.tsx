import Link from "next/link";
import Image from "next/image";
import ProfilePicture from "@/components/ProfilePicture";

export default function Home() {
  return (
    <>
    <div id="entire-site-div">
      <div id="top-card-div" className="flex flex-row justify-evenly items-center min-h-fit px-32 py-48">
        <div className="w-fit">
          <p className="lg:text-5xl md:text-4xl sm:text-3xl">I'm Ben Snaith.</p>
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
      <div id="top-card-div" className="flex flex-row justify-evenly items-center min-h-fit px-32 py-48">
        <div className="w-fit">
          <p className="lg:text-5xl md:text-4xl sm:text-3xl">I'm Ben Snaith.</p>
          <p className="lg:text-5xl md:text-4xl sm:text-3xl mt-2">Computer Science.</p>
          <p className="lg:text-5xl md:text-4xl sm:text-3xl mt-2">2nd Year Student.</p>
          <p className="lg:text-5xl md:text-4xl sm:text-3xl mt-2">Birmingham, UK.</p>
        </div>
        <div className="w-fit">
          <ProfilePicture/>
        </div>
      </div>
    </div>
    </>
  );
}
