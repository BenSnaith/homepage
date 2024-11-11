'use client';
import { useState } from "react";
import { HoveredLink, Menu, MenuItem, LinkedMenuItem, ProjectItem } from "./navbar-elements";
import siteImage from "../../../public/static/homepage-site.png";
import { cn } from "@/lib/utlis"

export function Navbar({ className }: { className?: string}) {
    const [active, setActive] = useState<string | null>(null);
    return(
        <div
            className={cn("fixed top-10 inset-x-0 max-w-[70vw] mx-auto z-50", className)}
        >
            <Menu setActive={setActive}>
                <LinkedMenuItem href={"#home"} setActive={setActive} active={active} item="home.">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="#about-me">about me.</HoveredLink>
                        <HoveredLink href="#skills">skills.</HoveredLink>
                        <HoveredLink href="#cv">cv.</HoveredLink>
                    </div>
                </LinkedMenuItem>
                <div className="flex-1"></div>
                <MenuItem setActive={setActive} active={active} item="projects.">
                    <div className=" text-sm grid grid-cols-2 gap-10 p-4">
                        <ProjectItem
                            title="Portfolio"
                            href="https://github.com/BenSnaith/homepage"
                            src={siteImage}
                            description="This website, my personal portfolio."
                        />
                        <ProjectItem
                            title="Riusab's Time Travel"
                            href="https://github.com/BenSnaith/RRT"
                            src="https://dummyjson.com/image/140x70"
                            description="A Minecraft 1.21 Mod, aiming to add time travel to minecraft."
                        />
                        <ProjectItem
                            title="riu-bot"
                            href="https://github.com/BenSnaith/riu-bot"
                            src="https://dummyjson.com/image/140x70"
                            description="A Discord Bot created using Discord.js."
                        />
                        <ProjectItem
                            title="Project Manager"
                            href="https://github.com/BenSnaith/Portfolio-3"
                            src="https://dummyjson.com/image/140x70"
                            description="A Project Manager created using MySQL and PHP."
                        />
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="contact.">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="https://github.com/BenSnaith" target="_blank">github.</HoveredLink>
                        <HoveredLink href="https://linkedin.com/in/ben-snaith" target="_blank">linked in.</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
        </div>
    );
}