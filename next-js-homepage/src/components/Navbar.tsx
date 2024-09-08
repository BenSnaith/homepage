import Link from "next/link";

export default function Navbar() {

    

    return(
        <div className="flex flex-row items-center justify-center h-20 bg-zinc-900 mx-5 mt-5 rounded-lg">
            <div className="grow ml-10">
                <Link className="hover:text-slate-700" href="/">home.</Link>
            </div>
            <div className="mx-4">
                <Link className="hover:text-slate-700" href="/projects">projects.</Link>
            </div>
            <div className="mx-1.5 mr-10">
                <Link className="hover:text-slate-700" href="/about">about me.</Link>
            </div>
        </div>
    );
}