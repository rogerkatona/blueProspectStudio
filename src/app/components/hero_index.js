import Link from "next/link";
import NavBar from "@/app/components/navBar";
import navItems from "@/app/data/navItems";
import Modal from "@/app/components/modal";
import {useState} from "react";

export default function HeroIndex({ toggleModal }) {

    const [active, setActive] = useState(false)
    const handleClick = () => setActive(!active)

    return (
        <>
        <section
            className="flex flex-row justify-center items-center relative overflow-hidden bg-gray-900 h-screen ">

                <video autoPlay muted loop className="absolute inset-0 object-cover w-full h-full">
                    <source src="/image/background-hero-index.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                </video>



            <div className="flex flex-col text-center z-10">
                <div className="font-bebasNeue font-bold lg:text-8xl text-5xl text-bg50">Blue Prospect Studio</div>
                <div className="text-gray.300 text-lg lg:pb-4 pb-2">
                    Crafting Stories, Capturing Moments: Your Vision, Our Passion.
                </div>
                    <div>
                        <Link href=''>
                            <button
                                onClick={toggleModal}
                                className="bg-sand hover:bg-sandLight hover:text-bg100 text-xs text-gray.800 uppercase px-4 py-3 rounded-lg md:ml-3 md:mt-0 mt-6">
                                Contact us
                            </button>
                        </Link>
                    </div>
                </div>
        </section>
    </>
    )
}


