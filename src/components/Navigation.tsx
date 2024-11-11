import ScrollTop from "./ScrollTop";
import ScrollDown from "./ScrollDown";

export function NavigationButtons() {
    return(
        <div className="flex flex-col justify-center items-center bg-zinc-950 fixed bottom-[5vh] right-[5vh] w-20 h-40 gap-5 rounded-full transition-all">
            <ScrollTop />
            <ScrollDown />
        </div>
    );
}