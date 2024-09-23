'use client';
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utlis";
import Link from "next/link";
import Image from "next/image";

const transition = {
    type: "spring",
    mass: 0.5,
    damping: 11.5,
    stiffness: 100,
    restDelta: 0.001,
    restSpeed: 0.001,
};

export const MenuItem = ({
    setActive,
    active,
    item,
    children,
    className,
}: {
    setActive: (item: string) => void;
    active: string | null;
    item: string,
    children?: React.ReactNode,
    className?: string,
}) => {
    return(
    <div onMouseEnter={() => setActive(item)} className={cn("relative ", className)}>
        <motion.p
            transition={{ duration: 0.3}}
            className="cursor-pointer text-white hover:opacity-[0.7]"
        >
            {item}
        </motion.p>
        {active !== null && (
            <motion.div
                initial={{ opacity: 0, scale: 0.85, y:10}}
                animate={{ opacity: 1, scale: 1, y: 0}}
                transition={transition}
            >
                {active === item && (
                    <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
                        <motion.div
                            transition={transition}
                            layoutId="active"
                            className="bg-zinc-950 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.2] shadow-xl"
                        >
                            <motion.div 
                                layout
                                className="w-max h-full p-4"    
                            >
                                {children}
                            </motion.div>
                        </motion.div>
                    </div>
                )}
            </motion.div>
        )}
    </div>
    );
};

/*
    A Copy of the MenuItem object used to link the "item" field to a <a>
*/
export const LinkedMenuItem = ({
    setActive,
    active,
    item,
    children,
    className,
    href,
}: {
    setActive: (item: string) => void;
    active: string | null;
    item: string,
    children?: React.ReactNode,
    className?: string,
    href: string,
}) => {
    return(
    <div onMouseEnter={() => setActive(item)} className={cn("relative ", className)}>
        <motion.a
            transition={{ duration: 0.3}}
            className="cursor-pointer text-white hover:opacity-[0.7]"
            href={href}
        >
            {item}
        </motion.a>
        {active !== null && (
            <motion.div
                initial={{ opacity: 0, scale: 0.85, y:10}}
                animate={{ opacity: 1, scale: 1, y: 0}}
                transition={transition}
            >
                {active === item && (
                    <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
                        <motion.div
                            transition={transition}
                            layoutId="active"
                            className="bg-zinc-950 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/[0.2] shadow-xl"
                        >
                            <motion.div 
                                layout
                                className="w-max h-full p-4"    
                            >
                                {children}
                            </motion.div>
                        </motion.div>
                    </div>
                )}
            </motion.div>
        )}
    </div>
    );
};

export const Menu = ({
    setActive,
    children,
}: {
    setActive: (item: string | null) => void;
    children: React.ReactNode;
}) => {
    return(
        <nav
            onMouseLeave={() => setActive(null)}
            className=" relative rounded-full border bg-zinc-950 border-white/[0.2] flex justify-center space-x-4 px-8 py-6 "
        >
            {children}
        </nav>
    );
};

export const ProjectItem = ({
    title,
    description,
    href,
    src
}: {
    title: string,
    description: string,
    href: string,
    src: string,
}) => {
    return(
    <Link href={href} className="flex space-x-2">
        <Image
            src={src}
            width={140}
            height={70}
            alt={title}
            className="flex-shrink-0 rounded-md shadow-2xl"
        />
        <div>
            <h4 className="text-xl font-bold mb-1 text-white">
                {title}
            </h4>
            <p className="text-neutral-300 test-sm max-w-[10rem]">
                {description}
            </p>
        </div>
    </Link>
    );
}

export const HoveredLink = ({ children, ...rest }: any) => {
    return(
        <Link 
            {...rest}
            className=" text-white hover:text-neutral-200"
        >
            {children}
        </Link>
    );
};