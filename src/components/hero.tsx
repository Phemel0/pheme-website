import Image from "next/image"
import heroImage  from "../assets/images/heroImage.jpg"

export default function hero() {
    return (
        <div className="">
            <h1 className="text-[298px] text-center">Meltdown</h1>
            <Image 
                src={heroImage}
                alt="placeholderImage" 
            />
            <h2>Starter Kit</h2>
            <a 
                href="#"
                className="">
                View More +
            </a>
        </div>
    )
}
