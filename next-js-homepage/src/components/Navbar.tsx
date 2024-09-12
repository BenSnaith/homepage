'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

export default function Navbar() {

    const pathname = usePathname();

    return(
        <div className="flex flex-row items-center justify-center h-20 bg-zinc-950 mx-5 mt-5 rounded-lg">
            <div className={clsx("grow ml-10")}>
                <Link className={clsx("text-slate-700 hover:text-white hover:drop-shadow-glow transition-all", { 'text-white': pathname === "/"})} href="/">home.</Link>
            </div>
            <div className="mx-4">
                <Link className={clsx("text-slate-700 hover:text-white hover:drop-shadow-glow transition-all", { 'text-white': pathname === "/projects"})} href="/projects">projects.</Link>
            </div>
            <div className="mx-1.5 mr-10">
                <Link className={clsx("text-slate-700 hover:text-white hover:drop-shadow-glow transition-all", { 'text-white': pathname === "/contact"})} href="/contact">contact.</Link>
            </div>
        </div>
    );
}