import Link from "next/link";
import NavBar from "@/app/components/navBar";
import navItems from "@/app/data/navItems";
import Modal from "@/app/components/modal";
import {useState} from "react";
import useModal from "@/app/lib/useModal";

export default function HeroIndex({ children, home }) {

    const [active, setActive] = useState(false)
    const handleClick = () => setActive(!active)

    const {isShowing, toggle} = useModal();


    return (
        <>
        <section
            className="flex flex-row justify-center items-center bg-cover bg-center h-64 sm:h-96 md:h-128 lg:h-160 xl:h-192"
            style={{
                backgroundImage: `url('/image/background-hero-index.gif')`,
            }}
        >
            <div className="flex flex-col text-center">
                <div className="font-bebasNeue font-bold lg:text-8xl text-5xl text-bg50">Blue Prospect Studio</div>
                <div className="text-bg050 text-lg lg:pb-4 pb-2">
                    Crafting Stories, Capturing Moments: Your Vision, Our Passion.
                </div>
                    <div>
                        <Link href=''>
                            <button
                                onClick={toggle}
                                className="bg-tan.900 hover:bg-tan.400 hover:text-bg100 text-xs text-gray.800 uppercase px-4 py-3 rounded-lg md:ml-3 md:mt-0 mt-6">
                                Contact us
                            </button>
                        </Link>
                    </div>
                </div>
        </section>
        <section>
            <Modal
                isShowing={isShowing}
                onClose={toggle}
            />
        </section>
    </>
    )
}


