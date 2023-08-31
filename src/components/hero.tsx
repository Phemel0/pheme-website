import Image from "next/image"
import heroImage  from "../assets/images/heroImage.jpg"

export default function Hero() {
    return (
        <div className="mx-[35px]">
            <div>
                <h1 className="text-[18.625rem] text-center">Meltdown</h1>
                <Image 
                    src={heroImage}
                    alt="placeholderImage" 
                />
            </div>
            <div className="flex pt-[2.62rem]">
                <div className="flex-1 text-[10rem] items-center justify-center">
                    <h2>Starter Kit</h2>
                </div>
                <div className="relative ml-3">
                    <a 
                        href="#"
                        className="text-[1.25rem]">
                        View More +
                    </a>
                </div>
            </div>
        </div>
    )
}
