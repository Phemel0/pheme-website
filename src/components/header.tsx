import Image from "next/image"

function header() {
    return (
    <div>
        <h1>Meltdown</h1>
        <Image 
            src="#placeholder " 
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

export default header