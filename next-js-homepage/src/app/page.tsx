import Link from "next/link";
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';

export default function Home() {
  return (
    // Nameplate page
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col min-w-96 min-h-64 text-center mt-50 mb-64 items-center justify-center relative">
        <p className="text-5xl text-zinc-300">Ben Snaith</p>
        <p className="text-xl text-zinc-700">Computer Science</p>
      </div>
      <div>
        <Link href="#main">
        <ArrowDownCircleIcon className="text-zinc-300 size-10"/>
        </Link>
      </div>
    </div>
    // what am i doing section
    
  );
}
