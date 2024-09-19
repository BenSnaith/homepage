import { DiGithubBadge } from "react-icons/di";
import { MdOutlineEmail } from "react-icons/md";

export default function Footer() {
    
    const date = new Date;
    const currYear = date.getFullYear.toString;

    return(
        <>
        <div className="flex flex-row items-center justify-center h-20 bg-zinc-950 mx-5 mb-5 rounded-lg">
            <div className="flex flex-row justify-between">
                <p>Ben Snaith 2024</p>
            </div>
        </div>
        </>
    );
}