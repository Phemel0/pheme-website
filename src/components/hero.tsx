import Image from "next/image"
import heroImage  from "../assets/images/heroImage.jpg"

export default function hero() {
    return (
        <div>
            <h1>Meltdown</h1>
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
