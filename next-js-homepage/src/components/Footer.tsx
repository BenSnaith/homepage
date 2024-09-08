
export default function Footer() {
    
    const date = new Date;
    const currYear = date.getFullYear.toString;

    return(
        <div className="flex flex-row items-center justify-center h-20 bg-zinc-900 mx-5 mb-5 rounded-lg">
            <p>ben snaith 2024, created using next.js</p>
        </div>
    );
}