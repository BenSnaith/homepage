import Image, { StaticImageData } from "next/image"
import Link from "next/link"

interface Props {
    imageUrl: StaticImageData,
    projectUrl: string,
    projectTitle: string,
    projectDesc: string,
};

export default function CarouselCard({imageUrl, projectUrl, projectTitle, projectDesc} : Props) {
    return(
        <div className="flex flex-col items-center justify-center min-w-[100%] w-[100%] h-fit transition-all">
            <Link href={projectUrl} target={"_blank"} >
                <Image
                    src={imageUrl}
                    alt={projectTitle}
                    width={700}
                    height={500}
                    className="rounded-xl"
                />
            </Link>
            <div>
                <p className="my-8 text-md">{projectTitle}</p>
                <p className="text-sm">{projectDesc}</p>
            </div>
        </div>
    )
}