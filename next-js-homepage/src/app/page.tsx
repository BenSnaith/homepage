import Link from "next/link";
import Image from "next/image";
import profilePicture from '../../public/static/riusab.webp';


export default function Home() {
  return (
    <>
    <div className="flex flex-row justify-evenly min-h-screen px-32 py-48">
      <div className="w-fit">
        <p className="lg:text-6xl md:text-4xl sm:text-2xl">I'm Ben Snaith.</p>
        <p className="lg:text-6xl md:text-4xl sm:text-2xl mt-2">Computer Science.</p>
        <p className="lg:text-6xl md:text-4xl sm:text-2xl mt-2">2nd Year Student.</p>
        <p className="lg:text-6xl md:text-4xl sm:text-2xl mt-2">Birmingham, UK.</p>
      </div>
      <div className="w-fit">
        <Image src={profilePicture} alt="pfp" width={200} height={200}/>
      </div>
    </div>
    </>
  );
}
