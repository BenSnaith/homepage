'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from 'clsx';

export default function Navbar() {

    const pathname = usePathname();

    return(
        <div className="flex flex-row items-center justify-center h-20 bg-zinc-950 mx-5 mt-5 rounded-lg">
            <div className={clsx("grow ml-10")}>
                <Link className={clsx("hover:text-slate-700", { 'text-slate-700': pathname === "/"})} href="/">home.</Link>
            </div>
            <div className="mx-4">
                <Link className={clsx("hover:text-slate-700", { 'text-slate-700': pathname === "/projects"})} href="/projects">projects.</Link>
            </div>
            <div className="mx-1.5 mr-10">
                <Link className={clsx("hover:text-slate-700", { 'text-slate-700': pathname === "/contact"})} href="/contact">contact.</Link>
            </div>
        </div>
    );
}